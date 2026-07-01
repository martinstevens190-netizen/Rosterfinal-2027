
/* WW_V131_ROSTER_SKINNY_RUNTIME_START */
(function(){
  try{
    if(document.getElementById('ww-v131-roster-skinny-runtime'))return;
    const st=document.createElement('style');
    st.id='ww-v131-roster-skinny-runtime';
    st.textContent=`@media (max-width:1023px){
      .rst-hero.admin,.rst-hero.staff{padding:11px 12px 12px!important;border-radius:18px!important;margin:8px 10px 10px!important;min-height:0!important;box-shadow:0 9px 20px rgba(14,34,20,.22)!important}
      .rst-hero-bg{opacity:.5!important}
      /* fixed 3-col grid: arrows pinned, date in the flexible middle — never collide */
      .rst-hero-top{display:grid!important;grid-template-columns:36px minmax(0,1fr) 36px!important;align-items:center!important;gap:9px!important;min-height:0!important}
      .rst-nav{width:36px!important;height:36px!important;min-width:36px!important;min-height:36px!important;border-radius:12px!important}
      .rst-nav svg{width:16px!important;height:16px!important}
      .rst-hero-label{min-width:0!important;text-align:center!important;overflow:hidden!important}
      .rst-eyebrow{display:block!important;font-size:9px!important;line-height:1!important;letter-spacing:.14em!important;margin:0 0 3px!important}
      .rst-hero-label strong{display:block!important;font-size:clamp(15px,4.9vw,19px)!important;line-height:1.04!important;letter-spacing:-.018em!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;max-width:100%!important}
      .rst-hero.admin .rst-hero-foot,.rst-hero.staff .rst-hero-foot{display:flex!important;flex-wrap:wrap!important;align-items:stretch!important;gap:8px 0!important;margin-top:9px!important;background:transparent!important;border:0!important;border-radius:0!important}
      .rst-hero.admin .rst-hs,.rst-hero.staff .rst-hs{flex:1 1 0!important;min-height:0!important;padding:8px 5px 7px!important;border-radius:0!important;background:rgba(255,255,255,.075)!important;border:1px solid rgba(255,255,255,.10)!important;display:flex!important;flex-direction:column!important;align-items:center!important;gap:2px!important;position:relative!important}
      .rst-hero.admin .rst-hs:first-of-type,.rst-hero.staff .rst-hs:first-of-type{border-radius:13px 0 0 13px!important;border-right:0!important}
      .rst-hero.admin .rst-hs:nth-of-type(2),.rst-hero.staff .rst-hs:nth-of-type(2){border-radius:0 13px 13px 0!important;border-left:0!important}
      .rst-hero.admin .rst-hs:nth-of-type(2)::before,.rst-hero.staff .rst-hs:nth-of-type(2)::before{content:""!important;position:absolute!important;left:0!important;top:22%!important;bottom:22%!important;width:1px!important;background:rgba(255,255,255,.14)!important}
      .rst-hero.admin .rst-hs strong,.rst-hero.staff .rst-hs strong{font-size:18px!important;line-height:1!important}
      .rst-hero.admin .rst-hs em,.rst-hero.staff .rst-hs em{font-size:8.5px!important;line-height:1!important;letter-spacing:.07em!important;margin-top:0!important}
      .rst-hero.admin .rst-hero-add,.rst-hero.staff .rst-hero-add{flex:0 0 100%!important;width:100%!important;order:2!important;min-height:40px!important;height:auto!important;padding:0 14px!important;border-radius:13px!important;font-size:14px!important;gap:8px!important;box-shadow:0 6px 14px rgba(8,24,12,.22),inset 0 1px 0 rgba(255,255,255,.85)!important}
      .rst-hero.admin .rst-hero-add .rha-ic,.rst-hero.staff .rst-hero-add .rha-ic{width:26px!important;height:26px!important;min-width:26px!important}
      .rst-hero.admin .rst-hero-add svg,.rst-hero.staff .rst-hero-add svg{width:14px!important;height:14px!important}
    }
    @media (max-width:380px){
      .rst-hero.admin,.rst-hero.staff{padding:9px 10px 10px!important;margin:7px 8px 9px!important}
      .rst-hero-top{grid-template-columns:32px minmax(0,1fr) 32px!important;gap:7px!important}
      .rst-nav{width:32px!important;height:32px!important;min-width:32px!important;min-height:32px!important}
      .rst-hero-label strong{font-size:clamp(14px,4.6vw,17px)!important}
      .rst-hero.admin .rst-hero-foot,.rst-hero.staff .rst-hero-foot{gap:7px 0!important;margin-top:8px!important}
      .rst-hero.admin .rst-hs strong,.rst-hero.staff .rst-hs strong{font-size:16.5px!important}
      .rst-hero.admin .rst-hero-add,.rst-hero.staff .rst-hero-add{min-height:38px!important;font-size:13px!important;padding:0 12px!important}
    }`;
    document.head.appendChild(st);
  }catch(e){}
})();
/* WW_V131_ROSTER_SKINNY_RUNTIME_END */

/* ============================================================
   WESTWONDERSANDCO — MERGED WORKFORCE SUITE · app.js (v109 smooth stability + mobile staff names only)
   Vanilla JS · localStorage · admin + employee roles
   ============================================================ */
'use strict';

/* ---------- V106 desktop performance patch ---------- */
function wwIsDesktop(){return !!(window.matchMedia&&window.matchMedia('(min-width:1024px)').matches);}
(function installDesktopSpeedPatch(){
  try{
    if(document.getElementById('ww-v106-desktop-speed-runtime'))return;
    const st=document.createElement('style');
    st.id='ww-v106-desktop-speed-runtime';
    st.textContent='@media (min-width:1024px){html,body,#app,.shell,.main,.content{scroll-behavior:auto!important}*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.page{animation:none!important;opacity:1!important;transform:none!important;will-change:auto!important}.modal-overlay,.modal{animation:none!important;transition:none!important}.modal{transform:none!important}.icon-btn,.topbar,.modal,.card,.panel,.shift-card,.wk-col,.wk-shift,.emp-shift,.dashboard-card,.update-card,.chat-card,.thread-row,.directory-card,.client-card,.toast,.btn,.nav-item{-webkit-backdrop-filter:none!important;backdrop-filter:none!important;filter:none!important;will-change:auto!important}.ring-fg,.live-dot,.presence-dot,.dot,.pulse{animation:none!important;transition:none!important}}';
    document.head.appendChild(st);
  }catch(e){}

})();

/* ---------- V202 admin booking reminders UI ---------- */
(function installBookingReminderStyles(){
  try{
    if(document.getElementById('ww-v202-bookings-style'))return;
    const st=document.createElement('style');
    st.id='ww-v202-bookings-style';
    st.textContent=`
      .bookings-page{display:flex;flex-direction:column;gap:18px;max-width:1120px;margin:0 auto;padding-bottom:24px}
      .bk-hero{position:relative;overflow:hidden;border-radius:28px;padding:24px;background:linear-gradient(145deg,#16351f,#264a2c 56%,#a66d48);color:#fff;box-shadow:0 18px 42px rgba(12,34,18,.22)}
      .bk-hero::after{content:"";position:absolute;right:-80px;top:-90px;width:230px;height:230px;border-radius:50%;background:rgba(255,255,255,.10);box-shadow:-95px 105px 0 rgba(255,255,255,.055);pointer-events:none}
      .bk-hero-row{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:flex-start;gap:18px}
      .bk-eyebrow{display:inline-flex;align-items:center;gap:7px;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.20);font-size:11px;font-weight:900;letter-spacing:.10em;text-transform:uppercase}
      .bk-hero h1{margin:12px 0 6px;font-size:clamp(32px,5vw,58px);line-height:.98;letter-spacing:-.04em;font-family:Georgia,serif;color:#fff}
      .bk-hero p{margin:0;max-width:680px;color:rgba(255,255,255,.82);font-weight:650;line-height:1.45}
      .bk-hero-add{border:0;display:inline-flex;align-items:center;gap:10px;background:#fff;color:#18341f;border-radius:18px;padding:14px 16px;font-weight:950;box-shadow:0 10px 22px rgba(5,22,10,.24);white-space:nowrap;cursor:pointer}
      .bk-hero-add svg{width:19px;height:19px}
      .bk-stats{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:22px}
      .bk-stat{background:rgba(255,255,255,.11);border:1px solid rgba(255,255,255,.17);border-radius:18px;padding:13px 14px;display:flex;flex-direction:column;gap:2px}
      .bk-stat strong{font-size:26px;line-height:1;font-weight:950;color:#fff}.bk-stat span{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.72)}
      .bk-filter{display:flex;gap:8px;overflow:auto;padding:0 1px 2px}.bk-filter button{border:1px solid rgba(25,50,30,.12);background:#fff;color:#526055;border-radius:999px;padding:10px 13px;font-weight:900;white-space:nowrap;cursor:pointer}.bk-filter button.active{background:#18341f;color:#fff;border-color:#18341f}
      .bk-list{display:grid;gap:12px}.bk-card{background:rgba(255,255,255,.92);border:1px solid rgba(24,52,31,.10);border-radius:24px;padding:16px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;box-shadow:0 12px 30px rgba(19,38,22,.09)}
      .bk-card.due{border-color:rgba(176,76,52,.42);box-shadow:0 14px 34px rgba(144,53,39,.13)}.bk-card.done{opacity:.72}.bk-card.rostered{border-color:rgba(43,110,66,.22)}
      .bk-topline{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:8px}.bk-chip{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:6px 9px;font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.05em;background:#ecf4ec;color:#295f38}.bk-chip.urgent{background:#f7e1dd;color:#a23e31}.bk-chip.source{background:#eee7df;color:#7c5436}.bk-chip.rostered{background:#e5f3e7;color:#226c3d}.bk-chip.done{background:#ecefed;color:#6a736d}
      .bk-card h3{margin:0 0 5px;font-size:24px;line-height:1.05;letter-spacing:-.03em;color:#233126}.bk-card .bk-sub{display:flex;flex-wrap:wrap;gap:10px;color:#647067;font-weight:750}.bk-card .bk-sub span{display:inline-flex;align-items:center;gap:6px}.bk-card .bk-sub svg{width:15px;height:15px}.bk-notes{margin:10px 0 0;color:#435046;line-height:1.42;font-weight:650}.bk-actions{display:flex;flex-direction:column;gap:8px;min-width:150px}.bk-actions .btn{justify-content:center}.bk-empty{background:#fff;border:1px dashed rgba(25,50,30,.18);border-radius:24px;padding:36px 18px;text-align:center;color:#68756b}.bk-empty svg{width:42px;height:42px;color:#7d957f}.bk-empty h3{margin:10px 0 4px;color:#203324}
      .bk-form-note{padding:12px 13px;border-radius:16px;background:#f2f6ef;border:1px solid rgba(24,52,31,.10);color:#4a584d;font-weight:700;line-height:1.45}.bk-filebox{display:flex;align-items:center;gap:12px;border:1px dashed rgba(31,71,40,.28);background:#f8faf5;border-radius:18px;padding:12px}.bk-filebox img{width:54px;height:54px;object-fit:cover;border-radius:12px}.bk-filebox span{display:block;color:#647067;font-size:12px;font-weight:800}.bk-view-img{max-width:100%;border-radius:18px;box-shadow:0 12px 30px rgba(0,0,0,.18)}
      .hm-bookings{width:100%;border:0;border-radius:22px;background:linear-gradient(135deg,#fff,#f5f1e8);box-shadow:0 12px 26px rgba(25,43,27,.09);padding:16px;display:flex;align-items:center;gap:14px;text-align:left;color:#203324;cursor:pointer;border:1px solid rgba(24,52,31,.10);margin:8px 0 6px}.hm-bookings-ic{width:48px;height:48px;border-radius:17px;display:grid;place-items:center;background:#18341f;color:#fff}.hm-bookings-ic svg{width:22px;height:22px}.hm-bookings-txt{display:flex;flex-direction:column;gap:3px;min-width:0}.hm-bookings-txt strong{font-size:18px;line-height:1;font-weight:950}.hm-bookings-txt span{font-weight:750;color:#647067}.hm-bookings-go{margin-left:auto;transform:rotate(180deg);opacity:.6}
      @media (max-width:720px){.bookings-page{gap:13px}.bk-hero{border-radius:22px;padding:18px}.bk-hero-row{flex-direction:column}.bk-hero-add{width:100%;justify-content:center}.bk-stats{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.bk-card{grid-template-columns:1fr;border-radius:20px;padding:14px}.bk-actions{min-width:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.bk-actions .btn.primary-wide{grid-column:1/-1}.bk-card h3{font-size:20px}}
    `;
    document.head.appendChild(st);
  }catch(e){}
})();


/* ---------- payroll constants ---------- */
const WW_PAY_RATE = 35;
const WW_KM_RATE = 0.99;
const WW_PAY_DAY_OFFSET = 10; // Monday week start + 10 days = Thursday pay day after the week ends

/* ---------- date helpers ---------- */
const DAY = 86400000;
const pad = n => String(n).padStart(2,'0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today = () => iso(new Date());
function addDays(dStr,n){const d=new Date(dStr+'T00:00:00');d.setDate(d.getDate()+n);return iso(d);}
function startOfWeek(dStr){const d=new Date(dStr+'T00:00:00');const wd=(d.getDay()+6)%7;d.setDate(d.getDate()-wd);return iso(d);}
function weekDates(anchor){const s=startOfWeek(anchor);return Array.from({length:7},(_,i)=>addDays(s,i));}
const DOW=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DOWL=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function fmtDate(dStr){const d=new Date(dStr+'T00:00:00');return `${DOW[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]}`;}
function fmtDateLong(dStr){const d=new Date(dStr+'T00:00:00');return `${DOWL[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]}`;}
function fmtTime(t){if(!t)return'';let[h,m]=t.split(':').map(Number);const ap=h>=12?'pm':'am';h=h%12||12;return `${h}:${pad(m)}${ap}`;}
function timeSelect(id,value){
  value=value||'09:00';
  let opts='';
  // ensure the current value is present even if off the 15-min grid
  const grid=[];
  for(let m=0;m<24*60;m+=15){grid.push(`${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`);}
  if(!grid.includes(value))grid.push(value);
  grid.sort();
  grid.forEach(t=>{
    const [h,mi]=t.split(':').map(Number);
    const ap=h<12?'AM':'PM';let h12=h%12;if(h12===0)h12=12;
    const label=`${h12}:${String(mi).padStart(2,'0')} ${ap}`;
    opts+=`<option value="${t}" ${t===value?'selected':''}>${label}</option>`;
  });
  return `<select class="input time-select" id="${id}">${opts}</select>`;
}
function durationHrs(start,end){const a=start.split(':').map(Number),b=end.split(':').map(Number);let mins=(b[0]*60+b[1])-(a[0]*60+a[1]);if(mins<0)mins+=1440;return mins/60;}

/* ---------- Victoria (AU) address autocomplete ---------- */
/* [suburb, postcode] — greater Melbourne + major Victorian regional centres.
   Best match ranked to the top (prefix > word-start > contains). */
const VIC_SUBURBS=[
  ['Melbourne','3000'],['Carlton','3053'],['Carlton North','3054'],['Fitzroy','3065'],['Fitzroy North','3068'],['Collingwood','3066'],['Abbotsford','3067'],['Richmond','3121'],['Cremorne','3121'],['South Yarra','3141'],['Prahran','3181'],['Windsor','3181'],['St Kilda','3182'],['St Kilda East','3183'],['Elwood','3184'],['Balaclava','3183'],['Albert Park','3206'],['Middle Park','3206'],['Port Melbourne','3207'],['South Melbourne','3205'],['Southbank','3006'],['Docklands','3008'],['North Melbourne','3051'],['West Melbourne','3003'],['East Melbourne','3002'],['Parkville','3052'],['Kensington','3031'],['Flemington','3031'],['Ascot Vale','3032'],['Moonee Ponds','3039'],['Essendon','3040'],['Brunswick','3056'],['Brunswick East','3057'],['Brunswick West','3055'],['Coburg','3058'],['Pascoe Vale','3044'],['Northcote','3070'],['Thornbury','3071'],['Preston','3072'],['Reservoir','3073'],['Clifton Hill','3068'],['Fairfield','3078'],['Alphington','3078'],['Hawthorn','3122'],['Hawthorn East','3123'],['Kew','3101'],['Kew East','3102'],['Camberwell','3124'],['Canterbury','3126'],['Box Hill','3128'],['Box Hill North','3129'],['Doncaster','3108'],['Doncaster East','3109'],['Balwyn','3103'],['Balwyn North','3104'],['Surrey Hills','3127'],['Mont Albert','3127'],['Glen Iris','3146'],['Ashburton','3147'],['Malvern','3144'],['Malvern East','3145'],['Armadale','3143'],['Toorak','3142'],['Caulfield','3162'],['Caulfield North','3161'],['Caulfield South','3162'],['Elsternwick','3185'],['Brighton','3186'],['Brighton East','3187'],['Bentleigh','3204'],['Bentleigh East','3165'],['McKinnon','3204'],['Ormond','3204'],['Carnegie','3163'],['Murrumbeena','3163'],['Hughesdale','3166'],['Oakleigh','3166'],['Oakleigh South','3167'],['Clayton','3168'],['Clayton South','3169'],['Mount Waverley','3149'],['Glen Waverley','3150'],['Wheelers Hill','3150'],['Mulgrave','3170'],['Springvale','3171'],['Noble Park','3174'],['Keysborough','3173'],['Footscray','3011'],['West Footscray','3012'],['Seddon','3011'],['Yarraville','3013'],['Maidstone','3012'],['Maribyrnong','3032'],['Braybrook','3019'],['Sunshine','3020'],['Sunshine North','3020'],['Albion','3020'],['St Albans','3021'],['Deer Park','3023'],['Caroline Springs','3023'],['Williamstown','3016'],['Newport','3015'],['Spotswood','3015'],['Altona','3018'],['Altona North','3025'],['Altona Meadows','3028'],['Laverton','3028'],['Point Cook','3030'],['Werribee','3030'],['Hoppers Crossing','3029'],['Tarneit','3029'],['Truganina','3029'],['Wyndham Vale','3024'],['Manor Lakes','3024'],['Heidelberg','3084'],['Heidelberg Heights','3081'],['Ivanhoe','3079'],['Rosanna','3084'],['Macleod','3085'],['Bundoora','3083'],['Mill Park','3082'],['Epping','3076'],['Lalor','3075'],['Thomastown','3074'],['South Morang','3752'],['Mernda','3754'],['Doreen','3754'],['Greensborough','3088'],['Watsonia','3087'],['Montmorency','3094'],['Eltham','3095'],['Research','3095'],['Diamond Creek','3089'],['Hurstbridge','3099'],['Templestowe','3106'],['Templestowe Lower','3107'],['Bulleen','3105'],['Lower Plenty','3093'],['Mitcham','3132'],['Vermont','3133'],['Vermont South','3133'],['Forest Hill','3131'],['Blackburn','3130'],['Blackburn North','3130'],['Nunawading','3131'],['Ringwood','3134'],['Ringwood East','3135'],['Croydon','3136'],['Croydon North','3136'],['Kilsyth','3137'],['Bayswater','3153'],['Bayswater North','3153'],['Boronia','3155'],['Ferntree Gully','3156'],['Rowville','3178'],['Wantirna','3152'],['Wantirna South','3152'],['Scoresby','3179'],['Knoxfield','3180'],['Mooroolbark','3138'],['Lilydale','3140'],['Chirnside Park','3116'],['Mount Evelyn','3796'],['Cheltenham','3192'],['Mentone','3194'],['Parkdale','3195'],['Mordialloc','3195'],['Aspendale','3195'],['Edithvale','3196'],['Chelsea','3196'],['Bonbeach','3196'],['Carrum','3197'],['Patterson Lakes','3197'],['Sandringham','3191'],['Hampton','3188'],['Highett','3190'],['Moorabbin','3189'],['Dingley Village','3172'],['Heatherton','3202'],['Frankston','3199'],['Frankston South','3199'],['Frankston North','3200'],['Seaford','3198'],['Carrum Downs','3201'],['Langwarrin','3910'],['Mornington','3931'],['Mount Eliza','3930'],['Mount Martha','3934'],['Dromana','3936'],['Rosebud','3939'],['Rye','3941'],['Sorrento','3943'],['Hastings','3915'],['Somerville','3912'],['Cranbourne','3977'],['Cranbourne North','3977'],['Clyde','3978'],['Clyde North','3978'],['Berwick','3806'],['Beaconsfield','3807'],['Officer','3809'],['Pakenham','3810'],['Narre Warren','3805'],['Narre Warren South','3805'],['Hampton Park','3976'],['Lynbrook','3975'],['Lyndhurst','3975'],['Dandenong','3175'],['Dandenong North','3175'],['Dandenong South','3175'],['Endeavour Hills','3802'],['Hallam','3803'],['Doveton','3177'],['Emerald','3782'],['Belgrave','3160'],['Upwey','3158'],['Sunbury','3429'],['Diggers Rest','3427'],['Melton','3337'],['Melton South','3338'],['Melton West','3337'],['Bacchus Marsh','3340'],['Gisborne','3437'],['Macedon','3440'],['Romsey','3434'],['Kyneton','3444'],['Woodend','3442'],['Craigieburn','3064'],['Roxburgh Park','3064'],['Mickleham','3064'],['Greenvale','3059'],['Broadmeadows','3047'],['Glenroy','3046'],['Tullamarine','3043'],['Airport West','3042'],['Keilor','3036'],['Keilor East','3033'],['Keilor Downs','3038'],['Taylors Lakes','3038'],['Sydenham','3037'],['Hillside','3037'],['Geelong','3220'],['Geelong West','3218'],['Newtown','3220'],['Belmont','3216'],['Highton','3216'],['Grovedale','3216'],['Waurn Ponds','3216'],['Corio','3214'],['Norlane','3214'],['Lara','3212'],['Ocean Grove','3226'],['Barwon Heads','3227'],['Torquay','3228'],['Jan Juc','3228'],['Armstrong Creek','3217'],['Leopold','3224'],['Drysdale','3222'],['Ballarat','3350'],['Ballarat East','3350'],['Ballarat North','3350'],['Wendouree','3355'],['Sebastopol','3356'],['Delacombe','3356'],['Alfredton','3350'],['Bendigo','3550'],['Bendigo East','3550'],['Kangaroo Flat','3555'],['Golden Square','3555'],['Eaglehawk','3556'],['Strathfieldsaye','3551'],['Epsom','3551'],['Shepparton','3630'],['Mooroopna','3629'],['Kialla','3631'],['Wodonga','3690'],['Wangaratta','3677'],['Benalla','3672'],['Mildura','3500'],['Swan Hill','3585'],['Echuca','3564'],['Warrnambool','3280'],['Portland','3305'],['Hamilton','3300'],['Horsham','3400'],['Ararat','3377'],['Stawell','3380'],['Colac','3250'],['Bairnsdale','3875'],['Sale','3850'],['Traralgon','3844'],['Morwell','3840'],['Moe','3825'],['Warragul','3820'],['Drouin','3818'],['Leongatha','3953'],['Wonthaggi','3995'],['Cowes','3922'],['Lakes Entrance','3909'],['Castlemaine','3450'],['Maryborough','3465'],['Daylesford','3460'],['Healesville','3777'],['Yarra Glen','3775'],['Warburton','3799'],['Seymour','3660'],['Kilmore','3764'],['Wallan','3756'],['Beveridge','3753'],['Aberfeldie','3040'],['Strathmore','3041'],['Oak Park','3046'],['Hadfield','3046'],['Fawkner','3060'],['Gowanbrae','3043'],['Jacana','3047'],['Meadow Heights','3048'],['Dallas','3047'],['Coolaroo','3048'],['Campbellfield','3061'],['Somerton','3062'],['Westmeadows','3049'],['Attwood','3049'],['Bellfield','3081'],['Yallambie','3085'],['Viewbank','3084'],['Briar Hill','3088'],['St Helena','3088'],['Plenty','3090'],['Yarrambat','3091'],['Wattle Glen','3096'],['Kangaroo Ground','3097'],['Panton Hill','3759'],['Cottles Bridge','3099'],['Donvale','3111'],['Park Orchards','3114'],['Warrandyte','3113'],['Wonga Park','3115'],['Ringwood North','3134'],['Heathmont','3135'],['Wandin North','3139'],['Seville','3139'],['Coldstream','3770'],['Montrose','3765'],['Kalorama','3766'],['Olinda','3788'],['Sassafras','3787'],['Tecoma','3160'],['Selby','3159'],['Menzies Creek','3159'],['Cockatoo','3781'],['Gembrook','3783'],['Pakenham Upper','3810'],['Nar Nar Goon','3812'],['Garfield','3814'],['Bunyip','3815'],['Longwarry','3816'],['Maddingley','3340'],['Darley','3340'],['Hopetoun Park','3340'],['Rockbank','3335'],['Aintree','3336'],['Fraser Rise','3336'],['Plumpton','3335'],['Thornhill Park','3335'],['Cobblebank','3338'],['Strathtulloh','3338'],['Weir Views','3338'],['Brookfield','3338'],['Eynesbury','3338'],['Mambourin','3024'],['Little River','3211'],['Lovely Banks','3213'],['Bell Post Hill','3215'],['Hamlyn Heights','3215'],['Herne Hill','3218'],['Manifold Heights','3218'],['East Geelong','3219'],['St Albans Park','3219'],['Whittington','3219'],['Marshall','3216'],['Mount Duneed','3217'],['Charlemont','3217'],['Clifton Springs','3222'],['Curlewis','3222'],['Portarlington','3223'],['Indented Head','3223'],['St Leonards','3223'],['Anglesea','3230'],['Aireys Inlet','3231'],['Lorne','3232'],['Apollo Bay','3233'],['Winchelsea','3241'],['Bannockburn','3331'],['Mount Duneed','3216'],['Riddells Creek','3431'],['New Gisborne','3438'],['Lancefield','3435'],['Mount Macedon','3441'],['Trentham','3458'],['Hepburn Springs','3461'],['Clunes','3370'],['Creswick','3363'],['Buninyong','3357'],['Mount Clear','3350'],['Canadian','3350'],['Bonshaw','3352'],['Smythes Creek','3351'],['Miners Rest','3352'],['Maiden Gully','3551'],['Marong','3515'],['Junortoun','3551'],['Huntly','3551'],['White Hills','3550'],['North Bendigo','3550'],['Spring Gully','3550'],['Flora Hill','3550'],['Kennington','3550'],['Quarry Hill','3550'],['Ironbark','3550'],['California Gully','3556'],['Long Gully','3550'],['Mooroopna North','3629'],['Tatura','3616'],['Numurkah','3636'],['Cobram','3644'],['Yarrawonga','3730'],['Nathalia','3638'],['Kyabram','3620'],['Rochester','3561'],['Heathcote','3523'],['Kerang','3579'],['Cohuna','3568'],['Maffra','3860'],['Stratford','3862'],['Heyfield','3858'],['Rosedale','3847'],['Yarram','3971'],['Foster','3960'],['Korumburra','3950'],['Inverloch','3996'],['San Remo','3925'],['Newhaven','3925'],['Phillip Island','3922'],['Grantville','3984'],['Lang Lang','3984'],['Koo Wee Rup','3981'],['Tooradin','3980'],['Cranbourne East','3977'],['Cranbourne West','3977'],['Cranbourne South','3977'],['Botanic Ridge','3977'],['Junction Village','3977'],['Devon Meadows','3977'],['Skye','3977'],['Sandhurst','3977'],['Cardinia','3978'],['Pearcedale','3912'],['Tyabb','3913'],['Bittern','3918'],['Crib Point','3919'],['Balnarring','3926'],['Merricks','3916'],['Red Hill','3937'],['Flinders','3929'],['Blairgowrie','3942'],['Portsea','3944'],['Safety Beach','3936'],['Mount Eliza','3930'],['Baxter','3911'],['Sandy Point','3959']
];
function capitalizeWords(s){return s.replace(/\b\w/g,c=>c.toUpperCase());}
function addressField(id,value,label){
  return `<div class="field addr-field">
    <label>${label||'Address'}</label>
    <div class="addr-wrap">
      <input class="input addr-input" id="${id}" data-action="addr-input" value="${escapeHtml(value||'')}" placeholder="Start typing a street or suburb…" autocomplete="off" autocorrect="off" autocapitalize="words" spellcheck="false" inputmode="text" name="ww-addr-${id}" aria-autocomplete="list" role="combobox" data-lpignore="true" data-form-type="other">
      <div class="addr-suggest" id="${id}_suggest"></div>
    </div>
  </div>`;
}
function rankSuburbs(lc){
  const pref=[],word=[],has=[];
  for(const pair of VIC_SUBURBS){
    const n=pair[0].toLowerCase(), pc=pair[1];
    if(n.startsWith(lc)) pref.push(pair);
    else if(n.split(' ').some(w=>w.startsWith(lc))) word.push(pair);
    else if(n.includes(lc)||pc.startsWith(lc)) has.push(pair);
  }
  return pref.concat(word,has);
}
function addressSuggestions(q){
  q=(q||'').trim();
  if(q.length<2)return [];
  const lc=q.toLowerCase();
  const out=[];
  const numMatch=q.match(/^\s*\d+[a-z]?(?:\/\d+[a-z]?)?\s+\S+/i);
  if(numMatch){
    const commaIdx=q.indexOf(',');
    let streetPart, suburbHint='';
    if(commaIdx>=0){
      streetPart=capitalizeWords(q.slice(0,commaIdx).trim());
      suburbHint=q.slice(commaIdx+1).trim().toLowerCase();
    }else{
      // No comma: treat the trailing word as a possible suburb hint if it
      // looks like the start of a known suburb (e.g. "12 High St Pres" -> Preston).
      const words=q.trim().split(/\s+/);
      const lastWord=(words[words.length-1]||'').toLowerCase();
      const looksLikeSuburb=lastWord.length>=3 && VIC_SUBURBS.some(p=>p[0].toLowerCase().startsWith(lastWord));
      const streetTypes=['st','street','rd','road','ave','avenue','dr','drive','ct','court','cres','crescent','pde','parade','way','tce','terrace','cl','close','blvd','boulevard','pl','place','lane','ln','hwy','highway','grove','gr'];
      if(looksLikeSuburb && !streetTypes.includes(lastWord)){
        streetPart=capitalizeWords(words.slice(0,-1).join(' '));
        suburbHint=lastWord;
      }else{
        streetPart=capitalizeWords(q.trim());
      }
    }
    const ranked=suburbHint?rankSuburbs(suburbHint):VIC_SUBURBS;
    for(const pair of ranked){ if(out.length>=8)break; out.push(`${streetPart}, ${pair[0]} VIC ${pair[1]}`); }
  }else{
    for(const pair of rankSuburbs(lc)){ if(out.length>=8)break; out.push(`${pair[0]} VIC ${pair[1]}`); }
  }
  return [...new Set(out)].slice(0,8);
}

function fmtDur(start,end){const h=durationHrs(start,end);const hh=Math.floor(h),mm=Math.round((h-hh)*60);return mm?`${hh}h ${mm}m`:`${hh}h`;}
const uid = p => p+'_'+Math.random().toString(36).slice(2,9);

// ---- Native-style haptic feedback ----
// Uses the Vibration API where supported (Android/Chrome). iOS Safari ignores
// navigator.vibrate, but the call is harmless there. Different actions get
// different feel: light tick for taps, a short double-buzz for confirmations,
// a longer buzz for destructive/error actions.
function wwHaptic(action){
  try{
    if(!('vibrate' in navigator)) return;
    const a=String(action||'');
    const heavy=['do-login','save-clockout','clock-in','clock-out','reject-shift','delete','remove','archive'];
    const success=['accept-shift','save','approve','mark-paid','post','send-message','new-chat','save-admin-entry'];
    let pattern=8; // default light tick
    if(heavy.some(h=>a.includes(h))) pattern=[14];
    else if(success.some(s=>a.includes(s))) pattern=[6,40,6];
    navigator.vibrate(pattern);
  }catch(e){}
}

const APP_TZ = 'Australia/Melbourne';
function nowIso(){ return new Date().toISOString(); }
function fmtStampTime(stamp){
  try{
    // Interpret the stamp through parseStampToEpoch so bare local strings are
    // read as Melbourne time. This keeps the displayed time stable and correct
    // regardless of the viewer's device timezone (stops times "playing up").
    let when;
    if(typeof parseStampToEpoch==='function'){
      const ep=parseStampToEpoch(stamp);
      when=ep?new Date(ep):new Date(stamp);
    }else{
      when=new Date(stamp);
    }
    return new Intl.DateTimeFormat('en-AU',{timeZone:APP_TZ,hour:'numeric',minute:'2-digit',hour12:true}).format(when);
  }catch(e){
    const s=String(stamp||''); return s.length>=16?fmtTime(s.slice(11,16)):'';
  }
}
function fmtStampDateTime(stamp){
  try{
    return new Intl.DateTimeFormat('en-AU',{timeZone:APP_TZ,weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',hour12:true}).format(new Date(stamp));
  }catch(e){ return String(stamp||''); }
}
function recordStamp(o){ return (o && (o.createdAt || o.clientCreatedAt || o.serverReceivedAt || o.updatedAt)) || ''; }
function todayMelbourne(){
  try{
    const parts=new Intl.DateTimeFormat('en-CA',{timeZone:APP_TZ,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).reduce((a,p)=>(a[p.type]=p.value,a),{});
    return `${parts.year}-${parts.month}-${parts.day}`;
  }catch(e){ return today(); }
}
function initials(name){return name.split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();}

/* ---------- seed data ---------- */
function seed(){
  const sw = startOfWeek(today());
  // ---- FRESH INSTALL ----
  // Clean slate ready for real data. Only one admin login is kept so you can
  // sign in and import your real employees and clients. No demo employees,
  // clients, shifts, messages, timesheets, documents, availability or updates.
  return {
    version:16,
    activeTab:'home',
    sessionUserId:null,
    rosterAnchor:sw,
    rosterDate:today(),
    timesheetAnchor:sw,
    timesheetDate:today(),
    adminTimesheetAnchor:sw,
    adminTimesheetDate:today(),
    activeThreadId:'team-all',
    clockSubTab:'clock',
    shiftResponses:{},
    clockState:{},
    company:{name:'Westwondersandco', tagline:'Eco-friendly cleaning, professionally managed'},
    users:[
      {id:'u1',role:'admin',status:'active',name:'Sophie Westley',title:'Founder / Admin',email:'admin@earthroster.app',password:'admin123',phone:'',address:'',dob:'',emergencyName:'',emergencyPhone:'',note:'Employer account',payType:'Salary',payRate:0,kmRate:0,bankName:'',taxFile:'',photo:''},
    ],
    clients:[],
    shifts:[],
    clockRecords:[],
    documents:[],
    availability:{},
    weeklyAvail:{},
    updates:[],
    deletedUpdates:{},
    threads:[
      {id:'team-all',type:'team',name:'Whole Team',memberIds:['u1'],messages:[]},
      {id:'announce',type:'announcement',name:'Announcements',memberIds:['u1'],messages:[]},
    ],
    alerts:[],
  };
}

/* ---------- persistence ---------- */
const STORE_KEY='westwonders_workforce_power_state_v9_fresh';
const BACKUP_LIST_KEY=STORE_KEY+'_backup_index';
let state;

/* ---------- data safety / recovery ----------
   The app is local-first. These helpers stop a fresh/cloud state from wiping
   clients, employees, messages or shifts already saved on this device. */
function dataScore(s){
  try{
    const employees=(s.users||[]).filter(u=>u&&u.role==='employee'&&!u._deleted).length;
    const clients=(s.clients||[]).filter(c=>c&&!c._deleted).length;
    const shifts=(s.shifts||[]).filter(x=>x&&!x._deleted).length;
    const clocks=(s.clockRecords||[]).filter(x=>x&&!x._deleted).length;
    const docs=(s.documents||[]).filter(x=>x&&!x._deleted).length;
    const bookings=(s.bookingReminders||[]).filter(x=>x&&!x._deleted).length;
    const msgs=(s.threads||[]).reduce((n,t)=>n+((t&&Array.isArray(t.messages))?t.messages.length:0),0);
    return employees*20 + clients*10 + shifts*6 + msgs*4 + clocks*4 + docs*3 + bookings*5;
  }catch(e){return 0;}
}
function parseStoredState(raw){
  try{const s=JSON.parse(raw||'');return s&&Array.isArray(s.users)?s:null;}catch(e){return null;}
}
function backupPrimaryState(reason){
  try{
    const raw=localStorage.getItem(STORE_KEY);const s=parseStoredState(raw);
    if(!s||dataScore(s)<80)return;
    const now=Date.now();
    const last=Number(localStorage.getItem(STORE_KEY+'_last_backup_ts')||0);
    if(reason!=='before-remote-merge'&&now-last<45000)return;
    localStorage.setItem(STORE_KEY+'_last_backup_ts',String(now));
    const key=STORE_KEY+'_backup_'+now;
    localStorage.setItem(key,raw);
    let index=[];try{index=JSON.parse(localStorage.getItem(BACKUP_LIST_KEY)||'[]')||[];}catch(e){}
    index.unshift({key,ts:now,reason:reason||'auto',score:dataScore(s),clients:(s.clients||[]).length,users:(s.users||[]).length});
    const seen=new Set();index=index.filter(x=>x&&x.key&&!seen.has(x.key)&&(seen.add(x.key),true)).slice(0,5);
    localStorage.setItem(BACKUP_LIST_KEY,JSON.stringify(index));
  }catch(e){}
}
function allSavedStates(){
  const out=[];
  try{
    const add=(key,reason)=>{const raw=localStorage.getItem(key);const s=parseStoredState(raw);if(s)out.push({key,reason,state:s,score:dataScore(s)});};
    add(STORE_KEY,'current');
    let index=[];try{index=JSON.parse(localStorage.getItem(BACKUP_LIST_KEY)||'[]')||[];}catch(e){}
    index.forEach(x=>x&&x.key&&add(x.key,x.reason||'backup'));
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i)||'';
      if(k.includes('westwonders')&&k!==STORE_KEY&&!k.endsWith('_last_backup_ts')&&!k.endsWith('_backup_index'))add(k,'scan');
    }
  }catch(e){}
  const seen=new Set();
  return out.filter(x=>x&&x.state&&!seen.has(x.key)&&(seen.add(x.key),true)).sort((a,b)=>b.score-a.score);
}
function mergeRecordArrays(localArr,remoteArr){
  const byId=new Map();
  (Array.isArray(remoteArr)?remoteArr:[]).forEach(it=>{if(it&&it.id!=null)byId.set(it.id,it);});
  (Array.isArray(localArr)?localArr:[]).forEach(it=>{
    if(!it||it.id==null)return;
    const existing=byId.get(it.id);
    if(!existing){byId.set(it.id,it);return;}
    const lt=String(it.updatedAt||it.createdAt||'');const rt=String(existing.updatedAt||existing.createdAt||'');
    // Prefer the newer copy, but never prefer a thin/empty copy over a richer one.
    const richLocal=JSON.stringify(it).length, richRemote=JSON.stringify(existing).length;
    let winner=(lt>=rt||richLocal>richRemote*1.35)?it:existing;
    const loser=winner===it?existing:it;
    // Preserve embedded files across the merge: if the winning copy lost a file
    // (stripped for local storage) but the other copy still has it, keep the file
    // so documents, signatures and photos sync intact across devices.
    winner={...winner};
    ['fileData','signature','photo','preview','image','photoData','attachmentData','base64'].forEach(k=>{
      if((winner[k]==null||winner[k]==='') && loser[k]) winner[k]=loser[k];
    });
    if(loser.attachment && loser.attachment.data && (!winner.attachment || !winner.attachment.data)){
      winner.attachment={...(winner.attachment||loser.attachment), data:loser.attachment.data};
    }
    byId.set(it.id,winner);
  });
  return Array.from(byId.values()).filter(x=>!x||!x._deleted);
}
function mergeThreads(localThreads,remoteThreads){
  const merged=mergeRecordArrays(localThreads,remoteThreads);
  const lmap=new Map((Array.isArray(localThreads)?localThreads:[]).filter(t=>t&&t.id).map(t=>[t.id,t]));
  const rmap=new Map((Array.isArray(remoteThreads)?remoteThreads:[]).filter(t=>t&&t.id).map(t=>[t.id,t]));
  return merged.map(t=>{
    const lt=lmap.get(t.id)||{}, rt=rmap.get(t.id)||{};
    const msgs=mergeRecordArrays(lt.messages||[],rt.messages||[])
      .sort((a,b)=>String(a.createdAt||'').localeCompare(String(b.createdAt||'')));
    return {...rt,...lt,...t,messages:msgs};
  }).filter(x=>!x||!x._deleted);
}
function activeClock(userId){
  const cs=state.clockState&&state.clockState[userId];
  if(!cs||cs._cleared)return null;
  return cs;
}
function clockEntryTime(e){
  if(!e||typeof e!=='object')return 0;
  const t=e.at||e.clockIn||e.updatedAt;
  const n=t?new Date(t).getTime():0;
  return isNaN(n)?0:n;
}
function mergeClockState(localObj,remoteObj){
  const l=(localObj&&typeof localObj==='object'&&!Array.isArray(localObj))?localObj:{};
  const r=(remoteObj&&typeof remoteObj==='object'&&!Array.isArray(remoteObj))?remoteObj:{};
  const out={};
  const ids=new Set([...Object.keys(l),...Object.keys(r)]);
  ids.forEach(id=>{
    const le=l[id],re=r[id];
    if(le&&re){ out[id]=clockEntryTime(le)>=clockEntryTime(re)?le:re; }
    else { out[id]=le||re; }
  });
  return out;
}
function mergeObjectMaps(localObj,remoteObj){
  if(localObj&&typeof localObj==='object'&&!Array.isArray(localObj)&&remoteObj&&typeof remoteObj==='object'&&!Array.isArray(remoteObj))return {...remoteObj,...localObj};
  return localObj!==undefined?localObj:remoteObj;
}
// Merge per-user read maps keeping the NEWEST read timestamp for each thread,
// so reading on one device marks the thread read on all devices.
function mergeReadMaps(localObj,remoteObj){
  const l=(localObj&&typeof localObj==='object')?localObj:{};
  const r=(remoteObj&&typeof remoteObj==='object')?remoteObj:{};
  const out={};
  const uids=new Set([...Object.keys(l),...Object.keys(r)]);
  uids.forEach(uid=>{
    const lu=l[uid]||{},ru=r[uid]||{};
    const tids=new Set([...Object.keys(lu),...Object.keys(ru)]);
    out[uid]={};
    tids.forEach(tid=>{
      const lv=String(lu[tid]||''),rv=String(ru[tid]||'');
      out[uid][tid]= lv>rv ? lv : rv; // newer timestamp wins
    });
  });
  return out;
}
// Manual unread is a user action. For the signed-in user, keep local changes;
// for everyone else, trust the cloud so "marked unread" / "read again" updates
// show correctly on the sender's screen.
function mergeManualUnreadMaps(localObj,remoteObj){
  const l=(localObj&&typeof localObj==='object')?localObj:{};
  const r=(remoteObj&&typeof remoteObj==='object')?remoteObj:{};
  const current=(state&&state.sessionUserId)||'';
  const out={};
  const uids=new Set([...Object.keys(l),...Object.keys(r)]);
  uids.forEach(uid=>{
    // For the signed-in user, LOCAL is the source of truth.
    // This fixes: long-press Mark unread works, then opening the chat must
    // immediately clear unread and not get re-created by an older cloud copy.
    if(uid===current) out[uid]={...(l[uid]||{})};
    else if(Object.prototype.hasOwnProperty.call(r,uid)) out[uid]=r[uid]||{};
    else out[uid]=l[uid]||{};
  });
  return out;
}
// Presence: keep the newest status update per user.
function mergePresence(l,r){
  l=(l&&typeof l==='object')?l:{};r=(r&&typeof r==='object')?r:{};
  const out={};const ids=new Set([...Object.keys(l),...Object.keys(r)]);
  ids.forEach(id=>{
    const a=l[id]||{},b=r[id]||{};
    const at=String(a.updatedAt||a.lastActive||''),bt=String(b.updatedAt||b.lastActive||'');
    out[id]= at>=bt ? a : b;
  });
  return out;
}
// Typing: keep the newest typing timestamp per user per thread.
function mergeTyping(l,r){
  l=(l&&typeof l==='object')?l:{};r=(r&&typeof r==='object')?r:{};
  const out={};const tids=new Set([...Object.keys(l),...Object.keys(r)]);
  tids.forEach(tid=>{
    const a=l[tid]||{},b=r[tid]||{};out[tid]={};
    const uids=new Set([...Object.keys(a),...Object.keys(b)]);
    uids.forEach(uid=>{const av=String(a[uid]||''),bv=String(b[uid]||'');out[tid][uid]=av>bv?av:bv;});
  });
  return out;
}
function mergeSafeState(local,remote){
  if(!local)return remote;
  if(!remote)return local;
  const out={...remote,...local};
  out.deletedUpdates=mergeObjectMaps(local.deletedUpdates,remote.deletedUpdates)||{};
  out.deletedMessages=mergeObjectMaps(local.deletedMessages,remote.deletedMessages)||{};
  ['users','clients','shifts','clockRecords','documents','updates','alerts','bookingReminders'].forEach(k=>{out[k]=mergeRecordArrays(local[k],remote[k]);});
  if(out.deletedUpdates&&Array.isArray(out.updates)){
    out.updates=out.updates.filter(x=>x&&x.id&&!out.deletedUpdates[x.id]);
  }
  out.threads=mergeThreads(local.threads,remote.threads);
  if(out.deletedMessages&&Array.isArray(out.threads)){
    out.threads=out.threads.map(t=>({...t,messages:(t.messages||[]).filter(m=>m&&m.id&&!out.deletedMessages[m.id]&&!m._deleted)}));
  }
  out.availability=mergeObjectMaps(local.availability,remote.availability)||{};
  out.weeklyAvail=mergeObjectMaps(local.weeklyAvail,remote.weeklyAvail)||{};
  out.shiftResponses=mergeObjectMaps(local.shiftResponses,remote.shiftResponses)||{};
  out.clockState=mergeClockState(local.clockState,remote.clockState)||{};
  out.readUpdates=mergeObjectMaps(local.readUpdates,remote.readUpdates)||{};
  out.threadReads=mergeReadMaps(local.threadReads,remote.threadReads)||{};
  out.threadManualUnread=mergeManualUnreadMaps(local.threadManualUnread,remote.threadManualUnread)||{};
  out.chatArchived=mergeObjectMaps(local.chatArchived,remote.chatArchived)||{};
  out.chatDeleted=mergeObjectMaps(local.chatDeleted,remote.chatDeleted)||{};
  out.chatHardDeleted=mergeObjectMaps(local.chatHardDeleted,remote.chatHardDeleted)||{};
  out.presence=mergePresence(local.presence,remote.presence)||{};
  out.typing=mergeTyping(local.typing,remote.typing)||{};
  out.reminderLog=mergeObjectMaps(local.reminderLog,remote.reminderLog)||{};
  out.bookingReminderLog=mergeObjectMaps(local.bookingReminderLog,remote.bookingReminderLog)||{};
  out.updatedAt=nowIso();
  return out;
}
function recoverBestLocalState(current){
  try{
    const best=allSavedStates()[0];
    if(best&&best.state&&best.score>dataScore(current)+25){
      const recovered=mergeSafeState(best.state,current||{});
      recovered.recoveredFromDeviceBackup=true;
      return recovered;
    }
  }catch(e){}
  return current;
}
function restoreBestDeviceBackup(){
  const best=allSavedStates().find(x=>x.key!==STORE_KEY)||allSavedStates()[0];
  if(!best||!best.state){toast('No device backup found yet.');return false;}
  state=mergeSafeState(best.state,state||{});
  state.recoveredFromDeviceBackup=true;
  saveLocalState(state);
  toast(`Restored device backup: ${((state.clients||[]).length)} clients, ${((state.users||[]).filter(u=>u.role==='employee').length)} employees`);
  render();
  return true;
}

function loadState(){
  let s=null;
  try{const raw=localStorage.getItem(STORE_KEY);if(raw)s=JSON.parse(raw);}catch(e){}
  if(!s||!Array.isArray(s.users))s=seed();
  s.version=16;
  s.payrollPeriod=s.payrollPeriod||'weekly';
  s.payrollAnchor=s.payrollAnchor||s.adminTimesheetAnchor||s.rosterAnchor||startOfWeek(today());
  s.timesheetAnchor=s.timesheetAnchor||s.rosterAnchor||startOfWeek(today());
  s.adminTimesheetAnchor=s.adminTimesheetAnchor||s.rosterAnchor||startOfWeek(today());
  s.clockSubTab=s.clockSubTab||'clock';
  s.notificationDefaults={inApp:true,phonePrompt:true,updatedAt:nowIso()};
  s.deletedUpdates=s.deletedUpdates||{};
  s.deletedMessages=s.deletedMessages||{};
  s.bookingReminders=Array.isArray(s.bookingReminders)?s.bookingReminders:[];
  s.bookingReminderLog=s.bookingReminderLog||{};
  s.bookingFilter=s.bookingFilter||'active';
  applyDeletedUpdatesTombstones(s);
  s.alerts=(s.alerts||[]).filter(a=>String((a&&a.kind)||'').toLowerCase()!=='message');
  // Westwonders weekly payroll settings: every employee is hourly at $35/hr + $0.99/km.
  s.payrollPeriod='weekly';
  (s.users||[]).forEach(u=>{
    if(u.role==='employee'){u.payType='Hourly';u.payRate=WW_PAY_RATE;u.kmRate=WW_KM_RATE;}
    else {if(u.payType==null)u.payType='Salary'; if(u.payRate==null)u.payRate=0; if(u.kmRate==null)u.kmRate=0;}
    if(u.bankName==null)u.bankName='';
    if(u.taxFile==null)u.taxFile='';
    if(u.photo==null)u.photo='';
  });
  (s.clockRecords||[]).forEach(r=>{
    if(r.breakMins==null)r.breakMins=0;
    if(!['pending','approved','flagged','paid'].includes(r.status))r.status='pending';
  });
  s=recoverBestLocalState(s);
  normalisePublicThreads(s);
  return s;
}

function localStateForStorage(src){
  // Avoid freezing older browsers by not serialising very large embedded files into localStorage.
  const text=JSON.stringify(src,(k,v)=>{
    if((k==='fileData'||k==='signature') && v && String(v).length>(k==='fileData'?700000:450000))return null;
    return v;
  });
  const c=JSON.parse(text);
  (c.documents||[]).forEach(d=>{
    if(!d.fileData)d.fileDataPendingCloud=true;
    if(!d.signature&&d.signed)d.signaturePendingCloud=true;
  });
  return c;
}
function clearOldLocalBackups(){
  try{
    let index=[];
    try{index=JSON.parse(localStorage.getItem(BACKUP_LIST_KEY)||'[]')||[];}catch(e){index=[];}
    const keep=new Set(index.slice(0,1).map(x=>x&&x.key).filter(Boolean));
    for(let i=localStorage.length-1;i>=0;i--){
      const k=localStorage.key(i)||'';
      if(k.indexOf(STORE_KEY+'_backup_')===0 && !keep.has(k))localStorage.removeItem(k);
    }
    localStorage.setItem(BACKUP_LIST_KEY,JSON.stringify(index.slice(0,1)));
  }catch(e){}
}
function stripHeavyRecord(o){
  if(!o||typeof o!=='object')return o;
  const x={...o};
  ['fileData','signature','preview','image','photoData','attachmentData','base64'].forEach(k=>{
    if(x[k] && String(x[k]).length>5000)x[k]=null;
  });
  if(x.photo && String(x.photo).length>90000)x.photo='';
  if(x.attachment && x.attachment.data && String(x.attachment.data).length>5000)x.attachment={...x.attachment,data:null,pendingCloud:true};
  return x;
}
function compactStateForLocal(src,level){
  const base={
    version:src.version||16,
    sessionUserId:src.sessionUserId||null,
    activeTab:src.activeTab||'home',
    rosterAnchor:src.rosterAnchor,rosterDate:src.rosterDate,
    timesheetAnchor:src.timesheetAnchor,timesheetDate:src.timesheetDate,
    adminTimesheetAnchor:src.adminTimesheetAnchor,adminTimesheetDate:src.adminTimesheetDate,
    activeThreadId:src.activeThreadId,chatMobileThread:src.chatMobileThread,
    notificationDefaults:src.notificationDefaults||{inApp:true,phonePrompt:true},
    phoneNotifiedAlertIds:src.phoneNotifiedAlertIds||{},phoneNotifiedMessageIds:src.phoneNotifiedMessageIds||{},
    chatArchived:src.chatArchived||{},chatDeleted:src.chatDeleted||{},
    chatHardDeleted:src.chatHardDeleted||{},
    deletedUpdates:src.deletedUpdates||{},
    deletedMessages:src.deletedMessages||{},
    bookingReminderLog:src.bookingReminderLog||{},bookingFilter:src.bookingFilter||'active'
  };
  const recent=(arr,n)=>Array.isArray(arr)?arr.slice(-n).map(stripHeavyRecord):[];
  if(level>=2){
    // Tiny emergency shell for small mobile storage. Keep imported employees
    // AND clients available locally so the mobile version does not open with
    // empty Staff/Clients lists while the shared cloud copy is refilling.
    const lightClient=c=>{
      const x=stripHeavyRecord(c||{});
      return {id:x.id,name:x.name||'',address:x.address||'',phone:x.phone||'',email:x.email||'',notes:x.notes||'',updatedAt:x.updatedAt||x.createdAt||''};
    };
    return {
      ...base,
      company:src.company||{},
      users:(src.users||[]).map(u=>stripHeavyRecord(u)).slice(0,250),
      clients:(src.clients||[]).map(lightClient).slice(0,1500),
      shifts:recent(src.shifts,250),
      bookingReminders:recent(src.bookingReminders,120),
      threads:[],
      alerts:[]
    };
  }
  return {
    ...base,
    company:src.company||{},
    users:(src.users||[]).map(stripHeavyRecord),
    clients:(src.clients||[]).map(c=>{const x=stripHeavyRecord(c);return x;}),
    shifts:recent(src.shifts,900),
    bookingReminders:recent(src.bookingReminders,500),
    shiftResponses:src.shiftResponses||{},
    clockRecords:recent(src.clockRecords,900),
    clockState:src.clockState||{},
    timesheets:recent(src.timesheets,500),
    availability:src.availability||{},weeklyAvail:src.weeklyAvail||{},
    updates:recent(src.updates,200),
    alerts:recent(src.alerts,250).filter(a=>String((a&&a.kind)||'').toLowerCase()!=='message'),
    documents:recent(src.documents,200),
    readUpdates:src.readUpdates||{},deletedUpdates:src.deletedUpdates||{},deletedMessages:src.deletedMessages||{},reminderLog:src.reminderLog||{},shiftReminderLog:src.shiftReminderLog||{},bookingReminderLog:src.bookingReminderLog||{},notificationSettings:src.notificationSettings||{},
    threadReads:src.threadReads||{},threadManualUnread:src.threadManualUnread||{},
    chatArchived:src.chatArchived||{},chatDeleted:src.chatDeleted||{},
    chatHardDeleted:src.chatHardDeleted||{},
    presence:src.presence||{},typing:src.typing||{},
    threads:(src.threads||[]).map(t=>{
      const x=stripHeavyRecord(t);
      x.messages=recent(t.messages, level?80:160);
      return x;
    })
  };
}
function saveLocalState(src){
  backupPrimaryState('before-save');
  let full='';
  try{full=JSON.stringify(localStateForStorage(src));}catch(e){full='';}
  try{
    if(full)localStorage.setItem(STORE_KEY,full);
    else localStorage.setItem(STORE_KEY,JSON.stringify(compactStateForLocal(src,1)));
    return true;
  }catch(e){
    clearOldLocalBackups();
    try{if(full)localStorage.setItem(STORE_KEY,full);return true;}catch(e2){}
    try{localStorage.setItem(STORE_KEY,JSON.stringify(compactStateForLocal(src,1)));return true;}catch(e3){}
    try{localStorage.setItem(STORE_KEY,JSON.stringify(compactStateForLocal(src,2)));return true;}catch(e4){}
    try{sessionStorage.setItem(STORE_KEY,JSON.stringify(compactStateForLocal(src,2)));return true;}catch(e5){}
    // Do not show a scary toast on staff phones. The cloud sync still runs and is the source of truth.
    try{console.warn('Westwondersandco could not write local cache; cloud sync will continue.',e);}catch(_){}
    return false;
  }
}
const SYNC_ENDPOINT='/.netlify/functions/sync';
const PUSH_SUBSCRIBE_ENDPOINT='/.netlify/functions/push-subscribe';
const PUSH_TEST_ENDPOINT='/.netlify/functions/push-test';
const MESSAGE_SYNC_ENDPOINT='/.netlify/functions/message-sync';
const VAPID_PUBLIC_KEY='BFbY1AP2TR0CaOLrbj0EBJ1zJN7RBgKUrKcZAh-tHTPZ57Ex8PaoRB0fuuVi-FDkx7eFEfKoEFDjg5R1asAgpoM';
let __syncTimer=null,__syncQueued=false,__syncInFlight=false,__cloudReady=false,__initialCloudPullTried=false,__syncBackoffMs=2500,__lastSyncDigest='',__deferredRenderTimer=null,__lastRenderAt=0,__cloudLastPullAt=0;
let __pinnedThreadId='',__pinnedThreadUntil=0;
let __msgSyncTimer=null,__msgSyncInFlight=false,__msgSyncLastDigest='',__msgPushInFlight=false,__msgLastPullAt=0,__typingLastPullAt=0,__typingLastPushAt=0,__typingPushTimer=null;
const __uiKeys=['sessionUserId','activeTab','rosterAnchor','rosterDate','timesheetAnchor','timesheetDate','adminTimesheetAnchor','adminTimesheetDate','clockSubTab','chatMobileThread','activeThreadId','adminSelectedEmployeeId','tsFocusEmployeeId','openAlerts','openUpdates','rosterEmpSearch','showArchivedChats'];
function deviceId(){let id='';try{id=localStorage.getItem('ww_device_id')||'';if(!id){id=uid('dev');localStorage.setItem('ww_device_id',id);}}catch(e){id=uid('dev');}return id;}
function cloudStatePayload(){
  // For the CLOUD we keep the full embedded files (documents, signatures, photos,
  // attachments) so they sync across devices — the server (Netlify Blobs) can
  // hold large data, unlike localStorage. We only drop individual blobs that are
  // extremely large (> ~3.5MB) to avoid request timeouts.
  const MAX = 3500000;
  const c = JSON.parse(JSON.stringify(state, (k,v)=>{
    if((k==='fileData'||k==='signature'||k==='photo'||k==='data'||k==='preview'||k==='image'||k==='photoData'||k==='attachmentData'||k==='base64')
       && typeof v==='string' && v.length>MAX) return null;
    return v;
  }));
  const currentUser = (state&&state.sessionUserId) ? state.sessionUserId : (c.sessionUserId||null);
  // Only this device's user should publish read/unread and presence maps.
  // This prevents an old desktop/mobile cache from overwriting another user's
  // fresh read receipt or online/offline status.
  if(currentUser){
    if(c.threadReads) c.threadReads = {[currentUser]:(c.threadReads[currentUser]||{})};
    if(c.threadManualUnread) c.threadManualUnread = {[currentUser]:(c.threadManualUnread[currentUser]||{})};
    if(c.presence) c.presence = {[currentUser]:(c.presence[currentUser]||{})};
    if(c.chatArchived) c.chatArchived = {[currentUser]:(c.chatArchived[currentUser]||{})};
    if(c.chatDeleted) c.chatDeleted = {[currentUser]:(c.chatDeleted[currentUser]||{})};
    if(c.chatHardDeleted) c.chatHardDeleted = {[currentUser]:(c.chatHardDeleted[currentUser]||{})};
  }
  if(c.deletedUpdates&&Array.isArray(c.updates)){
    c.updates=c.updates.filter(x=>x&&x.id&&!c.deletedUpdates[x.id]);
  }
  c.sessionUserId=null;
  c.deviceId=deviceId();
  c.updatedAt=c.updatedAt||nowIso();
  return c;
}
function save(){
  normalisePublicThreads(state);
  applyDeletedUpdatesTombstones(state);
  state.updatedAt=nowIso();state.deviceId=deviceId();
  const ok=saveLocalState(state);
  queueCloudSync();
  return ok;
}
/* Soft-delete a record so the deletion syncs to other devices instead of being
   resurrected by the merge. We keep a lightweight tombstone (id + _deleted + ts)
   inside the same array; the sync function drops _deleted items when reading. */
function applyDeletedUpdatesTombstones(st){
  try{
    st=st||state||{};
    st.deletedUpdates=st.deletedUpdates||{};
    if(Array.isArray(st.updates)){
      st.updates=st.updates.filter(x=>x&&x.id&&!x._deleted&&!st.deletedUpdates[x.id]);
    }
    if(st.readUpdates&&typeof st.readUpdates==='object'){
      Object.keys(st.readUpdates).forEach(uid=>{
        const map=st.readUpdates[uid];
        if(map&&typeof map==='object')Object.keys(st.deletedUpdates).forEach(id=>delete map[id]);
      });
    }
    if(st.openUpdates&&typeof st.openUpdates==='object'){
      Object.keys(st.deletedUpdates).forEach(id=>delete st.openUpdates[id]);
    }
  }catch(e){}
  return st;
}
function softDelete(arrKey,id){
  const arr=state[arrKey];if(!Array.isArray(arr))return;
  if(arrKey==='updates'&&id){
    state.deletedUpdates=state.deletedUpdates||{};
    state.deletedUpdates[id]=nowIso();
  }
  const it=arr.find(x=>x&&x.id===id);
  if(it){it._deleted=true;it.updatedAt=nowIso();}
  else{arr.push({id,_deleted:true,updatedAt:nowIso()});}
  if(arrKey==='updates')applyDeletedUpdatesTombstones(state);
}
function pruneDeleted(){
  // hide tombstones from the running app and keep deleted updates from reappearing after sync
  applyDeletedUpdatesTombstones(state);
  ['shifts','documents','threads','clients'].forEach(k=>{
    if(Array.isArray(state[k]))state[k]=state[k].filter(x=>!x||!x._deleted);
  });
}

function activeAppUsers(st){
  st=st||state||{};
  return (st.users||[]).filter(u=>u && u.status!=='archived' && (u.role==='employee'||u.role==='admin'));
}
function activeAppUserIds(st){ return activeAppUsers(st).map(u=>u.id).filter(Boolean); }
function sameMembers(a,b){
  const A=[...(a||[])].sort().join('|'), B=[...(b||[])].sort().join('|');
  return A===B;
}
function normalisePublicThreads(st){
  if(!st||!Array.isArray(st.users))return st;
  if(!Array.isArray(st.threads))st.threads=[];
  const members=activeAppUserIds(st);
  const now=nowIso();
  let changed=false;
  let team=st.threads.find(t=>t&&t.id==='team-all')||st.threads.find(t=>t&&t.type==='team');
  if(!team){team={id:'team-all',type:'team',name:'All Team',privacy:'public',memberIds:members,messages:[],createdAt:now,updatedAt:now};st.threads.unshift(team);changed=true;}
  if(team.id!=='team-all'){team.id='team-all';changed=true;}
  if(team.type!=='team'){team.type='team';changed=true;}
  if(team.name!=='All Team'){team.name='All Team';changed=true;}
  if(team.privacy!=='public'){team.privacy='public';changed=true;}
  if(!sameMembers(team.memberIds,members)){team.memberIds=members;changed=true;}
  if(!Array.isArray(team.messages))team.messages=[];
  let announce=st.threads.find(t=>t&&t.id==='announce')||st.threads.find(t=>t&&t.type==='announcement');
  if(!announce){announce={id:'announce',type:'announcement',name:'Announcements',privacy:'public',memberIds:members,messages:[],createdAt:now,updatedAt:now};st.threads.splice(Math.min(1,st.threads.length),0,announce);changed=true;}
  if(announce.id!=='announce'){announce.id='announce';changed=true;}
  if(announce.type!=='announcement'){announce.type='announcement';changed=true;}
  if(announce.name!=='Announcements'){announce.name='Announcements';changed=true;}
  if(announce.privacy!=='public'){announce.privacy='public';changed=true;}
  if(!sameMembers(announce.memberIds,members)){announce.memberIds=members;changed=true;}
  if(!Array.isArray(announce.messages))announce.messages=[];
  let work=st.threads.find(t=>t&&t.id==='before-after')||st.threads.find(t=>t&&t.type==='workphotos');
  if(!work){work={id:'before-after',type:'workphotos',name:'Before & After Photos',privacy:'public',memberIds:members,messages:[],createdAt:now,updatedAt:now,highlight:true,description:'Upload before and after photos from finished client cleans so admin can see the work.'};st.threads.splice(0,0,work);changed=true;}
  if(work.id!=='before-after'){work.id='before-after';changed=true;}
  if(work.type!=='workphotos'){work.type='workphotos';changed=true;}
  if(work.name!=='Before & After Photos'){work.name='Before & After Photos';changed=true;}
  if(work.privacy!=='public'){work.privacy='public';changed=true;}
  work.highlight=true;
  work.description='Upload before and after photos from finished client cleans so admin can see the work.';
  if(!sameMembers(work.memberIds,members)){work.memberIds=members;changed=true;}
  if(!Array.isArray(work.messages))work.messages=[];

  // Keep public company chats pinned in a fixed order for everyone:
  // 1) All Team, 2) Before & After Photos, 3) Announcements.
  const pinnedRank=t=>t&&((t.id==='team-all'||t.type==='team')?0:(t.id==='before-after'||t.type==='workphotos')?1:(t.id==='announce'||t.type==='announcement')?2:99);
  const beforeOrder=st.threads.map(t=>t&&t.id).join('|');
  st.threads=st.threads.slice().sort((a,b)=>pinnedRank(a)-pinnedRank(b));
  if(beforeOrder!==st.threads.map(t=>t&&t.id).join('|'))changed=true;

  if(changed){team.updatedAt=now;announce.updatedAt=now;work.updatedAt=now;st.updatedAt=now;}
  return st;
}
function threadRecipients(t,authorId){
  if(!t)return [];
  let ids=[];
  if(t.id==='team-all'||t.type==='team'||t.id==='announce'||t.type==='announcement'||t.id==='before-after'||t.type==='workphotos')ids=activeAppUserIds(state);
  else ids=Array.isArray(t.memberIds)?t.memberIds.slice():[];
  return [...new Set(ids)].filter(id=>id&&id!==authorId&&userById(id)&&userById(id).status!=='archived');
}
function addAlertForUsers(userIds,text,opts){
  opts=opts||{}; const now=nowIso();
  const ids=[...new Set((userIds||[]).filter(Boolean))];
  ids.forEach(id=>{
    const person=userById(id); if(!person)return;
    state.alerts.unshift({id:uid('al'),role:person.role||'employee',userId:id,userIds:[id],priority:!!opts.priority,kind:opts.kind||'notification',threadId:opts.threadId||'',shiftId:opts.shiftId||'',text,createdAt:now,updatedAt:now,clientCreatedAt:now,pendingServerStamp:true,read:false});
  });
}
function addAdminAlert(text,opts){
  addAlertForUsers(activeAppUsers(state).filter(x=>x.role==='admin').map(x=>x.id),text,{...(opts||{}),priority:(opts&&opts.priority)||false});
}
function messageNotificationTitle(t,msg){
  const author=userById(msg.authorId)||{};
  const who=author.name||'New message';
  // DM: the conversation IS the sender, so the title is simply their name.
  if(t&&t.type==='dm')return who;
  // Group/team/announcement: title is the conversation name.
  return threadTitle(t,author||me()||{})||'New message';
}
function messageNotificationBody(t,msg){
  const author=userById(msg.authorId)||{};
  const who=author.name||'Someone';
  const body=(msg.text&&msg.text.trim())?msg.text.trim():(msg.attachment?`sent ${msg.attachment.name||'an attachment'}`:'sent a message');
  const trimmed=body.length>110?body.slice(0,107)+'…':body;
  // The sender/conversation name is shown in the title now, so the body stays
  // short: just the message for a DM, "sender: message" for a group.
  if(t&&t.type==='dm')return trimmed;
  return `${who}: ${trimmed}`;
}
function notifyThreadRecipients(t,msg){
  // Messages should NOT appear inside the in-app Notifications/bell list.
  // They sync as conversation messages and phone-screen pushes are sent by
  // the Netlify backend when a new message reaches the shared cloud state.
  if(!t||!msg)return;
  msg.phonePushOnly=true;
  msg.updatedAt=msg.updatedAt||nowIso();
}
function threadVisibleToUser(t,u){
  if(!t||!u)return false;
  if(t.id==='team-all'||t.type==='team'||t.id==='announce'||t.type==='announcement')return true;
  return Array.isArray(t.memberIds)&&t.memberIds.includes(u.id);
}
function collectVisibleMessageIds(st,u){
  const ids=new Set();
  ((st&&st.threads)||[]).forEach(t=>{
    if(!threadVisibleToUser(t,u))return;
    (t.messages||[]).forEach(m=>{if(m&&m.id)ids.add(m.id);});
  });
  return ids;
}
function lightNotifySnapshot(st){
  // Lightweight before/after snapshot used only for message + alert notification checks.
  // This avoids cloning the whole app state on every cloud poll, which was a major
  // cause of lag on phones with many clients, shifts or message attachments.
  st=st||{};
  return {
    threads:((st.threads)||[]).map(t=>({
      id:t&&t.id,type:t&&t.type,name:t&&t.name,privacy:t&&t.privacy,memberIds:Array.isArray(t&&t.memberIds)?t.memberIds.slice():[],
      messages:((t&&t.messages)||[]).map(m=>({id:m&&m.id,authorId:m&&m.authorId,text:m&&m.text,createdAt:m&&m.createdAt,attachment:m&&m.attachment?{name:m.attachment.name||'',size:m.attachment.size||0}:null}))
    })),
    alerts:((st.alerts)||[]).map(a=>({id:a&&a.id,userId:a&&a.userId,userIds:Array.isArray(a&&a.userIds)?a.userIds.slice():[],role:a&&a.role,kind:a&&a.kind,threadId:a&&a.threadId,shiftId:a&&a.shiftId,updateId:a&&a.updateId,commentId:a&&a.commentId,bookingId:a&&a.bookingId,dedupeKey:a&&a.dedupeKey,url:a&&a.url,text:a&&a.text,read:a&&a.read,priority:a&&a.priority,createdAt:a&&a.createdAt,updatedAt:a&&a.updatedAt}))
  };
}
function maybeNotifyNewMessages(before,after){
  const u=me();if(!u)return;
  const oldIds=collectVisibleMessageIds(before,u);
  state.phoneNotifiedMessageIds=state.phoneNotifiedMessageIds||{};
  ((after&&after.threads)||[]).forEach(t=>{
    if(!threadVisibleToUser(t,u))return;
    (t.messages||[]).forEach(m=>{
      if(!m||!m.id||oldIds.has(m.id)||m.authorId===u.id||state.phoneNotifiedMessageIds[m.id])return;
      // V194: message phone notifications are sent once from the server push path.
      // Do not also create local foreground notifications here, because that is
      // what caused duplicate/triple iPhone alerts for the same message.
      state.phoneNotifiedMessageIds[m.id]=true;
    });
  });
}
function phoneNotificationsSupported(){
  return ('Notification' in window);
}
function pushSupported(){
  return ('serviceWorker' in navigator) && ('PushManager' in window) && phoneNotificationsSupported();
}
function notificationTitleForAlert(a){
  const k=String((a&&a.kind)||'').toLowerCase();
  if(k==='message')return 'New message';
  if(k==='update')return 'Team update';
  if(k==='shift')return 'Shift update';
  if(k==='roster')return 'Roster update';
  if(k==='timesheet')return 'Timesheet update';
  if(k==='document')return 'New document';
  if(k==='availability')return 'Availability update';
  if(k==='booking')return 'Booking reminder';
  return 'Notification';
}
function notificationPermissionHtml(){
  if(!phoneNotificationsSupported())return '<span class="btn btn-soft btn-sm disabled">Phone alerts unavailable</span>';
  if(Notification.permission==='granted')return '<button class="btn btn-soft btn-sm" data-action="test-phone-notification">Phone alerts ON · always-on push connected · test</button>';
  if(Notification.permission==='denied')return '<button class="btn btn-soft btn-sm" data-action="request-notifications">Phone alerts blocked</button>';
  return '<button class="btn btn-soft btn-sm" data-action="request-notifications">Enable always-on phone alerts</button>';
}
function vapidKeyToUint8Array(base64String){
  const padding='='.repeat((4-base64String.length%4)%4);
  const base64=(base64String+padding).replace(/-/g,'+').replace(/_/g,'/');
  const rawData=atob(base64);
  const outputArray=new Uint8Array(rawData.length);
  for(let i=0;i<rawData.length;++i)outputArray[i]=rawData.charCodeAt(i);
  return outputArray;
}
async function registerPushSubscription(force){
  try{
    const u=me();
    if(!u || !pushSupported() || Notification.permission!=='granted' || location.protocol==='file:')return false;
    let reg=await navigator.serviceWorker.ready;
    try{
      // Keep the service worker fresh so installed Home Screen apps keep receiving push events.
      const fresh=await navigator.serviceWorker.register('/sw.js',{updateViaCache:'none'});
      if(fresh)reg=fresh;
      if(reg&&reg.update)reg.update().catch(()=>{});
    }catch(_){ }
    let sub=await reg.pushManager.getSubscription();
    if(!sub){
      sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:vapidKeyToUint8Array(VAPID_PUBLIC_KEY)});
    }
    const payload={
      userId:u.id,role:u.role,name:u.name,deviceId:deviceId(),subscription:sub,
      installed:window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches,
      platform:navigator.platform||'',userAgent:navigator.userAgent||'',updatedAt:nowIso()
    };
    const res=await fetch(PUSH_SUBSCRIBE_ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});
    if(!res||!res.ok)throw new Error('Push subscribe failed');
    try{localStorage.setItem('ww_push_registered_'+u.id,nowIso());localStorage.setItem('ww_push_device_enabled','true');}catch(e){}
    if(force)toast('Always-on phone alerts connected to this device');
    return true;
  }catch(e){
    if(force)toast('Could not connect phone push alerts. Install the app to the Home Screen, open it once, then enable alerts.');
    return false;
  }
}
function notifyLocalUser(title,body,opts){
  try{
    if(!phoneNotificationsSupported()||Notification.permission!=='granted')return;
    const safeTitle=title||'Westwondersandco notification';
    const options={
      body:body||'',
      icon:'/icons/icon-192x192.png',
      badge:'/icons/icon-96x96.png',
      tag:(opts&&opts.tag)||('ww-'+Date.now()),
      renotify:true,
      requireInteraction:!!(opts&&opts.priority),
      data:{url:'/',...(opts&&opts.data?opts.data:{})}
    };
    if('serviceWorker' in navigator){
      navigator.serviceWorker.ready
        .then(reg=>{
          if(reg&&reg.showNotification)return reg.showNotification(safeTitle,options);
          try{new Notification(safeTitle,options);}catch(_){}
        })
        .catch(()=>{try{new Notification(safeTitle,options);}catch(_){}});
      return;
    }
    new Notification(safeTitle,options);
  }catch(e){}
}
async function requestPhoneNotifications(){
  try{
    if(!phoneNotificationsSupported()){toast('Phone notifications are not supported on this browser.');return false;}
    const result=await Notification.requestPermission();
    if(result==='granted'){
      await registerPushSubscription(true);
      notifyLocalUser('Westwondersandco alerts enabled','Phone-screen alerts are on for messages, roster updates, shift responses, timesheets and announcements.',{tag:'ww-alerts-enabled',priority:true});
      toast('Phone alerts enabled');
      return true;
    }
    if(result==='denied')toast('Phone alerts are blocked. Turn them on in your phone/browser settings.');
    else toast('Phone alerts were not enabled yet.');
  }catch(e){toast('Could not enable phone alerts on this device.');}
  return false;
}

function phoneAutoPromptKey(u){return 'ww_phone_alert_auto_prompted_'+((u&&u.id)||'guest');}
async function autoRequestPhoneNotificationsAfterLogin(){
  try{
    const u=me();
    if(!u||!phoneNotificationsSupported())return;
    // Browsers/iPhones will not let an app silently turn phone notifications on.
    // This asks immediately after the user's Sign in tap, which is the closest
    // possible behaviour to notifications being on by default.
    if(Notification.permission==='granted'){
      try{await registerPushSubscription(false);}catch(e){}
      return;
    }
    if(Notification.permission==='denied')return;
    const key=phoneAutoPromptKey(u);
    const last=Number(localStorage.getItem(key)||0);
    const now=Date.now();
    // Default-on behaviour: ask automatically after login, but avoid spamming
    // the browser prompt more than once per hour if the user closes it.
    if(last && now-last<60*60*1000)return;
    localStorage.setItem(key,String(now));
    await requestPhoneNotifications();
  }catch(e){}
}

async function sendServerPushTest(){
  try{
    const u=me();if(!u){return;}
    if(Notification.permission!=='granted'){await requestPhoneNotifications();}
    await registerPushSubscription(false);
    const r=await fetch(PUSH_TEST_ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({userId:u.id,deviceId:deviceId()})});
    if(r&&r.ok)toast('Server push test sent — check your phone notification panel');
    else{notifyLocalUser('Westwondersandco test notification','Local alert works, but server push is not connected yet.',{tag:'ww-test-notification',priority:true});toast('Local test sent; server push not connected yet');}
  }catch(e){
    notifyLocalUser('Westwondersandco test notification','This is how your notification panel alert will look.',{tag:'ww-test-notification',priority:true});
    toast('Test notification sent');
  }
}
async function ensureAlwaysOnPhoneAlerts(force){
  try{
    if(!phoneNotificationsSupported() || Notification.permission!=='granted')return false;
    const u=me();if(!u)return false;
    const key='ww_push_keepalive_'+u.id;
    const last=Number(localStorage.getItem(key)||0);
    if(!force && last && Date.now()-last<25*60*1000)return true;
    const ok=await registerPushSubscription(false);
    if(ok)localStorage.setItem(key,String(Date.now()));
    return ok;
  }catch(e){return false;}
}
function startAlwaysOnPhoneAlertKeepalive(){
  try{
    const run=()=>ensureAlwaysOnPhoneAlerts(false);
    window.addEventListener('focus',run);
    window.addEventListener('online',()=>ensureAlwaysOnPhoneAlerts(true));
    document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')run();});
    window.addEventListener('appinstalled',()=>setTimeout(()=>ensureAlwaysOnPhoneAlerts(true),800));
    setInterval(run,30*60*1000);
    setTimeout(run,1200);
  }catch(e){}
}
function stableRecord(o,fields){
  if(!o)return null;const r={};fields.forEach(k=>{if(o[k]!=null)r[k]=o[k];});return r;
}
function syncDigest(src){
  try{
    const st=src||{};
    const threads=(st.threads||[]).map(t=>({id:t.id,type:t.type,name:t.name,privacy:t.privacy,memberIds:(t.memberIds||[]).slice().sort(),updatedAt:t.updatedAt||'',messages:(t.messages||[]).map(m=>({id:m.id,authorId:m.authorId,text:m.text||'',createdAt:m.createdAt||'',serverReceivedAt:m.serverReceivedAt||'',attachment:m.attachment?{name:m.attachment.name||'',size:m.attachment.size||0}:null,attachments:Array.isArray(m.attachments)?m.attachments.map(a=>({name:a.name||'',size:a.size||0,type:a.type||''})):null,comments:Array.isArray(m.comments)?m.comments.map(c=>({id:c.id,text:c.text||'',authorId:c.authorId||'',createdAt:c.createdAt||''})):null}))}));
    const snap={
      users:(st.users||[]).map(u=>stableRecord(u,['id','role','status','name','title','email','phone','updatedAt'])),
      clients:(st.clients||[]).map(c=>stableRecord(c,['id','name','address','phone','email','updatedAt'])),
      shifts:(st.shifts||[]).map(x=>stableRecord(x,['id','clientId','date','start','end','status','updatedAt'])).concat(Object.entries(st.shiftResponses||{}).map(([k,v])=>({k,v}))),
      updates:(st.updates||[]).map(x=>stableRecord(x,['id','title','body','audience','pinned','createdAt','updatedAt'])),
      deletedUpdates:st.deletedUpdates||{},
      deletedMessages:st.deletedMessages||{},
      alerts:(st.alerts||[]).map(a=>stableRecord(a,['id','userId','userIds','role','kind','threadId','shiftId','updateId','commentId','bookingId','dedupeKey','url','priority','text','read','createdAt','updatedAt'])),
      threadReads:st.threadReads||{},
      threadManualUnread:st.threadManualUnread||{},
      chatArchived:st.chatArchived||{},chatDeleted:st.chatDeleted||{},
      chatHardDeleted:st.chatHardDeleted||{},
      presence:st.presence||{},
      typing:st.typing||{},
      notificationSettings:st.notificationSettings||{},
      shiftReminderLog:st.shiftReminderLog||{},
      bookingReminderLog:st.bookingReminderLog||{},
      threads
    };
    return JSON.stringify(snap);
  }catch(e){return String(Date.now());}
}
function chatInputBusy(){
  const a=document.activeElement;
  return !!(a && a.id==='chatInput' && state && state.activeTab==='chat');
}
function safeRenderAfterSync(){
  if(document.hidden)return;
  if(chatInputBusy()){
    clearTimeout(__deferredRenderTimer);
    __deferredRenderTimer=setTimeout(()=>{if(!chatInputBusy())render();},900);
    return;
  }
  const now=Date.now();
  const renderGap=wwIsDesktop()?1800:450;
  if(now-__lastRenderAt<renderGap){
    clearTimeout(__deferredRenderTimer);
    __deferredRenderTimer=setTimeout(()=>{if(!chatInputBusy())render();},renderGap);
    return;
  }
  render();
}

function messageSyncDigest(threads){
  try{
    return JSON.stringify((threads||[]).map(t=>({
      id:t.id,updatedAt:t.updatedAt||'',memberIds:(t.memberIds||[]).slice().sort(),
      messages:(t.messages||[]).map(m=>({id:m.id,authorId:m.authorId,text:m.text||'',createdAt:m.createdAt||'',updatedAt:m.updatedAt||'',serverReceivedAt:m.serverReceivedAt||'',attachment:m.attachment?{name:m.attachment.name||'',size:m.attachment.size||0}:null,attachments:Array.isArray(m.attachments)?m.attachments.map(a=>({name:a.name||'',size:a.size||0,type:a.type||''})):null,comments:Array.isArray(m.comments)?m.comments.map(c=>({id:c.id,text:c.text||'',authorId:c.authorId||'',createdAt:c.createdAt||''})):null}))
    })));
  }catch(e){return String(Date.now());}
}
function restoreChatDraftAfterRender(draft,focused){
  try{
    const ci=document.getElementById('chatInput');
    if(!ci)return;
    if(draft){
      if('value' in ci)ci.value=draft; else ci.textContent=draft;
      autoGrowChatInput();
    }
    if(focused){
      ci.focus();
      if(!('value' in ci) && window.getSelection && document.createRange){
        const range=document.createRange();range.selectNodeContents(ci);range.collapse(false);
        const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);
      }
    }
  }catch(e){}
}
function renderAfterMessageSync(){
  if(document.hidden)return;
  const ci=document.getElementById('chatInput');
  const focused=!!(ci&&document.activeElement===ci);
  const draft=ci?getChatInputText(ci):'';
  renderNow();
  restoreChatDraftAfterRender(draft,focused);
  if(!draft)setTimeout(scrollChat,0);
}
function applyRemoteThreads(remoteThreads){
  if(!Array.isArray(remoteThreads)||!remoteThreads.length)return;
  const before=lightNotifySnapshot(state);
  const beforeDigest=messageSyncDigest((state&&state.threads)||[]);
  state.threads=mergeThreads(state.threads||[],remoteThreads);
  normalisePublicThreads(state);
  const afterDigest=messageSyncDigest(state.threads||[]);
  if(afterDigest===beforeDigest)return;
  const markedVisibleRead=markActiveThreadReadIfVisible();
  saveLocalState(state);
  maybeNotifyNewMessages(before,state);
  __msgSyncLastDigest=afterDigest;
  if(markedVisibleRead)queueCloudSync();
  renderAfterMessageSync();
}
async function pullMessageSync(){
  if(location.protocol==='file:'||document.hidden||__msgSyncInFlight)return;
  if(!state||!state.sessionUserId)return;
  __msgSyncInFlight=true;
  try{
    const r=await fetch(MESSAGE_SYNC_ENDPOINT,{headers:{'accept':'application/json'},cache:'no-store'});
    if(r&&r.ok){const data=await r.json();if(data&&Array.isArray(data.threads))applyRemoteThreads(data.threads);}
  }catch(e){}
  __msgSyncInFlight=false;
}
async function pushMessageToCloud(threadId,msg){
  if(location.protocol==='file:'||!threadId||!msg)return;
  try{
    __msgPushInFlight=true;
    const r=await fetch(MESSAGE_SYNC_ENDPOINT,{method:'POST',headers:{'content-type':'application/json','accept':'application/json'},body:JSON.stringify({threadId,message:msg})});
    if(r&&r.ok){const data=await r.json();if(data&&Array.isArray(data.threads))applyRemoteThreads(data.threads);else if(data&&data.thread)applyRemoteThreads([data.thread]);}
    else queueCloudSync();
  }catch(e){queueCloudSync();}
  __msgPushInFlight=false;
  setTimeout(pullMessageSync,220);
}
function startMessageLiveSync(){
  if(location.protocol==='file:'||__msgSyncTimer)return;
  setTimeout(pullMessageSync,180);
  setTimeout(pullMessageSync,900);
  // V142: adaptive live sync. The previous ultra-tight 150ms loop made phones
  // feel glitchy by pulling the cloud far too often. Messages still arrive fast
  // in an open chat, while background tabs use a lighter cadence.
  __msgSyncTimer=setInterval(()=>{
    if(document.hidden)return;
    const inChat = state && state.activeTab==='chat';
    const desktop = window.matchMedia&&window.matchMedia('(min-width:1024px)').matches;
    const gap = inChat ? 450 : (desktop?7000:3200);
    const now = Date.now();
    if(now - (__msgLastPullAt||0) >= gap){ __msgLastPullAt=now; pullMessageSync(); }
    // Typing indicator stays responsive in an open chat without hammering the
    // full cloud state, so the "is typing…" line appears/clears quickly.
    if(inChat && now - (__typingLastPullAt||0) >= 550){ __typingLastPullAt=now; pullCloudSync(); }
    if(inChat) liveUpdateTyping();
  },250);
}
function saveRealtime(){ save(); pushCloudSync(); }
function isSeedOnlyLocalState(){
  try{
    const employees=(state.users||[]).filter(u=>u&&u.role==='employee'&&u.status!=='archived').length;
    const clients=(state.clients||[]).filter(c=>c&&!c._deleted).length;
    const shifts=(state.shifts||[]).filter(x=>x&&!x._deleted).length;
    return employees===0 && clients===0 && shifts===0;
  }catch(e){return false;}
}
function queueCloudSync(){
  if(location.protocol==='file:'||__syncQueued)return;
  if(typeof navigator!=='undefined' && navigator.onLine===false)return;
  __syncQueued=true;
  // Collapse rapid taps/typing/presence updates into one cloud push.
  const syncDelay=(window.matchMedia&&window.matchMedia('(min-width:1024px)').matches)?320:160;
  setTimeout(()=>{__syncQueued=false;pushCloudSync();},syncDelay);
}
async function pushCloudSync(){
  if(location.protocol==='file:')return;
  // Important for mobile/Home Screen app: never let a fresh empty mobile cache
  // push over the shared imported Staff/Clients data before it has pulled cloud.
  if(!__cloudReady && isSeedOnlyLocalState()){
    setTimeout(pullCloudSync,180);
    return;
  }
  if(__syncInFlight){setTimeout(pushCloudSync,120);return;}
  __syncInFlight=true;
  try{
    const r=await fetch(SYNC_ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({state:cloudStatePayload()})});
    if(r&&r.ok){
      __cloudReady=true;__syncBackoffMs=2500;
      const data=await r.json();if(data&&data.state){applyRemoteState(data.state);}
    }
  }catch(e){ __syncBackoffMs=Math.min(20000,(__syncBackoffMs||2500)*1.5); }
  __syncInFlight=false;
}
function alertVisibleToUser(a,u){
  if(!a||!u)return false;
  if(String((a.kind)||'').toLowerCase()==='message')return false;
  const ids=Array.isArray(a.userIds)?a.userIds:[];
  if(a.userId)return a.userId===u.id;
  if(ids.length)return ids.includes(u.id);
  if(a.role)return a.role===u.role;
  return true;
}
function visibleAlertsForUser(st,u){return ((st&&st.alerts)||[]).filter(a=>alertVisibleToUser(a,u));}
function maybeNotifyNewAlerts(before,after){
  const u=me();if(!u)return;
  const oldIds=new Set(visibleAlertsForUser(before,u).map(a=>a.id));
  const fresh=visibleAlertsForUser(after,u).filter(a=>!oldIds.has(a.id)&&!a.read);
  state.phoneNotifiedAlertIds=state.phoneNotifiedAlertIds||{};
  fresh.slice(0,4).forEach(a=>{
    // V218: Do not fire a second local OS notification for cloud alerts.
    // Background/closed-app phone notifications are sent once from the Netlify
    // Web Push path. Keeping this as toast/in-app only prevents duplicate iPhone
    // banners when the app is open, waking, or reconnecting after being inactive.
    state.phoneNotifiedAlertIds[a.id]=true;
    try{toast(a.text.length>58?a.text.slice(0,56)+'…':a.text);}catch(e){}
  });
}
function applyRemoteState(remote){
  if(!remote||!Array.isArray(remote.users))return;
  const local=state||{};
  const beforeDigest=syncDigest(local);
  const keep={};__uiKeys.forEach(k=>{if(local[k]!==undefined)keep[k]=local[k];});
  const before=lightNotifySnapshot(local);
  backupPrimaryState('before-remote-merge');
  const merged={...mergeSafeState(local,remote),...keep};
  normalisePublicThreads(merged);
  state=merged;
  pruneDeleted();
  try{applyNextWeekRosterImportV105({save:false});}catch(e){}
  const afterDigest=syncDigest(state);
  if(afterDigest===beforeDigest){
    // Same data from the cloud: save nothing and do NOT re-render. This is the main desktop blinking fix.
    return;
  }
  saveLocalState(state);
  maybeNotifyNewAlerts(before,state);
  maybeNotifyNewMessages(before,state);
  __lastSyncDigest=afterDigest;
  safeRenderAfterSync();
}
async function pullCloudSync(){
  if(location.protocol==='file:')return;
  if(__syncInFlight){setTimeout(pullCloudSync,160);return;}
  __initialCloudPullTried=true;
  try{
    const r=await fetch(SYNC_ENDPOINT,{headers:{'accept':'application/json'},cache:'no-store'});if(!r.ok)return;
    const data=await r.json();
    if(data&&data.state){
      __cloudReady=true;__syncBackoffMs=2500;applyRemoteState(data.state);
    }else if(!isSeedOnlyLocalState()){
      // Only create/update cloud from a device that actually has Staff/Clients/roster data.
      queueCloudSync();
    }
  }catch(e){ __syncBackoffMs=Math.min(20000,(__syncBackoffMs||2500)*1.5); }
}
function startCloudSync(){
  if(location.protocol==='file:')return;
  pullCloudSync();
  setTimeout(pushCloudSync,220);
  setTimeout(pullCloudSync,900);
  if(!__syncTimer)__syncTimer=setInterval(()=>{
    if(document.hidden)return;
    const inChat=state&&state.activeTab==='chat';
    const gap=inChat?3000:(wwIsDesktop()?20000:8000);
    const now=Date.now();
    if(now-(__cloudLastPullAt||0)>=gap){__cloudLastPullAt=now;pullCloudSync();}
  },1000);
  startMessageLiveSync();
  startPresenceHeartbeat();
  try{
    document.addEventListener('visibilitychange',()=>{
      if(document.visibilityState==='visible'){presenceBeat();pullCloudSync();setTimeout(pushCloudSync,120);if(Notification.permission==='granted')registerPushSubscription(false);}
      else presenceOffline('hidden');
    });
    window.addEventListener('focus',()=>{presenceBeat();pullCloudSync();setTimeout(pushCloudSync,120);});
    window.addEventListener('pagehide',()=>presenceOffline('closed'));
    window.addEventListener('beforeunload',()=>presenceOffline('closed'));
    window.addEventListener('online',()=>{pullCloudSync();setTimeout(pushCloudSync,120);if(Notification.permission==='granted')registerPushSubscription(false);});
  }catch(e){}
}

/* ---------- Presence: online / last-active ---------- */
let __presenceTimer=null;
function presenceBeat(){
  const u=me();if(!u)return;
  if(!state.presence)state.presence={};
  const stamp=nowIso();
  const p={...(state.presence[u.id]||{})};
  p.lastActive=stamp;
  p.updatedAt=stamp;
  p.status='online';
  p.deviceId=deviceId();
  state.presence[u.id]=p;
  try{saveLocalState(state);}catch(e){}
  queueCloudSync();
}
function presenceOffline(reason){
  const u=me();if(!u)return;
  if(!state.presence)state.presence={};
  const stamp=nowIso();
  const p={...(state.presence[u.id]||{})};
  p.lastActive=stamp;
  p.updatedAt=stamp;
  p.status='offline';
  p.offlineReason=reason||'inactive';
  p.deviceId=deviceId();
  state.presence[u.id]=p;
  try{saveLocalState(state);}catch(e){}
  try{
    const payload=JSON.stringify({state:cloudStatePayload()});
    if(navigator.sendBeacon){
      navigator.sendBeacon(SYNC_ENDPOINT,new Blob([payload],{type:'application/json'}));
    }else{
      fetch(SYNC_ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:payload,keepalive:true}).catch(()=>{});
    }
  }catch(e){queueCloudSync();}
}
function startPresenceHeartbeat(){
  if(__presenceTimer)return;
  presenceBeat();
  // update my "last active" every 30s while the app is open and visible
  __presenceTimer=setInterval(()=>{ if(!document.hidden) presenceBeat(); },30000);
}
function userPresence(userId){
  const p=(state.presence&&state.presence[userId])||null;
  if(!p||!p.lastActive)return {online:false,lastActive:null};
  const ageMs=Date.now()-(parseStampToEpoch(p.updatedAt||p.lastActive)||0);
  if(p.status==='offline')return {online:false,lastActive:p.lastActive,ageMs,status:'offline'};
  return {online:ageMs<45000, lastActive:p.lastActive, ageMs,status:p.status||'online'}; // online only while recently active
}
function presenceLabel(userId){
  const pr=userPresence(userId);
  if(pr.online)return 'Online';
  if(!pr.lastActive)return '';
  const mins=Math.floor(pr.ageMs/60000);
  if(mins<60)return `Active ${mins||1}m ago`;
  const hrs=Math.floor(mins/60);
  if(hrs<24)return `Active ${hrs}h ago`;
  const days=Math.floor(hrs/24);
  return days<7?`Active ${days}d ago`:`Last seen ${fmtStampDateTime(userPresence(userId).lastActive)}`;
}
/* ---------- Typing indicator (best-effort over polling) ---------- */
function pushTypingNow(){
  try{
    const now=Date.now();
    if(now-(__typingLastPushAt||0)<300){
      clearTimeout(__typingPushTimer);
      __typingPushTimer=setTimeout(pushTypingNow,300);
      return;
    }
    __typingLastPushAt=now;
    saveLocalState(state);
    if(!__syncInFlight)pushCloudSync(); else queueCloudSync();
  }catch(e){queueCloudSync();}
}
function setTyping(threadId){
  const u=me();if(!u||!threadId)return;
  if(!state.typing)state.typing={};
  state.typing[threadId]=state.typing[threadId]||{};
  state.typing[threadId][u.id]=nowIso();
  pushTypingNow();
}
function clearTyping(threadId){
  const u=me();if(!u||!threadId)return;
  if(state.typing&&state.typing[threadId]&&state.typing[threadId][u.id]){
    delete state.typing[threadId][u.id];pushTypingNow();
  }
}
function whoIsTyping(threadId){
  const u=me();const t=(state.typing&&state.typing[threadId])||{};
  const names=[];
  Object.keys(t).forEach(uid=>{
    if(uid===u.id)return;
    const age=Date.now()-(parseStampToEpoch(t[uid])||0);
    if(age<5000){const usr=userById(uid);if(usr)names.push(usr.name.split(' ')[0]);} // typed within 5s
  });
  return names;
}
// Patch ONLY the typing indicator in the open chat, with no full re-render.
// This lets the "is typing…" line appear/disappear live for both sides even
// while the other person is actively typing in the input box.
function liveUpdateTyping(){
  try{
    if(!state||state.activeTab!=='chat')return;
    const scroller=document.getElementById('chatScroll');
    if(!scroller)return;
    const names=whoIsTyping(state.activeThreadId);
    const existing=scroller.querySelector('.typing-row');
    if(!names.length){ if(existing)existing.remove(); return; }
    const label=names.length===1?names[0]+' is typing':names.slice(0,2).join(', ')+' are typing';
    const html=`<div class="typing-row"><span class="typing-dots"><i></i><i></i><i></i></span><span class="typing-text">${escapeHtml(label)}\u2026</span></div>`;
    const nearBottom = scroller.scrollHeight-scroller.scrollTop-scroller.clientHeight < 80;
    if(existing){
      const txt=existing.querySelector('.typing-text');
      if(txt && txt.textContent!==label+'\u2026') txt.textContent=label+'\u2026';
    }else{
      scroller.insertAdjacentHTML('beforeend',html);
    }
    if(nearBottom)scroller.scrollTop=scroller.scrollHeight;
  }catch(e){}
}

/* ---------- Shift reminder notifications (morning today / night tomorrow) ---------- */
function generalNotificationSettings(){
  state.notificationSettings=state.notificationSettings||{};
  const n=state.notificationSettings;
  if(n.instantPushEnabled==null)n.instantPushEnabled=true;
  if(n.shiftMorningEnabled==null)n.shiftMorningEnabled=true;
  if(!n.shiftMorningTime)n.shiftMorningTime='08:00';
  if(n.shiftNightEnabled==null)n.shiftNightEnabled=true;
  if(!n.shiftNightTime)n.shiftNightTime='21:00';
  return n;
}
function within15MinuteWindow(now,targetTime){
  const p=String(targetTime||'08:00').split(':').map(x=>parseInt(x,10)||0);
  const target=Math.max(0,Math.min(1439,(p[0]||0)*60+(p[1]||0)));
  const mins=now.getHours()*60+now.getMinutes();
  return mins>=target && mins<target+15;
}
function shiftReminderAlertKey(empId,targetDate,kind,time){
  return `shiftReminder:${empId}:${targetDate}:${kind}:${time||''}`;
}
function fireShiftReminders(force){
  try{
    const cfg=generalNotificationSettings();
    const now=new Date();
    const todayStr=iso(now);
    state.shiftReminderLog=state.shiftReminderLog||{};
    state.reminderLog=state.reminderLog||{}; // kept for older saved data compatibility
    const slots=[];
    if(force==='today' || (cfg.shiftMorningEnabled!==false && within15MinuteWindow(now,cfg.shiftMorningTime))){slots.push({kind:'today',targetDate:todayStr,time:cfg.shiftMorningTime||'08:00',when:'today'});}
    if(force==='tomorrow' || (cfg.shiftNightEnabled!==false && within15MinuteWindow(now,cfg.shiftNightTime))){slots.push({kind:'tomorrow',targetDate:iso(new Date(now.getTime()+86400000)),time:cfg.shiftNightTime||'21:00',when:'tomorrow'});}
    if(!slots.length)return;
    let changed=false;
    const employees=state.users.filter(x=>x.role==='employee'&&x.status!=='archived');
    employees.forEach(emp=>{
      slots.forEach(slot=>{
        const has=state.shifts.some(s=>s.date===slot.targetDate && (s.employeeIds||[]).includes(emp.id) && (s.status==='Published'));
        if(!has)return;
        const legacyKey=`${emp.id}:${slot.targetDate}:${slot.kind}`;
        const key=shiftReminderAlertKey(emp.id,slot.targetDate,slot.kind,slot.time);
        if((state.shiftReminderLog[key]||state.reminderLog[legacyKey])&&!force)return;
        const msg=`Hey ${emp.name.split(' ')[0]}, you have a shift scheduled for you ${slot.when}.`;
        addAlertForUsers([emp.id],msg,{kind:'shift',priority:true,dedupeKey:key,url:'/?tab=roster'});
        state.shiftReminderLog[key]=nowIso();
        changed=true;
      });
    });
    if(changed){saveRealtime();}
  }catch(e){}
}
function startReminderScheduler(){
  fireShiftReminders();
  setInterval(fireShiftReminders,15*60*1000);
  // The Netlify scheduled function sends the same reminders while the app is closed.
  // This local checker only creates an in-app record when somebody has the app open;
  // it no longer fires a second local phone notification, preventing duplicate banners.
}

// Auto clock-out: if an employee forgot to clock out and has been on the clock
// for more than 4 hours, automatically close their timesheet, flag it as an
// error, and notify both the admin and the employee so they can fix it.
const AUTO_CLOCKOUT_HOURS = 4;
function autoClockOutCheck(){
  try{
    if(!state.clockState) return;
    let changed=false;
    Object.keys(state.clockState).forEach(userId=>{
      const cs=state.clockState[userId];
      if(!cs || cs._cleared || !cs.clockIn) return;
      const started=parseStampToEpoch(cs.clockIn);
      if(!started) return;
      const hours=(Date.now()-started)/3600000;
      if(hours < AUTO_CLOCKOUT_HOURS) return;

      // Close the timesheet exactly at the 4-hour mark.
      const emp=userById(userId);
      const outIso=new Date(started + AUTO_CLOCKOUT_HOURS*3600000).toISOString();
      const recId=uid('cr');
      state.clockRecords.unshift({
        id:recId, userId, shiftId:cs.shiftId, clientId:cs.clientId,
        date:(cs.clockIn||'').slice(0,10)||today(),
        clockIn:cs.clockIn, clockOut:outIso, km:0, breakMins:0,
        notes:'Auto clocked-out after 4h — employee did not clock out. Please review and edit.',
        status:'flagged', autoClockOut:true
      });
      state.clockState[userId]={_cleared:true, at:nowIso(), autoClockOut:true};
      changed=true;

      const empFirst=emp?emp.name.split(' ')[0]:'An employee';
      const empName=emp?emp.name:'An employee';

      // Notify all admins: time-clock error / exceeded limit.
      addAdminAlert(
        `Time-clock error: ${empName} exceeded the 4-hour limit and was clocked out automatically. Please review their timesheet.`,
        {kind:'timesheet', priority:true, shiftId:cs.shiftId}
      );

      // Notify the employee so they can edit their entry.
      addAlertForUsers([userId],
        `You were automatically clocked out after 4 hours, ${empFirst}. Please open Clock and edit your timesheet so your hours are correct.`,
        {kind:'timesheet', priority:true, shiftId:cs.shiftId}
      );

      // Fire an OS push if the affected employee is the one using the app now.
      const cur=me();
      if(cur && cur.id===userId){
        notifyLocalUser('Auto clock-out',
          'You were clocked out automatically after 4 hours. Tap to edit your timesheet.',
          {tag:`ww-autoclockout-${recId}`, priority:true, data:{kind:'autoclockout',url:'/?tab=clock'}});
        clearInterval(timerInt);
      }
    });
    if(changed){ saveRealtime(); if(typeof render==='function') render(); }
  }catch(e){}
}
function startAutoClockOutScheduler(){
  autoClockOutCheck();                       // check on load
  setInterval(autoClockOutCheck, 60*1000);   // re-check every minute while open
}

/* ---------- Excel / Word / CSV import helpers ---------- */
function cleanImportKey(k){
  return String(k||'')
    .replace(/^\uFEFF/,'')
    .toLowerCase()
    .replace(/&/g,' and ')
    .replace(/[^a-z0-9]+/g,' ')
    .trim();
}
function importKeyVariants(k){
  const base=cleanImportKey(k);
  const compact=base.replace(/\s+/g,'');
  return base===compact?[base]:[base,compact];
}
function normaliseImportRow(o){
  if(o.__norm)return o.__norm;
  const out={};
  Object.keys(o||{}).forEach(k=>{
    const v=String(o[k]??'').trim();
    importKeyVariants(k).forEach(key=>{if(key)out[key]=v;});
  });
  o.__norm=out;
  return out;
}
function parseDelimited(text){
  text=String(text||'').replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n').trim();
  if(!text)return [];
  const firstLine=(text.split('\n').find(Boolean)||'');
  const counts={',':(firstLine.match(/,/g)||[]).length,'\t':(firstLine.match(/\t/g)||[]).length,';':(firstLine.match(/;/g)||[]).length};
  const delim=Object.keys(counts).sort((a,b)=>counts[b]-counts[a])[0]||',';
  const rows=[];let cur=[];let field='';let q=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(q){
      if(ch==='"'){ if(text[i+1]==='"'){field+='"';i++;} else q=false; }
      else field+=ch;
    }else{
      if(ch==='"')q=true;
      else if(ch===delim){cur.push(field);field='';}
      else if(ch==='\n'){cur.push(field);rows.push(cur);cur=[];field='';}
      else field+=ch;
    }
  }
  cur.push(field);rows.push(cur);
  return matrixToObjects(rows);
}
function matrixToObjects(matrix){
  const rows=(matrix||[]).map(r=>(r||[]).map(c=>String(c??'').trim())).filter(r=>r.some(c=>c!==''));
  if(!rows.length)return [];
  const headerIndex=rows.findIndex(r=>r.some(c=>cleanImportKey(c)));
  if(headerIndex<0)return [];
  const header=rows[headerIndex].map((h,i)=>cleanImportKey(h)||`column ${i+1}`);
  const headerSet=new Set(header.flatMap(importKeyVariants));
  const known=['name','client','client name','customer','customer name','employee','employee name','full name','first name','phone','mobile','email','address','role','position','notes'];
  const headerLooksReal=known.some(k=>headerSet.has(cleanImportKey(k))||headerSet.has(cleanImportKey(k).replace(/\s+/g,'')));
  const finalHeader=headerLooksReal?header:rows[headerIndex].map((_,i)=>`column ${i+1}`);
  const data=headerLooksReal?rows.slice(headerIndex+1):rows.slice(headerIndex);
  return data.map(r=>{
    const o={};
    finalHeader.forEach((h,i)=>{o[h]=(r[i]||'').trim();});
    return o;
  }).filter(o=>Object.values(o).some(v=>String(v).trim()!==''));
}
function pick(o,keys){
  const n=normaliseImportRow(o);
  for(const k of keys){
    for(const v of importKeyVariants(k)){if(n[v]!=null&&n[v]!=='')return n[v];}
  }
  return '';
}
function pickColumn(o,n){return pick(o,[`column ${n}`,`col ${n}`,`field ${n}`,String(n)]);}
function importValue(v){return String(v??'').trim();}
function mergeNonEmpty(target,changes){
  let changed=false;
  Object.entries(changes).forEach(([k,v])=>{
    v=importValue(v);
    if(!v)return;
    if(importValue(target[k])!==v){target[k]=v;changed=true;}
  });
  return changed;
}
function importClients(rows){
  let added=0,updated=0,skipped=0;
  rows.forEach(o=>{
    const name=pick(o,['name','client','client name','company','business','customer','customer name','participant','participant name'])||pickColumn(o,1);
    if(!name){skipped++;return;}
    const address=pick(o,['address','client address','street','location','site','site address','address line 1','street address','suburb'])||pickColumn(o,2);
    const phone=normaliseImportedPhone(pick(o,['phone','phone number','mobile','mobile phone','mobile number','tel','telephone','contact','contact number'])||pickColumn(o,3));
    const email=pick(o,['email','email address','e-mail','client email'])||pickColumn(o,4);
    const notes=pick(o,['notes','note','service notes','service note','details','instructions','access notes','cleaning notes','ndis notes'])||pickColumn(o,5);
    const cleanName=name.toLowerCase();
    const cleanEmail=email.toLowerCase();
    const cleanPhone=phone.replace(/\D/g,'');
    const existing=state.clients.find(c=>(cleanEmail&&String(c.email||'').toLowerCase()===cleanEmail)||(cleanPhone&&String(c.phone||'').replace(/\D/g,'')===cleanPhone)||String(c.name||'').toLowerCase()===cleanName);
    if(existing){
      if(mergeNonEmpty(existing,{name,address,phone,email,notes:notes||existing.notes||'Imported'}))updated++;
      else skipped++;
      return;
    }
    state.clients.push({id:uid('c'),name,address,phone,email,notes:notes||'Imported'});
    added++;
  });
  return {added,updated,skipped,total:rows.length};
}
function normaliseImportedPhone(v){
  v=String(v??'').trim();
  if(!v)return '';
  const digits=v.replace(/\D/g,'');
  if(/^4\d{8}$/.test(digits))return '0'+digits;
  if(/^61(4\d{8})$/.test(digits))return '0'+digits.slice(2);
  return v;
}
function importEmployees(rows){
  let added=0,updated=0,skipped=0;
  rows.forEach(o=>{
    const first=pick(o,['first name','firstname','given name']);
    const last=pick(o,['last name','lastname','surname','family name']);
    const base=pick(o,['name','employee','employee name','full name','staff','staff name']);
    const full=(base||`${first} ${last}`.trim()||pickColumn(o,1)).trim();
    if(!full){skipped++;return;}
    const phone=normaliseImportedPhone(pick(o,['phone','phone number','mobile','mobile phone','mobile number','tel','telephone','contact','contact number']));
    const email=pick(o,['email','email address','e-mail','work email','employee email'])||pickColumn(o,3);
    const title=pick(o,['title','role','position','job title','job role'])||'Cleaner';
    const address=pick(o,['address','home address','street','location','suburb']);
    const providedPassword=pick(o,['password','login password','temporary password','temp password']);
    const cleanEmail=email.toLowerCase();
    const cleanPhone=phone.replace(/\D/g,'');
    const cleanName=full.toLowerCase();
    const existing=state.users.find(uu=>uu.role==='employee'&&((cleanEmail&&String(uu.email||'').toLowerCase()===cleanEmail)||(cleanPhone&&String(uu.phone||'').replace(/\D/g,'')===cleanPhone)||String(uu.name||'').toLowerCase()===cleanName));
    if(existing){
      const updates={name:full,title,phone,email,address,payType:'Hourly',payRate:WW_PAY_RATE,kmRate:WW_KM_RATE,note:existing.note||'Imported'};
      if(providedPassword)updates.password=providedPassword;
      if(mergeNonEmpty(existing,updates))updated++;
      else skipped++;
      return;
    }
    state.users.push({id:uid('u'),name:full,role:'employee',title,phone,email,password:providedPassword||'staff123',status:'active',photo:'',address,dob:'',emergencyName:'',emergencyPhone:'',payType:'Hourly',payRate:WW_PAY_RATE,kmRate:WW_KM_RATE,note:'Imported',updatedAt:nowIso()});
    added++;
  });
  return {added,updated,skipped,total:rows.length};
}
function readFileText(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result||''));r.onerror=reject;r.readAsText(file);});}
function readFileBuffer(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsArrayBuffer(file);});}
function decodeXml(s){return String(s||'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'");}
function columnIndex(ref){const m=String(ref||'').match(/^[A-Z]+/i);if(!m)return null;let n=0;for(const ch of m[0].toUpperCase())n=n*26+(ch.charCodeAt(0)-64);return n-1;}
const externalScriptPromises={};
function loadExternalScript(src){
  if(externalScriptPromises[src])return externalScriptPromises[src];
  externalScriptPromises[src]=new Promise((resolve,reject)=>{
    const existing=Array.from(document.scripts||[]).find(s=>s.src===src);
    if(existing){existing.addEventListener('load',resolve,{once:true});existing.addEventListener('error',reject,{once:true});return;}
    const s=document.createElement('script');
    s.src=src;s.async=true;s.crossOrigin='anonymous';
    s.onload=resolve;s.onerror=()=>reject(new Error('Could not load import helper'));
    document.head.appendChild(s);
  });
  return externalScriptPromises[src];
}
async function ensureSheetJs(){
  if(window.XLSX)return window.XLSX;
  const urls=['https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js','https://unpkg.com/xlsx@0.18.5/dist/xlsx.full.min.js'];
  for(const url of urls){try{await loadExternalScript(url);if(window.XLSX)return window.XLSX;}catch(e){}}
  throw new Error('Excel import helper could not load. Please save the file as CSV and import again, or check your internet connection.');
}
async function ensureFflate(){
  if(window.fflate)return window.fflate;
  const urls=['https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js','https://unpkg.com/fflate@0.8.2/umd/index.js'];
  for(const url of urls){try{await loadExternalScript(url);if(window.fflate)return window.fflate;}catch(e){}}
  throw new Error('Office file unzip helper could not load. Please save the file as CSV and import again, or check your internet connection.');
}
async function inflateZipBytes(bytes){
  if('DecompressionStream' in window){
    const tryFormat=async fmt=>{
      const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream(fmt));
      return new Uint8Array(await new Response(stream).arrayBuffer());
    };
    try{return await tryFormat('deflate-raw');}
    catch(e){try{return await tryFormat('deflate');}catch(e2){}}
  }
  const f=await ensureFflate();
  if(f.inflateRawSync)return f.inflateRawSync(bytes);
  if(f.decompressSync)return f.decompressSync(bytes);
  throw new Error('Office file unzip helper is not available. Please save the file as CSV and import again.');
}
async function parseSpreadsheetWithSheetJs(file){
  const XLSX=await ensureSheetJs();
  const buf=await readFileBuffer(file);
  const wb=XLSX.read(buf,{type:'array',raw:false,cellDates:false});
  const ws=wb.Sheets[wb.SheetNames[0]];
  if(!ws)return [];
  const matrix=XLSX.utils.sheet_to_json(ws,{header:1,defval:'',raw:false,blankrows:false});
  return matrixToObjects(matrix);
}
async function openZip(buffer){
  const u8=new Uint8Array(buffer);const dv=new DataView(buffer);
  const u16=o=>dv.getUint16(o,true),u32=o=>dv.getUint32(o,true);
  let eocd=-1;
  for(let i=u8.length-22;i>=0&&i>u8.length-66000;i--){if(u32(i)===0x06054b50){eocd=i;break;}}
  if(eocd<0)throw new Error('Not a readable Office/Excel file');
  const count=u16(eocd+10);const cdOffset=u32(eocd+16);let ptr=cdOffset;const entries={};
  for(let i=0;i<count;i++){
    if(u32(ptr)!==0x02014b50)break;
    const method=u16(ptr+10),compSize=u32(ptr+20),size=u32(ptr+24),nameLen=u16(ptr+28),extraLen=u16(ptr+30),commentLen=u16(ptr+32),localOffset=u32(ptr+42);
    const name=new TextDecoder().decode(u8.slice(ptr+46,ptr+46+nameLen));
    entries[name]={method,compSize,size,localOffset,name};
    ptr+=46+nameLen+extraLen+commentLen;
  }
  const read=async name=>{
    const ent=entries[name];if(!ent)throw new Error(`${name} not found`);
    const lp=ent.localOffset;
    if(u32(lp)!==0x04034b50)throw new Error('Bad zip entry');
    const nameLen=u16(lp+26),extraLen=u16(lp+28);const start=lp+30+nameLen+extraLen;
    const data=u8.slice(start,start+ent.compSize);
    if(ent.method===0)return data;
    if(ent.method===8)return await inflateZipBytes(data);
    throw new Error('Unsupported zip compression');
  };
  return {names:Object.keys(entries),bytes:read,text:async name=>new TextDecoder('utf-8').decode(await read(name))};
}
function firstText(node,tag){const n=node.getElementsByTagName(tag)[0];return n?n.textContent:'';}
function allText(node,tag){return Array.from(node.getElementsByTagName(tag)).map(x=>x.textContent||'').join('');}
async function parseXlsxFile(file){
  try{return await parseSpreadsheetWithSheetJs(file);}
  catch(e){console.warn('SheetJS import fallback:',e);}
  const zip=await openZip(await readFileBuffer(file));
  let sheetPath='xl/worksheets/sheet1.xml';
  try{
    const wb=new DOMParser().parseFromString(await zip.text('xl/workbook.xml'),'application/xml');
    const firstSheet=wb.getElementsByTagName('sheet')[0];
    const rid=firstSheet&&(firstSheet.getAttribute('r:id')||firstSheet.getAttribute('id'));
    if(rid){
      const rels=new DOMParser().parseFromString(await zip.text('xl/_rels/workbook.xml.rels'),'application/xml');
      const rel=Array.from(rels.getElementsByTagName('Relationship')).find(r=>r.getAttribute('Id')===rid);
      if(rel){let target=rel.getAttribute('Target')||'';sheetPath=target.startsWith('/')?target.slice(1):'xl/'+target.replace(/^\.\.\//,'');}
    }
  }catch(e){
    const found=zip.names.find(n=>/^xl\/worksheets\/sheet\d+\.xml$/i.test(n));
    if(found)sheetPath=found;
  }
  let shared=[];
  if(zip.names.includes('xl/sharedStrings.xml')){
    const ss=new DOMParser().parseFromString(await zip.text('xl/sharedStrings.xml'),'application/xml');
    shared=Array.from(ss.getElementsByTagName('si')).map(si=>allText(si,'t'));
  }
  const sheet=new DOMParser().parseFromString(await zip.text(sheetPath),'application/xml');
  const out=[];
  Array.from(sheet.getElementsByTagName('row')).forEach(row=>{
    const arr=[];
    Array.from(row.getElementsByTagName('c')).forEach((c,i)=>{
      const idx=columnIndex(c.getAttribute('r'))??i;
      const t=c.getAttribute('t');
      let val='';
      if(t==='inlineStr')val=allText(c,'t');
      else{
        const v=firstText(c,'v');
        if(t==='s')val=shared[Number(v)]||'';
        else if(t==='b')val=v==='1'?'TRUE':'FALSE';
        else val=v;
      }
      arr[idx]=decodeXml(val);
    });
    out.push(arr);
  });
  return matrixToObjects(out);
}
function parseHtmlOrXmlTable(text){
  const doc=new DOMParser().parseFromString(String(text||''),'text/html');
  const rows=Array.from(doc.querySelectorAll('tr')).map(tr=>Array.from(tr.querySelectorAll('th,td')).map(td=>td.textContent.trim())).filter(r=>r.length);
  if(rows.length)return matrixToObjects(rows);
  return parseDelimited(text);
}
async function parseDocxFile(file){
  const zip=await openZip(await readFileBuffer(file));
  const xml=await zip.text('word/document.xml');
  const doc=new DOMParser().parseFromString(xml,'application/xml');
  const tables=Array.from(doc.getElementsByTagName('w:tbl'));
  for(const tbl of tables){
    const rows=Array.from(tbl.getElementsByTagName('w:tr')).map(tr=>Array.from(tr.getElementsByTagName('w:tc')).map(tc=>allText(tc,'w:t').trim())).filter(r=>r.some(Boolean));
    if(rows.length>=2)return matrixToObjects(rows);
  }
  const paras=Array.from(doc.getElementsByTagName('w:p')).map(p=>allText(p,'w:t').trim()).filter(Boolean);
  return parseDelimited(paras.join('\n'));
}
async function parseImportFile(file){
  const name=(file.name||'').toLowerCase();
  if(/\.xlsx$/.test(name))return await parseXlsxFile(file);
  if(/\.docx$/.test(name))return await parseDocxFile(file);
  if(/\.xls$/.test(name)){
    try{return await parseSpreadsheetWithSheetJs(file);}
    catch(e){console.warn('Old Excel helper fallback:',e);}
    const buf=await readFileBuffer(file);
    const sig=new Uint8Array(buf.slice(0,2));
    if(sig[0]===0x50&&sig[1]===0x4b)return await parseXlsxFile(new File([buf],file.name.replace(/\.xls$/i,'.xlsx')));
    return parseHtmlOrXmlTable(new TextDecoder('utf-8').decode(new Uint8Array(buf)));
  }
  if(/\.doc$/.test(name)){
    const text=await readFileText(file);
    const rows=parseDelimited(text);
    if(rows.length)return rows;
    throw new Error('Old .doc files cannot always be read. Save the Word file as .docx with a simple table, then import again.');
  }
  return parseDelimited(await readFileText(file));
}
function importSummaryText(res,kind){
  const parts=[];
  if(res.added)parts.push(`${res.added} new`);
  if(res.updated)parts.push(`${res.updated} updated`);
  if(res.skipped)parts.push(`${res.skipped} skipped`);
  return parts.length?`Imported ${kind}: ${parts.join(' · ')}`:`No ${kind} found to import`;
}
function downloadImportTemplate(kind){
  const isClient=kind==='client';
  const headers=isClient?['Client Name','Address','Phone','Email','Service Notes']:['Employee Name','Phone','Email','Role','Address','Temporary Password'];
  const sample=isClient?['Jane Smith','12 Example Street, Dandenong VIC','0400 000 000','jane@example.com','Weekly NDIS support clean']:['Mary Johnson','0400 111 111','mary@example.com','Cleaner','Melbourne VIC','staff123'];
  const csv=[headers,sample].map(r=>r.map(csvSafe).join(',')).join('\n');
  downloadTextFile(`westwonders-${isClient?'client':'employee'}-import-template.csv`,csv);
}

/* ---------- lookups ---------- */
const userById = id => state.users.find(u=>u.id===id);
const clientById = id => state.clients.find(c=>c.id===id);
const me = () => userById(state.sessionUserId);
function clientName(id){const c=clientById(id);return c?c.name:'Unassigned';}
function shiftsForDate(d){return state.shifts.filter(s=>s.date===d).sort((a,b)=>a.start.localeCompare(b.start));}
function shiftsForUserDate(uid,d){return shiftsForDate(d).filter(s=>s.employeeIds.includes(uid));}
function weekHours(uids,anchor){const wd=weekDates(anchor);let h=0;state.shifts.forEach(s=>{if(wd.includes(s.date)&&s.employeeIds.some(e=>uids.includes(e)))h+=durationHrs(s.start,s.end)*s.employeeIds.filter(e=>uids.includes(e)).length;});return h;}

/* ---------- speed helpers: keep large imports fast on phones/tablets ---------- */
const WW_LIST_STEP = 80;
function getListLimit(key){
  const n=Number(state&&state[key]);
  return Number.isFinite(n)&&n>0?n:WW_LIST_STEP;
}
function moreListButton(kind,shown,total){
  if(shown>=total)return '';
  const label=kind==='clients'?'clients':'employees';
  return `<div class="list-more-wrap"><button class="btn btn-soft btn-sm list-more-btn" data-action="load-more-${kind}">Show more ${label} (${shown} of ${total})</button></div>`;
}
function buildClientShiftInfo(){
  const info={};
  (state.clients||[]).forEach(c=>{info[c.id]={count:0,next:null};});
  const td=today();
  (state.shifts||[]).forEach(s=>{
    if(!s.clientId)return;
    const x=info[s.clientId]||(info[s.clientId]={count:0,next:null});
    x.count++;
    if(s.date>=td && (!x.next || s.date.localeCompare(x.next.date)<0 || (s.date===x.next.date && (s.start||'').localeCompare(x.next.start||'')<0))){
      x.next=s;
    }
  });
  return info;
}
function buildEmployeeDirectoryStats(anchor){
  const wd=new Set(weekDates(anchor||today()));
  const td=today();
  const out={};
  (state.users||[]).forEach(u=>{if(u.role==='employee'||u.role==='admin')out[u.id]={hours:0,todayJobs:0,docs:0};});
  (state.shifts||[]).forEach(s=>{
    const hrs=durationHrs(s.start,s.end);
    (s.employeeIds||[]).forEach(id=>{
      const x=out[id];if(!x)return;
      if(wd.has(s.date))x.hours+=hrs;
      if(s.date===td)x.todayJobs++;
    });
  });
  (state.documents||[]).forEach(d=>{const x=out[d.userId];if(x)x.docs++;});
  return out;
}
function clientSearchItems(q, selectedId){
  const query=(q||'').trim().toLowerCase();
  let list=(state.clients||[]);
  if(query)list=list.filter(c=>[c.name,c.address,c.phone,c.email,c.notes].join(' ').toLowerCase().includes(query));
  else if(selectedId)list=list.filter(c=>c.id===selectedId);
  else list=[];
  return list.slice(0,WW_LIST_STEP);
}
function shiftClientRowsHtml(q, selectedId){
  const items=clientSearchItems(q,selectedId);
  return items.map(c=>`<button type="button" class="picker-row client-search-row ${c.id===selectedId?'selected':''}" data-action="select-shift-client" data-id="${c.id}">
      <span class="pick-main"><strong>${escapeHtml(c.name)}</strong><em>${escapeHtml(c.address||'No address saved')}</em></span>
    </button>`).join('');
}
function timesheetClientRowsHtml(prefix,q,selectedId){
  const selected=clientById(selectedId);
  const items=clientSearchItems(q,selectedId);
  return items.map(c=>`<button class="ts-client-row ${selected&&selected.id===c.id?'selected':''}" data-action="select-timesheet-client" data-prefix="${prefix}" data-id="${c.id}"><span class="ts-client-dot">${selected&&selected.id===c.id?'✓':''}</span><span><strong>${escapeHtml(c.name)}</strong><small>${escapeHtml(c.address||'No address saved')}</small></span></button>`).join('');
}
function lightEscape(s){return escapeHtml(String(s??''));}
function recordHours(r){if(!r||!r.clockIn||!r.clockOut)return 0;return Math.max(0,(new Date(r.clockOut)-new Date(r.clockIn))/3600000);}
function breakHours(r){return Math.max(0,(Number(r.breakMins)||0)/60);}
function paidHours(r){return Math.max(0,recordHours(r)-breakHours(r));}
function payPeriodDates(anchor,mode){const start=startOfWeek(anchor||today());const len=mode==='fortnightly'?14:7;return Array.from({length:len},(_,i)=>addDays(start,i));}
function periodLabel(anchor,mode){const ds=payPeriodDates(anchor,mode);return `${fmtDate(ds[0])} – ${fmtDate(ds[ds.length-1])}`;}
function payrollRecords(anchor,mode){const ds=payPeriodDates(anchor,mode);return state.clockRecords.filter(r=>ds.includes(r.date)).sort((a,b)=>a.date.localeCompare(b.date)||a.clockIn.localeCompare(b.clockIn));}
function statusLabel(st){return st==='paid'?'Paid':st==='approved'?'Approved':st==='flagged'?'Flagged':'Pending';}
function statusPill(st){return st==='paid'?'pill-blue':st==='approved'?'pill-green':st==='flagged'?'pill-red':'pill-amber';}
function linkedShiftForRecord(r){return (r.shiftId&&state.shifts.find(s=>s.id===r.shiftId))||state.shifts.find(s=>s.date===r.date&&s.clientId===r.clientId&&s.employeeIds.includes(r.userId))||null;}
function varianceInfo(r){const s=linkedShiftForRecord(r);if(!s)return {label:'No roster link',mins:null,cls:'neutral'};const actualStart=r.clockIn.slice(11,16);const actualEnd=(r.clockOut||r.clockIn).slice(11,16);const toMin=t=>{const [h,m]=t.split(':').map(Number);return h*60+m};const planned=durationHrs(s.start,s.end)*60;const actual=recordHours(r)*60;const diff=Math.round(actual-planned);const startDiff=toMin(actualStart)-toMin(s.start);let cls=Math.abs(diff)<=10&&Math.abs(startDiff)<=10?'ok':Math.abs(diff)<=30&&Math.abs(startDiff)<=20?'warn':'bad';const sign=diff>0?'+':'';return {label:`Rostered ${fmtTime(s.start)}–${fmtTime(s.end)} · Actual ${fmtTime(actualStart)}–${fmtTime(actualEnd)} · Variance ${sign}${diff} mins`,mins:diff,cls};}
function money(n){return '$'+(Number(n)||0).toFixed(2);}
function employeeHourlyRate(emp){return emp?.role==='employee'?WW_PAY_RATE:(Number(emp?.payRate)||0);}
function employeeKmRate(emp){return emp?.role==='employee'?WW_KM_RATE:(Number(emp?.kmRate)||0);}
function employeePayAmount(emp,hrs){return employeeHourlyRate(emp)*hrs;}
function kmAmount(emp,km){return employeeKmRate(emp)*(Number(km)||0);}
function payDayForWeek(anchor){return addDays(startOfWeek(anchor||today()),WW_PAY_DAY_OFFSET);}
function payWeekLabel(anchor){const ds=weekDates(anchor||today());return `${fmtDate(ds[0])} – ${fmtDate(ds[6])}`;}
function employeePayrollTotals(emp,rows){const approved=rows.filter(r=>r.status==='approved');const paid=rows.filter(r=>r.status==='paid');const pending=rows.filter(r=>r.status==='pending');const flagged=rows.filter(r=>r.status==='flagged');const hours=approved.reduce((a,r)=>a+paidHours(r),0);const km=approved.reduce((a,r)=>a+(Number(r.km)||0),0);const wages=employeePayAmount(emp,hours);const travel=kmAmount(emp,km);return {approved,pending,flagged,paid,hours,km,wages,travel,total:wages+travel};}
function csvSafe(v){return '"'+String(v??'').replace(/"/g,'""')+'"';}
function downloadTextFile(filename,text,type='text/csv'){const blob=new Blob([text],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportPayrollCSV(){const anchor=state.payrollAnchor||today();const start=startOfWeek(anchor);const end=addDays(start,6);const payday=payDayForWeek(anchor);const rows=payrollRecords(anchor,'weekly');const header=['Employee','Week Start','Week End','Pay Day','Date','Client / Tracking','Rostered Start','Rostered End','Actual Start','Actual Finish','Break Mins','Ordinary Hours','Hourly Rate','Wages','Kilometres','KM Rate','Travel Allowance','Total Payable','Status','Notes'];const out=[header.map(csvSafe).join(',')];rows.forEach(r=>{const emp=userById(r.userId)||{};const sh=linkedShiftForRecord(r);const hrs=paidHours(r);const km=Number(r.km)||0;const wages=employeePayAmount(emp,hrs);const travel=kmAmount(emp,km);out.push([emp.name||'',start,end,payday,r.date,clientName(r.clientId),sh?.start||'',sh?.end||'',r.clockIn?.slice(11,16)||'',r.clockOut?.slice(11,16)||'',r.breakMins||0,hrs.toFixed(2),employeeHourlyRate(emp).toFixed(2),wages.toFixed(2),km.toFixed(2),employeeKmRate(emp).toFixed(2),travel.toFixed(2),(wages+travel).toFixed(2),statusLabel(r.status),r.notes||''].map(csvSafe).join(','));});downloadTextFile(`westwonders-xero-weekly-payroll-${start}-to-${end}.csv`,out.join('\n'));}
function exportPayrollSummaryCSV(){const anchor=state.payrollAnchor||today();const start=startOfWeek(anchor);const end=addDays(start,6);const payday=payDayForWeek(anchor);const rows=payrollRecords(anchor,'weekly');const emps=state.users.filter(u=>u.role==='employee');const header=['Employee','Week Start','Week End','Pay Day','Ordinary Hours Approved','Hourly Rate','Wages','Approved KM','KM Rate','Travel Allowance','Total To Enter In Xero','Pending Entries','Flagged Entries','Paid/Locked Entries'];const out=[header.map(csvSafe).join(',')];emps.forEach(emp=>{const mine=rows.filter(r=>r.userId===emp.id);const t=employeePayrollTotals(emp,mine);out.push([emp.name,start,end,payday,t.hours.toFixed(2),employeeHourlyRate(emp).toFixed(2),t.wages.toFixed(2),t.km.toFixed(2),employeeKmRate(emp).toFixed(2),t.travel.toFixed(2),t.total.toFixed(2),t.pending.length,t.flagged.length,t.paid.length].map(csvSafe).join(','));});downloadTextFile(`westwonders-xero-summary-${start}-to-${end}.csv`,out.join('\n'));}
function exportPayrollExcel(){const anchor=state.payrollAnchor||today();const start=startOfWeek(anchor);const end=addDays(start,6);const payday=payDayForWeek(anchor);const rows=payrollRecords(anchor,'weekly');const esc=v=>String(v??'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));let html='<table><thead><tr>'+['Employee','Week Start','Week End','Pay Day','Date','Client','Hours','Rate','Wages','KM','KM Rate','Travel','Total','Status','Notes'].map(h=>`<th>${h}</th>`).join('')+'</tr></thead><tbody>';rows.forEach(r=>{const emp=userById(r.userId)||{};const hrs=paidHours(r);const km=Number(r.km)||0;const wages=employeePayAmount(emp,hrs);const travel=kmAmount(emp,km);html+='<tr>'+[emp.name||'',start,end,payday,r.date,clientName(r.clientId),hrs.toFixed(2),employeeHourlyRate(emp).toFixed(2),wages.toFixed(2),km.toFixed(2),employeeKmRate(emp).toFixed(2),travel.toFixed(2),(wages+travel).toFixed(2),statusLabel(r.status),r.notes||''].map(v=>`<td>${esc(v)}</td>`).join('')+'</tr>';});html+='</tbody></table>';downloadTextFile(`westwonders-xero-weekly-payroll-${start}-to-${end}.xls`,html,'application/vnd.ms-excel');}

function recordsForUserDate(uid,d){return state.clockRecords.filter(r=>r.userId===uid&&r.date===d).sort((a,b)=>a.clockIn.localeCompare(b.clockIn));}
function recordsForDate(d){return state.clockRecords.filter(r=>r.date===d).sort((a,b)=>a.clockIn.localeCompare(b.clockIn));}
function weekRecordHours(uid,anchor){return weekDates(anchor).reduce((sum,d)=>sum+recordsForUserDate(uid,d).reduce((a,r)=>a+recordHours(r),0),0);}
function mapsUrl(addr){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(addr||'');}
function unreadAlerts(role){const u=me();return ((state&&state.alerts)||[]).filter(a=>(u?alertVisibleToUser(a,u):(String((a&&a.kind)||'').toLowerCase()!=='message'&&(!role||a.role===role)))&&!a.read).length;}

/* ---------- toast ---------- */
let toastT;
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2200);}

/* ---------- icons ---------- */
const I = {
  /* fresh bottom-nav icon set (distinct from sidebar icons) */
  b_home:'<path d="M3 10.7 12 3.5l9 7.2"/><path d="M5.5 9.5V20h13V9.5"/><path d="M9.5 20v-6h5v6"/>',
  b_roster:'<rect x="3.5" y="4.5" width="17" height="16" rx="3"/><path d="M3.5 9h17"/><path d="M8 3v3M16 3v3"/><path d="M7 13h3v3H7z"/>',
  b_chat:'<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4 4v-4A2.5 2.5 0 0 1 4 13.5z"/>',
  b_clock:'<circle cx="12" cy="12.5" r="8.5"/><path d="M12 8v4.7l3.2 2"/><path d="M9 2.5h6"/>',
  b_avail:'<path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 21H6a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M8 3v4M16 3v4"/><path d="m8.5 13.5 2.5 2.5 4.5-4.5"/>',
  b_team:'<circle cx="9" cy="8" r="3.2"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.5" cy="9" r="2.4"/><path d="M16 14c2.6 0 4.5 1.8 4.5 4.4"/>',
  b_account:'<circle cx="12" cy="7.5" r="4"/><path d="M4 20c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8"/>',
  home:'<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9.5h12V10"/><path d="M10 19.5v-5h4v5"/>',
  roster:'<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M8 3.5V6.5M16 3.5V6.5M4 9.5h16"/><circle cx="8.5" cy="13.5" r="1"/><circle cx="12" cy="13.5" r="1"/><circle cx="15.5" cy="13.5" r="1"/>',
  clock:'<circle cx="12" cy="12" r="8.2"/><path d="M12 7.5V12l3 1.8"/>',
  chat:'<path d="M5 17.5c-.9 0-1.6-.7-1.6-1.6V7.6c0-.9.7-1.6 1.6-1.6h14c.9 0 1.6.7 1.6 1.6v8.3c0 .9-.7 1.6-1.6 1.6h-8.5L7 20.5v-3H5z"/>',
  team:'<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/><path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 14c2 .4 3.6 2.1 3.6 4.4"/>',
  clients:'<path d="M5 20v-9l7-5 7 5v9"/><path d="M9.5 20v-5h5v5"/><path d="M3.5 11 12 5l8.5 6"/>',
  docs:'<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z"/><path d="M13.5 3.5V8h4.5"/><path d="M9 13h6M9 16.5h6"/>',
  download:'<path d="M12 4v10"/><path d="M8 11l4 4 4-4"/><path d="M5 19h14"/>',
  account:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5"/>',
  bell:'<path d="M18 16V11a6 6 0 0 0-12 0v5l-1.5 2.5h15z"/><path d="M9.5 18.5a2.5 2.5 0 0 0 5 0"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  clip:'<path d="M21.4 11.05 12.5 19.9a5.5 5.5 0 0 1-7.78-7.78l8.49-8.49a3.67 3.67 0 0 1 5.19 5.19l-8.49 8.49a1.83 1.83 0 0 1-2.6-2.6l7.78-7.77" fill="none"/>',
  camera:'<path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H8l1.5-2h5L16 6h1.5A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z"/><circle cx="12" cy="12.5" r="3.4"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  logout:'<path d="M15 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3"/><path d="M10 17l-5-5 5-5"/><path d="M5 12h11"/>',
  pin:'<path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  phone:'<path d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V20a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 4.5 6.6 1.5 1.5 0 0 1 6 4z"/>',
  mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4 7 8 5.5L20 7"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  send:'<path d="M21 4 3 11.2l6.6 2.3M21 4l-6.4 16-4.9-6.5M21 4 9.6 13.5" fill="none"/>',
  check:'<path d="M5 12.5 10 17.5 19 6.5"/>',
  dot:'<circle cx="12" cy="12" r="5" fill="currentColor" stroke="none"/>',
  smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',
  edit:'<path d="M5 19h14M14 5l4 4-9 9H5v-4z"/>',
  trash:'<path d="M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13"/>',
  archive:'<path d="M4 7h16v4H4z"/><path d="M6 11v8h12v-8"/><path d="M10 15h4"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="m21 21-4-4"/>',
  eye:'<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="3"/>',
  cal:'<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M8 3.5V6.5M16 3.5V6.5M4 9.5h16"/>',
  hours:'<circle cx="12" cy="12" r="8.2"/><path d="M12 7.5V12l3 1.8"/>',
  alert:'<path d="M12 4 3 19.5h18z"/><path d="M12 10v4.5M12 17h.01"/>',
  star:'<path d="M12 4l2.5 5 5.5.8-4 4 1 5.5-5-2.6L7.5 19.3l1-5.5-4-4 5.5-.8z"/>',
  thumbtack:'<path d="M15 3l6 6-3 1-4 4-1 5-2-2-4 4-1-1 4-4-2-2 5-1 4-4z"/>',
  car:'<path d="M5 11l1.5-4.2A2 2 0 0 1 8.4 5.5h7.2a2 2 0 0 1 1.9 1.3L19 11"/><path d="M4 11h16a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-1v1.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V18.5H9V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V18.5H5a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1z"/><circle cx="7.5" cy="14.5" r="1"/><circle cx="16.5" cy="14.5" r="1"/>',
  dollar:'<path d="M12 3v18M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 2.7 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3"/>',
  lock:'<rect x="5.5" y="10" width="13" height="10.5" rx="2.2"/><path d="M8.5 10V7.8a3.5 3.5 0 0 1 7 0V10"/><path d="M12 14.2v2.2"/>',
};
function svg(name,cls){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls||''}">${I[name]||''}</svg>`;}


/* ===========================================================
   EMPLOYEE INVITE + INSTALL HELP
   =========================================================== */
let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',ev=>{
  ev.preventDefault();
  deferredInstallPrompt=ev;
  const b=document.getElementById('installAppBtn');
  if(b)b.textContent='Install app';
});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;toast('App installed on this device');});
function isStandaloneApp(){return (window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||window.navigator.standalone===true;}
function isIOSDevice(){return /iPhone|iPad|iPod/i.test(navigator.userAgent||navigator.platform||'');}
function isAndroidDevice(){return /Android/i.test(navigator.userAgent||'');}
function inviteLoginId(p){return (p&&((p.phone||'').trim()||(p.email||'').trim()))||'';}
function inviteLink(p){
  const base=appLink();
  try{
    const url=new URL(base, location.href);
    url.searchParams.set('install','1');
    const login=inviteLoginId(p);
    if(login)url.searchParams.set('login',login);
    return url.toString();
  }catch(_){
    const sep=base.includes('?')?'&':'?';
    const login=encodeURIComponent(inviteLoginId(p));
    return base+sep+'install=1'+(login?'&login='+login:'');
  }
}
function readInviteParams(){
  try{return new URLSearchParams(location.search||'');}catch(_){return new URLSearchParams('');}
}
function applyInvitePrefill(){
  const params=readInviteParams();
  const login=params.get('login')||'';
  const idEl=document.getElementById('loginId');
  if(idEl&&login&&!idEl.value){idEl.value=login;refreshLoginRecognition();}
  const card=document.getElementById('installPromptCard');
  if(card){
    if(isStandaloneApp())card.classList.add('installed');
    else card.classList.remove('installed');
    if(params.get('install')==='1')card.classList.add('invite-open');
  }
}

/* WW_V139_NOTIFICATION_DEEPLINK_START
   Phone notification taps now open the exact chat/message or notification item. */
function readNotificationParams(){
  const p=readInviteParams();
  const out={
    tab:p.get('tab')||'',
    kind:p.get('kind')||'',
    threadId:p.get('threadId')||p.get('thread')||'',
    messageId:p.get('messageId')||p.get('message')||'',
    alertId:p.get('alertId')||p.get('alert')||'',
    shiftId:p.get('shiftId')||p.get('shift')||'',
    updateId:p.get('updateId')||p.get('update')||''
  };
  return out;
}
function hasNotificationRoute(d){
  return !!(d&&(d.tab||d.kind||d.threadId||d.messageId||d.alertId||d.shiftId||d.updateId));
}
function cleanNotificationUrl(){
  try{
    const url=new URL(location.href);
    ['tab','kind','thread','threadId','message','messageId','alert','alertId','shift','shiftId','update','updateId'].forEach(k=>url.searchParams.delete(k));
    history.replaceState(null,'',url.pathname+(url.search||'')+(url.hash||''));
  }catch(e){}
}
function wwRouteCss(v){try{return (window.CSS&&CSS.escape)?CSS.escape(String(v||'')):String(v||'').replace(/[^a-zA-Z0-9_-]/g,'\\$&');}catch(e){return String(v||'');}}
function highlightRouteTarget(selector){
  try{
    setTimeout(()=>{
      const el=document.querySelector(selector);
      if(!el)return;
      el.classList.add('ww-route-highlight');
      el.scrollIntoView({block:'center',inline:'nearest',behavior:'smooth'});
      setTimeout(()=>{try{el.classList.remove('ww-route-highlight');}catch(_){}} ,2600);
    },140);
  }catch(e){}
}
function notificationTabForKind(kind){
  const k=String(kind||'').toLowerCase();
  if(k==='message'||k==='photo-comment')return 'chat';
  if(k==='shift'||k==='roster')return 'roster';
  if(k==='timesheet'||k==='autoclockout')return 'clock';
  if(k==='document'||k==='docs')return 'docs';
  return 'alerts';
}
function applyNotificationDeepLink(data){
  try{
    const d=data||readNotificationParams();
    if(!hasNotificationRoute(d))return false;
    const u=me();
    if(!u){try{sessionStorage.setItem('ww_pending_notification_route',JSON.stringify(d));}catch(_){ }return false;}
    let tab=d.tab||notificationTabForKind(d.kind);
    if((d.threadId||d.messageId)&&(!d.alertId||String(d.kind).toLowerCase()==='message'||String(d.kind).toLowerCase()==='photo-comment'))tab='chat';
    if(tab==='chat'){
      state.activeTab='chat';
      if(d.threadId){state.activeThreadId=d.threadId;state.chatMobileThread=true;state.showArchivedChats=false;markThreadRead(d.threadId,u);}
      saveLocalState(state);render();scrollChat();
      if(d.messageId)highlightRouteTarget(`.msg[data-mid="${wwRouteCss(d.messageId)}"]`);
      else if(d.threadId)highlightRouteTarget(`.cv-row[data-id="${wwRouteCss(d.threadId)}"]`);
    }else{
      state.activeTab=tab;
      if(tab==='alerts'&&d.alertId){
        state.openAlerts=state.openAlerts||{};state.openAlerts[d.alertId]=true;
        const a=(state.alerts||[]).find(x=>x&&x.id===d.alertId);if(a){a.read=true;a.updatedAt=nowIso();}
      }
      if(tab==='roster'&&d.shiftId){
        const sh=(state.shifts||[]).find(x=>x&&x.id===d.shiftId);
        if(sh){state.rosterAnchor=startOfWeek(sh.date||today());state.rosterDate=sh.date||state.rosterDate;}
      }
      saveLocalState(state);render();
      if(tab==='alerts'&&d.alertId)highlightRouteTarget(`.notif-row[data-id="${wwRouteCss(d.alertId)}"]`);
      if(tab==='roster'&&d.shiftId)highlightRouteTarget(`[data-shift="${wwRouteCss(d.shiftId)}"],[data-id="${wwRouteCss(d.shiftId)}"]`);
    }
    cleanNotificationUrl();
    return true;
  }catch(e){return false;}
}
function applyNotificationDeepLinkFromUrl(){
  let d=readNotificationParams();
  if(!hasNotificationRoute(d)){try{d=JSON.parse(sessionStorage.getItem('ww_pending_notification_route')||'null');}catch(e){d=null;}}
  if(hasNotificationRoute(d)&&applyNotificationDeepLink(d)){try{sessionStorage.removeItem('ww_pending_notification_route');}catch(e){}}
}
(function installNotificationRouteStyles(){
  try{
    if(document.getElementById('ww-v139-notification-route-style'))return;
    const st=document.createElement('style');
    st.id='ww-v139-notification-route-style';
    st.textContent='.ww-route-highlight{outline:3px solid rgba(55,120,64,.55)!important;box-shadow:0 0 0 6px rgba(55,120,64,.16),0 10px 24px rgba(22,55,28,.18)!important;border-radius:16px!important}';
    document.head.appendChild(st);
  }catch(e){}
})();
/* WW_V139_NOTIFICATION_DEEPLINK_END */
function installGuideBody(){
  if(isStandaloneApp())return `<div class="install-guide"><div class="install-ok">✓ Already installed</div><p>This app is already running from the Home Screen.</p></div>`;
  if(isIOSDevice())return `<div class="install-guide"><p><strong>iPhone install steps:</strong></p><ol><li>Open this link in <strong>Safari</strong>.</li><li>Tap the <strong>Share</strong> button.</li><li>Scroll and tap <strong>Add to Home Screen</strong>.</li><li>Tap <strong>Add</strong>.</li></ol><p class="co-hint">Apple does not allow websites to add themselves to the Home Screen automatically. The employee must tap Add once.</p></div>`;
  if(isAndroidDevice())return `<div class="install-guide"><p><strong>Android install steps:</strong></p><ol><li>Tap <strong>Install app</strong> if your browser shows it.</li><li>If not, open Chrome menu <strong>⋮</strong>.</li><li>Tap <strong>Add to Home screen</strong> or <strong>Install app</strong>.</li></ol><p class="co-hint">Android still requires the employee to confirm the install once.</p></div>`;
  return `<div class="install-guide"><p><strong>Install steps:</strong></p><ol><li>Open the app link in your browser.</li><li>Use the browser menu to install/add the app.</li><li>Sign in with the login details from your invite.</li></ol></div>`;
}
async function startInstallFlow(){
  if(isStandaloneApp()){toast('App is already installed');return;}
  if(deferredInstallPrompt){
    try{
      deferredInstallPrompt.prompt();
      const choice=await deferredInstallPrompt.userChoice.catch(()=>null);
      deferredInstallPrompt=null;
      if(choice&&choice.outcome==='accepted')toast('Installing app…'); else openModal('install-guide',{});
    }catch(_){openModal('install-guide',{});}
  }else{
    openModal('install-guide',{});
  }
}
function installGuideModal(){
  return modalShell('Install app', installGuideBody(), `<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button><button class="btn btn-primary" data-action="install-app">Install app</button>`);
}

/* ===========================================================
   AUTH / LOGIN
   =========================================================== */
function loginPhoneKey(v){
  const digits=String(v||'').replace(/\D/g,'');
  if(/^61(4\d{8})$/.test(digits))return '0'+digits.slice(2);
  if(/^4\d{8}$/.test(digits))return '0'+digits;
  return digits;
}
function findLoginUser(idf){
  const key=String(idf||'').toLowerCase().trim();
  const phoneKey=loginPhoneKey(idf);
  return state.users.find(x=>{
    const email=String(x.email||'').toLowerCase().trim();
    const phone=loginPhoneKey(x.phone||'');
    return (email&&email===key)||(phoneKey&&phone&&phone===phoneKey);
  })||null;
}
function attemptLogin(idf,pw){
  const u=findLoginUser(idf);
  if(u&&u.status==='archived')return 'archived';
  const pass=String(pw||'').trim();
  if(u&&String(u.password||'')===pass){
    if(!u.hasLoggedIn){u.hasLoggedIn=true;u.updatedAt=nowIso();}
    state.sessionUserId=u.id;
    state.activeTab=(u.role==='employee'&&pass==='staff123')?'account':'home';
    save();
    setTimeout(()=>{try{applyNotificationDeepLinkFromUrl();}catch(e){}},0);
    setTimeout(()=>{ if(typeof Notification!=='undefined' && Notification.permission==='granted') registerPushSubscription(false); },700);
    return true;
  }
  return false;
}
function wwLoginSleep(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
async function attemptLoginAfterCloudRefresh(idf,pw){
  // Employee phones often start with a fresh Home Screen cache that only has the
  // admin seed account. Pull the shared cloud state before rejecting staff login.
  let res=attemptLogin(idf,pw);
  if(res===true || res==='archived')return res;
  if(location.protocol==='file:')return res;
  try{
    const btn=document.querySelector('[data-action="do-login"]');
    if(btn){btn.disabled=true;btn.dataset.oldText=btn.textContent||'';btn.textContent='Checking staff details…';}
    for(let i=0;i<4;i++){
      try{await pullCloudSync();}catch(e){}
      await wwLoginSleep(i===0?450:700);
      res=attemptLogin(idf,pw);
      if(res===true || res==='archived')break;
      if(findLoginUser(idf))break;
    }
    res=attemptLogin(idf,pw);
    if(btn){btn.disabled=false;btn.textContent=btn.dataset.oldText||'Sign in';delete btn.dataset.oldText;}
  }catch(e){
    try{const btn=document.querySelector('[data-action="do-login"]');if(btn){btn.disabled=false;btn.textContent=btn.dataset.oldText||'Sign in';delete btn.dataset.oldText;}}catch(_){}
  }
  return res;
}
function logout(){state.sessionUserId=null;save();render();}

function appLink(){return (location.origin&&location.origin!=='null')?location.origin:location.href.split('#')[0];}
function inviteMessage(p){
  const first=(p.name||'there').split(' ')[0];
  const login=inviteLoginId(p)||'(use your mobile number or email)';
  return `Hi ${first}, you've been added to the Westwondersandco Workforce Hub.\n\n`+
    `Open this link: ${inviteLink(p)}\n\n`+
    `Login: ${login}\n`+
    `Temporary password: ${p.password||'staff123'}\n\n`+
    `When the page opens, install it to your Home Screen so it works like an app.\n`+
    `• Android: tap Install app, or Chrome menu ⋮ → Install app/Add to Home screen.\n`+
    `• iPhone: open in Safari → Share → Add to Home Screen → Add.\n\n`+
    `After signing in, go to Profile to set your own password.`;
}
function refreshLoginRecognition(){
  const idEl=document.getElementById('loginId');const box=document.getElementById('lcRecognised');if(!idEl||!box)return;
  const u=findLoginUser(idEl.value);
  if(u&&u.status!=='archived'){
    const first=escapeHtml(u.name.split(' ')[0]);
    const returning=!!u.hasLoggedIn;
    const title=returning?`Welcome back, ${first}`:`Hi ${first} \u{1F44B}`;
    const sub=returning?'Just enter your password to sign in':'Enter the password from your invite to get started';
    box.innerHTML=`<div class="lc-rec-inner"><span class="lc-rec-av">${initials(u.name)}</span><div><b>${title}</b><em>${sub}</em></div></div>`;
    box.classList.add('show');
  }else{box.classList.remove('show');box.innerHTML='';}
}
document.addEventListener('input',e=>{ if(e.target&&e.target.id==='loginId')refreshLoginRecognition(); });
document.addEventListener('change',e=>{ if(e.target&&e.target.id==='loginId')refreshLoginRecognition(); });
function loginScreen(){
  return `
  <div class="login-root">
    <main class="login-stage">
      <div class="login-card">
        <div class="lc-logo"><img src="logo.png?v=v214-logo" alt="Westwondersandco"></div>
        <header class="lc-head">
          <span class="lc-eyebrow">Westwondersandco</span>
          <h2>Workforce Hub</h2>
          <p>Sign in to view your roster, clock in and message your team.</p>
        </header>
        <div class="login-err" id="loginErr"></div>
        <div class="lc-recognised" id="lcRecognised"></div>
        <div class="field" id="lcIdField">
          <label for="loginId">Email or mobile number</label>
          <input class="input" id="loginId" type="text" placeholder="name@email.com" autocapitalize="none" autocorrect="off" spellcheck="false" autocomplete="username" inputmode="email">
        </div>
        <div class="field">
          <label for="loginPw">Password</label>
          <div class="pw-wrap">
            <input class="input" id="loginPw" type="password" placeholder="Enter your password" autocomplete="current-password">
            <button class="pw-eye" data-action="toggle-pw" aria-label="Show password" type="button">${svg('eye')}</button>
          </div>
        </div>
        <button class="btn btn-primary btn-block lc-cta" data-action="do-login">Sign in</button>
        <div class="install-prompt-card" id="installPromptCard">
          <div class="ipc-text"><strong>Use it like a real app</strong><span>Install to your Home Screen, then log in with the details admin sent you.</span></div>
          <button class="btn btn-soft btn-block" id="installAppBtn" data-action="install-app" type="button">Install app</button>
          <button class="btn btn-ghost btn-block" data-action="install-help" type="button">Show install steps</button>
        </div>
        <p class="lc-help">First time signing in or forgotten your password?<br><span>Ask your administrator for your login details.</span></p>
      </div>
      <footer class="login-foot">
        <span>Westwondersandco</span>
        <span class="lf-dot"></span>
        <span>Secure team sign-in</span>
      </footer>
    </main>
  </div>`;
}

/* ===========================================================
   SHELL  (sidebar + topbar + mobile nav)
   =========================================================== */
function navItems(user){
  const items=[
    {tab:'home',label:'Dashboard',icon:'home'},
    {tab:'roster',label:'Roster',icon:'roster'},
    {tab:'chat',label:'Messages',icon:'chat'},
    ...(user.role==='admin'?[{tab:'bookings',label:'Bookings',icon:'bell'}]:[]),
    {tab:'clock',label:'Clock',icon:'clock'},
    {tab:'avail',label:'Availability',icon:'cal'},
  ];
  if(user.role==='admin'){
    // Staff and Clients now live inside one clean Directory hub.
    items.push({tab:'directory',label:'Directory',icon:'team'});
  }
  // Documents were moved out of the bottom menu and into Profile/Account.
  items.push({tab:'account',label:'Profile',icon:'account'});
  return items;
}
function mobileTabs(user){
  return user.role==='admin'
    ? ['home','roster','bookings','chat','clock','directory','account']
    : ['home','roster','chat','clock','avail','account'];
}

function shell(user){
  const items=navItems(user);
  const aBadge=unreadAlerts(user.role);
  const sidebar=`
   <aside class="sidebar">
     <div class="sidebar-brand">
       <img src="logo.png?v=v214-logo" alt="" onerror="this.style.display='none'">
       <div><div class="bname">${state.company.name}</div><div class="btag">Workforce</div></div>
     </div>
     <div class="nav-group-label">Menu</div>
     ${items.map(it=>`<a class="nav-item ${state.activeTab===it.tab?'active':''}" data-action="tab" data-tab="${it.tab}">${svg(it.icon)}<span>${it.label}</span></a>`).join('')}
     <div class="sidebar-foot">
       <div class="side-user">
         <div class="avatar ${user.role==='admin'?'clay':'sage'}">${initials(user.name)}</div>
         <div style="min-width:0"><div class="su-name">${user.name.split(' ')[0]}</div><div class="su-role">${user.role}</div></div>
         <button class="side-logout" data-action="logout" title="Log out">${svg('logout')}<span>Log out</span></button>
       </div>
     </div>
   </aside>`;
  const bIcon={home:'b_home',roster:'b_roster',chat:'b_chat',bookings:'bell',clock:'b_clock',avail:'b_avail',directory:'b_team',account:'b_account'};
  // ===== Fresh mobile menu (rebuilt from scratch) =====
  const mnav=`
   <nav class="wwnav" aria-label="Main navigation">
     ${mobileTabs(user).map(t=>{const it=items.find(x=>x.tab===t)||{tab:t,label:t,icon:t};
       const active=state.activeTab===t;
       return `<button class="wwnav-item${active?' is-active':''}" data-action="tab" data-tab="${t}" aria-label="${it.label}"${active?' aria-current="page"':''}>
         <span class="wwnav-ic">${svg(bIcon[t]||it.icon)}</span>
         <span class="wwnav-lbl">${it.label}</span>
       </button>`;}).join('')}
   </nav>`;
  return `<div class="shell">${sidebar}
    <div class="main">
      <header class="topbar">
        <div>
          <h1 id="pageTitle">${pageTitle(user)}</h1>
          <div class="sub" id="pageSub">${pageSub(user)}</div>
        </div>
        <div class="topbar-actions" aria-label="Header shortcuts">
          <button class="top-profile" data-action="tab" data-tab="account" title="Your profile" aria-label="Open your profile">
            <span class="avatar sm ${user.role==='admin'?'clay':'sage'}">${initials(user.name)}</span>
            <span class="tp-meta"><span class="tp-name">${user.name.split(' ')[0]}</span><span class="tp-role">${user.role}</span></span>
          </button>
          <button type="button" class="icon-btn notif-bell-btn" data-action="open-alerts" title="Notifications" aria-label="Open notifications">${svg('bell')}${aBadge?'<span class="dot"></span>':''}</button>
        </div>
      </header>
      <main class="content"><div class="page" id="page">${pageBody(user)}</div></main>
    </div>${mnav}</div>`;
}
function pageTitle(u){
  const map={home:`Hi, ${u.name.split(' ')[0]} \uD83D\uDC4B`,roster:'Roster',clock:u.role==='admin'?'Clock':'Time Clock',avail:'Availability',chat:'Messages',directory:'Directory',team:'Employees',clients:'Clients',docs:'Documents',bookings:'Bookings',account:'Profile',alerts:'Notifications'};
  return map[state.activeTab]||'';
}
function pageSub(u){
  const map={home:`Welcome back \u2014 ${fmtDateLong(today())}`,roster:u.role==='admin'?'Plan and assign shifts':'Your scheduled shifts this week',clock:u.role==='admin'?'Hours, wages and timesheets by week':'Clock in and out of shifts',avail:u.role==='admin'?'Team availability for rostering':'Set when you can work',chat:u.role==='admin'?'Team messages, group chats & announcements':'Messages with your team',bookings:'Admin-only email jobs and reminders',directory:'Staff and clients in one clean hub',team:`${state.users.filter(x=>x.role==='employee'||x.role==='admin').length} employees saved`,clients:`${state.clients.length} clients`,docs:u.role==='admin'?'Staff documents under profile':'Your files & documents to sign',account:u.role==='admin'?'Your profile and settings':'Your profile, documents and settings',alerts:'Recent activity'};
  return map[state.activeTab]||'';
}
function pageBody(u){
  switch(state.activeTab){
    case 'home': return u.role==='admin'?adminHome(u):employeeHome(u);
    case 'roster': return rosterPage(u);
    case 'clock': return u.role==='admin'?adminTimesheets(u):clockPage(u);
    case 'avail': return u.role==='admin'?adminAvailPage(u):availPage(u);
    case 'chat': return chatPage(u);
    case 'bookings': return u.role==='admin'?adminBookingsPage(u):accountPage(u);
    case 'directory': return u.role==='admin'?directoryPage(u):accountPage(u);
    case 'team': return teamPage(u);
    case 'clients': return clientsPage(u);
    case 'docs': return u.role==='admin'?adminDocsPage(u):empDocsPage(u);
    case 'account': return accountPage(u);
    case 'alerts': return alertsPage(u);
    default: return adminHome(u);
  }
}

/* ===========================================================
   DASHBOARD
   =========================================================== */
function statCard(value,label,sub,tone){
  return `<div class="stat ${tone||''}"><div class="stat-v">${value}</div><div class="stat-l">${label}</div>${sub?`<div class="stat-s">${sub}</div>`:''}</div>`;
}
function updatesSection(u){
  return updatesSectionBody(u);
}
const UPD_EMOJIS=['👍','❤️','🎉','👏','🙌','💪'];
function updReactionsBar(up,u){
  const rx=up.reactions||{};
  const counts=Object.keys(rx).filter(e=>Array.isArray(rx[e])&&rx[e].length);
  return `<div class="upd-react">
    <div class="upd-react-chips">
      ${counts.map(e=>{const mine=rx[e].includes(u.id);return `<button class="rx-chip ${mine?'mine':''}" data-action="toggle-upd-rx" data-id="${up.id}" data-emoji="${e}">${e}<span class="rx-n">${rx[e].length}</span></button>`;}).join('')}
      <button class="upd-react-add" data-action="upd-react-pick" data-id="${up.id}" aria-label="Add reaction">${svg('smile')}</button>
    </div>
  </div>`;
}
function updCommentsBlock(up,u){
  const comments=Array.isArray(up.comments)?up.comments.slice().sort((a,b)=>String(a.createdAt).localeCompare(String(b.createdAt))):[];
  return `<div class="upd-comments">
    <div class="upd-comments-head">${comments.length?`${comments.length} comment${comments.length>1?'s':''}`:'Comments'}</div>
    <div class="upd-comment-list">
      ${comments.map(c=>{const au=userById(c.authorId);const replies=Array.isArray(c.replies)?c.replies:[];
        return `<div class="upd-comment">
          <div class="ucm-av"><div class="avatar sm ${au?.role==='admin'?'clay':'sage'}">${initials(au?.name||'?')}</div></div>
          <div class="ucm-body">
            <div class="ucm-top"><span class="ucm-name">${escapeHtml(au?.name||'Someone')}</span><span class="ucm-time">${timeAgo(c.createdAt)}</span></div>
            <div class="ucm-text">${escapeHtml(c.text)}</div>
            <button class="ucm-reply-btn" data-action="upd-reply" data-id="${up.id}" data-cid="${c.id}">Reply</button>
            ${replies.length?`<div class="ucm-replies">${replies.map(r=>{const ra=userById(r.authorId);return `<div class="ucm-reply"><span class="ucm-name">${escapeHtml(ra?.name||'Someone')}</span> <span class="ucm-text">${escapeHtml(r.text)}</span> <span class="ucm-time">${timeAgo(r.createdAt)}</span></div>`;}).join('')}</div>`:''}
          </div>
        </div>`;}).join('')}
    </div>
    <div class="upd-comment-add">
      <input class="upd-comment-input" id="updc-${up.id}" placeholder="Write a comment…" data-action="upd-comment-input" data-id="${up.id}">
      <button class="upd-comment-send" data-action="upd-comment-send" data-id="${up.id}">${svg('send')}</button>
    </div>
  </div>`;
}
function updatesSectionBody(u){
  const deletedUpdates=state.deletedUpdates||{};
  const ups=(state.updates||[]).filter(x=>x && !x._deleted && !deletedUpdates[x.id] && (x.audience==='all'||x.audience===u.role)).sort((a,b)=>(b.pinned-a.pinned)||String(b.createdAt||'').localeCompare(String(a.createdAt||'')));
  if(!state.openUpdates) state.openUpdates={};
  if(!state.readUpdates) state.readUpdates={};
  const readSet=state.readUpdates[u.id]||{};
  const unread=ups.filter(up=>!readSet[up.id]).length;
  return `
  <div class="updates-panel important-updates-panel">
  <div class="section-head" style="margin-top:0">
    <h2><span class="iu-pulse">!</span> Important updates</h2><span class="count iu-count ${unread===0?'all-read':''}">${unread}</span>
    <span class="spacer"></span>
    ${u.role==='admin'?`<button class="btn btn-soft btn-sm" data-action="new-update">${svg('plus')} Post</button>`:''}
  </div>
  ${ups.length? `<ul class="updates-list">${ups.map(up=>{const au=userById(up.authorId);const open=!!state.openUpdates[up.id];const isUnread=!readSet[up.id];
    return `<li class="upd-item ${up.pinned?'pinned':''} ${open?'open':''} ${isUnread?'unread':'read'}">
      <button class="upd-row" data-action="toggle-update" data-id="${up.id}">
        <span class="upd-dot">${svg(up.pinned?'star':'alert')}</span><span class="upd-priority">Important</span>
        <span class="upd-text">
          <span class="upd-title"><span class="upd-titletext">${escapeHtml(up.title)}</span>${isUnread?'<em class="upd-new">NEW</em>':''}${up.pinned?'<em class="upd-pin">PINNED</em>':''}</span>
          <span class="upd-meta">${au?au.name.split(' ')[0]:'Admin'} \u00b7 ${timeAgo(up.createdAt)}</span>
        </span>
        ${isUnread?'<span class="upd-unread-dot"></span>':''}
        <span class="upd-chev">${svg('back')}</span>
      </button>
      ${u.role==='admin'?`<button type="button" class="upd-quick-del" data-action="del-update" data-id="${up.id}" aria-label="Delete update" title="Delete update">${svg('trash')}<span>Delete</span></button>`:''}
      ${open?`<div class="upd-body">
        <p>${escapeHtml(up.body)}</p>
        ${updReactionsBar(up,u)}
        ${updCommentsBlock(up,u)}
      </div>`:''}
    </li>`;}).join('')}</ul>` : '<p class="upd-empty">No updates right now.</p>'}
  </div>`;
}

function pendingApprovalsPanel(u){
  const pend=state.clockRecords.filter(r=>r.status==='pending');
  if(!pend.length)return '';
  const open=!!state.approvalsOpen;
  return `
  <details class="approvals-panel" ${open?'open':''}>
    <summary class="approvals-summary" data-action="toggle-approvals">
      <span class="appr-bell">${svg('clock')}</span>
      <span class="appr-sum-txt"><strong>Pending approvals</strong><span>${pend.length} timesheet${pend.length!==1?'s':''} awaiting review</span></span>
      <span class="appr-count">${pend.length}</span>
      <span class="appr-chev">${svg('back')}</span>
    </summary>
    <div class="approvals-toolbar">
      <button class="btn btn-primary btn-sm" data-action="approve-all-ts">${svg('check')} Approve all (${pend.length})</button>
    </div>
    <div class="approvals-list">
      ${pend.map(r=>{const usr=userById(r.userId);const h=paidHours(r);
        return `<div class="appr-row">
          <div class="appr-info">
            <div class="appr-top"><strong>${escapeHtml(usr?.name||'?')}</strong><span class="appr-h">${h.toFixed(1)}h</span></div>
            <div class="appr-sub">${escapeHtml(clientName(r.clientId))} · ${fmtDate(r.date)} · ${fmtTime(r.clockIn.slice(11,16))}–${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'…'}</div>
          </div>
          <div class="appr-actions">
            <button class="appr-btn flag" data-action="reject-ts" data-id="${r.id}" aria-label="Flag timesheet">${svg('x')}</button>
            <button class="appr-btn ok" data-action="approve-ts" data-id="${r.id}" aria-label="Approve timesheet">${svg('check')}</button>
          </div>
        </div>`;}).join('')}
    </div>
  </details>`;
}
function adminHome(u){
  const td=today();
  const tShifts=shiftsForDate(td);
  const staffToday=new Set();tShifts.forEach(s=>s.employeeIds.forEach(e=>staffToday.add(e)));
  const wk=weekHours(state.users.map(x=>x.id),state.rosterAnchor);
  const pending=state.clockRecords.filter(r=>r.status==='pending').length;
  const published=tShifts.filter(s=>isShiftPublished(s)).length;
  const staffCount=state.users.filter(x=>x.role==='employee'&&x.status!=='archived').length;
  const hour=new Date().getHours();
  const greet=hour<12?'Good morning':hour<17?'Good afternoon':'Good evening';
  return `
  <div class="hm">
    <div class="hm-hero admin">
      <div class="hm-hero-bg"></div>
      <div class="hm-hero-row">
        <div class="hm-hero-copy">
          <span class="hm-eyebrow">Today</span>
          <h1>${fmtDate(td)}</h1>
          <p>${tShifts.length} shift${tShifts.length===1?'':'s'} · ${staffToday.size} staff on jobs</p>
        </div>
        <button class="hm-hero-add" data-action="new-shift">${svg('plus')}<span>Add shift</span></button>
      </div>
      <div class="hm-hero-stats">
        <div class="hm-hs"><strong>${tShifts.length}</strong><em>Today\u2019s shifts</em></div>
        <div class="hm-hs"><strong>${staffToday.size}</strong><em>Staff on jobs</em></div>
        <div class="hm-hs"><strong>${wk.toFixed(0)}h</strong><em>Booked this week</em></div>
        <div class="hm-hs ${pending?'alert':''}"><strong>${pending}</strong><em>To approve</em></div>
      </div>
    </div>

    ${pendingApprovalsPanel(u)}
    ${updatesSection(u)}
    ${adminBookingsHomeCard()}

    <button class="hm-avail" data-action="tab" data-tab="avail">
      <span class="hm-avail-ic">${svg('cal')}</span>
      <span class="hm-avail-txt"><strong>Availability</strong><span>See who is free, partial or unavailable</span></span>
      <span class="hm-avail-go">${svg('back')}</span>
    </button>

    <div class="hm-sec-head">
      <h2>Today\u2019s roster</h2><span class="hm-pill">${tShifts.length} shifts · ${published} published</span>
    </div>
    <div class="home-roster-list">${tShifts.length? tShifts.map(s=>shiftCard(s,u,true)).join('') : emptyState('No shifts scheduled today.')}</div>
  </div>`;
}

function bookingReminderOffsets(b){
  const raw=String((b&&b.reminderDays)||'2,1');
  const nums=raw.split(',').map(x=>parseInt(x,10)).filter(n=>!isNaN(n)&&n>=0&&n<=14);
  return nums.length?[...new Set(nums)]:[2,1];
}
function bookingDateTimeLabel(b){
  if(!b||!b.cleanDate)return 'No deadline set';
  return `${fmtDate(b.cleanDate)}${b.cleanTime?` · ${fmtTime(b.cleanTime)}`:''}`;
}
function bookingDaysUntil(b){
  if(!b||!b.cleanDate)return null;
  const a=new Date(today()+'T00:00:00').getTime();
  const d=new Date(b.cleanDate+'T00:00:00').getTime();
  return Math.round((d-a)/DAY);
}
function bookingStatusInfo(b){
  const st=(b&&b.status)||'pending';
  const days=bookingDaysUntil(b);
  if(st==='done')return {label:'Done',cls:'done'};
  if(st==='rostered')return {label:'Rostered',cls:'rostered'};
  if(days!=null&&days<0)return {label:'Overdue',cls:'urgent'};
  if(days===0)return {label:'Due today',cls:'urgent'};
  if(days===1)return {label:'Due tomorrow',cls:'urgent'};
  if(days!=null&&days<=3)return {label:`Due in ${days} days`,cls:'urgent'};
  return {label:'Waiting',cls:''};
}
function bookingClientLabel(b){return (b&&(b.company||b.clientName||b.contactName))||'Untitled booking';}
function activeBookingList(){
  return (state.bookingReminders||[]).filter(b=>b&&!b._deleted).sort((a,b)=>String(a.cleanDate||'9999-99-99').localeCompare(String(b.cleanDate||'9999-99-99'))||String(a.createdAt||'').localeCompare(String(b.createdAt||'')));
}
function filteredBookings(){
  const f=state.bookingFilter||'active';
  const list=activeBookingList();
  if(f==='all')return list;
  if(f==='due')return list.filter(b=>{const d=bookingDaysUntil(b);return b.status!=='done'&&d!=null&&d<=3;});
  if(f==='rostered')return list.filter(b=>b.status==='rostered');
  if(f==='done')return list.filter(b=>b.status==='done');
  return list.filter(b=>!['done','rostered'].includes(b.status));
}
function bookingCounts(){
  const list=activeBookingList();
  const pending=list.filter(b=>!['done','rostered'].includes(b.status)).length;
  const due=list.filter(b=>{const d=bookingDaysUntil(b);return b.status!=='done'&&d!=null&&d<=3;}).length;
  const rostered=list.filter(b=>b.status==='rostered').length;
  const done=list.filter(b=>b.status==='done').length;
  return {total:list.length,pending,due,rostered,done};
}
function adminBookingsHomeCard(){
  const c=bookingCounts();
  return `<button class="hm-bookings" data-action="tab" data-tab="bookings">
    <span class="hm-bookings-ic">${svg('bell')}</span>
    <span class="hm-bookings-txt"><strong>Bookings &amp; reminders</strong><span>${c.pending} waiting · ${c.due} due soon</span></span>
    <span class="hm-bookings-go">${svg('back')}</span>
  </button>`;
}
function adminBookingsPage(u){
  const c=bookingCounts();
  const list=filteredBookings();
  const filter=state.bookingFilter||'active';
  const tab=(key,label,count)=>`<button data-action="booking-filter" data-filter="${key}" class="${filter===key?'active':''}">${label}${count!=null?` · ${count}`:''}</button>`;
  return `<div class="bookings-page">
    <section class="bk-hero">
      <div class="bk-hero-row">
        <div><span class="bk-eyebrow">${svg('bell')} Admin only</span><h1>Bookings &amp; reminders</h1><p>Store email jobs, real estate requests, screenshots and deadlines in one safe place before adding them to the roster.</p></div>
        <button class="bk-hero-add" data-action="new-booking-reminder">${svg('plus')} Add booking</button>
      </div>
      <div class="bk-stats">
        <div class="bk-stat"><strong>${c.pending}</strong><span>Waiting</span></div>
        <div class="bk-stat"><strong>${c.due}</strong><span>Due soon</span></div>
        <div class="bk-stat"><strong>${c.rostered}</strong><span>Rostered</span></div>
        <div class="bk-stat"><strong>${c.total}</strong><span>Total saved</span></div>
      </div>
    </section>
    <div class="bk-filter">${tab('active','Waiting',c.pending)}${tab('due','Due soon',c.due)}${tab('rostered','Rostered',c.rostered)}${tab('done','Done',c.done)}${tab('all','All',c.total)}</div>
    <div class="bk-list">${list.length?list.map(bookingCardHtml).join(''):`<div class="bk-empty">${svg('bell')}<h3>No booking reminders here yet</h3><p>Add email jobs and deadlines here so admin does not forget them before rostering.</p></div>`}</div>
  </div>`;
}
function bookingCardHtml(b){
  const info=bookingStatusInfo(b);const reminders=bookingReminderOffsets(b).map(n=>n===0?'same day':`${n}d before`).join(' + ');
  const source=b.source||'Email';
  const cls=[info.cls,b.status==='done'?'done':'',b.status==='rostered'?'rostered':''].filter(Boolean).join(' ');
  return `<article class="bk-card ${cls}">
    <div>
      <div class="bk-topline"><span class="bk-chip ${info.cls}">${info.label}</span><span class="bk-chip source">${escapeHtml(source)}</span><span class="bk-chip">Reminder ${escapeHtml(reminders)}</span>${b.attachmentData?`<button class="bk-chip source" data-action="view-booking-file" data-id="${b.id}">${svg('eye')} Screenshot</button>`:''}</div>
      <h3>${escapeHtml(bookingClientLabel(b))}</h3>
      <div class="bk-sub">
        <span>${svg('cal')} ${escapeHtml(bookingDateTimeLabel(b))}</span>
        ${b.address?`<span>${svg('pin')} ${escapeHtml(b.address)}</span>`:''}
        ${b.contactName?`<span>${svg('account')} ${escapeHtml(b.contactName)}</span>`:''}
      </div>
      ${b.notes?`<p class="bk-notes">${escapeHtml(b.notes)}</p>`:''}
    </div>
    <div class="bk-actions">
      ${b.status!=='done'?`<button class="btn btn-primary primary-wide" data-action="create-roster-from-booking" data-id="${b.id}">${svg('roster')} Add to roster</button>`:''}
      <button class="btn btn-soft" data-action="edit-booking" data-id="${b.id}">${svg('edit')} Edit</button>
      ${b.status==='done'?`<button class="btn btn-soft" data-action="reopen-booking" data-id="${b.id}">Reopen</button>`:`<button class="btn btn-soft" data-action="complete-booking" data-id="${b.id}">${svg('check')} Done</button>`}
      <button class="btn btn-ghost" data-action="delete-booking" data-id="${b.id}">${svg('trash')} Delete</button>
    </div>
  </article>`;
}
function plusHoursTime(t,hours){
  try{const [h,m]=String(t||'09:00').split(':').map(Number);let mins=((h||0)*60+(m||0)+Math.round((hours||2)*60))%(24*60);return `${String(Math.floor(mins/60)).padStart(2,'0')}:${String(mins%60).padStart(2,'0')}`;}catch(e){return '11:00';}
}
function ensureClientFromBooking(b){
  if(!b)return '';
  const norm=v=>String(v||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  let c=(state.clients||[]).find(x=>x&&!x._deleted&&((b.company&&norm(x.name)===norm(b.company))||(b.address&&norm(x.address)===norm(b.address))));
  if(c)return c.id;
  const name=bookingClientLabel(b);
  const id=uid('c');
  state.clients.push({id,name,address:b.address||'',phone:b.phone||'',email:b.email||'',notes:`Added from Booking Reminders${b.notes?': '+b.notes:''}`,createdAt:nowIso(),updatedAt:nowIso()});
  return id;
}
function bookingReminderModal(d){
  const b=d&&d.id?(state.bookingReminders||[]).find(x=>x.id===d.id)||{}:{};
  const isEdit=!!b.id;
  const days=b.reminderDays||'2,1';
  const fileHint=window.__pendingBookingFileName || b.attachmentName || '';
  return modalShell(isEdit?'Edit booking reminder':'New booking reminder',`
    <div class="bk-form-note">Save the request from an email, real estate or company here first. You can attach the email screenshot and turn it into a roster shift when ready.</div>
    <div class="field"><label>Company / client name</label><input class="input" id="br_company" value="${escapeHtml(b.company||b.clientName||'')}" placeholder="e.g. Ray White, JLL, Vaughn Dawson"></div>
    <div class="row2">
      <div class="field"><label>Contact person</label><input class="input" id="br_contact" value="${escapeHtml(b.contactName||'')}" placeholder="Name from email"></div>
      <div class="field"><label>Source</label><select class="input" id="br_source"><option ${(!b.source||b.source==='Email')?'selected':''}>Email</option><option ${b.source==='Real estate'?'selected':''}>Real estate</option><option ${b.source==='Company'?'selected':''}>Company</option><option ${b.source==='Phone call'?'selected':''}>Phone call</option><option ${b.source==='ChatGPT screenshot'?'selected':''}>ChatGPT screenshot</option></select></div>
    </div>
    <div class="row2">
      <div class="field"><label>Email</label><input class="input" id="br_email" value="${escapeHtml(b.email||'')}" placeholder="sender@email.com"></div>
      <div class="field"><label>Phone</label><input class="input" id="br_phone" value="${escapeHtml(b.phone||'')}" placeholder="04…"></div>
    </div>
    ${addressField('br_address',b.address||'','Job address')}
    <div class="row2">
      <div class="field"><label>Clean deadline / job date</label><input class="input" type="date" id="br_date" value="${b.cleanDate||today()}"></div>
      <div class="field"><label>Preferred time</label>${timeSelect('br_time',b.cleanTime||'09:00')}</div>
    </div>
    <div class="row2">
      <div class="field"><label>Reminder</label><select class="input" id="br_reminder"><option value="2,1" ${days==='2,1'?'selected':''}>2 days and 1 day before</option><option value="2" ${days==='2'?'selected':''}>2 days before</option><option value="1" ${days==='1'?'selected':''}>1 day before</option><option value="3,1" ${days==='3,1'?'selected':''}>3 days and 1 day before</option><option value="0" ${days==='0'?'selected':''}>Same day</option></select></div>
      <div class="field"><label>Status</label><select class="input" id="br_status"><option value="pending" ${(!b.status||b.status==='pending')?'selected':''}>Waiting to roster</option><option value="rostered" ${b.status==='rostered'?'selected':''}>Rostered</option><option value="done" ${b.status==='done'?'selected':''}>Done</option></select></div>
    </div>
    <div class="field"><label>Email details / notes</label><textarea class="input" id="br_notes" rows="5" placeholder="Paste the email details or the booking information ChatGPT extracted from the screenshot…">${escapeHtml(b.notes||'')}</textarea></div>
    <label class="bk-filebox" for="br_file">
      ${b.attachmentData?`<img src="${b.attachmentData}" alt="Booking screenshot">`:svg('clip')}
      <span><strong>${fileHint?escapeHtml(fileHint):'Attach email screenshot'}</strong><br>Optional — stores the screenshot with this booking.</span>
      <input type="file" id="br_file" accept="image/*" hidden>
    </label>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-booking-reminder" data-id="${b.id||''}">Save booking</button>`);
}
function bookingFileModal(d){
  const b=(state.bookingReminders||[]).find(x=>x.id===d.id);
  if(!b||!b.attachmentData)return modalShell('Booking screenshot',`<div class="empty"><p>No screenshot attached.</p></div>`,`<button class="btn btn-ghost" data-action="close-modal">Close</button>`);
  return modalShell(escapeHtml(b.attachmentName||'Booking screenshot'),`<img class="bk-view-img" src="${b.attachmentData}" alt="${escapeHtml(b.attachmentName||'Booking screenshot')}">`,`<a class="btn btn-soft" href="${b.attachmentData}" target="_blank" rel="noopener">Open</a><span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button>`);
}
function collectBookingDraft(id){
  const existing=id?(state.bookingReminders||[]).find(x=>x.id===id):null;
  const now=nowIso();
  const out={
    id:id||uid('bk'),company:document.getElementById('br_company')?.value.trim()||'',contactName:document.getElementById('br_contact')?.value.trim()||'',source:document.getElementById('br_source')?.value||'Email',
    email:document.getElementById('br_email')?.value.trim()||'',phone:document.getElementById('br_phone')?.value.trim()||'',address:document.getElementById('br_address')?.value.trim()||'',
    cleanDate:document.getElementById('br_date')?.value||today(),cleanTime:document.getElementById('br_time')?.value||'09:00',reminderDays:document.getElementById('br_reminder')?.value||'2,1',
    status:document.getElementById('br_status')?.value||'pending',notes:document.getElementById('br_notes')?.value.trim()||'',updatedAt:now,createdAt:(existing&&existing.createdAt)||now
  };
  if(existing){['attachmentData','attachmentName','attachmentType','attachmentSize','shiftId','clientId'].forEach(k=>{if(existing[k])out[k]=existing[k];});}
  if(window.__pendingBookingFile){out.attachmentData=window.__pendingBookingFile;out.attachmentName=window.__pendingBookingFileName||'email-screenshot.jpg';out.attachmentType=window.__pendingBookingFileType||'image/jpeg';out.attachmentSize=window.__pendingBookingFileSize||0;}
  return out;
}
function startBookingReminderScheduler(){
  try{fireBookingReminders();}catch(e){}
  if(window.__bookingReminderTimer)return;
  window.__bookingReminderTimer=setInterval(()=>{try{fireBookingReminders();}catch(e){}},30*60*1000);
}
function fireBookingReminders(){
  if(!state||!Array.isArray(state.bookingReminders))return;
  state.bookingReminderLog=state.bookingReminderLog||{};
  const admins=activeAppUsers(state).filter(x=>x.role==='admin').map(x=>x.id);
  if(!admins.length)return;
  const td=today();let added=0;
  state.bookingReminders.forEach(b=>{
    if(!b||b._deleted||!b.cleanDate||b.status==='done')return;
    bookingReminderOffsets(b).forEach(days=>{
      const dueDate=addDays(b.cleanDate,-days);
      if(td<dueDate||td>b.cleanDate)return;
      const key=`booking:${b.id}:${b.cleanDate}:${days}`;
      if(state.bookingReminderLog[key])return;
      const when=days===0?'today':(days===1?'tomorrow':`${days} days`);
      addAlertForUsers(admins,`Booking reminder: ${bookingClientLabel(b)} is due ${bookingDateTimeLabel(b)}. Add it to the roster.`,{kind:'booking',priority:days<=1,dedupeKey:key});
      state.bookingReminderLog[key]=nowIso();added++;
    });
    const overdueKey=`booking:${b.id}:${b.cleanDate}:overdue`;
    if(td>b.cleanDate&&!state.bookingReminderLog[overdueKey]&&b.status!=='rostered'){
      addAlertForUsers(admins,`Overdue booking: ${bookingClientLabel(b)} was due ${bookingDateTimeLabel(b)} and still needs checking.`,{kind:'booking',priority:true,dedupeKey:overdueKey});
      state.bookingReminderLog[overdueKey]=nowIso();added++;
    }
  });
  if(added){saveRealtime();try{render();}catch(e){}}
}

function employeeHome(u){
  const td=today();
  const my=shiftsForUserDate(u.id,td).filter(s=>s.status==='Published');
  const wk=weekHours([u.id],state.rosterAnchor);
  const next=upcomingShift(u.id);
  const clocked=activeClock(u.id);
  const doneToday=state.clockRecords.filter(r=>r.userId===u.id&&r.date===td&&r.clockOut).length;
  const hour=new Date().getHours();
  const greet=hour<12?'Good morning':hour<17?'Good afternoon':'Good evening';
  return `
  <div class="hm">
    <div class="hm-hero staff">
      <div class="hm-hero-bg"></div>
      <div class="hm-hero-row">
        <div class="hm-hero-copy">
          <span class="hm-eyebrow">Today</span>
          <h1>${fmtDate(td)}</h1>
          <p>${clocked?'You\u2019re on shift now':my.length?`${my.length} shift${my.length===1?'':'s'} today`:'No shifts today — enjoy your day off'}</p>
        </div>
        <button class="hm-hero-add" data-action="tab" data-tab="clock">${svg('clock')}<span>Clock</span></button>
      </div>
      <div class="hm-hero-stats">
        <div class="hm-hs"><strong>${wk.toFixed(1)}h</strong><em>This week</em></div>
        <div class="hm-hs"><strong>${my.length}</strong><em>Today</em></div>
        <div class="hm-hs"><strong>${doneToday}</strong><em>Done today</em></div>
      </div>
    </div>

    ${next?(()=>{
      const nc=clientById(next.clientId);
      const nd=new Date(next.date+'T00:00:00');
      const todayD=new Date(today()+'T00:00:00');
      const diffDays=Math.round((nd-todayD)/86400000);
      const whenBig=diffDays===0?'Today':diffDays===1?'Tomorrow':DOW[nd.getDay()];
      const startHM=fmtTime(next.start).replace(/(am|pm)/i,'').trim();
      const ap=(fmtTime(next.start).match(/am|pm/i)||[''])[0].toUpperCase();
      return `
    <div class="hm-next" data-action="go-clock-in" data-shift="${next.id}">
      <div class="hm-next-rail">
        <span class="hm-next-rt">${startHM}</span>
        <span class="hm-next-rap">${ap}</span>
        <span class="hm-next-rdur">${fmtDur(next.start,next.end)}</span>
      </div>
      <div class="hm-next-in">
        <span class="hm-next-tag">${svg('star')} Your next shift · ${whenBig}</span>
        <h3 class="hm-next-client">${escapeHtml(clientName(next.clientId))}</h3>
        <div class="hm-next-row">${svg('clock')} ${fmtTime(next.start)} – ${fmtTime(next.end)}</div>
        ${nc&&nc.address?`<div class="hm-next-row">${svg('pin')} ${escapeHtml(nc.address)}</div>`:''}
        <button class="hm-next-cta" data-action="go-clock-in" data-shift="${next.id}">${svg('clock')} Clock in for this shift</button>
      </div>
    </div>`;})():''}

    ${updatesSection(u)}

    <div class="hm-sec-head"><h2>Today\u2019s shifts</h2><span class="hm-pill">${my.length}</span></div>
    <div class="home-roster-list">${my.length? my.map(s=>shiftCard(s,u,false)).join('') : emptyState('No shifts today \u2014 enjoy your day off!')}</div>
  </div>`;
}
function upcomingShift(uid){
  const fut=state.shifts.filter(s=>s.status==='Published'&&s.employeeIds.includes(uid)&&s.date>=today()&&state.shiftResponses[`${s.id}:${uid}`]!=='declined').sort((a,b)=>a.date.localeCompare(b.date)||a.start.localeCompare(b.start));
  return fut[0];
}
function timeAgo(isoStr){const diff=Date.now()-new Date(isoStr).getTime();const h=Math.floor(diff/3600000);if(h<1)return'just now';if(h<24)return h+'h ago';return Math.floor(h/24)+'d ago';}

/* ===========================================================
   SHIFT CARD (shared)
   =========================================================== */
/* ---------- shift colour themes (per client, consistent) ---------- */
const SHIFT_THEMES=[
  {key:'terracotta', solid:'#c94f37', deep:'#8f2f24', accent:'#e7a13e', pop:'#ef6c57', cardA:'#fff4ec', cardB:'#ffd7c8', cardC:'#f3eadc'},
  {key:'indigo',     solid:'#3956d4', deep:'#243696', accent:'#5bc6e8', pop:'#5b6ef0', cardA:'#f1f4ff', cardB:'#d4ddff', cardC:'#eef1e6'},
  {key:'teal',       solid:'#078f86', deep:'#075e5a', accent:'#46c98e', pop:'#1aa89c', cardA:'#eefcf8', cardB:'#c6f2eb', cardC:'#f3eadc'},
  {key:'plum',       solid:'#8c4aa8', deep:'#5d2f78', accent:'#d364a6', pop:'#a45cc4', cardA:'#fbf1ff', cardB:'#ead4f6', cardC:'#f5ecd8'},
  {key:'olive',      solid:'#78912e', deep:'#52651e', accent:'#c2b53e', pop:'#8eb13f', cardA:'#f7fbec', cardB:'#e3efb9', cardC:'#f3eadc'},
  {key:'rust',       solid:'#b86124', deep:'#814118', accent:'#dba53f', pop:'#e8893a', cardA:'#fff5ea', cardB:'#f5d5b6', cardC:'#eef1df'},
  {key:'slateblue',  solid:'#5c6fd6', deep:'#34439c', accent:'#62b6e0', pop:'#4f8ee8', cardA:'#f1f3ff', cardB:'#d8defc', cardC:'#f4ecd9'},
  {key:'forest',     solid:'#2e7b43', deep:'#1d542d', accent:'#7fb56a', pop:'#3aa05a', cardA:'#f0fbf0', cardB:'#cbe9ce', cardC:'#f4ecd9'},
  {key:'rose',       solid:'#d24d7a', deep:'#992f56', accent:'#f49bbd', pop:'#e36592', cardA:'#fff1f6', cardB:'#f6d4e1', cardC:'#f3eadc'},
  {key:'amber',      solid:'#d99311', deep:'#9c6a08', accent:'#f1c45a', pop:'#eaa92a', cardA:'#fff8ea', cardB:'#f6e3b6', cardC:'#eef1df'},
  {key:'ocean',      solid:'#1f86b0', deep:'#13607d', accent:'#5fc3e0', pop:'#2fa3cc', cardA:'#eef9fc', cardB:'#c6e8f2', cardC:'#f3eadc'},
  {key:'grape',      solid:'#6a4fc4', deep:'#42307d', accent:'#a78fe0', pop:'#8268d6', cardA:'#f3f0ff', cardB:'#dcd4f6', cardC:'#f4ecd9'},
  {key:'sage',       solid:'#5b8c6e', deep:'#3c5e4a', accent:'#9cc7ac', pop:'#6fab85', cardA:'#eef7f1', cardB:'#cfe6d7', cardC:'#f3eadc'},
  {key:'charcoal',   solid:'#4a5563', deep:'#2e3640', accent:'#8a96a6', pop:'#5d6b7d', cardA:'#f1f3f6', cardB:'#d5dae1', cardC:'#eef1df'},
];
function shiftTheme(s){
  if(s&&s.colorKey){const m=SHIFT_THEMES.find(t=>t.key===s.colorKey);if(m)return m;}
  const c=clientById(s.clientId);
  const id=c?c.id:(s.id||'');
  let h=0;for(let i=0;i<id.length;i++)h=(h*31+id.charCodeAt(i))>>>0;
  return SHIFT_THEMES[h%SHIFT_THEMES.length];
}

function shiftStatus(s){return s.status==='Published'?'Published':'Draft';}
function isShiftPublished(s){return shiftStatus(s)==='Published';}
function employeeShiftActions(s,u){
  if(!isShiftPublished(s))return `<span class="rc-emp-state rc-locked">Pending</span>`;
  const done=state.clockRecords.some(r=>r.userId===u.id&&r.shiftId===s.id&&r.clockOut);
  const resp=state.shiftResponses[`${s.id}:${u.id}`];
  if(done)return `<span class="rc-emp-state rc-done">${svg('check')} Done</span>`;
  if(resp==='declined')return `<span class="rc-emp-state rc-declined">Rejected</span>`;
  if(resp==='accepted')return `<button class="rc-act rc-start" data-action="clock-in" data-shift="${s.id}">${svg('clock')} Start</button>`;
  return `
    <button class="rc-act rc-reject" data-action="reject-shift" data-shift="${s.id}">${svg('x')} Reject</button>
    <button class="rc-act rc-accept" data-action="accept-shift" data-shift="${s.id}">${svg('check')} Accept</button>`;
}
function shiftCard(s,u,admin){
  const c=clientById(s.clientId);
  const published=isShiftPublished(s);
  const t=shiftTheme(s);
  const startT=fmtTime(s.start), endT=fmtTime(s.end);
  const team=s.employeeIds.map(id=>userById(id)).filter(Boolean);
  const avatars=team.slice(0,3).map(p=>`<span class="rc-av">${initials(p.name)}</span>`).join('')
    + (team.length>3?`<span class="rc-av rc-av-more">+${team.length-3}</span>`:'');
  const names=team.map(p=>p.name.split(' ')[0]).join(', ');
  const actions=admin
    ? ''
    : employeeShiftActions(s,u);
  const empResp=!admin?state.shiftResponses[`${s.id}:${u.id}`]:null;
  const rejected=empResp==='declined';
  const statusPill=admin
    ? (!published?`<span class="rc-status rc-draft-tag">${svg('edit')} Draft · not published</span>`:'')
    : (rejected?`<span class="rc-status rejected">${svg('x')} Rejected</span>`
      :empResp==='accepted'?`<span class="rc-status accepted">${svg('check')} Accepted</span>`
      :'');
  const startHM=startT.replace(/(am|pm)/,'').trim();
  const ap=(startT.match(/am|pm/)||[''])[0].toUpperCase();
  return `
  <div class="rcard ${published?'is-published':'is-draft'} ${admin?'is-admin':'is-emp'} ${rejected?'is-rejected':''}" data-action="shift-open" data-id="${s.id}" style="--solid:${t.solid};--deep:${t.deep};--accent:${t.accent};--pop:${t.pop}">
    ${rejected?`<span class="rc-reject-stamp">Rejected</span>`:''}
    <div class="rc-main">
      <div class="rc-badge">
        <strong>${startHM}</strong>
        <span class="rc-ap">${ap}</span>
        <span class="rc-dur">${fmtDur(s.start,s.end)}</span>
      </div>
      <div class="rc-info">
        <h3>${c?escapeHtml(c.name):'Unassigned'}</h3>
        <div class="rc-time-range">${startT}–${endT}</div>
        <div class="rc-meta">${c&&c.address?escapeHtml(c.address):''}${names?(c&&c.address?' · ':'')+escapeHtml(names):''}</div>
        ${statusPill}
      </div>
      <div class="rc-actions-row">${actions}</div>
    </div>
  </div>`;
}
function emptyState(msg){return `<div class="card"><div class="empty">${svg('cal')}<p>${msg}</p></div></div>`;}

/* ===========================================================
   ROSTER
   =========================================================== */
function rosterPage(u){
  const dates=weekDates(state.rosterAnchor);
  if(!dates.includes(state.rosterDate))state.rosterDate=dates[0];
  const isAdmin=u.role==='admin';
  const dayShifts=shiftsForDate(state.rosterDate).filter(s=>isAdmin||(s.status==='Published'&&s.employeeIds.includes(u.id)));
  const weekTotal=weekHours(isAdmin?state.users.map(x=>x.id):[u.id],state.rosterAnchor);
  const cntFor=d=>shiftsForDate(d).filter(s=>isAdmin||(s.status==='Published'&&s.employeeIds.includes(u.id))).length;
  const adminHoursFor=d=>shiftsForDate(d)
    .filter(s=>isAdmin?true:(s.status==='Published'&&s.employeeIds.includes(u.id)))
    .reduce((sum,s)=>sum+(durationHrs(s.start,s.end)*Math.max(1,(s.employeeIds||[]).length)),0);
  const adminDayHourLabel=h=>h>0?`${(h%1?h.toFixed(1):h.toFixed(0))}h`:'0h';

  return `
  <!-- premium roster header -->
  <div class="rst-hero ${isAdmin?'admin':'staff'}">
    <div class="rst-hero-bg"></div>
    <div class="rst-hero-top">
      <button class="rst-nav" data-action="week-shift" data-dir="-1" aria-label="Previous week">${svg('back')}</button>
      <div class="rst-hero-label">
        <span class="rst-eyebrow">${isAdmin?'Team roster':'My week'}</span>
        <strong>${fmtDate(dates[0])} – ${fmtDate(dates[6])}</strong>
      </div>
      <button class="rst-nav" data-action="week-shift" data-dir="1" style="transform:rotate(180deg)" aria-label="Next week">${svg('back')}</button>
    </div>
    <div class="rst-hero-foot">
      <div class="rst-hs"><strong>${weekTotal.toFixed(0)}h</strong><em>Scheduled</em></div>
      <div class="rst-hs"><strong>${dates.reduce((a,d)=>a+cntFor(d),0)}</strong><em>Shifts</em></div>
      ${isAdmin
        ? `<button class="rst-hero-add" data-action="new-shift"><span class="rha-ic">${svg('plus')}</span><span>Add shift</span></button>`
        : `<button class="rst-hero-add" data-action="request-roster"><span class="rha-ic">${svg('cal')}</span><span>Request</span></button>`}
    </div>
  </div>

  ${isAdmin?`<div class="rwg-search rwg-search-top">
    <span class="rwg-search-ic">${svg('search')}</span>
    <input id="rosterEmpSearch" data-action="roster-emp-search" type="search" placeholder="Search an employee to see their week…" autocomplete="off" value="${escapeHtml(state.rosterEmpSearch||'')}">
    ${(state.rosterEmpSearch||'').trim()?`<button class="rwg-search-clear" data-action="clear-roster-emp-search" aria-label="Clear">${svg('x')}</button>`:''}
  </div>
  ${(state.rosterEmpSearch||'').trim()?`<div class="rwg-results">
    ${state.users.filter(e=>e.role==='employee'&&e.status!=='archived'&&(e.name.toLowerCase().includes((state.rosterEmpSearch||'').trim().toLowerCase())||(e.title||'').toLowerCase().includes((state.rosterEmpSearch||'').trim().toLowerCase()))).slice().sort((a,b)=>(a.name||'').localeCompare((b.name||''),undefined,{sensitivity:'base'})).map(e=>{
      const wk=weekHours([e.id],state.rosterAnchor);
      return `<button class="rwg-result" data-action="roster-emp-week" data-id="${e.id}">
        <span class="rwg-result-av">${initials(e.name)}</span>
        <span class="rwg-result-txt"><strong>${escapeHtml(e.name)}</strong><em>${escapeHtml(e.title||'Cleaner')} · ${wk.toFixed(1)}h this week</em></span>
        <span class="rwg-result-go">${svg('back')}</span>
      </button>`;
    }).join('')||'<div class="rwg-result-none">No employees match that search</div>'}
  </div>`:''}`:''}

  <!-- day selector -->
  <div class="rst-days ${isAdmin?'rst-days-admin':''}">
    ${dates.map(d=>{const cnt=cntFor(d);const dt=new Date(d+'T00:00:00');const isToday=d===today();const sel=d===state.rosterDate;
      const hrs=isAdmin?adminHoursFor(d):0;
      return `<button class="rst-day ${sel?'sel':''} ${isToday?'today':''}" data-action="pick-day" data-date="${d}">
        <span class="rd-dow">${DOW[dt.getDay()]}</span>
        <span class="rd-num">${dt.getDate()}</span>
        ${isAdmin?`<span class="rd-stats ${cnt?'has':'empty'}"><b>${cnt}</b><em>${adminDayHourLabel(hrs)}</em></span>`:(cnt?`<span class="rd-cnt">${cnt}</span>`:'<span class="rd-empty"></span>')}
      </button>`;}).join('')}
  </div>

  <!-- MOBILE: selected day list -->
  <div class="roster-mobile">
    <div class="rst-day-head">
      <h2>${fmtDateLong(state.rosterDate)}</h2><span>${dayShifts.length} shift${dayShifts.length!==1?'s':''}${isAdmin?` · ${adminDayHourLabel(adminHoursFor(state.rosterDate))}`:''}</span>
    </div>
    ${dayShifts.length? dayShifts.map(s=>shiftCard(s,u,isAdmin)).join('') : emptyState(isAdmin?'No shifts this day. Tap Add shift to start.':'No shifts assigned to you this day.')}
  </div>

  <!-- DESKTOP: full week grid -->
  ${isAdmin? rosterWeekGridAdmin(u,dates) : `<div class="roster-week">
    ${dates.map(d=>{const dt=new Date(d+'T00:00:00');const isToday=d===today();
      const ds=shiftsForDate(d).filter(s=>s.status==='Published'&&s.employeeIds.includes(u.id));
      return `<div class="wk-col ${isToday?'today':''}">
        <div class="wk-colhead"><span class="wk-dow">${DOW[dt.getDay()]}</span><span class="wk-num">${dt.getDate()}</span></div>
        <div class="wk-cells">
          ${ds.map(s=>weekCell(s,false)).join('')}
          ${ds.length?'':'<div class="wk-empty">\u2014</div>'}
        </div>
      </div>`;}).join('')}
  </div>`}`;
}

function rosterWeekGridAdmin(u,dates){
  const q=(state.rosterEmpSearch||'').trim().toLowerCase();
  let emps=state.users.filter(x=>x.role==='employee'&&x.status!=='archived');
  if(q)emps=emps.filter(e=>e.name.toLowerCase().includes(q)||(e.title||'').toLowerCase().includes(q));
  // Show the staff side-list in alphabetical order (by the name shown, which is
  // the first name), case-insensitively, instead of insertion/random order.
  emps=emps.slice().sort((a,b)=>(a.name||'').localeCompare((b.name||''),undefined,{sensitivity:'base'}));
  const todayStr=today();
  const head=`<div class="rwg-head">
    <div class="rwg-corner">Team</div>
    ${dates.map(d=>{const dt=new Date(d+'T00:00:00');const isToday=d===todayStr;
      const dayHrs=shiftsForDate(d).filter(s=>s.status==='Published').reduce((sum,s)=>sum+durationHrs(s.start,s.end)*(s.employeeIds.length||1),0);
      return `<div class="rwg-dayhead ${isToday?'today':''}">
        <span class="rwg-dow">${DOW[dt.getDay()]}</span><span class="rwg-num">${dt.getDate()}</span>
        ${dayHrs>0?`<span class="rwg-dayhrs">${dayHrs.toFixed(dayHrs%1?1:0)}h</span>`:'<span class="rwg-dayhrs rwg-dayhrs-zero">0h</span>'}
        <button class="rwg-dayadd" data-action="new-shift-on" data-date="${d}" aria-label="Add shift on ${fmtDate(d)}">${svg('plus')}</button>
      </div>`;}).join('')}
  </div>`;
  const rows=emps.length?emps.map(e=>{
    const wk=weekHours([e.id],state.rosterAnchor);
    return `<div class="rwg-row">
      <div class="rwg-name" data-action="roster-emp-week" data-id="${e.id}" style="cursor:pointer">
        <span class="rwg-av">${initials(e.name)}</span>
        <span class="rwg-nametxt"><strong>${escapeHtml(e.name.split(' ')[0])}</strong><em>${wk.toFixed(1)}h this week</em></span>
      </div>
      ${dates.map(d=>{
        const cell=shiftsForDate(d).filter(s=>s.employeeIds.includes(e.id));
        return `<div class="rwg-cell">
          ${cell.map(s=>rosterGridCard(s,d)).join('')}
          <button class="rwg-cell-add" data-action="new-shift-on" data-date="${d}" aria-label="Add shift">${svg('plus')}</button>
        </div>`;}).join('')}
    </div>`;}).join(''):`<div class="rwg-noemp">No employees match “${escapeHtml(q)}”</div>`;
  return `<div class="rwg-wrap"><div class="rwg-grid">${head}${rows}</div></div>`;
}

function rosterGridCard(s,date){
  const c=clientById(s.clientId);
  const t=shiftTheme(s);
  const published=isShiftPublished(s);
  return `<div class="rgc ${published?'pub':'draft'}" style="--accent:${t.solid};--accent-deep:${t.deep}" data-action="shift-open" data-id="${s.id}">
    <div class="rgc-main">
      <div class="rgc-row1"><span class="rgc-time">${fmtTime(s.start)}–${fmtTime(s.end)}</span><span class="rgc-dur">${fmtDur(s.start,s.end)}</span></div>
      <div class="rgc-row2"><span class="rgc-dot ${published?'pub':'draft'}" title="${published?'Published':'Draft'}"></span><span class="rgc-client">${c?escapeHtml(c.name):'Unassigned'}</span></div>
    </div>
    <div class="rgc-tools">
      <button class="rgc-tool t-assign" data-action="edit-shift" data-id="${s.id}" title="Assign / edit">${svg('edit')}</button>
      <button class="rgc-tool t-publish" data-action="toggle-publish" data-id="${s.id}" title="${published?'Unpublish':'Publish'}">${svg('eye')}</button>
      <button class="rgc-tool t-add" data-action="new-shift-on" data-date="${date||s.date}" title="Add another shift this day">${svg('plus')}</button>
      <button class="rgc-tool t-del" data-action="delete-shift" data-id="${s.id}" title="Delete">${svg('trash')}</button>
    </div>
  </div>`;
}
function weekCell(s,admin){
  const c=clientById(s.clientId);
  const t=shiftTheme(s);
  const published=isShiftPublished(s);
  return `<div class="wk-cell ${published?'published':'unpublished'}" data-action="shift-open" data-id="${s.id}" style="--accent:${t.solid};--accent-deep:${t.deep}">
    <div class="wkc-time">${fmtTime(s.start)}</div>
    <div class="wkc-name">${c?c.name:'Unassigned'}</div>
    <div class="wkc-dur">${fmtDur(s.start,s.end)}</div>
    ${admin?`<div class="wkc-status ${published?'published':'draft'}">${published?'Published':'Unpublished'}</div>`:''}
  </div>`;
}

/* ===========================================================
   CLOCK  (employee)
   =========================================================== */
function clockPage(u){
  const td=today();
  state.clockSubTab=state.clockSubTab||'clock';
  const my=shiftsForUserDate(u.id,td).filter(s=>s.status==='Published');
  const active=activeClock(u.id);
  const activeShift=active?state.shifts.find(x=>x.id===active.shiftId):null;
  const activeRange=activeShift?`${fmtTime(activeShift.start).replace(':00','')} – ${fmtTime(activeShift.end).replace(':00','')}`:'';
  const activeDur=activeShift?fmtDur(activeShift.start,activeShift.end):'';
  const wk=weekHours([u.id],state.rosterAnchor);
  const doneToday=state.clockRecords.filter(r=>r.userId===u.id&&r.date===td&&r.clockOut).length;
  const left=Math.max(0,my.length-doneToday);
  const weekRows=weekDates(state.timesheetAnchor||state.rosterAnchor||today()).flatMap(d=>recordsForUserDate(u.id,d));
  const pending=weekRows.filter(r=>r.status==='pending').length;
  const locked=weekRows.filter(r=>r.status==='approved'||r.status==='paid').length;
  const sub=state.clockSubTab;
  const menu=`<div class="clock-subnav card">
    <button class="${sub==='clock'?'active':''}" data-action="clock-subtab" data-view="clock">${svg('clock')}<span>Clock in/out</span></button>
    <button class="${sub==='timesheets'?'active':''}" data-action="clock-subtab" data-view="timesheets">${svg('docs')}<span>Timesheets</span>${pending?`<em>${pending}</em>`:''}</button>
  </div>`;
  if(sub==='timesheets'){
    return `${menu}<div class="clock-timesheet-page">${employeeTimesheetPanel(u)}</div>`;
  }
  return `
  ${menu}
  ${active?`
  <div class="clk1">
    <span class="clk1-live"><span class="clk1-dot"></span> On shift now</span>
    <div class="clk1-timerwrap">
      <div class="clk1-big"><span id="clockTimer">00:00:00</span></div>
      <div class="clk1-elapsed">Elapsed</div>
    </div>
    <div class="clk1-bar"><i id="clk1Prog" style="width:0%"></i></div>
    ${activeShift?`<div class="clk1-ends"><span>In ${fmtTime(activeShift.start)}</span><span>Out ${fmtTime(activeShift.end)}</span></div>`:''}
    <h2 class="clk1-job">${escapeHtml(clientName(active.clientId))}</h2>
    ${clientById(active.clientId)?.address?`<span class="clk1-addr" data-action="open-maps" data-addr="${escapeHtml(clientById(active.clientId).address)}">${svg('pin')} ${escapeHtml(clientById(active.clientId).address)}</span>`:''}
    <div class="clk1-twin">
      <div class="clk1-t"><div class="clk1-v">${fmtTime(active.clockIn.slice(11,16))}</div><div class="clk1-k">Clocked in</div></div>
      <div class="clk1-t"><div class="clk1-v">${wk.toFixed(1)}h</div><div class="clk1-k">This week</div></div>
    </div>
    <button class="clk1-stop" data-action="clock-out">${svg('clock')} Clock out &amp; submit</button>
  </div>`:`
  <div class="clk2 idle">
    <div class="clk2-clockface">
      <div class="clk2-hand h1"></div><div class="clk2-hand h2"></div><div class="clk2-pin"></div>
    </div>
    <div class="clk2-greet">
      <span>Time clock</span>
      <h2>Ready when you are</h2>
      <p>${my.length?`You have ${left} shift${left===1?'':'s'} left to start today`:'No shifts scheduled for today'}</p>
    </div>
    <div class="clk2-stats">
      <div class="clk2-stat"><strong>${wk.toFixed(1)}h</strong><em>This week</em></div>
      <div class="clk2-stat"><strong>${doneToday}</strong><em>Done today</em></div>
      <div class="clk2-stat"><strong>${left}</strong><em>Left today</em></div>
    </div>
    <button class="clk2-action ghost" data-action="clock-subtab" data-view="timesheets">${svg('docs')} View my timesheets</button>
  </div>`}

  ${!active&&my.length?`
  <div class="clk2-shifts-head"><h3>Today\u2019s shifts</h3><span>${my.length}</span></div>
  <div class="clk2-shifts">
  ${my.map(s=>{
    const done=state.clockRecords.some(r=>r.userId===u.id&&r.shiftId===s.id&&r.clockOut);
    const c=clientById(s.clientId);const t=shiftTheme(s);
    const resp=state.shiftResponses[`${s.id}:${u.id}`];
    let actions;
    if(done){actions=`<span class="clk2-sh-done">${svg('check')} Done</span>`;}
    else if(resp==='declined'){actions=`<span class="clk2-sh-declined">${svg('x')} Rejected</span>`;}
    else if(resp==='accepted'){actions=`<button class="clk2-sh-start" data-action="clock-in" data-shift="${s.id}">${svg('clock')} Start shift</button>`;}
    else {actions=`
      <button class="clk2-sh-reject" data-action="reject-shift" data-shift="${s.id}">${svg('x')} Reject</button>
      <button class="clk2-sh-accept" data-action="accept-shift" data-shift="${s.id}">${svg('check')} Accept</button>`;}
    return `<div class="clk2-sh ${done?'done':''} ${resp==='declined'?'declined':''}" style="--accent:${t.solid};--accent-deep:${t.deep}">
      <div class="clk2-sh-rail"></div>
      <div class="clk2-sh-body">
        <div class="clk2-sh-top"><span class="clk2-sh-time">${fmtTime(s.start).replace(':00','')} – ${fmtTime(s.end).replace(':00','')}</span><span class="clk2-sh-dur">${fmtDur(s.start,s.end)}</span></div>
        <h4>${c?escapeHtml(c.name):'Unassigned'}</h4>
        ${c&&c.address?`<div class="clk2-sh-loc">${svg('pin')}<span>${escapeHtml(c.address)}</span></div>`:''}
        <div class="clk2-sh-actions">${actions}</div>
      </div>
    </div>`;}).join('')}</div>`:`${!active?`<div class="clk2-empty">${svg('clock')}<p>No shifts left to start today.</p><button class="btn btn-soft btn-sm" data-action="clock-subtab" data-view="timesheets">Open timesheets</button></div>`:''}`}
  `;
}

/* ===========================================================
   TIMESHEETS  (employee + admin)
   =========================================================== */

function employeeTimesheetPanel(u){
  state.timesheetAnchor=state.timesheetAnchor||state.rosterAnchor||startOfWeek(today());
  state.timesheetAnchor=startOfWeek(state.timesheetAnchor);
  const dates=weekDates(state.timesheetAnchor);
  if(!state.timesheetDate||!dates.includes(state.timesheetDate))state.timesheetDate=dates.includes(today())?today():dates[0];
  const selected=recordsForUserDate(u.id,state.timesheetDate);
  const weekRows=dates.flatMap(d=>recordsForUserDate(u.id,d));
  const weekH=weekRows.reduce((a,r)=>a+paidHours(r),0);
  const weekKm=weekRows.reduce((a,r)=>a+(Number(r.km)||0),0);
  const pending=weekRows.filter(r=>r.status==='pending').length;
  const approved=weekRows.filter(r=>r.status==='approved').reduce((a,r)=>a+paidHours(r),0);
  const approvedRows=weekRows.filter(r=>r.status==='approved');
  const approvedKm=approvedRows.reduce((a,r)=>a+(Number(r.km)||0),0);
  const paid=weekRows.filter(r=>r.status==='paid').reduce((a,r)=>a+paidHours(r),0);
  const estimate=employeePayAmount(u,approved)+kmAmount(u,approvedKm);
  return `
  <div class="emp-ts-zone">
    <div class="ets-hero">
      <div>
        <h2>My timesheets</h2>
        <p class="ets-week-line">${payWeekLabel(state.timesheetAnchor)}</p>
      </div>
      <div class="ets-week-nav">
        <button class="rh-nav" data-action="ts-week-shift" data-dir="-1" aria-label="Previous week">${svg('back')}</button>
        <button class="rh-nav" data-action="ts-week-shift" data-dir="1" style="transform:rotate(180deg)" aria-label="Next week">${svg('back')}</button>
      </div>
    </div>

    <div class="ets-paytile">
      <div class="ets-paytile-l">
        <em>Estimated pay</em>
        <strong>${money(estimate)}</strong>
        <span>${money(WW_PAY_RATE)}/hr</span>
      </div>
      <div class="ets-paytile-ring"><span>${weekH.toFixed(1)}h</span></div>
    </div>

    <div class="ets-stat-grid">
      <div class="ets-mini"><em>Approved</em><strong>${approved.toFixed(1)}h</strong></div>
      <div class="ets-mini"><em>Logged</em><strong>${weekH.toFixed(1)}h</strong></div>
      <div class="ets-mini ${pending?'warn':''}"><em>Pending</em><strong>${pending}</strong></div>
    </div>

    <button class="ets-download" data-action="weekly-summary">${svg('docs')} Download weekly summary</button>

    <div class="ets-day-row">
      ${dates.map(d=>{const dt=new Date(d+'T00:00:00');const recs=recordsForUserDate(u.id,d);const h=recs.reduce((a,r)=>a+paidHours(r),0);return `<button class="ets-day ${d===state.timesheetDate?'sel':''} ${d===today()?'today':''}" data-action="pick-ts-day" data-date="${d}">
        <span>${DOW[dt.getDay()]}</span><strong>${dt.getDate()}</strong><em>${h?h.toFixed(1)+'h':recs.length?'0h':'\u2014'}</em>
      </button>`;}).join('')}
    </div>

    <div class="ets-day-card">
      <div class="ets-day-head">
        <div><strong>${fmtDateLong(state.timesheetDate)}</strong><span>${selected.length} entr${selected.length===1?'y':'ies'}${selected.some(r=>r.status==='approved'||r.status==='paid')?' \u00b7 some locked':''}</span></div>
        <button class="btn btn-primary btn-sm" data-action="add-missed-record" data-date="${state.timesheetDate}">${svg('plus')} Add entry</button>
      </div>
      ${selected.length?selected.map(r=>tsRow(r,false,true)).join(''):`<div class="ets-empty">${svg('clock')}<p>No timesheet entry for this day.</p><span>Tap Add entry if you worked but didn\u2019t clock in.</span></div>`}
    </div>

    ${timesheetRequestsSection(u)}
  </div>`;
}

function timesheetRequestsSection(u){
  // All this employee's entries, newest first
  const all=state.clockRecords
    .filter(r=>r.userId===u.id && r.clockOut)
    .slice()
    .sort((a,b)=>(b.date+b.clockIn).localeCompare(a.date+a.clockIn));
  const pending=all.filter(r=>r.status==='pending');
  const approved=all.filter(r=>r.status==='approved');
  const paid=all.filter(r=>r.status==='paid');
  const flagged=all.filter(r=>r.status==='flagged');

  const reqRow=(r)=>{
    const dt=new Date(r.date+'T00:00:00');
    const h=paidHours(r);const km=Number(r.km)||0;
    const pay=money(employeePayAmount(u,h)+kmAmount(u,km));
    const st=r.status||'pending';
    const stLabel={pending:'Pending',approved:'Approved',paid:'Paid',flagged:'Flagged'}[st]||st;
    return `<button class="treq-row" data-action="edit-record" data-id="${r.id}">
      <span class="treq-date"><strong>${DOW[dt.getDay()]} ${dt.getDate()}/${dt.getMonth()+1}</strong><em>${fmtTime(r.clockIn.slice(11,16))}–${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'…'}</em></span>
      <span class="treq-main"><strong>${escapeHtml(clientName(r.clientId))}</strong><em>${h.toFixed(2)}h · ${km.toFixed(1)}km · ${pay}</em></span>
      <span class="treq-badge ${st}">${stLabel}</span>
    </button>`;
  };
  const group=(title,arr,cls)=>arr.length?`
    <div class="treq-group">
      <div class="treq-group-head ${cls}"><span>${title}</span><span class="treq-count">${arr.length}</span></div>
      ${arr.map(reqRow).join('')}
    </div>`:'';

  if(!all.length)return '';
  return `
  <div class="treq-zone">
    <div class="treq-title">
      <h3>My timesheet requests</h3>
      <span class="treq-sub">All entries you\u2019ve logged, grouped by status</span>
    </div>
    ${group('Pending approval',pending,'pending')}
    ${group('Needs attention',flagged,'flagged')}
    ${group('Approved',approved,'approved')}
    ${group('Paid',paid,'paid')}
  </div>`;
}

function adminTimesheets(u){
  state.payrollAnchor=startOfWeek(state.payrollAnchor||state.adminTimesheetAnchor||state.rosterAnchor||today());
  state.payrollPeriod='weekly';
  const dates=weekDates(state.payrollAnchor);
  const rows=payrollRecords(state.payrollAnchor,'weekly');
  const emps=state.users.filter(x=>x.role==='employee'&&x.status!=='archived');
  if(!state.adminSelectedEmployeeId||!emps.some(e=>e.id===state.adminSelectedEmployeeId))state.adminSelectedEmployeeId=emps[0]?.id;
  // Desktop full-screen single-employee focus view
  if(state.tsFocusEmployeeId&&emps.some(e=>e.id===state.tsFocusEmployeeId)){
    return tsEmployeeFocus(emps.find(e=>e.id===state.tsFocusEmployeeId),emps,dates,rows);
  }
  if(!state.adminTimesheetDate||!dates.includes(state.adminTimesheetDate))state.adminTimesheetDate=dates.includes(today())?today():dates[0];

  const selected=emps.find(e=>e.id===state.adminSelectedEmployeeId)||emps[0];
  const selectedIndex=Math.max(0,emps.findIndex(e=>e.id===selected?.id));
  const mine=selected?rows.filter(r=>r.userId===selected.id):[];
  const totals=selected?employeePayrollTotals(selected,mine):{hours:0,km:0,wages:0,travel:0,total:0,pending:[],flagged:[],paid:[]};
  const selectedDayRows=mine.filter(r=>r.date===state.adminTimesheetDate);
  const allPending=rows.filter(r=>r.status==='pending').length;
  const allHours=rows.reduce((a,r)=>a+paidHours(r),0);
  const allApproved=rows.filter(r=>r.status==='approved').reduce((a,r)=>a+paidHours(r),0);
  const allWages=rows.reduce((a,r)=>{const emp=userById(r.userId);return a+employeePayAmount(emp,paidHours(r))+kmAmount(emp,Number(r.km)||0);},0);
  const empMini=emps.map(emp=>{const erows=rows.filter(r=>r.userId===emp.id);const t=employeePayrollTotals(emp,erows);const pending=erows.filter(r=>r.status==='pending').length;return {emp,rows:erows,t,pending,totalLogged:erows.reduce((a,r)=>a+paidHours(r),0)};});
  const selectedName=selected?selected.name:'No employee';
  return `
  <div class="adts-zone">
    <div class="adts-hero">
      <div>
        <h2>Weekly timesheets</h2>
        <p>${payWeekLabel(state.payrollAnchor)} \u00b7 Pay day ${fmtDateLong(payDayForWeek(state.payrollAnchor))}</p>
      </div>
      <div class="adts-week-nav">
        <button class="rh-nav" data-action="payroll-period-shift" data-dir="-1" aria-label="Previous week">${svg('back')}</button>
        <button class="rh-nav" data-action="payroll-period-shift" data-dir="1" style="transform:rotate(180deg)" aria-label="Next week">${svg('back')}</button>
      </div>
    </div>

    <div class="adts-stats">
      <div class="adts-stat hero ${allPending?'has-pending':''}">
        <em>Total payroll</em>
        <strong>${money(allWages)}</strong>
        <span>${emps.length} employees \u00b7 ${allHours.toFixed(1)}h this week</span>
      </div>
      <div class="adts-stat-grid">
        <div class="adts-mini"><em>Logged</em><strong>${allHours.toFixed(1)}h</strong></div>
        <div class="adts-mini"><em>Approved</em><strong>${allApproved.toFixed(1)}h</strong></div>
        <div class="adts-mini ${allPending?'warn':''}"><em>Pending</em><strong>${allPending}</strong></div>
        <div class="adts-mini"><em>Staff</em><strong>${emps.length}</strong></div>
      </div>
    </div>

    <details class="adts-picker">
      <summary>
        <span class="adts-pic-ic">${svg('team')}</span>
        <div class="adts-pic-copy"><em class="adts-eyebrow">Viewing</em><strong>All employees</strong><span>${selectedName} selected \u00b7 tap to switch</span></div>
        <span class="ce-chev">${svg('back')}</span>
      </summary>
      <div class="adts-emp-list">
        ${empMini.map(x=>`<button class="adts-emp-btn ${selected&&x.emp.id===selected.id?'active':''}" data-action="select-admin-emp" data-id="${x.emp.id}">
          <span class="avatar sm sage">${initials(x.emp.name)}</span>
          <span class="adts-emp-meta"><strong>${x.emp.name}</strong><em>${x.totalLogged.toFixed(1)}h logged \u00b7 ${x.t.hours.toFixed(1)}h approved</em></span>
          <b class="${x.pending?'warn':''}">${x.pending?x.pending+' pending':money(x.t.total)}</b>
        </button>`).join('')}
      </div>
    </details>

    <div class="adts-emp-card">
      <div class="adts-emp-head" data-action="ts-focus-open" data-id="${selected?.id||''}" style="cursor:pointer">
        <div class="avatar adts-emp-av">${initials(selectedName)}</div>
        <div class="adts-emp-copy">
          <em class="adts-eyebrow">Employee timesheet</em>
          <strong>${selectedName}</strong>
          <span>${money(employeeHourlyRate(selected))}/hr \u00b7 ${totals.km.toFixed(1)}km travel \u00b7 tap to open full week</span>
        </div>
        <div class="adts-emp-nav">
          <button class="adts-nav-btn" data-action="admin-employee-shift" data-dir="-1" aria-label="Previous employee">${svg('back')}</button>
          <button class="adts-nav-btn" data-action="admin-employee-shift" data-dir="1" style="transform:rotate(180deg)" aria-label="Next employee">${svg('back')}</button>
        </div>
      </div>
      <div class="adts-emp-pay">
        <div class="adts-emp-pay-hero">
          <em>Week pay</em>
          <strong>${money(totals.total)}</strong>
        </div>
        <div class="adts-emp-pay-mini">
          <div><em>Approved</em><strong>${totals.hours.toFixed(1)}h</strong></div>
          <div><em>Travel</em><strong>${totals.km.toFixed(1)}km</strong></div>
        </div>
      </div>
    </div>

    <div class="adts-day-row">
      ${dates.map(d=>{const dt=new Date(d+'T00:00:00');const drows=mine.filter(r=>r.date===d);const h=drows.reduce((a,r)=>a+paidHours(r),0);return `<button class="adts-day ${d===state.adminTimesheetDate?'sel':''} ${d===today()?'today':''}" data-action="pick-admin-ts-day" data-date="${d}">
        <span>${DOW[dt.getDay()]}</span><strong>${dt.getDate()}</strong><em>${h?h.toFixed(1)+'h':drows.length?'0h':'\u2014'}</em>
      </button>`;}).join('')}
    </div>

    <div class="adts-day-card">
      <div class="adts-day-head">
        <div><em class="adts-eyebrow">Selected day</em><strong>${fmtDateLong(state.adminTimesheetDate)}</strong><span>${selectedDayRows.length} entr${selectedDayRows.length===1?'y':'ies'} for ${selectedName}</span></div>
        <button class="btn btn-primary btn-sm" data-action="admin-add-entry" data-user="${selected?.id||''}" data-date="${state.adminTimesheetDate}">${svg('plus')} Add entry</button>
      </div>
      ${selectedDayRows.length?`<div class="acs-record-list">${selectedDayRows.map(r=>tsRow(r,false)).join('')}</div>`:`<div class="adts-empty">${svg('clock')}<p>No timesheet entry for this date.</p><span>If ${selectedName.split(' ')[0]} forgot to clock in, tap Add entry to create one.</span><button class="btn btn-soft btn-sm" data-action="admin-add-entry" data-user="${selected?.id||''}" data-date="${state.adminTimesheetDate}" style="margin-top:10px">${svg('plus')} Add entry</button></div>`}
    </div>

    <details class="clock-exports card">
      <summary><strong>Xero exports</strong><span>CSV, Excel & lock paid</span><span class="ce-chev">${svg('back')}</span></summary>
      <div class="cx-grid">
        <button class="btn btn-ghost btn-sm" data-action="export-payroll-summary">${svg('docs')} Summary CSV</button>
        <button class="btn btn-ghost btn-sm" data-action="export-payroll-excel">${svg('docs')} Excel XLS</button>
        <button class="btn btn-ghost btn-sm" data-action="export-payroll">${svg('docs')} Detailed CSV</button>
        <button class="btn btn-soft btn-sm" data-action="mark-week-paid">${svg('check')} Mark approved paid</button>
      </div>
      <p class="cx-note">${money(WW_PAY_RATE)}/hr + ${money(WW_KM_RATE)}/km \u00b7 Mon\u2013Sun \u00b7 pays Thursday</p>
    </details>
  </div>`;
}

function tsFocusCard(r){
  const c=clientById(r.clientId);
  const status=statusLabel(r.status);const statusClass=statusPill(r.status);
  const paid=paidHours(r);
  return `<div class="tfe ${r.status}" data-action="edit-record" data-id="${r.id}">
    <span class="tfe-dot ${r.status}"></span>
    <span class="tfe-client">${escapeHtml(c?c.name:'Unassigned')}</span>
    <span class="tfe-time">${fmtTime(r.clockIn.slice(11,16))}–${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'…'}</span>
    <span class="tfe-h">${paid.toFixed(1)}h</span>
    <span class="tfe-km">${(Number(r.km)||0).toFixed(0)}km</span>
    <span class="tfe-note">${r.notes?escapeHtml(r.notes):'<em>—</em>'}</span>
    <span class="pill ${statusClass} tfe-status">${status}</span>
    <span class="tfe-actions">
      <button class="tfe-ic" data-action="edit-record" data-id="${r.id}" title="Edit">${svg('edit')}</button>
      ${r.status==='pending'?`<button class="tfe-ic flag" data-action="reject-ts" data-id="${r.id}" title="Flag">${svg('x')}</button><button class="tfe-ic ok" data-action="approve-ts" data-id="${r.id}" title="Approve">${svg('check')}</button>`:r.status==='approved'?`<button class="tfe-ic ok" data-action="mark-paid-ts" data-id="${r.id}" title="Mark paid">${svg('check')}</button>`:''}
    </span>
  </div>`;
}
function tsEmployeeFocus(emp,emps,dates,rows){
  const idx=Math.max(0,emps.findIndex(e=>e.id===emp.id));
  const mine=rows.filter(r=>r.userId===emp.id);
  const totals=employeePayrollTotals(emp,mine);
  const totalLogged=mine.reduce((a,r)=>a+paidHours(r),0);
  const totalKm=mine.reduce((a,r)=>a+(Number(r.km)||0),0);
  const pending=mine.filter(r=>r.status==='pending').length;
  return `
  <div class="tsf">
    <div class="tsf-bar">
      <button class="tsf-back" data-action="ts-focus-close">${svg('back')} Exit</button>
      <div class="tsf-search">
        ${svg('search')}
        <input type="search" id="tsfSearch" data-action="tsf-emp-search" placeholder="Search employee…" autocomplete="off" value="${escapeHtml(state.tsfSearch||'')}">
      </div>
      <div class="tsf-nav">
        <button class="tsf-nav-btn prev" data-action="ts-focus-shift" data-dir="-1">${svg('back')}<span class="tsf-nav-av">${initials(emps[(idx-1+emps.length)%emps.length]?.name||'')}</span><span class="tsf-nav-lbl"><em>Previous</em><strong>${escapeHtml((emps[(idx-1+emps.length)%emps.length]?.name||'').split(' ')[0])}</strong></span></button>
        <span class="tsf-nav-count">${idx+1} / ${emps.length}</span>
        <button class="tsf-nav-btn next" data-action="ts-focus-shift" data-dir="1"><span class="tsf-nav-lbl right"><em>Next</em><strong>${escapeHtml((emps[(idx+1)%emps.length]?.name||'').split(' ')[0])}</strong></span><span class="tsf-nav-av">${initials(emps[(idx+1)%emps.length]?.name||'')}</span><span style="display:inline-flex;transform:rotate(180deg)">${svg('back')}</span></button>
      </div>
    </div>
    ${state.tsfSearch?`<div class="tsf-results">${emps.filter(e=>e.name.toLowerCase().includes(state.tsfSearch.toLowerCase())||(e.title||'').toLowerCase().includes(state.tsfSearch.toLowerCase())).map(e=>`<button class="tsf-result ${e.id===emp.id?'active':''}" data-action="ts-focus-open" data-id="${e.id}"><span class="avatar sm sage">${initials(e.name)}</span>${escapeHtml(e.name)}</button>`).join('')||'<span class="tsf-noresult">No match</span>'}</div>`:''}

    <div class="tsf-head">
      <div class="avatar lg sage tsf-av">${initials(emp.name)}</div>
      <div class="tsf-head-copy">
        <h2>${escapeHtml(emp.name)}</h2>
        <span>${escapeHtml(emp.title||'Cleaner')} · ${money(employeeHourlyRate(emp))}/hr · ${money(WW_KM_RATE)}/km</span>
      </div>
      <div class="tsf-head-stats">
        <div class="tsf-hs"><em>Week pay</em><strong>${money(totals.total)}</strong></div>
        <div class="tsf-hs"><em>Logged</em><strong>${totalLogged.toFixed(1)}h</strong></div>
        <div class="tsf-hs"><em>Travel</em><strong>${totalKm.toFixed(1)}km</strong></div>
        <div class="tsf-hs ${pending?'warn':''}"><em>Pending</em><strong>${pending}</strong></div>
      </div>
    </div>
    <div class="tsf-period">${payWeekLabel(state.payrollAnchor)} · Pay day ${fmtDateLong(payDayForWeek(state.payrollAnchor))}</div>

    <div class="tsf-rows">
      ${dates.map(d=>{const dt=new Date(d+'T00:00:00');const drows=mine.filter(r=>r.date===d);const dh=drows.reduce((a,r)=>a+paidHours(r),0);const dkm=drows.reduce((a,r)=>a+(Number(r.km)||0),0);const isToday=d===today();
        return `<div class="tsf-row ${isToday?'today':''}">
          <div class="tsf-row-day">
            <span class="tsf-rd-dow">${DOW[dt.getDay()]}</span>
            <span class="tsf-rd-num">${dt.getDate()}</span>
            <span class="tsf-rd-mon">${fmtDate(d).replace(/^\d+\s/,'')}</span>
            ${drows.length?`<span class="tsf-rd-sum">${dh.toFixed(1)}h · ${dkm.toFixed(0)}km</span>`:''}
          </div>
          <div class="tsf-row-entries">
            ${drows.length?drows.map(r=>tsFocusCard(r)).join(''):`<div class="tsf-row-empty">No timesheet entry</div>`}
            <button class="tsf-row-add" data-action="admin-add-entry" data-user="${emp.id}" data-date="${d}" aria-label="Add entry">${svg('plus')} Add</button>
          </div>
        </div>`;}).join('')}
    </div>
  </div>`;
}

function tsRow(r,review,employeeView=false){
  const usr=userById(r.userId);
  const total=recordHours(r), paid=paidHours(r);
  const statusClass=statusPill(r.status);
  const v=varianceInfo(r);
  const status=statusLabel(r.status);
  const locked=employeeView&&(r.status==='approved'||r.status==='paid');
  if(review){return `<div class="card ts-review card-pad" data-action="edit-record" data-id="${r.id}"><div class="ts-head"><div class="avatar sm">${initials(usr?.name||'?')}</div><div><strong>${usr?.name||'?'}</strong><span>${clientName(r.clientId)} · ${fmtDate(r.date)} · ${fmtTime(r.clockIn.slice(11,16))}–${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'…'}</span></div><span class="pill ${statusClass}">${paid.toFixed(1)}h</span></div><div class="variance ${v.cls}">${v.label}</div>${r.notes?`<div class="rr-note" style="margin:8px 0 0 41px">${escapeHtml(r.notes)}</div>`:''}<div class="ts-actions"><button class="btn btn-soft btn-sm" data-action="reject-ts" data-id="${r.id}">Flag</button><button class="btn btn-primary btn-sm" data-action="approve-ts" data-id="${r.id}">${svg('check')} Approve</button></div></div>`;}
  const isAdmin=me()?.role==='admin';
  // Admin timesheet card — simple: client, start–finish, km. Tap to edit times.
  if(isAdmin){
    return `<div class="tsr ${r.status}" data-action="edit-record" data-id="${r.id}">
      <div class="tsr-main">
        <span class="tsr-ic ${r.status==='paid'?'b':r.status==='approved'?'g':r.status==='pending'?'a':'r'}">${svg(r.status==='paid'||r.status==='approved'?'check':'clock')}</span>
        <div class="tsr-info">
          <div class="tsr-top"><strong>${escapeHtml(clientName(r.clientId))}</strong><span class="pill ${statusClass}">${status}</span></div>
          <div class="tsr-stats">
            <span class="tsr-strong">${fmtTime(r.clockIn.slice(11,16))} – ${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'…'}</span>
            <span>${(Number(r.km)||0).toFixed(1)} km</span>
          </div>
        </div>
        <span class="tsr-edit">${svg('edit')}</span>
      </div>
      <div class="tsr-actions">
        <button class="btn btn-soft btn-sm" data-action="reject-ts" data-id="${r.id}">Flag</button>
        <button class="btn btn-ghost btn-sm" data-action="approve-ts" data-id="${r.id}">${svg('check')} Approve</button>
        <button class="btn btn-primary btn-sm" data-action="mark-paid-ts" data-id="${r.id}">Paid</button>
      </div>
    </div>`;
  }
  // Employee timesheet card — colourful, friendly, shows lock state
  const pay=money(employeePayAmount(usr,paid)+kmAmount(usr,Number(r.km)||0));
  const hint=locked?`${svg('lock')} Locked — tap to request a correction`:'Tap to add notes or fix this entry';
  return `<div class="tsr tsr-emp ${r.status} ${locked?'is-locked':''}" data-action="edit-record" data-id="${r.id}">
    <div class="tsr-main">
      <span class="tsr-ic ${r.status==='paid'?'b':r.status==='approved'?'g':r.status==='pending'?'a':'r'}">${svg(r.status==='paid'||r.status==='approved'?'check':'clock')}</span>
      <div class="tsr-info">
        <div class="tsr-top"><strong>${escapeHtml(clientName(r.clientId))}</strong><span class="pill ${statusClass} ${locked?'locked-pill':''}">${status}</span></div>
        <div class="tsr-stats">
          <span class="tsr-strong">${fmtTime(r.clockIn.slice(11,16))} – ${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'…'}</span>
          <span>${paid.toFixed(1)}h</span>
          <span class="tsr-km">${(Number(r.km)||0).toFixed(1)} km</span>
          <span class="tsr-strong">${pay}</span>
        </div>
        ${r.notes?`<div class="tsr-note">${escapeHtml(r.notes)}</div>`:`<div class="tsr-hint">${hint}</div>`}
      </div>
      <span class="tsr-edit">${svg(locked?'lock':'edit')}</span>
    </div>
  </div>`;
}


/* ===========================================================
   CHAT
   =========================================================== */
function threadTitle(t,u){
  if(t.type==='dm'){const other=t.memberIds.find(id=>id!==u.id);return userById(other)?.name||'Direct message';}
  return t.name;
}
function threadSub(t,u){
  if(t.type==='dm'){const other=userById(t.memberIds.find(id=>id!==u.id));return other?other.title:'';}
  if(t.type==='announcement')return 'Announcements';
  if(t.type==='workphotos')return `${t.memberIds.length} members · before & after job photos`;
  if(t.type==='team')return `${t.memberIds.length} members`;
  return `${t.memberIds.length} members \u00b7 ${t.privacy==='public'?'public group':'private group'}`;
}
function threadAvatar(t,u){
  if(t.type==='dm'){const o=userById(t.memberIds.find(id=>id!==u.id));return `<div class="avatar ${o?.role==='admin'?'clay':'sage'}">${initials(o?.name||'?')}</div>`;}
  const cls=t.type==='announcement'?'clay':(t.type==='group'||t.type==='workphotos')?'sage':'';
  const ic=t.type==='announcement'?'alert':t.type==='workphotos'?'camera':t.type==='group'?'team':'team';
  const style=t.type==='team'?'linear-gradient(135deg,var(--forest-500),var(--forest-700))':(t.type==='workphotos'?'linear-gradient(135deg,#1f8f4d,#c48a4a)':'');
  return `<div class="avatar ${cls}" style="background:${style}">${svg(ic)}</div>`;
}
function chatArchiveMap(uid){
  if(!state.chatArchived)state.chatArchived={};
  if(!state.chatArchived[uid])state.chatArchived[uid]={};
  return state.chatArchived[uid];
}
function chatDeleteMap(uid){
  if(!state.chatDeleted)state.chatDeleted={};
  if(!state.chatDeleted[uid])state.chatDeleted[uid]={};
  return state.chatDeleted[uid];
}
function isCoreThread(t){return !!(t&&(t.id==='team-all'||t.type==='team'||t.id==='announce'||t.type==='announcement'||t.id==='before-after'||t.type==='workphotos'));}
function userCanHideThread(t,u){return !!(t&&u&&!isCoreThread(t));}
function baseUserThreads(u){
  normalisePublicThreads(state);
  return state.threads.filter(t=>t&&((isCoreThread(t)) || (t.memberIds&&t.memberIds.includes(u.id)) || (t.type==='group'&&t.privacy==='public')));
}
function myThreads(u,opts){
  const archived=chatArchiveMap(u.id), deleted=chatDeleteMap(u.id);
  const showArchived=!!(opts&&opts.archived);
  return baseUserThreads(u).filter(t=>{
    if(deleted[t.id])return false;
    const isArchived=!!archived[t.id];
    return showArchived ? isArchived : !isArchived;
  });
}
function archivedThreadCount(u){return baseUserThreads(u).filter(t=>!chatDeleteMap(u.id)[t.id]&&chatArchiveMap(u.id)[t.id]).length;}
function messageTimeValue(m){
  if(!m)return 0;
  const raw=m.createdAt||m.clientCreatedAt||m.serverReceivedAt||m.updatedAt||'';
  return parseStampToEpoch(raw);
}
// Parse a timestamp to a comparable epoch (ms). Strings that already carry a
// timezone (trailing Z or +hh:mm) are absolute. Bare local strings like
// "2026-06-25T07:50:00" (used by seed data) are interpreted as Melbourne time
// so ordering stays correct even when the user's device is in another timezone.
function parseStampToEpoch(raw){
  if(!raw)return 0;
  if(typeof raw==='number')return Number.isFinite(raw)?raw:0;
  const s=String(raw).trim();
  const hasTz=/[zZ]$|[+\-]\d{2}:?\d{2}$/.test(s);
  if(hasTz){const v=Date.parse(s);return Number.isFinite(v)?v:0;}
  // bare local: compute the Melbourne UTC offset for this instant and apply it
  const m=s.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?/);
  if(!m){const v=Date.parse(s);return Number.isFinite(v)?v:0;}
  const [_,Y,Mo,D,H,Mi,Se]=m;
  const asUTC=Date.UTC(+Y,+Mo-1,+D,+H,+Mi,+(Se||0));
  // offset of Australia/Melbourne at this date (handles AEST/AEDT)
  let offMin=600; // default AEST +10:00
  try{
    const dtf=new Intl.DateTimeFormat('en-US',{timeZone:APP_TZ,hour12:false,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
    const p=dtf.formatToParts(new Date(asUTC)).reduce((a,x)=>(a[x.type]=x.value,a),{});
    const asMelb=Date.UTC(+p.year,+p.month-1,+p.day,+(p.hour==='24'?0:p.hour),+p.minute,+p.second);
    offMin=Math.round((asMelb-asUTC)/60000);
  }catch(e){}
  return asUTC - offMin*60000;
}
function messagesChronological(list){
  return (Array.isArray(list)?list:[]).filter(m=>m&&m.id&&!m._deleted&&!(state&&state.deletedMessages&&state.deletedMessages[m.id])).map((m,i)=>({m,i,t:messageTimeValue(m)}))
    .sort((a,b)=>(a.t-b.t)||(a.i-b.i)).map(x=>x.m);
}
function msgReactModal(data){
  const {threadId,msgId}=data||{};
  return modalShell('React',
    `<div class="emoji-pick">${MSG_EMOJIS.map(e=>`<button class="emoji-pick-btn" data-action="pick-msg-rx" data-thread="${threadId}" data-msg="${msgId}" data-emoji="${e}">${e}</button>`).join('')}</div>`,
    `<button class="btn btn-ghost" data-action="close-modal">Close</button>`);
}
function updReactModal(data){
  const {id}=data||{};
  return modalShell('React to update',
    `<div class="emoji-pick">${UPD_EMOJIS.map(e=>`<button class="emoji-pick-btn" data-action="pick-upd-rx" data-id="${id}" data-emoji="${e}">${e}</button>`).join('')}</div>`,
    `<button class="btn btn-ghost" data-action="close-modal">Close</button>`);
}
function updReplyModal(data){
  const {id,cid}=data||{};
  return modalShell('Reply',
    `<div class="field"><label>Your reply</label><input class="input" id="updreply" placeholder="Write a reply…" autocomplete="off"></div>`,
    `<button class="btn btn-ghost" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="send-upd-reply" data-id="${id}" data-cid="${cid}">Reply</button>`);
}
function lastMsg(t){
  const msgs=messagesChronological(t&&t.messages);
  return msgs[msgs.length-1];
}

const MSG_EMOJIS=['👍','❤️','😂','😮','🙏','🎉'];
function applyMsgReaction(threadId,msgId,emoji,u){
  const t=state.threads.find(x=>x.id===threadId);if(!t)return;
  const m=(t.messages||[]).find(x=>x.id===msgId);if(!m)return;
  if(!m.reactions)m.reactions={};
  if(!Array.isArray(m.reactions[emoji]))m.reactions[emoji]=[];
  const arr=m.reactions[emoji];const i=arr.indexOf(u.id);
  if(i>=0)arr.splice(i,1); else arr.push(u.id);
  if(!arr.length)delete m.reactions[emoji];
  m.updatedAt=nowIso();t.updatedAt=nowIso();
  saveRealtime();render();
}
function findUpdate(id){return (state.updates||[]).find(x=>x.id===id);}
function applyUpdReaction(id,emoji,u){
  const up=findUpdate(id);if(!up)return;
  if(!up.reactions)up.reactions={};
  if(!Array.isArray(up.reactions[emoji]))up.reactions[emoji]=[];
  const arr=up.reactions[emoji];const i=arr.indexOf(u.id);
  if(i>=0)arr.splice(i,1);else arr.push(u.id);
  if(!arr.length)delete up.reactions[emoji];
  up.updatedAt=nowIso();saveRealtime();render();
}
function everyoneIds(){return (state.users||[]).filter(x=>x.status!=='archived').map(x=>x.id);}
function onlyEmployees(){return (state.users||[]).filter(x=>x.status!=='archived'&&x.role==='employee').map(x=>x.id);}
function addUpdComment(id,text,u){
  const up=findUpdate(id);if(!up)return;
  if(!Array.isArray(up.comments))up.comments=[];
  up.comments.push({id:uid('uc'),authorId:u.id,text,createdAt:nowIso(),replies:[]});
  up.updatedAt=nowIso();
  if(!state.openUpdates)state.openUpdates={};state.openUpdates[id]=true;
  saveRealtime();render();
  try{addAlertForUsers((up.audience==='employee'?onlyEmployees():everyoneIds()).filter(x=>x!==u.id),`${u.name.split(' ')[0]} commented on "${up.title}"`,{kind:'update'});}catch(e){}
}
function addUpdReply(id,cid,text,u){
  const up=findUpdate(id);if(!up)return;
  const c=(up.comments||[]).find(x=>x.id===cid);if(!c)return;
  if(!Array.isArray(c.replies))c.replies=[];
  c.replies.push({id:uid('ur'),authorId:u.id,text,createdAt:nowIso()});
  up.updatedAt=nowIso();if(!state.openUpdates)state.openUpdates={};state.openUpdates[id]=true;
  saveRealtime();render();
}
function msgReactionsHtml(m,threadId,u){
  const rx=m.reactions||{};
  const keys=Object.keys(rx).filter(e=>Array.isArray(rx[e])&&rx[e].length);
  if(!keys.length)return '';
  return `<span class="msg-rx">${keys.map(e=>{const users=rx[e];const mine=users.includes(u.id);return `<button class="rx-chip ${mine?'mine':''}" data-action="toggle-msg-rx" data-thread="${threadId}" data-msg="${m.id}" data-emoji="${e}">${e}<span class="rx-n">${users.length}</span></button>`;}).join('')}</span>`;
}

// Build the HTML for ONE message bubble — used to append a sent message instantly
// to the open chat without re-rendering the whole screen.
function messageBubbleHtml(m,active,u,prevAuthorId){
  const au=userById(m.authorId);const mine=m.authorId===u.id;
  const isWorkPhotos=active.type==='workphotos'||active.id==='before-after';
  const showName=!mine&&(prevAuthorId!==m.authorId);
  return `<div class="msg ${mine?'mine':''}" data-mid="${m.id}" data-thread="${active.id}">
    ${!mine?`<div class="msg-av"><div class="avatar sm ${au?.role==='admin'?'clay':'sage'}">${initials(au?.name||'?')}</div></div>`:''}
    <div class="bubble ${isWorkPhotos&&messageHasPhoto(m)?'workphoto-bubble':''}">${showName?`<div class="b-author">${escapeHtml(au?.name||'?')}</div>`:''}${attachmentsHtml(m,active.id,m.id)}${m.text?`<div class="b-text">${escapeHtml(m.text)}</div>`:''}${photoCommentsHtml(m,u)}<time>${fmtStampTime(recordStamp(m))}</time>${messageReceiptHtml(m,active,u)}</div>
  </div>`;
}

/* ---------- message read / unread tracking ----------
   state.threadReads[userId][threadId] = ISO timestamp the user last read up to.
   A thread is "unread" when its newest message (from someone else) is newer
   than that timestamp, or when the user has manually marked it unread. */
function threadReadMap(uid){
  if(!state.threadReads)state.threadReads={};
  if(!state.threadReads[uid])state.threadReads[uid]={};
  return state.threadReads[uid];
}
function markThreadRead(threadId,u){
  const who=u||me();if(!who||!threadId)return;
  const map=threadReadMap(who.id);
  map[threadId]=nowIso();
  // clear any manual "unread" flag
  if(state.threadManualUnread&&state.threadManualUnread[who.id])delete state.threadManualUnread[who.id][threadId];
}
function isThreadUnread(t,u){
  const who=u||me();if(!who||!t)return false;
  // manual override wins
  if(state.threadManualUnread&&state.threadManualUnread[who.id]&&state.threadManualUnread[who.id][t.id])return true;
  const lm=lastMsg(t);
  if(!lm)return false;
  if(lm.authorId===who.id)return false; // your own latest message isn't "unread"
  const map=(state.threadReads&&state.threadReads[who.id])||{};
  const readAt=map[t.id];
  if(!readAt)return true; // never opened and there's a message from someone else
  return String(recordStamp(lm)||lm.createdAt||'') > String(readAt);
}
function setThreadManualUnread(threadId,u){
  const who=u||me();if(!who||!threadId)return;
  if(!state.threadManualUnread)state.threadManualUnread={};
  if(!state.threadManualUnread[who.id])state.threadManualUnread[who.id]={};
  state.threadManualUnread[who.id][threadId]=true;
  // also pull the read timestamp back so it counts as unread
  const map=threadReadMap(who.id);
  delete map[threadId];
}
function activeThreadIsVisibleOnScreen(){
  if(!state||state.activeTab!=='chat'||!state.activeThreadId)return false;
  const desktop=window.matchMedia&&window.matchMedia('(min-width:1024px)').matches;
  return desktop || !!state.chatMobileThread;
}
function markActiveThreadReadIfVisible(){
  const u=me();if(!u||!activeThreadIsVisibleOnScreen())return false;
  const t=(state.threads||[]).find(x=>x&&x.id===state.activeThreadId);
  if(!t)return false;
  const lm=lastMsg(t);
  if(!lm||lm.authorId===u.id)return false;
  markThreadRead(t.id,u);
  return true;
}
function threadReceiptRecipients(t,m){
  if(!t||!m)return [];
  let ids=[];
  if(t.id==='team-all'||t.type==='team'||t.id==='announce'||t.type==='announcement'||t.id==='before-after'||t.type==='workphotos') ids=activeAppUserIds(state);
  else ids=Array.isArray(t.memberIds)?t.memberIds.slice():[];
  const seen=new Set();
  return ids.filter(id=>id&&id!==m.authorId&&!seen.has(id)&&seen.add(id)&&userById(id)&&userById(id).status!=='archived');
}
function userHasReadMessage(userId,threadId,m){
  if(!userId||!threadId||!m)return false;
  if(state.threadManualUnread&&state.threadManualUnread[userId]&&state.threadManualUnread[userId][threadId])return false;
  const readAt=state.threadReads&&state.threadReads[userId]&&state.threadReads[userId][threadId];
  if(!readAt)return false;
  return (parseStampToEpoch(readAt)||0) >= (messageTimeValue(m)||0)-500;
}
function messageReceiptHtml(m,t,u){
  if(!m||!t||!u||m.authorId!==u.id)return '';
  const recips=threadReceiptRecipients(t,m);
  if(!recips.length)return '';
  const seenIds=recips.filter(id=>userHasReadMessage(id,t.id,m));
  if(seenIds.length){
    return `<span class="msg-status seen">✓✓ Seen</span>`;
  }
  return `<span class="msg-status delivered">✓ Delivered · not seen yet</span>`;
}

function chatPage(u){
  const viewingArchived=!!state.showArchivedChats;
  const archivedCount=archivedThreadCount(u);
  const threads=myThreads(u,{archived:viewingArchived}).slice().sort((a,b)=>{
    const rank=t=>t.id==='team-all'||t.type==='team'?0:(t.id==='before-after'||t.type==='workphotos'?1:(t.id==='announce'||t.type==='announcement'?2:5));
    const ra=rank(a),rb=rank(b);if(ra!==rb)return ra-rb;
    const la=lastMsg(a),lb=lastMsg(b);return (lb?lb.createdAt:'').localeCompare(la?la.createdAt:'');
  });
  // If the user just opened a specific thread, keep it active even if a
  // background sync briefly reorders the list.
  if(__pinnedThreadId && Date.now()<__pinnedThreadUntil){
    const pinned=threads.find(t=>t.id===__pinnedThreadId);
    if(pinned)state.activeThreadId=pinned.id;
  }
  const active=threads.find(t=>t.id===state.activeThreadId)||threads[0];
  if(active)state.activeThreadId=active.id;
  const q=(state.chatSearch||'').trim().toLowerCase();
  const matchThread=t=>{
    if(!q)return true;
    const title=threadTitle(t,u).toLowerCase();
    const sub=threadSub(t,u).toLowerCase();
    // For DMs, also match on the other person's name so searching a name
    // surfaces the existing direct chat. For group/team threads we match on
    // the thread's own title only — not on incidental message text — so a
    // person-name search doesn't pull in every group that mentioned them.
    if(t.type==='dm'){
      const other=userById(t.memberIds.find(id=>id!==u.id));
      const oname=other?(other.name||'').toLowerCase():'';
      return title.includes(q)||sub.includes(q)||oname.includes(q);
    }
    return title.includes(q)||sub.includes(q);
  };
  const shownThreads=threads.filter(matchThread);
  // Every active staff/admin account in the app is treated as a real message user.
  // When searching, show people first so tapping a name ALWAYS opens a direct DM, not All Team.
  const people=q?activeAppUsers(state).filter(p=>p.id!==u.id&&((p.name||'').toLowerCase().includes(q)||(p.title||'').toLowerCase().includes(q)||(p.email||'').toLowerCase().includes(q)||(p.phone||'').toLowerCase().includes(q))).sort((a,b)=>{
    const an=(a.name||'').toLowerCase(),bn=(b.name||'').toLowerCase();
    const ap=an.startsWith(q)?0:1,bp=bn.startsWith(q)?0:1;
    return ap-bp||an.localeCompare(bn);
  }):[];
  const list=`
    <div class="chat-list cv-list">
      <div class="cv-head">
        <span class="cv-head-label">Messages</span>
        ${archivedCount?`<button class="cv-archive-filter ${viewingArchived?'active':''}" data-action="toggle-archived-chats" aria-label="${viewingArchived?'Show active chats':'Show archived chats'}">${viewingArchived?'Active':'Archived'}${!viewingArchived?` ${archivedCount}`:''}</button>`:''}
        <button class="cv-new" data-action="new-chat" aria-label="New conversation">${svg('plus')}</button>
      </div>
      <div class="cv-search">
        <span class="cv-search-ic">${svg('search')}</span>
        <input id="chatSearch" data-action="chat-search" type="search" placeholder="Search chats or people…" autocomplete="off" value="${escapeHtml(state.chatSearch||'')}">
        ${q?`<button class="cv-search-clear" data-action="clear-chat-search" aria-label="Clear">${svg('x')}</button>`:''}
      </div>
      <div class="cv-threads">
        ${q&&people.length?`<div class="cv-people-label">People</div>${people.map(p=>`<button class="cv-row cv-person" data-action="start-dm" data-id="${p.id}">
            <span class="cv-av"><span class="avatar sm ${p.role==='admin'?'clay':'sage'}">${initials(p.name)}</span></span>
            <span class="cv-body"><span class="cv-top"><span class="cv-name">${escapeHtml(p.name)}</span></span><span class="cv-sub">${escapeHtml(p.title||(p.role==='admin'?'Admin':'Cleaner'))} · Tap to message</span></span>
            <span class="cv-chev">${svg('chat')}</span>
          </button>`).join('')}${shownThreads.length?'<div class="cv-people-label">Chats</div>':''}`:''}
        ${shownThreads.map(t=>{const lm=lastMsg(t);const au=lm?userById(lm.authorId):null;
          const photoCount=((lm&&Array.isArray(lm.attachments))?lm.attachments.length:(lm&&lm.attachment?1:0));const preview=lm?`${au&&au.id!==u.id?escapeHtml(au.name.split(' ')[0])+': ':''}${escapeHtml(lm.text|| (photoCount?`uploaded ${photoCount} photo${photoCount>1?'s':''}`:''))}`:'No messages yet';
          const unread=isThreadUnread(t,u);
          return `<button class="cv-row ${t.id===active?.id?'active':''} cv-type-${t.type} ${t.type==='workphotos'?'cv-workphotos':''} ${['team','workphotos','announcement'].includes(t.type)?'cv-pinned':''} ${unread?'cv-unread':'cv-read'}" data-action="thread" data-id="${t.id}">
            <span class="cv-av">${threadAvatar(t,u)}${unread?'<span class="cv-unread-dot" aria-label="Unread"></span>':''}</span>
            <span class="cv-body">
              <span class="cv-top"><span class="cv-name">${escapeHtml(threadTitle(t,u))}</span>${['team','workphotos','announcement'].includes(t.type)?`<span class="cv-pintag" aria-label="Pinned"></span>`:''}${lm?`<time class="cv-time">${fmtStampTime(recordStamp(lm))}</time>`:''}</span>
              <span class="cv-sub">${escapeHtml(threadSub(t,u))}</span>
              <span class="cv-last ${lm?'':'cv-empty'}">${preview}</span>
            </span>
            <span class="cv-readtoggle" data-action="toggle-thread-read" data-id="${t.id}" data-unread="${unread?'1':'0'}" role="button" aria-label="${unread?'Mark as read':'Mark as unread'}" title="${unread?'Mark as read':'Mark as unread'}">${unread?svg('check'):svg('dot')}</span>
            ${userCanHideThread(t,u)?(viewingArchived?`<span class="cv-mini-action" data-action="restore-chat" data-id="${t.id}" role="button" title="Restore chat" aria-label="Restore chat">${svg('check')}</span>`:`<span class="cv-mini-action" data-action="archive-chat" data-id="${t.id}" role="button" title="Archive chat" aria-label="Archive chat">${svg('archive')}</span><span class="cv-mini-action danger" data-action="delete-chat" data-id="${t.id}" role="button" title="Delete chat from my list" aria-label="Delete chat from my list">${svg('trash')}</span>`):''}
            <span class="cv-chev">${svg('back')}</span>
          </button>`;}).join('')||(q?'':`<div class="cv-none">${viewingArchived?'No archived chats':'No conversations yet'}</div>`)}
        ${q&&!shownThreads.length&&!people.length?'<div class="cv-none">No matches found</div>':''}
      </div>
    </div>`;
  if(!active)return `<div class="chat-shell">${list}<div class="chat-thread empty-thread"><div class="empty">${svg('chat')}<p>Start a conversation</p></div></div></div>`;

  const canPost=!(active.type==='announcement'&&u.role!=='admin');
  const isAdminGroup=active.type==='group';
  const isWorkPhotos=active.type==='workphotos'||active.id==='before-after';
  const pendingPhotos=Array.isArray(window.__pendingWorkPhotos)?window.__pendingWorkPhotos:[];
  const otherId=active.type==='dm'?active.memberIds.find(id=>id!==u.id):null;
  const dmSub=otherId?(()=>{const lbl=presenceLabel(otherId);const on=userPresence(otherId).online;return `<span class="cth-presence ${on?'is-online':''}">${on?'<span class="cth-dot"></span>':''}${escapeHtml(lbl||threadSub(active,u))}</span>`;})():'';
  const typingNames=whoIsTyping(active.id);
  const typingHtml=typingNames.length?`<div class="typing-row"><span class="typing-dots"><i></i><i></i><i></i></span><span class="typing-text">${escapeHtml(typingNames.length===1?typingNames[0]+' is typing':typingNames.slice(0,2).join(', ')+' are typing')}…</span></div>`:'';
  const thread=`
    <div class="chat-thread">
      <div class=" chat-thread-head ct-head">
        <button class=" cth-back" data-action="back-chatlist">${svg('back')}</button>
        ${active.type==='dm'?`<button class="cth-card" data-action="chat-contact-info" data-id="${otherId}">${threadAvatar(active,u)}<div class="cth-info"><div class="cth-name">${escapeHtml(threadTitle(active,u))}</div><div class="cth-sub">${dmSub}</div></div></button>`:`${threadAvatar(active,u)}<div class="cth-info"><div class="cth-name">${escapeHtml(threadTitle(active,u))}</div><div class="cth-sub">${escapeHtml(threadSub(active,u))}</div></div>`}
        ${isAdminGroup&&u.role==='admin'?`<button class="cth-act" data-action="manage-group" data-id="${active.id}">${svg('team')}</button>`:''}
      </div>
      ${isWorkPhotos?`<div class="workphoto-banner"><strong>Before & After Photos</strong><span>Upload client clean photos with an optional note. Admin can comment and congratulate staff.</span></div>`:''}
      <div class="chat-scroll" id="chatScroll">
        ${messagesChronological(active.messages).map((m,i,orderedMessages)=>{const au=userById(m.authorId);const mine=m.authorId===u.id;const prev=orderedMessages[i-1];const showName=!mine&&(!prev||prev.authorId!==m.authorId);
          return `<div class="msg ${mine?'mine':''}" data-mid="${m.id}" data-thread="${active.id}">
            ${!mine?`<div class="msg-av"><div class="avatar sm ${au?.role==='admin'?'clay':'sage'}">${initials(au?.name||'?')}</div></div>`:''}
            <div class="bubble ${isWorkPhotos&&messageHasPhoto(m)?'workphoto-bubble':''}">${showName?`<div class="b-author">${escapeHtml(au?.name||'?')}</div>`:''}${attachmentsHtml(m,active.id,m.id)}${m.text?`<div class="b-text">${escapeHtml(m.text)}</div>`:''}${photoCommentsHtml(m,u)}${isWorkPhotos&&u.role==='admin'&&messageHasPhoto(m)?`<button class="photo-comment-btn" data-action="comment-photo" data-thread="${active.id}" data-msg="${m.id}">${svg('chat')} Comment / congratulate</button>`:''}<time>${fmtStampTime(recordStamp(m))}</time>${messageReceiptHtml(m,active,u)}${msgReactionsHtml(m,active.id,u)}</div>
            <button class="msg-react-btn" data-action="react-msg" data-thread="${active.id}" data-msg="${m.id}" aria-label="React">${svg('smile')}</button>
          </div>`;}).join('')||'<div class="thread-empty">Say hello \uD83D\uDC4B</div>'}
        ${typingHtml}
      </div>
      ${canPost?`<div class="chat-composer">
        <input type="file" id="chatFile" class="chat-file-input" accept="${isWorkPhotos?'image/*':'image/*,video/*,application/pdf,.doc,.docx,.txt,.xls,.xlsx'}" ${isWorkPhotos?'multiple':''} hidden>
        <button class="cattach ${isWorkPhotos?'photo-upload-btn':''}" data-action="attach-file" aria-label="Attach file or photo">${svg(isWorkPhotos?'camera':'clip')}</button>
        ${isWorkPhotos&&pendingPhotos.length?`<div class="pending-photos">${pendingPhotos.map((p,i)=>`<span class="pending-photo"><img src="${p.data}" alt="Photo ${i+1}"><button data-action="remove-pending-photo" data-index="${i}">×</button></span>`).join('')}</div>`:''}
        <div class="input chat-editbox" id="chatInput" contenteditable="plaintext-only" role="textbox" aria-label="Message" data-placeholder="${isWorkPhotos?'Add client name, before/after note…':'Message…'}" autocomplete="on" autocorrect="on" autocapitalize="sentences" spellcheck="true" inputmode="text" enterkeyhint="enter" data-lpignore="true" data-form-type="other"></div>
        <button class="btn btn-primary csend" data-action="send-msg">${svg('send')}</button>
      </div>`:'<div class="chat-readonly">Only admins can post here</div>'}
    </div>`;
  return `<div class="chat-shell ${state.chatMobileThread?'show-thread':''}">${list}${thread}</div>`;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function fmtBytes(n){if(!n)return'';if(n<1024)return n+' B';if(n<1048576)return (n/1024).toFixed(0)+' KB';return (n/1048576).toFixed(1)+' MB';}
function attachmentsForMessage(m){
  if(!m)return[];
  if(Array.isArray(m.attachments)&&m.attachments.length)return m.attachments;
  return m.attachment?[m.attachment]:[];
}
function messageHasPhoto(m){return attachmentsForMessage(m).some(a=>a&&a.type&&a.type.startsWith('image/'));}
function attachmentsHtml(m,threadId,msgId){
  return attachmentsForMessage(m).map((a,idx)=>attachmentHtml(a,threadId,msgId,idx)).join('');
}
function attachmentHtml(a,threadId,msgId,idx){
  if(!a)return'';
  const ref=`data-action="view-attach" data-thread="${threadId}" data-msg="${msgId}" data-idx="${idx||0}"`;
  if(a.type&&a.type.startsWith('image/')){
    return `<button class="b-attach-img" ${ref}><img src="${a.data}" alt="${escapeHtml(a.name||'image')}" loading="lazy"></button>`;
  }
  if(a.type&&a.type.startsWith('video/')&&a.data){
    return `<div class="b-attach-video"><video src="${a.data}" controls playsinline preload="metadata" style="width:100%;max-width:280px;border-radius:14px;display:block"></video><span class="baf-size" style="display:block;margin-top:4px;font-size:11px;opacity:.7">${escapeHtml(a.name||'Video')} · ${fmtBytes(a.size)}</span></div>`;
  }
  return `<button class="b-attach-file" ${ref}>
    <span class="baf-ic">${svg('docs')}</span>
    <span class="baf-meta"><span class="baf-name">${escapeHtml(a.name||'Attachment')}</span><span class="baf-size">${fmtBytes(a.size)} · tap to open</span></span>
  </button>`;
}
function photoCommentsHtml(m,u){
  const comments=Array.isArray(m&&m.comments)?m.comments:[];
  if(!comments.length)return'';
  return `<div class="photo-comments">${comments.map(c=>{const au=userById(c.authorId)||{};return `<div class="photo-comment"><strong>${escapeHtml(au.name||'Admin')}</strong><span>${escapeHtml(c.text||'')}</span><time>${fmtStampTime(recordStamp(c))}</time></div>`;}).join('')}</div>`;
}

/* ===========================================================
   STAFF / TEAM
   =========================================================== */
function teamPage(u){
  const employees=state.users.filter(x=>x.role==='employee'||x.role==='admin');
  const archivedList=employees.filter(p=>p.status==='archived');
  const q=(state.teamSearch||'').trim().toLowerCase();
  const team=employees.filter(p=>p.status!=='archived').filter(p=>!q||[p.name,p.title,p.phone,p.email,p.address].join(' ').toLowerCase().includes(q));
  const active=employees.filter(p=>p.status!=='archived').length;
  const rosteredToday=new Set(shiftsForDate(today()).flatMap(s=>s.employeeIds)).size;
  const limit=getListLimit('teamVisibleLimit');
  const visibleTeam=team.slice(0,limit);
  const stats=buildEmployeeDirectoryStats(state.rosterAnchor);
  return `
  <button class="page-back" data-action="tab" data-tab="directory">${svg('back')} Back to Directory</button>
  <div class="manager-hero employees card">
    <div class="mh-icon">${svg('team')}</div>
    <div class="mh-copy"><span>People directory</span><h2>Employees list</h2><p>Fast employee list for rosters, timesheets and documents. Large imports now load in small batches so the app stays smooth.</p></div>
    <button class="btn btn-primary btn-sm mh-add" data-action="new-user">${svg('plus')} Add employee</button>
  </div>

  <div class="directory-stats">
    <div class="dir-stat"><strong>${employees.length}</strong><span>Total employees</span></div>
    <div class="dir-stat"><strong>${active}</strong><span>Active</span></div>
    <div class="dir-stat"><strong>${rosteredToday}</strong><span>On jobs today</span></div>
  </div>

  <div class="directory-toolbar card dir-toolbar-v2">
    <label class="dir-search">${svg('search')}<input data-action="team-search" value="${escapeHtml(state.teamSearch||'')}" placeholder="Search employees by name, phone or role…"></label>
    <div class="dir-tools">
      <button class="dir-tool" data-action="import-employees">${svg('docs')}<span>Import</span></button>
      <button class="dir-tool" data-action="employee-template">${svg('download')}<span>Template</span></button>
      <button class="dir-tool dir-tool-primary" data-action="new-user">${svg('plus')}<span>Add</span></button>
    </div>
  </div>
  <input type="file" id="employeeImportFile" accept=".csv,.tsv,.txt,.xlsx,.xls,.docx,.doc" style="display:none">
  <div class="dir-count">${visibleTeam.length<team.length?`Showing ${visibleTeam.length} of ${team.length}`:team.length} ${q?'matching ':''}${team.length===1?'employee':'employees'}</div>
  <input type="hidden" data-noop="1">

  <div class="directory-list employee-directory">
    ${visibleTeam.length?visibleTeam.map(p=>{const st=stats[p.id]||{hours:0,todayJobs:0,docs:0};return `
      <button class="directory-card employee-card-list card" data-action="open-person" data-id="${p.id}">
        <span class="avatar lg ${p.role==='admin'?'clay':'sage'}">${initials(p.name)}</span>
        <span class="dir-main"><strong>${escapeHtml(p.name)}${p.role==='admin'?'<b class="dir-admin-badge">Admin</b>':''}</strong><em>${escapeHtml(p.title||'Cleaner')}</em><small>${svg('phone')} ${escapeHtml(p.phone||'No phone saved')}</small></span>
        <span class="dir-pills"><i>${st.hours.toFixed(1)}h/wk</i><i>${st.todayJobs} today</i><i>${st.docs} docs</i></span>
      </button>`;}).join(''):`<div class="card"><div class="empty">${svg('search')}<p>No employees match that search.</p></div></div>`}
  </div>
  ${moreListButton('employees',visibleTeam.length,team.length)}

  ${archivedList.length?`
  <div class="section-head" style="margin-top:22px">
    <h2>Archived employees</h2><span class="count">${archivedList.length}</span>
  </div>
  <div class="directory-list employee-directory archived-directory">
    ${archivedList.slice(0,50).map(p=>`
      <div class="directory-card employee-card-list card archived-card">
        <span class="avatar lg sage" style="opacity:.6">${initials(p.name)}</span>
        <span class="dir-main"><strong>${escapeHtml(p.name)}${p.role==='admin'?'<b class="dir-admin-badge">Admin</b>':''}</strong><em>${escapeHtml(p.title||'Cleaner')} · archived</em><small>${svg('phone')} ${escapeHtml(p.phone||'No phone saved')}</small></span>
        <button class="btn btn-soft btn-sm" data-action="restore-emp" data-id="${p.id}">Restore</button>
      </div>`).join('')}
  </div>`:''}`;
}

/* ===========================================================
   CLIENTS
   =========================================================== */
function clientsPage(u){
  const q=(state.clientSearch||'').trim().toLowerCase();
  const clients=state.clients.filter(c=>!q||[c.name,c.address,c.phone,c.email,c.notes].join(' ').toLowerCase().includes(q));
  const bookedToday=new Set(shiftsForDate(today()).map(s=>s.clientId)).size;
  const limit=getListLimit('clientVisibleLimit');
  const visibleClients=clients.slice(0,limit);
  const shiftInfo=buildClientShiftInfo();
  return `
  <button class="page-back" data-action="tab" data-tab="directory">${svg('back')} Back to Directory</button>
  <div class="manager-hero clients card">
    <div class="mh-icon">${svg('clients')}</div>
    <div class="mh-copy"><span>Client directory</span><h2>Clients list</h2><p>Fast client list for imported job exports. Large lists now open in batches instead of loading hundreds of cards at once.</p></div>
    <button class="btn btn-primary btn-sm mh-add" data-action="new-client">${svg('plus')} Add client</button>
  </div>

  <div class="directory-stats">
    <div class="dir-stat"><strong>${state.clients.length}</strong><span>Total clients</span></div>
    <div class="dir-stat"><strong>${bookedToday}</strong><span>Booked today</span></div>
    <div class="dir-stat"><strong>${state.shifts.length}</strong><span>Total roster jobs</span></div>
  </div>

  <div class="directory-toolbar card dir-toolbar-v2">
    <label class="dir-search">${svg('search')}<input data-action="client-search" value="${escapeHtml(state.clientSearch||'')}" placeholder="Search clients by name, address or phone…"></label>
    <div class="dir-tools">
      <button class="dir-tool" data-action="import-clients">${svg('docs')}<span>Import</span></button>
      <button class="dir-tool" data-action="client-template">${svg('download')}<span>Template</span></button>
      <button class="dir-tool dir-tool-primary" data-action="new-client">${svg('plus')}<span>Add</span></button>
    </div>
  </div>
  <input type="file" id="clientImportFile" accept=".csv,.tsv,.txt,.xlsx,.xls,.docx,.doc" style="display:none">
  <div class="dir-count">${visibleClients.length<clients.length?`Showing ${visibleClients.length} of ${clients.length}`:clients.length} ${q?'matching ':''}${clients.length===1?'client':'clients'}</div>

  <div class="directory-list client-directory">
    ${visibleClients.length?visibleClients.map(c=>{const info=shiftInfo[c.id]||{count:0,next:null};const cnt=info.count||0;const next=info.next;return `
      <div class="directory-card client-card-list card">
        <span class="avatar lg clay">${initials(c.name)}</span>
        <span class="dir-main"><strong>${escapeHtml(c.name)}</strong><em>${cnt} roster job${cnt!==1?'s':''}${next?` · next ${fmtDate(next.date)}`:''}</em><small>${svg('pin')} ${escapeHtml(c.address||'No address saved')}</small><small>${svg('phone')} ${escapeHtml(c.phone||'No phone saved')}</small></span>
        <span class="dir-pills"><i>${cnt} shifts</i><i>${escapeHtml(c.email||'No email')}</i></span>
        <button class="client-del-btn" data-action="delete-client" data-id="${c.id}" data-name="${escapeHtml(c.name)}" data-count="${cnt}" title="Delete client" aria-label="Delete client">${svg('trash')}</button>
      </div>`;}).join(''):`<div class="card"><div class="empty">${svg('search')}<p>No clients match that search.</p></div></div>`}
  </div>
  ${moreListButton('clients',visibleClients.length,clients.length)}`;
}

/* ===========================================================
   DIRECTORY HUB (mobile-clean admin hub for Staff + Clients)
   =========================================================== */
function directoryPage(u){
  const employees=state.users.filter(x=>x.role==='employee'||x.role==='admin');
  const active=employees.filter(x=>x.status!=='archived').length;
  const clients=state.clients;
  const staffToday=new Set(shiftsForDate(today()).flatMap(s=>s.employeeIds)).size;
  const bookedToday=new Set(shiftsForDate(today()).map(s=>s.clientId)).size;
  const recentStaff=employees.slice(0,3);
  const recentClients=clients.slice(0,3);
  return `
  <div class="directory-hub-hero card">
    <div class="dhh-badge">${svg('team')}</div>
    <div class="dhh-copy"><span>Admin directory</span><h2>Staff &amp; clients</h2><p>Clean mobile hub for your employee list and client list. Documents are now kept inside Profile.</p></div>
  </div>

  <div class="directory-hub-grid">
    <button class="directory-hub-card staff card" data-action="tab" data-tab="team">
      <span class="dhc-icon">${svg('team')}</span>
      <span class="dhc-main"><strong>Employees</strong><em>${employees.length} saved · ${active} active</em><small>${staffToday} staff rostered today</small></span>
      <span class="dhc-go">Open</span>
    </button>
    <button class="directory-hub-card clients card" data-action="tab" data-tab="clients">
      <span class="dhc-icon">${svg('clients')}</span>
      <span class="dhc-main"><strong>Clients</strong><em>${clients.length} saved · ${bookedToday} booked today</em><small>${state.shifts.length} roster jobs connected</small></span>
      <span class="dhc-go">Open</span>
    </button>
  </div>

  <div class="directory-action-row">
    <button class="btn btn-primary btn-block" data-action="new-user">${svg('plus')} Add employee</button>
    <button class="btn btn-clay btn-block" data-action="new-client">${svg('plus')} Add client</button>
  </div>

  <div class="section-head" style="margin-top:22px"><h2>Quick preview</h2><span class="count">tap Open for full list</span></div>
  <div class="directory-preview-grid">
    <div class="card dir-preview-card"><div class="dir-preview-head"><strong>Employees</strong><button data-action="tab" data-tab="team">View all</button></div>
      ${recentStaff.map(p=>`<button class="dir-mini-row" data-action="open-person" data-id="${p.id}"><span class="avatar sm sage">${initials(p.name)}</span><span><b>${escapeHtml(p.name)}${p.role==='admin'?'<i class="dir-admin-badge mini">Admin</i>':''}</b><em>${escapeHtml(p.title||'Cleaner')}</em></span></button>`).join('')}
    </div>
    <div class="card dir-preview-card"><div class="dir-preview-head"><strong>Clients</strong><button data-action="tab" data-tab="clients">View all</button></div>
      ${recentClients.map(c=>`<div class="dir-mini-row client"><span class="avatar sm clay">${initials(c.name)}</span><span><b>${escapeHtml(c.name)}</b><em>${escapeHtml(c.address||'No address saved')}</em></span></div>`).join('')}
    </div>
  </div>`;
}

/* ===========================================================
   DOCUMENTS
   =========================================================== */
/* ===================== DOCUMENTS ===================== */
const DOC_CATEGORIES=['Contract','Police Check','Certificate','Induction Form','ID / Licence','Other'];

function empDocsPage(u){
  const mine=state.documents.filter(d=>d.userId===u.id);
  const toSign=mine.filter(d=>d.assignedByAdmin&&!d.signed);
  const signed=mine.filter(d=>d.assignedByAdmin&&d.signed);
  const uploaded=mine.filter(d=>!d.assignedByAdmin);
  return `
  <button class="page-back" data-action="tab" data-tab="account">${svg('back')} Back to Profile</button>
  <div class="doc-intro card card-pad">
    <div class="di-ic">${svg('docs')}</div>
    <div><h3>Your documents</h3><p>Forms to sign, documents you've signed, and your own uploads — all in one place.</p></div>
    <button class="btn btn-primary btn-sm" data-action="upload-doc">${svg('plus')} Upload</button>
  </div>

  ${toSign.length?`
  <div class="section-head" style="margin-top:22px"><h2>Action needed</h2><span class="count">${toSign.length} to sign</span></div>
  ${toSign.map(d=>`<div class="doc-card need">
    <div class="doc-ic amber">${svg('alert')}</div>
    <div class="dc-body"><div class="doc-name">${escapeHtml(d.name)}</div><div class="doc-sub">${escapeHtml(d.category)} \u00b7 sent by admin</div></div>
    <button class="btn btn-clay btn-sm" data-action="sign-doc" data-id="${d.id}">Review &amp; sign</button>
  </div>`).join('')}`:''}

  <div class="section-head" style="margin-top:22px"><h2>Signed &amp; completed</h2><span class="count">${signed.length}</span></div>
  ${signed.length? signed.map(d=>`<div class="doc-card" data-action="view-signed" data-id="${d.id}" style="cursor:pointer">
    <div class="doc-ic green">${svg('check')}</div>
    <div class="dc-body"><div class="doc-name">${escapeHtml(d.name)}</div><div class="doc-sub">${escapeHtml(d.category)} \u00b7 signed${d.signedAt?' '+fmtDate(d.signedAt.slice(0,10)):''}</div></div>
    <span class="pill pill-green">Signed</span>
  </div>`).join('') : '<div class="card"><div class="empty">'+svg('check')+'<p>Nothing signed yet</p></div></div>'}

  <div class="section-head" style="margin-top:22px"><h2>My uploads</h2><span class="count">${uploaded.length}</span></div>
  ${uploaded.length? uploaded.map(d=>docCard(d,true)).join('') : '<div class="card"><div class="empty">'+svg('docs')+'<p>No files yet \u2014 tap Upload to add one</p></div></div>'}`;
}

function adminDocsPage(u){
  const team=state.users.filter(x=>x.role==='employee');
  return `
  <button class="page-back" data-action="tab" data-tab="account">${svg('back')} Back to Profile</button>
  <div class="doc-intro card card-pad">
    <div class="di-ic">${svg('team')}</div>
    <div><h3>Staff documents</h3><p>Each employee has their own folder. Assign documents for them to sign, and view everything they upload.</p></div>
    <button class="btn btn-primary btn-sm" data-action="assign-doc">${svg('plus')} Assign</button>
  </div>
  <div class="section-head" style="margin-top:22px"><h2>By employee</h2><span class="count">${team.length} folders</span></div>
  ${team.map(p=>{const docs=state.documents.filter(d=>d.userId===p.id);const pending=docs.filter(d=>d.assignedByAdmin&&!d.signed).length;
    return `<div class="folder-card" data-action="open-folder" data-id="${p.id}">
      <div class="avatar sage">${initials(p.name)}</div>
      <div class="fc-body"><div class="fc-name">${p.name}</div><div class="fc-sub">${docs.length} document${docs.length!==1?'s':''}${pending?` \u00b7 ${pending} awaiting signature`:''}</div></div>
      ${pending?`<span class="pill pill-amber">${pending}</span>`:`<span class="pill pill-green">${svg('check')}</span>`}
      <span class="fc-arrow">${svg('back')}</span>
    </div>`;}).join('')}`;
}
function docCard(d,owner){
  return `<div class="doc-card" data-action="view-doc" data-id="${d.id}">
    <div class="doc-ic ${d.signed?'green':'grey'}">${svg('docs')}</div>
    <div class="dc-body"><div class="doc-name">${escapeHtml(d.name)}</div><div class="doc-sub">${escapeHtml(d.category)} \u00b7 ${timeAgo(d.uploadedAt)}${d.fileData?' · attachment ready':''}</div></div>
    ${d.signed?'<span class="pill pill-green">Signed</span>':'<span class="pill pill-grey">Uploaded</span>'}
    ${owner?`<button class="dc-del" data-action="del-doc" data-id="${d.id}">${svg('trash')}</button>`:''}
  </div>`;
}

/* ===================== AVAILABILITY ===================== */
function availPage(u){
  const dates=weekDates(state.rosterAnchor);
  const av=state.availability[u.id]||{};
  const wa=state.weeklyAvail[u.id]||{};
  const DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  return `
  <button class="page-back" data-action="tab" data-tab="account">${svg('back')} Back to Profile</button>
  <div class="doc-intro card card-pad">
    <div class="di-ic">${svg('cal')}</div>
    <div><h3>Your availability</h3><p>Set when you can work. The admin sees this on the roster so they can plan your shifts.</p></div>
  </div>

  <div class="section-head" style="margin-top:22px"><h2>This week</h2>
    <span class="spacer"></span>
    <button class="rh-nav" data-action="week-shift" data-dir="-1" style="width:34px;height:34px">${svg('back')}</button>
    <button class="rh-nav" data-action="week-shift" data-dir="1" style="width:34px;height:34px;transform:rotate(180deg)">${svg('back')}</button>
  </div>
  <div class="avail-list">
    ${dates.map(d=>{const dt=new Date(d+'T00:00:00');const cur=av[d]||{status:'available',note:''};
      return `<div class="avail-row ${cur.status}">
        <div class="ar-date"><strong>${DOW[dt.getDay()]}</strong><span>${dt.getDate()} ${MON[dt.getMonth()]}</span></div>
        <div class="ar-seg">
          ${['available','partial','unavailable'].map(st=>`<button class="seg ${cur.status===st?'on':''} ${st}" data-action="set-avail" data-date="${d}" data-status="${st}">${st==='available'?'Free':st==='partial'?'Partial':'Off'}</button>`).join('')}
        </div>
        ${cur.status==='partial'?`<input class="ar-note" data-action="avail-note" data-date="${d}" value="${cur.note||''}" placeholder="e.g. after 2pm">`:(cur.note?`<div class="ar-notetxt">${escapeHtml(cur.note)}</div>`:'')}
      </div>`;}).join('')}
  </div>

  <div class="section-head" style="margin-top:24px"><h2>Usual weekly hours</h2></div>
  <div class="card weekly-avail">
    ${DAYS.map(day=>{const w=wa[day]||{on:false,from:'',to:''};
      return `<div class="wa-row">
        <button class="wa-toggle ${w.on?'on':''}" data-action="toggle-weekly" data-day="${day}"><span></span></button>
        <span class="wa-day">${day}</span>
        ${w.on?`<div class="wa-times">
          <input type="time" class="wa-time" data-action="weekly-time" data-day="${day}" data-which="from" value="${w.from||'08:00'}">
          <span>\u2013</span>
          <input type="time" class="wa-time" data-action="weekly-time" data-day="${day}" data-which="to" value="${w.to||'16:00'}">
        </div>`:'<span class="wa-off">Not available</span>'}
      </div>`;}).join('')}
  </div>`;
}

function adminAvailPage(u){
  const dates=weekDates(state.rosterAnchor);
  const team=state.users.filter(x=>x.role==='employee');
  const DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  return `
  <div class="section-head"><h2>Team availability</h2>
    <span class="spacer"></span>
    <button class="rh-nav" data-action="week-shift" data-dir="-1" style="width:34px;height:34px">${svg('back')}</button>
    <div class="rh-label" style="flex:0;padding:0 8px"><strong style="font-size:14px">${fmtDate(dates[0])}</strong></div>
    <button class="rh-nav" data-action="week-shift" data-dir="1" style="width:34px;height:34px;transform:rotate(180deg)">${svg('back')}</button>
  </div>
  <div class="avail-grid-wrap card">
    <table class="avail-grid">
      <thead><tr><th>Staff</th>${dates.map(d=>{const dt=new Date(d+'T00:00:00');return `<th>${DOW[dt.getDay()]}<small>${dt.getDate()}</small></th>`;}).join('')}</tr></thead>
      <tbody>
        ${team.map(p=>{const av=state.availability[p.id]||{};
          return `<tr><td class="ag-name"><span class="avatar sm sage">${initials(p.name)}</span>${p.name.split(' ')[0]}</td>
          ${dates.map(d=>{const c=av[d]||{status:'available'};const has=shiftsForUserDate(p.id,d).length;
            return `<td class="ag-cell ${c.status}" title="${c.note||c.status}">${c.status==='unavailable'?'\u2715':c.status==='partial'?'\u25D1':has?'\u25CF':'\u2713'}</td>`;}).join('')}
          </tr>`;}).join('')}
      </tbody>
    </table>
  </div>
  <div class="avail-legend">
    <span><i class="lg available"></i> Free</span>
    <span><i class="lg partial"></i> Partial</span>
    <span><i class="lg unavailable"></i> Unavailable</span>
    <span><i class="lg booked"></i> Has shift</span>
  </div>`;
}

/* ===========================================================
   ACCOUNT
   =========================================================== */

function accountPage(u){
  const docs=u.role==='admin'?state.documents:state.documents.filter(d=>d.userId===u.id);
  const future=state.shifts.filter(s=>s.employeeIds.includes(u.id)&&s.date>=today()).length;
  const weekRows=weekDates(state.timesheetAnchor||state.rosterAnchor||today()).flatMap(d=>recordsForUserDate(u.id,d));
  const approved=weekRows.filter(r=>r.status==='approved').reduce((a,r)=>a+paidHours(r),0);
  const paid=weekRows.filter(r=>r.status==='paid').reduce((a,r)=>a+paidHours(r),0);
  const avCount=Object.values(state.availability[u.id]||{}).filter(x=>x.status&&x.status!=='available').length;
  const isAdmin=u.role==='admin';
  return `
  <div class="pf2">
    <!-- HERO -->
    <div class="pf2-hero ${isAdmin?'admin':'staff'}">
      <div class="pf2-hero-bg"></div>
      <div class="pf2-avatar" ${u.photo?`style="background-image:url('${u.photo}');background-size:cover;background-position:center"`:''}>${u.photo?'':initials(u.name)}</div>
      <h2 class="pf2-name">${escapeHtml(u.name)}</h2>
      <div class="pf2-title">${escapeHtml(u.title||'')}</div>
      <span class="pf2-role">${isAdmin?'Admin · Owner':'Team member'}</span>
      <button class="pf2-edit" data-action="edit-me">${svg('edit')} Edit profile</button>
    </div>

    <!-- STAT STRIP -->
    <div class="pf2-stats">
      <div class="pf2-stat"><strong>${approved.toFixed(1)}h</strong><em>Approved</em></div>
      <div class="pf2-stat"><strong>${future}</strong><em>Upcoming</em></div>
      <div class="pf2-stat"><strong>${docs.length}</strong><em>Documents</em></div>
    </div>

    <!-- QUICK LINKS -->
    <div class="pf2-section-label">Quick access</div>
    <div class="pf2-links">
      <button class="pf2-link" data-action="tab" data-tab="docs">
        <span class="pf2-link-ic green">${svg('docs')}</span>
        <span class="pf2-link-txt"><strong>${isAdmin?'Staff documents':'My documents'}</strong><span>${docs.length} files &amp; forms</span></span>
        <span class="pf2-link-arrow">${svg('back')}</span>
      </button>
      ${isAdmin
        ? `<button class="pf2-link" data-action="tab" data-tab="directory">
            <span class="pf2-link-ic clay">${svg('team')}</span>
            <span class="pf2-link-txt"><strong>Staff &amp; clients</strong><span>${state.users.filter(x=>x.role==='employee').length} staff · ${state.clients.length} clients</span></span>
            <span class="pf2-link-arrow">${svg('back')}</span>
          </button>`
        : `<button class="pf2-link" data-action="tab" data-tab="avail">
            <span class="pf2-link-ic clay">${svg('cal')}</span>
            <span class="pf2-link-txt"><strong>My availability</strong><span>${avCount} unavailable/partial days</span></span>
            <span class="pf2-link-arrow">${svg('back')}</span>
          </button>`}
      <button class="pf2-link" data-action="tab" data-tab="clock">
        <span class="pf2-link-ic sage">${svg('clock')}</span>
        <span class="pf2-link-txt"><strong>${isAdmin?'Payroll &amp; timesheets':'My timesheets'}</strong><span>${approved.toFixed(1)}h approved this week</span></span>
        <span class="pf2-link-arrow">${svg('back')}</span>
      </button>
    </div>

    <!-- PERSONAL DETAILS -->
    <div class="pf2-section-label">Personal details<button class="pf2-mini-edit" data-action="edit-me">${svg('edit')}</button></div>
    <div class="pf2-card">
      ${pf2Row('mail','Email',u.email)}
      ${pf2Row('phone','Phone',u.phone)}
      ${pf2Row('pin','Address',u.address)}
      ${pf2Row('cal','Date of birth',fmtDOB(u.dob))}
    </div>

    <!-- PAYROLL -->
    <div class="pf2-section-label">Payroll</div>
    <div class="pf2-card">
      ${pf2Row('hours','Pay type',isAdmin?'Salary / Admin':'Hourly')}
      ${isAdmin?'':pf2Row('hours','Hourly rate',money(WW_PAY_RATE)+' / hour')}
      ${isAdmin?'':pf2Row('pin','Travel rate',money(WW_KM_RATE)+' / km')}
      ${pf2Row('cal','Pay week','Mon–Sun · paid Thursday')}
    </div>

    <!-- EMERGENCY -->
    <div class="pf2-section-label">Emergency contact</div>
    <div class="pf2-card">
      ${pf2Row('account','Name',u.emergencyName||'Not set')}
      ${pf2Row('phone','Phone',u.emergencyPhone||'Not set')}
    </div>

    <!-- ACTIONS -->
    <div class="pf2-actions">
      <button class="pf2-signout" data-action="logout">${svg('logout')} Sign out</button>
      <button class="pf2-reset" data-action="reset-data">Reset app data</button>
    </div>
  </div>`;
}
function pf2Row(ic,label,val){
  return `<div class="pf2-row"><span class="pf2-row-ic">${svg(ic)}</span><span class="pf2-row-l">${label}</span><span class="pf2-row-v">${escapeHtml(val||'—')}</span></div>`;
}
function fmtDOB(d){ if(!d)return ''; try{return fmtDateLong(d);}catch(e){return d;} }

function detailRow(ic,label,val){return `<div class="detail-row"><div class="dr-ic">${svg(ic)}</div><div><div class="dr-l">${label}</div><div class="dr-v">${val}</div></div></div>`;}

/* ===========================================================
   ALERTS
   =========================================================== */
function alertIcon(text){
  const t=(text||'').toLowerCase();
  if(t.includes('declin')||t.includes('reject')||t.includes('correction'))return 'alert';
  if(t.includes('sign')||t.includes('document'))return 'docs';
  if(t.includes('booking')||t.includes('reminder')||t.includes('deadline'))return 'alert';
  if(t.includes('shift')||t.includes('roster'))return 'cal';
  if(t.includes('clock')||t.includes('timesheet')||t.includes('review'))return 'clock';
  return 'bell';
}
function alertsPage(u){
  const mine=visibleAlertsForUser(state,u);
  const unread=mine.filter(a=>!a.read).length;
  state.openAlerts=state.openAlerts||{};
  return `<div class="notif-wrap">
    ${u.role==='admin'?pendingApprovalsPanel(u):''}
    <div class="notif-head">
      <div class="notif-head-title"><h2>Notifications</h2><span>${mine.length?`${mine.length} total${unread?` · ${unread} unread`:''}`:'You\\u2019re all caught up'}</span></div>
      <div class="notif-head-actions">
        ${notificationPermissionHtml()}
        ${mine.some(a=>!a.read)?`<button class="btn btn-soft btn-sm" data-action="read-all-alerts">Mark all read</button>`:''}
      </div>
    </div>
    ${mine.length? `<div class="notif-list">${mine.map(a=>{const open=!!state.openAlerts[a.id];const short=a.text.length>62&&!open?escapeHtml(a.text.slice(0,60))+'\\u2026':escapeHtml(a.text);
      return `<div class="notif-item ${a.read?'':'unread'} ${a.priority?'important':''} ${open?'open':''}">
        <button class="notif-row" data-action="toggle-alert" data-id="${a.id}">
          <span class="notif-ic ${a.priority?'urgent':(a.read?'':'hot')}">${svg(a.priority?'alert':alertIcon(a.text))}</span>
          <span class="notif-text">${a.priority?'<em class="notif-badge">IMPORTANT</em> ':''}${short}</span>
          <span class="notif-meta"><time>${timeAgo(a.createdAt)}</time><span class="notif-chev">${svg('back')}</span></span>
        </button>
        ${open?`<div class="notif-body"><p>${escapeHtml(a.text)}</p></div>`:''}
      </div>`;}).join('')}</div>` : '<div class="card"><div class="empty">'+svg('bell')+'<p>No notifications yet</p></div></div>'}
  </div>`;
}

/* ===========================================================
   MODALS
   =========================================================== */
let modal=null; // {type, data}
function openModal(type,data){modal={type,data:data||{}};renderModal();}
function closeModal(){modal=null;renderModal();}

function modalContent(){
  if(!modal)return'';
  if(modal.type==='install-guide')return installGuideModal();
  const u=me();
  if(modal.type==='msg-react')return msgReactModal(modal.data);
  if(modal.type==='upd-react')return updReactModal(modal.data);
  if(modal.type==='upd-reply')return updReplyModal(modal.data);
  if(modal.type==='shift')return shiftModal(modal.data);
  if(modal.type==='shift-view')return shiftViewModal(modal.data);
  if(modal.type==='user')return userModal(modal.data);
  if(modal.type==='invite-employee')return inviteEmployeeModal(modal.data);
  if(modal.type==='client')return clientModal(modal.data);
  if(modal.type==='person')return personModal(modal.data);
  if(modal.type==='contact')return contactModal(modal.data);
  if(modal.type==='emp-week')return empWeekModal(modal.data);
  if(modal.type==='edit-me')return editMeModal(u);
  if(modal.type==='clockout')return clockoutModal(modal.data);
  if(modal.type==='record')return recordModal(modal.data);
  if(modal.type==='missed-record')return missedRecordModal(modal.data);
  if(modal.type==='admin-entry')return adminEntryModal(modal.data);
  if(modal.type==='update')return updateModal(modal.data);
  if(modal.type==='booking-reminder')return bookingReminderModal(modal.data);
  if(modal.type==='booking-file')return bookingFileModal(modal.data);
  if(modal.type==='upload-doc')return uploadDocModal(modal.data);
  if(modal.type==='assign-doc')return assignDocModal(modal.data);
  if(modal.type==='folder')return folderModal(modal.data);
  if(modal.type==='new-chat')return newChatModal(modal.data);
  if(modal.type==='manage-group')return manageGroupModal(modal.data);
  if(modal.type==='attach-view')return attachViewModal(modal.data);
  if(modal.type==='sign-doc')return signDocModal(modal.data);
  if(modal.type==='request-roster')return requestRosterModal(modal.data);
  if(modal.type==='weekly-summary')return weeklySummaryModal(modal.data);
  if(modal.type==='view-signed')return viewSignedModal(modal.data);
  if(modal.type==='doc-file')return docFileModal(modal.data);
  return'';
}
function attachViewModal(d){
  const t=state.threads.find(x=>x.id===d.threadId);
  const m=t&&t.messages.find(x=>x.id===d.msgId);
  const atts=attachmentsForMessage(m);const a=atts[Number(d.idx||0)]||atts[0];
  if(!a)return modalShell('Attachment',`<div class="empty"><p>This attachment is no longer available.</p></div>`,`<button class="btn btn-ghost" data-action="close-modal">Close</button>`);
  const isImg=a.type&&a.type.startsWith('image/');
  const isVideo=a.type&&a.type.startsWith('video/');
  const isPdf=a.type==='application/pdf';
  let body;
  if(isImg){
    body=`<div class="attach-view"><img src="${a.data}" alt="${escapeHtml(a.name||'image')}"></div>`;
  }else if(isVideo){
    body=`<div class="attach-view attach-view-video"><video src="${a.data}" controls playsinline autoplay style="width:100%;max-height:70vh;border-radius:14px;background:#000"></video></div>`;
  }else if(isPdf){
    body=`<div class="attach-view attach-view-pdf"><iframe src="${a.data}" title="${escapeHtml(a.name||'PDF')}"></iframe></div>
      <p class="attach-hint">If the preview doesn't show, use Open below.</p>`;
  }else{
    body=`<div class="attach-view attach-view-generic"><span class=" avg-ic">${svg('docs')}</span><strong>${escapeHtml(a.name||'File')}</strong><span>${fmtBytes(a.size)}</span></div>`;
  }
  const foot=`<a class="btn btn-soft" href="${a.data}" target="_blank" rel="noopener">${svg('eye')} Open</a>
    <a class="btn btn-primary" href="${a.data}" download="${escapeHtml(a.name||'file')}">${svg('docs')} Download</a>
    <span style="flex:1"></span>
    <button class="btn btn-ghost" data-action="close-modal">Close</button>`;
  return modalShell(escapeHtml(a.name||'Attachment'),body,foot);
}
let __sigHasInk=false;
function initSigPad(){
  const c=document.getElementById('sigPad');if(!c)return;
  __sigHasInk=false;
  const ctx=c.getContext('2d');
  const rect=c.getBoundingClientRect();
  c.width=rect.width*2;c.height=rect.height*2;ctx.scale(2,2);
  ctx.lineWidth=2.2;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#1d2e1f';
  let drawing=false,lx=0,ly=0;
  const pos=ev=>{const r=c.getBoundingClientRect();const t=ev.touches?ev.touches[0]:ev;return{x:t.clientX-r.left,y:t.clientY-r.top};};
  const start=ev=>{ev.preventDefault();drawing=true;const p=pos(ev);lx=p.x;ly=p.y;};
  const move=ev=>{if(!drawing)return;ev.preventDefault();const p=pos(ev);ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(p.x,p.y);ctx.stroke();lx=p.x;ly=p.y;__sigHasInk=true;};
  const end=()=>{drawing=false;};
  c.addEventListener('mousedown',start);c.addEventListener('mousemove',move);window.addEventListener('mouseup',end);
  c.addEventListener('touchstart',start,{passive:false});c.addEventListener('touchmove',move,{passive:false});c.addEventListener('touchend',end);
}
function clearSigPad(){
  const c=document.getElementById('sigPad');if(!c)return;
  const ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);__sigHasInk=false;
}
function docFileModal(d){
  const doc=state.documents.find(x=>x.id===d.id);
  if(!doc||!doc.fileData)return modalShell('Document',`<div class="empty"><p>No file.</p></div>`,`<button class="btn btn-ghost" data-action="close-modal">Close</button>`);
  const data=doc.fileData;
  const isImg=data.startsWith('data:image/');
  const isPdf=data.startsWith('data:application/pdf');
  let body;
  if(isImg)body=`<div class="attach-view"><img src="${data}" alt="${escapeHtml(doc.name)}"></div>`;
  else if(isPdf)body=`<div class="attach-view attach-view-pdf"><iframe src="${data}" title="${escapeHtml(doc.name)}"></iframe></div><p class="attach-hint">If the preview doesn't show, use Open below.</p>`;
  else body=`<div class="attach-view attach-view-generic"><span class="avg-ic">${svg('docs')}</span><strong>${escapeHtml(doc.name)}</strong></div>`;
  return modalShell(escapeHtml(doc.name),body,
    `<a class="btn btn-soft" href="${data}" target="_blank" rel="noopener">${svg('eye')} Open</a>
     <a class="btn btn-primary" href="${data}" download="${escapeHtml(doc.name)}">${svg('docs')} Download</a>
     <span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button>`);
}
function viewSignedModal(d){
  const doc=state.documents.find(x=>x.id===d.id);
  if(!doc)return modalShell('Document',`<div class="empty"><p>Not found.</p></div>`,`<button class="btn btn-ghost" data-action="close-modal">Close</button>`);
  const emp=userById(doc.userId);
  const fields=(doc.fields||[]).filter(f=>f.value);
  return modalShell('Signed document',`
    <div class="sign-doc-head"><strong>${escapeHtml(doc.name)}</strong><span>${escapeHtml(doc.category)} · ${emp?escapeHtml(emp.name):''}</span></div>
    ${doc.fileData?`<button class="btn btn-soft btn-block" data-action="view-doc" data-id="${doc.id}">${svg('eye')} View the document file</button>`:''}
    ${fields.length?`<div class="signed-fields">${fields.map(f=>`<div class="sf-row"><span class="sf-label">${escapeHtml(f.label)}</span><span class="sf-val">${escapeHtml(f.value)}</span></div>`).join('')}</div>`:'<p class="co-hint">No fields were requested.</p>'}
    <div class="field"><label>Signature</label>
      ${doc.signature?`<div class="signed-sig"><img src="${doc.signature}" alt="signature"></div>`:'<p class="co-hint">No signature captured.</p>'}
    </div>
    ${doc.signedAt?`<p class="co-hint">Signed ${fmtDateLong(doc.signedAt.slice(0,10))} at ${fmtTime(doc.signedAt.slice(11,16))}.</p>`:''}
  `,`<button class="btn btn-primary" data-action="download-signed-doc" data-id="${doc.id}">${svg('docs')} Download</button><span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button>`);
}
function downloadWeeklySummary(userId,anchor){
  const u=userById(userId)||me();
  const dates=weekDates(anchor);
  let totalH=0,totalKm=0,totalPay=0;
  const rowsHtml=dates.map(dt=>{
    const recs=recordsForUserDate(u.id,dt);
    const day=new Date(dt+'T00:00:00');
    const h=recs.reduce((a,r)=>a+paidHours(r),0);
    const km=recs.reduce((a,r)=>a+(Number(r.km)||0),0);
    const pay=employeePayAmount(u,h)+kmAmount(u,km);
    totalH+=h;totalKm+=km;totalPay+=pay;
    if(!recs.length){
      return `<tr class="off"><td>${DOW[day.getDay()]} ${day.getDate()}/${day.getMonth()+1}</td><td colspan="4">No shift</td></tr>`;
    }
    return recs.map((r,i)=>`<tr>
      <td>${i===0?`${DOW[day.getDay()]} ${day.getDate()}/${day.getMonth()+1}`:''}</td>
      <td>${escapeHtml(clientName(r.clientId))}<br><span class="muted">${escapeHtml(r.notes||'')}</span></td>
      <td>${fmtTime(r.clockIn.slice(11,16))}–${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'—'}</td>
      <td class="num">${paidHours(r).toFixed(2)}h</td>
      <td class="num">${(Number(r.km)||0).toFixed(1)}km</td>
    </tr>`).join('');
  }).join('');
  const html=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Weekly timesheet — ${escapeHtml(u.name)} — ${payWeekLabel(anchor)}</title>
  <style>
    *{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    body{font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;margin:0;padding:24px;color:#1a241c;background:#fff}
    .wrap{max-width:720px;margin:0 auto}
    .head{background:linear-gradient(135deg,#385c3d,#16271a);color:#fff;border-radius:16px;padding:22px 24px;margin-bottom:18px}
    .head h1{margin:0 0 4px;font-size:22px}
    .head .sub{opacity:.85;font-size:13px}
    .head .biz{font-size:12px;opacity:.7;margin-top:10px;letter-spacing:.04em;text-transform:uppercase}
    .tot{display:flex;gap:10px;margin:16px 0}
    .tot div{flex:1;background:#f3eee2;border-radius:12px;padding:12px;text-align:center}
    .tot em{display:block;font-style:normal;font-size:11px;color:#5d6b60;text-transform:uppercase;letter-spacing:.03em}
    .tot strong{display:block;font-size:20px;margin-top:3px}
    .tot .pay{background:#e3f0e4}
    table{width:100%;border-collapse:collapse;font-size:13px}
    th{text-align:left;background:#2a472f;color:#fff;padding:9px 10px;font-size:11px;letter-spacing:.03em;text-transform:uppercase}
    th.num,td.num{text-align:right}
    td{padding:9px 10px;border-bottom:1px solid #e7e2d4;vertical-align:top}
    tr.off td{color:#a7b0a6;font-style:italic}
    .muted{color:#8a958b;font-size:11px}
    tfoot td{font-weight:800;border-top:2px solid #2a472f;background:#faf7f0}
    .foot{margin-top:16px;font-size:12px;color:#5d6b60}
    @media print{body{padding:0}.wrap{max-width:none}}
  </style></head><body><div class="wrap">
    <div class="head">
      <h1>${escapeHtml(u.name)}</h1>
      <div class="sub">${escapeHtml(u.title||'Cleaner')} · Weekly timesheet</div>
      <div class="sub">${payWeekLabel(anchor)} · Pay day ${fmtDateLong(payDayForWeek(anchor))}</div>
      <div class="biz">Westwondersandco</div>
    </div>
    <div class="tot">
      <div><em>Total hours</em><strong>${totalH.toFixed(2)}h</strong></div>
      <div><em>Total travel</em><strong>${totalKm.toFixed(1)}km</strong></div>
      <div class="pay"><em>Estimated pay</em><strong>${money(totalPay)}</strong></div>
    </div>
    <table>
      <thead><tr><th>Day</th><th>Job &amp; notes</th><th>Time</th><th class="num">Hours</th><th class="num">Travel</th></tr></thead>
      <tbody>${rowsHtml}</tbody>
      <tfoot><tr><td colspan="3">Week total</td><td class="num">${totalH.toFixed(2)}h</td><td class="num">${totalKm.toFixed(1)}km</td></tr></tfoot>
    </table>
    <p class="foot">${money(WW_PAY_RATE)}/hr + ${money(WW_KM_RATE)}/km. Generated ${fmtDateLong(today())}. Estimate only — final pay confirmed by admin.</p>
  </div>
  <script>setTimeout(function(){try{window.print();}catch(e){}},400);<\/script>
  </body></html>`;
  // Try opening a new window for print/save (best on iOS: Share → Save to Files / Print → Save PDF)
  const w=window.open('','_blank');
  if(w){w.document.open();w.document.write(html);w.document.close();}
  else{
    // Fallback: download as an .html file
    const blob=new Blob([html],{type:'text/html'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);
    a.download=`timesheet-${u.name.split(' ')[0]}-${dates[0]}.html`;
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }
  toast('Summary ready — use Share or Print to save it');
}
function weeklySummaryModal(d){
  const u=userById(d.userId)||me();
  const anchor=d.anchor||today();
  const dates=weekDates(anchor);
  let totalH=0,totalKm=0,totalPay=0;
  const rows=dates.map(dt=>{
    const recs=recordsForUserDate(u.id,dt);
    const h=recs.reduce((a,r)=>a+paidHours(r),0);
    const km=recs.reduce((a,r)=>a+(Number(r.km)||0),0);
    const pay=employeePayAmount(u,h)+kmAmount(u,km);
    totalH+=h;totalKm+=km;totalPay+=pay;
    const day=new Date(dt+'T00:00:00');
    const shifts=recs.map(r=>`<span class="wsum-shift">${escapeHtml(clientName(r.clientId))} \u00b7 ${fmtTime(r.clockIn.slice(11,16))}\u2013${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'\u2026'}</span>`).join('');
    return `<div class="wsum-day ${h?'has':''}">
      <div class="wsum-daycol"><span class="wsum-dow">${DOW[day.getDay()]}</span><strong>${day.getDate()}</strong></div>
      <div class="wsum-info">${recs.length?shifts:'<span class="wsum-off">No shift</span>'}</div>
      <div class="wsum-hrs">${h?`${h.toFixed(1)}h${km?`<span class="wsum-km">${km.toFixed(1)}km</span>`:''}`:'\u2014'}</div>
    </div>`;
  }).join('');
  const initials=(u.name||'?').split(/\s+/).map(x=>x[0]).slice(0,2).join('').toUpperCase();
  return modalShell('Weekly summary',`
    <div class="wsum2">
      <div class="wsum2-hero">
        <div class="wsum2-id">
          <span class="wsum2-av">${initials}</span>
          <div class="wsum2-idtext">
            <span class="wsum2-name">${escapeHtml(u.name)}</span>
            <span class="wsum2-role">${escapeHtml(u.title||'Cleaner')}</span>
          </div>
        </div>
        <div class="wsum2-range">${payWeekLabel(anchor)}</div>
        <div class="wsum2-payrow">
          <div class="wsum2-paymain">
            <em>Estimated pay</em>
            <strong>${money(totalPay)}</strong>
          </div>
          <div class="wsum2-paystats">
            <div><b>${totalH.toFixed(1)}h</b><span>Hours</span></div>
            <div><b>${totalKm.toFixed(1)}km</b><span>Travel</span></div>
          </div>
        </div>
      </div>
      <div class="wsum2-daystitle">Day by day</div>
      <div class="wsum-days">${rows}</div>
      <p class="wsum2-foot">${money(WW_PAY_RATE)}/hr + ${money(WW_KM_RATE)}/km \u00b7 Pay day ${fmtDateLong(payDayForWeek(anchor))}. Estimate only \u2014 final pay is confirmed by admin.</p>
    </div>
  `,`<button class="btn btn-primary" data-action="download-summary" data-user="${u.id}" data-anchor="${anchor}">${svg('docs')} Download</button><span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button>`);
}
function requestRosterModal(d){
  return modalShell('Request shifts',`
    <div class="missed-intro"><strong>Ask the admin for shifts</strong><span>Send a request for more hours or specific days. This goes to the admin as an important notification.</span></div>
    <div class="field"><label>Your message (optional)</label>
      <textarea class="input" id="rr_note" rows="4" placeholder="e.g. I'm free Mon-Wed next week and would love extra cleans."></textarea></div>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="send-roster-request">Send request</button>`);
}
function signDocModal(d){
  const doc=state.documents.find(x=>x.id===d.id);
  if(!doc)return modalShell('Document',`<div class="empty"><p>Document not found.</p></div>`,`<button class="btn btn-ghost" data-action="close-modal">Close</button>`);
  const fields=doc.fields||[];
  const fileBtn=doc.fileData?`<button class="btn btn-soft btn-block" data-action="view-doc" data-id="${doc.id}">${svg('eye')} Read the document</button>`:'<p class="co-hint">No file was attached — please complete and sign below.</p>';
  const fieldsHtml=fields.length?fields.map((f,i)=>`
    <div class="field"><label>${escapeHtml(f.label)}</label>
      <input class="input sign-field" data-idx="${i}" value="${escapeHtml(f.value||'')}" placeholder="Your answer"></div>`).join(''):'';
  return modalShell(`Review & sign`,`
    <div class="sign-doc-head"><strong>${escapeHtml(doc.name)}</strong><span>${escapeHtml(doc.category)} · sent by admin</span></div>
    ${fileBtn}
    ${fieldsHtml?`<div class="sign-fields-wrap">${fieldsHtml}</div>`:''}
    <div class="field"><label>Your signature</label>
      <div class="sign-pad-wrap">
        <canvas id="sigPad" class="sign-pad" width="600" height="200"></canvas>
        <button class="sign-clear" data-action="clear-sig" type="button">Clear</button>
      </div>
      <p class="co-hint">Draw your signature above with your finger.</p>
    </div>
    <label class="sign-confirm"><input type="checkbox" id="sigAgree"> I confirm the information is correct and this is my signature.</label>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="submit-signed" data-id="${doc.id}">Submit signed</button>`);
}
function newChatModal(d){
  const u=me();
  const people=activeAppUsers(state).filter(x=>x.id!==u.id);
  const mode=d.mode||(u.role==='admin'?'choose':'dm');
  if(mode==='choose'){
    return modalShell('New conversation',`
      <button class="nc-opt" data-action="nc-mode" data-mode="dm">${svg('chat')}<div><strong>Direct message</strong><span>Message one person privately</span></div>${svg('back')}</button>
      <button class="nc-opt" data-action="nc-mode" data-mode="group">${svg('team')}<div><strong>Group chat</strong><span>Pick members \u2014 set public or private</span></div>${svg('back')}</button>
    `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>`);
  }
  if(mode==='group'){
    const gq=(state.ncSearch||'').toLowerCase();
    const gp=people.filter(p=>!gq||p.name.toLowerCase().includes(gq)||(p.title||'').toLowerCase().includes(gq));
    return modalShell('New group',`
      <div class="field"><label>Group name</label><input class="input" id="grp_name" placeholder="e.g. Weekend Crew"></div>
      <div class="field"><label>Group type</label>
        <div class="grp-type-toggle">
          <button class="grp-type-opt ${(state.ncGroupPrivacy||'private')==='private'?'on':''}" data-action="grp-privacy" data-mode="private">
            ${svg('lock')}<span><strong>Private</strong></span>
          </button>
          <button class="grp-type-opt ${state.ncGroupPrivacy==='public'?'on':''}" data-action="grp-privacy" data-mode="public">
            ${svg('team')}<span><strong>Public</strong></span>
          </button>
        </div>
        <p class="grp-type-hint">${state.ncGroupPrivacy==='public'?'Anyone in the team can find & join this group.':'Only members you add can see & join this group.'}</p>
      </div>
      <div class="field"><label>Add members</label>
        <div class="nc-search"><span class="nc-search-ic">${svg('search')}</span><input id="ncSearch" data-action="nc-search" type="search" placeholder="Search people…" autocomplete="off" value="${escapeHtml(state.ncSearch||'')}"></div>
        <div class="member-pick">${gp.map(p=>`<button class="mp-chip ${groupDraft&&groupDraft.includes(p.id)?'on':''}" data-action="toggle-member" data-id="${p.id}"><span class="avatar sm ${p.role==='admin'?'clay':'sage'}">${initials(p.name)}</span>${p.name.split(' ')[0]}</button>`).join('')||'<span class="nc-none">No matches</span>'}</div></div>
    `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
      <button class="btn btn-primary" data-action="create-group">Create group</button>`);
  }
  // dm
  const dq=(state.ncSearch||'').toLowerCase();
  const dp=people.filter(p=>p.status!=='archived'&&(!dq||p.name.toLowerCase().includes(dq)||(p.title||'').toLowerCase().includes(dq)));
  return modalShell('New message',`
    <div class="nc-search"><span class="nc-search-ic">${svg('search')}</span><input id="ncSearch" data-action="nc-search" type="search" placeholder="Search people to message…" autocomplete="off" value="${escapeHtml(state.ncSearch||'')}"></div>
    <div class="dm-list">
      ${dp.map(p=>`<button class="dm-pick" data-action="start-dm" data-id="${p.id}">
        <span class="avatar ${p.role==='admin'?'clay':'sage'}">${initials(p.name)}</span>
        <div><div class="dmp-name">${escapeHtml(p.name)}</div><div class="dmp-sub">${escapeHtml(p.title||(p.role==='admin'?'Admin':'Cleaner'))}</div></div>
      </button>`).join('')||'<div class="nc-none">No people match your search</div>'}
    </div>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>`);
}
function manageGroupModal(d){
  const t=state.threads.find(x=>x.id===d.id);if(!t)return'';
  const people=state.users;
  return modalShell(`Manage \u201C${t.name}\u201D`,`
    <div class="field"><label>Members</label>
      <div class="member-pick">${people.map(p=>{const inG=t.memberIds.includes(p.id);
        return `<button class="mp-chip ${inG?'on':''}" data-action="toggle-group-member" data-thread="${t.id}" data-id="${p.id}"><span class="avatar sm ${p.role==='admin'?'clay':'sage'}">${initials(p.name)}</span>${p.name.split(' ')[0]}</button>`;}).join('')}</div></div>
    <p class="co-hint">Tap to add or remove people. Only members see this group.</p>
  `,`<button class="btn btn-danger" data-action="delete-group" data-id="${t.id}">${svg('trash')} Delete</button><span style="flex:1"></span><button class="btn btn-primary" data-action="close-modal">Done</button>`);
}

function timesheetClientPicker(prefix, selectedId){
  const selected=clientById(selectedId)||state.clients[0];
  const rows=timesheetClientRowsHtml(prefix,'',selected?.id||'');
  return `<div class="ts-client-picker" data-prefix="${prefix}">
    <input type="hidden" id="${prefix}_client" value="${selected?selected.id:''}">
    <div class="ts-client-selected" id="${prefix}_client_selected"><strong>${escapeHtml(selected?.name||'Choose client')}</strong><span>${escapeHtml(selected?.address||'Search and select a client for this timesheet')}</span></div>
    <label class="ts-client-search">${svg('search')}<input id="${prefix}_client_search" data-action="timesheet-client-search" data-prefix="${prefix}" type="search" autocomplete="off" placeholder="Search clients…"></label>
    <div class="ts-client-results is-collapsed" id="${prefix}_client_results">${rows}</div>
    <button type="button" class="ts-add-client-toggle" data-action="toggle-timesheet-add-client" data-prefix="${prefix}">+ Add new client if not listed</button>
    <div class="ts-add-client-panel" id="${prefix}_add_client_panel">
      <input class="input" id="${prefix}_new_client_name" placeholder="Client name" autocomplete="off" autocorrect="off" data-form-type="other">
      <input class="input addr-input" id="${prefix}_new_client_addr" data-action="addr-input" placeholder="Start typing a street or suburb…" autocomplete="off" autocorrect="off" autocapitalize="words" spellcheck="false" inputmode="text" name="ww-addr-${prefix}" aria-autocomplete="list" role="combobox" data-lpignore="true" data-form-type="other">
      <div class="addr-suggest" id="${prefix}_new_client_addr_suggest"></div>
      <button class="btn btn-soft" data-action="save-timesheet-client" data-prefix="${prefix}">Save client and select</button>
    </div>
  </div>`;
}

function clockoutModal(d){
  const r=d; // {clientId, shiftId, clockIn, clockOut, hrs}
  return modalShell('Clock out',`
    <div class="co-summary">
      <div class="co-client">${clientName(r.clientId)}</div>
      <div class="co-time">${fmtTime(r.clockIn.slice(11,16))} \u2013 ${fmtTime(r.clockOut.slice(11,16))} \u00b7 <strong>${r.hrs.toFixed(2)}h</strong></div>
    </div>
    <div class="field"><label>Kilometres travelled</label><input class="input" id="co_km" type="number" inputmode="decimal" placeholder="e.g. 12" value=""></div>
    <div class="field"><label>Notes (optional)</label><textarea class="input" id="co_notes" placeholder="Anything to report about this shift\u2026"></textarea></div>
    <p class="co-hint">You can edit these later from your records if you forget anything.</p>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="skip-clockout">Skip</button>
    <button class="btn btn-primary" data-action="save-clockout">Submit shift</button>`);
}

function recordModal(d){
  const r=state.clockRecords.find(x=>x.id===d.id);if(!r)return'';
  const hrs=recordHours(r), ph=paidHours(r);const u=me();
  const locked=u.role==='employee'&&(r.status==='approved'||r.status==='paid');
  const v=varianceInfo(r);
  const statusHint=locked?'This entry is locked because admin has approved or paid it. Send a correction request instead of changing it directly.':(u.role==='employee'?'Saving changes sends this entry back to admin for review.':'Admin changes update this record immediately.');
  if(locked){return modalShell('Timesheet locked',`
    <div class="co-summary"><div class="co-client">${clientName(r.clientId)}</div><div class="co-time">${fmtDate(r.date)} · ${fmtTime(r.clockIn.slice(11,16))}–${r.clockOut?fmtTime(r.clockOut.slice(11,16)):'…'} · <strong>${ph.toFixed(2)} paid hrs</strong></div><span class="pill ${statusPill(r.status)}" style="margin-top:8px">${statusLabel(r.status)}</span></div>
    <div class="variance ${v.cls}">${v.label}</div>
    <div class="field"><label>Correction request</label><textarea class="input" id="rec_correction" placeholder="Explain what needs changing and why…"></textarea></div>
    <p class="co-hint">${statusHint}</p>`, `<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button><button class="btn btn-primary" data-action="request-correction" data-id="${r.id}">Request correction</button>`);}
  return modalShell('Timesheet entry',`
    <div class="te-head">
      <div class="te-client">${clientName(r.clientId)}</div>
      <div class="te-sub">${fmtDate(r.date)}</div>
      <div class="te-hours"><strong>${ph.toFixed(2)}</strong><span>paid hrs</span></div>
      <span class="pill ${statusPill(r.status)} te-status">${statusLabel(r.status)}</span>
    </div>
    <div class="variance ${v.cls}">${v.label}</div>
    <div class="field"><label>Client / job</label>${timesheetClientPicker('rec', r.clientId)}</div>
    <div class="row2"><div class="field"><label>Date</label><input class="input" id="rec_date" type="date" value="${r.date}"></div><div class="field"><label>Kilometres</label><input class="input" id="rec_km" type="number" inputmode="decimal" placeholder="0" value="${r.km||''}"></div></div>
    <div class="row2"><div class="field"><label>Clock in</label>${timeSelect('rec_start', r.clockIn.slice(11,16))}</div><div class="field"><label>Clock out</label>${timeSelect('rec_end', r.clockOut?r.clockOut.slice(11,16):r.clockIn.slice(11,16))}</div></div>
    ${u.role==='admin'?`<div class="field"><label>Payroll status</label><select class="input" id="rec_status"><option value="pending" ${r.status==='pending'?'selected':''}>Pending</option><option value="approved" ${r.status==='approved'?'selected':''}>Approved</option><option value="flagged" ${r.status==='flagged'?'selected':''}>Flagged</option><option value="paid" ${r.status==='paid'?'selected':''}>Paid / locked</option></select></div>`:''}
    <div class="field"><label>Notes / correction reason</label><textarea class="input" id="rec_notes" placeholder="Add a note…">${escapeHtml(r.notes||'')}</textarea></div>
    <p class="co-hint">${statusHint}</p>`, `<button class="btn btn-ghost" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-record" data-id="${r.id}">Save changes</button>`);
}


function adminEntryModal(d){
  const emp=userById(d.userId);
  const date=d.date||state.adminTimesheetDate||today();
  const dayShifts=state.shifts.filter(s=>s.date===date&&s.employeeIds.includes(d.userId));
  const selClient=dayShifts[0]?.clientId||state.clients[0]?.id||'';
  return modalShell('Add timesheet entry',`
    <div class="te-head te-head-req">
      <div class="te-client">New entry${emp?` · ${escapeHtml(emp.name)}`:''}</div>
      <div class="te-sub">Use when an employee forgot to clock in</div>
      <span class="pill pill-green te-status">Admin entry</span>
    </div>
    <div class="field"><label>Date</label><input class="input" id="ae_date" type="date" value="${date}"></div>
    <div class="field"><label>Client / job</label>${timesheetClientPicker('ae', selClient)}</div>
    <div class="row2"><div class="field"><label>Start time</label>${timeSelect('ae_start', dayShifts[0]?.start||'09:00')}</div><div class="field"><label>Finish time</label>${timeSelect('ae_end', dayShifts[0]?.end||'12:00')}</div></div>
    <div class="row2"><div class="field"><label>Kilometres</label><input class="input" id="ae_km" type="number" inputmode="decimal" placeholder="0"></div>
    <div class="field"><label>Status</label><select class="input" id="ae_status"><option value="approved" selected>Approved</option><option value="pending">Pending review</option><option value="paid">Paid / locked</option></select></div></div>
  `,`<button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="save-admin-entry" data-user="${d.userId}">Add entry</button>`);
}
function missedRecordModal(d){
  const u=me();const date=d.date||state.timesheetDate||today();
  const dayShifts=state.shifts.filter(s=>s.date===date&&s.employeeIds.includes(u.id));
  const selectedClientId=dayShifts[0]?.clientId||state.clients[0]?.id||'';
  return modalShell('Add missed timesheet entry',`
    <div class="te-head te-head-req">
      <div class="te-client">New timesheet request</div>
      <div class="te-sub">${fmtDate(date)}</div>
      <span class="pill pill-amber te-status">Pending review</span>
    </div>
    <div class="field"><label>Date</label><input class="input" id="mr_date" type="date" value="${date}"></div>
    <div class="field"><label>Rostered shift (optional)</label><select class="input" id="mr_shift"><option value="">No matching roster shift / manual entry</option>${dayShifts.map(s=>`<option value="${s.id}">${fmtTime(s.start)}-${fmtTime(s.end)} · ${clientName(s.clientId)}</option>`).join('')}</select></div>
    <div class="field"><label>Client / job</label>${timesheetClientPicker('mr', selectedClientId)}</div>
    <div class="row2"><div class="field"><label>Start time</label>${timeSelect('mr_start', dayShifts[0]?.start||'09:00')}</div><div class="field"><label>Finish time</label>${timeSelect('mr_end', dayShifts[0]?.end||'12:00')}</div></div>
    <div class="field"><label>Kilometres</label><input class="input" id="mr_km" type="number" inputmode="decimal" placeholder="0"></div>
    <div class="field"><label>Notes</label><textarea class="input" id="mr_notes" placeholder="Why this entry was missed or corrected…"></textarea></div>`, `<button class="btn btn-ghost" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-missed-record">Submit to admin</button>`);
}


function updateModal(d){
  return modalShell('Post an update',`
    <div class="field"><label>Title</label><input class="input" id="up_title" placeholder="e.g. Roster published"></div>
    <div class="field"><label>Message</label><textarea class="input" id="up_body" placeholder="Write your update\u2026"></textarea></div>
    <div class="field"><label>Who sees it?</label>
      <select class="input" id="up_aud"><option value="all">Everyone</option><option value="employee">Employees only</option></select></div>
    <label class="co-check"><input type="checkbox" id="up_pin"> <span>Pin to top</span></label>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="save-update">Post update</button>`);
}
function uploadDocModal(d){
  return modalShell('Upload document',`
    <div class="field"><label>Document name</label><input class="input" id="doc_name" placeholder="e.g. First Aid Certificate"></div>
    <div class="field"><label>Category</label>
      <select class="input" id="doc_cat">${DOC_CATEGORIES.map(c=>`<option>${c}</option>`).join('')}</select></div>
    <label class="doc-drop" id="docDrop">
      <input type="file" id="doc_file" style="display:none" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx">
      ${svg('docs')}<span id="docDropLabel">Tap to choose a file</span>
    </label>
    <p class="co-hint">Uploaded securely and synced to your team. Your admin can see it in your folder.</p>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="save-doc">Upload</button>`);
}
function assignDocModal(d){
  const team=state.users.filter(x=>x.role==='employee'&&x.status!=='archived');
  const preUser=d.userId||'';
  // Default fields are added automatically so you don't have to type each one.
  // They're fully editable: rename, remove, or add more. The employee fills
  // these in (along with their signature) straight from their Documents tab.
  const defaultFields=['Full name','Address','Phone number','Email','Date of birth','Tax file number','Start date','Emergency contact'];
  const fieldRows=defaultFields.map(label=>
    `<div class="ad-field-row"><input class="input ad-field-name" value="${escapeHtml(label)}"><button class="ad-field-del" data-action="del-doc-field" type="button" aria-label="Remove">${svg('trash')}</button></div>`
  ).join('');
  return modalShell('Send document to sign',`
    <div class="field"><label>Employee</label>
      <select class="input" id="ad_user">${team.map(p=>`<option value="${p.id}" ${p.id===preUser?'selected':''}>${escapeHtml(p.name)}</option>`).join('')}</select></div>
    <div class="field"><label>Document name</label><input class="input" id="ad_name" placeholder="e.g. Employment Contract"></div>
    <div class="field"><label>Category</label>
      <select class="input" id="ad_cat">${DOC_CATEGORIES.map(c=>`<option ${c==='Contract'?'selected':''}>${c}</option>`).join('')}</select></div>
    <div class="field"><label>Attach the contract / form (PDF or image, optional)</label>
      <label class="doc-drop" for="ad_file"><span class="doc-drop-ic">${svg('docs')}</span><span id="adDropLabel">Tap to attach a file</span></label>
      <input type="file" id="ad_file" accept="application/pdf,image/*,.doc,.docx" hidden>
    </div>
    <div class="field"><label>Fields for the employee to fill in</label>
      <p class="co-hint" style="margin:0 0 8px">These common fields are added for you and are fully editable — rename or remove any you don't need, or add more. The employee fills them in and signs from their end.</p>
      <div id="adFields" class="ad-fields">${fieldRows}</div>
      <button class="btn btn-soft btn-sm" data-action="add-doc-field" type="button">${svg('plus')} Add a field</button>
    </div>
    <p class="co-hint">They'll see this under "Action needed", can read the file, fill the fields, sign, and send it back.</p>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="save-assign">Send</button>`);
}
function folderModal(d){
  const p=userById(d.id);if(!p)return'';
  const docs=state.documents.filter(x=>x.userId===p.id);
  return modalShell(`${p.name.split(' ')[0]}\u2019s documents`,`
    <div class="person-hero"><div class="avatar lg sage">${initials(p.name)}</div>
      <div><div class="ph-title">${p.title}</div><span class="pill pill-grey">${docs.length} document${docs.length!==1?'s':''}</span></div></div>
    ${docs.length? docs.map(dc=>`<div class="doc-card" data-action="${dc.signed?'view-signed':(dc.fileData?'view-doc':'')}" data-id="${dc.id}" style="cursor:${dc.signed||dc.fileData?'pointer':'default'}">
      <div class="doc-ic ${dc.signed?'green':dc.assignedByAdmin?'amber':'grey'}">${svg(dc.assignedByAdmin&&!dc.signed?'alert':'docs')}</div>
      <div class="dc-body"><div class="doc-name">${escapeHtml(dc.name)}</div><div class="doc-sub">${escapeHtml(dc.category)} \u00b7 ${dc.signed?'signed':dc.assignedByAdmin?'awaiting signature':'uploaded'}</div></div>
      ${dc.signed?'<span class="pill pill-green">Signed</span>':dc.assignedByAdmin?'<span class="pill pill-amber">Pending</span>':'<span class="pill pill-grey">File</span>'}
    </div>`).join('') : '<div class="empty">'+svg('docs')+'<p>No documents yet</p></div>'}
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button>
    <button class="btn btn-primary" data-action="assign-doc-for" data-id="${p.id}">${svg('plus')} Assign</button>`);
}
function avInfo(userId,date){
  const av=(state.availability[userId]||{})[date];
  if(av)return av;
  const d=new Date(date+'T00:00:00');
  const day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()];
  const weekly=(state.weeklyAvail[userId]||{})[day];
  if(weekly&&weekly.on===false)return {status:'unavailable',note:'Weekly unavailable'};
  if(weekly&&weekly.on)return {status:'available',note:`${weekly.from||'08:00'}–${weekly.to||'16:00'}`};
  return {status:'available',note:'No restriction'};
}
function avClass(status){return status==='unavailable'?'av-off':status==='partial'?'av-part':'av-free';}
function avLabel(status){return status==='unavailable'?'Unavailable':status==='partial'?'Partial':'Free';}
function selectedClientIdFromShift(s){return s.clientId||'';}
function collectShiftDraft(){
  if(!modal||modal.type!=='shift')return {};
  const val=id=>document.getElementById(id)?.value||'';
  return {
    ...modal.data,
    clientId:val('m_client')||modal.data.clientId||selectedClientIdFromShift(modal.data),
    date:val('m_date')||modal.data.date||state.rosterDate,
    start:val('m_start')||modal.data.start||'09:00',
    end:val('m_end')||modal.data.end||'13:00',
    notes:val('m_notes'),
    status:val('m_status')||modal.data.status||'Unpublished',
    repeat:val('m_repeat')||modal.data.repeat||'none',
    repeatCount:val('m_repeat_count')||modal.data.repeatCount||'1',
    employeeIds:draftEmp||modal.data.employeeIds||[],
    colorKey:val('m_color')||modal.data.colorKey||''
  };
}
function shiftClientPicker(s){
  const selectedId=selectedClientIdFromShift(s);
  const selected=clientById(selectedId);
  const clientRows=shiftClientRowsHtml('',selectedId);
  return `<div class="shift-panel client-search-panel">
    <div class="panel-title"><span>${svg('clients')} Client / job</span></div>
    <input type="hidden" id="m_client" value="${selectedId}">
    <div class="client-search-box ${selected?'has-selected':''}" id="clientSearchBox">
      <span class="csb-ic">${svg('search')}</span>
      <input id="clientSearch" data-action="shift-client-search" type="search" placeholder="Search for a client…" autocomplete="off" value="${selected?escapeHtml(selected.name):''}" ${selected?'readonly':''}>
      <button type="button" class="csb-clear" data-action="clear-shift-client" aria-label="Clear selected client" style="${selected?'':'display:none'}">${svg('x')}</button>
    </div>
    <div class="smart-picker client-picker is-collapsed" id="clientPicker" aria-label="Client search results">${clientRows}<div class="picker-empty" id="clientPickerEmpty" style="display:none">No matching clients</div></div>
    <div class="add-client-block">
      <button type="button" class="add-client-toggle" data-action="toggle-add-client">
        <span>${svg('plus')} Add new client</span>
        <span class="ac-chev ${state.addClientOpen?'open':''}">${svg('back')}</span>
      </button>
      ${state.addClientOpen?`
      <div class="add-client-form">
        <div class="field"><label>Client name</label><input class="input" id="qc_name" placeholder="e.g. Nguyen Family" autocomplete="off" autocorrect="off" data-form-type="other" autofocus></div>
        ${addressField('qc_addr','','Address')}
        <div class="row2">
          <div class="field"><label>Phone</label><input class="input" id="qc_phone" placeholder="04…" autocomplete="off" data-form-type="other"></div>
          <div class="field"><label>Email</label><input class="input" id="qc_email" placeholder="name@email.com" autocomplete="off" data-form-type="other"></div>
        </div>
        <div class="add-client-foot">
          <button type="button" class="emp-dd-btn clear" data-action="cancel-add-client">Cancel</button>
          <button type="button" class="emp-dd-btn done" data-action="quick-add-client">${svg('check')} Save client</button>
        </div>
      </div>`:''}
    </div>
  </div>`;
}

function shiftEmployeePicker(s){
  const date=s.date||state.rosterDate;
  const emps=state.users.filter(x=>x.role==='employee');
  const selectedIds=(draftEmp&&draftEmp.length?draftEmp:(s.employeeIds||[]));
  const selectedNames=selectedIds.map(id=>userById(id)?.name?.split(' ')[0]).filter(Boolean);
  const open=!!state.empPickerOpen;
  const rows=emps.map(e=>{const av=avInfo(e.id,date);const on=selectedIds.includes(e.id);
    return `<button type="button" class="picker-row employee-pick simple-employee-row ${on?'selected':''} ${av.status==='unavailable'?'is-unavailable':''}" data-action="toggle-emp" data-id="${e.id}" data-text="${escapeHtml((e.name+' '+e.title).toLowerCase())}">
      <span class="pick-check">${on?'✓':''}</span>
      <span class="simple-emp-text"><strong>${escapeHtml(e.name)} — ${escapeHtml(e.title||'Cleaner')}</strong><em class="${avClass(av.status)}">${avLabel(av.status)}${av.note?` · ${escapeHtml(av.note)}`:''}</em></span>
    </button>`;}).join('');
  return `<div class="shift-section emp-field">
    <label class="shift-section-label">${svg('team')} Employees</label>
    <button type="button" class="emp-searchbar" data-action="toggle-emp-picker">
      ${svg('search')}
      <span class="emp-searchbar-txt ${selectedNames.length?'has':''}">${selectedNames.length?escapeHtml(selectedNames.join(', ')):'Search and select employees…'}</span>
      <span class="emp-searchbar-chev ${open?'open':''}">${svg('back')}</span>
    </button>
    ${open?`
    <div class="emp-dropdown">
      <div class="emp-dd-search">${svg('search')}<input id="empSearch" data-action="shift-emp-search" type="search" placeholder="Type a name…" autocomplete="off" autofocus></div>
      <div class="smart-picker employee-picker simple-list" id="employeePicker">${rows}</div>
      <div class="emp-dd-foot">
        <button type="button" class="emp-dd-btn clear" data-action="emp-picker-clear">Clear</button>
        <button type="button" class="emp-dd-btn done" data-action="emp-picker-done">Done${selectedNames.length?` (${selectedNames.length})`:''}</button>
      </div>
    </div>`:''}
  </div>`;
}

function visibilityPanel(s){
  const published=s.status==='Published';
  return `<div class="shift-panel notes-open-panel visibility-section">
    <div class="panel-title"><span>${svg('eye')} Visibility</span></div>
    <div class="field">
      <label>Publish or save as draft</label>
      <select class="input" id="m_status" data-action="shift-visibility-change">
        <option value="Unpublished" ${!published?'selected':''}>Save as draft — admin only</option>
        <option value="Published" ${published?'selected':''}>Publish roster — visible to employees</option>
      </select>
    </div>
  </div>`;
}
function recurrencePanel(s){
  const r=s.repeat||'none';const cnt=s.repeatCount||'1';
  return `<div class="shift-panel notes-open-panel recurrence-section">
    <div class="panel-title"><span>${svg('cal')} Recurring</span></div>
    <div class="row2">
      <div class="field"><label>Repeat</label><select class="input" id="m_repeat"><option value="none" ${r==='none'?'selected':''}>Does not repeat</option><option value="daily" ${r==='daily'?'selected':''}>Daily</option><option value="weekly" ${r==='weekly'?'selected':''}>Weekly</option><option value="fortnightly" ${r==='fortnightly'?'selected':''}>Fortnightly</option><option value="monthly" ${r==='monthly'?'selected':''}>Monthly</option></select></div>
      <div class="field"><label>Create</label><select class="input" id="m_repeat_count"><option value="1" ${cnt==='1'?'selected':''}>1 shift</option><option value="2" ${cnt==='2'?'selected':''}>2 shifts</option><option value="4" ${cnt==='4'?'selected':''}>4 shifts</option><option value="8" ${cnt==='8'?'selected':''}>8 shifts</option><option value="12" ${cnt==='12'?'selected':''}>12 shifts</option></select></div>
    </div>
  </div>`;
}

function shiftColourName(key){
  return key ? key.charAt(0).toUpperCase()+key.slice(1) : 'Auto (by client)';
}
function shiftColourThemeForKey(key, draft){
  if(key){const found=SHIFT_THEMES.find(t=>t.key===key);if(found)return found;}
  return shiftTheme({...(draft||{}), colorKey:''});
}
function shiftColourPreviewVars(theme){
  const t=theme||SHIFT_THEMES[0];
  return `--cc-solid:${t.solid};--cc-deep:${t.deep};--cc-pop:${t.pop};--cc-a:${t.cardA};--cc-b:${t.cardB};--cc-c:${t.cardC};`;
}
function applyShiftColourPreview(key){
  const draft=(typeof collectShiftDraft==='function'?collectShiftDraft():(modal&&modal.data)||{});
  const t=shiftColourThemeForKey(key,draft);
  const section=document.querySelector('.shift-colour-section');
  if(section){
    section.style.setProperty('--cc-solid',t.solid);
    section.style.setProperty('--cc-deep',t.deep);
    section.style.setProperty('--cc-pop',t.pop);
    section.style.setProperty('--cc-a',t.cardA);
    section.style.setProperty('--cc-b',t.cardB);
    section.style.setProperty('--cc-c',t.cardC);
  }
  const input=document.getElementById('m_color');if(input)input.value=key||'';
  const lbl=document.getElementById('m_color_label');if(lbl)lbl.textContent=shiftColourName(key||'');
  document.querySelectorAll('.colour-option,.colour-sw').forEach(sw=>sw.classList.toggle('is-sel',(sw.dataset.key||'')===(key||'')));
  const head=document.querySelector('.shift-colour-head');
  if(section){section.classList.remove('is-open');section.classList.add('is-collapsed');}
  if(head)head.setAttribute('aria-expanded','false');
  if(modal&&modal.data){modal.data.colorKey=key||'';modal.data.__colourPickerOpen=false;}
}

function shiftModal(s){
  const isEdit=!!s.id;
  s={status:'Unpublished',date:state.rosterDate,start:'09:00',end:'13:00',repeat:'none',repeatCount:'1',employeeIds:[],...s};
  if(draftEmp==null)draftEmp=[...(s.employeeIds||[])];
  s.employeeIds=draftEmp||[];
  const colourTheme=shiftColourThemeForKey(s.colorKey,s);
  const colourLabel=shiftColourName(s.colorKey||'');
  return modalShell(isEdit?'Edit shift':'New shift',`
    <div class="shift-builder">
      ${shiftClientPicker(s)}
      <details class="shift-section shift-panel shift-date-time-panel" open>
        <summary><span>${svg('clock')} Date &amp; time</span><small>${fmtDate(s.date)} · ${fmtTime(s.start)}–${fmtTime(s.end)}</small></summary>
        <div class="field">
          <label>Date</label><input class="input" id="m_date" data-action="shift-date-change" type="date" value="${s.date}">
        </div>
        <div class="row2">
          <div class="field"><label>Start</label>${timeSelect('m_start',s.start)}</div>
          <div class="field"><label>End</label>${timeSelect('m_end',s.end)}</div>
        </div>
      </details>
      ${shiftEmployeePicker(s)}
      ${recurrencePanel(s)}
      <div class="shift-section shift-colour-section ${s.__colourPickerOpen?'is-open':'is-collapsed'}" style="${shiftColourPreviewVars(colourTheme)}">
        <button type="button" class="shift-colour-head" data-action="toggle-shift-colour" aria-expanded="${s.__colourPickerOpen?'true':'false'}">
          <span>Roster card colour</span>
          <small class="shift-colour-current" id="m_color_label">${colourLabel}</small>
          <i class="colour-toggle-chev">${svg('back')}</i>
        </button>
        <input type="hidden" id="m_color" value="${s.colorKey||''}">
        <div class="colour-picker">
          <div class="colour-preview-card" aria-live="polite">
            <div class="colour-preview-time">${fmtTime(s.start)}–${fmtTime(s.end)}</div>
            <div class="colour-preview-main">
              <strong>${clientById(s.clientId)?escapeHtml(clientById(s.clientId).name):'Example client'}</strong>
              <span>${fmtDur(s.start,s.end)}</span>
            </div>
          </div>
          <div class="colour-swatches" aria-label="Choose roster card colour">
            <button type="button" class="colour-option colour-auto ${!s.colorKey?'is-sel':''}" data-action="pick-shift-colour" data-key="">
              <b>Auto</b><em>By client</em>
            </button>
            ${SHIFT_THEMES.map(th=>`<button type="button" class="colour-option ${s.colorKey===th.key?'is-sel':''}" data-action="pick-shift-colour" data-key="${th.key}" style="--opt:${th.pop};--opt-deep:${th.deep}"><i></i><b>${th.key.charAt(0).toUpperCase()+th.key.slice(1)}</b></button>`).join('')}
          </div>
        </div>
      </div>
      ${visibilityPanel(s)}
      <div class="shift-panel notes-open-panel shift-notes-section">
        <div class="panel-title"><span>${svg('docs')} Notes</span></div>
        <div class="field"><label>Job notes</label><textarea class="input notes-textarea" id="m_notes" placeholder="Job details, access notes, products needed…">${escapeHtml(s.notes||'')}</textarea></div>
      </div>
    </div>
  `,`
    ${isEdit?`<button class="sft-btn sft-del" data-action="delete-shift" data-id="${s.id}" aria-label="Delete shift">${svg('trash')}</button>`:''}
    <button class="sft-btn sft-cancel" data-action="close-modal">Cancel</button>
    <button class="sft-btn sft-save" data-action="save-shift" data-id="${s.id||''}">
      ${svg(isEdit?'check':'plus')}<span>${isEdit?'Save changes':'Create shift'}</span>
    </button>
  `);
}
function shiftViewModal(s){
  const c=clientById(s.clientId);const u=me();
  const names=s.employeeIds.map(id=>userById(id)?.name).filter(Boolean);
  const addr=c&&c.address?c.address:'';
  const mapHref=addr?`https://maps.apple.com/?q=${encodeURIComponent(addr)}`:'';
  const mapHrefG=addr?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`:'';
  return modalShell(c?c.name:'Shift',`
    <div class="sv-time"><span class="pill pill-clay">${fmtDate(s.date)}</span> <strong>${fmtTime(s.start)} \u2013 ${fmtTime(s.end)}</strong> <em>${fmtDur(s.start,s.end)}</em></div>
    ${addr?`<a class="detail-row sv-maplink" href="${mapHref}" data-action="open-maps" data-addr="${escapeHtml(addr)}" target="_blank" rel="noopener">
      <div class="dr-ic">${svg('pin')}</div>
      <div style="flex:1"><div class="dr-l">Location · tap for directions</div><div class="dr-v">${escapeHtml(addr)}</div></div>
      <div class="sv-go">${svg('back')}</div>
    </a>`:`<div class="detail-row"><div class="dr-ic">${svg('pin')}</div><div><div class="dr-l">Location</div><div class="dr-v">\u2014</div></div></div>`}
    <div class="detail-row"><div class="dr-ic">${svg('team')}</div><div><div class="dr-l">Team</div><div class="dr-v">${names.join(', ')||'Unassigned'}</div></div></div>
    ${s.notes?`<div class="detail-row"><div class="dr-ic">${svg('docs')}</div><div><div class="dr-l">Notes</div><div class="dr-v">${s.notes}</div></div></div>`:''}
    ${addr?`<button class="btn btn-primary btn-block sv-dirbtn" data-action="open-maps" data-addr="${escapeHtml(addr)}">${svg('pin')} Get directions</button>`:''}
  `,`${u.role==='admin'?`<button class="btn btn-danger" data-action="delete-shift" data-id="${s.id}">${svg('trash')} Delete</button>`:''}<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button>
    ${u.role==='admin'?`<button class="btn btn-primary" data-action="edit-shift" data-id="${s.id}">${svg('edit')} Edit</button>`:''}`);
}
function inviteEmployeeModal(d){
  const p=userById(d.id);if(!p)return modalShell('Employee added','<p>Done.</p>',`<button class="btn btn-primary" data-action="close-modal">Close</button>`);
  const canSms=!!p.phone, canEmail=!!p.email;
  return modalShell('Send login to '+p.name.split(' ')[0],`
    <div class="invite-box">
      <div class="invite-line"><span>Login</span><b>${escapeHtml(p.email||p.phone)}</b></div>
      ${p.phone&&p.email?`<div class="invite-line"><span>Or mobile</span><b>${escapeHtml(p.phone)}</b></div>`:''}
      <div class="invite-line"><span>Password</span><b>${escapeHtml(p.password||'staff123')}</b></div>
    </div>
    <p class="co-hint">Send ${p.name.split(' ')[0]} their app link and login. Choose how to send it below — it opens your phone's Messages or Mail with the message ready to go.</p>
    <div class="invite-actions">
      ${canSms?`<button class="invite-btn sms" data-action="invite-sms" data-id="${p.id}">${svg('chat')} Text it</button>`:''}
      ${canEmail?`<button class="invite-btn email" data-action="invite-email" data-id="${p.id}">${svg('mail')||svg('docs')} Email it</button>`:''}
      <button class="invite-btn share" data-action="invite-share" data-id="${p.id}">${svg('share')||svg('plus')} Share</button>
      <button class="invite-btn copy" data-action="invite-copy" data-id="${p.id}">${svg('copy')||svg('docs')} Copy</button>
    </div>
  `,`<span style="flex:1"></span><button class="btn btn-primary" data-action="close-modal">Done</button>`);
}
function userModal(d){
  return modalShell('Add employee',`
    <div class="field"><label>Full name</label><input class="input" id="m_name" placeholder="e.g. Jordan Smith"></div>
    <div class="field"><label>Job title</label><input class="input" id="m_title" placeholder="e.g. Cleaner"></div>
    <div class="row2">
      <div class="field"><label>Email (optional)</label><input class="input" id="m_email" type="email" placeholder="name@email.com" autocapitalize="none"></div>
      <div class="field"><label>Mobile number (they can log in with this)</label><input class="input" id="m_phone" placeholder="0400 000 000"></div>
    </div>
    <div class="row2">
      <div class="field"><label>Pay type</label><select class="input" id="m_paytype"><option value="Hourly">Hourly</option><option value="Salary">Salary</option></select></div>
      <div class="field"><label>Pay rate ($/hr)</label><input class="input" id="m_payrate" type="number" inputmode="decimal" value="35"></div>
    </div>
    <div class="field"><label>Temporary password</label><input class="input" id="m_pw" value="staff123"></div>
    <div class="login-share-note"><strong>Easy login:</strong> Give the employee the app link, their mobile number/email and password <b>staff123</b>. They can change it later from Profile.</div>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="save-user">Add employee</button>`);
}
function clientModal(d){
  return modalShell('Add client',`
    <div class="field"><label>Client name</label><input class="input" id="m_cname" placeholder="e.g. Smith Family"></div>
    ${addressField('m_caddr','','Address')}
    <div class="row2">
      <div class="field"><label>Phone</label><input class="input" id="m_cphone" placeholder="0400 000 000"></div>
      <div class="field"><label>Email</label><input class="input" id="m_cemail" type="email" placeholder="email@example.com"></div>
    </div>
    <div class="field"><label>Notes</label><textarea class="input" id="m_cnotes" placeholder="Service details\u2026"></textarea></div>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="save-client">Add client</button>`);
}

function empWeekModal(d){
  const p=userById(d.id);if(!p)return'';
  const dates=weekDates(state.rosterAnchor);
  const wk=weekHours([p.id],state.rosterAnchor);
  const days=dates.map(dt=>{
    const ds=shiftsForUserDate(p.id,dt);
    const day=new Date(dt+'T00:00:00');
    const dayH=ds.reduce((a,s)=>a+durationHrs(s.start,s.end),0);
    const rows=ds.length?ds.map(s=>{const c=clientById(s.clientId);const pub=isShiftPublished(s);
      return `<div class="ew-shift">
        <span class="ew-time">${fmtTime(s.start)}–${fmtTime(s.end)}</span>
        <span class="ew-client">${c?escapeHtml(c.name):'Unassigned'}</span>
        <span class="ew-pill ${pub?'pub':'draft'}">${pub?'Published':'Draft'}</span>
      </div>`;}).join(''):'<div class="ew-none">No shifts</div>';
    return `<div class="ew-day ${ds.length?'has':''}">
      <div class="ew-daycol"><span class="ew-dow">${DOW[day.getDay()]}</span><strong>${day.getDate()}</strong></div>
      <div class="ew-daybody">${rows}</div>
      <div class="ew-dayh">${dayH?dayH.toFixed(1)+'h':'\u2014'}</div>
    </div>`;
  }).join('');
  return modalShell(`${p.name.split(' ')[0]}\u2019s week`,`
    <div class="ew-head">
      <div class="avatar lg sage">${initials(p.name)}</div>
      <div style="flex:1"><div class="ew-name">${escapeHtml(p.name)}</div><div class="ew-sub">${escapeHtml(p.title||'Cleaner')} · ${fmtDate(dates[0])}\u2013${fmtDate(dates[6])}</div></div>
      <div class="ew-total"><strong>${wk.toFixed(1)}h</strong><em>This week</em></div>
    </div>
    <div class="ew-days">${days}</div>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Close</button>`);
}

function contactModal(d){
  const p=userById(d.id);if(!p)return'';
  const phoneClean=(p.phone||'').replace(/[^+\d]/g,'');
  return modalShell(p.name,`
    <div class="contact-hero">
      <div class="avatar xl ${p.role==='admin'?'clay':'sage'}" ${p.photo?`style="background-image:url('${p.photo}');background-size:cover"`:''}>${p.photo?'':initials(p.name)}</div>
      <div class="contact-name">${escapeHtml(p.name)}</div>
      <div class="contact-title">${escapeHtml(p.title||(p.role==='admin'?'Admin':'Cleaner'))}</div>
    </div>
    <div class="contact-actions">
      ${phoneClean?`<a class="contact-btn call" href="tel:${phoneClean}">${svg('phone')}<span>Call</span></a>`:''}
      ${p.email?`<a class="contact-btn email" href="mailto:${escapeHtml(p.email)}">${svg('mail')}<span>Email</span></a>`:''}
      <button class="contact-btn chat" data-action="start-dm" data-id="${p.id}">${svg('chat')}<span>Chat</span></button>
    </div>
  `,`<button class="btn btn-ghost btn-block" data-action="close-modal">Close</button>`);
}

function personModal(d){
  const p=userById(d.id);if(!p)return'';
  const wk=weekHours([p.id],state.rosterAnchor);
  const rows=payrollRecords(state.payrollAnchor||state.rosterAnchor,state.payrollPeriod||'weekly').filter(r=>r.userId===p.id);
  const approved=rows.filter(r=>r.status==='approved').reduce((a,r)=>a+paidHours(r),0);
  const docs=state.documents.filter(x=>x.userId===p.id);
  const avCount=Object.values(state.availability[p.id]||{}).filter(x=>x.status&&x.status!=='available').length;
  const current=me();
  const isSelf=current&&current.id===p.id;
  const canManagePerson=current&&current.role==='admin'&&!isSelf;
  const canShowLogin=!!canManagePerson;
  const roleText=p.role==='admin'?'Admin full access':'Employee access';
  const loginId=p.phone||p.email||'';
  return modalShell(p.name,`
    <div class="person-hero"><div class="avatar lg ${p.role==='admin'?'clay':'sage'}">${initials(p.name)}</div>
      <div><div class="ph-title">${escapeHtml(p.title||(p.role==='admin'?'Admin':'Cleaner'))}</div><span class="pill ${p.role==='admin'?'pill-clay':'pill-green'}">${escapeHtml(roleText)} · ${wk.toFixed(1)}h rostered this week</span></div></div>
    <div class="profile-modules compact"><div class="profile-mini card"><strong>${approved.toFixed(1)}h</strong><em>approved payroll</em></div><div class="profile-mini card"><strong>${docs.length}</strong><em>documents</em></div><div class="profile-mini card"><strong>${avCount}</strong><em>unavailable days</em></div></div>
    ${canShowLogin?`<div class="login-details-card">
      <strong>${svg('account')} Employee login</strong>
      <span>They can log in with <b>${escapeHtml(loginId||'phone or email')}</b></span>
      <span>Temporary password: <b>${escapeHtml(p.password||'staff123')}</b></span>
      <small>Tap Copy login below and send it to the employee.</small>
    </div>`:''}
    <div class="detail-row"><div class="dr-ic">${svg('mail')}</div><div><div class="dr-l">Email</div><div class="dr-v">${escapeHtml(p.email||'—')}</div></div></div>
    <div class="detail-row"><div class="dr-ic">${svg('phone')}</div><div><div class="dr-l">Phone</div><div class="dr-v">${escapeHtml(p.phone||'—')}</div></div></div>
    <div class="detail-row"><div class="dr-ic">${svg('pin')}</div><div><div class="dr-l">Address</div><div class="dr-v">${escapeHtml(p.address||'—')}</div></div></div>
    <div class="detail-row"><div class="dr-ic">${svg('hours')}</div><div><div class="dr-l">Payroll</div><div class="dr-v">${p.role==='employee'?money(WW_PAY_RATE)+'/hr + '+money(WW_KM_RATE)+'/km':'Admin'}</div></div></div>
    <div class="detail-row"><div class="dr-ic">${svg('alert')}</div><div><div class="dr-l">Emergency contact</div><div class="dr-v">${escapeHtml(p.emergencyName||'—')} · ${escapeHtml(p.emergencyPhone||'')}</div></div></div>
    ${docs.length?`<div class="dr-l" style="margin:14px 0 8px">Documents</div>${docs.map(dc=>`<div class="doc-row sm"><div class="doc-ic">${svg('docs')}</div><div class="doc-name">${escapeHtml(dc.name)}</div></div>`).join('')}`:''}
  `,`<div class="person-actionbar">
      ${canShowLogin?`<button class="btn person-action soft" data-action="copy-employee-login" data-id="${p.id}">${svg('docs')} Copy login</button><button class="btn person-action soft" data-action="reset-employee-password" data-id="${p.id}">${svg('lock')} Reset password</button>`:''}
      ${canManagePerson?(p.role==='admin'?`<button class="btn person-action admin-off" data-action="remove-admin-role" data-id="${p.id}">${svg('account')} Remove admin</button>`:`<button class="btn person-action admin-on" data-action="make-admin-role" data-id="${p.id}">${svg('account')} Make admin</button>`):''}
      ${canManagePerson?(p.status==='archived'?`<button class="btn person-action soft" data-action="restore-emp" data-id="${p.id}">${svg('check')} Restore</button>`:`<button class="btn person-action danger" data-action="archive-emp" data-id="${p.id}">${svg('archive')} Archive</button>`):''}
      <button class="btn person-action ghost" data-action="close-modal">Close</button>
      ${canManagePerson?`<button class="btn person-action primary" data-action="assign-doc-for" data-id="${p.id}">${svg('docs')} Assign doc</button>`:''}
    </div>`);
}


function editMeModal(u){
  return modalShell('Edit profile',`
    <div class="photo-edit">
      <label class="photo-edit-circle" for="e_photo" id="ePhotoPrev" style="${u.photo?`background-image:url('${u.photo}')`:''}">
        ${u.photo?'':`<span class="pe-initials">${initials(u.name)}</span>`}
        <span class="pe-cam">${svg('clip')}</span>
      </label>
      <input type="file" id="e_photo" accept="image/*" hidden>
      <span class="photo-edit-hint">Tap to change photo</span>
    </div>
    <div class="field"><label>Full name</label><input class="input" id="e_name" value="${escapeHtml(u.name)}"></div>
    <div class="field"><label>Job title</label><input class="input" id="e_title" value="${escapeHtml(u.title||'')}"></div>
    <div class="row2">
      <div class="field"><label>Phone</label><input class="input" id="e_phone" value="${escapeHtml(u.phone||'')}"></div>
      <div class="field"><label>Email</label><input class="input" id="e_email" value="${escapeHtml(u.email||'')}"></div>
    </div>
    ${addressField('e_addr',u.address||'','Address')}
    <div class="row2">
      <div class="field"><label>Emergency name</label><input class="input" id="e_ename" value="${escapeHtml(u.emergencyName||'')}"></div>
      <div class="field"><label>Emergency phone</label><input class="input" id="e_ephone" value="${escapeHtml(u.emergencyPhone||'')}"></div>
    </div>
    <div class="row2">
      <div class="field"><label>Pay type</label><select class="input" id="e_paytype"><option value="Hourly" ${u.payType!=='Salary'?'selected':''}>Hourly</option><option value="Salary" ${u.payType==='Salary'?'selected':''}>Salary</option></select></div>
      <div class="field"><label>Pay rate</label><input class="input" id="e_payrate" type="number" inputmode="decimal" value="${u.role==='employee'?WW_PAY_RATE:(u.payRate||'')}" placeholder="35" ${u.role==='employee'?'disabled':''}></div>
    </div>
    <div class="field"><label>Change password (leave blank to keep current)</label><input class="input" id="e_pw" type="text" placeholder="New password" autocomplete="new-password"></div>
  `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button>
    <button class="btn btn-primary" data-action="save-me">Save</button>`);
}

function modalShell(title,body,foot){
  return `<div class="modal-overlay" data-action="overlay-close">
    <div class="modal ${modal&&modal.type==='shift'?'shift-modal':''} ${modal&&['missed-record','record','clockout'].includes(modal.type)?'timesheet-modal':''}">
      <div class="modal-head"><h2>${title}</h2><button class="modal-x" data-action="close-modal">&times;</button></div>
      <div class="modal-body">${body}</div>
      <div class="modal-foot">${foot}</div>
    </div></div>`;
}
function renderModal(){
  let host=document.getElementById('modalHost');
  if(!host){host=document.createElement('div');host.id='modalHost';document.body.appendChild(host);}
  // preserve scroll position of an open scrollable modal body to avoid flicker/jump
  const prevScroller=host.querySelector('.modal-scroll, .modal-body, .sft-body, .modal');
  const prevTop=prevScroller?prevScroller.scrollTop:0;
  // Track whether a modal of this identity is already on screen. If so, this is a
  // re-render (e.g. the user changed a field) — skip the open animation so the
  // panel doesn't bounce/shake on every keystroke or selection.
  const modalKey=modal?(modal.type+'|'+(modal.id||modal.shiftId||modal.clientId||modal.userId||'')):'';
  const isReRender = !!modal && host.__wwModalKey===modalKey;
  host.innerHTML=modalContent();
  if(modal){
    const m=host.querySelector('.modal');
    if(m && isReRender) m.classList.add('no-open-anim');
    host.__wwModalKey=modalKey;
  } else {
    host.__wwModalKey='';
  }
  document.body.style.overflow=modal?'hidden':'';
  document.body.classList.toggle('modal-open', !!modal);
  // expose the open modal's type so type-specific chrome (e.g. the chat action
  // sheet) can hide the default modal title bar for a cleaner look.
  document.body.setAttribute('data-modal-type', modal?(modal.type||''):'');
  if(prevTop){const ns=host.querySelector('.modal-scroll, .modal-body, .sft-body, .modal');if(ns)ns.scrollTop=prevTop;}
  if(modal&&modal.type==='sign-doc')setTimeout(initSigPad,0);
}

/* ===========================================================
   EVENTS
   =========================================================== */


let draftEmp=null; // for shift modal staff selection
let groupDraft=null; // for new group member selection
document.addEventListener('click',async e=>{
  const el=e.target.closest('[data-action]');if(!el)return;
  const a=el.dataset.action;const u=me();
  wwHaptic(a);  // native-style tap feedback
  if(a==='open-maps'&&el.tagName==='A')e.preventDefault();

  switch(a){
    /* login */
    case 'install-app':{startInstallFlow();break;}
    case 'install-help':{openModal('install-guide',{});break;}
    case 'toggle-pw':{const i=document.getElementById('loginPw');i.type=i.type==='password'?'text':'password';break;}
    case 'fill-login':{document.getElementById('loginId').value=el.dataset.id;document.getElementById('loginPw').value=el.dataset.pw;break;}
    case 'restore-device-backup':{restoreBestDeviceBackup();break;}
    case 'employee-first-login':{
      const idEl=document.getElementById('loginId'), pwEl=document.getElementById('loginPw'), er=document.getElementById('loginErr');
      const id=(idEl?.value||'').trim();
      if(!id){er.textContent='Type your mobile number or email first, then tap this button.';er.classList.add('show');idEl?.focus();break;}
      if(pwEl)pwEl.value='staff123';
      if(er){er.textContent='';er.classList.remove('show');}
      const res=await attemptLoginAfterCloudRefresh(id,'staff123');
      if(res===true){autoRequestPhoneNotificationsAfterLogin();toast('Signed in. You can change your password in Profile.');render();}
      else{er.textContent=res==='archived'?'This account is no longer active. Contact your admin.':'First-time login did not work. The app checked the cloud, but could not match that mobile/email with staff123.';er.classList.add('show');}
      break;}
    case 'do-login':{
      const id=(document.getElementById('loginId')?.value||'').trim(), pw=document.getElementById('loginPw')?.value||'';
      const er=document.getElementById('loginErr');
      if(er){er.textContent='';er.classList.remove('show');}
      const res=await attemptLoginAfterCloudRefresh(id,pw);
      if(res===true){autoRequestPhoneNotificationsAfterLogin();setTimeout(pullCloudSync,80);render();}
      else{const er=document.getElementById('loginErr');er.textContent=res==='archived'?'This account is no longer active. Contact your admin.':'Incorrect mobile/email or password. If this is an employee login, make sure the app is online and use the mobile/email saved under their staff profile.';er.classList.add('show');}
      break;}
    case 'logout': logout(); break;

    /* nav */
    case 'open-alerts':{
      state.activeTab='alerts';
      try{ if(phoneNotificationsSupported() && Notification.permission==='granted') registerPushSubscription(false); }catch(_){ }
      // If permission is still undecided, clicking the bell is a user action, so ask here too.
      try{ if(phoneNotificationsSupported() && Notification.permission==='default') requestPhoneNotifications(); }catch(_){ }
      save(); render(); window.scrollTo(0,0); break;}
    case 'tab':{ const nextTab=el.dataset.tab; state.activeTab=nextTab; if(nextTab==='chat'&&state.activeThreadId)markThreadRead(state.activeThreadId,u); save(); render(); if(['directory','team','clients','bookings'].includes(nextTab))setTimeout(pullCloudSync,80); window.scrollTo(0,0); break;}
    case 'booking-filter':{state.bookingFilter=el.dataset.filter||'active';save();render();break;}
    case 'new-booking-reminder':{if(!u||u.role!=='admin')break;window.__pendingBookingFile=null;window.__pendingBookingFileName='';openModal('booking-reminder',{});break;}
    case 'edit-booking':{if(!u||u.role!=='admin')break;window.__pendingBookingFile=null;window.__pendingBookingFileName='';openModal('booking-reminder',{id:el.dataset.id});break;}
    case 'view-booking-file':{openModal('booking-file',{id:el.dataset.id});break;}
    case 'save-booking-reminder':{
      if(!u||u.role!=='admin')break;
      const data=collectBookingDraft(el.dataset.id||'');
      if(!bookingClientLabel(data)||bookingClientLabel(data)==='Untitled booking'){toast('Company or client name required');break;}
      const idx=(state.bookingReminders||[]).findIndex(x=>x.id===data.id);
      if(idx>=0)state.bookingReminders[idx]=data;else{state.bookingReminders=state.bookingReminders||[];state.bookingReminders.unshift(data);}
      window.__pendingBookingFile=null;window.__pendingBookingFileName='';window.__pendingBookingFileType='';window.__pendingBookingFileSize=0;
      saveRealtime();closeModal();render();toast('Booking reminder saved');break;}
    case 'complete-booking':{const b=(state.bookingReminders||[]).find(x=>x.id===el.dataset.id);if(b){b.status='done';b.updatedAt=nowIso();saveRealtime();render();toast('Booking marked done');}break;}
    case 'reopen-booking':{const b=(state.bookingReminders||[]).find(x=>x.id===el.dataset.id);if(b){b.status='pending';b.updatedAt=nowIso();saveRealtime();render();toast('Booking reopened');}break;}
    case 'delete-booking':{const b=(state.bookingReminders||[]).find(x=>x.id===el.dataset.id);if(b&&confirm('Delete this booking reminder?')){b._deleted=true;b.updatedAt=nowIso();saveRealtime();render();toast('Booking deleted');}break;}
    case 'create-roster-from-booking':{
      const b=(state.bookingReminders||[]).find(x=>x.id===el.dataset.id);if(!b)break;
      const clientId=ensureClientFromBooking(b);b.clientId=clientId;b.updatedAt=nowIso();
      draftEmp=[];state.empPickerOpen=false;state.addClientOpen=false;
      saveLocalState(state);
      openModal('shift',{bookingId:b.id,clientId,date:b.cleanDate||state.rosterDate,start:b.cleanTime||'09:00',end:plusHoursTime(b.cleanTime||'09:00',2),notes:`From booking reminder: ${bookingClientLabel(b)}${b.notes?' — '+b.notes:''}`,status:'Unpublished',employeeIds:[]});
      break;}
    case 'go-clock-in':{
      state.activeTab='clock';
      state.clockSubTab='clock';
      save();render();
      const sc=document.querySelector('.content');if(sc)sc.scrollTop=0;window.scrollTo(0,0);
      break;}
    case 'clock-subtab': state.clockSubTab=el.dataset.view||'clock'; save(); render(); window.scrollTo(0,0); break;

    /* roster */
    case 'week-shift': state.rosterAnchor=addDays(state.rosterAnchor,Number(el.dataset.dir)*7); save(); render(); break;
    case 'pick-day': state.rosterDate=el.dataset.date; save(); render(); break;
    case 'ts-week-shift': state.timesheetAnchor=addDays(state.timesheetAnchor||state.rosterAnchor,Number(el.dataset.dir)*7); state.timesheetDate=weekDates(state.timesheetAnchor)[0]; save(); render(); break;
    case 'pick-ts-day': state.timesheetDate=el.dataset.date; save(); render(); break;
    case 'admin-ts-week-shift': state.adminTimesheetAnchor=addDays(state.adminTimesheetAnchor||state.rosterAnchor,Number(el.dataset.dir)*7); state.adminTimesheetDate=weekDates(state.adminTimesheetAnchor)[0]; save(); render(); break;
    case 'pick-admin-ts-day': state.adminTimesheetDate=el.dataset.date; save(); render(); break;
    case 'admin-clock-emp': state.adminClockEmp=el.dataset.id; state.adminClockListOpen=true; save(); render(); window.scrollTo(0,0); break;
    case 'admin-clock-back': state.adminClockEmp=null; save(); render(); window.scrollTo(0,0); break;
    case 'admin-clock-day': state.adminClockDate=el.dataset.date; save(); render(); break;
    case 'select-admin-emp':{state.adminSelectedEmployeeId=el.dataset.id;state.tsFocusEmployeeId=el.dataset.id;save();render();break;}
    case 'ts-focus-open':{state.tsFocusEmployeeId=el.dataset.id;state.adminSelectedEmployeeId=el.dataset.id;state.tsfSearch='';save();render();break;}
    case 'ts-focus-close':{state.tsFocusEmployeeId=null;state.tsfSearch='';save();render();break;}
    case 'ts-focus-shift':{const emps=state.users.filter(x=>x.role==='employee'&&x.status!=='archived');if(!emps.length)break;let i=emps.findIndex(x=>x.id===state.tsFocusEmployeeId);if(i<0)i=0;i=(i+Number(el.dataset.dir||1)+emps.length)%emps.length;state.tsFocusEmployeeId=emps[i].id;state.adminSelectedEmployeeId=emps[i].id;save();render();break;}
    case 'admin-employee-shift':{const emps=state.users.filter(x=>x.role==='employee'&&x.status!=='archived');if(!emps.length)break;let i=emps.findIndex(x=>x.id===state.adminSelectedEmployeeId);if(i<0)i=0;i=(i+Number(el.dataset.dir||1)+emps.length)%emps.length;state.adminSelectedEmployeeId=emps[i].id;save();render();break;}
    case 'toggle-emp-list': state.adminClockListOpen=!(state.adminClockListOpen!==false); break;

    /* shifts */
    case 'new-shift': draftEmp=[]; state.empPickerOpen=false; state.addClientOpen=false; openModal('shift',{}); break;
    case 'new-shift-on': draftEmp=[]; state.empPickerOpen=false; state.addClientOpen=false; openModal('shift',{date:el.dataset.date}); break;
    case 'open-maps':{
      const addr=el.dataset.addr;if(!addr)break;
      const q=encodeURIComponent(addr);
      const isApple=/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
      const url=isApple?`https://maps.apple.com/?q=${q}`:`https://www.google.com/maps/search/?api=1&query=${q}`;
      window.open(url,'_blank','noopener');
      break;}
    case 'shift-open':{const s=state.shifts.find(x=>x.id===el.dataset.id);if(s)openModal('shift-view',s);break;}
    case 'edit-shift':{const s=state.shifts.find(x=>x.id===el.dataset.id);draftEmp=[...(s.employeeIds||[])];state.empPickerOpen=false;state.addClientOpen=false;openModal('shift',{...s});break;}
    case 'select-shift-client':{
      const hid=document.getElementById('m_client');if(hid)hid.value=el.dataset.id;
      const chosen=clientById(el.dataset.id);
      const search=document.getElementById('clientSearch');
      if(search){search.value=chosen?chosen.name:'';search.setAttribute('readonly','readonly');search.blur();}
      const box=document.getElementById('clientSearchBox');if(box)box.classList.add('has-selected');
      const clr=box?box.querySelector('.csb-clear'):null;if(clr)clr.style.display='';
      const picker=document.getElementById('clientPicker');if(picker){picker.classList.add('is-collapsed');picker.querySelectorAll('.picker-row').forEach(r=>r.style.display='none');}
      break;}
    case 'clear-shift-client':{
      const hid=document.getElementById('m_client');if(hid)hid.value='';
      const search=document.getElementById('clientSearch');
      if(search){search.value='';search.removeAttribute('readonly');setTimeout(()=>search.focus(),40);}
      const box=document.getElementById('clientSearchBox');if(box)box.classList.remove('has-selected');
      const clr=box?box.querySelector('.csb-clear'):null;if(clr)clr.style.display='none';
      const picker=document.getElementById('clientPicker');if(picker){picker.classList.add('is-collapsed');picker.querySelectorAll('.picker-row').forEach(r=>r.style.display='none');}
      break;}
    case 'quick-add-client':{
      const name=document.getElementById('qc_name')?.value.trim();
      if(!name){toast('Client name required');break;}
      const id=uid('c');
      state.clients.push({id,name,address:document.getElementById('qc_addr')?.value.trim()||'',phone:document.getElementById('qc_phone')?.value.trim()||'',email:document.getElementById('qc_email')?.value.trim()||'',notes:'Added from roster builder'});
      const d=collectShiftDraft();d.clientId=id;modal.data=d;state.addClientOpen=false;save();renderModal();toast(`${name} added and selected`);break;}
    case 'toggle-add-client':{
      state.addClientOpen=!state.addClientOpen;const d=collectShiftDraft();modal.data=d;renderModal();
      if(state.addClientOpen)setTimeout(()=>document.getElementById('qc_name')?.focus(),60);
      break;}
    case 'cancel-add-client':{state.addClientOpen=false;const d=collectShiftDraft();modal.data=d;renderModal();break;}
    case 'toggle-emp':{
      if(!draftEmp)draftEmp=[];
      const id=el.dataset.id;
      if(draftEmp.includes(id))draftEmp=draftEmp.filter(x=>x!==id);else draftEmp.push(id);
      el.classList.toggle('selected');el.classList.toggle('on');
      const chk=el.querySelector('.pick-check');if(chk)chk.textContent=draftEmp.includes(id)?'✓':'';
      const done=document.querySelector('.emp-dd-btn.done');if(done)done.textContent=draftEmp.length?`Done (${draftEmp.length})`:'Done';
      break;}
    case 'toggle-emp-picker':{
      state.empPickerOpen=!state.empPickerOpen;
      if(state.empPickerOpen){const d=collectShiftDraft();if(!draftEmp)draftEmp=[...(d.employeeIds||[])];modal.data=d;}
      renderModal();
      setTimeout(()=>document.getElementById('empSearch')?.focus(),60);
      break;}
    case 'emp-picker-clear':{
      draftEmp=[];const d=collectShiftDraft();d.employeeIds=[];modal.data=d;
      state.empPickerOpen=false;renderModal();break;}
    case 'emp-picker-done':{
      const d=collectShiftDraft();d.employeeIds=[...(draftEmp||[])];modal.data=d;
      state.empPickerOpen=false;renderModal();break;}
    case 'select-free-emps':{
      const d=collectShiftDraft();const date=d.date||state.rosterDate;
      draftEmp=state.users.filter(x=>x.role==='employee'&&avInfo(x.id,date).status==='available').map(x=>x.id);
      modal.data=d;modal.data.employeeIds=draftEmp;renderModal();toast('Free employees selected');break;}
    case 'clear-emps':{draftEmp=[];const d=collectShiftDraft();d.employeeIds=[];modal.data=d;renderModal();toast('Employees cleared');break;}
    case 'toggle-shift-colour':{
      const d=collectShiftDraft();
      d.__colourPickerOpen=!((modal&&modal.data&&modal.data.__colourPickerOpen)||false);
      modal.data=d;
      renderModal();
      break;}
    case 'pick-shift-colour':{
      const key=el.dataset.key||'';
      applyShiftColourPreview(key);
      break;}
    case 'save-shift':{
      const repeat=document.getElementById('m_repeat')?.value||'none';
      const repeatCount=Math.max(1,parseInt(document.getElementById('m_repeat_count')?.value||'1',10)||1);
      const data={
        clientId:document.getElementById('m_client').value,
        date:document.getElementById('m_date').value,
        start:document.getElementById('m_start').value,
        end:document.getElementById('m_end').value,
        notes:document.getElementById('m_notes').value.trim(),
        status:document.getElementById('m_status').value,
        employeeIds:draftEmp||[],
        colorKey:document.getElementById('m_color')?.value||'',
        repeat,repeatCount:String(repeatCount)
      };
      if(!data.clientId){toast('Choose a client');break;}
      if(!data.employeeIds.length){toast('Choose at least one employee');break;}
      const id=el.dataset.id;
      const nowTs=nowIso();
      const createdShiftIds=[];
      if(id){const s=state.shifts.find(x=>x.id===id);Object.assign(s,data,{updatedAt:nowTs});createdShiftIds.push(id);toast('Shift updated');}
      else{
        const step=repeat==='daily'?1:repeat==='weekly'?7:repeat==='fortnightly'?14:repeat==='monthly'?30:0;
        const count=repeat==='none'?1:repeatCount;
        const seriesId=count>1?uid('series'):null;
        for(let i=0;i<count;i++){const newId=uid('s');createdShiftIds.push(newId);state.shifts.push({id:newId,...data,date:step?addDays(data.date,step*i):data.date,seriesId,bookingId:(modal&&modal.data&&modal.data.bookingId)||'',updatedAt:nowTs});}
        toast(count>1?`${count} recurring shifts created`:'Shift created');
      }
      if(modal&&modal.data&&modal.data.bookingId){const b=(state.bookingReminders||[]).find(x=>x.id===modal.data.bookingId);if(b){b.status='rostered';b.shiftId=createdShiftIds[0]||b.shiftId||'';b.updatedAt=nowTs;}}
      if(data.status==='Published'){
        addAlertForUsers(data.employeeIds||[],`New published shift at ${clientName(data.clientId)} on ${fmtDate(data.date)}. Please accept or reject.`,{priority:true,kind:'shift'});
      }
      saveRealtime();closeModal();render();break;}
    case 'delete-shift': softDelete('shifts',el.dataset.id);saveRealtime();closeModal();render();toast('Shift deleted');break;
    case 'toggle-publish':{
      const s=state.shifts.find(x=>x.id===el.dataset.id);
      if(!s)break;
      s.status=isShiftPublished(s)?'Unpublished':'Published';
      s.updatedAt=nowIso();
      if(s.status==='Published'){
        addAlertForUsers(s.employeeIds||[],`New published shift at ${clientName(s.clientId)} on ${fmtDate(s.date)}. Please accept or reject.`,{priority:true,kind:'shift',shiftId:s.id});
      }
      saveRealtime();render();toast(s.status==='Published'?'Roster card published and employees notified':'Roster card saved as draft');break;}

    /* clock */
    case 'accept-shift':{
      const s=state.shifts.find(x=>x.id===el.dataset.shift);
      state.shiftResponses[`${el.dataset.shift}:${u.id}`]='accepted';
      if(s)addAdminAlert(`${u.name} accepted the shift at ${clientName(s.clientId)} on ${fmtDate(s.date)}.`,{kind:'shift',shiftId:s.id});
      saveRealtime();render();toast('Shift accepted — admin notified');break;}
    case 'reject-shift':{
      const s=state.shifts.find(x=>x.id===el.dataset.shift);
      state.shiftResponses[`${el.dataset.shift}:${u.id}`]='declined';
      if(s)addAdminAlert(`${u.name} REJECTED a shift at ${clientName(s.clientId)} (${fmtDate(s.date)}). Needs reassigning.`,{priority:true,kind:'shift',shiftId:s.id});
      saveRealtime();render();toast('Shift declined — admin notified');break;}
    case 'clock-in':{
      const s=state.shifts.find(x=>x.id===el.dataset.shift);
      state.shiftResponses[`${s.id}:${u.id}`]='accepted';
      state.clockState[u.id]={shiftId:s.id,clientId:s.clientId,clockIn:nowIso()};
      state.activeTab='clock';state.clockSubTab='clock';
      save();render();
      const sc=document.querySelector('.content'); if(sc)sc.scrollTop=0; window.scrollTo(0,0);
      startTimer();toast('Clocked in');break;}
    case 'clock-out':{
      const cs=activeClock(u.id);
      if(!cs){toast('No active shift to clock out');break;}
      const out=nowIso();
      const hrs=(new Date(out)-new Date(cs.clockIn))/3600000;
      openModal('clockout',{clientId:cs.clientId,shiftId:cs.shiftId,clockIn:cs.clockIn,clockOut:out,hrs});
      break;}
    case 'save-clockout': case 'skip-clockout':{
      const d=modal.data;
      const km=a==='save-clockout'?parseFloat(document.getElementById('co_km').value)||0:0;
      const notes=a==='save-clockout'?document.getElementById('co_notes').value.trim():'';
      const breakMins=a==='save-clockout'?(parseInt(document.getElementById('co_break')?.value||'0',10)||0):0;
      const recId=uid('cr');
      state.clockRecords.unshift({id:recId,userId:u.id,shiftId:d.shiftId,clientId:d.clientId,date:today(),clockIn:d.clockIn,clockOut:d.clockOut,km,breakMins,notes,status:'pending'});
      state.clockState[u.id]={_cleared:true,at:nowIso()};
      addAdminAlert(`${u.name} clocked out — needs review.`,{kind:'timesheet'});
      clearInterval(timerInt);saveRealtime();
      closeModal();render();toast('Timesheet submitted to admin');break;}
    case 'edit-record': openModal('record',{id:el.dataset.id});break;
    case 'add-missed-record': openModal('missed-record',{date:el.dataset.date});break;
    case 'admin-add-entry': openModal('admin-entry',{userId:el.dataset.user,date:el.dataset.date});break;
    case 'save-admin-entry':{
      const userId=el.dataset.user;const date=document.getElementById('ae_date').value||today();
      const start=document.getElementById('ae_start').value||'09:00';const end=document.getElementById('ae_end').value||start;
      const clientId=document.getElementById('ae_client')?.value||state.clients[0]?.id;
      const km=parseFloat(document.getElementById('ae_km').value)||0;
      const status=document.getElementById('ae_status')?.value||'approved';
      if(!userId){toast('No employee selected');break;}
      state.clockRecords.unshift({id:uid('cr'),userId,shiftId:null,clientId,date,clockIn:`${date}T${start}:00`,clockOut:`${date}T${end}:00`,km,breakMins:0,notes:'Added by admin',status});
      state.adminTimesheetAnchor=startOfWeek(date);state.adminTimesheetDate=date;state.adminSelectedEmployeeId=userId;
      addAlertForUsers([userId],`Admin added a timesheet entry for ${fmtDate(date)} at ${clientName(clientId)}.`,{kind:'timesheet'});
      saveRealtime();closeModal();render();toast('Entry added and employee notified');break;}
    case 'save-missed-record':{
      const date=document.getElementById('mr_date').value||today();const start=document.getElementById('mr_start').value||'09:00';const end=document.getElementById('mr_end').value||start;const shiftId=document.getElementById('mr_shift').value||'';const linked=shiftId?state.shifts.find(x=>x.id===shiftId):null;const clientId=document.getElementById('mr_client')?.value||linked?.clientId||state.clients[0]?.id;const km=parseFloat(document.getElementById('mr_km').value)||0;const breakMins=0;const notes=document.getElementById('mr_notes').value.trim();const recId=uid('cr');
      state.clockRecords.unshift({id:recId,userId:u.id,shiftId:shiftId||null,clientId,date,clockIn:`${date}T${start}:00`,clockOut:`${date}T${end}:00`,km,breakMins,notes,status:'pending'});
      state.timesheetAnchor=startOfWeek(date);state.timesheetDate=date;addAdminAlert(`${u.name} submitted a missed timesheet entry for ${fmtDate(date)}.`,{kind:'timesheet'});saveRealtime();closeModal();render();toast('Missed entry sent to admin');break;}
    case 'save-record':{
      const r=state.clockRecords.find(x=>x.id===el.dataset.id);if(!r)break;const oldStatus=r.status;if(u.role==='employee'&&(oldStatus==='approved'||oldStatus==='paid')){toast('Approved/paid entries are locked. Request a correction.');break;}const date=document.getElementById('rec_date').value||r.date;const start=document.getElementById('rec_start').value||r.clockIn.slice(11,16);const end=document.getElementById('rec_end').value||start;r.clientId=document.getElementById('rec_client')?.value||r.clientId;r.date=date;r.clockIn=`${date}T${start}:00`;r.clockOut=`${date}T${end}:00`;r.km=parseFloat(document.getElementById('rec_km').value)||0;r.breakMins=0;r.notes=document.getElementById('rec_notes').value.trim();
      if(u.role==='admin'){r.status=document.getElementById('rec_status')?.value||r.status;addAlertForUsers([r.userId],`Admin updated your timesheet entry for ${fmtDate(date)} at ${clientName(r.clientId)}.`,{kind:'timesheet'});}
      if(u.role==='employee'){r.status='pending';state.timesheetAnchor=startOfWeek(date);state.timesheetDate=date;addAdminAlert(`${u.name} updated a timesheet entry for ${fmtDate(date)}${oldStatus==='approved'?' (approved entry changed)':''}.`,{kind:'timesheet'});}
      saveRealtime();closeModal();render();toast(u.role==='employee'?'Updated — admin notified':'Record updated and employee notified');break;}
    case 'request-correction':{
      const r=state.clockRecords.find(x=>x.id===el.dataset.id);if(!r)break;const reason=document.getElementById('rec_correction')?.value.trim();if(!reason){toast('Add a correction reason');break;}r.status='pending';r.notes=(r.notes?r.notes+'\n':'')+'Correction request: '+reason;addAdminAlert(`${u.name} requested a correction for ${fmtDate(r.date)} timesheet.`,{kind:'timesheet'});saveRealtime();closeModal();render();toast('Correction request sent');break;}


    case 'toggle-timesheet-add-client':{
      const prefix=el.dataset.prefix||'mr';
      const panel=document.getElementById(`${prefix}_add_client_panel`);
      if(panel)panel.classList.toggle('open');
      break;}
    case 'select-timesheet-client':{
      const prefix=el.dataset.prefix||'mr';
      const hid=document.getElementById(`${prefix}_client`);if(hid)hid.value=el.dataset.id;
      const chosen=clientById(el.dataset.id);
      const selected=document.getElementById(`${prefix}_client_selected`);
      if(selected&&chosen)selected.innerHTML=`<strong>${escapeHtml(chosen.name)}</strong><span>${escapeHtml(chosen.address||'No address saved')}</span>`;
      const res=document.getElementById(`${prefix}_client_results`);if(res){res.classList.add('is-collapsed');res.querySelectorAll('.ts-client-row').forEach(r=>{const on=r.dataset.id===el.dataset.id;r.classList.toggle('selected',on);const dot=r.querySelector('.ts-client-dot');if(dot)dot.textContent=on?'✓':'';r.style.display='';});}
      const search=document.getElementById(`${prefix}_client_search`);if(search){search.value='';search.blur();}
      toast('Client selected');
      break;}
    case 'save-timesheet-client':{
      const prefix=el.dataset.prefix||'mr';
      const name=document.getElementById(`${prefix}_new_client_name`)?.value.trim();
      if(!name){toast('Client name required');break;}
      const id=uid('c');
      const c={id,name,address:document.getElementById(`${prefix}_new_client_addr`)?.value.trim()||'',phone:'',email:'',notes:'Added by employee from timesheet request'};
      state.clients.push(c);
      const hid=document.getElementById(`${prefix}_client`);if(hid)hid.value=id;
      const selected=document.getElementById(`${prefix}_client_selected`);if(selected)selected.innerHTML=`<strong>${escapeHtml(c.name)}</strong><span>${escapeHtml(c.address||'No address saved')}</span>`;
      const panel=document.getElementById(`${prefix}_add_client_panel`);if(panel)panel.classList.remove('open');
      const res=document.getElementById(`${prefix}_client_results`);if(res){res.classList.add('is-collapsed');res.querySelectorAll('.ts-client-row').forEach(r=>{r.style.display='';});}
      const search=document.getElementById(`${prefix}_client_search`);if(search){search.value='';search.blur();}
      save();toast('Client added and selected');
      break;}

    /* updates */
    case 'new-update': openModal('update',{});break;
    case 'save-update':{
      const title=document.getElementById('up_title').value.trim();if(!title){toast('Title required');break;}
      const body=document.getElementById('up_body').value.trim();
      const audience=document.getElementById('up_aud').value;
      const now=nowIso();
      const up={id:uid('up'),title,body,audience,pinned:document.getElementById('up_pin').checked,createdAt:now,updatedAt:now,authorId:u.id};
      state.updates.unshift(up);
      const recips=activeAppUsers(state).filter(x=>x.id!==u.id&&(audience==='all'||x.role===audience)).map(x=>x.id);
      addAlertForUsers(recips,`New update posted: ${title}`,{priority:!!up.pinned,kind:'update'});
      saveRealtime();closeModal();render();toast('Update posted and team notified');break;}
    case 'del-update':{
      e.preventDefault();
      e.stopPropagation();
      const id=el.dataset.id;
      if(!id)break;
      state.deletedUpdates=state.deletedUpdates||{};
      state.deletedUpdates[id]=nowIso();
      softDelete('updates',id);
      applyDeletedUpdatesTombstones(state);
      if(state.openUpdates)delete state.openUpdates[id];
      if(state.readUpdates){Object.keys(state.readUpdates).forEach(k=>{if(state.readUpdates[k])delete state.readUpdates[k][id];});}
      saveRealtime();
      render();
      toast('Update deleted');
      break;}
    case 'toggle-update':{
      if(!state.openUpdates)state.openUpdates={};
      if(!state.readUpdates)state.readUpdates={};
      const id=el.dataset.id;
      state.openUpdates[id]=!state.openUpdates[id];
      const me2=me();
      if(me2){if(!state.readUpdates[me2.id])state.readUpdates[me2.id]={};state.readUpdates[me2.id][id]=true;}
      save();render();break;}
    case 'toggle-alert':{
      if(!state.openAlerts)state.openAlerts={};
      const id=el.dataset.id;
      state.openAlerts[id]=!state.openAlerts[id];
      const a=state.alerts.find(x=>x.id===id);if(a){a.read=true;a.updatedAt=nowIso();}
      save();render();break;}
    case 'read-all-alerts':{
      state.alerts.forEach(a=>{if(alertVisibleToUser(a,u)){a.read=true;a.updatedAt=nowIso();}});
      save();render();toast('All marked as read');break;}
    case 'request-notifications':{
      requestPhoneNotifications().then(()=>render());
      break;}
    case 'test-phone-notification':{
      sendServerPushTest();
      break;}

    /* documents */
    case 'upload-doc': openModal('upload-doc',{});break;
    case 'save-doc':{
      const name=document.getElementById('doc_name').value.trim();if(!name){toast('Name required');break;}
      if(window.__pendingDocLoading){toast('File is still attaching — wait a moment');break;}
      state.documents.unshift({id:uid('d'),userId:u.id,category:document.getElementById('doc_cat').value,name,uploadedAt:nowIso(),updatedAt:nowIso(),signed:false,assignedByAdmin:false,fileData:window.__pendingDoc||null,fileName:window.__pendingDocName||name,fileType:window.__pendingDocType||'',fileSize:window.__pendingDocSize||0});
      window.__pendingDoc=null;window.__pendingDocName='';window.__pendingDocType='';window.__pendingDocSize=0;save();closeModal();render();toast('Document uploaded and syncing');break;}
    case 'sign-doc': openModal('sign-doc',{id:el.dataset.id});break;
    case 'request-roster': openModal('request-roster',{});break;
    case 'weekly-summary': openModal('weekly-summary',{userId:el.dataset.user||u.id,anchor:state.timesheetAnchor||today()});break;
    case 'download-summary':{ downloadWeeklySummary(el.dataset.user||u.id, el.dataset.anchor||state.timesheetAnchor||today()); break; }
    case 'send-roster-request':{
      const note=document.getElementById('rr_note')?.value.trim();
      addAdminAlert(`${u.name} REQUESTED roster/shifts${note?': '+note:'.'}`,{priority:true,kind:'roster'});
      saveRealtime();closeModal();render();toast('Request sent to admin');break;}
    case 'clear-sig': clearSigPad();break;
    case 'submit-signed':{
      const doc=state.documents.find(x=>x.id===el.dataset.id);if(!doc)break;
      const agree=document.getElementById('sigAgree');
      if(!__sigHasInk){toast('Please draw your signature');break;}
      if(agree&&!agree.checked){toast('Please tick the confirmation box');break;}
      (doc.fields||[]).forEach((f,fi)=>{const inp=document.querySelector(`.sign-field[data-idx="${fi}"]`);if(inp)f.value=inp.value.trim();});
      const c=document.getElementById('sigPad');
      doc.signature=c?c.toDataURL('image/png'):null;
      doc.signed=true;doc.signedAt=nowIso();doc.uploadedAt=doc.signedAt;doc.updatedAt=doc.signedAt;doc.returnedToAdmin=true;
      addAdminAlert(`${u.name} signed and returned ${doc.name}.`,{priority:true,kind:'document'});
      saveRealtime();closeModal();render();toast('Signed & sent back to admin');break;}
    case 'del-doc': if(confirm('Delete this document?')){softDelete('documents',el.dataset.id);save();render();toast('Deleted');}break;
    case 'view-doc':{const d=state.documents.find(x=>x.id===el.dataset.id);
      if(d&&d.fileData)openModal('doc-file',{id:d.id});
      else toast('No file attached to this document');break;}
    case 'assign-doc': openModal('assign-doc',{});break;
    case 'assign-doc-for': closeModal(); openModal('assign-doc',{userId:el.dataset.id});break;
    case 'add-doc-field':{
      const wrap=document.getElementById('adFields');if(!wrap)break;
      const row=document.createElement('div');row.className='ad-field-row';
      row.innerHTML=`<input class="input ad-field-name" placeholder="e.g. Start date, Tax file number"><button class="ad-field-del" data-action="del-doc-field" type="button" aria-label="Remove">${svg('trash')}</button>`;
      wrap.appendChild(row);row.querySelector('input').focus();break;}
    case 'del-doc-field':{const r=el.closest('.ad-field-row');if(r)r.remove();break;}
    case 'save-assign':{
      if(window.__pendingAssignFileLoading){toast('File is still attaching — wait a moment');break;}
      const name=document.getElementById('ad_name').value.trim();if(!name){toast('Name required');break;}
      const uidSel=document.getElementById('ad_user').value;
      const fields=[...document.querySelectorAll('#adFields .ad-field-name')].map(i=>i.value.trim()).filter(Boolean)
        .map(label=>({label,value:''}));
      state.documents.unshift({id:uid('d'),userId:uidSel,category:document.getElementById('ad_cat').value,name,
        uploadedAt:nowIso(),signed:false,assignedByAdmin:true,
        fileData:window.__pendingAssignFile||null,fileName:window.__pendingAssignFileName||name,fileType:window.__pendingAssignFileType||'',fileSize:window.__pendingAssignFileSize||0,fields,signature:null,signedAt:null});
      window.__pendingAssignFile=null;window.__pendingAssignFileName='';window.__pendingAssignFileType='';window.__pendingAssignFileSize=0;
      state.alerts.unshift({id:uid('al'),role:'employee',userId:uidSel,priority:true,text:`New document to fill and sign: ${name}. Open Documents to review, complete, sign and return it.`,createdAt:nowIso(),updatedAt:nowIso(),clientCreatedAt:nowIso(),pendingServerStamp:true,read:false});
      save();closeModal();render();toast('Document sent and syncing');break;}
    case 'open-folder': openModal('folder',{id:el.dataset.id});break;

    /* availability */
    case 'set-avail':{
      const dt=el.dataset.date,st=el.dataset.status;
      if(!state.availability[u.id])state.availability[u.id]={};
      const ex=state.availability[u.id][dt]||{};
      state.availability[u.id][dt]={status:st,note:st==='partial'?(ex.note||''):''};
      addAdminAlert(`${u.name} updated availability for ${fmtDate(dt)}: ${st}.`,{kind:'availability'});
      saveRealtime();render();toast('Availability updated');break;}
    case 'toggle-weekly':{
      const day=el.dataset.day;if(!state.weeklyAvail[u.id])state.weeklyAvail[u.id]={};
      const w=state.weeklyAvail[u.id][day]||{on:false,from:'08:00',to:'16:00'};
      state.weeklyAvail[u.id][day]={...w,on:!w.on,from:w.from||'08:00',to:w.to||'16:00'};
      save();render();break;}

    /* timesheets */
    case 'toggle-approvals': state.approvalsOpen=!state.approvalsOpen; save(); break;
    case 'approve-ts':{const r=state.clockRecords.find(x=>x.id===el.dataset.id);r.status='approved';state.approvalsOpen=true;addAlertForUsers([r.userId],`Timesheet approved for ${fmtDate(r.date)} at ${clientName(r.clientId)}.`,{kind:'timesheet'});saveRealtime();render();toast('Approved');break;}
    case 'approve-all-ts':{      const pend=state.clockRecords.filter(r=>r.status==='pending');
      if(!pend.length){toast('Nothing to approve');break;}
      pend.forEach(r=>{r.status='approved';addAlertForUsers([r.userId],`Timesheet approved for ${fmtDate(r.date)} at ${clientName(r.clientId)}.`,{kind:'timesheet'});});
      saveRealtime();render();toast(`Approved ${pend.length} timesheet${pend.length!==1?'s':''}`);break;}
    case 'reject-ts':{const r=state.clockRecords.find(x=>x.id===el.dataset.id);r.status='flagged';state.approvalsOpen=true;addAlertForUsers([r.userId],`Timesheet flagged for ${fmtDate(r.date)} at ${clientName(r.clientId)} — please review.`,{priority:true,kind:'timesheet'});saveRealtime();render();toast('Flagged for follow-up');break;}
    case 'mark-paid-ts':{const r=state.clockRecords.find(x=>x.id===el.dataset.id);if(r){r.status='paid';addAlertForUsers([r.userId],`Timesheet marked paid for ${fmtDate(r.date)} at ${clientName(r.clientId)}.`,{kind:'timesheet'});saveRealtime();render();toast('Marked paid');}break;}
    case 'export-payroll': exportPayrollCSV(); toast('Payroll CSV downloaded'); break;
    case 'export-payroll-summary': exportPayrollSummaryCSV(); toast('Payroll summary downloaded'); break;
    case 'export-payroll-excel': exportPayrollExcel(); toast('Excel payroll file downloaded'); break;
    case 'mark-week-paid':{const rows=payrollRecords(state.payrollAnchor||today(),'weekly').filter(r=>r.status==='approved');rows.forEach(r=>r.status='paid');save();render();toast(`${rows.length} approved entries marked paid`);break;}
    case 'payroll-period-shift':{const step=7*Number(el.dataset.dir||1);state.payrollAnchor=startOfWeek(addDays(state.payrollAnchor||today(),step));save();render();break;}


    /* chat */
    case 'toggle-upd-rx':{ applyUpdReaction(el.dataset.id,el.dataset.emoji,u); break;}
    case 'upd-react-pick':{ openModal('upd-react',{id:el.dataset.id}); break;}
    case 'pick-upd-rx':{ applyUpdReaction(el.dataset.id,el.dataset.emoji,u); closeModal(); break;}
    case 'upd-comment-send':{
      const id=el.dataset.id;const inp=document.getElementById('updc-'+id);
      const txt=(inp&&inp.value||'').trim();if(!txt)break;
      addUpdComment(id,txt,u);break;}
    case 'upd-reply':{ openModal('upd-reply',{id:el.dataset.id,cid:el.dataset.cid}); break;}
    case 'send-upd-reply':{
      const id=el.dataset.id,cid=el.dataset.cid;const inp=document.getElementById('updreply');
      const txt=(inp&&inp.value||'').trim();if(!txt)break;
      addUpdReply(id,cid,txt,u);closeModal();break;}
    case 'react-msg':{
      openModal('msg-react',{threadId:el.dataset.thread,msgId:el.dataset.msg});break;}
    case 'pick-msg-rx':{
      const {thread:tid,msg:mid,emoji}=el.dataset;
      applyMsgReaction(tid,mid,emoji,u);closeModal();break;}
    case 'toggle-msg-rx':{
      applyMsgReaction(el.dataset.thread,el.dataset.msg,el.dataset.emoji,u);break;}
    case 'toggle-archived-chats':{
      state.showArchivedChats=!state.showArchivedChats;
      state.activeThreadId='';state.chatMobileThread=false;save();render();break;}
    case 'archive-chat':{
      const tid=el.dataset.id;const t=state.threads.find(x=>x.id===tid);if(!userCanHideThread(t,u))break;
      chatArchiveMap(u.id)[tid]=nowIso();
      if(state.activeThreadId===tid){state.activeThreadId='';state.chatMobileThread=false;}
      saveRealtime();render();toast('Chat archived');break;}
    case 'restore-chat':{
      const tid=el.dataset.id;if(state.chatArchived&&state.chatArchived[u.id])delete state.chatArchived[u.id][tid];
      state.showArchivedChats=false;state.activeThreadId=tid;state.chatMobileThread=false;
      saveRealtime();render();toast('Chat restored');break;}
    case 'delete-chat':{
      const tid=el.dataset.id;const t=state.threads.find(x=>x.id===tid);if(!userCanHideThread(t,u))break;
      // Use the durable hard-delete so the chat doesn't reappear after a cloud
      // sync. v107DeleteConversation sets BOTH the soft and hard delete markers.
      if(typeof v107DeleteConversation==='function'){
        v107DeleteConversation(tid);
      }else{
        chatDeleteMap(u.id)[tid]=nowIso();
        if(state.chatHardDeleted&&state.chatHardDeleted[u.id])state.chatHardDeleted[u.id][tid]=nowIso();
        else{state.chatHardDeleted=state.chatHardDeleted||{};state.chatHardDeleted[u.id]=state.chatHardDeleted[u.id]||{};state.chatHardDeleted[u.id][tid]=nowIso();}
        if(state.chatArchived&&state.chatArchived[u.id])delete state.chatArchived[u.id][tid];
        if(state.activeThreadId===tid){state.activeThreadId='';state.chatMobileThread=false;}
        saveRealtime();render();toast('Chat deleted');
      }
      break;}
    case 'toggle-thread-read':{
      const tid=el.dataset.id;
      if(el.dataset.unread==='1'){ markThreadRead(tid,u); toast('Marked as read'); }
      else { setThreadManualUnread(tid,u); toast('Marked as unread'); }
      saveRealtime();render();break;}
    case 'thread':{state.activeThreadId=el.dataset.id;state.chatMobileThread=true;
      __pinnedThreadId=el.dataset.id; __pinnedThreadUntil=Date.now()+4000;
      const th=state.threads.find(x=>x.id===el.dataset.id);
      if(th&&th.type==='group'&&th.privacy==='public'&&!th.memberIds.includes(u.id)){th.memberIds.push(u.id);toast('Joined group');}
      markThreadRead(el.dataset.id,u);
      saveRealtime();render();scrollChat();break;}
    case 'back-chatlist': state.chatMobileThread=false;state.activeThreadId='';save();render();break;
    case 'send-msg': sendMsg();break;
    case 'remove-pending-photo': if(Array.isArray(window.__pendingWorkPhotos)){window.__pendingWorkPhotos.splice(Number(d.index||0),1);render();}break;
    case 'comment-photo': commentOnWorkPhoto(d.thread,d.msg);break;
    case 'attach-file': document.getElementById('chatFile')?.click();break;
    case 'view-attach': openModal('attach-view',{threadId:el.dataset.thread,msgId:el.dataset.msg,idx:el.dataset.idx||0});break;
    case 'view-signed': openModal('view-signed',{id:el.dataset.id});break;
    case 'download-signed-doc':{
      const doc=state.documents.find(x=>x.id===el.dataset.id);if(!doc)break;
      const emp=userById(doc.userId);
      const fields=(doc.fields||[]).filter(f=>f.value);
      const html=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
        <title>${escapeHtml(doc.name)} — ${emp?escapeHtml(emp.name):''}</title>
        <style>*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
        body{font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;margin:0;padding:24px;color:#1a241c}
        .wrap{max-width:680px;margin:0 auto}
        .head{background:linear-gradient(135deg,#385c3d,#16271a);color:#fff;border-radius:14px;padding:20px 22px;margin-bottom:18px}
        .head h1{margin:0 0 4px;font-size:20px}.head .sub{opacity:.85;font-size:13px}
        .biz{font-size:11px;opacity:.7;margin-top:10px;letter-spacing:.04em;text-transform:uppercase}
        .row{display:flex;justify-content:space-between;gap:12px;padding:10px 12px;border:1px solid #e7e2d4;border-radius:10px;margin-bottom:8px}
        .row .l{font-weight:700;color:#5d6b60;font-size:12px;text-transform:uppercase;letter-spacing:.02em}
        .row .v{font-weight:700}
        .sig{margin-top:16px;border:1px solid #e7e2d4;border-radius:10px;padding:14px}
        .sig img{max-width:320px;max-height:140px;display:block;margin-top:8px}
        .foot{margin-top:16px;font-size:12px;color:#5d6b60}</style></head><body><div class="wrap">
        <div class="head"><h1>${escapeHtml(doc.name)}</h1><div class="sub">${escapeHtml(doc.category)} · ${emp?escapeHtml(emp.name):''}</div><div class="biz">Westwondersandco</div></div>
        ${fields.map(f=>`<div class="row"><span class="l">${escapeHtml(f.label)}</span><span class="v">${escapeHtml(f.value)}</span></div>`).join('')}
        <div class="sig"><span class="l" style="font-weight:700;color:#5d6b60;font-size:12px;text-transform:uppercase">Signature</span>${doc.signature?`<img src="${doc.signature}" alt="signature">`:'<p>No signature.</p>'}</div>
        <p class="foot">${doc.signedAt?`Signed ${fmtDateLong(doc.signedAt.slice(0,10))} at ${fmtTime(doc.signedAt.slice(11,16))}. `:''}Generated ${fmtDateLong(today())}.</p>
        </div><script>setTimeout(function(){try{window.print();}catch(e){}},400);<\/script></body></html>`;
      const w=window.open('','_blank');
      if(w){w.document.open();w.document.write(html);w.document.close();}
      else{const blob=new Blob([html],{type:'text/html'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${doc.name.replace(/[^a-z0-9]+/gi,'-')}-${emp?emp.name.split(' ')[0]:'signed'}.html`;document.body.appendChild(a);a.click();a.remove();}
      toast('Use Share or Print to save the record');break;}
    case 'new-chat': groupDraft=[]; state.ncSearch=''; openModal('new-chat',{}); break;
    case 'clear-chat-search': state.chatSearch=''; render(); break;
    case 'clear-roster-emp-search': state.rosterEmpSearch=''; render(); break;
    case 'roster-emp-week': openModal('emp-week',{id:el.dataset.id}); break;
    case 'addr-pick':{
      const inp=document.getElementById(el.dataset.for);
      if(inp)inp.value=el.dataset.val;
      const box=document.getElementById(el.dataset.for+'_suggest');
      if(box){box.innerHTML='';box.classList.remove('open');}
      break;}
    case 'nc-mode': groupDraft=[]; state.ncSearch=''; openModal('new-chat',{mode:el.dataset.mode}); break;
    case 'nc-search-noop': break;
    case 'toggle-member':{
      const id=el.dataset.id;if(!groupDraft)groupDraft=[];
      if(groupDraft.includes(id))groupDraft=groupDraft.filter(x=>x!==id);else groupDraft.push(id);
      el.classList.toggle('on');break;}
    case 'grp-privacy':{ state.ncGroupPrivacy=el.dataset.mode; renderModal(); break;}
    case 'create-group':{
      const name=document.getElementById('grp_name').value.trim();if(!name){toast('Group name required');break;}
      if(!groupDraft||!groupDraft.length){toast('Add at least one member');break;}
      const members=[...new Set([u.id,...groupDraft])];
      const id=uid('grp');
      const privacy=state.ncGroupPrivacy||'private';
      state.threads.push({id,type:'group',name,privacy,memberIds:members,createdBy:u.id,messages:[]});
      addAlertForUsers(groupDraft,`You were added to ${privacy} group “${name}”.`,{kind:'group',threadId:id});
      state.activeThreadId=id;state.chatMobileThread=true;state.ncGroupPrivacy='private';saveRealtime();closeModal();render();toast('Group created');break;}
    case 'start-dm':{
      const t=wwV138OpenDirectMessage(el.dataset.id,u);
      if(!t){toast('User not found');break;}
      closeModal();
      render();
      scrollChat();
      break;}
    case 'manage-group': openModal('manage-group',{id:el.dataset.id});break;
    case 'chat-contact-info': openModal('contact',{id:el.dataset.id});break;
    case 'toggle-group-member':{
      const t=state.threads.find(x=>x.id===el.dataset.thread);const id=el.dataset.id;
      if(id===t.createdBy){toast('Cannot remove the group owner');break;}
      if(t.memberIds.includes(id))t.memberIds=t.memberIds.filter(x=>x!==id);else t.memberIds.push(id);
      save();renderModal();render();break;}
    case 'delete-group':{
      if(confirm('Delete this group for everyone?')){softDelete('threads',el.dataset.id);state.activeThreadId='team-all';state.chatMobileThread=false;save();closeModal();render();toast('Group deleted');}break;}

    /* people / clients */
    case 'new-user': openModal('user',{});break;
    case 'save-user':{
      const name=document.getElementById('m_name').value.trim();if(!name){toast('Name required');break;}
      const email=document.getElementById('m_email').value.trim().toLowerCase();
      const phone=normaliseImportedPhone(document.getElementById('m_phone').value.trim());
      const pw=document.getElementById('m_pw').value.trim()||'staff123';
      if(!email&&!phone){toast('Add an email or mobile number so they can log in');break;}
      if(state.users.some(x=>email&&x.email&&x.email.toLowerCase()===email)){toast('That email is already used');break;}
      if(state.users.some(x=>phone&&loginPhoneKey(x.phone||'')===loginPhoneKey(phone))){toast('That phone number is already used');break;}
      const newUser={id:uid('u'),role:'employee',status:'active',name,title:document.getElementById('m_title').value.trim()||'Cleaner',email,password:pw,phone,payType:document.getElementById('m_paytype')?.value||'Hourly',payRate:parseFloat(document.getElementById('m_payrate')?.value)||WW_PAY_RATE,address:'',dob:'',emergencyName:'',emergencyPhone:'',updatedAt:nowIso()};
      state.users.push(newUser);
      normalisePublicThreads(state);
      saveRealtime();closeModal();render();
      openModal('invite-employee',{id:newUser.id});
      break;}
    case 'invite-sms':{
      const p=userById(el.dataset.id);if(!p)break;
      const num=(p.phone||'').replace(/[^\d+]/g,'');
      window.location.href=`sms:${num}${/iPhone|iPad|Mac/.test(navigator.platform)?'&':'?'}body=${encodeURIComponent(inviteMessage(p))}`;
      break;}
    case 'invite-email':{
      const p=userById(el.dataset.id);if(!p)break;
      const subj=encodeURIComponent('Your Westwondersandco Workforce Hub login');
      window.location.href=`mailto:${p.email||''}?subject=${subj}&body=${encodeURIComponent(inviteMessage(p))}`;
      break;}
    case 'invite-copy':{
      const p=userById(el.dataset.id);if(!p)break;
      const msg=inviteMessage(p);
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(msg).then(()=>toast('Invite copied — paste it to them')).catch(()=>toast(msg));}
      else toast(msg);
      break;}
    case 'invite-share':{
      const p=userById(el.dataset.id);if(!p)break;
      if(navigator.share){navigator.share({title:'Westwondersandco Workforce Hub',text:inviteMessage(p)}).catch(()=>{});}
      else{const msg=inviteMessage(p);if(navigator.clipboard)navigator.clipboard.writeText(msg).then(()=>toast('Invite copied')).catch(()=>toast(msg));else toast(msg);}
      break;}
    case 'open-person': openModal('person',{id:el.dataset.id});break;
    case 'copy-employee-login':{
      const p=userById(el.dataset.id);if(!p)break;
      const msg=inviteMessage(p);
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(msg).then(()=>toast('Employee invite copied')).catch(()=>toast(msg));}
      else{toast(msg);}
      break;}
    case 'reset-employee-password':{
      const p=userById(el.dataset.id);if(p&&confirm(`Reset ${p.name}'s password to staff123?`)){p.password='staff123';save();renderModal();toast('Password reset to staff123');}
      break;}
    case 'archive-emp':{const p=userById(el.dataset.id);if(p&&confirm(`Archive ${p.name}? They'll be hidden from rosters, timesheets and the active list, but their history is kept. You can restore them anytime.`)){p.status='archived';p.updatedAt=nowIso();saveRealtime();closeModal();render();toast('Employee archived');}break;}
    case 'restore-emp':{const p=userById(el.dataset.id);if(p){p.status='active';p.updatedAt=nowIso();saveRealtime();closeModal();render();toast('Employee restored');}break;}
    case 'make-admin-role':{const p=userById(el.dataset.id);const current=me();if(p&&current&&current.role==='admin'&&p.id!==current.id){p.role='admin';if(!p.title||p.title==='Cleaner')p.title='Admin';p.updatedAt=nowIso();saveRealtime();renderModal();render();toast('Admin access enabled');}break;}
    case 'remove-admin-role':{const p=userById(el.dataset.id);const current=me();if(p&&current&&current.role==='admin'&&p.id!==current.id){p.role='employee';if(!p.title||p.title==='Admin')p.title='Cleaner';p.updatedAt=nowIso();saveRealtime();renderModal();render();toast('Admin access removed');}break;}
    case 'delete-client':{
      const id=el.dataset.id,name=el.dataset.name||'this client',cnt=Number(el.dataset.count||0);
      const warn=cnt>0?`\n\nHeads up: ${cnt} roster job${cnt!==1?'s are':' is'} linked to this client. Those shifts will keep their saved details but lose the client link.`:'';
      if(confirm(`Permanently delete ${name}? This cannot be undone.${warn}`)){state.clients=state.clients.filter(c=>c.id!==id);save();render();toast('Client deleted');}
      break;}
    case 'load-more-clients':{state.clientVisibleLimit=getListLimit('clientVisibleLimit')+WW_LIST_STEP; const page=document.getElementById('page'); if(page)page.innerHTML=pageBody(u); break;}
    case 'load-more-employees':{state.teamVisibleLimit=getListLimit('teamVisibleLimit')+WW_LIST_STEP; const page=document.getElementById('page'); if(page)page.innerHTML=pageBody(u); break;}
    case 'import-clients':{ const f=document.getElementById('clientImportFile'); if(f)f.click(); break; }
    case 'import-employees':{ const f=document.getElementById('employeeImportFile'); if(f)f.click(); break; }
    case 'client-template': downloadImportTemplate('client'); break;
    case 'employee-template': downloadImportTemplate('employee'); break;
    case 'new-client': openModal('client',{});break;
    case 'save-client':{
      const name=document.getElementById('m_cname').value.trim();if(!name){toast('Name required');break;}
      state.clients.push({id:uid('c'),name,address:document.getElementById('m_caddr').value.trim(),phone:document.getElementById('m_cphone').value.trim(),email:document.getElementById('m_cemail').value.trim(),notes:document.getElementById('m_cnotes').value.trim()});
      save();closeModal();render();toast('Client added');break;}

    /* account */
    case 'edit-me': openModal('edit-me',{});break;
    case 'save-me':{
      if(window.__pendingPhoto){u.photo=window.__pendingPhoto;window.__pendingPhoto=null;}
      Object.assign(u,{name:document.getElementById('e_name').value.trim(),title:document.getElementById('e_title').value.trim(),phone:document.getElementById('e_phone').value.trim(),email:document.getElementById('e_email').value.trim(),address:document.getElementById('e_addr').value.trim(),emergencyName:document.getElementById('e_ename').value.trim(),emergencyPhone:document.getElementById('e_ephone').value.trim(),payType:document.getElementById('e_paytype')?.value||u.payType,payRate:parseFloat(document.getElementById('e_payrate')?.value)||0,updatedAt:nowIso()});
      const newPw=document.getElementById('e_pw')?.value.trim();if(newPw)u.password=newPw;
      save();closeModal();render();toast('Profile saved');break;}
    case 'reset-data': if(confirm('This will erase ALL data and restore the starter setup. This cannot be undone. Continue?')){resetData();toast('Data reset');}break;

    /* modal */
    case 'close-modal': closeModal();break;
    case 'overlay-close': if(e.target.classList.contains('modal-overlay'))closeModal();break;
  }
});

/* input + change handlers (non-click) */
document.addEventListener('change',e=>{
  const el=e.target.closest('[data-action]');
  const u=me();if(!u)return;
  // file picker for booking reminder screenshots
  if(e.target.id==='br_file'){
    const f=e.target.files&&e.target.files[0];if(!f)return;
    if(!/^image\//.test(f.type)){toast('Please choose an image screenshot');return;}
    const reader=new FileReader();
    reader.onload=()=>{
      const img=new Image();
      img.onload=()=>{
        const max=1100;let w=img.width,h=img.height;
        if(w>h){if(w>max){h=Math.round(h*max/w);w=max;}}else{if(h>max){w=Math.round(w*max/h);h=max;}}
        const cv=document.createElement('canvas');cv.width=w;cv.height=h;
        cv.getContext('2d').drawImage(img,0,0,w,h);
        let dataUrl;try{dataUrl=cv.toDataURL('image/jpeg',0.78);}catch(err){dataUrl=reader.result;}
        window.__pendingBookingFile=dataUrl;window.__pendingBookingFileName=f.name;window.__pendingBookingFileType='image/jpeg';window.__pendingBookingFileSize=dataUrl.length;
        toast('Screenshot attached');
        if(modal&&modal.type==='booking-reminder'){modal.data=collectBookingDraft(modal.data&&modal.data.id||'');renderModal();}
      };
      img.onerror=()=>toast('Could not read that image');img.src=reader.result;
    };
    reader.onerror=()=>toast('Could not read that screenshot');reader.readAsDataURL(f);return;
  }
  // file picker for doc upload
  if(e.target.id==='doc_file'){
    const f=e.target.files[0];if(!f){return;}
    const lab=document.getElementById('docDropLabel');if(lab)lab.textContent=f.name;
    const nameInp=document.getElementById('doc_name');if(nameInp&&!nameInp.value)nameInp.value=f.name.replace(/\.[^.]+$/,'');
    if(f.size<4.5*1024*1024){
      window.__pendingDocLoading=true;window.__pendingDocName=f.name;window.__pendingDocType=f.type;window.__pendingDocSize=f.size;
      const reader=new FileReader();
      reader.onload=()=>{window.__pendingDoc=reader.result;window.__pendingDocLoading=false;if(lab)lab.textContent=f.name+' attached';};
      reader.onerror=()=>{window.__pendingDocLoading=false;toast('Could not attach that file');};
      reader.readAsDataURL(f);
    }
    else{window.__pendingDoc=null;window.__pendingDocLoading=false;toast('File too large to store — name saved only');}
    return;
  }
  if(e.target.id==='clientImportFile'||e.target.id==='employeeImportFile'){
    const isClient=e.target.id==='clientImportFile';
    const f=e.target.files[0];if(!f){return;}
    toast(`Reading ${f.name}…`);
    (async()=>{
      try{
        const rows=await parseImportFile(f);
        if(!rows.length){toast('No import rows found. Use the template headings, then try again.');return;}
        const result=isClient?importClients(rows):importEmployees(rows);
        if(isClient)state.clientVisibleLimit=WW_LIST_STEP; else state.teamVisibleLimit=WW_LIST_STEP;
        normalisePublicThreads(state);
        saveRealtime();
        requestAnimationFrame(()=>render());
        toast(importSummaryText(result,isClient?'clients':'employees'));
      }catch(err){
        console.error(err);
        toast(err&&err.message?err.message:'Could not read that file — try the template or save as .xlsx/.docx');
      }finally{e.target.value='';}
    })();
    return;
  }
  if(e.target.id==='e_photo'){
    const f=e.target.files[0];if(!f)return;
    if(!/^image\//.test(f.type)){toast('Please choose an image');return;}
    const reader=new FileReader();
    reader.onload=()=>{
      const img=new Image();
      img.onload=()=>{
        // downscale to max 400px and compress to keep localStorage small
        const max=400;let w=img.width,h=img.height;
        if(w>h){if(w>max){h=Math.round(h*max/w);w=max;}}
        else{if(h>max){w=Math.round(w*max/h);h=max;}}
        const cv=document.createElement('canvas');cv.width=w;cv.height=h;
        cv.getContext('2d').drawImage(img,0,0,w,h);
        let dataUrl;try{dataUrl=cv.toDataURL('image/jpeg',0.82);}catch(err){dataUrl=reader.result;}
        window.__pendingPhoto=dataUrl;
        const prev=document.getElementById('ePhotoPrev');
        if(prev){prev.style.backgroundImage=`url('${dataUrl}')`;prev.style.backgroundSize='cover';prev.style.backgroundPosition='center';const ini=prev.querySelector('.pe-initials');if(ini)ini.remove();}
      };
      img.onerror=()=>toast('Could not read that image');
      img.src=reader.result;
    };
    reader.onerror=()=>toast('Could not read that image');
    reader.readAsDataURL(f);
    return;
  }
  if(e.target.id==='ad_file'){
    const f=e.target.files[0];if(!f)return;
    const lab=document.getElementById('adDropLabel');if(lab)lab.textContent=f.name;
    if(f.size<4.5*1024*1024){
      window.__pendingAssignFileLoading=true;window.__pendingAssignFileName=f.name;window.__pendingAssignFileType=f.type;window.__pendingAssignFileSize=f.size;
      const reader=new FileReader();
      reader.onload=()=>{window.__pendingAssignFile=reader.result;window.__pendingAssignFileLoading=false;if(lab)lab.textContent=f.name+' attached';};
      reader.onerror=()=>{window.__pendingAssignFileLoading=false;toast('Could not attach that file');};
      reader.readAsDataURL(f);
    }
    else{window.__pendingAssignFile=null;window.__pendingAssignFileLoading=false;toast('File too large — keep under 4.5MB');}
    return;
  }
  if(e.target.id==='chatFile'){
    const files=Array.from(e.target.files||[]);e.target.value='';if(!files.length)return;
    const t=state.threads.find(x=>x.id===state.activeThreadId);if(!t)return;
    const isWork=t.id==='before-after'||t.type==='workphotos';
    if(isWork){
      const images=files.filter(f=>/^image\//.test(f.type)).slice(0,6);
      if(!images.length){toast('Please choose photo files');return;}
      Promise.all(images.map(f=>readChatPhotoAttachment(f))).then(items=>{
        window.__pendingWorkPhotos=(window.__pendingWorkPhotos||[]).concat(items).slice(0,6);
        renderNow();setTimeout(()=>{const ci=document.getElementById('chatInput');if(ci)ci.focus();},0);
      }).catch(()=>toast('Could not read one of those photos'));
      return;
    }
    const f=files[0];
    const isVideo=/^video\//.test(f.type);
    // Photos/docs cap at 2.5MB; short video clips get a higher 8MB cap. Larger
    // files are rejected with a clear message (they would bloat sync).
    const cap = isVideo ? 8*1024*1024 : 2.5*1024*1024;
    if(f.size>cap){
      toast(isVideo
        ? 'Video too large — please attach a short clip under 8MB (try a few seconds, or share a link).'
        : 'File too large — please attach under 2.5MB');
      return;
    }
    if(isVideo) toast('Attaching video…');
    const reader=new FileReader();
    reader.onload=()=>{
      const now=nowIso();
      const msg={id:uid('m'),authorId:me().id,text:'',createdAt:now,updatedAt:now,clientCreatedAt:now,pendingServerStamp:true,
        attachment:{name:f.name,type:f.type,size:f.size,data:reader.result}};
      t.messages.push(msg);t.messages=messagesChronological(t.messages);t.updatedAt=now;notifyThreadRecipients(t,msg);
      saveLocalState(state);pushMessageToCloud(t.id,msg);render();setTimeout(scrollChat,0);
    };
    reader.onerror=()=>toast('Could not read that file');
    reader.readAsDataURL(f);
    return;
  }
  if(!el)return;
  const a=el.dataset.action;
  if(a==='weekly-time'){
    const day=el.dataset.day,which=el.dataset.which;
    if(!state.weeklyAvail[u.id])state.weeklyAvail[u.id]={};
    const w=state.weeklyAvail[u.id][day]||{on:true,from:'08:00',to:'16:00'};
    w[which]=el.value;state.weeklyAvail[u.id][day]=w;save();
  }
  if(a==='shift-date-change'){
    const d=collectShiftDraft();d.date=el.value;modal.data=d;
  }
  if(a==='payroll-period'){state.payrollPeriod=el.value;save();render();return;}
  if(a==='color-select'){
    applyShiftColourPreview(el.value||'');
    return;
  }
  if(a==='shift-visibility-change'){
    const d=collectShiftDraft();d.status=el.value;modal.data=d;
    const small=el.closest('.visibility-section')?.querySelector('summary small');
    if(small)small.textContent=el.value==='Published'?'Published to employees':'Saved as draft';
  }
});
document.addEventListener('input',e=>{
  const el=e.target.closest('[data-action]');if(!el)return;
  const u=me();if(!u)return;
  if(el.dataset.action==='tsf-emp-search'){
    state.tsfSearch=el.value;
    const emps=state.users.filter(x=>x.role==='employee'&&x.status!=='archived');
    const q=el.value.trim().toLowerCase();
    let box=document.querySelector('.tsf-results');
    const bar=document.querySelector('.tsf-bar');
    if(!q){if(box)box.remove();return;}
    const html=emps.filter(e=>e.name.toLowerCase().includes(q)||(e.title||'').toLowerCase().includes(q)).map(e=>`<button class="tsf-result ${e.id===state.tsFocusEmployeeId?'active':''}" data-action="ts-focus-open" data-id="${e.id}"><span class="avatar sm sage">${initials(e.name)}</span>${escapeHtml(e.name)}</button>`).join('')||'<span class="tsf-noresult">No match</span>';
    if(!box){box=document.createElement('div');box.className='tsf-results';bar.after(box);}
    box.innerHTML=html;
    return;
  }
  if(el.dataset.action==='addr-input'){
    const box=document.getElementById(el.id+'_suggest');
    if(!box)return;
    const sugg=addressSuggestions(el.value);
    if(!sugg.length){box.innerHTML='';box.classList.remove('open');return;}
    box.innerHTML=sugg.map((s,i)=>`<button type="button" class="addr-opt${i===0?' addr-best':''}" data-action="addr-pick" data-for="${el.id}" data-val="${escapeHtml(s)}">${svg('pin')}<span>${escapeHtml(s)}</span>${i===0?'<em class="addr-best-tag">Best</em>':''}</button>`).join('');
    box.classList.add('open');
    return;
  }
  if(el.dataset.action==='roster-emp-search'){
    state.rosterEmpSearch=el.value;
    const page=document.getElementById('page');
    if(page){
      const start=el.selectionStart;
      page.innerHTML=pageBody(me());
      const again=document.getElementById('rosterEmpSearch');
      if(again){again.focus();try{again.setSelectionRange(start,start);}catch(_){}}
    }
    return;
  }
  if(el.dataset.action==='nc-search'){
    state.ncSearch=el.value;
    const host=document.getElementById('modalContent')||document.querySelector('.modal-content,.modal-body');
    const start=el.selectionStart;
    if(typeof renderModal==='function')renderModal();
    const again=document.getElementById('ncSearch');
    if(again){again.focus();try{again.setSelectionRange(start,start);}catch(_){}}
    return;
  }
  if(el.dataset.action==='chat-search'){
    state.chatSearch=el.value;
    const page=document.getElementById('page');
    if(page){
      const cur=el.value, start=el.selectionStart;
      page.innerHTML=pageBody(me());
      const again=document.getElementById('chatSearch');
      if(again){again.focus();try{again.setSelectionRange(start,start);}catch(_){}}
    }
    return;
  }
  if(el.dataset.action==='shift-client-search'){
    const q=el.value.trim();
    const wrap=document.getElementById('clientPicker');
    if(!wrap)return;
    const selectedId=document.getElementById('m_client')?.value||'';
    if(!q){wrap.classList.add('is-collapsed');wrap.innerHTML='<div class="picker-empty" id="clientPickerEmpty" style="display:none">No matching clients</div>';return;}
    const rows=shiftClientRowsHtml(q,selectedId);
    wrap.innerHTML=rows||'<div class="picker-empty" id="clientPickerEmpty">No matching clients</div>';
    wrap.classList.remove('is-collapsed');
    return;
  }
  if(el.dataset.action==='shift-emp-search'){
    const q=el.value.trim().toLowerCase();
    const wrap=document.getElementById('employeePicker');
    if(wrap){
      wrap.querySelectorAll('.picker-row').forEach(r=>{r.style.display=!q||((r.dataset.text||'').includes(q))?'':'none';});
    }
    return;
  }
  if(el.dataset.action==='timesheet-client-search'){
    const prefix=el.dataset.prefix||'mr';
    const q=el.value.trim();
    const res=document.getElementById(`${prefix}_client_results`);
    if(res){
      const selectedId=document.getElementById(`${prefix}_client`)?.value||'';
      const rows=timesheetClientRowsHtml(prefix,q,selectedId);
      res.innerHTML=rows||'<div class="picker-empty" style="padding:10px 12px">No matching clients</div>';
      res.classList.remove('is-collapsed');
    }
    return;
  }
  if(el.dataset.action==='team-search'){
    state.teamSearch=el.value;state.teamVisibleLimit=WW_LIST_STEP;
    const start=el.selectionStart;
    const page=document.getElementById('page');if(page)page.innerHTML=pageBody(u);
    const input=document.querySelector('[data-action="team-search"]');if(input){input.focus();try{input.setSelectionRange(start,start);}catch(_){}}
    return;
  }
  if(el.dataset.action==='client-search'){
    state.clientSearch=el.value;state.clientVisibleLimit=WW_LIST_STEP;
    const start=el.selectionStart;
    const page=document.getElementById('page');if(page)page.innerHTML=pageBody(u);
    const input=document.querySelector('[data-action="client-search"]');if(input){input.focus();try{input.setSelectionRange(start,start);}catch(_){}}
    return;
  }
  if(el.dataset.action==='avail-note'){
    const dt=el.dataset.date;
    if(!state.availability[u.id])state.availability[u.id]={};
    const ex=state.availability[u.id][dt]||{status:'partial'};
    state.availability[u.id][dt]={...ex,note:el.value};save();
  }
});
/* clicking the doc drop label opens file picker */
document.addEventListener('click',e=>{
  if(e.target.closest('.doc-drop')){const f=document.getElementById('doc_file');if(f)f.click();}
});

document.addEventListener('focusin',e=>{
  const el=e.target.closest('[data-action="shift-client-search"]');
  if(!el)return;
  const picker=document.getElementById('clientPicker');
  if(picker){
    const q=el.value.trim();
    const selectedId=document.getElementById('m_client')?.value||'';
    picker.innerHTML=shiftClientRowsHtml(q,selectedId)||'<div class="picker-empty" id="clientPickerEmpty" style="display:none">No matching clients</div>';
    if(q)picker.classList.remove('is-collapsed');
  }
});

document.addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    if(document.getElementById('loginPw')&&document.activeElement&&document.activeElement.id==='loginPw'){document.querySelector('[data-action="do-login"]')?.click();}
  }
  if(e.key==='Escape'&&modal)closeModal();
});
function readChatPhotoAttachment(file){
  return new Promise((resolve,reject)=>{
    if(!file||!/^image\//.test(file.type)){reject(new Error('not-image'));return;}
    const reader=new FileReader();
    reader.onload=()=>{
      const img=new Image();
      img.onload=()=>{
        try{
          const max=1100;let w=img.width,h=img.height;
          if(w>h){if(w>max){h=Math.round(h*max/w);w=max;}}else if(h>max){w=Math.round(w*max/h);h=max;}
          const cv=document.createElement('canvas');cv.width=w;cv.height=h;cv.getContext('2d').drawImage(img,0,0,w,h);
          const data=cv.toDataURL('image/jpeg',0.78);
          resolve({name:file.name||'clean-photo.jpg',type:'image/jpeg',size:data.length,data});
        }catch(e){resolve({name:file.name||'clean-photo.jpg',type:file.type||'image/jpeg',size:file.size||0,data:reader.result});}
      };
      img.onerror=reject;img.src=reader.result;
    };
    reader.onerror=reject;reader.readAsDataURL(file);
  });
}
function getChatInputText(el){
  if(!el)return'';
  if('value' in el)return (el.value||'').trim();
  return (el.innerText||el.textContent||'').replace(/ /g,' ').trim();
}
function clearChatInput(el){
  if(!el)return;
  if('value' in el){el.value='';return;}
  el.textContent='';
}
function commentOnWorkPhoto(threadId,msgId){
  const u=me();if(!u||u.role!=='admin')return;
  const t=state.threads.find(x=>x.id===threadId);const m=t&&t.messages.find(x=>x.id===msgId);
  if(!t||!m)return;
  const text=prompt('Comment on this before/after photo:','Great work, thank you for sharing this!');
  if(!text||!text.trim())return;
  const now=nowIso();
  if(!Array.isArray(m.comments))m.comments=[];
  m.comments.push({id:uid('pc'),authorId:u.id,text:text.trim(),createdAt:now,updatedAt:now});
  m.updatedAt=now;t.updatedAt=now;
  saveLocalState(state);pushMessageToCloud(t.id,m);queueCloudSync();render();setTimeout(scrollChat,0);
}
function sendMsg(){
  if(window.__msgSending)return; // guard against accidental double-send
  const inp=document.getElementById('chatInput');if(!inp)return;const txt=getChatInputText(inp);
  const t=state.threads.find(x=>x.id===state.activeThreadId);if(!t)return;
  const u=me();if(!u)return;
  const isWork=t.id==='before-after'||t.type==='workphotos';
  const pending=isWork&&Array.isArray(window.__pendingWorkPhotos)?window.__pendingWorkPhotos.slice():[];
  if(!txt&&!pending.length)return;
  window.__msgSending=true;
  const sendBtn=document.querySelector('[data-action="send-msg"]');
  if(sendBtn){sendBtn.disabled=true;setTimeout(()=>{try{sendBtn.disabled=false;}catch(e){}},350);}
  setTimeout(()=>{window.__msgSending=false;},350);
  const now=nowIso();
  const msg={id:uid('m'),authorId:u.id,text:txt,createdAt:now,updatedAt:now,clientCreatedAt:now,deliveredAt:now,pendingServerStamp:false};
  if(pending.length){msg.attachments=pending;msg.attachment=pending[0];msg.kind='work-photos';}
  if(!Array.isArray(t.messages))t.messages=[];
  const prevMsg=messagesChronological(t.messages).slice(-1)[0];
  const prevAuthorId=prevMsg?prevMsg.authorId:null;
  t.messages.push(msg);t.messages=messagesChronological(t.messages);t.updatedAt=now;
  notifyThreadRecipients(t,msg);
  if(isWork)window.__pendingWorkPhotos=[];
  clearChatInput(inp);if(inp.tagName==='TEXTAREA')inp.style.setProperty('height','46px','important');
  clearTyping(t.id);
  saveLocalState(state);   // commit locally FIRST so no sync can drop it

  // INSTANT SEND: update only the open chat stream immediately. No full page
  // render waits before the user sees their message, even in long chats.
  const scroller=document.getElementById('chatScroll');
  if(scroller){
    const empty=scroller.querySelector('.thread-empty');if(empty)empty.remove();
    const typing=scroller.querySelector('.typing-row');if(typing)typing.remove();
    scroller.insertAdjacentHTML('beforeend', messageBubbleHtml(msg,t,u,prevAuthorId));
    scroller.scrollTop=scroller.scrollHeight;
    requestAnimationFrame(()=>{try{scroller.scrollTop=scroller.scrollHeight;liveUpdateTyping();}catch(e){}});
  }else{
    render();
  }
  pushMessageToCloud(t.id,msg);
  setTimeout(()=>{scrollChat();const ci=document.getElementById('chatInput');if(ci){ci.focus();if(ci.tagName==='TEXTAREA')ci.style.setProperty('height','46px','important');}},0);
  setTimeout(()=>{try{const row=document.querySelector(`.msg[data-mid="${msg.id}"] .msg-status`);if(row)row.outerHTML=messageReceiptHtml(msg,t,me());}catch(e){}},350);
}
function autoGrowChatInput(){
  const t=document.getElementById('chatInput');if(!t)return;
  const max=132;
  if(t.tagName==='TEXTAREA'){
    t.style.setProperty('height','auto','important');
    t.style.setProperty('height',Math.min(t.scrollHeight,max)+'px','important');
  }else{
    t.style.minHeight='46px';
    t.style.maxHeight=max+'px';
    t.style.overflowY=t.scrollHeight>max?'auto':'hidden';
  }
}
let __typingDebounce=null;
document.addEventListener('input',e=>{ if(e.target&&e.target.id==='chatInput'){autoGrowChatInput();
  // best-effort typing indicator: mark typing, auto-clear after a short pause
  if(state&&state.activeThreadId){
    setTyping(state.activeThreadId);
    clearTimeout(__typingDebounce);
    __typingDebounce=setTimeout(()=>{clearTyping(state.activeThreadId);},4000);
  }
} });
function wwInsertChatLineBreak(el){
  try{
    if(!el)return;
    if('value' in el){
      const start=el.selectionStart||0,end=el.selectionEnd||0;
      el.value=el.value.slice(0,start)+'\n'+el.value.slice(end);
      el.selectionStart=el.selectionEnd=start+1;
      return;
    }
    el.focus();
    if(document.execCommand){
      const ok=document.execCommand('insertText',false,'\n');
      if(ok)return;
    }
    const sel=window.getSelection&&window.getSelection();
    if(sel&&sel.rangeCount){
      const range=sel.getRangeAt(0);
      range.deleteContents();
      const br=document.createElement('br');
      range.insertNode(br);
      range.setStartAfter(br);range.setEndAfter(br);
      sel.removeAllRanges();sel.addRange(range);
    }else{
      el.appendChild(document.createElement('br'));
    }
  }catch(e){}
}
// V194: Enter/Return must create a new line only. Messages send only when the
// paper-plane Send button is tapped/clicked. Capture phase stops older handlers
// and mobile keyboard “send” behaviours from submitting the chat.
document.addEventListener('keydown',e=>{
  const el=e.target&&e.target.id==='chatInput'?e.target:null;
  if(!el||e.key!=='Enter')return;
  e.preventDefault();
  e.stopImmediatePropagation();
  wwInsertChatLineBreak(el);
  setTimeout(()=>{autoGrowChatInput();},0);
},true);
document.addEventListener('keydown',e=>{
  const el=e.target&&e.target.id==='chatInput'?e.target:null;
  if(!el)return;
  // Never send a chat from the keyboard. iPhone Done/down arrows and desktop Enter
  // must only add/keep typing space. Messages are sent only with the send button.
  if(e.key==='Enter'){
    setTimeout(()=>{autoGrowChatInput();},0);
    return;
  }
});

/* V141: chat-only iPhone keyboard cleanup.
   While the message box is focused, remove every other app field from the
   temporary keyboard navigation order so iOS does not show the large
   previous/next/check suggestion bar above the keyboard. Restored on blur. */
function wwChatKeyboardAccessoryLock(lock){
  try{
    const chat=document.getElementById('chatInput');
    const fields=Array.from(document.querySelectorAll('input,textarea,select,[contenteditable="true"],[contenteditable="plaintext-only"]'))
      .filter(el=>el&&el!==chat&&el.id!=='chatFile'&&!el.closest('.chat-composer'));
    fields.forEach(el=>{
      if(lock){
        if(!el.hasAttribute('data-ww-chat-prev-tabindex')){
          el.setAttribute('data-ww-chat-prev-tabindex',el.getAttribute('tabindex')??'');
        }
        if('disabled' in el&&!el.hasAttribute('data-ww-chat-prev-disabled')){
          el.setAttribute('data-ww-chat-prev-disabled',el.disabled?'1':'0');
        }
        el.setAttribute('tabindex','-1');
        if('disabled' in el&&el.type!=='hidden'&&el.type!=='file')el.disabled=true;
      }else{
        if(el.hasAttribute('data-ww-chat-prev-tabindex')){
          const prev=el.getAttribute('data-ww-chat-prev-tabindex');
          if(prev==='')el.removeAttribute('tabindex'); else el.setAttribute('tabindex',prev);
          el.removeAttribute('data-ww-chat-prev-tabindex');
        }
        if('disabled' in el&&el.hasAttribute('data-ww-chat-prev-disabled')){
          el.disabled=el.getAttribute('data-ww-chat-prev-disabled')==='1';
          el.removeAttribute('data-ww-chat-prev-disabled');
        }
      }
    });
  }catch(e){}
}
document.addEventListener('pointerdown',e=>{
  try{if(e.target&&e.target.closest&&e.target.closest('#chatInput'))wwChatKeyboardAccessoryLock(true);}
  catch(err){}
},true);
document.addEventListener('focusin',e=>{
  if(e.target&&e.target.id==='chatInput')wwChatKeyboardAccessoryLock(true);
});
document.addEventListener('focusout',e=>{
  if(e.target&&e.target.id==='chatInput'){
    setTimeout(()=>{try{if(!document.activeElement||document.activeElement.id!=='chatInput')wwChatKeyboardAccessoryLock(false);}catch(err){}},180);
  }
});
document.addEventListener('pointerdown',e=>{
  try{if(e.target&&e.target.closest&&e.target.closest('[data-action="attach-file"],[data-action="send-msg"]'))wwChatKeyboardAccessoryLock(false);}
  catch(err){}
},true);
function scrollChat(){
  const s=document.getElementById('chatScroll');if(!s)return;
  const go=()=>{s.scrollTop=s.scrollHeight;};
  go();
  requestAnimationFrame(()=>{go();requestAnimationFrame(go);});
  // Watch for late layout shifts (avatars, wrapping, fonts) and keep pinned
  // to the bottom for a short window after opening.
  try{
    if(window.__chatRO)window.__chatRO.disconnect();
    const ro=new ResizeObserver(()=>go());
    ro.observe(s);
    if(s.firstElementChild)ro.observe(s.firstElementChild);
    window.__chatRO=ro;
    setTimeout(()=>{go();ro.disconnect();if(window.__chatRO===ro)window.__chatRO=null;},700);
  }catch(e){setTimeout(go,120);setTimeout(go,300);}
}

/* ---- clock timer ---- */
let timerInt;
function startTimer(){
  clearInterval(timerInt);
  const u=me();if(!u||!activeClock(u.id))return;
  const cs=activeClock(u.id);
  const shift=state.shifts.find(x=>x.id===cs.shiftId);
  const planMs=shift?durationHrs(shift.start,shift.end)*3600000:8*3600000;
  const tick=()=>{const el=document.getElementById('clockTimer');if(!el){clearInterval(timerInt);return;}
    const ms=Date.now()-new Date(cs.clockIn).getTime();
    const h=Math.floor(ms/3600000),m=Math.floor(ms%3600000/60000),s=Math.floor(ms%60000/1000);
    el.textContent=`${pad(h)}:${pad(m)}:${pad(s)}`;
    const pct=Math.min(ms/planMs,1);
    const bar=document.getElementById('clk1Prog');
    if(bar)bar.style.width=(pct*100).toFixed(1)+'%';
  };
  tick();timerInt=setInterval(tick,1000);
}

/* ===========================================================
   RENDER
   -----------------------------------------------------------
   render()    -> coalesced: many calls in the same frame collapse into ONE
                  full rebuild (a tap + an arriving sync no longer rebuild the
                  whole app twice). This is the main desktop speed win.
   renderNow() -> the immediate, synchronous rebuild. Use it only when code must
                  read the freshly-built DOM on the very next line.
   =========================================================== */
let __renderScheduled=false;
function render(){
  if(__renderScheduled)return;          // already queued for this frame
  __renderScheduled=true;
  requestAnimationFrame(()=>{
    __renderScheduled=false;
    renderNow();
  });
}
function renderNow(){
  __renderScheduled=false;              // cancel any pending coalesced render
  __lastRenderAt=Date.now();
  const app=document.getElementById('app');
  const u=me();
  if(!u){app.innerHTML=loginScreen();document.body.style.overflow='';modal=null;renderModal();setTimeout(applyInvitePrefill,0);return;}
  // Preserve the scroll position of the current page so a re-render (triggered by
  // a tap, toggle, or sync) doesn't jump/shake the view back to the top.
  const prevScroller=app.querySelector('.content');
  const prevTop=prevScroller?prevScroller.scrollTop:0;
  const prevTab=state.activeTab;
  app.innerHTML=shell(u);
  document.body.classList.toggle('chat-thread-open', state.activeTab==='chat' && !!state.chatMobileThread);
  // restore scroll only when staying on the same tab (tab switches start at top)
  if(prevTop && state.activeTab===prevTab){
    const ns=app.querySelector('.content');
    if(ns) ns.scrollTop=prevTop;
  }
  if(state.activeTab==='chat')scrollChat();
  if(state.activeTab==='clock'&&activeClock(u.id))startTimer();
}

/* ---------- boot ---------- */
// ---- ONE-TIME FRESH-START RESET ----
// Wipes any old demo/trial data (local + backups) and forces the clean seed.
// Runs once per device; after that the app behaves normally and keeps real data.
const FRESH_RESET_FLAG='ww_fresh_reset_v9_done';
function runFreshStartReset(){
  try{
    if(localStorage.getItem(FRESH_RESET_FLAG)==='1') return false;
    // remove every old westwonders state + backup key so nothing can restore demo data
    const toRemove=[];
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i)||'';
      if(k.indexOf('westwonders')===0 || k.indexOf('westwonders')>-1){ toRemove.push(k); }
    }
    toRemove.forEach(k=>{ try{localStorage.removeItem(k);}catch(e){} });
    localStorage.setItem(FRESH_RESET_FLAG,'1');
    return true;
  }catch(e){ return false; }
}
const __didFreshReset = runFreshStartReset();


/* ---------- V105 next-week roster import from uploaded screenshots ---------- */
const WW_NEXT_WEEK_ROSTER_BATCH_V105='next-week-roster-2026-06-29-to-2026-07-05-v105';
const WW_NEXT_WEEK_ROSTER_V105=[{"employee": "", "date": "2026-07-02", "start": "10:30", "end": "15:00", "client": "Peppers Paddocks BNB"}, {"employee": "Charles Allieu", "date": "2026-06-29", "start": "09:30", "end": "11:30", "client": "Nicole Taylor NDIS"}, {"employee": "Charles Allieu", "date": "2026-06-29", "start": "11:45", "end": "13:45", "client": "Ragnirk"}, {"employee": "Charles Allieu", "date": "2026-06-30", "start": "09:30", "end": "13:30", "client": "Grant Keysborough"}, {"employee": "Charles Allieu", "date": "2026-06-30", "start": "13:50", "end": "14:50", "client": "John Nguyen"}, {"employee": "Charles Allieu", "date": "2026-07-01", "start": "09:30", "end": "13:30", "client": "Jay Langwarrin NDIS"}, {"employee": "Charles Allieu", "date": "2026-07-01", "start": "14:00", "end": "16:00", "client": "Vaughn Dayton NDIS"}, {"employee": "Charles Allieu", "date": "2026-07-02", "start": "09:30", "end": "11:30", "client": "Lisa & Richard Kuhl"}, {"employee": "Charles Allieu", "date": "2026-07-02", "start": "12:00", "end": "15:00", "client": "Peppers Paddocks BNB"}, {"employee": "Charles Allieu", "date": "2026-07-03", "start": "09:30", "end": "12:30", "client": "Braeside Office"}, {"employee": "Charles Allieu", "date": "2026-07-03", "start": "13:00", "end": "15:00", "client": "Madi Lemmon"}, {"employee": "Chelsea Benn", "date": "2026-06-30", "start": "09:30", "end": "11:00", "client": "Jessica La Rocco"}, {"employee": "Chelsea Benn", "date": "2026-06-30", "start": "11:15", "end": "12:15", "client": "Linh Nguyen"}, {"employee": "Chelsea Benn", "date": "2026-07-01", "start": "09:30", "end": "10:50", "client": "Vajice Hurunui NDIS CRA"}, {"employee": "Chelsea Benn", "date": "2026-07-01", "start": "11:00", "end": "11:50", "client": "Amy Walker"}, {"employee": "Chelsea Benn", "date": "2026-07-01", "start": "12:00", "end": "13:00", "client": "Chloe Hodder Residential"}, {"employee": "Chelsea Benn", "date": "2026-07-01", "start": "13:15", "end": "14:40", "client": "Georgia Kate"}, {"employee": "Chelsea Benn", "date": "2026-07-02", "start": "10:15", "end": "11:15", "client": "Brianna Koch"}, {"employee": "Chelsea Benn", "date": "2026-07-02", "start": "11:30", "end": "12:30", "client": "Amanda Edithvale"}, {"employee": "Chelsea Benn", "date": "2026-07-02", "start": "12:45", "end": "13:45", "client": "Rebekah Stone Residential"}, {"employee": "Chelsea Benn", "date": "2026-07-02", "start": "14:00", "end": "14:30", "client": "Rach Parkdale"}, {"employee": "Chelsea Benn", "date": "2026-07-03", "start": "10:30", "end": "11:10", "client": "Desiree Shepherd"}, {"employee": "Chelsea Benn", "date": "2026-07-03", "start": "11:30", "end": "12:30", "client": "Felicity Wilkison NDIS"}, {"employee": "Chelsea Benn", "date": "2026-07-03", "start": "12:45", "end": "14:10", "client": "Emily Gibson"}, {"employee": "Courtney Wat", "date": "2026-06-30", "start": "09:30", "end": "11:00", "client": "Mel Patterson Lakes"}, {"employee": "Courtney Wat", "date": "2026-06-30", "start": "11:15", "end": "12:15", "client": "Tess Farrell"}, {"employee": "Courtney Wat", "date": "2026-06-30", "start": "12:45", "end": "13:45", "client": "Jess Cheltenham"}, {"employee": "Courtney Wat", "date": "2026-07-02", "start": "09:00", "end": "09:50", "client": "Rosie Residential House Clean"}, {"employee": "Courtney Wat", "date": "2026-07-02", "start": "10:15", "end": "11:15", "client": "Brianna Koch"}, {"employee": "Courtney Wat", "date": "2026-07-02", "start": "11:30", "end": "12:30", "client": "Christina Parkdale"}, {"employee": "Courtney Wat", "date": "2026-07-02", "start": "12:45", "end": "13:45", "client": "Stephanie Lipson"}, {"employee": "Courtney Wat", "date": "2026-07-02", "start": "14:00", "end": "14:30", "client": "Rach Parkdale"}, {"employee": "Courtney Wat", "date": "2026-07-03", "start": "09:30", "end": "10:45", "client": "Billy Mornington LEVI"}, {"employee": "Courtney Wat", "date": "2026-07-03", "start": "11:00", "end": "12:00", "client": "Maddison Lee Shaz NDIS"}, {"employee": "Courtney Wat", "date": "2026-07-03", "start": "12:15", "end": "13:45", "client": "Emma Jackson"}, {"employee": "Gabriella Gea", "date": "2026-06-29", "start": "09:30", "end": "11:30", "client": "Alyssa Milne NDIS Frankston"}, {"employee": "Gabriella Gea", "date": "2026-06-29", "start": "11:45", "end": "13:45", "client": "Karen Lawrence NDIS"}, {"employee": "Gabriella Gea", "date": "2026-06-29", "start": "14:15", "end": "16:15", "client": "Aimee"}, {"employee": "Gabriella Gea", "date": "2026-06-30", "start": "09:30", "end": "10:30", "client": "Lynne Heard"}, {"employee": "Gabriella Gea", "date": "2026-06-30", "start": "10:45", "end": "12:45", "client": "Peter Black"}, {"employee": "Gabriella Gea", "date": "2026-07-01", "start": "09:00", "end": "12:00", "client": "Andrea Byrne"}, {"employee": "Gabriella Gea", "date": "2026-07-01", "start": "12:30", "end": "15:30", "client": "Cassie"}, {"employee": "Gabriella Gea", "date": "2026-07-02", "start": "09:30", "end": "10:45", "client": "Tamara Bittern"}, {"employee": "Gabriella Gea", "date": "2026-07-02", "start": "11:00", "end": "12:00", "client": "Ella Collette NDIS"}, {"employee": "Gabriella Gea", "date": "2026-07-02", "start": "12:30", "end": "16:30", "client": "Peppers Paddocks BNB"}, {"employee": "Gabriella Gea", "date": "2026-07-03", "start": "10:30", "end": "11:10", "client": "Desiree Shepherd"}, {"employee": "Gabriella Gea", "date": "2026-07-03", "start": "11:30", "end": "12:30", "client": "Felicity Wilkison NDIS"}, {"employee": "Gabriella Gea", "date": "2026-07-03", "start": "12:45", "end": "14:10", "client": "Emily Gibson"}, {"employee": "Jemma Brack", "date": "2026-07-01", "start": "10:00", "end": "11:00", "client": "Stewart James NDIS Rose"}, {"employee": "Jemma Brack", "date": "2026-07-01", "start": "11:15", "end": "12:15", "client": "April NDIS Clean"}, {"employee": "Jemma Brack", "date": "2026-07-01", "start": "12:40", "end": "14:10", "client": "Tessa Wyatt QUIN NDIS"}, {"employee": "Jemma Brack", "date": "2026-07-01", "start": "14:30", "end": "15:30", "client": "Alyson Maulana NDIS"}, {"employee": "Jemma Brack", "date": "2026-07-03", "start": "09:30", "end": "11:30", "client": "Julie Baigent KAYLEB"}, {"employee": "Jemma Brack", "date": "2026-07-03", "start": "11:45", "end": "12:45", "client": "Traci & Ian Pearson"}, {"employee": "Jemma Brack", "date": "2026-07-03", "start": "13:00", "end": "14:30", "client": "Ollie Rye"}, {"employee": "Jemma Brack", "date": "2026-07-03", "start": "14:45", "end": "15:45", "client": "Sarah Eagle NDIS"}, {"employee": "Lawrence Ko", "date": "2026-06-30", "start": "09:30", "end": "17:30", "client": "Ava Limpens"}, {"employee": "Lawrence Ko", "date": "2026-07-01", "start": "09:30", "end": "11:30", "client": "Brianna Koch"}, {"employee": "Lawrence Ko", "date": "2026-07-01", "start": "12:00", "end": "15:00", "client": "Adam Commercial Clean"}, {"employee": "Lawrence Ko", "date": "2026-07-02", "start": "09:30", "end": "10:45", "client": "Tamara Bittern"}, {"employee": "Lawrence Ko", "date": "2026-07-02", "start": "11:00", "end": "12:00", "client": "Ella Collette NDIS"}, {"employee": "Lawrence Ko", "date": "2026-07-02", "start": "12:30", "end": "16:30", "client": "Peppers Paddocks BNB"}, {"employee": "Natalie Green", "date": "2026-06-29", "start": "09:30", "end": "11:15", "client": "Claire Bloom"}, {"employee": "Natalie Green", "date": "2026-06-29", "start": "11:30", "end": "12:45", "client": "CDI Global Lisa Mount Martha"}, {"employee": "Natalie Green", "date": "2026-06-30", "start": "09:30", "end": "10:30", "client": "Lynne Heard"}, {"employee": "Natalie Green", "date": "2026-06-30", "start": "10:45", "end": "12:45", "client": "Peter Black"}, {"employee": "Natalie Green", "date": "2026-07-01", "start": "10:00", "end": "11:00", "client": "Stewart James NDIS Rose"}, {"employee": "Natalie Green", "date": "2026-07-01", "start": "11:15", "end": "12:15", "client": "April NDIS Clean"}, {"employee": "Natalie Green", "date": "2026-07-01", "start": "12:40", "end": "14:10", "client": "Tessa Wyatt QUIN NDIS"}, {"employee": "Natalie Green", "date": "2026-07-01", "start": "14:30", "end": "15:30", "client": "Alyson Maulana NDIS"}, {"employee": "Natalie Green", "date": "2026-07-02", "start": "09:30", "end": "12:30", "client": "Penny Kosmas NDIS"}, {"employee": "Natalie Green", "date": "2026-07-02", "start": "12:50", "end": "14:50", "client": "John Crocket"}, {"employee": "Natalie Green", "date": "2026-07-03", "start": "09:30", "end": "11:30", "client": "Julie Baigent KAYLEB"}, {"employee": "Natalie Green", "date": "2026-07-03", "start": "11:45", "end": "12:45", "client": "Traci & Ian Pearson"}, {"employee": "Natalie Green", "date": "2026-07-03", "start": "13:00", "end": "14:30", "client": "Ollie Rye"}, {"employee": "Natalie Green", "date": "2026-07-03", "start": "14:45", "end": "15:45", "client": "Sarah Eagle NDIS"}, {"employee": "Olivette Volima", "date": "2026-07-01", "start": "11:00", "end": "12:30", "client": "Bianca S Residential House Clean"}, {"employee": "Rose Allart", "date": "2026-06-29", "start": "09:30", "end": "11:30", "client": "Rebecca Kelb NDIS Hastings"}, {"employee": "Rose Allart", "date": "2026-06-29", "start": "11:45", "end": "13:45", "client": "Andrew Plane"}, {"employee": "Rose Allart", "date": "2026-06-30", "start": "09:30", "end": "11:30", "client": "Kathryn Cross NDIS"}, {"employee": "Rose Allart", "date": "2026-06-30", "start": "11:45", "end": "13:45", "client": "Erin Miller"}, {"employee": "Rose Allart", "date": "2026-07-01", "start": "09:30", "end": "10:50", "client": "Vajice Hurunui NDIS CRA"}, {"employee": "Rose Allart", "date": "2026-07-01", "start": "11:00", "end": "11:50", "client": "Amy Walker"}, {"employee": "Rose Allart", "date": "2026-07-01", "start": "12:00", "end": "13:00", "client": "Chloe Hodder Residential"}, {"employee": "Rose Allart", "date": "2026-07-01", "start": "13:15", "end": "14:40", "client": "Georgia Kate"}, {"employee": "Rose Allart", "date": "2026-07-01", "start": "15:00", "end": "17:00", "client": "Liam"}, {"employee": "Rose Allart", "date": "2026-07-02", "start": "09:00", "end": "09:50", "client": "Rosie Residential House Clean"}, {"employee": "Rose Allart", "date": "2026-07-02", "start": "10:15", "end": "11:15", "client": "Brianna Koch"}, {"employee": "Rose Allart", "date": "2026-07-02", "start": "11:30", "end": "12:30", "client": "Amanda Edithvale"}, {"employee": "Rose Allart", "date": "2026-07-02", "start": "12:45", "end": "13:45", "client": "Rebekah Stone Residential"}, {"employee": "Rose Allart", "date": "2026-07-02", "start": "14:00", "end": "14:30", "client": "Rach Parkdale"}, {"employee": "Rose Allart", "date": "2026-07-03", "start": "11:00", "end": "13:00", "client": "Salini Kumar"}, {"employee": "Rose Allart", "date": "2026-07-03", "start": "13:30", "end": "15:30", "client": "Taleah"}, {"employee": "Rushae Ferna", "date": "2026-06-30", "start": "09:30", "end": "11:00", "client": "Jessica La Rocco"}, {"employee": "Rushae Ferna", "date": "2026-06-30", "start": "11:15", "end": "12:15", "client": "Linh Nguyen"}, {"employee": "Rushae Ferna", "date": "2026-07-01", "start": "09:30", "end": "10:50", "client": "Vajice Hurunui NDIS CRA"}, {"employee": "Rushae Ferna", "date": "2026-07-01", "start": "11:00", "end": "11:50", "client": "Amy Walker"}, {"employee": "Rushae Ferna", "date": "2026-07-01", "start": "12:00", "end": "13:00", "client": "Chloe Hodder Residential"}, {"employee": "Rushae Ferna", "date": "2026-07-01", "start": "13:15", "end": "14:40", "client": "Georgia Kate"}, {"employee": "Rushae Ferna", "date": "2026-07-02", "start": "09:30", "end": "11:30", "client": "Lisa & Richard Kuhl"}, {"employee": "Rushae Ferna", "date": "2026-07-02", "start": "12:00", "end": "15:00", "client": "Peppers Paddocks BNB"}, {"employee": "Rushae Ferna", "date": "2026-07-03", "start": "10:30", "end": "11:10", "client": "Desiree Shepherd"}, {"employee": "Rushae Ferna", "date": "2026-07-03", "start": "11:30", "end": "12:30", "client": "Felicity Wilkison NDIS"}, {"employee": "Rushae Ferna", "date": "2026-07-03", "start": "12:45", "end": "14:10", "client": "Emily Gibson"}, {"employee": "Sophie Westley", "date": "2026-06-30", "start": "09:00", "end": "11:00", "client": "Ashley Winters Soni NDIS House Clean"}, {"employee": "Sophie Westley", "date": "2026-07-01", "start": "11:00", "end": "12:30", "client": "Bianca S Residential House Clean"}, {"employee": "Sophie Westley", "date": "2026-07-02", "start": "11:45", "end": "13:45", "client": "Charles Wheeler"}, {"employee": "Tara Padinis", "date": "2026-06-29", "start": "09:30", "end": "11:15", "client": "Claire Bloom"}, {"employee": "Tara Padinis", "date": "2026-06-29", "start": "11:30", "end": "12:45", "client": "CDI Global Lisa Mount Martha"}, {"employee": "Tara Padinis", "date": "2026-06-30", "start": "09:30", "end": "11:00", "client": "Mel Patterson Lakes"}, {"employee": "Tara Padinis", "date": "2026-06-30", "start": "11:15", "end": "12:15", "client": "Tess Farrell"}, {"employee": "Tara Padinis", "date": "2026-06-30", "start": "12:45", "end": "13:45", "client": "Jess Cheltenham"}, {"employee": "Tara Padinis", "date": "2026-07-02", "start": "09:00", "end": "09:50", "client": "Rosie Residential House Clean"}, {"employee": "Tara Padinis", "date": "2026-07-02", "start": "10:15", "end": "11:15", "client": "Brianna Koch"}, {"employee": "Tara Padinis", "date": "2026-07-02", "start": "11:30", "end": "12:30", "client": "Christina Parkdale"}, {"employee": "Tara Padinis", "date": "2026-07-02", "start": "12:45", "end": "13:45", "client": "Stephanie Lipson"}, {"employee": "Tara Padinis", "date": "2026-07-02", "start": "14:00", "end": "14:30", "client": "Rach Parkdale"}, {"employee": "Tara Padinis", "date": "2026-07-03", "start": "09:30", "end": "10:45", "client": "Billy Mornington LEVI"}, {"employee": "Tara Padinis", "date": "2026-07-03", "start": "11:00", "end": "12:00", "client": "Maddison Lee Shaz NDIS"}, {"employee": "Tara Padinis", "date": "2026-07-03", "start": "12:15", "end": "13:45", "client": "Emma Jackson"}];
function wwRosterNorm(v){
  return String(v||'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').replace(/(ndis|clean|cleaning|residential|house|home|the|and)/g,' ').replace(/\s+/g,' ').trim();
}
function wwRosterTokens(v){return wwRosterNorm(v).split(' ').filter(x=>x&&x.length>1);}
function wwRosterScore(needle,label){
  const a=wwRosterNorm(needle), b=wwRosterNorm(label);
  if(!a||!b)return 0;
  if(a===b)return 1000;
  if(b.includes(a)||a.includes(b))return 800+Math.min(a.length,b.length);
  const at=wwRosterTokens(a), bt=new Set(wwRosterTokens(b));
  let hit=0;at.forEach(t=>{if(bt.has(t))hit++;});
  return hit*100 - Math.abs(at.length-(bt.size||0));
}
function wwRosterFindUser(name){
  const list=(state.users||[]).filter(u=>u&&u.name&&!u._deleted&&u.status!=='archived');
  let best=null,score=0;
  list.forEach(u=>{const sc=wwRosterScore(name,u.name);if(sc>score){score=sc;best=u;}});
  return score>=95?best:null;
}
function wwRosterFindClient(name){
  const list=(state.clients||[]).filter(c=>c&&c.name&&!c._deleted);
  let best=null,score=0;
  list.forEach(c=>{
    const label=[c.name,c.notes,c.address].filter(Boolean).join(' ');
    const sc=wwRosterScore(name,label);
    if(sc>score){score=sc;best=c;}
  });
  return score>=95?best:null;
}
function wwRosterExistingShift(date,start,end,clientId,sourceKey){
  return (state.shifts||[]).find(s=>s&&!s._deleted&&(s.sourceKey===sourceKey||(s.date===date&&s.start===start&&s.end===end&&s.clientId===clientId)));
}
function applyNextWeekRosterImportV105(opts){
  opts=opts||{};
  if(!state||!Array.isArray(state.shifts)||!Array.isArray(state.users)||!Array.isArray(state.clients))return {added:0,updated:0,missing:0};
  state.rosterImports=state.rosterImports||{};
  const prevBatch=state.rosterImports[WW_NEXT_WEEK_ROSTER_BATCH_V105];
  if(prevBatch&&prevBatch.completed&&!opts.force){return {added:0,updated:0,missing:(prevBatch.missing||[]).length,total:WW_NEXT_WEEK_ROSTER_V105.length,skipped:true};}
  const batch=state.rosterImports[WW_NEXT_WEEK_ROSTER_BATCH_V105]||{createdAt:nowIso(),added:0,updated:0,missing:[]};
  const missing=[];let added=0,updated=0;
  WW_NEXT_WEEK_ROSTER_V105.forEach((r,i)=>{
    const c=wwRosterFindClient(r.client);
    if(!c){missing.push({row:i+1,type:'client',name:r.client});return;}
    let empIds=[];
    if(r.employee){
      const u=wwRosterFindUser(r.employee);
      if(!u){missing.push({row:i+1,type:'employee',name:r.employee,client:r.client});return;}
      empIds=[u.id];
    }
    const key='ww-v105-'+r.date+'-'+r.start+'-'+r.end+'-'+wwRosterNorm(r.client).replace(/\s+/g,'-');
    let existing=wwRosterExistingShift(r.date,r.start,r.end,c.id,key);
    if(existing){
      let changed=false;
      empIds.forEach(id=>{if(!(existing.employeeIds||[]).includes(id)){existing.employeeIds=(existing.employeeIds||[]).concat(id);changed=true;}});
      if(existing.status!=='Published'){existing.status='Published';changed=true;}
      if(existing.clientId!==c.id){existing.clientId=c.id;changed=true;}
      if(!existing.sourceKey){existing.sourceKey=key;changed=true;}
      if(!existing.source){existing.source='next-week-roster-screenshots-v105';changed=true;}
      if(changed){existing.updatedAt=nowIso();updated++;}
    }else{
      state.shifts.push({
        id:uid('s'),clientId:c.id,date:r.date,start:r.start,end:r.end,
        notes:'Imported from next-week roster screenshots',status:'Published',employeeIds:empIds,
        colorKey:'',source:'next-week-roster-screenshots-v105',sourceKey:key,updatedAt:nowIso()
      });
      added++;
    }
  });
  batch.added=(batch.added||0)+added;batch.updated=(batch.updated||0)+updated;batch.missing=missing;batch.lastRunAt=nowIso();batch.total=WW_NEXT_WEEK_ROSTER_V105.length;batch.completed=(missing.length===0);
  state.rosterImports[WW_NEXT_WEEK_ROSTER_BATCH_V105]=batch;
  if((added||updated)&&opts.save!==false){saveLocalState(state);if(opts.push){setTimeout(pushCloudSync,180);}}
  return {added,updated,missing:missing.length,total:WW_NEXT_WEEK_ROSTER_V105.length};
}
function scheduleNextWeekRosterImportV105(){
  try{applyNextWeekRosterImportV105({save:true,push:true});}catch(e){}
  const batch=state&&state.rosterImports&&state.rosterImports[WW_NEXT_WEEK_ROSTER_BATCH_V105];
  if(batch&&batch.completed)return;
  setTimeout(()=>{try{applyNextWeekRosterImportV105({save:true,push:true});}catch(e){}},900);
  setTimeout(()=>{try{applyNextWeekRosterImportV105({save:true,push:true});}catch(e){}},2500);
}


/* WW_V200_IOS_KEYBOARD_MESSAGES_NOTIFICATIONS_START
   Requested fixes only: iOS keyboard accessory suppression for Capacitor/native builds, cleaner deduped notifications, online status clarity, message-list overlap fix, and lightweight smoothness improvements. */
(function(){
  'use strict';

  function ww200EscapeRegExp(s){ return String(s||'').replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
  function ww200Norm(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }
  function ww200ActiveUsers(){ try{return activeAppUsers(state).filter(u=>u&&u.status!=='archived');}catch(e){return [];} }
  function ww200FirstName(u){ return String((u&&u.name)||'').trim().split(/\s+/)[0]||'Someone'; }
  function ww200AudienceUserIds(up){
    try{
      const audience=(up&&up.audience)||'all';
      return activeAppUsers(state).filter(x=>x&&x.status!=='archived'&&(audience==='all'||x.role===audience)).map(x=>x.id).filter(Boolean);
    }catch(e){return [];}
  }
  function ww200MentionedUserIds(text){
    const raw=String(text||''); if(!raw) return [];
    const ids=[]; const seen=new Set();
    ww200ActiveUsers().forEach(u=>{
      if(!u||!u.id||!u.name) return;
      const parts=String(u.name).trim().split(/\s+/).filter(Boolean);
      const first=parts[0]||''; const full=parts.join(' ');
      const pats=[];
      if(first) pats.push(new RegExp('(^|\\s)@'+ww200EscapeRegExp(first)+'(?=\\b|\\s|$)','i'));
      if(full && full!==first) pats.push(new RegExp('(^|\\s)@'+ww200EscapeRegExp(full).replace(/\\ /g,'\\s+')+'(?=\\b|\\s|$)','i'));
      // Also accept @FirstLast with no space.
      if(parts.length>1) pats.push(new RegExp('(^|\\s)@'+ww200EscapeRegExp(parts.join(''))+'(?=\\b|\\s|$)','i'));
      if(pats.some(r=>r.test(raw)) && !seen.has(u.id)){seen.add(u.id);ids.push(u.id);}
    });
    return ids;
  }
  function ww200AlertExistsForUser(userId,key){
    if(!userId||!key)return false;
    try{return (state.alerts||[]).some(a=>a&&!a._deleted&&a.userId===userId&&String(a.dedupeKey||'')===String(key));}catch(e){return false;}
  }
  function ww200CleanAlertText(text){
    let t=String(text||'').replace(/\s+/g,' ').trim();
    t=t.replace(/^New update posted:/i,'New post:');
    t=t.replace(/^Admin updated your timesheet entry/i,'Timesheet updated');
    if(t.length>118)t=t.slice(0,115)+'…';
    return t;
  }

  try{
    addAlertForUsers=function(userIds,text,opts){
      opts=opts||{};
      if(!state.alerts)state.alerts=[];
      const now=nowIso();
      const ids=[...new Set((userIds||[]).filter(Boolean))];
      ids.forEach(id=>{
        const person=userById(id); if(!person||person.status==='archived')return;
        const kind=opts.kind||'notification';
        const key=opts.dedupeKey || [kind,id,opts.threadId||'',opts.shiftId||'',opts.updateId||'',opts.commentId||'',ww200Norm(text)].filter(Boolean).join('|');
        if(ww200AlertExistsForUser(id,key))return;
        state.alerts.unshift({
          id:uid('al'),role:person.role||'employee',userId:id,userIds:[id],priority:!!opts.priority,kind,
          threadId:opts.threadId||'',shiftId:opts.shiftId||'',updateId:opts.updateId||'',commentId:opts.commentId||'',dedupeKey:key,
          text:ww200CleanAlertText(text),createdAt:now,updatedAt:now,clientCreatedAt:now,pendingServerStamp:true,read:false
        });
      });
    };
    addAdminAlert=function(text,opts){
      const ids=ww200ActiveUsers().filter(x=>x.role==='admin').map(x=>x.id);
      addAlertForUsers(ids,text,{...(opts||{}),priority:!!(opts&&opts.priority)});
    };
  }catch(e){}

  try{
    const oldNotifyLocalUser=notifyLocalUser;
    const recent={};
    notifyLocalUser=function(title,body,opts){
      opts=opts||{};
      const tag=String(opts.tag||((opts.data&&opts.data.tag)||''));
      const now=Date.now();
      Object.keys(recent).forEach(k=>{if(now-recent[k]>2*60*1000)delete recent[k];});
      if(tag&&recent[tag])return;
      if(tag)recent[tag]=now;
      return oldNotifyLocalUser.call(this,title,ww200CleanAlertText(body||''),opts);
    };
  }catch(e){}

  try{
    addUpdComment=function(id,text,u){
      const up=findUpdate(id); if(!up||!u)return;
      if(!Array.isArray(up.comments))up.comments=[];
      const cid=uid('uc'); const now=nowIso();
      up.comments.push({id:cid,authorId:u.id,text,createdAt:now,updatedAt:now,replies:[]});
      up.updatedAt=now;
      if(!state.openUpdates)state.openUpdates={}; state.openUpdates[id]=true;

      const recipients=new Set();
      const audienceIds=new Set(ww200AudienceUserIds(up));
      // Post owner/admin gets comment notifications on their own posts.
      if(up.authorId && up.authorId!==u.id && audienceIds.has(up.authorId))recipients.add(up.authorId);
      // Mentioned/tagged staff get a notification, without duplicating the post-owner alert.
      ww200MentionedUserIds(text).forEach(uid=>{ if(uid!==u.id && audienceIds.has(uid))recipients.add(uid); });
      recipients.forEach(uid=>{
        const tagged=ww200MentionedUserIds(text).includes(uid);
        const msg=tagged?`You were tagged in a comment: ${up.title}`:`${ww200FirstName(u)} commented on your post: ${up.title}`;
        addAlertForUsers([uid],msg,{kind:'update',updateId:id,commentId:cid,dedupeKey:`update-comment:${id}:${cid}:${uid}`,priority:!!up.pinned});
      });
      saveRealtime(); render();
    };

    addUpdReply=function(id,cid,text,u){
      const up=findUpdate(id); if(!up||!u)return;
      const c=(up.comments||[]).find(x=>x.id===cid); if(!c)return;
      if(!Array.isArray(c.replies))c.replies=[];
      const rid=uid('ur'); const now=nowIso();
      c.replies.push({id:rid,authorId:u.id,text,createdAt:now,updatedAt:now});
      up.updatedAt=now;
      if(!state.openUpdates)state.openUpdates={}; state.openUpdates[id]=true;

      const recipients=new Set();
      const audienceIds=new Set(ww200AudienceUserIds(up));
      if(c.authorId && c.authorId!==u.id && audienceIds.has(c.authorId))recipients.add(c.authorId);
      if(up.authorId && up.authorId!==u.id && up.authorId!==c.authorId && audienceIds.has(up.authorId))recipients.add(up.authorId);
      ww200MentionedUserIds(text).forEach(uid=>{ if(uid!==u.id && audienceIds.has(uid))recipients.add(uid); });
      recipients.forEach(uid=>{
        const tagged=ww200MentionedUserIds(text).includes(uid);
        const msg=tagged?`You were tagged in a reply: ${up.title}`:(uid===c.authorId?`${ww200FirstName(u)} replied to your comment: ${up.title}`:`${ww200FirstName(u)} replied on your post: ${up.title}`);
        addAlertForUsers([uid],msg,{kind:'update',updateId:id,commentId:cid,dedupeKey:`update-reply:${id}:${cid}:${rid}:${uid}`,priority:!!up.pinned});
      });
      saveRealtime(); render();
    };
  }catch(e){}

  // Intercept only the Post button so important posts + @tags create one clean alert per person.
  try{
    document.addEventListener('click',function(e){
      const el=e.target&&e.target.closest?e.target.closest('[data-action="save-update"]'):null;
      if(!el)return;
      e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
      const u=me(); if(!u)return;
      const title=(document.getElementById('up_title')?.value||'').trim(); if(!title){toast('Title required');return;}
      const body=(document.getElementById('up_body')?.value||'').trim();
      const audience=document.getElementById('up_aud')?.value||'all';
      const now=nowIso();
      const up={id:uid('up'),title,body,audience,pinned:!!document.getElementById('up_pin')?.checked,createdAt:now,updatedAt:now,authorId:u.id};
      state.updates.unshift(up);
      const tagged=new Set(ww200MentionedUserIds(title+' '+body));
      const recips=ww200ActiveUsers().filter(x=>x.id!==u.id&&(audience==='all'||x.role===audience));
      recips.forEach(x=>{
        const isTagged=tagged.has(x.id);
        const msg=isTagged?`You were tagged in a post: ${title}`:(up.pinned?`Important post: ${title}`:`New post: ${title}`);
        addAlertForUsers([x.id],msg,{priority:!!up.pinned,kind:'update',updateId:up.id,dedupeKey:`update-post:${up.id}:${x.id}`});
      });
      saveRealtime(); closeModal(); render(); toast('Post added and team notified');
    },true);
  }catch(e){}

  // Make presence less jumpy on iPhone/Home Screen: online stays online while a device is actively open.
  try{
    userPresence=function(userId){
      const p=(state.presence&&state.presence[userId])||null;
      if(!p||!p.lastActive)return {online:false,lastActive:null};
      const ageMs=Date.now()-(parseStampToEpoch(p.updatedAt||p.lastActive)||0);
      if(p.status==='offline' && ageMs>20000)return {online:false,lastActive:p.lastActive,ageMs,status:'offline'};
      return {online:ageMs<120000,lastActive:p.lastActive,ageMs,status:p.status||'online'};
    };
    presenceLabel=function(userId){
      const pr=userPresence(userId);
      if(pr.online)return 'Online';
      if(!pr.lastActive)return 'Offline';
      const mins=Math.floor(pr.ageMs/60000);
      if(mins<60)return `Active ${mins||1}m ago`;
      const hrs=Math.floor(mins/60); if(hrs<24)return `Active ${hrs}h ago`;
      const days=Math.floor(hrs/24); return days<7?`Active ${days}d ago`:`Last seen ${fmtStampDateTime(pr.lastActive)}`;
    };
    startPresenceHeartbeat=function(){
      if(__presenceTimer)return;
      presenceBeat();
      __presenceTimer=setInterval(()=>{if(!document.hidden)presenceBeat();},15000);
      let last=0;
      const bump=()=>{const n=Date.now(); if(n-last>10000){last=n; presenceBeat();}};
      ['pointerdown','touchstart','keydown'].forEach(ev=>document.addEventListener(ev,bump,{passive:true}));
    };
  }catch(e){}

  function ww200InstallStyle(){
    try{
      if(document.getElementById('ww-v200-ios-msg-notif-style'))return;
      const st=document.createElement('style'); st.id='ww-v200-ios-msg-notif-style';
      st.textContent=`
        html,body,#app{scroll-behavior:auto!important;overscroll-behavior:none!important;-webkit-tap-highlight-color:transparent;}
        button,[data-action],input,textarea,select{touch-action:manipulation;}
        .login-root,.login-stage,.login-card,.login-shell,.login-hero{animation:none!important;transition:none!important;transform:translateZ(0)!important;backface-visibility:hidden!important;-webkit-backface-visibility:hidden!important;will-change:auto!important;}
        .login-root{contain:layout paint!important;min-height:100dvh!important;overflow:hidden!important;}
        .cth-presence.is-online{color:#43c464!important;font-weight:900!important;opacity:1!important;}
        .cth-presence:not(.is-online){color:rgba(255,248,232,.82)!important;opacity:1!important;}
        .cth-dot{display:inline-block!important;width:8px!important;height:8px!important;border-radius:999px!important;background:#43c464!important;box-shadow:0 0 0 3px rgba(67,196,100,.18)!important;}
        .notif-item{contain:layout paint!important;}
        .notif-text{line-height:1.25!important;}
        @media (min-width:1024px){
          .cv-head{display:flex!important;align-items:center!important;gap:10px!important;min-height:62px!important;padding:12px!important;}
          .cv-head::after{content:none!important;display:none!important;}
          .cv-head-label{line-height:1.05!important;margin:0!important;white-space:nowrap!important;}
          .cv-threads{overflow-y:auto!important;}
          .cv-row{min-height:74px!important;align-items:center!important;}
          .cv-body{min-width:0!important;overflow:hidden!important;}
          .cv-top,.cv-name,.cv-last{min-width:0!important;max-width:100%!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;}
        }
        @media (max-width:720px){
          .cv-head::after{content:none!important;display:none!important;}
          .cv-head{min-height:auto!important;align-items:center!important;}
          .cv-row{align-items:center!important;min-width:0!important;}
          .cv-body{min-width:0!important;overflow:hidden!important;}
          .cv-top,.cv-name,.cv-last{min-width:0!important;max-width:100%!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;}
          .chat-shell,.chat-thread,.chat-scroll{contain:layout paint!important;}
        }
      `;
      document.head.appendChild(st);
    }catch(e){}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ww200InstallStyle,{once:true}); else ww200InstallStyle();

  async function ww200HideAccessoryBar(){
    try{
      const cap=window.Capacitor;
      const kb=(cap&&cap.Plugins&&cap.Plugins.Keyboard)||window.Keyboard;
      if(kb&&typeof kb.setAccessoryBarVisible==='function'){
        await kb.setAccessoryBarVisible({isVisible:false});
        return true;
      }
    }catch(e){}
    return false;
  }
  try{
    window.__WW_HIDE_IOS_KEYBOARD_ACCESSORY_BAR=ww200HideAccessoryBar;
    ww200HideAccessoryBar();
    document.addEventListener('focusin',function(e){
      if(e.target&&e.target.matches&&e.target.matches('input,textarea,[contenteditable="true"]'))ww200HideAccessoryBar();
    },true);
  }catch(e){}
})();
/* WW_V200_IOS_KEYBOARD_MESSAGES_NOTIFICATIONS_END */

/* WW_V201_CHAT_ONLINE_PUSH_CLEANUP_START
   Requested only: fix desktop Messages header overlap, make online status clear on desktop, remove Firebase live chat toast, and clean phone notifications so they do not duplicate or notify the sender. */
(function(){
  'use strict';
  function ww201InstallStyle(){
    try{
      if(document.getElementById('ww-v201-chat-online-push-style'))return;
      const st=document.createElement('style'); st.id='ww-v201-chat-online-push-style';
      st.textContent=`
        /* Desktop Messages header: stop “Team conversations” from sitting on top of Messages. */
        body .chat-list.cv-list .cv-head::after{content:""!important;display:none!important;}
        body .chat-list.cv-list .cv-head{
          display:flex!important;align-items:center!important;gap:10px!important;
          min-height:60px!important;height:auto!important;padding:12px 12px!important;
          overflow:hidden!important;box-sizing:border-box!important;
        }
        body .chat-list.cv-list .cv-head-label{
          display:block!important;line-height:1!important;margin:0!important;padding:0!important;
          white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;
          position:static!important;transform:none!important;max-width:calc(100% - 58px)!important;
        }
        body .chat-list.cv-list .cv-new{flex:0 0 auto!important;margin-left:auto!important;}
        body .chat-list.cv-list .cv-archive-filter{flex:0 0 auto!important;}
        body .chat-list.cv-list .cv-search{clear:both!important;margin-top:0!important;}

        /* Desktop DM online status: keep green dot/text visible, not greyed out. */
        body .chat-thread-head .cth-sub,
        body .chat-thread-head .cth-info .cth-sub,
        body .chat-thread-head .cth-card .cth-sub{opacity:1!important;color:#425247!important;}
        body .chat-thread-head .cth-presence.is-online,
        body .chat-thread-head .cth-sub .cth-presence.is-online,
        body .chat-thread-head .cth-card .cth-presence.is-online{
          color:#20b85a!important;font-weight:900!important;opacity:1!important;text-shadow:none!important;
        }
        body .chat-thread-head .cth-presence.is-online .cth-dot,
        body .chat-thread-head .cth-dot{
          display:inline-block!important;background:#20d665!important;border-radius:999px!important;
          width:8px!important;height:8px!important;box-shadow:0 0 0 3px rgba(32,214,101,.18)!important;opacity:1!important;
        }
        @media (min-width:1024px){
          body .chat-list.cv-list .cv-head{min-height:64px!important;border-radius:22px!important;}
          body .chat-list.cv-list .cv-head-label{font-size:28px!important;line-height:1!important;}
          body .chat-list.cv-list .cv-threads{overflow-y:auto!important;}
          body .chat-list.cv-list .cv-row{min-height:74px!important;align-items:center!important;}
          body .chat-list.cv-list .cv-body{min-width:0!important;overflow:hidden!important;}
          body .chat-list.cv-list .cv-top,
          body .chat-list.cv-list .cv-name,
          body .chat-list.cv-list .cv-last,
          body .chat-list.cv-list .cv-sub{min-width:0!important;max-width:100%!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;}
        }
      `;
      document.head.appendChild(st);
    }catch(e){}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ww201InstallStyle,{once:true}); else ww201InstallStyle();

  function ww201CurrentUserPayload(){
    try{const u=(typeof me==='function')?me():null;return u&&u.id?{type:'ww-current-user',userId:String(u.id),role:u.role||'',name:u.name||''}:null;}catch(e){return null;}
  }
  function ww201PostCurrentUserToSW(){
    try{
      const payload=ww201CurrentUserPayload(); if(!payload||!('serviceWorker' in navigator))return;
      try{localStorage.setItem('ww_current_user_id',payload.userId);}catch(e){}
      if(navigator.serviceWorker.controller)navigator.serviceWorker.controller.postMessage(payload);
      navigator.serviceWorker.ready.then(reg=>{try{if(reg&&reg.active)reg.active.postMessage(payload);}catch(e){}}).catch(()=>{});
    }catch(e){}
  }
  window.__WW_POST_CURRENT_USER_TO_SW=ww201PostCurrentUserToSW;
  ['load','focus','visibilitychange'].forEach(ev=>window.addEventListener(ev,()=>{if(document.visibilityState!=='hidden')setTimeout(ww201PostCurrentUserToSW,50);},{passive:true}));
  document.addEventListener('click',()=>setTimeout(ww201PostCurrentUserToSW,50),true);
  try{
    const oldRegisterPushSubscription=registerPushSubscription;
    registerPushSubscription=async function(force){
      const result=await oldRegisterPushSubscription.apply(this,arguments);
      ww201PostCurrentUserToSW();
      return result;
    };
  }catch(e){}
  try{
    const oldRender=render;
    render=function(){
      const out=oldRender.apply(this,arguments);
      setTimeout(ww201PostCurrentUserToSW,0);
      return out;
    };
  }catch(e){}

  // Extra local/foreground de-dupe: same tag or same title/body in a short window is ignored.
  try{
    const oldNotifyLocalUser=notifyLocalUser;
    const recent={};
    notifyLocalUser=function(title,body,opts){
      opts=opts||{};
      const data=opts.data||{};
      const current=ww201CurrentUserPayload();
      const sender=String(data.authorId||data.senderId||'');
      if(current&&sender&&sender===current.userId)return;
      const key=String(opts.tag||data.tag||data.messageId||data.alertId||'') || (String(title||'')+'|'+String(body||'').slice(0,90));
      const now=Date.now();
      Object.keys(recent).forEach(k=>{if(now-recent[k]>4*60*1000)delete recent[k];});
      if(key&&recent[key])return;
      if(key)recent[key]=now;
      return oldNotifyLocalUser.call(this,title,body,opts);
    };
  }catch(e){}
})();
/* WW_V201_CHAT_ONLINE_PUSH_CLEANUP_END */


state=loadState();
scheduleNextWeekRosterImportV105();
// After a fresh reset, persist the clean state locally right away.
if(__didFreshReset){
  try{ saveLocalState(state); }catch(e){}
}
renderNow();
setTimeout(()=>{try{applyNotificationDeepLinkFromUrl();}catch(e){}},0);
// DATA SAFETY: the cloud is the permanent source of truth. On every startup we
// pull from the cloud and merge, so messages, roster, posts, notifications and
// documents are always restored — after logout, after an app update, or after a
// reinstall. We do NOT push a blank slate to the cloud anymore: if a reset ran
// (e.g. because a reinstall cleared local storage), we still pull the real data
// back from the cloud instead of overwriting it. The very first clean-start push
// already happened, so this keeps real data safe forever.
startCloudSync();
startReminderScheduler();
startBookingReminderScheduler();
startAutoClockOutScheduler();
startAlwaysOnPhoneAlertKeepalive();

/* WW_MOBILE_IMPORTED_DIRECTORY_SYNC_V101: Staff and clients are preserved in mobile local cache and seed-only mobile state cannot overwrite shared cloud data. */

try{window.__WW_DESKTOP_FAST_V106=true;}catch(e){}


/* WW_V107_ROSTER_CHAT_CLEANUP_START
   Requested fixes only:
   - merge duplicate imported roster shifts instead of showing the same shift 4 times
   - show assigned employee names on roster cards
   - make chat delete permanent from the user's list
   - move read/unread/archive/delete controls to press-and-hold / right-click / swipe
*/
(function(){
  try{window.__WW_V107_ROSTER_CHAT_CLEANUP=true;}catch(e){}

  function v107Now(){try{return nowIso();}catch(e){return new Date().toISOString();}}
  function v107SafeArr(v){return Array.isArray(v)?v:[];}
  function v107CleanId(v){return String(v||'').trim();}
  function v107UserCanHide(t,u){try{return !!userCanHideThread(t,u);}catch(e){return !!(t&&u&&!(t.id==='team-all'||t.id==='announce'||t.id==='before-after'||t.type==='team'||t.type==='announcement'||t.type==='workphotos'));}}
  function v107HardDeleteMap(uid){
    if(!state.chatHardDeleted)state.chatHardDeleted={};
    if(!state.chatHardDeleted[uid])state.chatHardDeleted[uid]={};
    return state.chatHardDeleted[uid];
  }
  function v107IsHardDeleted(tid,uid){return !!(state&&state.chatHardDeleted&&state.chatHardDeleted[uid]&&state.chatHardDeleted[uid][tid]);}

  function v107ShiftKey(s){
    if(!s||s._deleted)return '';
    const date=v107CleanId(s.date), start=v107CleanId(s.start), end=v107CleanId(s.end), client=v107CleanId(s.clientId);
    if(!date||!start||!end||!client)return '';
    return [date,start,end,client].join('|');
  }
  function v107IsNextWeekShift(s){
    if(!s||s._deleted)return false;
    const d=String(s.date||'');
    return (d>='2026-06-29'&&d<='2026-07-05') || String(s.source||'').includes('next-week-roster') || String(s.sourceKey||'').indexOf('ww-v105-')===0;
  }
  function v107DedupeRosterShifts(){
    if(!state||!Array.isArray(state.shifts))return 0;
    const by=new Map();let changed=0;
    state.shifts.forEach(s=>{
      if(!v107IsNextWeekShift(s))return;
      const key=v107ShiftKey(s); if(!key)return;
      const keep=by.get(key);
      if(!keep){by.set(key,s);return;}
      const mergedIds=new Set([...(keep.employeeIds||[]),...(s.employeeIds||[])]);
      const nextIds=[...mergedIds].filter(Boolean);
      if(JSON.stringify(keep.employeeIds||[])!==JSON.stringify(nextIds)){keep.employeeIds=nextIds;changed++;}
      if((s.status==='Published'||keep.status==='Published')&&keep.status!=='Published'){keep.status='Published';changed++;}
      if(!keep.sourceKey&&s.sourceKey){keep.sourceKey=s.sourceKey;changed++;}
      if(!keep.source&&s.source){keep.source=s.source;changed++;}
      if(!keep.notes&&s.notes){keep.notes=s.notes;changed++;}
      s._deleted=true;s.updatedAt=v107Now();changed++;
      keep.updatedAt=v107Now();
    });
    if(changed){
      state.shifts=state.shifts.filter(s=>!(s&&s._deleted));
      state.rosterImports=state.rosterImports||{};
      const key='ww-next-week-roster-jun29-jul5-v105';
      const batch=state.rosterImports[key]||{};
      batch.completed=true;batch.cleanedAt=v107Now();batch.duplicatesRemoved=(batch.duplicatesRemoved||0)+changed;
      state.rosterImports[key]=batch;
    }
    return changed;
  }

  function v107AssignedNames(s,full){
    try{
      const names=(s.employeeIds||[]).map(id=>userById(id)).filter(Boolean).map(p=>full?p.name:(p.name||'').split(' ')[0]).filter(Boolean);
      return [...new Set(names)].join(', ');
    }catch(e){return '';}
  }

  try{
    const __v107OldShiftCard=shiftCard;
    shiftCard=function(s,u,admin){
      const c=clientById(s.clientId);
      const published=isShiftPublished(s);
      const t=shiftTheme(s);
      const startT=fmtTime(s.start), endT=fmtTime(s.end);
      const team=(s.employeeIds||[]).map(id=>userById(id)).filter(Boolean);
      const actions=admin?'':employeeShiftActions(s,u);
      const empResp=!admin?state.shiftResponses[`${s.id}:${u.id}`]:null;
      const rejected=empResp==='declined';
      const statusPill=admin
        ? (!published?`<span class="rc-status rc-draft-tag">${svg('edit')} Draft · not published</span>`:'')
        : (rejected?`<span class="rc-status rejected">${svg('x')} Rejected</span>`:empResp==='accepted'?`<span class="rc-status accepted">${svg('check')} Accepted</span>`:'');
      const startHM=startT.replace(/(am|pm)/,'').trim();
      const ap=(startT.match(/am|pm/)||[''])[0].toUpperCase();
      const staffNames=v107AssignedNames(s,false);
      const addr=c&&c.address?escapeHtml(c.address):'';
      const meta=[addr?`<span class="rc-addr-line">${addr}</span>`:'', staffNames?`<span class="rc-staff-line"><span class="rc-staff-kicker">STAFF</span><span class="rc-staff-names">${escapeHtml(staffNames)}</span></span>`:''].filter(Boolean).join('');
      return `
      <div class="rcard ${published?'is-published':'is-draft'} ${admin?'is-admin':'is-emp'} ${rejected?'is-rejected':''}" data-action="shift-open" data-id="${s.id}" style="--solid:${t.solid};--deep:${t.deep};--accent:${t.accent};--pop:${t.pop}">
        ${rejected?`<span class="rc-reject-stamp">Rejected</span>`:''}
        <div class="rc-main">
          <div class="rc-badge"><strong>${startHM}</strong><span class="rc-ap">${ap}</span><span class="rc-dur">${fmtDur(s.start,s.end)}</span></div>
          <div class="rc-info">
            <h3>${c?escapeHtml(c.name):'Unassigned'}</h3>
            <div class="rc-time-range">${startT}–${endT}</div>
            ${statusPill}
          </div>
          <div class="rc-actions-row">${actions}</div>
          <div class="rc-meta rc-meta-full">${meta}</div>
        </div>
      </div>`;
    };
  }catch(e){}

  try{
    const __v107OldRosterGridCard=rosterGridCard;
    rosterGridCard=function(s,date){
      const c=clientById(s.clientId);
      const t=shiftTheme(s);
      const published=isShiftPublished(s);
      const staff=v107AssignedNames(s,false);
      return `<div class="rgc ${published?'pub':'draft'}" style="--accent:${t.solid};--accent-deep:${t.deep}" data-action="shift-open" data-id="${s.id}">
        <div class="rgc-main">
          <div class="rgc-row1"><span class="rgc-time">${fmtTime(s.start)}–${fmtTime(s.end)}</span><span class="rgc-dur">${fmtDur(s.start,s.end)}</span></div>
          <div class="rgc-row2"><span class="rgc-dot ${published?'pub':'draft'}" title="${published?'Published':'Draft'}"></span><span class="rgc-client">${c?escapeHtml(c.name):'Unassigned'}</span></div>
          ${staff?`<div class="rgc-staff"><span class="rgc-staff-kicker">STAFF</span><span class="rgc-staff-names">${escapeHtml(staff)}</span></div>`:''}
        </div>
        <div class="rgc-tools">
          <button class="rgc-tool t-assign" data-action="edit-shift" data-id="${s.id}" title="Assign / edit">${svg('edit')}</button>
          <button class="rgc-tool t-publish" data-action="toggle-publish" data-id="${s.id}" title="${published?'Unpublish':'Publish'}">${svg('eye')}</button>
          <button class="rgc-tool t-add" data-action="new-shift-on" data-date="${date||s.date}" title="Add another shift this day">${svg('plus')}</button>
          <button class="rgc-tool t-del" data-action="delete-shift" data-id="${s.id}" title="Delete">${svg('trash')}</button>
        </div>
      </div>`;
    };
  }catch(e){}

  try{
    const __v107OldMyThreads=myThreads;
    myThreads=function(u,opts){
      const uid=u&&u.id;
      const hard=(state&&state.chatHardDeleted&&uid&&state.chatHardDeleted[uid])||{};
      return __v107OldMyThreads(u,opts).filter(t=>!(hard&&hard[t.id]));
    };
    const __v107OldArchivedThreadCount=archivedThreadCount;
    archivedThreadCount=function(u){
      const uid=u&&u.id;
      const hard=(state&&state.chatHardDeleted&&uid&&state.chatHardDeleted[uid])||{};
      return baseUserThreads(u).filter(t=>!hard[t.id]&&!chatDeleteMap(u.id)[t.id]&&chatArchiveMap(u.id)[t.id]).length;
    };
  }catch(e){}

  function v107ChatActionModal(d){
    const u=me();const tid=d&&d.id;const t=(state.threads||[]).find(x=>x.id===tid);
    if(!u||!t)return modalShell('Chat options','<div class="empty"><p>Conversation not found.</p></div>',`<button class="btn btn-primary" data-action="close-modal">Close</button>`);
    const unread=isThreadUnread(t,u);
    const archived=!!(state.chatArchived&&state.chatArchived[u.id]&&state.chatArchived[u.id][tid]);
    const canHide=v107UserCanHide(t,u);
    const title=threadTitle(t,u);
    const sub=(typeof threadSub==='function')?threadSub(t,u):'';
    const avatar=(typeof threadAvatar==='function')?threadAvatar(t,u):'';
    const readRow=`<button class="ca-row" data-action="${unread?'chat-action-mark-read':'chat-action-mark-unread'}" data-id="${tid}">
        <span class="ca-ic ca-ic-read">${svg(unread?'check':'mail')}</span>
        <span class="ca-txt"><span class="ca-label">${unread?'Mark as read':'Mark as unread'}</span><span class="ca-desc">${unread?'Clear the unread dot on this chat':'Show this chat as unread'}</span></span>
      </button>`;
    const archiveRow=canHide?(archived
      ? `<button class="ca-row" data-action="chat-action-restore" data-id="${tid}">
          <span class="ca-ic ca-ic-archive">${svg('check')}</span>
          <span class="ca-txt"><span class="ca-label">Restore chat</span><span class="ca-desc">Move it back to your active chats</span></span>
        </button>`
      : `<button class="ca-row" data-action="chat-action-archive" data-id="${tid}">
          <span class="ca-ic ca-ic-archive">${svg('archive')}</span>
          <span class="ca-txt"><span class="ca-label">Archive chat</span><span class="ca-desc">Hide it without deleting anything</span></span>
        </button>`):'';
    const deleteRow=canHide?`<button class="ca-row ca-row-danger" data-action="chat-action-delete" data-id="${tid}">
        <span class="ca-ic ca-ic-danger">${svg('trash')}</span>
        <span class="ca-txt"><span class="ca-label">Delete conversation</span><span class="ca-desc">Remove it from your chat list</span></span>
      </button>`:'';
    const body=`
      <div class="ca-sheet">
        <div class="ca-head">
          <span class="ca-head-av">${avatar}</span>
          <span class="ca-head-text"><span class="ca-head-name">${escapeHtml(title)}</span>${sub?`<span class="ca-head-sub">${escapeHtml(sub)}</span>`:''}</span>
        </div>
        <div class="ca-actions">
          ${readRow}
          ${archiveRow}
          ${deleteRow}
        </div>
      </div>`;
    return modalShell('',body,`<button class="btn btn-ghost ca-cancel" data-action="close-modal">Cancel</button>`);
  }

  try{
    const __v107OldModalContent=modalContent;
    modalContent=function(){
      if(modal&&modal.type==='chat-actions')return v107ChatActionModal(modal.data||{});
      return __v107OldModalContent();
    };
  }catch(e){}

  function v107DeleteConversation(tid,opts){
    opts=opts||{};
    const u=me();if(!u||!tid)return false;
    const t=(state.threads||[]).find(x=>x.id===tid);if(!v107UserCanHide(t,u)){toast('This team chat cannot be deleted.');return false;}
    // Delete instantly — no warning popup.
    chatDeleteMap(u.id)[tid]=v107Now();
    v107HardDeleteMap(u.id)[tid]=v107Now();
    if(state.chatArchived&&state.chatArchived[u.id])delete state.chatArchived[u.id][tid];
    if(state.activeThreadId===tid){state.activeThreadId='';state.chatMobileThread=false;}
    state.showArchivedChats=false;
    saveRealtime();closeModal();render();toast('Conversation deleted');return true;
  }
  function v107ArchiveConversation(tid){
    const u=me();const t=(state.threads||[]).find(x=>x.id===tid);if(!v107UserCanHide(t,u))return;
    chatArchiveMap(u.id)[tid]=v107Now();
    if(state.activeThreadId===tid){state.activeThreadId='';state.chatMobileThread=false;}
    saveRealtime();closeModal();render();toast('Chat archived');
  }
  function v107RestoreConversation(tid){
    const u=me();if(!u)return;
    if(state.chatArchived&&state.chatArchived[u.id])delete state.chatArchived[u.id][tid];
    state.showArchivedChats=false;state.activeThreadId=tid;state.chatMobileThread=false;
    saveRealtime();closeModal();render();toast('Chat restored');
  }

  document.addEventListener('click',function(e){
    const el=e.target&&e.target.closest?e.target.closest('[data-action]'):null;if(!el)return;
    const a=el.dataset.action;
    if(['chat-action-mark-read','chat-action-mark-unread','chat-action-archive','chat-action-restore','chat-action-delete'].indexOf(a)<0)return;
    e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
    const tid=el.dataset.id;const u=me();
    if(a==='chat-action-mark-read'){markThreadRead(tid,u);saveRealtime();closeModal();render();toast('Marked as read');return;}
    if(a==='chat-action-mark-unread'){setThreadManualUnread(tid,u);saveRealtime();closeModal();render();toast('Marked as unread');return;}
    if(a==='chat-action-archive'){v107ArchiveConversation(tid);return;}
    if(a==='chat-action-restore'){v107RestoreConversation(tid);return;}
    if(a==='chat-action-delete'){v107DeleteConversation(tid);return;}
  },true);

  function v107OpenChatActions(tid){
    const t=(state.threads||[]).find(x=>x.id===tid), u=me();
    if(!t||!u)return;
    openModal('chat-actions',{id:tid});
  }

  let lpTimer=null, lpRow=null, lpStartX=0, lpStartY=0, lpTriggered=false, swipeReady=false;
  document.addEventListener('pointerdown',function(e){
    const row=e.target&&e.target.closest?e.target.closest('.cv-row[data-action="thread"]'):null;
    if(!row||e.target.closest('.cv-readtoggle,.cv-mini-action,.cv-pintag'))return;
    lpRow=row;lpTriggered=false;swipeReady=false;lpStartX=e.clientX;lpStartY=e.clientY;
    clearTimeout(lpTimer);
    lpTimer=setTimeout(()=>{if(lpRow){lpTriggered=true;v107OpenChatActions(lpRow.dataset.id);}},560);
  },true);
  document.addEventListener('pointermove',function(e){
    if(!lpRow)return;
    const dx=e.clientX-lpStartX, dy=e.clientY-lpStartY;
    if(Math.abs(dx)>8||Math.abs(dy)>8)clearTimeout(lpTimer);
    if(dx<0&&Math.abs(dx)>18&&Math.abs(dy)<42){
      const pull=Math.max(-92,dx);
      lpRow.classList.add('ww-swipe-peek');
      lpRow.style.transform=`translateX(${pull}px)`;
      swipeReady=dx<-82;
    }
  },true);
  function v107ResetGesture(e){
    clearTimeout(lpTimer);
    if(!lpRow)return;
    const row=lpRow, tid=row.dataset.id;
    row.style.transform='';row.classList.remove('ww-swipe-peek');lpRow=null;
    if(lpTriggered){window.__wwV107SuppressNextClick=true;setTimeout(()=>{window.__wwV107SuppressNextClick=false;},450);return;}
    if(swipeReady){
      window.__wwV107SuppressNextClick=true;setTimeout(()=>{window.__wwV107SuppressNextClick=false;},450);
      setTimeout(()=>v107DeleteConversation(tid),20);
    }
  }
  document.addEventListener('pointerup',v107ResetGesture,true);
  document.addEventListener('pointercancel',v107ResetGesture,true);
  document.addEventListener('contextmenu',function(e){
    const row=e.target&&e.target.closest?e.target.closest('.cv-row[data-action="thread"]'):null;if(!row)return;
    e.preventDefault();e.stopPropagation();v107OpenChatActions(row.dataset.id);
  },true);
  document.addEventListener('click',function(e){
    if(window.__wwV107SuppressNextClick){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();}
  },true);

  try{
    const changed=v107DedupeRosterShifts();
    if(changed){saveRealtime();}
  }catch(e){}
  try{
    const __v107OldApplyRemoteState=applyRemoteState;
    applyRemoteState=function(remote){
      __v107OldApplyRemoteState(remote);
      try{const changed=v107DedupeRosterShifts();if(changed){saveLocalState(state);queueCloudSync();render();}}catch(e){}
    };
  }catch(e){}
  try{render();}catch(e){}
})();
/* WW_V107_ROSTER_CHAT_CLEANUP_END */

/* WW_V109_CHAT_STABILITY_RUNTIME_START
   Stability pass: keeps the app smooth, avoids render throttling glitches in Messages,
   makes mobile roster staff names clearer, and removes delete warning popups. */
(function(){
  try{window.__WW_V109_CHAT_STABILITY=true;}catch(e){}

  try{
    if(!document.getElementById('ww-v109-chat-stability-runtime')){
      const st=document.createElement('style');
      st.id='ww-v109-chat-stability-runtime';
      st.textContent=`
html,body,#app,.shell,.main,.content{scroll-behavior:auto!important;overscroll-behavior-y:contain!important}
.page{animation:none!important;opacity:1!important;transform:none!important;will-change:auto!important}
.page,.modal,.modal-overlay,.sheet,.drawer,.toast,.rcard,.rgc,.nav-item,.mobile-nav,.fresh-mobile-menu,.btn,.icon-btn{transition:none!important;animation:none!important}
.live-dot,.presence-dot,.dot,.pulse,.ring-fg{animation:none!important;transition:none!important}
.cv-row{transition:none!important;animation:none!important;will-change:auto!important}
.cv-row.ww-swipe-peek{transition:transform .08s linear!important}
.chat-scroll{contain:none!important;will-change:auto!important}
.typing-row{display:flex!important;align-items:center!important;gap:8px!important;margin:4px 0 2px 38px!important;color:#315b38!important;font-size:12px!important;font-weight:800!important}
.typing-dots{display:inline-flex!important;gap:3px!important;align-items:center!important}
.typing-dots i{width:5px!important;height:5px!important;border-radius:50%!important;background:#3f7248!important;display:block!important}
@media (min-width:1024px){
  .rc-meta .rc-staff-line,.home-roster-list .rc-meta .rc-staff-line,.rgc-staff{display:none!important;visibility:hidden!important;height:0!important;max-height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}
  .rc-meta{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
  .content,.page,.roster-page,.week-grid,.wk-grid,.dashboard-grid{contain:layout paint!important}
  .modal,.panel,.card,.shift-card,.wk-shift,.rgc,.rcard,.cv-row{will-change:auto!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
}
@media (max-width:1023px){
  .rgc-staff{
    display:inline-flex!important;align-items:center!important;gap:8px!important;margin-top:7px!important;
    padding:4px 11px 4px 4px!important;border-radius:999px!important;
    background:#ffffff!important;
    background:color-mix(in srgb, var(--accent-deep,#163f24) 88%, #000 12%)!important;color:#fff!important;
    border:1px solid rgba(255,255,255,.20)!important;box-shadow:0 4px 12px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,255,255,.16)!important;
    font-size:12.6px!important;font-weight:900!important;line-height:1.1!important;letter-spacing:-.005em!important;
    width:auto!important;max-width:100%!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;
  }
  .rgc-staff-kicker{display:inline-flex!important;align-items:center!important;justify-content:center!important;height:21px!important;padding:0 9px!important;border-radius:999px!important;background:#7fb56a!important;color:#10240f!important;font-size:9.6px!important;font-weight:900!important;letter-spacing:.09em!important;flex:0 0 auto!important;text-shadow:none!important;box-shadow:0 1px 2px rgba(0,0,0,.18)!important}
  .rgc-staff-names{display:block!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;color:#ffffff!important;font-weight:900!important}
  .rc-meta{display:block!important;white-space:normal!important}
  .rc-meta .rc-staff-line{
    display:inline-flex!important;align-items:center!important;gap:8px!important;margin-top:8px!important;padding:5px 12px 5px 5px!important;border-radius:999px!important;
    background:#173b23!important;
    background:color-mix(in srgb, var(--deep,#163f24) 88%, #000 12%)!important;color:#fff!important;
    border:1px solid rgba(255,255,255,.20)!important;box-shadow:0 4px 12px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,255,255,.16)!important;
    font-size:13.2px!important;font-weight:900!important;line-height:1.2!important;letter-spacing:-.005em!important;
    width:auto!important;max-width:100%!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;
  }
  .rc-meta .rc-staff-line .rc-staff-kicker{display:inline-flex!important;align-items:center!important;justify-content:center!important;height:23px!important;padding:0 10px!important;border-radius:999px!important;background:#7fb56a!important;color:#10240f!important;font-size:9.8px!important;font-weight:900!important;letter-spacing:.09em!important;flex:0 0 auto!important;text-shadow:none!important;box-shadow:0 1px 2px rgba(0,0,0,.2)!important}
  .rc-meta .rc-staff-line .rc-staff-names{display:block!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;color:#ffffff!important;font-weight:900!important}
  .content{-webkit-overflow-scrolling:touch!important}
}
`;
      document.head.appendChild(st);
    }
  }catch(e){}

  try{
    // Remove delete warning popups. Non-delete confirmations keep working.
    if(!window.__wwDeleteConfirmPatched){
      window.__wwDeleteConfirmPatched=true;
      const realConfirm=window.confirm.bind(window);
      window.confirm=function(msg){
        const text=String(msg||'');
        if(/delete|permanently delete|remove from your list|erase|trash/i.test(text))return true;
        return realConfirm(msg);
      };
    }
  }catch(e){}

  function v109TypingHtml(){
    try{
      if(!state||state.activeTab!=='chat'||!state.activeThreadId)return '';
      const names=whoIsTyping(state.activeThreadId)||[];
      if(!names.length)return '';
      const copy=names.length===1?names[0]+' is typing':names.slice(0,2).join(', ')+' are typing';
      return '<div class="typing-row"><span class="typing-dots"><i></i><i></i><i></i></span><span class="typing-text">'+escapeHtml(copy)+'…</span></div>';
    }catch(e){return '';}
  }
  window.__wwV109UpdateTypingIndicator=function(){
    try{
      const sc=document.getElementById('chatScroll');
      if(!sc)return;
      const nearBottom=(sc.scrollHeight-sc.scrollTop-sc.clientHeight)<90;
      sc.querySelectorAll('.typing-row').forEach(x=>x.remove());
      const html=v109TypingHtml();
      if(html)sc.insertAdjacentHTML('beforeend',html);
      if(nearBottom)sc.scrollTop=sc.scrollHeight;
    }catch(e){}
  };

  try{
    // Keep current user's manual unread map local-authoritative after this patch loads.
    mergeManualUnreadMaps=function(localObj,remoteObj){
      const l=(localObj&&typeof localObj==='object')?localObj:{};
      const r=(remoteObj&&typeof remoteObj==='object')?remoteObj:{};
      const current=(state&&state.sessionUserId)||'';
      const out={};
      const uids=new Set([...Object.keys(l),...Object.keys(r)]);
      uids.forEach(uid=>{
        if(uid===current)out[uid]={...(l[uid]||{})};
        else if(Object.prototype.hasOwnProperty.call(r,uid))out[uid]=r[uid]||{};
        else out[uid]=l[uid]||{};
      });
      return out;
    };
  }catch(e){}

  try{
    if(typeof applyRemoteState==='function'&&!applyRemoteState.__wwV109Wrapped){
      const realApply=applyRemoteState;
      const wrapped=function(remote){
        const before=JSON.stringify((state&&state.typing&&state.activeThreadId&&state.typing[state.activeThreadId])||{});
        const res=realApply.apply(this,arguments);
        const after=JSON.stringify((state&&state.typing&&state.activeThreadId&&state.typing[state.activeThreadId])||{});
        if(before!==after)setTimeout(()=>window.__wwV109UpdateTypingIndicator&&window.__wwV109UpdateTypingIndicator(),0);
        return res;
      };
      wrapped.__wwV109Wrapped=true;
      applyRemoteState=wrapped;
    }
  }catch(e){}

  try{
    // When opening a conversation, immediately clear the unread state locally and in cloud.
    document.addEventListener('click',function(e){
      const row=e.target&&e.target.closest?e.target.closest('.cv-row[data-action="thread"]'):null;
      if(!row||window.__wwV107SuppressNextClick)return;
      const u=me&&me();
      if(u&&row.dataset.id){markThreadRead(row.dataset.id,u);try{saveLocalState(state);queueCloudSync&&queueCloudSync();}catch(_){}}
    },true);
  }catch(e){}

  try{
    const changed=(typeof v107DedupeRosterShifts==='function')?v107DedupeRosterShifts():false;
    if(changed){try{saveLocalState(state);queueCloudSync&&queueCloudSync();}catch(e){}}
  }catch(e){}
})();
/* WW_V109_CHAT_STABILITY_RUNTIME_END */



/* WW_V128_PERSON_ACTIONS_START */
(function(){try{
  if(document.getElementById('ww-v128-person-actions'))return;
  const st=document.createElement('style');st.id='ww-v128-person-actions';
  st.textContent=`
  .modal-foot:has(.person-actionbar){display:block!important;padding:12px 14px calc(14px + var(--safe-b))!important;background:linear-gradient(180deg,#fffdf7,#f3efe6)!important;border-top:1px solid rgba(59,88,55,.13)!important}
  .person-actionbar{width:100%!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:9px!important;align-items:stretch!important}
  .modal-foot .person-actionbar .btn.person-action{height:43px!important;min-width:0!important;width:100%!important;flex:none!important;border-radius:15px!important;padding:0 10px!important;font-size:12.8px!important;font-weight:900!important;line-height:1.1!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;white-space:normal!important;text-align:center!important;box-shadow:0 5px 14px rgba(28,42,30,.08)!important}
  .person-action svg{width:15px!important;height:15px!important;flex:0 0 15px!important;stroke-width:2.4!important}
  .person-action.soft{background:linear-gradient(180deg,#e8f0df,#dbe8d2)!important;color:#214c2b!important;border:1px solid rgba(47,88,50,.16)!important}
  .person-action.ghost{background:#fffdf8!important;color:#274b2c!important;border:1px solid rgba(54,78,51,.18)!important}
  .person-action.danger,.person-action.admin-off{background:linear-gradient(180deg,#fff8f5,#f7ebe6)!important;color:#a33b32!important;border:1px solid rgba(163,59,50,.22)!important}
  .person-action.admin-on{background:linear-gradient(180deg,#f4ead7,#e6d2ac)!important;color:#5a3d18!important;border:1px solid rgba(139,94,38,.22)!important}
  .person-action.primary{background:linear-gradient(180deg,#315d38,#173d25)!important;color:#fffaf0!important;border:1px solid rgba(255,255,255,.12)!important;box-shadow:0 10px 22px rgba(23,61,37,.26)!important}
  @media(min-width:720px){.person-actionbar{grid-template-columns:repeat(3,minmax(0,1fr))!important}.modal-foot .person-actionbar .btn.person-action{height:42px!important}}
  @media(max-width:390px){.modal-foot .person-actionbar .btn.person-action{font-size:11.5px!important;padding:0 7px!important}.person-actionbar{gap:7px!important}}
  `;
  document.head.appendChild(st);
}catch(e){}})();
/* WW_V128_PERSON_ACTIONS_END */


/* WW_V129_INDIVIDUAL_MESSAGE_DELETE_START
   Adds long-press delete for individual chat messages. No other app areas changed. */
(function(){
  try{window.__WW_MENU_VERSION='v129-individual-message-delete';}catch(e){}

  function v129Now(){try{return nowIso();}catch(e){return new Date().toISOString();}}
  function v129DeletedMap(){
    if(!state.deletedMessages)state.deletedMessages={};
    return state.deletedMessages;
  }
  function v129FindThread(tid){return (state.threads||[]).find(t=>t&&t.id===tid);}
  function v129MessageAllowed(t,m,u){
    if(!t||!m||!u)return false;
    // Admin can remove any message. Staff can remove their own messages.
    return u.role==='admin' || m.authorId===u.id;
  }
  function v129DeleteMessage(tid,mid){
    const u=me&&me();
    const t=v129FindThread(tid);
    if(!t||!mid||!Array.isArray(t.messages))return false;
    const m=t.messages.find(x=>x&&x.id===mid);
    if(!m){return false;}
    if(!v129MessageAllowed(t,m,u)){toast('You can only delete your own messages.');return false;}
    const ts=v129Now();
    v129DeletedMap()[mid]=ts;
    // Keep a tombstone briefly so remote/cloud copies with the old message do not revive it.
    m._deleted=true;m.text='';m.attachments=[];m.attachment=null;m.comments=[];m.updatedAt=ts;m.deletedAt=ts;m.deletedBy=u&&u.id;
    t.messages=t.messages.filter(x=>x&&x.id!==mid);
    t.updatedAt=ts;
    try{closeModal();}catch(e){}
    try{saveLocalState(state);}catch(e){}
    try{queueCloudSync&&queueCloudSync();}catch(e){}
    try{pushCloudSync&&pushCloudSync();}catch(e){}
    try{render();setTimeout(scrollChat,0);}catch(e){}
    try{toast('Message deleted');}catch(e){}
    return true;
  }
  function v129MsgActionsModal(d){
    const tid=d&&d.threadId, mid=d&&d.msgId;
    const t=v129FindThread(tid);
    const m=t&&Array.isArray(t.messages)?t.messages.find(x=>x&&x.id===mid):null;
    const u=me&&me();
    if(!t||!m)return modalShell('Message options','<div class="empty"><p>Message not found.</p></div>',`<button class="btn btn-primary" data-action="close-modal">Close</button>`);
    const canDelete=v129MessageAllowed(t,m,u);
    const body=`<div class="msg-action-sheet">
      <div class="msg-action-preview"><strong>Message</strong><span>${escapeHtml((m.text||'Photo / attachment message').slice(0,140))}</span></div>
      ${canDelete?`<button class="msg-action-row danger" data-action="delete-single-message" data-thread="${tid}" data-msg="${mid}">${svg('trash')}<span><b>Delete message</b><em>Remove this message from the chat</em></span></button>`:`<div class="msg-action-note">Only the sender or an admin can delete this message.</div>`}
    </div>`;
    return modalShell('',body,`<button class="btn btn-ghost" data-action="close-modal">Cancel</button>`);
  }
  try{
    const oldModalContent=modalContent;
    modalContent=function(){
      if(modal&&modal.type==='message-actions')return v129MsgActionsModal(modal.data||{});
      return oldModalContent();
    };
  }catch(e){}

  document.addEventListener('click',function(e){
    const el=e.target&&e.target.closest?e.target.closest('[data-action="delete-single-message"]'):null;
    if(!el)return;
    e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
    v129DeleteMessage(el.dataset.thread,el.dataset.msg);
  },true);

  function v129OpenMsgActions(msgEl){
    if(!msgEl)return;
    const mid=msgEl.dataset.mid, tid=msgEl.dataset.thread||((state&&state.activeThreadId)||'');
    if(!mid||!tid)return;
    openModal('message-actions',{threadId:tid,msgId:mid});
  }
  let mLpTimer=null,mLpEl=null,mStartX=0,mStartY=0,mTriggered=false;
  document.addEventListener('pointerdown',function(e){
    const msg=e.target&&e.target.closest?e.target.closest('.chat-thread .msg[data-mid]'):null;
    if(!msg||e.target.closest('[data-action],button,a,input,textarea,.chat-editbox'))return;
    mLpEl=msg;mTriggered=false;mStartX=e.clientX;mStartY=e.clientY;
    clearTimeout(mLpTimer);
    mLpTimer=setTimeout(()=>{if(mLpEl){mTriggered=true;v129OpenMsgActions(mLpEl);}},520);
  },true);
  document.addEventListener('pointermove',function(e){
    if(!mLpEl)return;
    if(Math.abs(e.clientX-mStartX)>10||Math.abs(e.clientY-mStartY)>10)clearTimeout(mLpTimer);
  },true);
  function clearMsgLp(e){
    clearTimeout(mLpTimer);
    if(mTriggered){
      try{e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();}catch(_){}
      window.__wwV129SuppressClick=true;setTimeout(()=>{window.__wwV129SuppressClick=false;},350);
    }
    mLpEl=null;mTriggered=false;
  }
  document.addEventListener('pointerup',clearMsgLp,true);
  document.addEventListener('pointercancel',clearMsgLp,true);
  document.addEventListener('contextmenu',function(e){
    const msg=e.target&&e.target.closest?e.target.closest('.chat-thread .msg[data-mid]'):null;
    if(!msg)return;
    e.preventDefault();e.stopPropagation();v129OpenMsgActions(msg);
  },true);
  document.addEventListener('click',function(e){
    if(window.__wwV129SuppressClick){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();}
  },true);

  try{
    if(!document.getElementById('ww-v129-individual-message-delete')){
      const st=document.createElement('style');st.id='ww-v129-individual-message-delete';
      st.textContent=`
.msg[data-mid]{-webkit-touch-callout:none;touch-action:manipulation}.msg-action-sheet{display:grid;gap:10px;padding:2px 0 4px}.msg-action-preview{display:grid;gap:5px;padding:12px 13px;border-radius:17px;background:linear-gradient(180deg,#f8f4e9,#edf4e9);border:1px solid rgba(42,73,45,.14);color:#233b28}.msg-action-preview strong{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#60705d}.msg-action-preview span{font-size:14px;line-height:1.35;font-weight:750;word-break:break-word}.msg-action-row{height:auto;min-height:54px;border:0;border-radius:17px;display:flex;align-items:center;gap:12px;padding:10px 13px;background:#fff8f2;color:#9f302c;font-weight:900;box-shadow:inset 0 0 0 1px rgba(162,54,44,.18);text-align:left}.msg-action-row svg{width:21px;height:21px;flex:0 0 21px;stroke-width:2.6}.msg-action-row span{display:grid;gap:2px}.msg-action-row b{font-size:15px}.msg-action-row em{font-style:normal;font-size:12px;font-weight:750;color:#9a5b54}.msg-action-note{padding:12px 13px;border-radius:15px;background:#f4f1e8;color:#66705f;font-weight:800;font-size:13px}`;
      document.head.appendChild(st);
    }
  }catch(e){}
})();
/* WW_V129_INDIVIDUAL_MESSAGE_DELETE_END */


/* WW_V130_ADMIN_IN_EMPLOYEE_LIST_START */
(function(){try{
  if(!document.getElementById('ww-v130-admin-employee-badge')){
    const st=document.createElement('style');
    st.id='ww-v130-admin-employee-badge';
    st.textContent=`.dir-main strong{display:flex!important;align-items:center!important;gap:7px!important;flex-wrap:wrap!important}.dir-admin-badge{display:inline-flex!important;align-items:center!important;justify-content:center!important;height:20px!important;padding:0 8px!important;border-radius:999px!important;background:linear-gradient(180deg,#244f2f,#17371f)!important;color:#fff8e8!important;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",Roboto,system-ui,sans-serif!important;font-size:10px!important;font-weight:900!important;letter-spacing:.04em!important;text-transform:uppercase!important;line-height:1!important;box-shadow:0 2px 6px rgba(16,38,22,.18),inset 0 1px 0 rgba(255,255,255,.16)!important}.dir-admin-badge.mini{height:17px!important;padding:0 6px!important;font-size:8.5px!important;margin-left:5px!important;font-style:normal!important;vertical-align:middle!important}`;
    document.head.appendChild(st);
  }
}catch(e){}})();
/* WW_V130_ADMIN_IN_EMPLOYEE_LIST_END */


/* WW_V138_FULL_DIRECT_MESSAGES_START */
(function(){try{window.__WW_V138_FULL_DIRECT_MESSAGES=true;}catch(e){}})();
function wwV138DmId(a,b){
  return 'dm_'+[String(a||''),String(b||'')].sort().map(x=>x.replace(/[^a-zA-Z0-9_-]/g,'')).join('_');
}
function wwV138IsActiveMessageUser(p){
  return !!(p&&p.id&&p.status!=='archived'&&(p.role==='employee'||p.role==='admin'||!p.role));
}
function wwV138ActiveMessageUsers(){
  try{return (state.users||[]).filter(wwV138IsActiveMessageUser);}catch(e){return [];}
}
function wwV138ClearHiddenMapsForThread(userId,threadId){
  if(!userId||!threadId)return;
  try{ if(!state.chatArchived)state.chatArchived={}; if(state.chatArchived[userId])delete state.chatArchived[userId][threadId]; }catch(e){}
  try{ if(!state.chatDeleted)state.chatDeleted={}; if(state.chatDeleted[userId])delete state.chatDeleted[userId][threadId]; }catch(e){}
  try{ if(!state.chatHardDeleted)state.chatHardDeleted={}; if(state.chatHardDeleted[userId])delete state.chatHardDeleted[userId][threadId]; }catch(e){}
}
function wwV138FindExistingDm(a,b){
  const ids=[String(a||''),String(b||'')];
  return (state.threads||[]).filter(t=>t&&t.type==='dm'&&Array.isArray(t.memberIds)&&ids.every(id=>t.memberIds.includes(id)));
}
function wwV138MergeDmDuplicates(primary,dupes){
  if(!primary||!Array.isArray(dupes)||!dupes.length)return primary;
  const messages=[];
  [primary,...dupes].forEach(t=>{(t.messages||[]).forEach(m=>{if(m&&m.id)messages.push(m);});});
  const seen=new Set();
  primary.messages=messages.filter(m=>{if(seen.has(m.id))return false;seen.add(m.id);return true;}).sort((a,b)=>String(a.createdAt||a.clientCreatedAt||'').localeCompare(String(b.createdAt||b.clientCreatedAt||'')));
  primary.updatedAt=nowIso();
  dupes.forEach(t=>{if(t&&t.id!==primary.id){
    // Hide duplicate DM containers after merging their messages into the visible DM.
    t._deleted=true;t.updatedAt=nowIso();
    try{Object.keys(state.chatArchived||{}).forEach(uid=>delete state.chatArchived[uid][t.id]);}catch(e){}
    try{Object.keys(state.chatDeleted||{}).forEach(uid=>delete state.chatDeleted[uid][t.id]);}catch(e){}
    try{Object.keys(state.chatHardDeleted||{}).forEach(uid=>delete state.chatHardDeleted[uid][t.id]);}catch(e){}
  }});
  try{state.threads=state.threads.filter(t=>!(t&&t._deleted));}catch(e){}
  return primary;
}
function wwV138OpenDirectMessage(otherId,currentUser){
  const u=currentUser||me();
  if(!u||!otherId||otherId===u.id)return null;
  const other=wwV138ActiveMessageUsers().find(p=>p.id===otherId);
  if(!other)return null;
  if(!Array.isArray(state.threads))state.threads=[];
  const wantedId=wwV138DmId(u.id,otherId);
  const existing=wwV138FindExistingDm(u.id,otherId);
  let t=state.threads.find(x=>x&&x.id===wantedId) || existing.find(x=>x&&!((state.chatHardDeleted&&state.chatHardDeleted[u.id]&&state.chatHardDeleted[u.id][x.id])||(state.chatDeleted&&state.chatDeleted[u.id]&&state.chatDeleted[u.id][x.id]))) || existing[0];
  if(!t){
    t={id:wantedId,type:'dm',name:'',privacy:'private',memberIds:[u.id,otherId],messages:[],createdAt:nowIso(),updatedAt:nowIso()};
    state.threads.push(t);
  }else{
    if(!Array.isArray(t.memberIds))t.memberIds=[];
    [u.id,otherId].forEach(id=>{if(!t.memberIds.includes(id))t.memberIds.push(id);});
    if(t.type!=='dm')t.type='dm';
    if(!Array.isArray(t.messages))t.messages=[];
    t.updatedAt=nowIso();
  }
  const duplicates=existing.filter(x=>x&&x.id!==t.id);
  if(duplicates.length)t=wwV138MergeDmDuplicates(t,duplicates);
  // Opening/starting a DM should always resurrect it from the current user's hidden lists.
  wwV138ClearHiddenMapsForThread(u.id,t.id);
  // Also clear the deterministic id in case an older deleted placeholder blocked it.
  wwV138ClearHiddenMapsForThread(u.id,wantedId);
  state.showArchivedChats=false;
  state.chatSearch='';
  state.activeThreadId=t.id;
  state.chatMobileThread=true;
  try{__pinnedThreadId=t.id;__pinnedThreadUntil=Date.now()+15000;}catch(e){}
  try{markThreadRead(t.id,u);}catch(e){}
  saveRealtime();
  return t;
}
/* WW_V138_FULL_DIRECT_MESSAGES_END */

/* WW_V140_ROSTER_FULL_NAMES_LAST_MESSAGE_UNREAD_START
   Only requested changes: show full assigned staff names on mobile roster cards,
   and make Mark unread apply to the latest message only instead of the whole chat. */
(function(){
  try{window.__WW_V140_FULL_NAMES_LAST_MESSAGE_UNREAD=true;}catch(e){}

  function ww140Now(){try{return nowIso();}catch(e){return new Date().toISOString();}}
  function ww140MsgStamp(m){try{return recordStamp(m)||m.createdAt||m.updatedAt||'';}catch(e){return (m&&m.createdAt)||'';}}
  function ww140MsgEpoch(m){try{return messageTimeValue(m)||parseStampToEpoch(ww140MsgStamp(m))||0;}catch(e){return Date.parse(ww140MsgStamp(m)||'')||0;}}
  function ww140LastMessage(t){try{return lastMsg(t);}catch(e){return t&&Array.isArray(t.messages)&&t.messages.length?t.messages[t.messages.length-1]:null;}}
  function ww140FindThread(tid){return (state&&Array.isArray(state.threads)?state.threads:[]).find(t=>t&&t.id===tid);}
  function ww140ManualMap(uid){
    if(!state.threadManualUnread)state.threadManualUnread={};
    if(!state.threadManualUnread[uid])state.threadManualUnread[uid]={};
    return state.threadManualUnread[uid];
  }
  function ww140EntryFor(uid,tid){return state&&state.threadManualUnread&&state.threadManualUnread[uid]&&state.threadManualUnread[uid][tid];}
  function ww140EntryMatchesMessage(entry,m){
    if(!entry||!m)return false;
    if(entry===true)return true; // old saved data: treat as latest-message-only for compatibility
    if(entry.messageId&&m.id&&String(entry.messageId)===String(m.id))return true;
    const ea=String(entry.messageAt||entry.at||'');
    return !!(ea&&String(ww140MsgStamp(m)||'')===ea);
  }
  function ww140LastMessageIsManualUnread(uid,t){
    const lm=ww140LastMessage(t);if(!lm)return false;
    return ww140EntryMatchesMessage(ww140EntryFor(uid,t.id),lm);
  }
  function ww140FullAssignedNames(s){
    try{
      const seen=new Set();
      return (s.employeeIds||[]).map(id=>userById(id)).filter(Boolean).map(p=>String(p.name||'').trim().split(/\s+/)[0]).filter(Boolean).filter(n=>!seen.has(n)&&(seen.add(n),true)).join(', ');
    }catch(e){return '';}
  }
  function ww196FirstAssignedNames(s){
    try{
      const seen=new Set();
      return (s.employeeIds||[]).map(id=>userById(id)).filter(Boolean).map(p=>String(p.name||'').trim().split(/\s+/)[0]).filter(Boolean).filter(n=>!seen.has(n)&&(seen.add(n),true)).join(', ');
    }catch(e){return '';}
  }

  try{
    const oldMarkThreadRead=markThreadRead;
    markThreadRead=function(threadId,u){
      const res=oldMarkThreadRead?oldMarkThreadRead(threadId,u):undefined;
      try{const who=u||me();if(who&&state.threadManualUnread&&state.threadManualUnread[who.id])delete state.threadManualUnread[who.id][threadId];}catch(e){}
      return res;
    };
  }catch(e){}

  try{
    setThreadManualUnread=function(threadId,u){
      const who=u||me();if(!who||!threadId)return;
      const t=ww140FindThread(threadId);const lm=ww140LastMessage(t);
      if(!t||!lm)return;
      ww140ManualMap(who.id)[threadId]={
        latestOnly:true,
        messageId:lm.id||'',
        messageAt:ww140MsgStamp(lm)||ww140Now(),
        authorId:lm.authorId||'',
        updatedAt:ww140Now()
      };
      // Keep the conversation read up to just before the last message, so only
      // that bottom/latest message is treated as unread.
      try{
        const map=threadReadMap(who.id);
        const ms=ww140MsgEpoch(lm);
        map[threadId]=ms?new Date(Math.max(0,ms-1000)).toISOString():'';
      }catch(e){}
    };

    isThreadUnread=function(t,u){
      const who=u||me();if(!who||!t)return false;
      const lm=ww140LastMessage(t);if(!lm)return false;
      if(ww140LastMessageIsManualUnread(who.id,t))return true;
      if(lm.authorId===who.id)return false;
      const map=(state.threadReads&&state.threadReads[who.id])||{};
      const readAt=map[t.id];
      if(!readAt)return true;
      return (ww140MsgEpoch(lm)||0) > ((parseStampToEpoch(readAt)||Date.parse(readAt)||0)+500);
    };

    userHasReadMessage=function(userId,threadId,m){
      if(!userId||!threadId||!m)return false;
      const t=ww140FindThread(threadId);
      const entry=ww140EntryFor(userId,threadId);
      // Manual unread affects the latest/bottom message only.
      if(entry&&t&&ww140EntryMatchesMessage(entry,m)&&ww140EntryMatchesMessage(entry,ww140LastMessage(t)))return false;
      const readAt=state.threadReads&&state.threadReads[userId]&&state.threadReads[userId][threadId];
      if(!readAt)return false;
      return (parseStampToEpoch(readAt)||Date.parse(readAt)||0) >= (ww140MsgEpoch(m)||0)-500;
    };
  }catch(e){}

  try{
    shiftCard=function(s,u,admin){
      const c=clientById(s.clientId);
      const published=isShiftPublished(s);
      const t=shiftTheme(s);
      const startT=fmtTime(s.start), endT=fmtTime(s.end);
      const actions=admin?'':employeeShiftActions(s,u);
      const empResp=!admin?state.shiftResponses[`${s.id}:${u.id}`]:null;
      const rejected=empResp==='declined';
      const statusPill=admin
        ? (!published?`<span class="rc-status rc-draft-tag">${svg('edit')} Draft · not published</span>`:'')
        : (rejected?`<span class="rc-status rejected">${svg('x')} Rejected</span>`:empResp==='accepted'?`<span class="rc-status accepted">${svg('check')} Accepted</span>`:'');
      const startHM=startT.replace(/(am|pm)/,'').trim();
      const ap=(startT.match(/am|pm/)||[''])[0].toUpperCase();
      const staffNames=ww196FirstAssignedNames(s);
      const meta=[staffNames?`<span class="rc-staff-line" title="${escapeHtml(staffNames)}"><span class="rc-staff-kicker">STAFF</span><span class="rc-staff-names">${escapeHtml(staffNames)}</span></span>`:''].filter(Boolean).join('');
      return `
      <div class="rcard ${published?'is-published':'is-draft'} ${admin?'is-admin':'is-emp'} ${rejected?'is-rejected':''}" data-action="shift-open" data-id="${s.id}" style="--solid:${t.solid};--deep:${t.deep};--accent:${t.accent};--pop:${t.pop}">
        ${rejected?`<span class="rc-reject-stamp">Rejected</span>`:''}
        <div class="rc-main">
          <div class="rc-badge"><strong>${startHM}</strong><span class="rc-ap">${ap}</span><span class="rc-dur">${fmtDur(s.start,s.end)}</span></div>
          <div class="rc-info">
            <h3>${c?escapeHtml(c.name):'Unassigned'}</h3>
            <div class="rc-time-range">${startT}–${endT}</div>
            ${statusPill}
          </div>
          <div class="rc-actions-row">${actions}</div>
          <div class="rc-meta rc-meta-full">${meta}</div>
        </div>
      </div>`;
    };
  }catch(e){}

  try{
    if(!document.getElementById('ww-v140-roster-full-names')){
      const st=document.createElement('style');
      st.id='ww-v140-roster-full-names';
      st.textContent=`
@media (max-width:1023px){
  .roster-mobile .rcard .rc-meta,.home-roster-list .rcard .rc-meta,.rcard.is-emp .rc-meta{overflow:visible!important;text-overflow:clip!important;white-space:normal!important;line-height:1.22!important}
  .roster-mobile .rcard .rc-meta.rc-meta-full,.home-roster-list .rcard .rc-meta.rc-meta-full,.rcard.is-emp .rc-meta.rc-meta-full{width:100%!important;max-width:100%!important;flex:0 0 100%!important;align-self:stretch!important;display:block!important}
  .roster-mobile .rcard .rc-meta .rc-staff-line,.home-roster-list .rcard .rc-meta .rc-staff-line,.rcard.is-emp .rc-meta .rc-staff-line{display:inline-flex!important;grid-template-columns:unset!important;align-items:center!important;justify-content:flex-start!important;gap:7px!important;margin-top:5px!important;padding:3px 11px 3px 4px!important;border-radius:999px!important;background:#173b23!important;background:color-mix(in srgb,var(--deep,#163f24) 88%,#000 12%)!important;color:#fff!important;border:1px solid rgba(255,255,255,.20)!important;box-shadow:0 4px 12px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,255,255,.16)!important;width:fit-content!important;min-width:0!important;max-width:100%!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
  .roster-mobile .rcard .rc-meta .rc-staff-line .rc-staff-kicker,.home-roster-list .rcard .rc-meta .rc-staff-line .rc-staff-kicker,.rcard.is-emp .rc-meta .rc-staff-line .rc-staff-kicker{display:inline-flex!important;align-items:center!important;justify-content:center!important;height:20px!important;padding:0 9px!important;border-radius:999px!important;background:#7fb56a!important;color:#10240f!important;font-size:9.4px!important;font-weight:900!important;letter-spacing:.09em!important;line-height:1!important;flex:0 0 auto!important;text-shadow:none!important;box-shadow:0 1px 2px rgba(0,0,0,.2)!important}
  .roster-mobile .rcard .rc-meta .rc-staff-line .rc-staff-names,.home-roster-list .rcard .rc-meta .rc-staff-line .rc-staff-names,.rcard.is-emp .rc-meta .rc-staff-line .rc-staff-names{display:inline-flex!important;align-items:center!important;justify-content:center!important;text-align:center!important;width:auto!important;min-width:0!important;max-width:calc(100vw - 160px)!important;height:20px!important;padding:0!important;background:transparent!important;border:0!important;box-shadow:none!important;border-radius:0!important;color:#ffffff!important;font-weight:900!important;line-height:20px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;word-break:normal!important;flex:0 1 auto!important}
}`;
      document.head.appendChild(st);
    }
  }catch(e){}
})();
/* WW_V140_ROSTER_FULL_NAMES_LAST_MESSAGE_UNREAD_END */


/* WW_V178_LINKED_COLOURS_INSTANT_CHAT_START
   Requested only:
   1) selected shift colour must be the exact colour used on saved roster cards.
   2) messages + typing should feel instant/live for both sides. */
(function(){
  try{window.__WW_V178_LINKED_COLOURS_INSTANT_CHAT=true;}catch(e){}

  function ww178ThemeForKey(key,draft){
    try{
      if(key){const f=(SHIFT_THEMES||[]).find(t=>t&&t.key===key);if(f)return f;}
      return shiftTheme({...(draft||{}),colorKey:''});
    }catch(e){return (typeof SHIFT_THEMES!=='undefined'&&SHIFT_THEMES[0])||{solid:'#2e7b43',deep:'#1d542d',accent:'#7fb56a',pop:'#3aa05a',cardA:'#f0fbf0',cardB:'#cbe9ce',cardC:'#f4ecd9'};}
  }

  try{
    const oldPreview=applyShiftColourPreview;
    applyShiftColourPreview=function(key){
      key=key||'';
      const draft=(typeof collectShiftDraft==='function'?collectShiftDraft():(modal&&modal.data)||{});
      const t=ww178ThemeForKey(key,draft);
      // Keep the picker preview and the actual roster card variables identical.
      const section=document.querySelector('.shift-colour-section');
      if(section){
        section.style.setProperty('--cc-solid',t.solid);
        section.style.setProperty('--cc-deep',t.deep);
        section.style.setProperty('--cc-pop',t.pop);
        section.style.setProperty('--cc-a',t.cardA);
        section.style.setProperty('--cc-b',t.cardB);
        section.style.setProperty('--cc-c',t.cardC);
      }
      const input=document.getElementById('m_color');if(input)input.value=key;
      const lbl=document.getElementById('m_color_label');if(lbl)lbl.textContent=shiftColourName(key);
      document.querySelectorAll('.colour-option,.colour-sw').forEach(sw=>sw.classList.toggle('is-sel',(sw.dataset.key||'')===key));
      if(modal&&modal.data){modal.data.colorKey=key;modal.data.__colourPickerOpen=false;}
      if(section){section.classList.remove('is-open');section.classList.add('is-collapsed');}
      const head=document.querySelector('.shift-colour-head');if(head)head.setAttribute('aria-expanded','false');
      if(typeof oldPreview==='function'){
        // oldPreview also updates existing classes; run only after our data is locked.
        try{oldPreview(key);}catch(e){}
      }
    };
  }catch(e){}

  // Make sure every roster card, including later overrides, gets the selected saved colour.
  try{
    const oldShiftTheme=shiftTheme;
    shiftTheme=function(s){
      try{
        if(s&&s.colorKey){const found=(SHIFT_THEMES||[]).find(t=>t&&t.key===s.colorKey);if(found)return found;}
      }catch(e){}
      return oldShiftTheme?oldShiftTheme(s):ww178ThemeForKey('',s);
    };
  }catch(e){}

  function ww178ApplyRemoteTyping(map){
    try{
      if(!map||typeof map!=='object')return;
      state.typing=mergeTyping(state.typing||{},map)||{};
      saveLocalState(state);
      liveUpdateTyping();
    }catch(e){}
  }

  const oldApplyRemoteThreads=typeof applyRemoteThreads==='function'?applyRemoteThreads:null;
  try{
    applyRemoteThreads=function(remoteThreads){
      if(oldApplyRemoteThreads)return oldApplyRemoteThreads(remoteThreads);
    };
  }catch(e){}

  async function ww178PostTyping(threadId,isTyping){
    try{
      if(location.protocol==='file:'||!threadId)return;
      const u=me();if(!u)return;
      const payload={kind:'typing',threadId,userId:u.id,typing:!!isTyping,at:nowIso()};
      const r=await fetch(MESSAGE_SYNC_ENDPOINT,{method:'POST',headers:{'content-type':'application/json','accept':'application/json'},body:JSON.stringify(payload),cache:'no-store'});
      if(r&&r.ok){const data=await r.json();if(data&&data.typing)ww178ApplyRemoteTyping(data.typing);}
    }catch(e){}
  }

  try{
    pullMessageSync=async function(){
      if(location.protocol==='file:'||document.hidden||__msgSyncInFlight)return;
      if(!state||!state.sessionUserId)return;
      __msgSyncInFlight=true;
      try{
        const r=await fetch(MESSAGE_SYNC_ENDPOINT+'?live=1',{headers:{'accept':'application/json'},cache:'no-store'});
        if(r&&r.ok){
          const data=await r.json();
          if(data&&data.typing)ww178ApplyRemoteTyping(data.typing);
          if(data&&Array.isArray(data.threads))applyRemoteThreads(data.threads);
          liveUpdateTyping();
        }
      }catch(e){}
      __msgSyncInFlight=false;
    };
  }catch(e){}

  try{
    pushMessageToCloud=async function(threadId,msg){
      if(location.protocol==='file:'||!threadId||!msg)return;
      try{
        __msgPushInFlight=true;
        // Fast path: server gets it immediately, then all open chats see it on the live poll.
        const r=await fetch(MESSAGE_SYNC_ENDPOINT,{method:'POST',headers:{'content-type':'application/json','accept':'application/json'},body:JSON.stringify({threadId,message:msg}),cache:'no-store'});
        if(r&&r.ok){
          const data=await r.json();
          if(data&&data.typing)ww178ApplyRemoteTyping(data.typing);
          if(data&&Array.isArray(data.threads))applyRemoteThreads(data.threads);else if(data&&data.thread)applyRemoteThreads([data.thread]);
        }else queueCloudSync();
      }catch(e){queueCloudSync();}
      __msgPushInFlight=false;
    };
  }catch(e){}

  try{
    setTyping=function(threadId){
      const u=me();if(!u||!threadId)return;
      if(!state.typing)state.typing={};
      state.typing[threadId]=state.typing[threadId]||{};
      state.typing[threadId][u.id]=nowIso();
      saveLocalState(state);
      // Lightweight typing send; avoids full app cloud sync delay.
      ww178PostTyping(threadId,true);
    };
    clearTyping=function(threadId){
      const u=me();if(!u||!threadId)return;
      if(state.typing&&state.typing[threadId]&&state.typing[threadId][u.id])delete state.typing[threadId][u.id];
      saveLocalState(state);
      ww178PostTyping(threadId,false);
      liveUpdateTyping();
    };
  }catch(e){}

  try{
    const oldLive=liveUpdateTyping;
    liveUpdateTyping=function(){
      if(oldLive)oldLive();
      try{document.querySelectorAll('.typing-row').forEach(x=>x.classList.add('ww-live-typing'));}catch(e){}
    };
  }catch(e){}

  // Faster active-chat polling. It is lightweight (messages + typing only), not full app state.
  try{
    if(__msgSyncTimer){clearInterval(__msgSyncTimer);__msgSyncTimer=null;}
    startMessageLiveSync=function(){
      if(location.protocol==='file:'||__msgSyncTimer)return;
      setTimeout(pullMessageSync,60);
      setTimeout(pullMessageSync,260);
      __msgSyncTimer=setInterval(()=>{
        if(document.hidden)return;
        const inChat=state&&state.activeTab==='chat';
        const now=Date.now();
        const gap=inChat?180:2800;
        if(now-(__msgLastPullAt||0)>=gap){__msgLastPullAt=now;pullMessageSync();}
        if(inChat)liveUpdateTyping();
      },120);
    };
    startMessageLiveSync();
  }catch(e){}

  // Typing should disappear shortly after the user stops, not several seconds later.
  try{
    let ww178StopTypingTimer=null;
    document.addEventListener('input',function(e){
      if(!(e.target&&e.target.id==='chatInput'))return;
      const txt=getChatInputText(e.target);
      if(state&&state.activeThreadId&&txt){
        setTyping(state.activeThreadId);
        clearTimeout(ww178StopTypingTimer);
        ww178StopTypingTimer=setTimeout(()=>{try{clearTyping(state.activeThreadId);}catch(_e){}},850);
      }else if(state&&state.activeThreadId){
        clearTyping(state.activeThreadId);
      }
    },true);
    document.addEventListener('focusout',function(e){
      if(e.target&&e.target.id==='chatInput'&&state&&state.activeThreadId)setTimeout(()=>clearTyping(state.activeThreadId),80);
    },true);
  }catch(e){}
})();
/* WW_V178_LINKED_COLOURS_INSTANT_CHAT_END */

/* WW_V198_STAFFBAR_SKINNY_FIRSTNAMES_START
   Only requested change: make the existing staff-name bar skinny and keep first names centred on admin and employee roster cards, including accept/reject and accepted states. */
(function(){
  function addSkinnyStaffBarStyle(){
    try{
      var old=document.getElementById('ww-v198-staffbar-skinny-firstnames-runtime');
      if(old&&old.parentNode)old.parentNode.removeChild(old);
      var st=document.createElement('style');
      st.id='ww-v198-staffbar-skinny-firstnames-runtime';
      st.textContent=`/* WW_V198_STAFFBAR_SKINNY_FIRSTNAMES_START
   Requested only: make the existing employee-name STAFF bar skinny, keep the same colours/design, keep first names only, and keep the names centered vertically. */
@media (max-width:1023px){
  .roster-mobile .rcard .rc-meta,
  .home-roster-list .rcard .rc-meta,
  .rcard.is-emp .rc-meta{
    overflow:visible!important;
    text-overflow:clip!important;
    white-space:normal!important;
    line-height:1.15!important;
  }
  .roster-mobile .rcard .rc-meta.rc-meta-full,
  .home-roster-list .rcard .rc-meta.rc-meta-full,
  .rcard.is-emp .rc-meta.rc-meta-full{
    width:auto!important;
    max-width:100%!important;
    flex:0 0 100%!important;
    align-self:stretch!important;
    display:block!important;
  }
  .roster-mobile .rcard .rc-meta .rc-staff-line,
  .home-roster-list .rcard .rc-meta .rc-staff-line,
  .rcard.is-emp .rc-meta .rc-staff-line{
    display:inline-flex!important;
    grid-template-columns:unset!important;
    align-items:center!important;
    justify-content:flex-start!important;
    gap:6px!important;
    margin-top:4px!important;
    padding:2px 8px 2px 3px!important;
    min-height:22px!important;
    height:22px!important;
    border-radius:999px!important;
    background:#173b23!important;
    background:color-mix(in srgb,var(--deep,#163f24) 88%,#000 12%)!important;
    color:#fff!important;
    border:1px solid rgba(255,255,255,.20)!important;
    box-shadow:0 4px 12px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,255,255,.16)!important;
    width:fit-content!important;
    min-width:0!important;
    max-width:100%!important;
    white-space:nowrap!important;
    overflow:hidden!important;
    text-overflow:ellipsis!important;
    box-sizing:border-box!important;
  }
  .roster-mobile .rcard .rc-meta .rc-staff-line .rc-staff-kicker,
  .home-roster-list .rcard .rc-meta .rc-staff-line .rc-staff-kicker,
  .rcard.is-emp .rc-meta .rc-staff-line .rc-staff-kicker{
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    height:17px!important;
    min-height:17px!important;
    padding:0 8px!important;
    border-radius:999px!important;
    background:#7fb56a!important;
    color:#10240f!important;
    font-size:8.7px!important;
    font-weight:900!important;
    letter-spacing:.09em!important;
    line-height:17px!important;
    flex:0 0 auto!important;
    text-shadow:none!important;
    box-shadow:0 1px 2px rgba(0,0,0,.2)!important;
    box-sizing:border-box!important;
  }
  .roster-mobile .rcard .rc-meta .rc-staff-line .rc-staff-names,
  .home-roster-list .rcard .rc-meta .rc-staff-line .rc-staff-names,
  .rcard.is-emp .rc-meta .rc-staff-line .rc-staff-names{
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    text-align:center!important;
    width:auto!important;
    min-width:0!important;
    max-width:calc(100vw - 160px)!important;
    height:17px!important;
    min-height:17px!important;
    padding:0!important;
    background:transparent!important;
    border:0!important;
    box-shadow:none!important;
    border-radius:0!important;
    color:#ffffff!important;
    font-size:12.5px!important;
    font-weight:900!important;
    line-height:17px!important;
    white-space:nowrap!important;
    overflow:hidden!important;
    text-overflow:ellipsis!important;
    word-break:normal!important;
    flex:0 1 auto!important;
    box-sizing:border-box!important;
  }
  .rgc-staff{
    display:inline-flex!important;
    align-items:center!important;
    justify-content:flex-start!important;
    gap:6px!important;
    margin-top:4px!important;
    padding:2px 8px 2px 3px!important;
    min-height:22px!important;
    height:22px!important;
    width:fit-content!important;
    max-width:100%!important;
    border-radius:999px!important;
    overflow:hidden!important;
    box-sizing:border-box!important;
  }
  .rgc-staff-kicker{height:17px!important;min-height:17px!important;padding:0 8px!important;font-size:8.7px!important;line-height:17px!important;box-sizing:border-box!important;}
  .rgc-staff-names{display:inline-flex!important;align-items:center!important;height:17px!important;line-height:17px!important;font-size:12.5px!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;}
}
/* WW_V198_STAFFBAR_SKINNY_FIRSTNAMES_END */`;
      document.head.appendChild(st);
    }catch(e){}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addSkinnyStaffBarStyle,{once:true});
  else addSkinnyStaffBarStyle();
  setTimeout(addSkinnyStaffBarStyle,80);
})();
/* WW_V198_STAFFBAR_SKINNY_FIRSTNAMES_END */

/* WW_V205_STAFFBAR_CARD_COLOURS_RUNTIME_START */
(function(){
  function addStaffCardColourStyle(){
    try{
      var old=document.getElementById('ww-v205-staffbar-card-colours-runtime');
      if(old&&old.parentNode)old.parentNode.removeChild(old);
      var st=document.createElement('style');
      st.id='ww-v205-staffbar-card-colours-runtime';
      st.textContent=`/* V205 — staff bar colours follow each roster card colour; no layout changes. */
@media (max-width:1023px){
  .roster-mobile .rcard:not(.is-rejected) .rc-meta .rc-staff-line,
  .home-roster-list .rcard:not(.is-rejected) .rc-meta .rc-staff-line,
  .rcard.is-emp:not(.is-rejected) .rc-meta .rc-staff-line{
    background:linear-gradient(135deg,
      color-mix(in srgb,var(--solid,#315f3a) 76%,#000 24%),
      color-mix(in srgb,var(--deep,#173b23) 92%,#000 8%))!important;
    border-color:color-mix(in srgb,var(--solid,#315f3a) 62%,rgba(255,255,255,.28))!important;
  }
  .roster-mobile .rcard:not(.is-rejected) .rc-meta .rc-staff-line .rc-staff-kicker,
  .home-roster-list .rcard:not(.is-rejected) .rc-meta .rc-staff-line .rc-staff-kicker,
  .rcard.is-emp:not(.is-rejected) .rc-meta .rc-staff-line .rc-staff-kicker{
    background:linear-gradient(135deg,
      color-mix(in srgb,var(--solid,#7fb56a) 58%,#fff 42%),
      color-mix(in srgb,var(--solid,#7fb56a) 82%,#fff 18%))!important;
    color:color-mix(in srgb,var(--deep,#10240f) 78%,#000 22%)!important;
  }
  .rgc:not(.is-rejected) .rgc-staff{
    background:linear-gradient(135deg,
      color-mix(in srgb,var(--accent,#315f3a) 76%,#000 24%),
      color-mix(in srgb,var(--accent-deep,#173b23) 92%,#000 8%))!important;
    border-color:color-mix(in srgb,var(--accent,#315f3a) 62%,rgba(255,255,255,.28))!important;
  }
  .rgc:not(.is-rejected) .rgc-staff-kicker{
    background:linear-gradient(135deg,
      color-mix(in srgb,var(--accent,#7fb56a) 58%,#fff 42%),
      color-mix(in srgb,var(--accent,#7fb56a) 82%,#fff 18%))!important;
    color:color-mix(in srgb,var(--accent-deep,#10240f) 78%,#000 22%)!important;
  }
}`;
      document.head.appendChild(st);
    }catch(e){}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addStaffCardColourStyle,{once:true});
  else addStaffCardColourStyle();
  setTimeout(addStaffCardColourStyle,130);
})();
/* WW_V205_STAFFBAR_CARD_COLOURS_RUNTIME_END */


/* WW_V199_ROSTER_ALIGN_SPEED_LOGIN_RUNTIME_START */
(function(){
  try{
    if(document.getElementById('ww-v199-roster-align-speed-login-runtime'))return;
    var st=document.createElement('style');
    st.id='ww-v199-roster-align-speed-login-runtime';
    st.textContent='@media (max-width:1023px){.rst-hero.admin,.rst-hero.staff{contain:layout paint!important;transform:translateZ(0)!important;backface-visibility:hidden!important}.rst-hero-top{display:grid!important;grid-template-columns:38px minmax(0,1fr) 38px!important;align-items:center!important;gap:8px!important;min-height:38px!important}.rst-hero-label{min-width:0!important;width:100%!important;max-width:100%!important;text-align:center!important;overflow:hidden!important;padding:0 2px!important}.rst-eyebrow{display:block!important;line-height:1!important;margin:0 0 3px!important}.rst-hero-label strong{display:block!important;max-width:100%!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;text-align:center!important;line-height:1.04!important;font-size:clamp(16px,4.7vw,19px)!important}.rst-nav{width:38px!important;height:38px!important;min-width:38px!important;min-height:38px!important;justify-self:center!important;align-self:center!important}.rst-hero-foot{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;align-items:stretch!important;gap:8px!important;margin-top:9px!important;width:100%!important;max-width:100%!important}.rst-hero.admin .rst-hs,.rst-hero.staff .rst-hs{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;width:100%!important;min-width:0!important;max-width:100%!important;height:42px!important;min-height:42px!important;padding:0 5px!important;margin:0!important;border-radius:13px!important;border:1px solid rgba(255,255,255,.11)!important;background:rgba(255,255,255,.075)!important;box-sizing:border-box!important;position:relative!important}.rst-hero.admin .rst-hs:first-of-type,.rst-hero.staff .rst-hs:first-of-type,.rst-hero.admin .rst-hs:nth-of-type(2),.rst-hero.staff .rst-hs:nth-of-type(2){border-radius:13px!important;border:1px solid rgba(255,255,255,.11)!important}.rst-hero.admin .rst-hs:nth-of-type(2)::before,.rst-hero.staff .rst-hs:nth-of-type(2)::before{content:none!important;display:none!important}.rst-hs strong{display:block!important;width:100%!important;text-align:center!important;line-height:1!important;font-size:18px!important;margin:0!important;font-variant-numeric:tabular-nums!important}.rst-hs em{display:block!important;width:100%!important;text-align:center!important;line-height:1!important;margin:2px 0 0!important;font-size:8px!important;letter-spacing:.07em!important}.rst-hero.admin .rst-hero-add,.rst-hero.staff .rst-hero-add{grid-column:1 / -1!important;width:100%!important;min-width:0!important;max-width:100%!important;height:40px!important;min-height:40px!important;margin:0!important;display:flex!important;align-items:center!important;justify-content:center!important;box-sizing:border-box!important}html,body,#app{scroll-behavior:auto!important;overscroll-behavior:none!important}.page,.content,.card,.panel,.rcard,.rgc,.modal,.modal-card,.mobile-nav,.topbar,.login-card,.login-stage,.btn,.icon-btn,button,[data-action]{animation:none!important;transition:none!important;will-change:auto!important}.content,.modal-body,.chat-scroll,.cv-threads{-webkit-overflow-scrolling:touch!important;scroll-behavior:auto!important;overscroll-behavior:contain!important}}@media (max-width:390px){.rst-hero-top{grid-template-columns:34px minmax(0,1fr) 34px!important;gap:7px!important}.rst-nav{width:34px!important;height:34px!important;min-width:34px!important;min-height:34px!important}.rst-hero-label strong{font-size:clamp(15px,4.45vw,17px)!important}.rst-hero-foot{gap:7px!important}.rst-hero.admin .rst-hs,.rst-hero.staff .rst-hs{height:40px!important;min-height:40px!important}.rst-hs strong{font-size:16.5px!important}.rst-hs em{font-size:7.4px!important}.rst-hero.admin .rst-hero-add,.rst-hero.staff .rst-hero-add{height:39px!important;min-height:39px!important}}.login-root,.login-stage,.login-card,.login-root::before,.login-root::after,.login-stage::before,.login-stage::after{animation:none!important;transition:none!important;will-change:auto!important;backface-visibility:hidden!important;-webkit-backface-visibility:hidden!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}.login-root{min-height:100dvh!important;overflow:hidden!important;contain:layout paint!important;transform:translateZ(0)!important}.login-stage,.login-card{transform:none!important}';
    document.head.appendChild(st);
  }catch(e){}
})();
/* WW_V199_ROSTER_ALIGN_SPEED_LOGIN_RUNTIME_END */


/* WW_V203_CHATGPT_BOOKING_PASTE_RUNTIME_START */
(function(){
  try{
    if(window.__wwV203ChatGPTBookingPasteInstalled)return;
    window.__wwV203ChatGPTBookingPasteInstalled=true;

    function ww203InstallStyles(){
      try{
        if(document.getElementById('ww-v203-chatgpt-booking-style'))return;
        var st=document.createElement('style');
        st.id='ww-v203-chatgpt-booking-style';
        st.textContent=`
          .bk-hero-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:flex-end}.bk-hero-actions .bk-hero-add{margin:0}.bk-hero-add.alt{background:rgba(255,255,255,.14);color:#fff;border:1px solid rgba(255,255,255,.28);box-shadow:none}.bk-hero-add.alt svg{color:#fff}
          .bk-ai-card{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;border-radius:24px;padding:16px 18px;background:linear-gradient(135deg,#fffdf8,#f4efe3);border:1px solid rgba(94,70,45,.13);box-shadow:0 12px 30px rgba(37,39,24,.08)}
          .bk-ai-card h3{margin:0 0 4px;color:#1f3023;font-size:22px;line-height:1.05;letter-spacing:-.03em}.bk-ai-card p{margin:0;color:#657068;font-weight:700;line-height:1.4}.bk-ai-icon{width:48px;height:48px;border-radius:17px;display:grid;place-items:center;background:#18341f;color:#fff;box-shadow:0 10px 20px rgba(24,52,31,.18)}.bk-ai-icon svg{width:22px;height:22px}.bk-ai-copy{display:flex;gap:13px;align-items:center;min-width:0}.bk-ai-actions{display:flex;gap:8px;align-items:center;justify-content:flex-end;flex-wrap:wrap}.bk-ai-actions .btn{white-space:nowrap}
          .bk-paste-box{min-height:220px;resize:vertical;font-size:15px;line-height:1.45}.bk-paste-help{display:grid;gap:7px;margin-top:10px;padding:12px 13px;border-radius:16px;background:#f6f1e8;border:1px solid rgba(99,68,38,.12);color:#5f654e;font-weight:720;line-height:1.38}.bk-paste-help strong{color:#203324}.bk-review-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bk-review-item{border:1px solid rgba(24,52,31,.10);background:#fbfbf7;border-radius:16px;padding:11px}.bk-review-item span{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.08em;font-weight:950;color:#7c856f;margin-bottom:4px}.bk-review-item strong{display:block;color:#203324;font-weight:900;line-height:1.25}.bk-review-item.full{grid-column:1/-1}.bk-remind-now{background:#f6f1e8!important;color:#5d442b!important}
          @media(max-width:720px){.bk-hero-actions{width:100%;display:grid;grid-template-columns:1fr;justify-content:stretch}.bk-hero-actions .bk-hero-add{width:100%;justify-content:center}.bk-ai-card{grid-template-columns:1fr;border-radius:20px;padding:14px}.bk-ai-copy{align-items:flex-start}.bk-ai-actions{display:grid;grid-template-columns:1fr;width:100%}.bk-review-grid{grid-template-columns:1fr}}
        `;
        document.head.appendChild(st);
      }catch(e){}
    }
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ww203InstallStyles,{once:true}); else ww203InstallStyles();

    function ww203Norm(s){return String(s||'').replace(/\s+/g,' ').trim();}
    function ww203Field(lines,keys){
      var keyRe=keys.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
      var re=new RegExp('^\\s*(?:'+keyRe+')\\s*[:\u2013\-]\\s*(.+)$','i');
      for(var i=0;i<lines.length;i++){var m=String(lines[i]||'').match(re);if(m&&ww203Norm(m[1]))return ww203Norm(m[1]);}
      return '';
    }
    function ww203ToIsoDate(v){
      var s=ww203Norm(v).replace(/[,]/g,''); if(!s)return '';
      var now=new Date(); var y=now.getFullYear();
      if(/\btoday\b/i.test(s))return today();
      if(/\btomorrow\b/i.test(s))return addDays(today(),1);
      var isoMatch=s.match(/\b(20\d{2})[-\/](\d{1,2})[-\/](\d{1,2})\b/); if(isoMatch)return isoMatch[1]+'-'+String(isoMatch[2]).padStart(2,'0')+'-'+String(isoMatch[3]).padStart(2,'0');
      var au=s.match(/\b(\d{1,2})[\/\-.](\d{1,2})(?:[\/\-.](\d{2,4}))?\b/); if(au){var yy=au[3]?Number(au[3]):y;if(yy<100)yy+=2000;return yy+'-'+String(au[2]).padStart(2,'0')+'-'+String(au[1]).padStart(2,'0');}
      var months={jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,sept:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12};
      var mon=s.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t|tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)(?:\s+(20\d{2}|\d{2}))?\b/i);
      if(mon){var yy2=mon[3]?Number(mon[3]):y;if(yy2<100)yy2+=2000;return yy2+'-'+String(months[mon[2].toLowerCase()]).padStart(2,'0')+'-'+String(mon[1]).padStart(2,'0');}
      var days={sun:0,sunday:0,mon:1,monday:1,tue:2,tues:2,tuesday:2,wed:3,wednesday:3,thu:4,thur:4,thurs:4,thursday:4,fri:5,friday:5,sat:6,saturday:6};
      var dm=s.match(/\b(next\s+)?(sun(?:day)?|mon(?:day)?|tue(?:s|sday)?|wed(?:nesday)?|thu(?:r|rs|rsday|rday)?|fri(?:day)?|sat(?:urday)?)\b/i);
      if(dm){var target=days[dm[2].toLowerCase()];var d=new Date(today()+'T00:00:00');var diff=(target-d.getDay()+7)%7;if(diff===0||dm[1])diff+=7;d.setDate(d.getDate()+diff);return iso(d);}
      return '';
    }
    function ww203Time(v){
      var s=ww203Norm(v); if(!s)return '';
      var range=s.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\s*(?:-|to|\u2013|\u2014)\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/i); var first=range?range[1]+':'+(range[2]||'00')+(range[3]||''):s;
      var m=first.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/i); if(!m)return '';
      var h=Number(m[1]), mi=Number(m[2]||0), ap=(m[3]||'').toLowerCase(); if(ap==='pm'&&h<12)h+=12; if(ap==='am'&&h===12)h=0; if(h>23||mi>59)return ''; return String(h).padStart(2,'0')+':'+String(mi).padStart(2,'0');
    }
    function ww203Reminder(v){
      var s=String(v||'').toLowerCase();
      if(/3/.test(s)&&/1/.test(s))return '3,1'; if(/2/.test(s)&&/1/.test(s))return '2,1'; if(/same|today|day of/.test(s))return '0'; if(/3/.test(s))return '3,1'; if(/2/.test(s))return '2'; if(/1|tomorrow|day before/.test(s))return '1'; return '2,1';
    }
    function ww203ParseChatGPTBooking(text){
      var raw=String(text||'').trim();
      var lines=raw.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
      var joined='\n'+raw+'\n';
      var out={id:'',company:'',contactName:'',source:'ChatGPT paste',email:'',phone:'',address:'',cleanDate:today(),cleanTime:'09:00',reminderDays:'2,1',status:'pending',notes:''};
      out.company=ww203Field(lines,['company','client','client name','company / client','business','real estate','agency','customer','name']);
      out.contactName=ww203Field(lines,['contact','contact person','sender','requested by','request from']);
      out.address=ww203Field(lines,['address','job address','site address','property address','location','cleaning address']);
      out.email=ww203Field(lines,['email','sender email','contact email']) || ((raw.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)||[])[0]||'');
      out.phone=ww203Field(lines,['phone','mobile','contact number','phone number']) || ((raw.match(/(?:\+?61|0)\s?4\d[\d\s]{7,10}|(?:\+?61|0)[2378][\d\s]{7,10}/)||[])[0]||'');
      var dateVal=ww203Field(lines,['date','job date','clean date','cleaning date','deadline','due date','required by','wanted by','booking date']);
      if(!dateVal){var dm=raw.match(/(?:deadline|due|required|wanted|needed|job|clean|cleaning|date)[^\n:;]{0,30}[:\-\u2013]?\s*([^\n;]{3,80})/i); if(dm)dateVal=dm[1];}
      var foundDate=ww203ToIsoDate(dateVal)||ww203ToIsoDate(raw); if(foundDate)out.cleanDate=foundDate;
      var timeVal=ww203Field(lines,['time','preferred time','start time','clean time','booking time','arrival time']);
      var foundTime=ww203Time(timeVal)||ww203Time(raw); if(foundTime)out.cleanTime=foundTime;
      out.reminderDays=ww203Reminder(ww203Field(lines,['reminder','remind','remind me','notification','alert']));
      var service=ww203Field(lines,['service','clean type','job type','type','clean','request','scope']);
      var notes=ww203Field(lines,['notes','details','description','message','summary','email details']);
      if(!out.address){
        var addrLine=lines.find(l=>/\b(vic|nsw|qld|sa|wa|tas|act|nt)\b/i.test(l)&&/\d|street|st\b|road|rd\b|avenue|ave\b|drive|dr\b|court|ct\b|unit|suburb/i.test(l));
        if(addrLine)out.address=addrLine.replace(/^\s*(address|location|site)\s*[:\-\u2013]\s*/i,'');
      }
      if(!out.company){
        var subj=ww203Field(lines,['subject']);
        if(subj)out.company=subj.replace(/\b(clean|cleaning|booking|request|job|quote)\b/ig,'').replace(/[:\-\u2013]+/g,' ').trim();
      }
      if(!out.company && out.contactName)out.company=out.contactName;
      if(!out.company && out.email)out.company=out.email.split('@')[0].replace(/[._-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      if(!out.company)out.company='New email booking';
      var summaryParts=[]; if(service)summaryParts.push('Service: '+service); if(notes)summaryParts.push(notes);
      summaryParts.push('Original paste: '+raw.slice(0,1000));
      out.notes=summaryParts.join('\n\n');
      return out;
    }
    window.ww203ParseChatGPTBooking=ww203ParseChatGPTBooking;

    var originalAdminBookingsPage=window.adminBookingsPage||adminBookingsPage;
    adminBookingsPage=function(u){
      var html=originalAdminBookingsPage(u);
      var ai=`<section class="bk-ai-card">
        <div class="bk-ai-copy"><span class="bk-ai-icon">${svg('clip')}</span><div><h3>Paste from ChatGPT</h3><p>Copy the booking details ChatGPT extracts from an email screenshot, paste it here, and EarthRoster will arrange it into a booking reminder ready for roster.</p></div></div>
        <div class="bk-ai-actions"><button class="btn btn-primary" data-action="open-chatgpt-booking-paste">Paste booking</button></div>
      </section>`;
      html=html.replace('</section>','</section>'+ai);
      html=html.replace('<button class="bk-hero-add" data-action="new-booking-reminder">','<div class="bk-hero-actions"><button class="bk-hero-add alt" data-action="open-chatgpt-booking-paste">'+svg('clip')+' Paste from ChatGPT</button><button class="bk-hero-add" data-action="new-booking-reminder">');
      html=html.replace('</button>\n      </div>\n      <div class="bk-stats">','</button></div>\n      </div>\n      <div class="bk-stats">');
      return html;
    };

    var originalBookingCardHtml=window.bookingCardHtml||bookingCardHtml;
    bookingCardHtml=function(b){
      var html=originalBookingCardHtml(b);
      if(html.indexOf('data-action="send-booking-reminder-now"')<0){
        html=html.replace('<button class="btn btn-soft" data-action="edit-booking"', '<button class="btn btn-soft bk-remind-now" data-action="send-booking-reminder-now" data-id="'+escapeHtml(b.id)+'">'+svg('bell')+' Remind now</button><button class="btn btn-soft" data-action="edit-booking"');
      }
      return html;
    };

    function ww203ChatGPTPasteModal(){
      var example='Company / client: ABC Real Estate\nContact: Sarah\nEmail: sarah@example.com\nPhone: 0400 000 000\nJob address: 12 Example Street, Cranbourne VIC\nClean date: 29/07/2026\nPreferred time: 9:30am\nService: End of lease clean\nReminder: 2 days and 1 day before\nNotes: Keys in lockbox. Must be completed before tenant handover.';
      return modalShell('Paste from ChatGPT',`
        <div class="bk-form-note">Paste the booking details that ChatGPT prepared from an email screenshot. The app will read the client, address, job date, time, notes and reminder timing, then arrange it into a booking reminder.</div>
        <div class="field"><label>Paste booking details</label><textarea class="input bk-paste-box" id="br_chatgpt_paste" placeholder="${escapeHtml(example)}">${escapeHtml((modal&&modal.data&&modal.data.text)||'')}</textarea></div>
        <div class="bk-paste-help"><strong>Best copy format:</strong><span>Company / client, contact, email, phone, job address, clean date, preferred time, service, reminder, notes.</span></div>
      `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="parse-chatgpt-booking">Arrange booking</button>`);
    }
    var originalBookingReminderModal=window.bookingReminderModal||bookingReminderModal;
    bookingReminderModal=function(d){
      if(!(d&&d.__chatgptDraft))return originalBookingReminderModal(d);
      var b=d||{}; var days=b.reminderDays||'2,1';
      return modalShell('Review booking reminder',`
        <div class="bk-form-note">Check the details below, adjust anything you need, then save it as a booking reminder or add it straight to the roster.</div>
        <div class="bk-review-grid">
          <div class="bk-review-item"><span>Client</span><strong>${escapeHtml(b.company||'')}</strong></div>
          <div class="bk-review-item"><span>Due</span><strong>${escapeHtml((b.cleanDate||today())+' '+fmtTime(b.cleanTime||'09:00'))}</strong></div>
          <div class="bk-review-item full"><span>Address</span><strong>${escapeHtml(b.address||'')}</strong></div>
        </div>
        <div class="field"><label>Company / client name</label><input class="input" id="br_company" value="${escapeHtml(b.company||'')}"></div>
        <div class="row2"><div class="field"><label>Contact person</label><input class="input" id="br_contact" value="${escapeHtml(b.contactName||'')}"></div><div class="field"><label>Source</label><select class="input" id="br_source"><option>ChatGPT paste</option><option>Email</option><option>Real estate</option><option>Company</option><option>Phone call</option></select></div></div>
        <div class="row2"><div class="field"><label>Email</label><input class="input" id="br_email" value="${escapeHtml(b.email||'')}"></div><div class="field"><label>Phone</label><input class="input" id="br_phone" value="${escapeHtml(b.phone||'')}"></div></div>
        ${addressField('br_address',b.address||'','Job address')}
        <div class="row2"><div class="field"><label>Clean deadline / job date</label><input class="input" type="date" id="br_date" value="${b.cleanDate||today()}"></div><div class="field"><label>Preferred time</label>${timeSelect('br_time',b.cleanTime||'09:00')}</div></div>
        <div class="row2"><div class="field"><label>Reminder</label><select class="input" id="br_reminder"><option value="2,1" ${days==='2,1'?'selected':''}>2 days and 1 day before</option><option value="2" ${days==='2'?'selected':''}>2 days before</option><option value="1" ${days==='1'?'selected':''}>1 day before</option><option value="3,1" ${days==='3,1'?'selected':''}>3 days and 1 day before</option><option value="0" ${days==='0'?'selected':''}>Same day</option></select></div><div class="field"><label>Status</label><select class="input" id="br_status"><option value="pending" selected>Waiting to roster</option><option value="rostered">Rostered</option><option value="done">Done</option></select></div></div>
        <div class="field"><label>Email details / notes</label><textarea class="input" id="br_notes" rows="6">${escapeHtml(b.notes||'')}</textarea></div>
      `,`<span style="flex:1"></span><button class="btn btn-ghost" data-action="open-chatgpt-booking-paste">Back</button><button class="btn btn-soft" data-action="save-chatgpt-booking-and-roster">Save + add to roster</button><button class="btn btn-primary" data-action="save-booking-reminder" data-id="">Save booking</button>`);
    };
    var originalModalContent=window.modalContent||modalContent;
    modalContent=function(){
      if(modal&&modal.type==='chatgpt-booking')return ww203ChatGPTPasteModal();
      return originalModalContent();
    };

    document.addEventListener('click',function(e){
      var el=e.target.closest('[data-action]'); if(!el)return; var a=el.dataset.action; var u=me();
      if(a==='open-chatgpt-booking-paste'){
        if(!u||u.role!=='admin')return; e.preventDefault(); e.stopPropagation(); openModal('chatgpt-booking',{text:(document.getElementById('br_chatgpt_paste')||{}).value||''});
      }
      if(a==='parse-chatgpt-booking'){
        if(!u||u.role!=='admin')return; e.preventDefault(); e.stopPropagation();
        var txt=(document.getElementById('br_chatgpt_paste')||{}).value||''; if(!txt.trim()){toast('Paste the booking details first');return;}
        var d=ww203ParseChatGPTBooking(txt); d.__chatgptDraft=true; openModal('booking-reminder',d);
      }
      if(a==='save-chatgpt-booking-and-roster'){
        if(!u||u.role!=='admin')return; e.preventDefault(); e.stopPropagation();
        var data=collectBookingDraft(''); if(!bookingClientLabel(data)||bookingClientLabel(data)==='Untitled booking'){toast('Company or client name required');return;}
        state.bookingReminders=state.bookingReminders||[]; state.bookingReminders.unshift(data); saveRealtime();
        var clientId=ensureClientFromBooking(data); data.clientId=clientId; data.status='rostered'; data.updatedAt=nowIso(); saveLocalState(state);
        draftEmp=[]; state.empPickerOpen=false; state.addClientOpen=false;
        openModal('shift',{bookingId:data.id,clientId:clientId,date:data.cleanDate||state.rosterDate,start:data.cleanTime||'09:00',end:plusHoursTime(data.cleanTime||'09:00',2),notes:'From ChatGPT booking reminder: '+bookingClientLabel(data)+(data.notes?' — '+data.notes:''),status:'Unpublished',employeeIds:[]});
        toast('Booking saved and ready to roster');
      }
      if(a==='send-booking-reminder-now'){
        if(!u||u.role!=='admin')return; e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
        if(window.ww215SendBookingReminderNow) window.ww215SendBookingReminderNow(el.dataset.id);
      }
    },true);
  }catch(err){try{console.warn('V203 ChatGPT booking paste patch failed',err);}catch(_){}}
})();
/* WW_V203_CHATGPT_BOOKING_PASTE_RUNTIME_END */


/* ---------- V204 bookings mobile / tablet alignment polish ---------- */
(function installBookingAlignmentV204(){
  function add(){
    try{
      if(document.getElementById('ww-v204-booking-align-style')) return;
      var st=document.createElement('style');
      st.id='ww-v204-booking-align-style';
      st.textContent=`
        .bookings-page{overflow-x:hidden;box-sizing:border-box;width:100%}
        .bookings-page *{box-sizing:border-box}
        .bk-hero-row>div:first-child{min-width:0;flex:1 1 auto}
        .bk-hero-actions{position:relative;z-index:3;display:flex;align-items:center;justify-content:flex-end;gap:10px;flex-wrap:wrap;flex:0 0 auto;max-width:470px}
        .bk-hero-actions .bk-hero-add{min-height:46px;min-width:0;line-height:1.08;text-align:center;padding:12px 16px}
        .bk-hero-actions .bk-hero-add.alt{min-width:190px;color:#fff;background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.30)}
        .bk-hero-actions .bk-hero-add:not(.alt){min-width:142px}
        .bk-card{align-items:start;overflow:visible}
        .bk-actions{width:168px;min-width:168px;align-self:start;position:relative;z-index:2}
        .bk-actions .btn{min-height:38px;width:100%;padding-left:10px;padding-right:10px;text-align:center;white-space:nowrap}
        .bk-card .bk-sub,.bk-card h3,.bk-notes{min-width:0;overflow-wrap:anywhere}
        @media(max-width:980px){
          .bk-hero-row{display:grid;grid-template-columns:1fr;gap:14px}
          .bk-hero-actions{width:100%;max-width:none;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;justify-content:stretch}
          .bk-hero-actions .bk-hero-add,.bk-hero-actions .bk-hero-add.alt{width:100%;min-width:0;justify-content:center;font-size:14px;padding:12px 10px;white-space:normal}
          .bk-card{grid-template-columns:1fr;gap:12px}
          .bk-actions{width:100%;min-width:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
          .bk-actions .btn{width:100%;min-height:40px;white-space:normal;line-height:1.08}
          .bk-actions .btn.primary-wide{grid-column:1/-1}
        }
        @media(max-width:520px){
          .bookings-page{gap:12px;padding-left:0;padding-right:0}
          .bk-hero{border-radius:22px;padding:17px 15px 16px;overflow:hidden}
          .bk-hero h1{font-size:34px;letter-spacing:-.04em;line-height:1.02;margin-top:10px}
          .bk-hero p{font-size:13px;line-height:1.35;max-width:100%}
          .bk-hero-actions{grid-template-columns:1fr;gap:8px;margin-top:2px}
          .bk-hero-actions .bk-hero-add,.bk-hero-actions .bk-hero-add.alt{min-height:44px;font-size:13px;white-space:nowrap}
          .bk-stats{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:16px}
          .bk-stat{min-width:0;padding:12px 11px;border-radius:16px}
          .bk-filter{padding-bottom:4px;scrollbar-width:none}.bk-filter::-webkit-scrollbar{display:none}
          .bk-ai-card{padding:14px;border-radius:20px;gap:13px}
          .bk-ai-copy{display:grid;grid-template-columns:46px minmax(0,1fr);gap:12px;align-items:start}
          .bk-ai-card h3{font-size:20px}.bk-ai-card p{font-size:13px;line-height:1.34}
          .bk-card{padding:14px;border-radius:20px;gap:12px}
          .bk-card h3{font-size:21px;line-height:1.08}
          .bk-card .bk-sub{gap:7px;font-size:12px;line-height:1.25}
          .bk-notes{font-size:13px;line-height:1.35}
          .bk-actions{grid-template-columns:1fr 1fr;gap:8px}
          .bk-actions .btn{font-size:12px;padding:10px 8px;border-radius:13px}
        }
      `;
      document.head.appendChild(st);
    }catch(e){}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', add, {once:true}); else add();
})();



/* ---------- V209 requested-only: client name readability + important home updates emphasis ---------- */
(function installV209RosterNamesAndImportantUpdates(){
  function add(){
    try{
      if(document.getElementById('ww-v209-client-names-important-updates')) return;
      var st=document.createElement('style');
      st.id='ww-v209-client-names-important-updates';
      st.textContent=`
        /* Client names on roster cards: keep existing pill/design, only make the text pop cleaner. */
        @media(max-width:1023px){
          .roster-mobile .rcard:not(.is-rejected) .rc-info h3,
          .home-roster-list .rcard:not(.is-rejected) .rc-info h3,
          .rcard.is-emp:not(.is-rejected) .rc-info h3{
            color:#fffdf5!important;
            -webkit-text-stroke:.45px rgba(18,27,20,.44)!important;
            text-shadow:
              0 1px 0 rgba(255,255,255,.22),
              0 1.4px 2px rgba(0,0,0,.64),
              0 0 1px rgba(0,0,0,.80),
              0 3px 8px rgba(0,0,0,.32)!important;
            background:linear-gradient(135deg,rgba(255,255,255,.34),rgba(255,255,255,.17))!important;
            border-color:rgba(255,255,255,.52)!important;
            box-shadow:
              0 3px 9px rgba(0,0,0,.25),
              inset 0 1px 0 rgba(255,255,255,.38),
              inset 0 -1px 0 rgba(0,0,0,.12)!important;
          }
          .rcard.is-rejected .rc-info h3{-webkit-text-stroke:0!important;}
        }

        /* Home page important updates: same layout, just stronger priority styling. */
        .important-updates-panel{
          background:
            radial-gradient(circle at 94% 8%,rgba(194,79,55,.12),transparent 34%),
            linear-gradient(135deg,#fffaf0 0%,#fffdf7 46%,#f1f7ed 100%)!important;
          border:1.5px solid rgba(172,75,48,.24)!important;
          border-left:5px solid #b84a31!important;
          box-shadow:
            0 12px 26px rgba(67,35,20,.10),
            0 3px 10px rgba(28,49,29,.06),
            inset 0 1px 0 rgba(255,255,255,.80)!important;
        }
        .important-updates-panel .section-head h2{
          font-size:16.5px!important;
          color:#142719!important;
          font-weight:850!important;
        }
        .important-updates-panel .iu-pulse{
          background:linear-gradient(145deg,#c75537,#8f3426)!important;
          color:#fffaf0!important;
          box-shadow:0 6px 14px rgba(164,58,39,.24),inset 0 1px 0 rgba(255,255,255,.22)!important;
        }
        .important-updates-panel .iu-count{
          background:#fff3e8!important;
          color:#8f3426!important;
          border:1px solid rgba(184,74,49,.16)!important;
        }
        .important-updates-panel .updates-list{gap:7px!important;}
        .important-updates-panel .upd-item{
          background:rgba(255,255,255,.82)!important;
          border:1px solid rgba(75,105,67,.13)!important;
          box-shadow:0 4px 12px rgba(26,43,28,.055)!important;
        }
        .important-updates-panel .upd-item::before{
          width:4px!important;
          background:linear-gradient(180deg,#c75537,#8f3426)!important;
        }
        .important-updates-panel .upd-item.pinned{
          background:linear-gradient(135deg,#fff8e9,#fffdf6)!important;
          border-color:rgba(184,74,49,.28)!important;
        }
        .important-updates-panel .upd-item.pinned::before{
          background:linear-gradient(180deg,#e0ad58,#b84a31)!important;
        }
        .important-updates-panel .upd-dot{
          background:linear-gradient(145deg,#fff1e4,#f3dfc7)!important;
          color:#a9422e!important;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.76),0 4px 10px rgba(164,58,39,.10)!important;
        }
        .important-updates-panel .upd-title{
          color:#142719!important;
          font-weight:900!important;
        }
        .important-updates-panel .upd-meta{
          color:#6f7b68!important;
          font-weight:750!important;
        }
        .important-updates-panel .upd-pin{
          background:#f4dfba!important;
          color:#8a4b21!important;
        }
      `;
      document.head.appendChild(st);
    }catch(e){}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', add, {once:true}); else add();
})();



/* ---------- V210 requested-only: compact important comments + professional client name pill ---------- */
(function installV210SpacingAndClientNames(){
  function add(){
    try{
      if(document.getElementById('ww-v210-spacing-client-name-fix')) return;
      var st=document.createElement('style');
      st.id='ww-v210-spacing-client-name-fix';
      st.textContent=`
        /* Roster client names: remove harsh outline, keep a clean professional glass pill. */
        @media(max-width:1023px){
          .roster-mobile .rcard:not(.is-rejected) .rc-info h3,
          .home-roster-list .rcard:not(.is-rejected) .rc-info h3,
          .rcard.is-emp:not(.is-rejected) .rc-info h3{
            color:#fffaf0!important;
            -webkit-text-stroke:0!important;
            paint-order:normal!important;
            background:linear-gradient(135deg,rgba(255,255,255,.27),rgba(255,255,255,.13))!important;
            border:1px solid rgba(255,255,255,.40)!important;
            box-shadow:
              0 2px 6px rgba(0,0,0,.22),
              inset 0 1px 0 rgba(255,255,255,.34),
              inset 0 -1px 0 rgba(0,0,0,.10)!important;
            text-shadow:
              0 1px 2px rgba(0,0,0,.58),
              0 2px 6px rgba(0,0,0,.22)!important;
          }
          .rcard.is-rejected .rc-info h3{-webkit-text-stroke:0!important;paint-order:normal!important;}
        }

        /* Important updates: tighten the distance between post text, reactions and comments. */
        .important-updates-panel .upd-body{padding-bottom:8px!important;}
        .important-updates-panel .upd-body p{margin:0 0 4px!important;line-height:1.36!important;}
        .important-updates-panel .upd-react{margin-top:4px!important;margin-bottom:4px!important;min-height:22px!important;}
        .important-updates-panel .upd-react-chips{gap:4px!important;align-items:center!important;min-height:22px!important;}
        .important-updates-panel .upd-react-add{width:24px!important;height:24px!important;min-width:24px!important;border-radius:50%!important;opacity:.82!important;}
        .important-updates-panel .upd-react-add svg{width:14px!important;height:14px!important;}
        .important-updates-panel .upd-comments{margin-top:5px!important;padding-top:7px!important;border-top:1px solid rgba(20,31,23,.07)!important;}
        .important-updates-panel .upd-comments-head{margin-bottom:6px!important;font-size:10.5px!important;line-height:1.1!important;}
        .important-updates-panel .upd-comment-list{display:flex!important;flex-direction:column!important;gap:6px!important;}
        .important-updates-panel .upd-comment{margin-bottom:0!important;gap:8px!important;}
        .important-updates-panel .ucm-av .avatar{width:30px!important;height:30px!important;font-size:11.5px!important;}
        .important-updates-panel .ucm-top{gap:6px!important;line-height:1.1!important;}
        .important-updates-panel .ucm-name{font-size:12.8px!important;line-height:1.1!important;}
        .important-updates-panel .ucm-time{font-size:10.5px!important;line-height:1.1!important;}
        .important-updates-panel .ucm-text{font-size:13px!important;line-height:1.25!important;margin-top:2px!important;}
        .important-updates-panel .ucm-reply-btn{margin-top:2px!important;line-height:1.1!important;}
        .important-updates-panel .upd-comment-add{margin-top:7px!important;gap:8px!important;}
      `;
      document.head.appendChild(st);
    }catch(e){}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', add, {once:true}); else add();
})();


/* ---------- V211 requested-only: bring Important Updates replies/comments much closer to the post ---------- */
(function installV211ImportantUpdateTightReplies(){
  function add(){
    try{
      if(document.getElementById('ww-v211-important-tight-replies')) return;
      var st=document.createElement('style');
      st.id='ww-v211-important-tight-replies';
      st.textContent=`
        /* Keep Important Updates design, only tighten the post -> comment/reply spacing. */
        .important-updates-panel .upd-body{
          padding-top:0!important;
          padding-bottom:7px!important;
        }
        .important-updates-panel .upd-body p{
          margin:0 0 2px!important;
          line-height:1.32!important;
        }
        .important-updates-panel .upd-react{
          margin-top:1px!important;
          margin-bottom:0!important;
          min-height:18px!important;
          height:auto!important;
        }
        .important-updates-panel .upd-react-chips{
          min-height:18px!important;
          gap:3px!important;
        }
        .important-updates-panel .upd-react-add{
          width:20px!important;
          height:20px!important;
          min-width:20px!important;
          opacity:.72!important;
        }
        .important-updates-panel .upd-react-add svg{
          width:12px!important;
          height:12px!important;
        }
        .important-updates-panel .upd-comments{
          margin-top:1px!important;
          padding-top:4px!important;
          border-top:1px solid rgba(20,31,23,.06)!important;
        }
        .important-updates-panel .upd-comments-head{
          margin:0 0 4px!important;
          font-size:10px!important;
          line-height:1!important;
        }
        .important-updates-panel .upd-comment-list{
          gap:4px!important;
        }
        .important-updates-panel .upd-comment{
          gap:7px!important;
          margin:0!important;
          align-items:flex-start!important;
        }
        .important-updates-panel .ucm-av .avatar{
          width:28px!important;
          height:28px!important;
          font-size:11px!important;
        }
        .important-updates-panel .ucm-top{
          gap:5px!important;
          line-height:1.05!important;
        }
        .important-updates-panel .ucm-name{
          font-size:12.4px!important;
          line-height:1.05!important;
        }
        .important-updates-panel .ucm-time{
          font-size:10px!important;
          line-height:1.05!important;
        }
        .important-updates-panel .ucm-text{
          margin-top:1px!important;
          font-size:12.8px!important;
          line-height:1.18!important;
        }
        .important-updates-panel .ucm-reply-btn{
          margin-top:1px!important;
          padding:0!important;
          font-size:11.5px!important;
          line-height:1.05!important;
        }
        .important-updates-panel .ucm-replies{
          margin-top:3px!important;
          gap:2px!important;
        }
        .important-updates-panel .upd-comment-add{
          margin-top:5px!important;
          gap:7px!important;
        }
        @media(max-width:720px){
          .important-updates-panel .upd-body{padding-bottom:6px!important;}
          .important-updates-panel .upd-comments{padding-top:3px!important;}
          .important-updates-panel .upd-comment-add{margin-top:4px!important;}
        }
      `;
      document.head.appendChild(st);
    }catch(e){}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', add, {once:true}); else add();
})();


/* WW_V212_CHATGPT_IMPORT_LAYOUT_RUNTIME_START */
(function(){
  try{
    if(window.__wwV212ChatGPTImportLayoutInstalled)return;
    window.__wwV212ChatGPTImportLayoutInstalled=true;

    function ww212InstallStyles(){
      try{
        if(document.getElementById('ww-v212-chatgpt-import-style'))return;
        var st=document.createElement('style');
        st.id='ww-v212-chatgpt-import-style';
        st.textContent=`
          .br212-page{gap:16px!important;}
          .br212-hero .bk-hero-row{align-items:flex-end!important;}
          .br212-hero-actions{position:relative;z-index:2;display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end;align-items:center;}
          .br212-hero-actions .bk-hero-add{margin:0;}
          .br212-hero-actions .bk-hero-add.secondary{background:rgba(255,255,255,.14)!important;color:#fff!important;border:1px solid rgba(255,255,255,.28)!important;box-shadow:none!important;}
          .br212-hero-actions .bk-hero-add.secondary svg{color:#fff!important;}
          .br212-import-panel{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(250px,.88fr);gap:14px;align-items:stretch;background:linear-gradient(135deg,#fffdf7,#f3eee2);border:1px solid rgba(38,70,42,.12);box-shadow:0 14px 32px rgba(20,38,22,.09);border-radius:24px;padding:16px;}
          .br212-workflow{display:flex;gap:14px;align-items:flex-start;min-width:0;}
          .br212-ai-icon{width:52px;height:52px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(145deg,#17331f,#25462b);color:#fff;box-shadow:0 12px 24px rgba(20,52,28,.18);flex:0 0 auto;}
          .br212-ai-icon svg{width:23px;height:23px;}
          .br212-copy h3{margin:0 0 4px;font-size:24px;line-height:1.05;letter-spacing:-.035em;color:#1d2f21;}
          .br212-copy p{margin:0;color:#647067;font-weight:720;line-height:1.38;max-width:620px;}
          .br212-copy ul{margin:10px 0 0 18px;color:#4d5b50;font-size:13px;font-weight:760;line-height:1.35;}
          .br212-copy li{padding:1px 0;}
          .br212-import-actions{display:grid;gap:9px;align-content:center;}
          .br212-import-actions .btn{justify-content:center;min-height:44px;border-radius:15px;}
          .br212-mini-note{display:flex;gap:8px;align-items:flex-start;padding:10px 11px;border-radius:16px;background:#f6f1e8;border:1px solid rgba(111,78,45,.12);color:#5f654e;font-weight:720;font-size:12.5px;line-height:1.3;}
          .br212-mini-note svg{width:16px;height:16px;flex:0 0 auto;color:#8a5a34;margin-top:1px;}
          .br212-import-modal{display:grid;gap:12px;}
          .br212-banner{border-radius:20px;padding:14px 15px;background:linear-gradient(135deg,#eef3e7,#f7efe3);border:1px solid rgba(31,52,36,.10);display:grid;gap:3px;}
          .br212-banner strong{color:#19341f;font-size:17px;line-height:1.1;}
          .br212-banner span{color:#637064;font-size:13px;font-weight:720;line-height:1.35;}
          .br212-paste-box{min-height:260px!important;resize:vertical;font-size:15px!important;line-height:1.45!important;}
          .br212-format-card{border-radius:18px;background:#fbf8f1;border:1px solid rgba(34,55,35,.10);padding:12px;color:#4f5c51;font-size:13px;font-weight:720;line-height:1.38;}
          .br212-format-card strong{display:block;color:#1e3223;margin-bottom:4px;}
          .br212-review-head{display:grid;gap:10px;}
          .br212-review-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
          .br212-review-item{border:1px solid rgba(24,52,31,.10);background:#fbfaf5;border-radius:16px;padding:11px 12px;min-width:0;}
          .br212-review-item.full{grid-column:1/-1;}
          .br212-review-item span{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.08em;font-weight:950;color:#7b856f;margin-bottom:4px;}
          .br212-review-item strong{display:block;color:#1f3224;font-weight:900;line-height:1.25;overflow-wrap:anywhere;}
          .br212-review-actions{display:flex;gap:8px;flex-wrap:wrap;}
          .br212-remind-now{background:#f6f1e8!important;color:#5d442b!important;border-color:rgba(93,68,43,.13)!important;}
          .br212-reminder-pill{background:#edf4e9!important;color:#315e38!important;}
          @media(max-width:720px){
            .br212-hero .bk-hero-row{align-items:stretch!important;}
            .br212-hero-actions{width:100%;display:grid;grid-template-columns:1fr;}
            .br212-hero-actions .bk-hero-add{width:100%;justify-content:center;}
            .br212-import-panel{grid-template-columns:1fr;border-radius:21px;padding:14px;gap:12px;}
            .br212-workflow{align-items:flex-start;}
            .br212-ai-icon{width:46px;height:46px;border-radius:16px;}
            .br212-copy h3{font-size:21px;}
            .br212-copy p{font-size:13px;}
            .br212-copy ul{font-size:12.3px;margin-top:8px;}
            .br212-review-grid{grid-template-columns:1fr;}
            .br212-paste-box{min-height:230px!important;}
          }
        `;
        document.head.appendChild(st);
      }catch(e){}
    }
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ww212InstallStyles,{once:true}); else ww212InstallStyles();

    function ww212ReminderText(b){
      var ds=bookingReminderOffsets(b||{}); if(!ds.length)return 'No reminder set';
      return ds.map(function(n){return n===0?'same day':(n+' day'+(Number(n)===1?'':'s')+' before');}).join(' + ');
    }

    /* Replace only the Bookings / ChatGPT import layout, keeping the same app data and roster flow. */
    adminBookingsPage=function(u){
      var c=bookingCounts();
      var list=filteredBookings();
      var filter=state.bookingFilter||'active';
      var tab=function(key,label,count){return '<button data-action="booking-filter" data-filter="'+key+'" class="'+(filter===key?'active':'')+'">'+label+(count!=null?' · '+count:'')+'</button>';};
      return '<div class="bookings-page br212-page">'+
        '<section class="bk-hero br212-hero">'+
          '<div class="bk-hero-row">'+
            '<div><span class="bk-eyebrow">'+svg('bell')+' Admin only</span><h1>Bookings &amp; reminders</h1><p>Store email jobs, real estate requests, screenshots and deadlines in one safe place before adding them to the roster.</p></div>'+
            '<div class="br212-hero-actions"><button class="bk-hero-add secondary" data-action="open-chatgpt-booking-paste">'+svg('docs')+' ChatGPT import</button><button class="bk-hero-add" data-action="new-booking-reminder">'+svg('plus')+' Add booking</button></div>'+
          '</div>'+
          '<div class="bk-stats">'+
            '<div class="bk-stat"><strong>'+c.pending+'</strong><span>Waiting</span></div>'+
            '<div class="bk-stat"><strong>'+c.due+'</strong><span>Due soon</span></div>'+
            '<div class="bk-stat"><strong>'+c.rostered+'</strong><span>Rostered</span></div>'+
            '<div class="bk-stat"><strong>'+c.total+'</strong><span>Total saved</span></div>'+
          '</div>'+
        '</section>'+
        '<section class="br212-import-panel">'+
          '<div class="br212-workflow"><span class="br212-ai-icon">'+svg('docs')+'</span><div class="br212-copy"><h3>ChatGPT import</h3><p>Paste the booking details that ChatGPT extracts from an email screenshot. EarthRoster will arrange the client, contact, address, date, time, notes and reminders for you.</p><ul><li>Review the details before saving.</li><li>Save as a booking reminder or add it straight to the roster.</li><li>Admin receives due reminders before the clean deadline.</li></ul></div></div>'+
          '<div class="br212-import-actions"><button class="btn btn-primary" data-action="open-chatgpt-booking-paste">'+svg('docs')+' Paste ChatGPT booking</button><button class="btn btn-soft" data-action="new-booking-reminder">'+svg('plus')+' Add manually</button><div class="br212-mini-note">'+svg('bell')+' Reminder alerts are sent to admin only and protected from duplicates.</div></div>'+
        '</section>'+
        '<div class="bk-filter">'+tab('active','Waiting',c.pending)+tab('due','Due soon',c.due)+tab('rostered','Rostered',c.rostered)+tab('done','Done',c.done)+tab('all','All',c.total)+'</div>'+
        '<div class="bk-list">'+(list.length?list.map(bookingCardHtml).join(''):'<div class="bk-empty">'+svg('bell')+'<h3>No booking reminders here yet</h3><p>Add email jobs and deadlines here so admin does not forget them before rostering.</p></div>')+'</div>'+
      '</div>';
    };

    var ww212OldCard=bookingCardHtml;
    bookingCardHtml=function(b){
      var html=ww212OldCard(b);
      html=html.replace(/<span class="bk-chip">Reminder [^<]*<\/span>/, '<span class="bk-chip br212-reminder-pill">Reminder '+escapeHtml(ww212ReminderText(b))+'</span>');
      if(html.indexOf('data-action="send-booking-reminder-now"')<0){
        html=html.replace('<button class="btn btn-soft" data-action="edit-booking"', '<button class="btn btn-soft br212-remind-now" data-action="send-booking-reminder-now" data-id="'+escapeHtml(b.id)+'">'+svg('bell')+' Remind now</button><button class="btn btn-soft" data-action="edit-booking"');
      }
      return html;
    };

    function ww212ChatGPTPasteModal(){
      var example='Company / client: Ray White Cranbourne\nContact person: Sarah\nEmail: sarah@example.com\nPhone: 0400 000 000\nJob address: 12 Sample Street, Cranbourne VIC\nClean date / deadline: 29/07/2026\nPreferred time: 9:30am\nService: End of lease clean\nReminder: 2 days and 1 day before\nNotes: Keys in lockbox. Must be completed before tenant handover.';
      return modalShell('ChatGPT booking import',
        '<div class="br212-import-modal">'+
          '<div class="br212-banner"><strong>Paste extracted booking details</strong><span>Copy the details from ChatGPT and paste them below. The app will pre-fill the booking for review before saving.</span></div>'+
          '<div class="field"><label>Paste booking details</label><textarea class="input br212-paste-box" id="br_chatgpt_paste" placeholder="'+escapeHtml(example)+'">'+escapeHtml((modal&&modal.data&&modal.data.text)||'')+'</textarea></div>'+
          '<div class="br212-format-card"><strong>Best format</strong>Company / client, contact person, email, phone, job address, clean date, preferred time, service, reminder and notes. Normal email text also works — the app will still try to read the important details.</div>'+
        '</div>',
        '<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="parse-chatgpt-booking">'+svg('plus')+' Create booking</button>');
    }

    var ww212OldBookingReminderModal=bookingReminderModal;
    bookingReminderModal=function(d){
      if(!(d&&d.__chatgptDraft))return ww212OldBookingReminderModal(d);
      var b=d||{}; var days=b.reminderDays||'2,1';
      var dueText=(b.cleanDate||today())+' · '+fmtTime(b.cleanTime||'09:00');
      return modalShell('Review booking reminder',
        '<div class="br212-review-head">'+
          '<div class="br212-banner"><strong>Review the booking before saving</strong><span>Everything below was arranged from your ChatGPT paste. Fix anything if needed, then save it or send it straight to the roster builder.</span></div>'+
          '<div class="br212-review-grid">'+
            '<div class="br212-review-item"><span>Client</span><strong>'+escapeHtml(b.company||'')+'</strong></div>'+
            '<div class="br212-review-item"><span>Due</span><strong>'+escapeHtml(dueText)+'</strong></div>'+
            '<div class="br212-review-item"><span>Contact</span><strong>'+escapeHtml(b.contactName||'Not added')+'</strong></div>'+
            '<div class="br212-review-item"><span>Reminder</span><strong>'+escapeHtml(days==='2,1'?'2 days + 1 day before':days)+'</strong></div>'+
            '<div class="br212-review-item full"><span>Address</span><strong>'+escapeHtml(b.address||'')+'</strong></div>'+
          '</div>'+
          '<div class="field"><label>Company / client name</label><input class="input" id="br_company" value="'+escapeHtml(b.company||'')+'"></div>'+
          '<div class="row2"><div class="field"><label>Contact person</label><input class="input" id="br_contact" value="'+escapeHtml(b.contactName||'')+'"></div><div class="field"><label>Source</label><select class="input" id="br_source"><option>ChatGPT paste</option><option>Email</option><option>Real estate</option><option>Company</option><option>Phone call</option></select></div></div>'+
          '<div class="row2"><div class="field"><label>Email</label><input class="input" id="br_email" value="'+escapeHtml(b.email||'')+'"></div><div class="field"><label>Phone</label><input class="input" id="br_phone" value="'+escapeHtml(b.phone||'')+'"></div></div>'+
          addressField('br_address',b.address||'','Job address')+
          '<div class="row2"><div class="field"><label>Clean deadline / job date</label><input class="input" type="date" id="br_date" value="'+(b.cleanDate||today())+'"></div><div class="field"><label>Preferred time</label>'+timeSelect('br_time',b.cleanTime||'09:00')+'</div></div>'+
          '<div class="row2"><div class="field"><label>Reminder</label><select class="input" id="br_reminder"><option value="2,1" '+(days==='2,1'?'selected':'')+'>2 days and 1 day before</option><option value="3,1" '+(days==='3,1'?'selected':'')+'>3 days and 1 day before</option><option value="2" '+(days==='2'?'selected':'')+'>2 days before</option><option value="1" '+(days==='1'?'selected':'')+'>1 day before</option><option value="0" '+(days==='0'?'selected':'')+'>Same day</option></select></div><div class="field"><label>Status</label><select class="input" id="br_status"><option value="pending" selected>Waiting to roster</option><option value="rostered">Rostered</option><option value="done">Done</option></select></div></div>'+
          '<div class="field"><label>Email details / notes</label><textarea class="input" id="br_notes" rows="6">'+escapeHtml(b.notes||'')+'</textarea></div>'+
        '</div>',
        '<span style="flex:1"></span><button class="btn btn-ghost" data-action="open-chatgpt-booking-paste">Back</button><button class="btn btn-soft" data-action="save-chatgpt-booking-and-roster">'+svg('roster')+' Save + add to roster</button><button class="btn btn-primary" data-action="save-booking-reminder" data-id="">'+svg('check')+' Save booking</button>');
    };

    var ww212OldModalContent=modalContent;
    modalContent=function(){
      if(modal&&modal.type==='chatgpt-booking')return ww212ChatGPTPasteModal();
      return ww212OldModalContent();
    };
  }catch(err){try{console.warn('V212 ChatGPT import layout patch failed',err);}catch(_){} }
})();
/* WW_V212_CHATGPT_IMPORT_LAYOUT_RUNTIME_END */

/* WW_V213_CHATGPT_IMPORT_DETAILS_REACTIONS_START
   Requested-only changes:
   - Redesign ChatGPT booking import section to the cleaner reference-style layout.
   - Keep every important email/job detail in the booking description.
   - Keep booking reminders with admin alerts and duplicate protection.
   - Keep/update important update reactions; add compact comment/reply reaction controls without changing other sections. */
(function(){
  try{
    if(window.__wwV213ImportDetailsReactionsInstalled)return;
    window.__wwV213ImportDetailsReactionsInstalled=true;

    function v213InstallStyles(){
      try{
        if(document.getElementById('ww-v213-import-details-style'))return;
        var st=document.createElement('style');
        st.id='ww-v213-import-details-style';
        st.textContent=`
          .bookings-page.v213-bookings{display:grid!important;gap:16px!important;max-width:1120px!important;margin:0 auto!important;padding-bottom:26px!important;overflow-x:hidden!important}
          .v213-bookings *{box-sizing:border-box!important}
          .v213-hero{position:relative!important;overflow:hidden!important;border-radius:28px!important;padding:22px!important;background:linear-gradient(135deg,#17301f,#385c3d 58%,#8a5a34)!important;color:#fff!important;box-shadow:0 20px 48px rgba(20,38,22,.18)!important;display:flex!important;align-items:flex-end!important;justify-content:space-between!important;gap:18px!important}
          .v213-hero::before{content:""!important;position:absolute!important;inset:-35% -8% auto auto!important;width:275px!important;height:275px!important;border-radius:999px!important;background:radial-gradient(circle,rgba(255,255,255,.22),transparent 62%)!important;pointer-events:none!important}
          .v213-hero-copy{position:relative!important;z-index:1!important;max-width:660px!important;min-width:0!important}
          .v213-eyebrow{display:inline-flex!important;align-items:center!important;gap:7px!important;padding:5px 10px!important;border-radius:999px!important;background:rgba(255,255,255,.14)!important;border:1px solid rgba(255,255,255,.20)!important;font-size:11px!important;font-weight:900!important;letter-spacing:.12em!important;text-transform:uppercase!important}
          .v213-hero h2{font-family:Georgia,serif!important;font-size:clamp(28px,4vw,46px)!important;line-height:1!important;margin:12px 0 8px!important;color:#fff!important;letter-spacing:-.035em!important}
          .v213-hero p{margin:0!important;opacity:.89!important;max-width:640px!important;font-weight:720!important;line-height:1.36!important}
          .v213-hero-actions{position:relative!important;z-index:1!important;display:flex!important;gap:10px!important;flex-wrap:wrap!important;justify-content:flex-end!important;align-items:center!important}
          .v213-hero-actions .btn{min-height:43px!important;border-radius:15px!important;font-weight:950!important;white-space:nowrap!important}
          .v213-stats{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:10px!important}
          .v213-stat{background:rgba(255,253,247,.96)!important;border:1px solid rgba(34,55,35,.10)!important;border-radius:20px!important;padding:15px 16px!important;box-shadow:0 10px 22px rgba(19,36,20,.07)!important}
          .v213-stat strong{display:block!important;font-size:27px!important;line-height:1!important;color:#18341f!important;font-weight:950!important}
          .v213-stat span{display:block!important;margin-top:5px!important;color:#6a7469!important;font-weight:850!important;font-size:11px!important;text-transform:uppercase!important;letter-spacing:.07em!important}
          .v213-stat.warn strong{color:#b07b1e!important}.v213-stat.alert strong{color:#a63a32!important}.v213-stat.ok strong{color:#2f7d43!important}
          .v213-import-tip{display:flex!important;gap:12px!important;align-items:flex-start!important;background:linear-gradient(135deg,#fffdf7,#f4eee2)!important;border:1px solid rgba(34,55,35,.11)!important;border-radius:20px!important;padding:15px!important;box-shadow:0 10px 22px rgba(19,36,20,.06)!important}
          .v213-tip-ic{width:43px!important;height:43px!important;border-radius:15px!important;background:#dfead8!important;color:#244326!important;display:grid!important;place-items:center!important;flex:0 0 auto!important}
          .v213-tip-ic svg{width:20px!important;height:20px!important}
          .v213-import-tip strong{display:block!important;color:#17321e!important;font-size:15px!important;line-height:1.15!important}
          .v213-import-tip p{margin:3px 0 0!important;color:#637064!important;font-size:13px!important;font-weight:720!important;line-height:1.35!important}
          .v213-toolbar{display:grid!important;gap:10px!important}
          .v213-search{width:100%!important;display:flex!important;align-items:center!important;gap:9px!important;background:#fffdf8!important;border:1px solid rgba(33,54,35,.12)!important;border-radius:17px!important;padding:0 12px!important;min-height:45px!important;box-shadow:0 8px 18px rgba(18,36,20,.05)!important;color:#47604c!important}
          .v213-search svg{width:18px!important;height:18px!important;flex:0 0 auto!important}.v213-search input{border:0!important;outline:0!important;background:transparent!important;width:100%!important;font-weight:800!important;color:#263a2a!important;min-width:0!important}
          .v213-filter-row{display:flex!important;gap:8px!important;overflow:auto!important;padding-bottom:2px!important;-webkit-overflow-scrolling:touch!important}
          .v213-filter{white-space:nowrap!important;border-radius:999px!important;padding:9px 13px!important;background:rgba(255,255,255,.75)!important;border:1px solid rgba(34,55,35,.11)!important;font-weight:850!important;color:#5e6b61!important;cursor:pointer!important}
          .v213-filter.active{background:#18341f!important;color:#fff!important;border-color:#18341f!important}
          .v213-list{display:grid!important;gap:12px!important}
          .v213-card{background:rgba(255,253,247,.96)!important;border:1px solid rgba(33,54,35,.12)!important;border-radius:24px!important;padding:16px!important;box-shadow:0 10px 24px rgba(19,36,20,.07)!important;position:relative!important;overflow:hidden!important}
          .v213-card::before{content:""!important;position:absolute!important;left:0!important;top:0!important;bottom:0!important;width:5px!important;background:linear-gradient(#7a987b,#385c3d)!important}.v213-card.urgent::before{background:linear-gradient(#cf8a64,#a8392f)!important}.v213-card.done{opacity:.82!important}
          .v213-card-top{display:flex!important;justify-content:space-between!important;gap:14px!important;align-items:flex-start!important;min-width:0!important}
          .v213-card-title{min-width:0!important}.v213-source{display:inline-flex!important;border-radius:999px!important;padding:4px 8px!important;background:#eef3e7!important;color:#34583b!important;font-size:10px!important;font-weight:950!important;text-transform:uppercase!important;letter-spacing:.08em!important;line-height:1!important}
          .v213-card h3{font-family:Georgia,serif!important;font-size:clamp(21px,4vw,25px)!important;line-height:1.05!important;margin:7px 0 3px!important;color:#18341f!important;overflow-wrap:anywhere!important}.v213-card-title p{margin:0!important;color:#667066!important;font-weight:750!important;font-size:13px!important}
          .v213-pills{display:flex!important;gap:6px!important;flex-wrap:wrap!important;justify-content:flex-end!important}.v213-pill{display:inline-flex!important;align-items:center!important;gap:5px!important;border-radius:999px!important;padding:6px 9px!important;font-size:11px!important;font-weight:950!important;border:1px solid transparent!important;background:#eef3e7!important;color:#385c3d!important;line-height:1!important}.v213-pill.warn{background:#fff3d8!important;color:#8d6413!important}.v213-pill.bad,.v213-pill.urgent{background:#fde9e4!important;color:#a8392f!important}.v213-pill.ok{background:#e7f4e5!important;color:#2f7d43!important}.v213-pill.info{background:#e8f1ff!important;color:#2f5597!important}.v213-pill.neutral{background:#eeeae0!important;color:#77756d!important}
          .v213-card-body{display:grid!important;gap:8px!important;margin-top:13px!important}.v213-line{display:flex!important;align-items:flex-start!important;gap:8px!important;color:#344139!important;font-weight:720!important;font-size:13px!important;line-height:1.3!important}.v213-line svg{width:17px!important;height:17px!important;color:#426b48!important;flex:0 0 auto!important;margin-top:1px!important}
          .v213-description{padding:10px 12px!important;border-radius:15px!important;background:#f6f1e7!important;color:#3e4a41!important;font-size:13px!important;font-weight:680!important;line-height:1.38!important;white-space:pre-wrap!important;max-height:96px!important;overflow:hidden!important;position:relative!important}.v213-description::after{content:""!important;position:absolute!important;left:0!important;right:0!important;bottom:0!important;height:24px!important;background:linear-gradient(transparent,#f6f1e7)!important;pointer-events:none!important}
          .v213-actions{display:flex!important;gap:8px!important;flex-wrap:wrap!important;margin-top:14px!important}.v213-actions .btn{min-height:36px!important;border-radius:13px!important;font-weight:900!important}.v213-actions .btn-sm{font-size:12px!important;padding:8px 11px!important}
          .v213-form,.v213-import,.v213-view{display:grid!important;gap:12px!important}.v213-form-banner{border-radius:18px!important;padding:13px 14px!important;background:linear-gradient(135deg,#eef3e7,#f4eee2)!important;border:1px solid rgba(34,55,35,.11)!important;display:grid!important;gap:2px!important}.v213-form-banner strong{color:#18341f!important}.v213-form-banner span{color:#607064!important;font-size:13px!important;font-weight:720!important;line-height:1.35!important}.v213-import-box{min-height:260px!important;font-size:15px!important;line-height:1.45!important}.v213-details-box{min-height:168px!important;white-space:pre-wrap!important;line-height:1.45!important}.v213-readbox{white-space:pre-wrap!important;background:#f8f3e8!important;border:1px solid rgba(34,55,35,.11)!important;border-radius:16px!important;padding:12px!important;color:#38453c!important;font-weight:680!important;line-height:1.42!important;max-height:360px!important;overflow:auto!important}.v213-view-head{display:flex!important;gap:8px!important;flex-wrap:wrap!important}.v213-review-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important}.v213-review-item{border:1px solid rgba(24,52,31,.10)!important;background:#fbfaf5!important;border-radius:16px!important;padding:11px 12px!important;min-width:0!important}.v213-review-item.full{grid-column:1/-1!important}.v213-review-item span{display:block!important;font-size:10px!important;text-transform:uppercase!important;letter-spacing:.08em!important;font-weight:950!important;color:#7b856f!important;margin-bottom:4px!important}.v213-review-item strong{display:block!important;color:#1f3224!important;font-weight:900!important;line-height:1.25!important;overflow-wrap:anywhere!important}
          .ucm-react,.ucm-reply-react{display:flex!important;align-items:center!important;gap:4px!important;margin-top:2px!important;flex-wrap:wrap!important}.ucm-rx-chip{border:0!important;border-radius:999px!important;background:#f1eee6!important;color:#455247!important;font-size:11px!important;font-weight:900!important;line-height:1!important;padding:3px 6px!important;display:inline-flex!important;gap:3px!important;align-items:center!important}.ucm-rx-chip.mine{background:#e4f1df!important;color:#24572c!important}.ucm-rx-add{width:19px!important;height:19px!important;min-width:19px!important;border-radius:999px!important;border:1px solid rgba(25,48,29,.10)!important;background:#fffaf1!important;color:#6a7668!important;display:inline-grid!important;place-items:center!important;padding:0!important}.ucm-rx-add svg{width:11px!important;height:11px!important}.ucm-reply .ucm-reply-react{display:inline-flex!important;margin-left:5px!important;vertical-align:middle!important}.ucm-rx-modal{display:grid!important;grid-template-columns:repeat(6,1fr)!important;gap:8px!important;padding:4px 0!important}.ucm-rx-pick{border:0!important;border-radius:14px!important;background:#f6f1e8!important;font-size:24px!important;min-height:48px!important;box-shadow:inset 0 0 0 1px rgba(38,57,39,.10)!important}
          @media(max-width:1023px){.v213-hero{border-radius:22px!important;padding:18px!important;display:grid!important}.v213-hero-actions{justify-content:stretch!important}.v213-hero-actions .btn{flex:1 1 auto!important}.v213-stats{grid-template-columns:repeat(2,minmax(0,1fr))!important}.v213-card-top{display:grid!important}.v213-pills{justify-content:flex-start!important}.v213-actions .btn{flex:1 1 auto!important}.v213-review-grid{grid-template-columns:1fr!important}}
          @media(max-width:430px){.v213-bookings{gap:13px!important}.v213-hero h2{font-size:31px!important}.v213-hero-actions{display:grid!important;grid-template-columns:1fr!important}.v213-stats{grid-template-columns:1fr 1fr!important;gap:8px!important}.v213-stat{padding:13px!important}.v213-stat strong{font-size:24px!important}.v213-card{padding:14px!important;border-radius:21px!important}.v213-actions{display:grid!important;grid-template-columns:1fr 1fr!important}.v213-actions .btn.primary-wide{grid-column:1/-1!important}.v213-import-box{min-height:230px!important}}
        `;
        document.head.appendChild(st);
      }catch(e){}
    }
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',v213InstallStyles,{once:true}); else v213InstallStyles();

    function v213Norm(s){return String(s||'').replace(/\s+/g,' ').trim();}
    function v213Field(lines,keys){
      var keyRe=keys.map(function(k){return k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}).join('|');
      var re=new RegExp('^\\s*(?:'+keyRe+')\\s*[:\\u2013\\-]\\s*(.+)$','i');
      for(var i=0;i<lines.length;i++){var m=String(lines[i]||'').match(re);if(m&&v213Norm(m[1]))return v213Norm(m[1]);}
      return '';
    }
    function v213IsoDate(v){
      var s=v213Norm(v).replace(/,/g,''); if(!s)return '';
      var y=new Date().getFullYear();
      if(/\btoday\b/i.test(s))return today();
      if(/\btomorrow\b/i.test(s))return addDays(today(),1);
      var isoMatch=s.match(/\b(20\d{2})[-\/](\d{1,2})[-\/](\d{1,2})\b/); if(isoMatch)return isoMatch[1]+'-'+String(isoMatch[2]).padStart(2,'0')+'-'+String(isoMatch[3]).padStart(2,'0');
      var au=s.match(/\b(\d{1,2})[\/\-.](\d{1,2})(?:[\/\-.](\d{2,4}))?\b/); if(au){var yy=au[3]?Number(au[3]):y;if(yy<100)yy+=2000;return yy+'-'+String(au[2]).padStart(2,'0')+'-'+String(au[1]).padStart(2,'0');}
      var months={jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,sept:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12};
      var mon=s.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t|tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)(?:\s+(20\d{2}|\d{2}))?\b/i);
      if(mon){var yy2=mon[3]?Number(mon[3]):y;if(yy2<100)yy2+=2000;return yy2+'-'+String(months[mon[2].toLowerCase()]).padStart(2,'0')+'-'+String(mon[1]).padStart(2,'0');}
      var days={sun:0,sunday:0,mon:1,monday:1,tue:2,tues:2,tuesday:2,wed:3,wednesday:3,thu:4,thur:4,thurs:4,thursday:4,fri:5,friday:5,sat:6,saturday:6};
      var dm=s.match(/\b(next\s+)?(sun(?:day)?|mon(?:day)?|tue(?:s|sday)?|wed(?:nesday)?|thu(?:r|rs|rsday|rday)?|fri(?:day)?|sat(?:urday)?)\b/i);
      if(dm){var target=days[dm[2].toLowerCase()];var d=new Date(today()+'T00:00:00');var diff=(target-d.getDay()+7)%7;if(diff===0||dm[1])diff+=7;d.setDate(d.getDate()+diff);return iso(d);}
      return '';
    }
    function v213Time(v){
      var s=v213Norm(v); if(!s)return '';
      var range=s.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\s*(?:-|to|\u2013|\u2014)\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/i);
      var first=range?range[1]+':'+(range[2]||'00')+(range[3]||''):s;
      var m=first.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/i); if(!m)return '';
      var h=Number(m[1]), mi=Number(m[2]||0), ap=(m[3]||'').toLowerCase(); if(ap==='pm'&&h<12)h+=12; if(ap==='am'&&h===12)h=0; if(h>23||mi>59)return ''; return String(h).padStart(2,'0')+':'+String(mi).padStart(2,'0');
    }
    function v213Reminder(v){var s=String(v||'').toLowerCase();if(/3/.test(s)&&/1/.test(s))return '3,1';if(/2/.test(s)&&/1/.test(s))return '2,1';if(/same|today|day of/.test(s))return '0';if(/3/.test(s))return '3,1';if(/2/.test(s))return '2';if(/1|tomorrow|day before/.test(s))return '1';return '2,1';}
    function v213FirstNonEmpty(){for(var i=0;i<arguments.length;i++){if(v213Norm(arguments[i]))return v213Norm(arguments[i]);}return '';}
    function v213BuildDetails(out,raw,service,notes){
      var parts=[];
      if(service)parts.push('Service / job type: '+service);
      if(out.company)parts.push('Client / company: '+out.company);
      if(out.contactName)parts.push('Contact person: '+out.contactName);
      if(out.email)parts.push('Email: '+out.email);
      if(out.phone)parts.push('Phone: '+out.phone);
      if(out.address)parts.push('Job address: '+out.address);
      if(out.cleanDate)parts.push('Job date / deadline: '+out.cleanDate+(out.cleanTime?' at '+out.cleanTime:''));
      if(out.reminderDays)parts.push('Reminder: '+(out.reminderDays==='2,1'?'2 days and 1 day before':out.reminderDays==='3,1'?'3 days and 1 day before':out.reminderDays==='0'?'Same day':out.reminderDays+' day before'));
      if(notes)parts.push('Notes: '+notes);
      if(raw)parts.push('Full original email / ChatGPT extraction:\n'+raw.trim());
      return parts.join('\n\n');
    }
    function v213ParseBookingText(text){
      var raw=String(text||'').trim();
      var lines=raw.split(/\r?\n/).map(function(x){return x.trim();}).filter(Boolean);
      var out={id:'',company:'',contactName:'',source:'ChatGPT Import',email:'',phone:'',address:'',cleanDate:today(),cleanTime:'09:00',reminderDays:'2,1',status:'pending',notes:'',__chatgptDraft:true};
      out.company=v213Field(lines,['company','client','client name','company / client','business','real estate','agency','customer','name']);
      out.contactName=v213Field(lines,['contact','contact person','person','sender','requested by','request from','property manager','agent']);
      out.address=v213Field(lines,['address','job address','site address','property address','location','cleaning address']);
      out.email=v213Field(lines,['email','sender email','contact email']) || ((raw.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)||[])[0]||'');
      out.phone=v213Field(lines,['phone','mobile','contact number','phone number']) || ((raw.match(/(?:\+?61|0)\s?4\d[\d\s]{7,10}|(?:\+?61|0)[2378][\d\s]{7,10}/)||[])[0]||'');
      var dateVal=v213Field(lines,['date','job date','clean date','cleaning date','deadline','due date','required by','wanted by','booking date','when']);
      if(!dateVal){var dm=raw.match(/(?:deadline|due|required|wanted|needed|job|clean|cleaning|date)[^\n:;]{0,30}[:\-\u2013]?\s*([^\n;]{3,90})/i);if(dm)dateVal=dm[1];}
      out.cleanDate=v213IsoDate(dateVal)||v213IsoDate(raw)||today();
      var timeVal=v213Field(lines,['time','preferred time','start time','clean time','booking time','arrival time']);
      out.cleanTime=v213Time(timeVal)||v213Time(raw)||'09:00';
      out.reminderDays=v213Reminder(v213Field(lines,['reminder','remind','remind me','notification','alert']));
      var service=v213Field(lines,['service','clean type','job type','type','clean','request','scope','work required']);
      var notes=v213Field(lines,['notes','details','description','message','summary','email details','access','keys','instructions']);
      if(!out.address){
        var addrLine=lines.find(function(l){return /\b(vic|nsw|qld|sa|wa|tas|act|nt)\b/i.test(l)&&/\d|street|st\b|road|rd\b|avenue|ave\b|drive|dr\b|court|ct\b|unit|suburb/i.test(l);});
        if(addrLine)out.address=addrLine.replace(/^\s*(address|location|site)\s*[:\-\u2013]\s*/i,'');
      }
      if(!out.company){var subj=v213Field(lines,['subject']); if(subj)out.company=subj.replace(/\b(clean|cleaning|booking|request|job|quote|urgent)\b/ig,'').replace(/[:\-\u2013]+/g,' ').trim();}
      if(!out.company && out.contactName)out.company=out.contactName;
      if(!out.company && out.email)out.company=out.email.split('@')[0].replace(/[._-]+/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
      if(!out.company)out.company='New email booking';
      out.notes=v213BuildDetails(out,raw,service,notes);
      return out;
    }
    window.ww213ParseBookingText=v213ParseBookingText;

    function v213Counts(){var c=bookingCounts();return c;}
    function v213List(){
      var q=String(state.bookingSearch||'').toLowerCase().trim();
      return filteredBookings().filter(function(b){
        if(!q)return true;
        return [bookingClientLabel(b),b.contactName,b.address,b.email,b.phone,b.notes,b.source].join(' ').toLowerCase().indexOf(q)>-1;
      });
    }
    function v213StatusPill(b){var info=bookingStatusInfo(b);var cls=info.cls==='urgent'?'bad':info.cls==='done'?'ok':info.cls==='rostered'?'info':'neutral';return '<span class="v213-pill '+cls+'">'+escapeHtml(info.label)+'</span>';}
    function v213ReminderText(b){return bookingReminderOffsets(b||{}).map(function(n){return n===0?'same day':(n+' day'+(Number(n)===1?'':'s')+' before');}).join(' + ');}
    function v213Filter(key,label,count){var f=state.bookingFilter||'active';return '<button class="v213-filter '+(f===key?'active':'')+'" data-action="booking-filter" data-filter="'+key+'">'+label+(count!=null?' · '+count:'')+'</button>';}

    adminBookingsPage=function(u){
      var c=v213Counts(); var list=v213List();
      return '<div class="bookings-page v213-bookings">'+
        '<section class="v213-hero"><div class="v213-hero-copy"><span class="v213-eyebrow">'+svg('bell')+' Admin only</span><h2>Bookings &amp; Reminders</h2><p>Keep company email jobs, real estate requests, ChatGPT imports, screenshots and deadlines in one place before adding them to the roster.</p></div><div class="v213-hero-actions"><button class="btn btn-primary" data-action="new-booking-reminder">'+svg('plus')+' Add booking</button><button class="btn btn-soft" data-action="open-chatgpt-booking-paste">'+svg('docs')+' ChatGPT import</button></div></section>'+
        '<section class="v213-stats"><div class="v213-stat"><strong>'+c.pending+'</strong><span>Open bookings</span></div><div class="v213-stat alert"><strong>'+c.due+'</strong><span>Due soon</span></div><div class="v213-stat ok"><strong>'+c.rostered+'</strong><span>Rostered</span></div><div class="v213-stat"><strong>'+c.total+'</strong><span>Total saved</span></div></section>'+
        '<section class="v213-import-tip"><span class="v213-tip-ic">'+svg('docs')+'</span><div><strong>Screenshot workflow</strong><p>Send the email screenshot to ChatGPT, let ChatGPT extract the details, then paste the structured booking here. The app will pre-fill the booking, store the full description and remind admin before the deadline.</p></div></section>'+ 
        '<div class="v213-toolbar"><label class="v213-search">'+svg('search')+'<input data-action="booking-search" value="'+escapeHtml(state.bookingSearch||'')+'" placeholder="Search company, address, contact or notes…"></label><div class="v213-filter-row">'+v213Filter('active','Open',c.pending)+v213Filter('due','Due soon',c.due)+v213Filter('rostered','Rostered',c.rostered)+v213Filter('done','Done',c.done)+v213Filter('all','All',c.total)+'</div></div>'+ 
        '<div class="v213-list">'+(list.length?list.map(v213BookingCard).join(''):emptyState('No bookings match this view. Add a booking or import one from ChatGPT.'))+'</div>'+ 
      '</div>';
    };

    function v213BookingCard(b){
      var info=bookingStatusInfo(b); var urgent=info.cls==='urgent';
      return '<article class="v213-card '+(urgent?'urgent ':'')+(b.status==='done'?'done ':'')+'">'+
        '<div class="v213-card-top"><div class="v213-card-title"><span class="v213-source">'+escapeHtml(b.source||'Email')+'</span><h3>'+escapeHtml(bookingClientLabel(b))+'</h3><p>'+(b.contactName?escapeHtml(b.contactName):'No contact added')+'</p></div><div class="v213-pills">'+v213StatusPill(b)+'<span class="v213-pill info">Reminder '+escapeHtml(v213ReminderText(b))+'</span></div></div>'+
        '<div class="v213-card-body"><div class="v213-line">'+svg('cal')+'<span>'+escapeHtml(bookingDateTimeLabel(b))+'</span></div>'+
        (b.address?'<div class="v213-line">'+svg('pin')+'<span>'+escapeHtml(b.address)+'</span></div>':'')+
        ((b.email||b.phone)?'<div class="v213-line">'+svg('account')+'<span>'+escapeHtml([b.email,b.phone].filter(Boolean).join(' · '))+'</span></div>':'')+
        (b.notes?'<div class="v213-description">'+escapeHtml(b.notes)+'</div>':'')+'</div>'+
        '<div class="v213-actions">'+(b.status!=='done'?'<button class="btn btn-primary btn-sm primary-wide" data-action="create-roster-from-booking" data-id="'+escapeHtml(b.id)+'">'+svg('roster')+' Add to roster</button>':'')+
        '<button class="btn btn-soft btn-sm" data-action="send-booking-reminder-now" data-id="'+escapeHtml(b.id)+'">'+svg('bell')+' Remind now</button>'+ 
        '<button class="btn btn-soft btn-sm" data-action="edit-booking" data-id="'+escapeHtml(b.id)+'">'+svg('edit')+' Edit</button>'+ 
        '<button class="btn btn-ghost btn-sm" data-action="view-booking-reminder" data-id="'+escapeHtml(b.id)+'">'+svg('eye')+' View</button>'+ 
        (b.status==='done'?'<button class="btn btn-ghost btn-sm" data-action="reopen-booking" data-id="'+escapeHtml(b.id)+'">Reopen</button>':'<button class="btn btn-ghost btn-sm" data-action="complete-booking" data-id="'+escapeHtml(b.id)+'">Complete</button>')+
        '<button class="btn btn-ghost btn-sm" data-action="delete-booking" data-id="'+escapeHtml(b.id)+'">Archive</button></div></article>';
    }

    function v213ImportModal(){
      var example='Company / client: Ray White Cranbourne\nContact person: Sarah\nEmail: sarah@example.com\nPhone: 0400 000 000\nJob address: 12 Sample Street, Cranbourne VIC\nClean date / deadline: 29/07/2026\nPreferred time: 9:30am\nService: End of lease clean\nReminder: 2 days and 1 day before\nNotes: Keys in lockbox. Must be completed before tenant handover.';
      return modalShell('ChatGPT booking import','<div class="v213-import"><div class="v213-form-banner"><strong>Paste extracted booking details</strong><span>Copy the details from ChatGPT and paste them below. The app will arrange everything into a booking reminder for review.</span></div><div class="field"><label>Paste booking details</label><textarea class="input v213-import-box" id="br_chatgpt_paste" placeholder="'+escapeHtml(example)+'">'+escapeHtml((modal&&modal.data&&modal.data.text)||'')+'</textarea></div><p class="co-hint">The description will keep the full email/ChatGPT text so no job detail is lost.</p></div>','<span style="flex:1"></span><button class="btn btn-ghost" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="parse-chatgpt-booking">'+svg('plus')+' Create booking</button>');
    }
    var v213OldBookingReminderModal=bookingReminderModal;
    bookingReminderModal=function(d){
      if(!(d&&d.__chatgptDraft))return v213OldBookingReminderModal(d);
      var b=d||{}; var days=b.reminderDays||'2,1'; var dueText=(b.cleanDate||today())+' · '+fmtTime(b.cleanTime||'09:00');
      return modalShell('Review booking','<div class="v213-form"><div class="v213-form-banner"><strong>Review before saving</strong><span>Everything below was arranged from the ChatGPT import. Fix anything if needed, then save it or send it straight to the roster builder.</span></div><div class="v213-review-grid"><div class="v213-review-item"><span>Client</span><strong>'+escapeHtml(b.company||'')+'</strong></div><div class="v213-review-item"><span>Due</span><strong>'+escapeHtml(dueText)+'</strong></div><div class="v213-review-item"><span>Contact</span><strong>'+escapeHtml(b.contactName||'Not added')+'</strong></div><div class="v213-review-item"><span>Reminder</span><strong>'+escapeHtml(v213ReminderText(b))+'</strong></div><div class="v213-review-item full"><span>Address</span><strong>'+escapeHtml(b.address||'')+'</strong></div></div><div class="field"><label>Company / client name</label><input class="input" id="br_company" value="'+escapeHtml(b.company||'')+'"></div><div class="row2"><div class="field"><label>Contact person</label><input class="input" id="br_contact" value="'+escapeHtml(b.contactName||'')+'"></div><div class="field"><label>Source</label><select class="input" id="br_source"><option selected>ChatGPT Import</option><option>Email</option><option>Real estate</option><option>Company</option><option>Phone call</option></select></div></div><div class="row2"><div class="field"><label>Email</label><input class="input" id="br_email" value="'+escapeHtml(b.email||'')+'"></div><div class="field"><label>Phone</label><input class="input" id="br_phone" value="'+escapeHtml(b.phone||'')+'"></div></div>'+addressField('br_address',b.address||'','Job address')+'<div class="row2"><div class="field"><label>Clean deadline / job date</label><input class="input" type="date" id="br_date" value="'+(b.cleanDate||today())+'"></div><div class="field"><label>Preferred time</label>'+timeSelect('br_time',b.cleanTime||'09:00')+'</div></div><div class="row2"><div class="field"><label>Reminder</label><select class="input" id="br_reminder"><option value="2,1" '+(days==='2,1'?'selected':'')+'>2 days and 1 day before</option><option value="3,1" '+(days==='3,1'?'selected':'')+'>3 days and 1 day before</option><option value="2" '+(days==='2'?'selected':'')+'>2 days before</option><option value="1" '+(days==='1'?'selected':'')+'>1 day before</option><option value="0" '+(days==='0'?'selected':'')+'>Same day</option></select></div><div class="field"><label>Status</label><select class="input" id="br_status"><option value="pending" selected>Needs roster</option><option value="rostered">Rostered</option><option value="done">Done</option></select></div></div><div class="field"><label>Description / full job details</label><textarea class="input v213-details-box" id="br_notes" rows="8">'+escapeHtml(b.notes||'')+'</textarea></div></div>','<span style="flex:1"></span><button class="btn btn-ghost" data-action="open-chatgpt-booking-paste">Back</button><button class="btn btn-soft" data-action="save-chatgpt-booking-and-roster">'+svg('roster')+' Save + add to roster</button><button class="btn btn-primary" data-action="save-booking-reminder" data-id="">'+svg('check')+' Save booking</button>');
    };

    function v213ViewModal(id){
      var b=(state.bookingReminders||[]).find(function(x){return x&&x.id===id;});
      if(!b)return modalShell('Booking details','<div class="empty"><p>Booking not found.</p></div>','<button class="btn btn-ghost" data-action="close-modal">Close</button>');
      var body='<div class="v213-view"><div class="v213-view-head">'+v213StatusPill(b)+'<span class="v213-pill info">Reminder '+escapeHtml(v213ReminderText(b))+'</span><span class="v213-source">'+escapeHtml(b.source||'Email')+'</span></div><h3 style="margin:0;color:#18341f;font-family:Georgia,serif;font-size:25px">'+escapeHtml(bookingClientLabel(b))+'</h3><div class="v213-line">'+svg('cal')+'<span>'+escapeHtml(bookingDateTimeLabel(b))+'</span></div>'+(b.address?'<div class="v213-line">'+svg('pin')+'<span>'+escapeHtml(b.address)+'</span></div>':'')+((b.contactName||b.email||b.phone)?'<div class="v213-line">'+svg('account')+'<span>'+escapeHtml([b.contactName,b.email,b.phone].filter(Boolean).join(' · '))+'</span></div>':'')+'<div class="field"><label>Description / full job details</label><div class="v213-readbox">'+escapeHtml(b.notes||'No details saved.')+'</div></div></div>';
      var foot=(b.status!=='done'?'<button class="btn btn-primary" data-action="create-roster-from-booking" data-id="'+escapeHtml(b.id)+'">'+svg('roster')+' Add to roster</button>':'')+'<span style="flex:1"></span><button class="btn btn-soft" data-action="edit-booking" data-id="'+escapeHtml(b.id)+'">Edit</button><button class="btn btn-ghost" data-action="close-modal">Close</button>';
      return modalShell('Booking details',body,foot);
    }

    var v213OldModalContent=modalContent;
    modalContent=function(){
      if(modal&&modal.type==='chatgpt-booking')return v213ImportModal();
      if(modal&&modal.type==='booking-view-v213')return v213ViewModal(modal.data&&modal.data.id);
      if(modal&&modal.type==='upd-comment-react')return v213ReactionModal(modal.data,'comment');
      if(modal&&modal.type==='upd-reply-react')return v213ReactionModal(modal.data,'reply');
      return v213OldModalContent();
    };

    window.addEventListener('click',function(e){
      var el=e.target&&e.target.closest?e.target.closest('[data-action]'):null; if(!el)return;
      var a=el.dataset.action; var u=me&&me();
      if(a==='open-chatgpt-booking-paste'){if(!u||u.role!=='admin')return; e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); openModal('chatgpt-booking',{text:(document.getElementById('br_chatgpt_paste')||{}).value||''}); return;}
      if(a==='parse-chatgpt-booking'){if(!u||u.role!=='admin')return; e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); var txt=(document.getElementById('br_chatgpt_paste')||{}).value||''; if(!txt.trim()){toast('Paste the booking details first');return;} openModal('booking-reminder',v213ParseBookingText(txt)); return;}
      if(a==='view-booking-reminder'){if(!u||u.role!=='admin')return; e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); openModal('booking-view-v213',{id:el.dataset.id}); return;}
      if(a==='booking-search'){return;}
      if(a==='upd-comment-react-pick'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();openModal('upd-comment-react',{id:el.dataset.id,cid:el.dataset.cid});return;}
      if(a==='upd-reply-react-pick'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();openModal('upd-reply-react',{id:el.dataset.id,cid:el.dataset.cid,rid:el.dataset.rid});return;}
      if(a==='toggle-upd-comment-rx'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();v213ToggleCommentReaction(el.dataset.id,el.dataset.cid,el.dataset.emoji,u);return;}
      if(a==='toggle-upd-reply-rx'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();v213ToggleReplyReaction(el.dataset.id,el.dataset.cid,el.dataset.rid,el.dataset.emoji,u);return;}
      if(a==='pick-upd-comment-rx'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();v213ToggleCommentReaction(el.dataset.id,el.dataset.cid,el.dataset.emoji,u);closeModal();return;}
      if(a==='pick-upd-reply-rx'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();v213ToggleReplyReaction(el.dataset.id,el.dataset.cid,el.dataset.rid,el.dataset.emoji,u);closeModal();return;}
    },true);
    document.addEventListener('input',function(e){var el=e.target;if(el&&el.dataset&&el.dataset.action==='booking-search'){state.bookingSearch=el.value||'';save();render();setTimeout(function(){var again=document.querySelector('[data-action="booking-search"]');if(again){again.focus();try{again.setSelectionRange(again.value.length,again.value.length);}catch(_){}}},0);}},true);

    function v213ReactionChips(map,id,cid,rid,u,type){
      map=map||{}; var keys=Object.keys(map).filter(function(k){return Array.isArray(map[k])&&map[k].length;});
      var chips=keys.map(function(emoji){var arr=map[emoji]||[];var mine=u&&arr.indexOf(u.id)>-1;var action=type==='reply'?'toggle-upd-reply-rx':'toggle-upd-comment-rx';return '<button class="ucm-rx-chip '+(mine?'mine':'')+'" data-action="'+action+'" data-id="'+id+'" data-cid="'+cid+'" '+(rid?'data-rid="'+rid+'"':'')+' data-emoji="'+emoji+'">'+emoji+'<span>'+arr.length+'</span></button>';}).join('');
      var pickAction=type==='reply'?'upd-reply-react-pick':'upd-comment-react-pick';
      return '<div class="'+(type==='reply'?'ucm-reply-react':'ucm-react')+'">'+chips+'<button class="ucm-rx-add" data-action="'+pickAction+'" data-id="'+id+'" data-cid="'+cid+'" '+(rid?'data-rid="'+rid+'"':'')+' aria-label="React">'+svg('smile')+'</button></div>';
    }
    function v213CommentById(id,cid){var up=(state.updates||[]).find(function(x){return x&&x.id===id;});var c=up&&Array.isArray(up.comments)?up.comments.find(function(x){return x&&x.id===cid;}):null;return {up:up,c:c};}
    function v213ToggleMapReaction(obj,emoji,u){if(!obj||!u)return;obj.reactions=obj.reactions||{};emoji=emoji||'👍';var arr=Array.isArray(obj.reactions[emoji])?obj.reactions[emoji]:[];var ix=arr.indexOf(u.id);if(ix>=0)arr.splice(ix,1);else arr.push(u.id);obj.reactions[emoji]=arr;}
    function v213ToggleCommentReaction(id,cid,emoji,u){var found=v213CommentById(id,cid);if(!found.c)return;v213ToggleMapReaction(found.c,emoji,u);saveRealtime();render();}
    function v213ToggleReplyReaction(id,cid,rid,emoji,u){var found=v213CommentById(id,cid);var r=found.c&&Array.isArray(found.c.replies)?found.c.replies.find(function(x){return x&&x.id===rid;}):null;if(!r)return;v213ToggleMapReaction(r,emoji,u);saveRealtime();render();}
    function v213ReactionModal(d,type){var title=type==='reply'?'React to reply':'React to comment';return modalShell(title,'<div class="ucm-rx-modal">'+UPD_EMOJIS.map(function(e){var action=type==='reply'?'pick-upd-reply-rx':'pick-upd-comment-rx';return '<button class="ucm-rx-pick" data-action="'+action+'" data-id="'+escapeHtml(d.id||'')+'" data-cid="'+escapeHtml(d.cid||'')+'" '+(d.rid?'data-rid="'+escapeHtml(d.rid)+'"':'')+' data-emoji="'+e+'">'+e+'</button>';}).join('')+'</div>','<button class="btn btn-ghost" data-action="close-modal">Cancel</button>');}

    var v213OldUpdCommentsBlock=updCommentsBlock;
    updCommentsBlock=function(up,u){
      var comments=Array.isArray(up.comments)?up.comments.slice().sort(function(a,b){return String(a.createdAt).localeCompare(String(b.createdAt));}):[];
      return '<div class="upd-comments"><div class="upd-comments-head">'+(comments.length?(comments.length+' comment'+(comments.length>1?'s':'')):'Comments')+'</div><div class="upd-comment-list">'+comments.map(function(c){var au=userById(c.authorId);var replies=Array.isArray(c.replies)?c.replies:[];return '<div class="upd-comment"><div class="ucm-av"><div class="avatar sm '+(au&&au.role==='admin'?'clay':'sage')+'">'+initials((au&&au.name)||'?')+'</div></div><div class="ucm-body"><div class="ucm-top"><span class="ucm-name">'+escapeHtml((au&&au.name)||'Someone')+'</span><span class="ucm-time">'+timeAgo(c.createdAt)+'</span></div><div class="ucm-text">'+escapeHtml(c.text)+'</div>'+v213ReactionChips(c.reactions,up.id,c.id,'',u,'comment')+'<button class="ucm-reply-btn" data-action="upd-reply" data-id="'+up.id+'" data-cid="'+c.id+'">Reply</button>'+(replies.length?'<div class="ucm-replies">'+replies.map(function(r){var ra=userById(r.authorId);return '<div class="ucm-reply"><span class="ucm-name">'+escapeHtml((ra&&ra.name)||'Someone')+'</span> <span class="ucm-text">'+escapeHtml(r.text)+'</span> <span class="ucm-time">'+timeAgo(r.createdAt)+'</span>'+v213ReactionChips(r.reactions,up.id,c.id,r.id,u,'reply')+'</div>';}).join('')+'</div>':'')+'</div></div>';}).join('')+'</div><div class="upd-comment-add"><input class="upd-comment-input" id="updc-'+up.id+'" placeholder="Write a comment…" data-action="upd-comment-input" data-id="'+up.id+'"><button class="upd-comment-send" data-action="upd-comment-send" data-id="'+up.id+'">'+svg('send')+'</button></div></div>';
    };

  }catch(err){try{console.warn('V213 patch failed',err);}catch(_){}}
})();
/* WW_V213_CHATGPT_IMPORT_DETAILS_REACTIONS_END */

/* WW_V215_BOOKING_NOTIFICATION_SETTINGS_START */
(function installBookingNotificationSettingsV215(){
  try{
    if(window.__ww215BookingNotificationsInstalled)return;
    window.__ww215BookingNotificationsInstalled=true;

    function ww215TimeMins(t){
      var p=String(t||'09:00').split(':').map(function(x){return parseInt(x,10)||0;});
      return Math.max(0,Math.min(1439,(p[0]||0)*60+(p[1]||0)));
    }
    function ww215MelbourneParts(){
      try{
        var parts=new Intl.DateTimeFormat('en-CA',{timeZone:APP_TZ,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date()).reduce(function(a,p){a[p.type]=p.value;return a;},{});
        var hour=parseInt(parts.hour,10); if(hour===24)hour=0;
        return {date:parts.year+'-'+parts.month+'-'+parts.day, mins:hour*60+(parseInt(parts.minute,10)||0)};
      }catch(e){
        var d=new Date();return {date:today(),mins:d.getHours()*60+d.getMinutes()};
      }
    }
    function ww215DateDiff(a,b){
      try{return Math.round((new Date(b+'T00:00:00').getTime()-new Date(a+'T00:00:00').getTime())/DAY);}catch(e){return 0;}
    }
    function ww215TimeDue(targetDate,targetTime,now){
      now=now||ww215MelbourneParts();
      if(!targetDate)return false;
      if(now.date>targetDate)return true;
      if(now.date<targetDate)return false;
      return now.mins>=ww215TimeMins(targetTime||'09:00');
    }
    function ww215CleanNotifyMode(v){
      v=String(v||'offsets');
      return ['offsets','daily','twoDays','manual','off'].indexOf(v)>=0?v:'offsets';
    }
    function ww215NotifyTime(b){return (b&&b.notifyTime)||((b&&b.cleanTime)||'09:00');}
    function ww215ScheduleLabel(b){
      b=b||{};var mode=ww215CleanNotifyMode(b.notifyMode);
      if(mode==='off')return 'Phone reminders off';
      if(mode==='manual')return 'Exact reminder '+fmtDate(b.notifyManualDate||b.cleanDate||today())+' · '+fmtTime(b.notifyManualTime||ww215NotifyTime(b));
      if(mode==='daily')return 'Every day at '+fmtTime(ww215NotifyTime(b));
      if(mode==='twoDays')return 'Every 2 days at '+fmtTime(ww215NotifyTime(b));
      var days=bookingReminderOffsets(b).map(function(n){return n===0?'same day':(n+'d before');}).join(' + ');
      return days+' at '+fmtTime(ww215NotifyTime(b));
    }
    window.ww215BookingNotificationLabel=ww215ScheduleLabel;

    function ww215NotificationSettingsHtml(b){
      b=b||{}; var mode=ww215CleanNotifyMode(b.notifyMode); var nt=ww215NotifyTime(b);
      var md=b.notifyManualDate||b.cleanDate||today(); var mt=b.notifyManualTime||nt;
      return '<section class="ww215-notify-panel">'+
        '<div class="ww215-notify-head"><span>'+svg('bell')+'</span><div><strong>Phone notification settings</strong><small>Choose exactly how admin should be reminded for this imported job.</small></div></div>'+
        '<div class="row2"><div class="field"><label>Notification schedule</label><select class="input" id="br_notify_mode">'+
          '<option value="offsets" '+(mode==='offsets'?'selected':'')+'>Use day-before reminder setting</option>'+
          '<option value="daily" '+(mode==='daily'?'selected':'')+'>Every 1 day until job date</option>'+
          '<option value="twoDays" '+(mode==='twoDays'?'selected':'')+'>Every 2 days until job date</option>'+
          '<option value="manual" '+(mode==='manual'?'selected':'')+'>Pick exact reminder date & time</option>'+
          '<option value="off" '+(mode==='off'?'selected':'')+'>No phone reminder</option>'+
        '</select></div><div class="field"><label>Reminder time</label>'+timeSelect('br_notify_time',nt)+'</div></div>'+
        '<div class="row2"><div class="field"><label>Manual reminder date</label><input class="input" type="date" id="br_notify_manual_date" value="'+escapeHtml(md)+'"></div><div class="field"><label>Manual reminder time</label>'+timeSelect('br_notify_manual_time',mt)+'</div></div>'+
        '<p class="ww215-notify-help">For “day before”, use the Reminder dropdown above. For “every 1 day” or “every 2 days”, the app sends one admin phone alert at the selected time until the job date. Manual sends once on the exact date and time.</p>'+
      '</section>';
    }

    function ww215InstallStyles(){
      if(document.getElementById('ww-v215-booking-notify-style'))return;
      var st=document.createElement('style');st.id='ww-v215-booking-notify-style';
      st.textContent=''+
        '.ww215-notify-panel{margin-top:12px;padding:14px;border:1px solid rgba(28,56,33,.13);border-radius:18px;background:linear-gradient(135deg,#f7f2e8,#eef2e7);box-shadow:inset 0 1px rgba(255,255,255,.65)}'+
        '.ww215-notify-head{display:flex;gap:10px;align-items:flex-start;margin-bottom:10px}.ww215-notify-head>span{width:34px;height:34px;border-radius:14px;background:#18341f;color:#f7f2e8;display:grid;place-items:center;flex:0 0 auto}.ww215-notify-head svg{width:18px;height:18px}.ww215-notify-head strong{display:block;color:#18341f;font-weight:950}.ww215-notify-head small{display:block;color:#66705d;font-weight:750;line-height:1.35;margin-top:2px}.ww215-notify-help{margin:8px 0 0;color:#66705d;font-size:12px;line-height:1.4;font-weight:720}.ww215-push-card{display:flex;gap:12px;align-items:center;justify-content:space-between;margin:12px 0;padding:14px;border-radius:20px;border:1px solid rgba(24,52,31,.12);background:#f7f2e8}.ww215-push-card strong{display:block;color:#18341f}.ww215-push-card span{display:block;color:#66705d;font-size:13px;font-weight:720;line-height:1.35;margin-top:2px}.ww215-schedule-pill{background:#edf3e8!important;color:#31513a!important;border-color:rgba(49,81,58,.18)!important}@media(max-width:720px){.ww215-push-card{display:block}.ww215-push-card .btn{margin-top:10px;width:100%;justify-content:center}}';
      document.head.appendChild(st);
    }
    ww215InstallStyles();

    var ww215OldAddAlertForUsers=addAlertForUsers;
    addAlertForUsers=function(userIds,text,opts){
      opts=opts||{};var before=(state.alerts||[]).length;ww215OldAddAlertForUsers(userIds,text,opts);
      if(opts.dedupeKey||opts.url||opts.bookingId){
        var added=(state.alerts||[]).slice(0,Math.max(0,(state.alerts||[]).length-before));
        added.forEach(function(a){
          if(!a)return;
          if(opts.dedupeKey)a.dedupeKey=opts.dedupeKey;
          if(opts.url)a.url=opts.url;
          if(opts.bookingId)a.bookingId=opts.bookingId;
        });
      }
    };

    var ww215OldBookingReminderModal=bookingReminderModal;
    bookingReminderModal=function(d){
      var html=ww215OldBookingReminderModal(d);
      try{
        if(html.indexOf('id="br_notify_mode"')>=0)return html;
        var b=(d&&d.id?(state.bookingReminders||[]).find(function(x){return x&&x.id===d.id;})||{}:(d||{}));
        var panel=ww215NotificationSettingsHtml(b);
        return html.replace('</div>\n      <div class="modal-foot">',panel+'</div>\n      <div class="modal-foot">');
      }catch(e){return html;}
    };

    var ww215OldCollectBookingDraft=collectBookingDraft;
    collectBookingDraft=function(id){
      var out=ww215OldCollectBookingDraft(id);
      try{
        out.notifyMode=ww215CleanNotifyMode((document.getElementById('br_notify_mode')||{}).value||out.notifyMode||'offsets');
        out.notifyTime=(document.getElementById('br_notify_time')||{}).value||out.notifyTime||out.cleanTime||'09:00';
        out.notifyManualDate=(document.getElementById('br_notify_manual_date')||{}).value||out.notifyManualDate||out.cleanDate||today();
        out.notifyManualTime=(document.getElementById('br_notify_manual_time')||{}).value||out.notifyManualTime||out.notifyTime||'09:00';
      }catch(e){}
      return out;
    };

    var ww215OldAdminBookingsPage=adminBookingsPage;
    adminBookingsPage=function(u){
      var html=ww215OldAdminBookingsPage(u);
      try{
        if(html.indexOf('ww215-push-card')>=0)return html;
        var card='<section class="ww215-push-card"><div><strong>Booking phone notifications</strong><span>Use “Remind now” to test instantly. Edit a booking to choose every 1 day, every 2 days, day-before reminders, or an exact reminder date/time.</span></div>'+notificationPermissionHtml()+'</section>';
        return html.replace('<div class="v213-list">',card+'<div class="v213-list">').replace('<div class="bk-list">',card+'<div class="bk-list">');
      }catch(e){return html;}
    };

    var ww215OldBookingCardHtml=bookingCardHtml;
    bookingCardHtml=function(b){
      var html=ww215OldBookingCardHtml(b);
      try{
        if(html.indexOf('ww215-schedule-pill')>=0)return html;
        var pill='<span class="bk-chip ww215-schedule-pill">Phone '+escapeHtml(ww215ScheduleLabel(b))+'</span>';
        return html.replace('</div>\n      <h3>',pill+'</div>\n      <h3>');
      }catch(e){return html;}
    };

    function ww215DueSlotsForBooking(b,now){
      var slots=[]; if(!b||b._deleted||!b.cleanDate||b.status==='done')return slots;
      now=now||ww215MelbourneParts(); var mode=ww215CleanNotifyMode(b.notifyMode); var nt=ww215NotifyTime(b);
      if(mode==='off')return slots;
      if(mode==='manual'){
        var md=b.notifyManualDate||b.cleanDate, mt=b.notifyManualTime||nt;
        if(ww215TimeDue(md,mt,now))slots.push({key:'booking:'+b.id+':manual:'+md+':'+mt,text:'Booking reminder: '+bookingClientLabel(b)+' is due '+bookingDateTimeLabel(b)+'. Add it to the roster.',priority:true});
        return slots;
      }
      if(mode==='daily'||mode==='twoDays'){
        if(now.date<=b.cleanDate && ww215TimeDue(now.date,nt,now)){
          var diff=ww215DateDiff(now.date,b.cleanDate);
          if(mode==='daily'||diff%2===0)slots.push({key:'booking:'+b.id+':'+mode+':'+now.date+':'+nt,text:'Booking reminder: '+bookingClientLabel(b)+' is due '+bookingDateTimeLabel(b)+'. Add it to the roster.',priority:diff<=1});
        }
        return slots;
      }
      bookingReminderOffsets(b).forEach(function(days){
        var dueDate=addDays(b.cleanDate,-days);
        if(now.date>b.cleanDate)return;
        if(ww215TimeDue(dueDate,nt,now)){
          slots.push({key:'booking:'+b.id+':offset:'+b.cleanDate+':'+days+':'+nt,text:'Booking reminder: '+bookingClientLabel(b)+' is due '+bookingDateTimeLabel(b)+'. Add it to the roster.',priority:days<=1});
        }
      });
      return slots;
    }
    window.ww215DueSlotsForBooking=ww215DueSlotsForBooking;

    fireBookingReminders=function(){
      if(!state||!Array.isArray(state.bookingReminders))return;
      state.bookingReminderLog=state.bookingReminderLog||{};
      var admins=activeAppUsers(state).filter(function(x){return x.role==='admin';}).map(function(x){return x.id;});
      if(!admins.length)return;
      var now=ww215MelbourneParts(); var added=0;
      state.bookingReminders.forEach(function(b){
        ww215DueSlotsForBooking(b,now).forEach(function(slot){
          if(state.bookingReminderLog[slot.key])return;
          addAlertForUsers(admins,slot.text,{kind:'booking',priority:!!slot.priority,dedupeKey:slot.key,bookingId:b.id,url:'/?tab=bookings&bookingId='+encodeURIComponent(b.id)});
          state.bookingReminderLog[slot.key]=nowIso(); added++;
        });
        if(!b||b._deleted||!b.cleanDate||b.status==='done')return;
        var overdueKey='booking:'+b.id+':'+b.cleanDate+':overdue';
        if(now.date>b.cleanDate&&!state.bookingReminderLog[overdueKey]&&b.status!=='rostered'){
          addAlertForUsers(admins,'Overdue booking: '+bookingClientLabel(b)+' was due '+bookingDateTimeLabel(b)+' and still needs checking.',{kind:'booking',priority:true,dedupeKey:overdueKey,bookingId:b.id,url:'/?tab=bookings&bookingId='+encodeURIComponent(b.id)});
          state.bookingReminderLog[overdueKey]=nowIso(); added++;
        }
      });
      if(added){saveRealtime();try{render();}catch(e){}}
    };

    window.ww215SendBookingReminderNow=async function(id){
      try{
        var u=me&&me(); if(!u||u.role!=='admin'){return;}
        var b=(state.bookingReminders||[]).find(function(x){return x&&x.id===id;}); if(!b){toast('Booking not found');return;}
        var admins=activeAppUsers(state).filter(function(x){return x.role==='admin';}).map(function(x){return x.id;});
        if(!admins.length){toast('No admin users found for this reminder');return;}
        var text='Booking reminder: '+bookingClientLabel(b)+' is due '+bookingDateTimeLabel(b)+'. Add it to the roster.';
        var tag='ww-booking-manual-'+b.id+'-'+Date.now();
        state.bookingReminderLog=state.bookingReminderLog||{}; state.bookingReminderLog[tag]=nowIso();
        addAlertForUsers(admins,text,{kind:'booking',priority:true,dedupeKey:tag,bookingId:b.id,url:'/?tab=bookings&bookingId='+encodeURIComponent(b.id)});
        saveRealtime(); try{render();}catch(e){}
        if(phoneNotificationsSupported() && Notification.permission!=='granted'){
          await requestPhoneNotifications();
        }else if(phoneNotificationsSupported()){
          await registerPushSubscription(false);
        }
        var localSent=false;
        if(phoneNotificationsSupported() && Notification.permission==='granted'){
          notifyLocalUser('Booking reminder',text,{tag:tag,priority:true,data:{kind:'booking',bookingId:b.id,url:'/?tab=bookings&bookingId='+encodeURIComponent(b.id)}});
          localSent=true;
        }
        var serverOk=false;
        try{
          var r=await fetch('/.netlify/functions/web-push-notify',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({recipients:admins,title:'Booking reminder',body:text,tag:tag,url:'/?tab=bookings&bookingId='+encodeURIComponent(b.id),priority:true,data:{kind:'booking',bookingId:b.id,tag:tag,url:'/?tab=bookings&bookingId='+encodeURIComponent(b.id)}})});
          serverOk=!!(r&&r.ok);
        }catch(e){}
        if(serverOk)toast('Reminder sent — check the phone notification panel');
        else if(localSent)toast('Local phone reminder shown. Server push will work after this device is subscribed.');
        else toast('Reminder saved in the app. Enable phone alerts to receive push notifications.');
      }catch(e){toast('Could not send reminder now. Check phone notification permission.');}
    };

    try{fireBookingReminders();}catch(e){}
  }catch(err){try{console.warn('V215 booking notification settings failed',err);}catch(_){} }
})();
/* WW_V215_BOOKING_NOTIFICATION_SETTINGS_END */


/* ============================================================
   WW_V216_LOGIN_AND_INACTIVE_PUSH_FIX_START
   Requested only: fix glitchy/responsive login screen and make inactive
   phone-push status/test honest and visible.
   ============================================================ */
(function ww216LoginAndInactivePushFix(){
  try{
    if(window.__ww216LoginPushFixInstalled)return;
    window.__ww216LoginPushFixInstalled=true;

    function ww216InjectStyle(){
      if(document.getElementById('ww-v216-login-push-fix-style'))return;
      var st=document.createElement('style');
      st.id='ww-v216-login-push-fix-style';
      st.textContent=`
        /* Login screen: stable, scrollable, responsive, no clipping on phones/keyboards */
        html,body,#app{width:100%;min-height:100%;overflow-x:hidden;-webkit-text-size-adjust:100%;}
        .login-root{
          position:fixed!important;inset:0!important;z-index:9999!important;
          width:100vw!important;height:100dvh!important;min-height:100svh!important;
          overflow-y:auto!important;overflow-x:hidden!important;
          -webkit-overflow-scrolling:touch!important;overscroll-behavior-y:contain!important;
          contain:none!important;transform:none!important;
          padding:calc(18px + env(safe-area-inset-top)) 16px calc(18px + env(safe-area-inset-bottom))!important;
          display:flex!important;align-items:center!important;justify-content:center!important;
          background:radial-gradient(110% 70% at 50% -12%,#3b6f49 0%,rgba(59,111,73,0) 58%),linear-gradient(160deg,#1c3924 0%,#102417 58%,#09130d 100%)!important;
        }
        .login-root::before,.login-root::after,.login-stage::before,.login-stage::after{animation:none!important;transition:none!important;will-change:auto!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;}
        .login-root::before{content:""!important;position:fixed!important;inset:0!important;pointer-events:none!important;background:radial-gradient(420px 280px at 14% 8%,rgba(255,255,255,.08),transparent 60%),radial-gradient(420px 320px at 95% 92%,rgba(201,151,91,.12),transparent 62%)!important;z-index:0!important;}
        .login-root::after{content:none!important;display:none!important;}
        .login-stage{
          position:relative!important;z-index:1!important;width:100%!important;max-width:420px!important;min-height:auto!important;
          margin:auto!important;padding:0!important;display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:center!important;gap:14px!important;background:transparent!important;box-shadow:none!important;animation:none!important;transform:none!important;contain:none!important;
        }
        .login-card{
          width:100%!important;max-width:420px!important;margin:0 auto!important;box-sizing:border-box!important;
          border-radius:24px!important;padding:26px 22px 22px!important;background:#fffdf7!important;border:1px solid rgba(48,78,50,.13)!important;
          box-shadow:0 26px 70px -38px rgba(0,0,0,.66),0 10px 28px -20px rgba(25,44,29,.35)!important;transform:none!important;animation:none!important;contain:none!important;
        }
        .lc-logo{width:60px!important;height:60px!important;border-radius:18px!important;margin:0 auto 15px!important;background:#14291b!important;overflow:hidden!important;}
        .lc-logo img{width:100%!important;height:100%!important;object-fit:cover!important;display:block!important;}
        .lc-head{text-align:center!important;margin:0 0 18px!important;}
        .lc-eyebrow{display:block!important;margin:0 0 7px!important;color:#5f7d62!important;font-size:10.5px!important;line-height:1!important;font-weight:850!important;letter-spacing:.12em!important;text-transform:uppercase!important;}
        .lc-head h2{font-size:27px!important;line-height:1.08!important;margin:0!important;color:#142118!important;font-weight:820!important;letter-spacing:-.035em!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Arial,sans-serif!important;}
        .lc-head h2::after{content:none!important;display:none!important;}
        .lc-head p{font-size:13.5px!important;line-height:1.42!important;margin:8px auto 0!important;max-width:300px!important;color:#637062!important;font-weight:500!important;}
        .lc-head p::after{content:none!important;display:none!important;}
        .login-card .field{margin-bottom:13px!important;}
        .login-card .field label{display:block!important;margin:0 0 6px!important;font-size:10.8px!important;line-height:1!important;font-weight:850!important;letter-spacing:.055em!important;text-transform:uppercase!important;color:#2e3d31!important;}
        .login-card .input{width:100%!important;height:50px!important;box-sizing:border-box!important;border-radius:14px!important;padding:0 15px!important;background:#f7faf3!important;border:1.4px solid rgba(48,78,50,.18)!important;color:#142118!important;font-size:16px!important;font-weight:500!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.7)!important;}
        .login-card .input:focus{outline:none!important;background:#fffef8!important;border-color:#416b45!important;box-shadow:0 0 0 4px rgba(65,107,69,.13),inset 0 1px 0 rgba(255,255,255,.8)!important;}
        .login-card .pw-wrap{position:relative!important;}
        .login-card .pw-eye,.pw-eye{display:grid!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:absolute!important;right:7px!important;top:50%!important;transform:translateY(-50%)!important;width:38px!important;height:38px!important;border-radius:12px!important;background:transparent!important;border:0!important;color:#536352!important;}
        .login-card .pw-wrap .input,.login-card input[type="password"].input{padding-right:52px!important;}
        .lc-cta{width:100%!important;height:52px!important;margin-top:10px!important;border-radius:14px!important;font-size:15.5px!important;font-weight:850!important;transform:none!important;}
        .lc-help{margin:15px 0 0!important;text-align:center!important;color:#697569!important;font-size:12.3px!important;line-height:1.42!important;font-weight:550!important;}
        .lc-help span{display:block!important;color:#899287!important;font-weight:500!important;}
        .login-foot{position:relative!important;left:auto!important;bottom:auto!important;margin:0 auto!important;padding:0!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:9px!important;color:rgba(255,253,244,.74)!important;font-size:11px!important;line-height:1.2!important;font-weight:720!important;z-index:1!important;}
        .login-foot .lf-dot,.lf-dot{width:4px!important;height:4px!important;border-radius:999px!important;background:rgba(255,253,244,.38)!important;}
        .install-prompt-card{display:none!important;}
        @media (max-width:360px){.login-root{padding-left:12px!important;padding-right:12px!important;align-items:flex-start!important;}.login-stage{padding-top:4px!important;}.login-card{padding:22px 17px 18px!important;border-radius:21px!important;}.lc-logo{width:54px!important;height:54px!important}.lc-head h2{font-size:24px!important}.login-card .input{height:48px!important}.lc-cta{height:50px!important}}
        @media (max-height:640px){.login-root{align-items:flex-start!important;}.login-card{padding-top:20px!important;padding-bottom:18px!important}.lc-logo{width:50px!important;height:50px!important;margin-bottom:10px!important}.lc-head{margin-bottom:14px!important}.lc-help{margin-top:11px!important}.login-foot{margin-top:0!important}}
        @media (min-width:880px){
          .login-root{display:grid!important;grid-template-columns:minmax(300px,42vw) minmax(0,1fr)!important;align-items:stretch!important;justify-content:stretch!important;padding:0!important;background:radial-gradient(900px 620px at 105% 5%,rgba(74,115,81,.12),transparent 58%),radial-gradient(780px 560px at 72% 95%,rgba(201,178,136,.16),transparent 62%),linear-gradient(120deg,#e7eddf 0%,#f4f2e8 58%,#fbfaf4 100%)!important;overflow:hidden!important;}
          .login-root::before{content:""!important;position:absolute!important;left:0!important;top:0!important;bottom:0!important;width:min(46vw,680px)!important;background:radial-gradient(520px 420px at 18% 12%,rgba(255,255,255,.13),transparent 63%),radial-gradient(560px 480px at 10% 92%,rgba(188,133,80,.16),transparent 64%),linear-gradient(145deg,#386e48 0%,#214d33 48%,#0d2b1c 100%)!important;clip-path:ellipse(100% 92% at 0% 50%)!important;z-index:0!important;box-shadow:52px 0 95px rgba(24,63,39,.14)!important;}
          .login-root::after{content:"Westwondersandco\AWorkforce"!important;white-space:pre-line!important;display:block!important;position:absolute!important;left:clamp(34px,5vw,82px)!important;top:45%!important;transform:translateY(-50%)!important;width:min(340px,29vw)!important;color:#fffdf4!important;z-index:2!important;font-size:clamp(27px,2.6vw,44px)!important;line-height:1.05!important;font-weight:880!important;letter-spacing:-.05em!important;text-shadow:0 14px 34px rgba(0,0,0,.28)!important;pointer-events:none!important;}
          .login-stage{grid-column:2!important;min-height:100dvh!important;max-width:none!important;width:100%!important;padding:clamp(36px,6vh,78px) clamp(32px,7vw,132px)!important;align-items:center!important;justify-content:center!important;background:transparent!important;}
          .login-stage::after{content:"Everything your team needs for roster, clocking, messages and updates."!important;display:block!important;position:fixed!important;left:clamp(34px,5vw,82px)!important;top:calc(45% + 108px)!important;width:min(340px,29vw)!important;color:rgba(255,253,244,.88)!important;font-size:clamp(13px,1.05vw,17px)!important;line-height:1.55!important;font-weight:560!important;letter-spacing:-.01em!important;text-shadow:0 14px 34px rgba(0,0,0,.28)!important;pointer-events:none!important;}
          .login-card{width:min(420px,100%)!important;margin:0 auto!important;padding:34px 34px 28px!important;border-radius:26px!important;}
          .lc-logo{width:52px!important;height:52px!important;margin:0 0 18px!important;border-radius:16px!important;}
          .lc-head{text-align:left!important;margin-bottom:24px!important;}.lc-head h2{font-size:0!important;}.lc-head h2::after{content:"Sign in"!important;display:block!important;color:#132118!important;font-size:32px!important;line-height:1.05!important;font-weight:820!important;letter-spacing:-.04em!important;}.lc-head p{font-size:0!important;margin:10px 0 0!important;}.lc-head p::after{content:"Access your roster, messages, clocking and team updates."!important;display:block!important;max-width:310px!important;color:#647065!important;font-size:14px!important;line-height:1.48!important;font-weight:500!important;}.lc-help{text-align:left!important;}.login-foot{position:fixed!important;left:clamp(34px,5vw,82px)!important;bottom:clamp(30px,5vh,62px)!important;margin:0!important;justify-content:flex-start!important;}
        }
        @media (min-width:880px) and (max-width:1040px){.login-root{grid-template-columns:minmax(280px,38vw) minmax(0,1fr)!important;}.login-stage{padding-left:34px!important;padding-right:34px!important}.login-root::after{font-size:clamp(24px,2.8vw,34px)!important;width:260px!important}.login-stage::after{width:250px!important}}
        .ww216-push-status{display:grid;gap:10px;margin-top:10px;padding:12px;border-radius:16px;background:#fffaf1;border:1px solid rgba(67,99,63,.14);box-shadow:0 8px 20px -18px rgba(35,55,35,.36)}
        .ww216-push-status strong{display:block;color:#18341f;font-size:13.5px;font-weight:900}.ww216-push-status span{display:block;color:#607062;font-size:12.2px;line-height:1.35;font-weight:600;margin-top:2px}.ww216-push-actions{display:flex;gap:7px;flex-wrap:wrap}.ww216-push-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.ww216-push-item{border:1px solid rgba(67,99,63,.12);background:#fff;border-radius:12px;padding:8px 9px;min-width:0}.ww216-push-item b{display:block;font-size:10px;line-height:1.1;text-transform:uppercase;letter-spacing:.06em;color:#778174}.ww216-push-item em{display:block;margin-top:3px;font-size:12.2px;font-style:normal;font-weight:850;color:#19341f;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ww216-push-warn{padding:9px 10px;border-radius:12px;background:#fff4df;border:1px solid rgba(180,118,58,.22);font-size:12px;line-height:1.35;font-weight:650;color:#704922}.ww216-push-ok{background:#eef7e9;border-color:rgba(62,112,58,.20);color:#294f2c}.ww216-push-bad{background:#fff0ed;border-color:rgba(170,70,55,.22);color:#7e3027}@media(max-width:430px){.ww216-push-grid{grid-template-columns:1fr}.ww216-push-actions .btn{width:100%}}
      `;
      document.head.appendChild(st);
    }
    ww216InjectStyle();
    document.addEventListener('DOMContentLoaded',ww216InjectStyle);
    setTimeout(ww216InjectStyle,50);

    function ww216IsStandalone(){
      try{return !!((window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||window.navigator.standalone);}catch(e){return false;}
    }
    function ww216Secure(){return location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1';}
    function ww216Ios(){return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);}
    async function ww216GetBrowserSubscription(){
      try{
        if(!('serviceWorker' in navigator)||!('PushManager' in window))return null;
        var reg=await navigator.serviceWorker.ready;
        return await reg.pushManager.getSubscription();
      }catch(e){return null;}
    }
    window.ww216PushStatusHtml=function(status){
      status=status||{};
      function yes(v){return v?'Yes':'No';}
      var permission=status.permission||((typeof Notification!=='undefined'&&Notification.permission)||'Unavailable');
      var subscription=status.browserSubscribed?'Saved on this phone':(status.serverDevices>0?'Server has device':'Not saved yet');
      var inactiveReady=!!(status.secure&&status.notificationApi&&status.serviceWorker&&status.pushManager&&permission==='granted'&&status.browserSubscribed&&status.serverDevices>0);
      var iosWarn=(status.isIos&&!status.standalone)?'<div class="ww216-push-warn ww216-push-bad">iPhone background push needs the site opened from the Home Screen app. Open Safari → Share → Add to Home Screen, then open that app and enable alerts.</div>':'';
      var readyMsg=inactiveReady?'<div class="ww216-push-warn ww216-push-ok">Inactive-app push is ready on this phone. The app can receive server push even when closed.</div>':'<div class="ww216-push-warn">Inactive-app push is not fully connected yet. Tap Enable inactive push, then Test inactive push.</div>';
      return '<div class="ww216-push-status" id="ww216PushStatus"><div><strong>Inactive phone push status</strong><span>This checks the real background push path used when the app is closed or not in use.</span></div>'+readyMsg+iosWarn+'<div class="ww216-push-grid"><div class="ww216-push-item"><b>Permission</b><em>'+escapeHtml(permission)+'</em></div><div class="ww216-push-item"><b>Installed app</b><em>'+yes(status.standalone)+'</em></div><div class="ww216-push-item"><b>Service worker</b><em>'+yes(status.serviceWorkerActive)+'</em></div><div class="ww216-push-item"><b>Push subscription</b><em>'+escapeHtml(subscription)+'</em></div></div><div class="ww216-push-actions"><button class="btn btn-soft btn-sm" data-action="ww216-enable-inactive-push" type="button">Enable inactive push</button><button class="btn btn-primary btn-sm" data-action="ww216-test-inactive-push" type="button">Test inactive push</button><button class="btn btn-ghost btn-sm" data-action="ww216-check-inactive-push" type="button">Check status</button><button class="btn btn-ghost btn-sm" data-action="ww216-run-booking-scheduler" type="button">Run reminder check now</button></div></div>';
    };
    async function ww216ReadPushStatus(silent){
      var u=null;try{u=me();}catch(e){}
      var status={secure:ww216Secure(),notificationApi:('Notification' in window),permission:(typeof Notification!=='undefined'?Notification.permission:'unavailable'),serviceWorker:('serviceWorker' in navigator),pushManager:('PushManager' in window),standalone:ww216IsStandalone(),isIos:ww216Ios(),serviceWorkerActive:false,browserSubscribed:false,serverDevices:0,serverOk:false};
      try{if(status.serviceWorker){var reg=await navigator.serviceWorker.ready;status.serviceWorkerActive=!!reg.active;}}
      catch(e){}
      try{var sub=await ww216GetBrowserSubscription();status.browserSubscribed=!!(sub&&sub.endpoint);}catch(e){}
      try{
        if(u){
          var r=await fetch('/.netlify/functions/push-status',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({userId:u.id,deviceId:deviceId()})});
          var j=await r.json().catch(function(){return {};});
          status.serverOk=!!(r&&r.ok&&j.ok);status.serverDevices=Number(j.devices||0);status.serverDeviceIds=j.deviceIds||[];
        }
      }catch(e){}
      window.__ww216LastPushStatus=status;
      return status;
    }
    window.ww216RefreshPushStatus=async function(showToast){
      try{
        var box=document.getElementById('ww216PushStatus');
        if(box){box.outerHTML='<div class="ww216-push-status" id="ww216PushStatus"><strong>Checking inactive phone push…</strong><span>Please wait.</span></div>';}
        var status=await ww216ReadPushStatus(true);
        box=document.getElementById('ww216PushStatus');
        if(box)box.outerHTML=window.ww216PushStatusHtml(status);
        if(showToast){
          var ready=status.secure&&status.notificationApi&&status.serviceWorker&&status.pushManager&&status.permission==='granted'&&status.browserSubscribed&&status.serverDevices>0;
          toast(ready?'Inactive push is connected on this phone':'Inactive push is not fully connected yet');
        }
        return status;
      }catch(e){if(showToast)toast('Could not check inactive push status');return null;}
    };
    var ww216OldNotificationPermissionHtml=window.notificationPermissionHtml||notificationPermissionHtml;
    window.notificationPermissionHtml=notificationPermissionHtml=function(){
      var top='';
      try{top=ww216OldNotificationPermissionHtml();}catch(e){top='<button class="btn btn-soft btn-sm" data-action="ww216-enable-inactive-push">Enable phone alerts</button>';}
      var status=window.__ww216LastPushStatus||{permission:(typeof Notification!=='undefined'?Notification.permission:'unavailable'),notificationApi:('Notification' in window),serviceWorker:('serviceWorker' in navigator),pushManager:('PushManager' in window),standalone:ww216IsStandalone(),isIos:ww216Ios(),serviceWorkerActive:false,browserSubscribed:false,serverDevices:0,secure:ww216Secure()};
      return '<div style="display:grid;gap:8px;width:100%">'+top+window.ww216PushStatusHtml(status)+'</div>';
    };

    var ww216OldRequestPhoneNotifications=window.requestPhoneNotifications||requestPhoneNotifications;
    window.requestPhoneNotifications=requestPhoneNotifications=async function(){
      var ok=false;
      try{ok=await ww216OldRequestPhoneNotifications();}catch(e){ok=false;}
      try{await ww216RefreshPushStatus(false);}catch(e){}
      return ok;
    };
    window.sendServerPushTest=sendServerPushTest=async function(){
      try{
        var u=me();if(!u){toast('Sign in first');return;}
        if(!('Notification' in window)){toast('This browser does not support phone notifications.');return;}
        if(Notification.permission!=='granted')await requestPhoneNotifications();
        await registerPushSubscription(true);
        var r=await fetch(PUSH_TEST_ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({userId:u.id,deviceId:deviceId()})});
        var j=await r.json().catch(function(){return {};});
        if(r&&r.ok&&Number(j.sent||0)>0){toast('Inactive push test sent — check your phone notification panel');}
        else if(r&&r.ok){toast('No inactive push subscription saved yet. Open from Home Screen and tap Enable inactive push.');}
        else{toast('Server push test failed. Check Netlify functions deploy.');}
        await ww216RefreshPushStatus(false);
      }catch(e){
        try{notifyLocalUser('Westwondersandco test notification','Local alerts work only while the app/browser is open. Inactive push still needs server subscription.',{tag:'ww216-local-fallback',priority:true});}catch(_){ }
        toast('Inactive push is not connected yet');
        try{await ww216RefreshPushStatus(false);}catch(_){ }
      }
    };
    async function ww216EnableInactivePush(){
      try{
        if(!ww216Secure()){toast('Deploy online with HTTPS first — inactive push cannot work from file preview.');return;}
        if(ww216Ios()&&!ww216IsStandalone()){toast('On iPhone, add the site to Home Screen first, then open that app to enable inactive push.');}
        if(!('Notification' in window)){toast('Phone notifications are not supported on this browser.');return;}
        if(Notification.permission!=='granted'){await Notification.requestPermission();}
        if(Notification.permission!=='granted'){toast('Phone alerts are not allowed yet.');await ww216RefreshPushStatus(false);return;}
        var ok=await registerPushSubscription(true);
        await ww216RefreshPushStatus(false);
        toast(ok?'Inactive phone push connected':'Could not save inactive push subscription');
      }catch(e){toast('Could not enable inactive phone push');}
    }
    async function ww216RunBookingScheduler(){
      try{
        var r=await fetch('/.netlify/functions/booking-reminder-scheduler',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({manual:true})});
        var j=await r.json().catch(function(){return {};});
        if(r&&r.ok)toast('Reminder check ran: '+(j.sent||0)+' phone/in-app reminder(s) due now');
        else toast('Reminder scheduler did not run. Check Netlify functions.');
      }catch(e){toast('Could not run reminder scheduler. Check Netlify deployment.');}
    }
    document.addEventListener('click',function(e){
      var el=e.target&&e.target.closest?e.target.closest('[data-action]'):null;if(!el)return;
      var a=el.dataset.action;
      if(a==='ww216-enable-inactive-push'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();ww216EnableInactivePush();}
      if(a==='ww216-test-inactive-push'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();sendServerPushTest();}
      if(a==='ww216-check-inactive-push'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();ww216RefreshPushStatus(true);}
      if(a==='ww216-run-booking-scheduler'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();ww216RunBookingScheduler();}
    },true);
    try{if('serviceWorker' in navigator){navigator.serviceWorker.addEventListener('message',function(ev){var d=(ev&&ev.data)||{};if(d&&d.type==='ww-resubscribe-push'){try{registerPushSubscription(false).then(function(){ww216RefreshPushStatus(false);});}catch(e){}}});}}catch(e){}
    setTimeout(function(){try{ww216RefreshPushStatus(false);}catch(e){}},1200);
    document.addEventListener('visibilitychange',function(){if(!document.hidden)setTimeout(function(){try{ww216RefreshPushStatus(false);}catch(e){}},600);});
  }catch(e){}
})();
/* WW_V216_LOGIN_AND_INACTIVE_PUSH_FIX_END */
/* WW_V217_GENERAL_NOTIFICATION_PUSH_DEDUPE_FIX_START */
(function(){
  try{
    if(window.__ww217GeneralNotificationFixInstalled)return;
    window.__ww217GeneralNotificationFixInstalled=true;
    function injectStyle(){
      if(document.getElementById('ww217-notification-style'))return;
      var st=document.createElement('style');st.id='ww217-notification-style';st.textContent=`
        .ww217-notify-card{display:grid;gap:12px;padding:13px;border-radius:18px;background:linear-gradient(135deg,#f4f0e8,#e8efe2);border:1px solid rgba(62,91,58,.16);box-shadow:0 10px 24px rgba(36,54,34,.08);width:100%}
        .ww217-notify-card h3{margin:0;font-size:15px;color:#21351f;line-height:1.2}.ww217-notify-card p{margin:4px 0 0;color:#566450;font-size:12.6px;line-height:1.35;font-weight:650}
        .ww217-notify-list{display:flex;flex-wrap:wrap;gap:6px}.ww217-chip{border:1px solid rgba(62,91,58,.16);background:rgba(255,255,255,.72);border-radius:999px;padding:6px 8px;font-size:11.5px;font-weight:850;color:#2e4c2c;line-height:1}
        .ww217-time-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.ww217-time-box{display:grid;gap:7px;background:rgba(255,255,255,.72);border:1px solid rgba(62,91,58,.13);border-radius:14px;padding:10px}.ww217-time-box label{font-size:12px;font-weight:900;color:#31492f}.ww217-time-row{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:8px}.ww217-toggle{width:18px;height:18px;accent-color:#496d3f}.ww217-actions{display:flex;gap:8px;flex-wrap:wrap}.ww217-note{font-size:11.8px;line-height:1.35;font-weight:700;color:#6a5c45;background:rgba(255,248,235,.75);border:1px solid rgba(165,116,52,.14);border-radius:12px;padding:9px 10px}
        @media(max-width:560px){.ww217-time-grid{grid-template-columns:1fr}.ww217-actions .btn{width:100%;justify-content:center}}
      `;document.head.appendChild(st);
    }
    injectStyle();document.addEventListener('DOMContentLoaded',injectStyle);setTimeout(injectStyle,80);
    function cfg(){
      try{return generalNotificationSettings();}catch(e){state.notificationSettings=state.notificationSettings||{};return state.notificationSettings;}
    }
    function checked(v){return v!==false?'checked':'';}
    function safeTime(t,f){return /^\d{2}:\d{2}$/.test(String(t||''))?String(t):f;}
    window.ww217GeneralNotificationSettingsHtml=function(){
      var n=cfg();
      return '<section class="ww217-notify-card" id="ww217NotifySettings"><div><h3>General phone notifications</h3><p>These are the inactive-app push alerts for messages, roster updates, shift requests/declines, posts, comments, documents, timesheets and shift reminders.</p></div>'+ 
        '<div class="ww217-notify-list"><span class="ww217-chip">Messages</span><span class="ww217-chip">Shift requests</span><span class="ww217-chip">Roster updates</span><span class="ww217-chip">Accepted / declined shifts</span><span class="ww217-chip">Posts</span><span class="ww217-chip">Comments</span><span class="ww217-chip">Documents</span><span class="ww217-chip">Timesheets</span></div>'+ 
        '<div class="ww217-time-grid"><div class="ww217-time-box"><label>Morning shift reminder</label><div class="ww217-time-row"><input class="ww217-toggle" type="checkbox" id="ww217_shift_morning_on" '+checked(n.shiftMorningEnabled)+'><input class="input" type="time" id="ww217_shift_morning_time" value="'+escapeHtml(safeTime(n.shiftMorningTime,'08:00'))+'"></div><p>Sent once for today\'s shifts.</p></div>'+ 
        '<div class="ww217-time-box"><label>Night shift reminder</label><div class="ww217-time-row"><input class="ww217-toggle" type="checkbox" id="ww217_shift_night_on" '+checked(n.shiftNightEnabled)+'><input class="input" type="time" id="ww217_shift_night_time" value="'+escapeHtml(safeTime(n.shiftNightTime,'21:00'))+'"></div><p>Sent once for tomorrow\'s shifts.</p></div></div>'+ 
        '<div class="ww217-note">Instant notifications are sent immediately for messages, roster changes, shift responses, posts/comments and admin updates. Scheduled shift reminders are limited to the morning and night times above, with duplicate protection.</div>'+ 
        '<div class="ww217-actions"><button class="btn btn-primary btn-sm" type="button" data-action="ww217-save-notification-settings">Save notification settings</button><button class="btn btn-soft btn-sm" type="button" data-action="ww217-run-shift-reminder-check">Run shift reminder check now</button></div></section>';
    };
    var oldNotifHtml=window.notificationPermissionHtml||notificationPermissionHtml;
    window.notificationPermissionHtml=notificationPermissionHtml=function(){
      var html='';try{html=oldNotifHtml();}catch(e){}
      return '<div style="display:grid;gap:10px;width:100%">'+html+window.ww217GeneralNotificationSettingsHtml()+'</div>';
    };
    function saveNotifSettings(){
      var n=cfg();
      n.instantPushEnabled=true;
      n.shiftMorningEnabled=!!document.getElementById('ww217_shift_morning_on')?.checked;
      n.shiftMorningTime=document.getElementById('ww217_shift_morning_time')?.value||'08:00';
      n.shiftNightEnabled=!!document.getElementById('ww217_shift_night_on')?.checked;
      n.shiftNightTime=document.getElementById('ww217_shift_night_time')?.value||'21:00';
      state.notificationSettings=n;state.updatedAt=nowIso();saveRealtime();render();toast('Notification settings saved');
    }
    async function runShiftReminderCheck(){
      try{
        await registerPushSubscription(false).catch(function(){});
        var r=await fetch('/.netlify/functions/shift-reminder-scheduler',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({manual:true})});
        var j=await r.json().catch(function(){return {};});
        if(r&&r.ok)toast('Shift reminder check ran: '+(j.sent||0)+' phone push, '+(j.alerts||0)+' in-app alert(s) due now');
        else toast('Shift reminder check failed. Check Netlify functions.');
        setTimeout(function(){try{pullCloudSync();}catch(e){}},400);
      }catch(e){toast('Could not run shift reminder check. Check deployment.');}
    }
    document.addEventListener('click',function(e){
      var el=e.target&&e.target.closest?e.target.closest('[data-action]'):null;if(!el)return;
      var a=el.dataset.action;
      if(a==='ww217-save-notification-settings'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();saveNotifSettings();}
      if(a==='ww217-run-shift-reminder-check'){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();runShiftReminderCheck();}
    },true);
  }catch(e){}
})();
/* WW_V217_GENERAL_NOTIFICATION_PUSH_DEDUPE_FIX_END */
