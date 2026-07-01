// v218-general-push-single-path-fix
/* EarthRoster / Westwonders service worker
   Update-proof: always serves fresh index.html + app.js from the network so
   deploys reach the phone, and never lets stale CSS/markup stick around. */
const CACHE = 'ww-v218-general-push-single-path-fix-20260701';

const RECENT_NOTIFICATION_WINDOW_MS = 10 * 60 * 1000;
self.__wwRecentNotificationTags = self.__wwRecentNotificationTags || {};
function wwShouldSkipDuplicateNotification(tag){
  if(!tag) return false;
  const now = Date.now();
  const recent = self.__wwRecentNotificationTags;
  Object.keys(recent).forEach(k=>{ if(now - recent[k] > RECENT_NOTIFICATION_WINDOW_MS) delete recent[k]; });
  if(recent[tag]) return true;
  recent[tag] = now;
  return false;
}

self.__wwCurrentUserId = self.__wwCurrentUserId || '';
self.addEventListener('message', event => {
  const data = event && event.data ? event.data : {};
  if(data && data.type === 'ww-current-user' && data.userId){
    self.__wwCurrentUserId = String(data.userId);
  }
});
function wwCleanText(v, fallback){
  const t = String(v || fallback || '').replace(/\s+/g,' ').trim();
  return t.length > 130 ? t.slice(0,127) + '…' : t;
}
function wwCanonicalNotificationKey(title, body, rawData, fallbackTag){
  const kind = String(rawData.kind || '');
  const msgId = String(rawData.messageId || '');
  const alertId = String(rawData.alertId || '');
  const shiftId = String(rawData.shiftId || '');
  const shiftReminderKey = String(rawData.shiftReminderKey || '');
  const bookingId = String(rawData.bookingId || '');
  const pushKey = String(rawData.pushKey || '');
  if(pushKey) return pushKey;
  if(shiftReminderKey) return 'shiftReminder:' + shiftReminderKey;
  if(msgId) return 'message:' + msgId;
  if(alertId) return 'alert:' + alertId;
  if(kind === 'booking' && bookingId && fallbackTag) return 'booking:' + bookingId + ':' + fallbackTag;
  if(kind && shiftId) return kind + ':' + shiftId;
  if(fallbackTag) return String(fallbackTag);
  return 'body:' + wwCleanText(title,'') + '|' + wwCleanText(body,'');
}
function wwIsSelfNotification(rawData){
  const sender = String(rawData.authorId || rawData.senderId || rawData.fromUserId || '');
  return !!(sender && self.__wwCurrentUserId && sender === self.__wwCurrentUserId);
}

/* Firebase Cloud Messaging background support disabled in V201.
   Live chat still uses Firestore, but phone notifications now use ONE Web Push path only.
   This prevents duplicate iPhone alerts and sender/self alerts caused by old FCM tokens. */

const ASSETS = [
  '/', '/index.html', '/app.js', '/firebase-live.js',
  '/site.webmanifest', '/manifest.webmanifest', '/logo.png', '/apple-touch-icon.png', '/favicon-32x32.png', '/favicon-16x16.png',
  '/icons/icon-192x192.png', '/icons/icon-512x512.png',
  '/icons/maskable-192x192.png', '/icons/maskable-512x512.png'
];

self.addEventListener('install', e => {
  // Activate the new worker right away instead of waiting for old tabs to close.
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    // Nuke every old cache so previous CSS/markup can't be served again.
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
    // Tell open pages to reload so the new version shows immediately.
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    clients.forEach(c => { c.postMessage({ type: 'ww-updated' }); c.postMessage({ type: 'ww-updated-v216-login-push-fix' }); });
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // don't touch API/CDN
  const path = url.pathname;

  // ALWAYS network-first for the app shell + code so deploys land instantly.
  if (req.mode === 'navigate' || path === '/' || path === '/index.html' || path === '/app.js' || path === '/sw.js') {
    e.respondWith(
      fetch(req, { cache: 'no-store' }).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req.mode === 'navigate' ? '/index.html' : req, copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match(req).then(m => m || caches.match('/index.html')))
    );
    return;
  }

  // Cache-first for static assets (icons), refreshed in the background.
  e.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});

