(function(){
  const KEY='tj-lang', ALIAS='site-language';
  const SELECTOR='select.header-language, #lang, #homeLang, #exploreLang, #journeyLang';
  const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const pageText={
    'index.html':[
      ['.home-footer .footer-grid strong','سفرهای یک تریدر','Trader Journeys']
    ],
    'explore.html':[
      ['.home-footer .footer-grid strong','سفرهای یک تریدر','Trader Journeys'],
      ['.home-footer .footer-grid div small','از شکست تا پیروزی · از کمک گرفتن تا کمک کردن','From failure to progress · From receiving to giving back'],
      ['.home-footer .footer-grid > div:last-child small','کشف سفرها · نسخه مفهومی','Explore journeys · Concept version']
    ],
    'journey.html':[
      ['#personName','روح‌الله','Rohollah'],
      ['#personMeta','هلند · فارکس · کریپتو · بنیانگذار','Netherlands · Forex · Crypto · Founder'],
      ['#currentStage','فرصت دوباره','Second chance'],
      ['.identity-stats > div:nth-child(3) strong','اکتبر ۲۰۲۶','October 2026'],
      ['.chart-label.label-entry','شروع','Start'],['.chart-label.label-high','رشد','Growth'],['.chart-label.label-draw','شکست','Failure'],['.chart-label.label-recover','فرصت دوباره','Second chance'],
      ['.chart-axis span:nth-child(1)','شروع سفر','Journey start'],['.chart-axis span:nth-child(2)','اکنون','Now'],
      ['.chart-footer > div:nth-child(2) strong','فرصت دوباره','Second chance'],['.chart-footer > div:nth-child(3) strong','پیروزی','Progress'],['.chart-footer > div:nth-child(1) strong','−۷۴%','−74%'],
      ['.journey-rail .rail-step:nth-child(1) small','۲۰۰۰–۲۰۱۲','2000–2012'],['.journey-rail .rail-step:nth-child(2) small','۲۰۱۴–۲۰۱۹','2014–2019'],['.journey-rail .rail-step:nth-child(3) small','۲۰۲۰–۲۰۲۶','2020–2026'],['.journey-rail .rail-step:nth-child(4) small','اکنون','Now'],
      ['.updates-section .update-grid article:first-child > span','اکتبر ۲۰۲۶','October 2026'],
      ['.footer-grid > div strong','سفرهای یک تریدر','Trader Journeys'],['.footer-grid > div small','از شکست تا پیروزی · از کمک گرفتن تا کمک کردن','From failure to progress · From receiving to giving back'],['.footer-grid > div:last-child small','یک انسان · یک پروفایل · یک سفر','One human · One profile · One journey']
    ],
    'dashboard.html':[
      ['.brand-copy strong','سفرهای یک تریدر','Trader Journeys'],['.brand-copy small','از شکست تا پیروزی · از کمک گرفتن تا کمک کردن','From failure to progress · From receiving to giving back'],
      ['.profile-link:first-child','ویرایش پروفایل ←','Edit profile →']
    ],
    'edit-profile.html':[
      ['.brand-copy strong','سفرهای یک تریدر','Trader Journeys'],['.brand-copy small','از شکست تا پیروزی · از کمک گرفتن تا کمک کردن','From failure to progress · From receiving to giving back'],
      ['.site-footer .footer-grid strong','سفرهای یک تریدر','Trader Journeys'],['.site-footer .footer-grid p','از شکست تا پیروزی · از کمک گرفتن تا کمک کردن','From failure to progress · From receiving to giving back']
    ],
    'founder.html':[
      ['.large-avatar','ر','R']
    ],
    'profile.html':[
      ['.large-avatar','ر','R']
    ],
    'public-profile.html':[
      ['.brand-copy strong','سفرهای یک تریدر','Trader Journeys'],['.brand-copy small','از شکست تا پیروزی · از کمک گرفتن تا کمک کردن','From failure to progress · From receiving to giving back'],
      ['.public-avatar','ر','R'],['.identity-head h1','روح‌الله','Rohollah'],['.identity-head p','یک تریدر، یک داستان، یک سفر که ادامه دارد.','One trader, one story, one journey that continues.'],
      ['.verified','✓ هویت تأییدشده · پروفایل عمومی','✓ Identity reviewed · Public profile'],
      ['.meta-box:nth-child(1) span','بازارهای تجربه‌شده','Markets experienced'],['.meta-box:nth-child(2) span','مرحله فعلی','Current stage'],['.meta-box:nth-child(2) strong','فرصت دوباره','Second chance'],['.meta-box:nth-child(3) span','نقش فعلی','Current role'],['.meta-box:nth-child(3) strong','در مسیر بازسازی','Rebuilding'],['.meta-box:nth-child(4) span','به‌روزرسانی','Updated'],['.meta-box:nth-child(4) strong','اکتبر ۲۰۲۶','October 2026'],
      ['.public-summary','چند روز پیش ۴۰ ساله شدم. فرزند یک کارگرم و از کودکی کار کرده‌ام. سال‌ها پیش با امید ساختن آینده‌ای بهتر وارد بازارهای مالی شدم. این پروفایل روایت سفری است که از شکست عبور می‌کند و هنوز ادامه دارد.','I recently turned 40. I am the son of a worker and started working from childhood. Years ago I entered financial markets hoping to build a better future. This profile records a journey that continues beyond financial failure.'],
      ['.tag-row .tag:nth-child(1)','فارکس','Forex'],['.tag-row .tag:nth-child(2)','کریپتو','Crypto'],['.tag-row .tag:nth-child(3)','شکست','Failure'],['.tag-row .tag:nth-child(4)','فرصت دوباره','Second chance'],
      ['.public-actions .btn-outline','خواندن سفر کامل','Read full journey'],
      ['.chart-top strong','سفر از شکست تا فرصت دوباره','From failure toward a second chance'],['.chart-top small','روایت مسیر · نه پیش‌بینی بازار','Journey narrative · not a market forecast'],
      ['.chart-caption span:nth-child(1)','شروع','Start'],['.chart-caption span:nth-child(2)','شکست','Failure'],['.chart-caption span:nth-child(3)','فرصت دوباره','Second chance'],['.chart-caption span:nth-child(4)','هدف: پیروزی','Goal: progress'],
      ['.public-story .section-kicker','داستان این سفر','The journey story'],['.public-story h2','داستان من، فصل به فصل','My story, chapter by chapter'],['.story-lead','این صفحه خلاصه‌ای از داستان عمومی است. فصل‌های بیشتر می‌توانند با گذشت زمان به همین سفر اضافه شوند.','This page is a public overview of the story. More chapters can be added as the journey evolves.'],
      ['.chapter-mini:nth-of-type(1) h3','قبل از بازار · سال‌های تلاش','Before the markets · Years of effort'],['.chapter-mini:nth-of-type(1) p','از کودکی کار کردم و خیلی زود با مفهوم تلاش برای ساختن آینده آشنا شدم.','I worked from childhood and learned early what it meant to work toward a better future.'],['.chapter-mini:nth-of-type(1) small','فصل ۱','Chapter 1'],
      ['.chapter-mini:nth-of-type(2) h3','ورود به بازار · رویای تغییر','Entering the markets · A dream of change'],['.chapter-mini:nth-of-type(2) p','در دوران کارشناسی ارشد و در ۲۸ سالگی، با امید ساختن آینده‌ای متفاوت وارد بازارهای مالی شدم.','During my master’s studies, at 28, I entered financial markets hoping to build a different future.'],['.chapter-mini:nth-of-type(2) small','فصل ۲','Chapter 2'],
      ['.chapter-mini:nth-of-type(3) h3','شکست · یک سقوط بزرگ','Failure · A deep fall'],['.chapter-mini:nth-of-type(3) p','پس از فعالیت در فارکس و سپس کریپتو، چند تصمیم اشتباه باعث شد بخش بزرگی از دارایی‌ام را از دست بدهم.','After trading Forex and then crypto, several poor decisions caused me to lose a large part of my assets.'],['.chapter-mini:nth-of-type(3) small','فصل ۳','Chapter 3'],
      ['.chapter-mini:nth-of-type(4) h3','فرصت دوباره · داستان ادامه دارد','Second chance · The story continues'],['.chapter-mini:nth-of-type(4) p','این شکست، آغاز ایده «سفرهای یک تریدر» شد؛ جایی برای بیان داستان، حمایت و ساختن دوباره.','This failure sparked Trader Journeys: a place to share stories, find support, and rebuild.'],['.chapter-mini:nth-of-type(4) small','فصل ۴','Chapter 4'],
      ['.public-sidebar-card .section-kicker','وضعیت سفر','Journey status'],['.public-sidebar-card h2','امروز کجا ایستاده‌ام؟','Where do I stand today?'],['.journey-stat:nth-of-type(1) span','مرحله','Stage'],['.journey-stat:nth-of-type(1) b','فرصت دوباره','Second chance'],['.journey-stat:nth-of-type(2) span','بازارها','Markets'],['.journey-stat:nth-of-type(3) span','پروفایل','Profile'],['.journey-stat:nth-of-type(3) b','یکتا','Unique'],['.journey-stat:nth-of-type(4) span','فصل‌های عمومی','Public chapters'],['.journey-stat:nth-of-type(4) b','۴','4'],
      ['.public-update .section-kicker','آخرین به‌روزرسانی','Latest updates'],['.update-item:nth-of-type(1) > span','اکتبر ۲۰۲۶','October 2026'],['.update-item:nth-of-type(1) h3','ایده سفرهای یک تریدر متولد شد.','Trader Journeys was born.'],['.update-item:nth-of-type(1) p','می‌خواهم این مسیر را بدون پنهان کردن شکست ثبت کنم.','I want to record this journey without hiding the failure.'],['.update-item:nth-of-type(2) > span','فصل بعد','Next chapter'],['.update-item:nth-of-type(2) h3','اولین قدم برای بازسازی','The first step toward rebuilding'],['.update-item:nth-of-type(2) p','این بخش با تجربه‌های واقعی آینده تکمیل خواهد شد.','This section will grow with real updates from the profile owner.'],
      ['.public-footer-cta .section-kicker','این سفر هنوز ادامه دارد','This journey continues'],['.public-footer-cta h2','هر فصل جدید، بخشی از آینده این انسان است.','Every new chapter becomes part of this person’s future.'],['.public-footer-cta p','با دنبال کردن یک سفر، به‌روزرسانی‌های عمومی آن را بعداً در جامعه دنبال کن.','Follow this public journey and return to see how the story evolves.']
    ]
  };

  function current(){return (localStorage.getItem(KEY)||localStorage.getItem(ALIAS)||'fa').startsWith('en')?'en':'fa';}
  function save(lang){localStorage.setItem(KEY,lang);localStorage.setItem(ALIAS,lang);}
  function setCore(lang){document.documentElement.lang=lang;document.documentElement.dir=lang==='fa'?'rtl':'ltr';if(document.body)document.body.dir=document.documentElement.dir;}
  function applyStatic(lang){
    (pageText[file]||[]).forEach(([selector,fa,en])=>{
      const value=lang==='en'?en:fa;
      document.querySelectorAll(selector).forEach(el=>{if(el)el.textContent=value;});
    });
    document.querySelectorAll('[data-l10n-fa][data-l10n-en]').forEach(el=>{el.textContent=lang==='en'?el.dataset.l10nEn:el.dataset.l10nFa;});
    document.querySelectorAll('[data-ph-fa][data-ph-en]').forEach(el=>{el.placeholder=lang==='en'?el.dataset.phEn:el.dataset.phFa;});
    document.querySelectorAll('[data-aria-fa][data-aria-en]').forEach(el=>{el.setAttribute('aria-label',lang==='en'?el.dataset.ariaEn:el.dataset.ariaFa);});
    if(file==='public-profile.html'){
      const setAt=(selector, values)=>{
        const nodes=[...document.querySelectorAll(selector)];
        nodes.forEach((node,i)=>{const pair=values[i];if(pair)node.textContent=lang==='en'?pair[1]:pair[0];});
      };
      setAt('.meta-box span', [['بازارهای تجربه‌شده','Markets experienced'],['مرحله فعلی','Current stage'],['نقش فعلی','Current role'],['به‌روزرسانی','Updated']]);
      setAt('.meta-box strong', [['FOREX · CRYPTO','FOREX · CRYPTO'],['فرصت دوباره','Second chance'],['در مسیر بازسازی','Rebuilding'],['اکتبر ۲۰۲۶','October 2026']]);
      setAt('.tag-row .tag', [['فارکس','Forex'],['کریپتو','Crypto'],['شکست','Failure'],['فرصت دوباره','Second chance']]);
      setAt('.chart-caption span', [['شروع','Start'],['شکست','Failure'],['فرصت دوباره','Second chance'],['هدف: پیروزی','Goal: progress']]);
      setAt('.chapter-mini h3', [['قبل از بازار · سال‌های تلاش','Before the markets · Years of effort'],['ورود به بازار · رویای تغییر','Entering markets · A dream for change'],['شکست · یک سقوط بزرگ','Failure · A deep fall'],['فرصت دوباره · داستان ادامه دارد','Second chance · The story continues']]);
      setAt('.chapter-mini p', [['از کودکی کار کردم و خیلی زود با مفهوم تلاش برای ساختن آینده آشنا شدم.','I worked from childhood and learned early what it meant to work toward a better future.'],['در دوران کارشناسی ارشد و در ۲۸ سالگی، با امید ساختن آینده‌ای متفاوت وارد بازارهای مالی شدم.','During my master’s studies, at 28, I entered financial markets hoping to build a different future.'],['پس از فعالیت در فارکس و سپس کریپتو، چند تصمیم اشتباه باعث شد بخش بزرگی از دارایی‌ام را از دست بدهم.','After trading Forex and then crypto, several wrong decisions caused me to lose a large part of my assets.'],['این شکست، آغاز ایده «سفرهای یک تریدر» شد؛ جایی برای بیان داستان، حمایت و ساختن دوباره.','That failure sparked Trader Journeys: a place to tell stories, find support, and rebuild.']]);
      setAt('.chapter-mini small', [['فصل ۱','Chapter 1'],['فصل ۲','Chapter 2'],['فصل ۳','Chapter 3'],['فصل ۴','Chapter 4']]);
      setAt('.journey-stat span', [['مرحله','Stage'],['بازارها','Markets'],['پروفایل','Profile'],['فصل‌های عمومی','Public chapters']]);
      setAt('.journey-stat b', [['فرصت دوباره','Second chance'],['FOREX · CRYPTO','FOREX · CRYPTO'],['یکتا','Unique'],['۴','4']]);
      setAt('.update-item > span', [['اکتبر ۲۰۲۶','October 2026'],['فصل بعد','Next chapter']]);
      setAt('.update-item h3', [['ایده سفرهای یک تریدر متولد شد.','Trader Journeys was born.'],['اولین قدم برای بازسازی','The first step toward rebuilding']]);
      setAt('.update-item p', [['می‌خواهم این مسیر را بدون پنهان کردن شکست ثبت کنم.','I want to record this journey without hiding the failure.'],['این بخش با تجربه‌های واقعی آینده تکمیل خواهد شد.','This section will grow with real updates from the profile owner.']]);
      const followText=localStorage.getItem('tj-follow-1')==='1'?(lang==='en'?'Following enabled ✓':'دنبال‌کردن فعال است ✓'):(lang==='en'?'Follow journey':'دنبال کردن سفر');
      ['#followBtn','#followBottom'].forEach(sel=>{const el=document.querySelector(sel);if(el)el.textContent=followText;});
      const svg=document.querySelector('.public-chart-box svg');if(svg)svg.setAttribute('aria-label',lang==='en'?'Journey chart':'نمودار سفر');
    }
    document.querySelectorAll('[data-description-fa][data-description-en]').forEach(el=>{el.setAttribute('content',lang==='en'?el.dataset.descriptionEn:el.dataset.descriptionFa);});
    const descriptionByPage={
      'index.html':{fa:'سفرهای یک تریدر؛ جامعه‌ای برای ثبت و دنبال‌کردن سفر واقعی افراد در بازارهای مالی، از شکست تا بازسازی و کمک به دیگران.',en:'Trader Journeys is a community for sharing real financial-market journeys, from setbacks and rebuilding to giving back.'},
      'explore.html':{fa:'سفرهای تریدرها را کشف کن؛ داستان‌های فارکس و کریپتو را از شکست تا بازسازی و پیروزی دنبال کن.',en:'Explore trader journeys and follow Forex and crypto stories through setbacks, rebuilding, progress, and giving back.'},
      'journey.html':{fa:'سفر یک تریدر را فصل‌به‌فصل دنبال کن؛ تجربه‌ها، شکست‌ها، فرصت دوباره و مسیر بازسازی.',en:'Follow a trader’s journey chapter by chapter, from market experience and setbacks to a second chance and rebuilding.'},
      'dashboard.html':{fa:'داشبورد سفر من؛ مدیریت پروفایل، داستان و فصل‌های سفر در سفرهای یک تریدر.',en:'My Journey dashboard for managing your profile, story, and journey chapters on Trader Journeys.'},
      'edit-profile.html':{fa:'پروفایل سفرهای یک تریدر را ویرایش کن؛ اطلاعات اصلی، بازارهای تجربه‌شده و داستان خود را به‌روزرسانی کن.',en:'Edit your Trader Journeys profile, markets experienced, introduction, and core journey story.'},
      'public-profile.html':{fa:'پروفایل عمومی و سفر یک تریدر در سفرهای یک تریدر.',en:'A public trader profile and journey on Trader Journeys.'},
      'signup.html':{fa:'به سفرهای یک تریدر بپیوند؛ پروفایل خود را بساز و سفر مالی خود را روایت کن.',en:'Join Trader Journeys, create your profile, and tell your financial-market journey.'},
      'settings.html':{fa:'تنظیمات ظاهری سفرهای یک تریدر؛ انتخاب حالت روشن یا تاریک و رنگ‌بندی سایت.',en:'Trader Journeys appearance settings: choose light or dark mode and customize the site accent color.'},
      'founder.html':{fa:'داستان بنیان‌گذار سفرهای یک تریدر؛ سفر شخصی از شکست مالی به فرصت دوباره.',en:'The founder’s story: a personal journey from financial loss toward a second chance.'},
      'profile.html':{fa:'داستان بنیان‌گذار سفرهای یک تریدر؛ سفر شخصی از شکست مالی به فرصت دوباره.',en:'The founder’s story: a personal journey from financial loss toward a second chance.'}
    };
    const description=document.querySelector('meta[name="description"]');
    if(description&&descriptionByPage[file])description.setAttribute('content',descriptionByPage[file][lang]);
    const themeNames=[
      ['[data-setting-color="emerald"] strong','زمردی','Emerald'],
      ['[data-setting-color="blue"] strong','آبی','Blue'],
      ['[data-setting-color="purple"] strong','بنفش','Purple'],
      ['[data-setting-color="amber"] strong','کهربایی','Amber'],
      ['[data-setting-color="rose"] strong','رز','Rose']
    ];
    themeNames.forEach(([sel,fa,en])=>{const el=document.querySelector(sel);if(el)el.textContent=lang==='en'?en:fa;});
    document.querySelectorAll('[aria-label]').forEach(el=>{
      const label=el.getAttribute('aria-label')||'';
      const pairs={'Language / زبان':['زبان','Language'],'Main navigation / منوی اصلی':['منوی اصلی','Main navigation'],'Market status / وضعیت بازار':['وضعیت بازار','Market status'],'سفرهای یک تریدر':['سفرهای یک تریدر','Trader Journeys'],'نمودار مسیر سفر':['نمودار مسیر سفر','Journey chart'],'انتخاب طیف رنگی':['انتخاب طیف رنگی','Color spectrum selector'],'رنگ دلخواه':['رنگ دلخواه','Custom color'],'User role / نقش کاربر':['نقش کاربر','User role']};
      if(pairs[label])el.setAttribute('aria-label',pairs[label][lang==='en'?1:0]);
    });
    document.querySelectorAll('.nav-toggle .sr-only').forEach(el=>el.textContent=lang==='en'?'Menu':'منو');
    const titles={
      'index.html':{fa:'سفرهای یک تریدر | داستانی که ادامه دارد',en:'Trader Journeys | The story continues'},
      'explore.html':{fa:'کشف سفرها | سفرهای یک تریدر',en:'Explore Journeys | Trader Journeys'},
      'journey.html':{fa:'سفر روح‌الله | سفرهای یک تریدر',en:'Rohollah’s Journey | Trader Journeys'},
      'dashboard.html':{fa:'سفر من | سفرهای یک تریدر',en:'My Journey | Trader Journeys'},
      'edit-profile.html':{fa:'ویرایش پروفایل | سفرهای یک تریدر',en:'Edit Profile | Trader Journeys'},
      'public-profile.html':{fa:'پروفایل عمومی روح‌الله | سفرهای یک تریدر',en:'Rohollah | Trader Journeys'},
      'signup.html':{fa:'ساخت پروفایل | سفرهای یک تریدر',en:'Create Profile | Trader Journeys'},
      'settings.html':{fa:'تنظیمات | سفرهای یک تریدر',en:'Settings | Trader Journeys'},
      'founder.html':{fa:'داستان بنیان‌گذار | سفرهای یک تریدر',en:'Founder’s Story | Trader Journeys'},
      'profile.html':{fa:'داستان بنیان‌گذار | سفرهای یک تریدر',en:'Founder’s Story | Trader Journeys'}
    };
    if(titles[file])document.title=titles[file][lang];
  }
  function syncSelects(lang,dispatch){
    const selects=[...document.querySelectorAll(SELECTOR)];
    selects.forEach(sel=>{
      if(sel.value!==lang){sel.value=lang;if(dispatch)sel.dispatchEvent(new Event('change',{bubbles:true}));}
    });
  }
  // Initial language preference is shared across every page and control.
  let lang=current();save(lang);setCore(lang);syncSelects(lang,false);applyStatic(lang);
  // Let each page's own dictionary re-render first; apply shared missing strings afterwards.
  document.addEventListener('change',e=>{
    const sel=e.target;
    if(!(sel instanceof HTMLSelectElement)||!sel.matches(SELECTOR)||!['fa','en'].includes(sel.value))return;
    lang=sel.value;save(lang);setCore(lang);syncSelects(lang,false);
    window.dispatchEvent(new CustomEvent('tj-language-change',{detail:{lang}}));
    applyStatic(lang);
    if(file==='public-profile.html' && new URLSearchParams(location.search).has('id')) {
      window.dispatchEvent(new CustomEvent('tj-member-profile-refresh',{detail:{lang}}));
    }
  });
  window.addEventListener('storage',e=>{
    if(![KEY,ALIAS].includes(e.key)||!e.newValue)return;
    lang=e.newValue.startsWith('en')?'en':'fa';save(lang);setCore(lang);
    const selects=[...document.querySelectorAll(SELECTOR)];
    if(selects.length){selects.forEach(sel=>{sel.value=lang;sel.dispatchEvent(new Event('change',{bubbles:true}));});}
    else applyStatic(lang);
    if(file==='public-profile.html' && new URLSearchParams(location.search).has('id')) {
      window.dispatchEvent(new CustomEvent('tj-member-profile-refresh',{detail:{lang}}));
    }
  });
  window.TJLang={get:current,set(lang){if(!['fa','en'].includes(lang))return;save(lang);setCore(lang);syncSelects(lang,true);applyStatic(lang);window.dispatchEvent(new CustomEvent('tj-language-change',{detail:{lang}}));if(file==='public-profile.html'&&new URLSearchParams(location.search).has('id'))window.dispatchEvent(new CustomEvent('tj-member-profile-refresh',{detail:{lang}}));}};
})();
