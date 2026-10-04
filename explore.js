(function(){
  const c={
    fa:{kicker:'LIVE JOURNEY MARKET',title:'هر سفر یک نمودار است؛ هر نمودار، یک انسان.',lead:'از میان داستان‌های واقعی جامعه حرکت کن. ببین چه کسی در Drawdown است، چه کسی در حال بازسازی است و چه کسی از دریافت‌کننده دیروز به حامی امروز تبدیل شده است.',statAll:'سفر در این نسخه',statStages:'مرحله اصلی',statReal:'داستان واقعی فعلی',board:{title:'JOURNEY MARKET',note:'روایت جامعه · نه پیش‌بینی قیمت',draw:'شکست',recover:'بازسازی',give:'کمک به دیگران'},sort:{label:'مرتب‌سازی'},filter:{all:'همه سفرها',drawdown:'شکست',rebuilding:'بازسازی',victory:'پیروزی',giving:'کمک به دیگران',support:'نیازمند حمایت'},load:'سفرهای بیشتری ببین',note:'پروفایل‌هایی که هنوز واقعی نشده‌اند با برچسب «نمونه نمایشی» مشخص می‌شوند.',side:{title:'نمای بازار سفرها',stageTitle:'مراحل فعلی',draw:'شکست',rebuild:'بازسازی',progress:'پیروزی',give:'کمک به دیگران',marketTitle:'بازار',principle:'اصل جامعه',principleText:'یک انسان · یک پروفایل · یک سفر'}},
    en:{kicker:'LIVE JOURNEY MARKET',title:'Every journey is a chart. Every chart is a human.',lead:'Move through the stories of the community. See who is in drawdown, who is rebuilding, and who has moved from receiving support to giving back.',statAll:'Journeys in this version',statStages:'Core stages',statReal:'Current real story',board:{title:'JOURNEY MARKET',note:'Community narrative · not a price forecast',draw:'Drawdown',recover:'Rebuilding',give:'Giving back'},sort:{label:'Sort'},filter:{all:'All journeys',drawdown:'Failure',rebuilding:'Rebuilding',victory:'Progress',giving:'Giving back',support:'Seeking support'},load:'Show more journeys',note:'Profiles that are not real yet are marked as “Prototype”.',side:{title:'Journey market view',stageTitle:'Current stages',draw:'Failure',rebuild:'Rebuilding',progress:'Progress',give:'Giving back',marketTitle:'Market',principle:'Community rule',principleText:'One human · one profile · one journey'}}
  };
  const stages={
    drawdown:['شکست','Failure','stage-fail'],
    rebuilding:['بازسازی','Rebuilding','stage-rebuild'],
    victory:['پیروزی','Victory','stage-win'],
    giving:['کمک به دیگران','Giving back','stage-give']
  };
  const stories=[
    {id:'TR-J001',stage:'drawdown',market:'FOREX · CRYPTO',nameFa:'روح‌الله · بنیانگذار',nameEn:'Rohollah · Founder',countryFa:'هلند',countryEn:'Netherlands',titleFa:'از امید به ثروت تا ساختن یک فرصت دوباره',titleEn:'From hoping for wealth to building a second chance',excerptFa:'اولین سفر این پروژه؛ یک روایت واقعی از سال‌های کار، ورود به بازار، شکست و ایده ساختن این جامعه.',excerptEn:'The first journey of this project — a real story of work, markets, failure and building this community.',progress:31,year:2026,real:true,support:true,href:'founder.html'},
    {id:'TR-J018',stage:'rebuilding',market:'CRYPTO',nameFa:'نمونه سفر ۰۱۸',nameEn:'Journey sample 018',countryFa:'ترکیه',countryEn:'Türkiye',titleFa:'بعد از سقوط، اولین قدم من چه بود؟',titleEn:'What was my first step after the fall?',excerptFa:'نمونه نمایشی از سفر چندمرحله‌ای؛ از ثبت شکست تا اولین قدم‌های بازسازی.',excerptEn:'A UI prototype of a multi-stage journey, from recording the fall to the first steps of rebuilding.',progress:57,year:2027,sample:true},
    {id:'TR-J042',stage:'victory',market:'FOREX · CRYPTO',nameFa:'نمونه سفر ۰۴۲',nameEn:'Journey sample 042',countryFa:'آلمان',countryEn:'Germany',titleFa:'روزی که دوباره توانستم روی پای خودم بایستم',titleEn:'The day I learned to stand on my own again',excerptFa:'نمونه نمایشی از یک فصل پیروزی؛ موفقیتی که فقط با پول سنجیده نمی‌شود.',excerptEn:'A prototype progress chapter; a win measured by more than money.',progress:82,year:2029,sample:true},
    {id:'TR-J077',stage:'giving',market:'CRYPTO',nameFa:'نمونه سفر ۰۷۷',nameEn:'Journey sample 077',countryFa:'امارات',countryEn:'UAE',titleFa:'امروز من به نفر دیگری کمک می‌کنم',titleEn:'Today I am helping someone else',excerptFa:'نمونه نمایشی از تبدیل دریافت‌کننده دیروز به حامی امروز.',excerptEn:'A prototype of a former recipient becoming a supporter.',progress:96,year:2030,sample:true},
    {id:'TR-J091',stage:'rebuilding',market:'FOREX',nameFa:'نمونه سفر ۰۹۱',nameEn:'Journey sample 091',countryFa:'فرانسه',countryEn:'France',titleFa:'از بدهی تا ساختن یک مسیر تازه',titleEn:'From debt to building a new path',excerptFa:'نمونه نمایشی از بازسازی تدریجی زندگی بیرون از بازار.',excerptEn:'A prototype of gradual rebuilding outside the market.',progress:49,year:2028,sample:true,support:true},
    {id:'TR-J115',stage:'drawdown',market:'CRYPTO',nameFa:'نمونه سفر ۱۱۵',nameEn:'Journey sample 115',countryFa:'اسپانیا',countryEn:'Spain',titleFa:'اشتباهی که سال‌ها با خودم حمل کردم',titleEn:'The mistake I carried for years',excerptFa:'نمونه نمایشی از فصل شکست و ثبت تجربه برای دیگران.',excerptEn:'A prototype failure chapter and reflection for others.',progress:24,year:2026,sample:true,support:true}
  ];
  let lang=localStorage.getItem('tj-lang')||localStorage.getItem('site-language')||'fa', filter='all', visible=5, query='', sort='newest';
  let liveProfiles=[];
  function getName(s){return lang==='fa'?s.nameFa:s.nameEn} function getCountry(s){return lang==='fa'?s.countryFa:s.countryEn} function getTitle(s){return lang==='fa'?s.titleFa:s.titleEn} function getExcerpt(s){return lang==='fa'?s.excerptFa:s.excerptEn}
  function stageLabel(stage){const t=c[lang];return t.filter[stage]||''}
  function esc(v){return String(v).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
  function inferSourceLanguage(text){return /[\u0600-\u06FF]/.test(String(text||''))?'fa':(localStorage.getItem('tj-lang')||'en');}
  function getStories(){
    const list=stories.slice().concat(liveProfiles);
    try{
      if(window.TJBackend?.isConfigured()) return list;
      const profile=JSON.parse(localStorage.getItem('tj-profile')||'null');
      const chapters=JSON.parse(localStorage.getItem('tj-chapters')||'[]').filter(ch=>ch.public!==false);
      if(profile){
        const latest=chapters.slice().sort((a,b)=>(b.date||'').localeCompare(a.date||''))[0];
        const storyText=(latest&&latest.body)||profile.story||profile.donorStory||profile.bio||'';
        const title=(latest&&latest.title)||(profile.nameFa||profile.nameEn||profile.name||'My journey');
        if(storyText.trim()){
          const stageMap={failure:'drawdown',drawdown:'drawdown',recovery:'rebuilding',rebuild:'rebuilding',experience:'rebuilding',success:'victory',victory:'victory',giving:'giving',start:'rebuilding'};
          list.unshift({id:profile.id||'MY-JOURNEY',stage:stageMap[latest?.stage]|| (profile.role==='donor'?'giving':'drawdown'),market:(profile.markets||[]).map(x=>String(x).toUpperCase()).join(' · ')||'FOREX · CRYPTO',nameFa:profile.name||'کاربر',nameEn:profile.name||'Member',countryFa:profile.country||'—',countryEn:profile.country||'—',titleFa:title,titleEn:title,excerptFa:storyText,excerptEn:storyText,progress:latest?.stage==='victory'?88:latest?.stage==='giving'?96:latest?.stage==='rebuild'?58:31,year:Number((latest?.date||new Date().toISOString()).slice(0,4)),userGenerated:true,sourceLang:(latest&&latest.sourceLang)||(profile.story?profile.storyLang:(profile.donorStory?profile.donorStoryLang:profile.bioLang))||inferSourceLanguage(storyText),real:false,support:profile.role!=='donor',href:'public-profile.html?id='+encodeURIComponent(profile.id||''),userId:profile.id||''});
        }
      }
    }catch(_){/* Ignore malformed local prototype data. */}
    return list;
  }
  function filtered(){let list=getStories(); if(filter!=='all') list=list.filter(s=>filter==='support'?s.support:s.stage===filter); if(query){const q=query.toLowerCase();list=list.filter(s=>[s.id,s.market,s.nameFa,s.nameEn,s.countryFa,s.countryEn,s.titleFa,s.titleEn,s.excerptFa,s.excerptEn].join(' ').toLowerCase().includes(q));} if(sort==='progress')list.sort((a,b)=>b.progress-a.progress); else if(sort==='needs')list.sort((a,b)=>(b.support?1:0)-(a.support?1:0)||a.progress-b.progress); else list.sort((a,b)=>b.year-a.year); return list;}
  function chartPath(s){const end=s.stage==='victory'||s.stage==='giving'?28:s.stage==='rebuilding'?72:108; const mid=s.stage==='drawdown'?158:122; return `M0 62 C34 48, 60 36, 92 54 S152 84, 184 ${mid} S236 156, 270 128 S314 86, 340 ${end}`;}
  function render(){
    const t=c[lang];
    const currentStories=getStories();
    const all=filtered();
    const list=all.slice(0,visible);
    const feed=document.getElementById('journeyList');
    document.getElementById('searchCount').textContent=String(all.length);
    feed.innerHTML='';
    list.forEach((s,i)=>{
      const featured=i===0&&filter==='all'&&!query;
      const steps=[0,1,2,3,4].map((_,n)=>{
        const done=n < Math.max(1,Math.round(s.progress/20));
        const current=n===Math.min(4,Math.floor(s.progress/20));
        return `<span class="${done?'done':''} ${current?'current':''}"></span>`;
      }).join('');
      const href=s.href||'#';
      const stageText=esc(stageLabel(s.stage));
      const statusMark=s.stage==='drawdown'?'↓':s.stage==='rebuilding'?'↗':(s.stage==='victory'?`+ ${s.progress}%`:'↗');
      const sampleNote=s.sample
        ? `<div class="journey-note">${lang==='fa'?'نمونه رابط کاربری؛ این داستان واقعیِ یک فرد نیست.':'UI prototype; this is not a real person story.'}</div>`
        : '';
      const article=document.createElement('article');
      article.className=`journey-explore-card ${s.stage}${featured?' featured':''}`;
      article.innerHTML=`
        <a href="${esc(href)}" class="journey-chart ${s.stage}" ${s.sample?'aria-label="Prototype journey"':''}>
          <div class="chart-meta"><span class="market-label">${esc(s.market)}</span><span class="stage-label ${stages[s.stage]?.[2] || ''}">${document.documentElement.lang === 'en' ? stages[s.stage]?.[1] || '' : stages[s.stage]?.[0] || ''}</span></div>
          <svg viewBox="0 0 340 190" preserveAspectRatio="none" aria-hidden="true">
            <path d="${chartPath(s)}" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            <circle cx="270" cy="${s.stage==='drawdown'?158:122}" r="6" fill="currentColor"/>
            <circle cx="340" cy="${s.stage==='victory'||s.stage==='giving'?28:s.stage==='rebuilding'?72:108}" r="5" fill="currentColor"/>
          </svg>
          <div class="chart-status"><span>${stageText}</span><b>${statusMark}</b></div>
        </a>
        <div class="journey-body">
          <div class="journey-person">
            <div class="journey-avatar">${s.liveBackend?'TJ':s.real?'RJ':s.userGenerated?'TJ':'TR'}</div>
            <div><strong>${esc(getName(s))}</strong><small>${esc(getCountry(s))} · ${s.year}</small></div>
            <span class="journey-tag">${s.liveBackend?(lang==='fa'?'عضو جامعه':'MEMBER'):s.real?(lang==='fa'?'واقعی':'REAL'):s.userGenerated?(lang==='fa'?'پروفایل محلی':'LOCAL PROFILE'):(lang==='fa'?'نمونه نمایشی':'PROTOTYPE')}</span>
          </div>
          ${s.userGenerated?`<div class="story-translation-block journey-card-translation" data-story-translation data-source-lang="${esc(s.sourceLang||'fa')}" data-auto-translate="true"><div data-story-text class="journey-translation-title">${esc(getTitle(s))}</div><p data-story-text class="journey-translation-excerpt">${esc(getExcerpt(s))}</p></div>`:`${featured?`<h2>${esc(getTitle(s))}</h2>`:`<h3>${esc(getTitle(s))}</h3>`}<p>${esc(getExcerpt(s))}</p>`}
          <div class="journey-timeline">${steps}</div>
          <div class="journey-footline">
            <span>${lang==='fa'?'پیشرفت سفر':'Journey progress'} <strong>${s.progress}%</strong></span>
            <span>${s.support?(lang==='fa'?'نیازمند حمایت':'Seeking support'):stageText}</span>
            <span class="open">${s.href?(lang==='fa'?'باز کردن سفر ←':'Open journey →'):(lang==='fa'?'نمونه نمایشی':'Prototype')}</span>
          </div>
          ${sampleNote}
        </div>`;
      feed.appendChild(article);
    });
    const more=document.getElementById('exploreLoad');
    more.style.display=visible<all.length?'inline-flex':'none';
    document.getElementById('statAll').textContent=String(currentStories.length).padStart(2,'0');
  }
  function setLang(l){lang=l;localStorage.setItem('tj-lang',l); const t=c[l]; document.documentElement.lang=l; document.documentElement.dir=l==='fa'?'rtl':'ltr'; document.body.dir=document.documentElement.dir; document.querySelectorAll('[data-e]').forEach(el=>{const k=el.dataset.e; let val=k.split('.').reduce((o,p)=>o?.[p],t); if(typeof val==='string')el.textContent=val;}); document.getElementById('exploreLang').value=l; document.querySelector('.search-box input').placeholder=l==='fa'?document.querySelector('.search-box input').dataset.placeholderFa:document.querySelector('.search-box input').dataset.placeholderEn; document.querySelector('#journeySort').options[0].text=l==='fa'?'جدیدترین':'Newest';document.querySelector('#journeySort').options[1].text=l==='fa'?'بیشترین پیشرفت':'Most progress';document.querySelector('#journeySort').options[2].text=l==='fa'?'نیازمند حمایت':'Seeking support'; render(); window.dispatchEvent(new Event('languagechange')); }
  document.getElementById('journeySearch').addEventListener('input',e=>{query=e.target.value.trim();visible=5;render()});
  document.getElementById('journeySort').addEventListener('change',e=>{sort=e.target.value;render()});
  document.querySelectorAll('.explore-filter').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;visible=5;document.querySelectorAll('.explore-filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()}));
  document.getElementById('exploreLoad').addEventListener('click',()=>{visible+=4;render()});
  document.getElementById('exploreLang').addEventListener('change',e=>setLang(e.target.value));
  setLang(lang);
  async function loadGlobalJourneys(){
    if(!window.TJBackend?.isConfigured()) return;
    try{
      const rows=await window.TJBackend.listPublicProfiles(100);
      const stageMap={failure:'drawdown',drawdown:'drawdown',recovery:'rebuilding',rebuild:'rebuilding',rebuilding:'rebuilding',victory:'victory',success:'victory',giving:'giving',start:'rebuilding',experience:'rebuilding'};
      const progressMap={drawdown:28,rebuilding:54,victory:84,giving:96};
      liveProfiles=rows.map(p=>{
        const stage=stageMap[p.currentStage]||stageMap[p.role==='donor'?'giving':'start'];
        const text=String(p.story||p.donorStory||p.bio||'').trim();
        return {id:p.publicId||p.id,dbId:p.id,stage,market:(p.markets||[]).map(x=>String(x).toUpperCase()).join(' · ')||'FOREX · CRYPTO',nameFa:p.name||p.username,nameEn:p.name||p.username,countryFa:p.country||'—',countryEn:p.country||'—',titleFa:(lang==='fa'?'سفر ': 'Journey ')+(p.name||p.username),titleEn:(p.name||p.username)+"'s journey",excerptFa:text.slice(0,260),excerptEn:text.slice(0,260),progress:progressMap[stage]||40,year:Number(String(p.updatedAt||p.createdAt||new Date().toISOString()).slice(0,4)),userGenerated:true,liveBackend:true,sourceLang:p.storyLang||p.bioLang||'en',real:false,support:Boolean(p.seekingSupport),href:'public-profile.html?id='+encodeURIComponent(p.id)};
      });
      render();
    }catch(error){
      const note=document.querySelector('[data-e="note"]');
      if(note) note.textContent=lang==='en'?'Live journeys could not be loaded. Please retry later.':'بارگذاری سفرهای زنده انجام نشد؛ بعداً دوباره تلاش کن.';
    }
  }
  loadGlobalJourneys();
})();
