/* EarthRoster Firebase Cloud Messaging bridge — V219
   Uses the user's Firebase project + VAPID key to register this Home Screen app
   for inactive/closed-app push notifications. The phone token is saved through
   Netlify Functions, then server-side functions send FCM notifications. */
(function(){
  'use strict';
  const firebaseConfig = {
    apiKey: "AIzaSyC7AiVzGgano89UhaCJ9a-Y_6G6mI9prRE",
    authDomain: "earthroster-bba1f.firebaseapp.com",
    projectId: "earthroster-bba1f",
    storageBucket: "earthroster-bba1f.firebasestorage.app",
    messagingSenderId: "615276511768",
    appId: "1:615276511768:web:4b23ef0d3806dd4040b96d",
    measurementId: "G-6T16ZGW2D3"
  };
  const FCM_VAPID_PUBLIC_KEY = "BEaNDLilkJUyEMDNMJkhB8c0Wjsshc_xdYEGNi3Jh942AFp7e4dYn9ILYAGfDKa1in9kdn7hCbdVBVPh-aFb3k8";
  const CDN = 'https://www.gstatic.com/firebasejs/10.14.1/';
  const FCM_SUBSCRIBE_ENDPOINT = '/.netlify/functions/fcm-subscribe';
  window.__WW_FIREBASE_PUSH_STATUS = { ready:false, tokenSaved:false, error:'starting' };

  function loadScript(src){
    return new Promise((resolve,reject)=>{
      const existing=[...document.scripts].find(s=>s.src===src);
      if(existing){ resolve(); return; }
      const s=document.createElement('script');
      s.src=src; s.async=true; s.crossOrigin='anonymous';
      s.onload=()=>resolve(); s.onerror=()=>reject(new Error('Could not load '+src));
      document.head.appendChild(s);
    });
  }
  async function ensureFirebase(){
    if(window.firebase && firebase.apps && firebase.apps.length){ return firebase; }
    await loadScript(CDN+'firebase-app-compat.js');
    await loadScript(CDN+'firebase-messaging-compat.js');
    if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    window.__WW_FIREBASE_PUSH_STATUS.ready=true;
    return firebase;
  }
  function safeMe(){ try{ return typeof window.me==='function' ? window.me() : null; }catch(e){ return null; } }
  function safeDeviceId(){ try{ return typeof window.deviceId==='function' ? window.deviceId() : (localStorage.getItem('ww_device_id')||'device'); }catch(e){ return 'device'; } }
  function isStandalone(){ try{return !!((window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone);}catch(e){return false;} }
  function toastSafe(msg){ try{ if(typeof window.toast==='function') window.toast(msg); }catch(e){} }
  async function messagingSupported(fb){
    try{
      if(fb.messaging && typeof fb.messaging.isSupported==='function') return await fb.messaging.isSupported();
      return ('serviceWorker' in navigator) && ('Notification' in window) && location.protocol==='https:';
    }catch(e){ return false; }
  }
  async function activeServiceWorker(){
    if(!('serviceWorker' in navigator)) throw new Error('service worker unavailable');
    let reg = await navigator.serviceWorker.getRegistration('/');
    if(!reg) reg = await navigator.serviceWorker.register('/sw.js',{updateViaCache:'none'});
    if(reg && reg.update) reg.update().catch(()=>{});
    return await navigator.serviceWorker.ready;
  }
  async function saveTokenToServer(token, u){
    const payload={
      userId:u.id, role:u.role||'', name:u.name||'', deviceId:safeDeviceId(), token,
      installed:isStandalone(), platform:navigator.platform||'', userAgent:navigator.userAgent||'', updatedAt:new Date().toISOString()
    };
    const res=await fetch(FCM_SUBSCRIBE_ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});
    const data=await res.json().catch(()=>({}));
    if(!res.ok || !data.ok) throw new Error(data.error || 'FCM token was not saved');
    try{ localStorage.setItem('ww_fcm_token_saved_'+u.id, new Date().toISOString()); }catch(e){}
    window.__WW_FIREBASE_PUSH_STATUS.tokenSaved=true;
    window.__WW_FIREBASE_PUSH_STATUS.tokenTail=String(token).slice(-10);
    window.__WW_FIREBASE_PUSH_STATUS.error='';
    return true;
  }
  async function registerFirebasePush(force){
    const u=safeMe();
    if(!u){ window.__WW_FIREBASE_PUSH_STATUS.error='Sign in first'; return false; }
    if(!('Notification' in window)){ window.__WW_FIREBASE_PUSH_STATUS.error='Notifications not supported'; return false; }
    if(location.protocol!=='https:' && location.hostname!=='localhost'){
      window.__WW_FIREBASE_PUSH_STATUS.error='HTTPS required';
      if(force) toastSafe('Deploy online with HTTPS first, then enable Firebase phone alerts.');
      return false;
    }
    if(Notification.permission!=='granted'){
      const p = await Notification.requestPermission();
      if(p!=='granted'){
        window.__WW_FIREBASE_PUSH_STATUS.error='Notification permission not granted';
        if(force) toastSafe('Phone notifications are not allowed yet.');
        return false;
      }
    }
    const fb=await ensureFirebase();
    if(!(await messagingSupported(fb))){
      window.__WW_FIREBASE_PUSH_STATUS.error='Firebase Messaging not supported here';
      if(force) toastSafe('Firebase Messaging is not supported on this browser/device.');
      return false;
    }
    const reg=await activeServiceWorker();
    const messaging=fb.messaging();
    const token=await messaging.getToken({ vapidKey: FCM_VAPID_PUBLIC_KEY, serviceWorkerRegistration: reg });
    if(!token) throw new Error('No Firebase phone token returned');
    await saveTokenToServer(token,u);
    try{
      messaging.onMessage(function(payload){
        window.__WW_FIREBASE_PUSH_STATUS.lastForeground=Date.now();
        // App-open notifications stay in-app only; the OS phone banner is handled by background/server push.
        if(payload && payload.data && payload.data.body && typeof window.toast==='function') window.toast(payload.data.body);
      });
    }catch(e){}
    if(force) toastSafe('Firebase inactive push connected to this phone');
    try{ if(typeof window.ww216RefreshPushStatus==='function') setTimeout(()=>window.ww216RefreshPushStatus(false),300); }catch(e){}
    return true;
  }
  window.wwRegisterFirebasePush = registerFirebasePush;

  function patchWhenReady(){
    try{
      if(window.__WW_FCM_PATCHED) return;
      window.__WW_FCM_PATCHED=true;
      const oldRegister=window.registerPushSubscription;
      if(typeof oldRegister==='function'){
        window.registerPushSubscription = registerPushSubscription = async function(force){
          let oldOk=false; try{ oldOk=await oldRegister.apply(this,arguments); }catch(e){}
          let fcmOk=false; try{ fcmOk=await registerFirebasePush(!!force); }catch(e){ window.__WW_FIREBASE_PUSH_STATUS.error=e.message||String(e); }
          return !!(fcmOk || oldOk);
        };
      }
      const oldReq=window.requestPhoneNotifications;
      if(typeof oldReq==='function'){
        window.requestPhoneNotifications = requestPhoneNotifications = async function(){
          let ok=false; try{ ok=await oldReq.apply(this,arguments); }catch(e){}
          try{ ok = (await registerFirebasePush(true)) || ok; }catch(e){ window.__WW_FIREBASE_PUSH_STATUS.error=e.message||String(e); }
          return !!ok;
        };
      }
      const oldTest=window.sendServerPushTest;
      if(typeof oldTest==='function'){
        window.sendServerPushTest = sendServerPushTest = async function(){
          try{ await registerFirebasePush(true); }catch(e){}
          return oldTest.apply(this,arguments);
        };
      }
    }catch(e){}
  }
  function autoTry(){
    try{
      patchWhenReady();
      const u=safeMe();
      if(u && Notification && Notification.permission==='granted') registerFirebasePush(false).catch(e=>{window.__WW_FIREBASE_PUSH_STATUS.error=e.message||String(e);});
    }catch(e){}
  }
  document.addEventListener('click',function(e){
    const el=e.target&&e.target.closest?e.target.closest('[data-action]'):null;
    if(!el) return;
    const a=el.dataset.action||'';
    if(a==='request-notifications'||a==='ww216-enable-inactive-push'||a==='test-phone-notification'||a==='ww216-test-inactive-push'){
      setTimeout(()=>registerFirebasePush(true).catch(err=>{window.__WW_FIREBASE_PUSH_STATUS.error=err.message||String(err);}),120);
    }
  },true);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(autoTry,1000)); else setTimeout(autoTry,1000);
  setInterval(autoTry,5*60*1000);
  document.addEventListener('visibilitychange',()=>{ if(!document.hidden) setTimeout(autoTry,800); });
})();