/* ---- Push notifications ---- */
self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}
  const rawData = { ...(data.data || {}) };
  if(data.kind && !rawData.kind) rawData.kind = data.kind;
  if(data.threadId && !rawData.threadId) rawData.threadId = data.threadId;
  if(data.messageId && !rawData.messageId) rawData.messageId = data.messageId;
  if(data.alertId && !rawData.alertId) rawData.alertId = data.alertId;
  if(data.shiftId && !rawData.shiftId) rawData.shiftId = data.shiftId;
  if(data.authorId && !rawData.authorId) rawData.authorId = data.authorId;
  if(data.senderId && !rawData.senderId) rawData.senderId = data.senderId;

  if(wwIsSelfNotification(rawData)){
    event.waitUntil(Promise.resolve());
    return;
  }

  const title = wwCleanText(data.title || rawData.title, 'Westwondersandco');
  const body = wwCleanText(data.body || rawData.body, 'Open the app to view this update.');
  let targetUrl = data.url || rawData.url || '/';
  try {
    const u = new URL(targetUrl, self.location.origin);
    if (rawData.kind && !u.searchParams.get('kind')) u.searchParams.set('kind', rawData.kind);
    if (rawData.threadId && !u.searchParams.get('threadId')) u.searchParams.set('threadId', rawData.threadId);
    if (rawData.messageId && !u.searchParams.get('messageId')) u.searchParams.set('messageId', rawData.messageId);
    if (rawData.alertId && !u.searchParams.get('alertId')) u.searchParams.set('alertId', rawData.alertId);
    if (rawData.shiftId && !u.searchParams.get('shiftId')) u.searchParams.set('shiftId', rawData.shiftId);
    targetUrl = u.pathname + u.search + u.hash;
  } catch (e) {}
  const canonicalKey = wwCanonicalNotificationKey(title, body, rawData, data.tag || rawData.tag);
  if(wwShouldSkipDuplicateNotification(canonicalKey)){
    event.waitUntil(Promise.resolve());
    return;
  }
  const options = {
    body,
    icon: data.icon || rawData.icon || '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    tag: canonicalKey,
    data: { ...rawData, tag: canonicalKey, url: targetUrl },
    renotify: false,
    requireInteraction: false,
    timestamp: Date.now()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const data = event.notification && event.notification.data ? event.notification.data : {};
  let target = data.url || '/';
  try {
    const u = new URL(target, self.location.origin);
    if (data.kind && !u.searchParams.get('kind')) u.searchParams.set('kind', data.kind);
    if (data.threadId && !u.searchParams.get('threadId')) u.searchParams.set('threadId', data.threadId);
    if (data.messageId && !u.searchParams.get('messageId')) u.searchParams.set('messageId', data.messageId);
    if (data.alertId && !u.searchParams.get('alertId')) u.searchParams.set('alertId', data.alertId);
    if (data.shiftId && !u.searchParams.get('shiftId')) u.searchParams.set('shiftId', data.shiftId);
    target = u.href;
  } catch (e) { target = '/'; }
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) {
        try {
          const cu = new URL(c.url);
          if (cu.origin === self.location.origin) {
            if ('navigate' in c) return c.navigate(target).then(client => client ? client.focus() : c.focus());
            if ('focus' in c) return c.focus();
          }
        } catch (e) {}
      }
      if (self.clients.openWindow) return self.clients.openWindow(target);
    })
  );
});


self.addEventListener('pushsubscriptionchange', event => {
  // Tell open clients to resubscribe if the browser rotates the endpoint.
  event.waitUntil((async () => {
    const clients = await self.clients.matchAll({ type:'window', includeUncontrolled:true }).catch(()=>[]);
    clients.forEach(c=>{ try{ c.postMessage({ type:'ww-resubscribe-push' }); }catch(e){} });
  })());
});
