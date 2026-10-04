(function(){
  const copy={
    fa:{
      brand:{name:'سفرهای یک تریدر',tagline:'از شکست تا پیروزی · از کمک گرفتن تا کمک کردن'},
      nav:{explore:'کشف سفرها',community:'جامعه',trust:'اعتماد',founder:'بنیانگذار',settings:'تنظیمات',join:'ورود به جامعه'},
      tape:{brand:'TRADER JOURNEYS',note:'روایت مسیر، نه پیش‌بینی بازار'},
      hero:{eyebrow:'A living community of trader journeys',title1:'یک شکست،',title2:'پایان داستان نیست.',lead:'سفرهای یک تریدر جایی است که هر انسان می‌تواند مسیر واقعی خودش را روایت کند؛ از اولین معامله تا سخت‌ترین سقوط، از فرصت دوباره تا روزی که خودش حامی دیگری می‌شود.',ctaExplore:'سفرها را کشف کن',ctaJoin:'سفر خودت را شروع کن',proof1:'یک انسان',proof2:'یک پروفایل',proof3:'سفرِ ادامه‌دار',note:'این نمودار پیش‌بینی بازار نیست؛ نقشه‌ای از مسیر زندگی یک تریدر است.'},
      terminal:{title:'LIVE JOURNEY',sample:'نمونه نمایشی',start:'شروع',drop:'شکست',recover:'فرصت دوباره',win:'پیروزی',stage:'مرحله فعلی',stageValue:'بازسازی',next:'قدم بعد',nextValue:'پیروزی',view:'دیدن سفر →'},
      ticker:{label:'امروز در جامعه'},
      intro:{eyebrow:'THE JOURNEY IS THE PRODUCT',title:'اینجا قرار نیست فقط نتیجه را ببینی؛ مسیر را می‌بینی.',text1:'هر پروفایل یک سفر زنده است. شکست‌ها و پیروزی‌ها کنار هم می‌مانند و داستان در طول زمان تغییر می‌کند.',text2:'ممکن است یک نفر امروز کمک بگیرد و روزی خودش تبدیل به حامی فرد دیگری شود.'},
      explore:{eyebrow:'EXPLORE REAL JOURNEYS',title:'سفرها را کشف کن',lead:'از یک داستان وارد داستان بعدی شو؛ درست مثل خواندن یک بازار زنده، اما این بار درباره آدم‌ها.',more:'سفرهای بیشتری ببین',note:'نمونه‌های این نسخه برای نمایش رابط کاربری هستند.'},
      filter:{all:'همه سفرها',drawdown:'شکست',rebuilding:'بازسازی',victory:'پیروزی',giving:'کمک به دیگران'},
      paths:{eyebrow:'ONE COMMUNITY · TWO DIRECTIONS',title:'امروز کجای این سفر هستی؟',lead:'نقش‌ها ثابت نیستند. مهم این است که سفر ادامه پیدا کند.'},
      support:{kicker:'DONORS & SUPPORTERS',title:'من می‌خواهم کمک کنم.',text:'سفرها را بخوان، با انسان پشت آن آشنا شو و در صورت تمایل مستقیماً از او حمایت کن.',cta:'دیدن سفرهای نیازمند حمایت →'},
      chance:{kicker:'SECOND CHANCE',title:'من به فرصت دوباره نیاز دارم.',text:'یک پروفایل بساز، داستانت را بگو و اجازه بده سفر تو از شکست عبور کند و ادامه پیدا کند.',cta:'شروع سفر من →'},
      anatomy:{eyebrow:'ONE PROFILE · MANY CHAPTERS',title:'سفر از چه چیزهایی ساخته می‌شود؟',lead:'در اینجا موفقیت فقط یک عدد نیست. هر فصل بخشی از داستان انسان است.',a1:'شکست‌ها',p1:'اشتباه‌ها، سقوط‌ها و چیزهایی که از دست رفته‌اند.',a2:'تجربه‌ها',p2:'چیزهایی که فرد از بازار و زندگی یاد گرفته است.',a3:'فرصت‌ها',p3:'نقطه‌هایی که مسیر دوباره باز می‌شود.',a4:'پیروزی‌ها',p4:'پیشرفت‌های کوچک و بزرگ، نه فقط سود مالی.',a5:'کمک کردن',p5:'روزی که دریافت‌کننده به حامی تبدیل می‌شود.'},
      founder:{eyebrow:'THE FIRST JOURNEY',title:'اولین سفر، از داستان بنیانگذار شروع شد.',text:'«چرا برای ما جایی وجود ندارد؟» همین سؤال نقطه شروع سفرهای یک تریدر شد.',cta:'خواندن داستان بنیانگذار'},
      trust:{eyebrow:'TRUST IS A JOURNEY TOO',title:'اعتماد با یک تیک ساخته نمی‌شود.',lead:'هویت، داستان، کمک و انسان؛ چهار ستون طراحی هستند که قرار است با رشد جامعه عمیق‌تر شوند.',id:'هویت',idp:'یک انسان، یک پروفایل اصلی و یک سفر.',story:'داستان',storyp:'روایتی که می‌تواند در طول زمان به‌روز شود.',help:'کمک',helpp:'مسیر حمایتی شفاف و قابل پیگیری.',human:'انسان',humanp:'پشت هر نمودار، یک زندگی واقعی وجود دارد.'},
      closing:{eyebrow:'THE STORY CONTINUES',title:'سفر خودت را شروع کن.',text:'یک پروفایل بساز و اجازه بده داستانت فقط به یک نقطه از زندگی محدود نماند.',join:'ساخت پروفایل',browse:'کشف سفرها'},
      footer:{tagline:'از شکست تا پیروزی · از کمک گرفتن تا کمک کردن',note:'نسخه مفهومی · ساخته‌شده برای رشد یک جامعه جهانی'}
    },
    en:{
      brand:{name:'Trader Journeys',tagline:'From failure to progress · From receiving to giving back'},
      nav:{explore:'Explore journeys',community:'Community',trust:'Trust',founder:'Founder',settings:'Settings',join:'Join the community'},
      tape:{brand:'TRADER JOURNEYS',note:'A journey narrative, not a market forecast'},
      hero:{eyebrow:'A living community of trader journeys',title1:'One failure,',title2:'not the end of your story.',lead:'Trader Journeys is a place where people can tell the real path behind their market experience — from the first trade to the hardest fall, from a second chance to the day they become a supporter themselves.',ctaExplore:'Explore journeys',ctaJoin:'Start your journey',proof1:'One human',proof2:'One profile',proof3:'One journey that continues',note:'This chart is not a market forecast; it is a map of a trader’s life journey.'},
      terminal:{title:'LIVE JOURNEY',sample:'Prototype',start:'Start',drop:'Failure',recover:'Second chance',win:'Progress',stage:'Current stage',stageValue:'Rebuilding',next:'Next step',nextValue:'Progress',view:'View journey →'},
      ticker:{label:'Today in the community'},
      intro:{eyebrow:'THE JOURNEY IS THE PRODUCT',title:'You are not here to see only the outcome; you are here to see the path.',text1:'Every profile is a living journey. Failures and victories stay together while the story evolves over time.',text2:'Someone may receive support today and become a supporter of someone else one day.'},
      explore:{eyebrow:'EXPLORE REAL JOURNEYS',title:'Explore journeys',lead:'Move from one story to the next — like reading a living market, only this time the subject is human life.',more:'Show more journeys',note:'The profiles in this version are UI examples.'},
      filter:{all:'All journeys',drawdown:'Failure',rebuilding:'Rebuilding',victory:'Progress',giving:'Giving back'},
      paths:{eyebrow:'ONE COMMUNITY · TWO DIRECTIONS',title:'Where are you on the journey today?',lead:'Roles are not permanent. What matters is that the journey continues.'},
      support:{kicker:'DONORS & SUPPORTERS',title:'I want to help.',text:'Read journeys, meet the human behind them, and support directly if you choose.',cta:'See journeys seeking support →'},
      chance:{kicker:'SECOND CHANCE',title:'I need a second chance.',text:'Create one profile, tell your story, and let your journey move beyond failure.',cta:'Start my journey →'},
      anatomy:{eyebrow:'ONE PROFILE · MANY CHAPTERS',title:'What is a journey made of?',lead:'Here, success is not only a number. Every chapter is part of the human story.',a1:'Failures',p1:'Mistakes, falls, and what was lost.',a2:'Experiences',p2:'What the person learned from markets and life.',a3:'Opportunities',p3:'Moments when a new path opens again.',a4:'Progress',p4:'Small and big wins, not only financial ones.',a5:'Giving back',p5:'The day a former recipient becomes a supporter.'},
      founder:{eyebrow:'THE FIRST JOURNEY',title:'The first journey began with the founder’s story.',text:'“Why is there no place for us?” That question became the starting point for Trader Journeys.',cta:'Read the founder’s story'},
      trust:{eyebrow:'TRUST IS A JOURNEY TOO',title:'Trust is more than a checkmark.',lead:'Identity, story, support, and the human — four design pillars that deepen as the community grows.',id:'Identity',idp:'One human, one primary profile, one journey.',story:'Story',storyp:'A living narrative that can evolve over time.',help:'Support',helpp:'A transparent and traceable support path.',human:'Human',humanp:'Behind every chart is a real human life.'},
      closing:{eyebrow:'THE STORY CONTINUES',title:'Start your journey.',text:'Create one profile and let your story grow beyond a single moment in life.',join:'Create a profile',browse:'Explore journeys'},
      footer:{tagline:'From failure to progress · From receiving to giving back',note:'Concept version · Built to grow a global community'}
    }
  };

  const stories=[
    {id:'TR-J001',stage:'drawdown',market:'FOREX',nameFa:'روح‌الله · بنیانگذار',nameEn:'Rohollah · Founder',titleFa:'از امید به ثروت تا ساختن یک فرصت دوباره',titleEn:'From hoping for wealth to building a second chance',excerptFa:'یک تجربه واقعی که نقطه شروع این پروژه شد.',excerptEn:'A real experience that became the starting point of this project.',progress:31,delta:'−',year:'2026',href:'founder.html',owner:true},
    {id:'TR-J018',stage:'rebuilding',market:'CRYPTO',nameFa:'نمونه سفر ۰۱۸',nameEn:'Journey sample 018',titleFa:'بعد از سقوط، اولین قدم من چه بود؟',titleEn:'What was my first step after the fall?',excerptFa:'نمونه نمایشی برای نشان دادن ساختار یک سفر چندمرحله‌ای.',excerptEn:'A UI example showing a multi-stage journey.',progress:57,delta:'↗',year:'2027'},
    {id:'TR-J042',stage:'victory',market:'FOREX · CRYPTO',nameFa:'نمونه سفر ۰۴۲',nameEn:'Journey sample 042',titleFa:'روزی که دوباره توانستم روی پای خودم بایستم',titleEn:'The day I learned to stand on my own again',excerptFa:'نمونه نمایشی از یک فصل پیروزی در سفر.',excerptEn:'A UI example of a progress chapter.',progress:82,delta:'+ ',year:'2029'},
    {id:'TR-J077',stage:'giving',market:'CRYPTO',nameFa:'نمونه سفر ۰۷۷',nameEn:'Journey sample 077',titleFa:'امروز من به نفر دیگری کمک می‌کنم',titleEn:'Today I am helping someone else',excerptFa:'نمونه نمایشی از تبدیل‌شدن دریافت‌کننده دیروز به حامی امروز.',excerptEn:'A UI example of a former recipient becoming a supporter.',progress:96,delta:'↗',year:'2030'},
    {id:'TR-J091',stage:'rebuilding',market:'FOREX',nameFa:'نمونه سفر ۰۹۱',nameEn:'Journey sample 091',titleFa:'از بدهی تا ساختن یک مسیر تازه',titleEn:'From debt to building a new path',excerptFa:'نمونه نمایشی از بازسازی تدریجی زندگی.',excerptEn:'A UI example of gradual rebuilding.' ,progress:49,delta:'→',year:'2028'},
    {id:'TR-J115',stage:'drawdown',market:'CRYPTO',nameFa:'نمونه سفر ۱۱۵',nameEn:'Journey sample 115',titleFa:'اشتباهی که سال‌ها با خودم حمل کردم',titleEn:'The mistake I carried for years',excerptFa:'نمونه نمایشی از مرحله شکست و ثبت تجربه.',excerptEn:'A UI example of a failure chapter and reflection.',progress:24,delta:'↓',year:'2026'}
  ];

  let lang=localStorage.getItem('tj-lang')||localStorage.getItem('site-language')||'fa';
  let activeFilter='all';
  let visible=4;

  function get(o,p){return p.split('.').reduce((x,k)=>x?.[k],o)}
  function translate(){
    const t=copy[lang]||copy.fa;
    document.documentElement.lang=lang;
    document.documentElement.dir=t.dir||'rtl';
    document.body.dir=t.dir||'rtl';
    document.querySelectorAll('[data-h]').forEach(el=>{const v=get(t,el.dataset.h);if(typeof v==='string')el.textContent=v});
    document.getElementById('homeLang').value=lang;
    document.title=lang==='fa'?'سفرهای یک تریدر | داستانی که ادامه دارد':'Trader Journeys | The story continues';
    renderStories(); renderTicker();
  }
  function stageLabel(stage){const t=copy[lang];return {drawdown:t.filter.drawdown,rebuilding:t.filter.rebuilding,victory:t.filter.victory,giving:t.filter.giving}[stage]||''}
  function storyName(s){return lang==='fa'?s.nameFa:s.nameEn}
  function storyTitle(s){return lang==='fa'?s.titleFa:s.titleEn}
  function storyExcerpt(s){return lang==='fa'?s.excerptFa:s.excerptEn}

  function renderStories(){
    const feed=document.getElementById('journeyFeed');
    const list=stories.filter(s=>activeFilter==='all'||s.stage===activeFilter).slice(0,visible);
    feed.innerHTML=list.map((s,i)=>`
      <article class="journey-tile ${s.stage} ${s.owner?'featured-owner':''}">
        <a href="${s.href||'#'}" class="tile-chart" aria-label="${storyTitle(s)}">
          <div class="tile-chart-meta"><span>${s.market}</span><span>${s.id}</span></div>
          <svg viewBox="0 0 340 150" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 ${s.stage==='drawdown'?42:92} C45 30, 60 88, 102 54 S155 78, 188 ${s.stage==='drawdown'?122:78} S242 130, 278 ${s.stage==='giving'?44:84} S315 34, 340 ${s.stage==='victory'||s.stage==='giving'?18:66}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <circle cx="188" cy="${s.stage==='drawdown'?122:78}" r="5" fill="currentColor"/>
          </svg>
          <div class="tile-stage"><span>${stageLabel(s.stage)}</span><b>${s.delta}</b></div>
        </a>
        <div class="tile-body">
          <div class="tile-avatar">${s.owner?'RJ':'TR'}</div>
          <div class="tile-copy"><div class="tile-name">${storyName(s)} <span>${s.year}</span></div><h3>${storyTitle(s)}</h3><p>${storyExcerpt(s)}</p><div class="tile-foot"><span>${lang==='fa'?'سفر':'Journey'} ${s.progress}%</span><span class="tile-bar"><i style="width:${s.progress}%"></i></span><span>↗</span></div></div>
        </div>
      </article>`).join('');
    const more=document.getElementById('loadMore');
    more.style.display=visible>=stories.filter(s=>activeFilter==='all'||s.stage===activeFilter).length?'none':'inline-flex';
  }
  function renderTicker(){
    const t=copy[lang], el=document.getElementById('tickerItems');
    const items=lang==='fa'?
      ['TR-J077 امروز به بخش خیرین پیوست','TR-J042 یک فصل جدید از سفرش را منتشر کرد','TR-J018 درخواست فرصت دوباره را تکمیل کرد','TR-J001 داستان بنیانگذار را به‌روزرسانی کرد']:
      ['TR-J077 joined the donor community today','TR-J042 published a new journey chapter','TR-J018 completed a second-chance request','TR-J001 updated the founder journey'];
    el.innerHTML=items.map(x=>`<span>${x}</span>`).join('');
  }
  document.getElementById('homeLang').addEventListener('change',e=>{lang=e.target.value;localStorage.setItem('tj-lang',lang);translate();window.dispatchEvent(new Event('languagechange'))});
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{activeFilter=btn.dataset.filter;visible=4;document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderStories()}));
  document.getElementById('loadMore').addEventListener('click',()=>{visible+=2;renderStories()});
  const remembered=localStorage.getItem('tj-last-journey'); if(remembered)document.body.classList.add('has-last-journey');
  translate();
})();
