/* WW_V201_FIREBASE_LIVE_CHAT_BACKGROUND_ONLY
   Firebase-connected live chat + typing only. Phone notifications stay on the single Netlify Web Push path.
   No visible connection toast and no Firebase FCM registration, to prevent duplicate/self phone alerts. */
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
  const WEB_PUSH_KEY = "BJsLHN_5AU5zIUn_8hwxE1z4IcWwNbuMHgY31pUvdInqWbUA9QnuMgQmZmzK1h2ChCiiU25bDDNZZFiCpD54lxM";

  const FB = {
    ready:false, db:null, messaging:null, fs:null, msg:null,
    metaUnsub:null, msgUnsub:null, typingUnsub:null, watchedThread:'',
    tokenTriedAt:0, lastRenderDigest:'', lastToken:''
  };
  window.__WW_FIREBASE_STATUS = {ready:false, mode:'starting'};

  const CDN = 'https://www.gstatic.com/firebasejs/10.14.1/';
  const nowIsoSafe = () => (typeof nowIso === 'function' ? nowIso() : new Date().toISOString());
  const safeMe = () => { try { return (typeof me === 'function') ? me() : null; } catch(e){ return null; } };
  const safeState = () => { try { return state || null; } catch(e){ return null; } };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const idSafe = id => String(id || '').replace(/[\/]/g,'_') || 'unknown';
  const tokenDocId = token => String(token||'').replace(/[^A-Za-z0-9_-]/g,'_').slice(0,180) || 'token';

  function currentThread(){
    try{ const st=safeState(); return st && Array.isArray(st.threads) ? st.threads.find(t=>t && t.id===st.activeThreadId) : null; }catch(e){ return null; }
  }
  function visibleThread(t,u){
    if(!t || !u) return false;
    if(t.id==='team-all'||t.type==='team'||t.id==='announce'||t.type==='announcement'||t.id==='before-after'||t.type==='workphotos') return true;
    return Array.isArray(t.memberIds) && t.memberIds.includes(u.id);
  }
  function normalThread(t){
    return {
      id:String(t.id||''),
      type:t.type||'dm',
      name:t.name||'',
      privacy:t.privacy||'',
      memberIds:Array.isArray(t.memberIds)?t.memberIds.filter(Boolean):[],
      updatedAt:t.updatedAt||nowIsoSafe()
    };
  }
  function normalMessage(m){
    const out = JSON.parse(JSON.stringify(m||{}));
    out.id = String(out.id || (typeof uid==='function'?uid('m'):'m_'+Date.now()));
    out.authorId = out.authorId || (safeMe()&&safeMe().id) || '';
    out.text = out.text || '';
    out.createdAt = out.createdAt || out.clientCreatedAt || out.updatedAt || nowIsoSafe();
    out.updatedAt = out.updatedAt || out.createdAt;
    out.clientCreatedAt = out.clientCreatedAt || out.createdAt;
    out.createdAtMs = (typeof parseStampToEpoch==='function'?parseStampToEpoch(out.createdAt):Date.parse(out.createdAt)) || Date.now();
    return out;
  }
  function stripFirestoreMessage(d){
    const m = Object.assign({}, d || {});
    delete m.createdAtMs;
    delete m.firebaseCreatedAt;
    return m;
  }
  function mergeThreadMeta(docData){
    try{
      const st=safeState(); if(!st) return;
      if(!Array.isArray(st.threads)) st.threads=[];
      const u=safeMe();
      const incoming=normalThread(docData||{});
      if(!visibleThread(incoming,u)) return;
      let t=st.threads.find(x=>x && x.id===incoming.id);
      if(!t){
        t={...incoming,messages:[]};
        st.threads.push(t);
      } else {
        ['type','name','privacy','updatedAt'].forEach(k=>{ if(incoming[k] != null) t[k]=incoming[k]; });
        if(incoming.memberIds && incoming.memberIds.length) t.memberIds=incoming.memberIds;
        if(!Array.isArray(t.messages)) t.messages=[];
      }
      if(typeof normalisePublicThreads==='function') normalisePublicThreads(st);
      if(typeof saveLocalState==='function') saveLocalState(st);
    }catch(e){}
  }
  function mergeMessages(threadId, firebaseMessages){
    try{
      const st=safeState(); if(!st) return;
      if(!Array.isArray(st.threads)) st.threads=[];
      let t=st.threads.find(x=>x && x.id===threadId);
      if(!t){ t={id:threadId,type:'dm',name:'',memberIds:[],messages:[]}; st.threads.push(t); }
      if(!Array.isArray(t.messages)) t.messages=[];
      const byId={};
      t.messages.forEach(m=>{ if(m&&m.id) byId[m.id]=m; });
      firebaseMessages.forEach(m=>{
        if(!m || !m.id) return;
        byId[m.id]=Object.assign({}, byId[m.id]||{}, stripFirestoreMessage(m));
      });
      t.messages = (typeof messagesChronological==='function') ? messagesChronological(Object.values(byId)) : Object.values(byId).sort((a,b)=>(a.createdAt||'').localeCompare(b.createdAt||''));
      const last=t.messages[t.messages.length-1];
      if(last) t.updatedAt=last.updatedAt||last.createdAt||nowIsoSafe();
      if(typeof saveLocalState==='function') saveLocalState(st);
      const active = st.activeTab==='chat' && st.activeThreadId===threadId;
      if(active){
        if(typeof markActiveThreadReadIfVisible==='function') markActiveThreadReadIfVisible();
        if(typeof renderAfterMessageSync==='function') renderAfterMessageSync();
        else if(typeof render==='function') render();
        setTimeout(()=>{ try{ if(typeof scrollChat==='function') scrollChat(); }catch(e){} },20);
      } else if(typeof render==='function' && st.activeTab==='chat') {
        render();
      }
    }catch(e){ console.warn('Firebase message merge failed', e); }
  }
  function mergeTyping(threadId, rows){
    try{
      const st=safeState(); if(!st) return;
      if(!st.typing) st.typing={};
      st.typing[threadId]=st.typing[threadId]||{};
      const current=st.typing[threadId];
      Object.keys(current).forEach(uid=>{ if(current[uid] && String(current[uid]).startsWith('firebase-clear-')) delete current[uid]; });
      rows.forEach(r=>{
        if(!r || !r.userId) return;
        if(r.isTyping) current[r.userId]=r.updatedAt||nowIsoSafe();
        else delete current[r.userId];
      });
      if(typeof saveLocalState==='function') saveLocalState(st);
      if(typeof liveUpdateTyping==='function') liveUpdateTyping();
    }catch(e){}
  }
  function threadRef(threadId){ return FB.fs.doc(FB.db,'earthroster_threads',idSafe(threadId)); }
  function msgRef(threadId,msgId){ return FB.fs.doc(FB.db,'earthroster_threads',idSafe(threadId),'messages',idSafe(msgId)); }
  function typingRef(threadId,userId){ return FB.fs.doc(FB.db,'earthroster_threads',idSafe(threadId),'typing',idSafe(userId)); }

  async function ensureThreadDoc(t){
    if(!FB.ready || !t || !t.id) return;
    await FB.fs.setDoc(threadRef(t.id), normalThread(t), {merge:true});
  }
  async function writeMessage(threadId,msg){
    if(!FB.ready || !threadId || !msg) return false;
    const st=safeState();
    const t=st && Array.isArray(st.threads) ? st.threads.find(x=>x&&x.id===threadId) : null;
    if(t) await ensureThreadDoc(t);
    const clean=normalMessage(msg);
    await FB.fs.setDoc(msgRef(threadId, clean.id), clean, {merge:true});
    if(t) await FB.fs.setDoc(threadRef(threadId), {updatedAt:clean.updatedAt||clean.createdAt,lastMessage:clean.text||'Attachment',lastAuthorId:clean.authorId,lastMessageId:clean.id}, {merge:true});
    sendServerPushForMessage(t,clean);
    return true;
  }
  async function writeTyping(threadId,isTyping){
    if(!FB.ready || !threadId) return;
    const u=safeMe(); if(!u) return;
    await FB.fs.setDoc(typingRef(threadId,u.id), {userId:u.id,userName:u.name||'',isTyping:!!isTyping,updatedAt:nowIsoSafe(),updatedAtMs:Date.now()}, {merge:true});
  }

  async function sendServerPushForMessage(t,msg){
    // V200: Firebase is used for live chat speed only. Phone notifications are sent
    // once through the Netlify message-sync/web-push path, so iPhones do not receive
    // duplicate notifications for the same message.
    try{ if(msg) msg.__serverPushSent=true; window.__WW_FIREBASE_STATUS.notifyServer='netlify-single-path'; }catch(e){}
    return false;
  }

  function startMetaWatch(){
    try{
      if(!FB.ready || FB.metaUnsub || !safeMe()) return;
      FB.metaUnsub = FB.fs.onSnapshot(FB.fs.collection(FB.db,'earthroster_threads'), snap=>{
        snap.docChanges().forEach(ch=>{ if(ch.type!=='removed') mergeThreadMeta(Object.assign({id:ch.doc.id}, ch.doc.data()||{})); });
      });
    }catch(e){ console.warn('Firebase thread watch failed',e); }
  }
  function stopActiveWatch(){
    try{ if(FB.msgUnsub) FB.msgUnsub(); }catch(e){}
    try{ if(FB.typingUnsub) FB.typingUnsub(); }catch(e){}
    FB.msgUnsub=null; FB.typingUnsub=null; FB.watchedThread='';
  }
  function watchActiveThread(){
    try{
      if(!FB.ready || !safeMe()) return;
      const st=safeState(); const tid=st && st.activeTab==='chat' ? st.activeThreadId : '';
      if(!tid){ stopActiveWatch(); return; }
      if(FB.watchedThread===tid) return;
      stopActiveWatch(); FB.watchedThread=tid;
      const q=FB.fs.query(FB.fs.collection(FB.db,'earthroster_threads',idSafe(tid),'messages'), FB.fs.orderBy('createdAtMs','asc'), FB.fs.limit(500));
      FB.msgUnsub=FB.fs.onSnapshot(q, snap=>{
        const rows=[]; snap.forEach(d=>rows.push(Object.assign({id:d.id}, d.data()||{})));
        mergeMessages(tid,rows);
      }, err=>console.warn('Firebase message watch failed',err));
      FB.typingUnsub=FB.fs.onSnapshot(FB.fs.collection(FB.db,'earthroster_threads',idSafe(tid),'typing'), snap=>{
        const rows=[]; snap.forEach(d=>rows.push(Object.assign({userId:d.id}, d.data()||{})));
        mergeTyping(tid,rows);
      }, err=>console.warn('Firebase typing watch failed',err));
    }catch(e){ console.warn('Firebase active watch failed',e); }
  }
  async function seedVisibleThreads(){
    try{
      if(!FB.ready || !safeMe()) return;
      const st=safeState(); if(!st||!Array.isArray(st.threads)) return;
      for(const t of st.threads){ if(visibleThread(t,safeMe())) await ensureThreadDoc(t); }
    }catch(e){}
  }

  async function ensurePushToken(force){
    // V201: disabled Firebase FCM token registration. The app uses one Web Push path only.
    try{ window.__WW_FIREBASE_STATUS.pushToken='disabled-single-web-push'; }catch(e){}
    return false;
  }
  function requestPushFromUserTap(){
    // V201: notification permission is handled by the app's Web Push flow only.
    return false;
  }


  function hookAppFunctions(){
    try{
      const oldPush = pushMessageToCloud;
      pushMessageToCloud = async function(threadId,msg){
        let ok=false;
        try{ ok=await writeMessage(threadId,msg); }catch(e){ console.warn('Firebase send failed',e); }
        // Keep old Netlify/local sync as fallback only. Firebase is the live path.
        try{ if(typeof oldPush==='function') oldPush(threadId,msg); }catch(e){}
        return ok;
      };
    }catch(e){}
    try{
      const oldSetTyping = setTyping;
      setTyping = function(threadId){
        try{ if(typeof oldSetTyping==='function') oldSetTyping(threadId); }catch(e){}
        writeTyping(threadId,true);
      };
      const oldClearTyping = clearTyping;
      clearTyping = function(threadId){
        try{ if(typeof oldClearTyping==='function') oldClearTyping(threadId); }catch(e){}
        writeTyping(threadId,false);
      };
    }catch(e){}
  }

  async function boot(){
    try{
      const [appMod, fsMod] = await Promise.all([
        import(CDN+'firebase-app.js'),
        import(CDN+'firebase-firestore.js')
      ]);
      const app = appMod.initializeApp(firebaseConfig);
      FB.fs = fsMod;
      FB.msg = null;
      FB.messaging = null;
      FB.db = fsMod.getFirestore(app);
      FB.ready=true;
      window.__WW_FIREBASE_STATUS={ready:true,mode:'firestore-live-background-only',projectId:firebaseConfig.projectId,pushToken:'disabled'};
      hookAppFunctions();
      seedVisibleThreads();
      startMetaWatch();
      ensurePushToken(true);
      setInterval(()=>{ startMetaWatch(); watchActiveThread(); ensurePushToken(false); },850);
      document.addEventListener('visibilitychange',()=>{ if(!document.hidden){ startMetaWatch(); watchActiveThread(); ensurePushToken(false); } });
      window.addEventListener('online',()=>{ startMetaWatch(); watchActiveThread(); ensurePushToken(true); });
      document.addEventListener('click',requestPushFromUserTap,true);
      // V201: run live chat silently in the background.
    }catch(e){
      console.warn('Firebase live chat could not start',e);
      window.__WW_FIREBASE_STATUS={ready:false,mode:'failed',error:String(e&&e.message||e)};
    }
  }
  boot();
})();
