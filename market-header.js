(function(){
  const c={
    fa:{brand:'سفرهای یک تریدر',tagline:'از شکست تا پیروزی · از کمک گرفتن تا کمک کردن',explore:'کشف سفرها',community:'جامعه',trust:'اعتماد',myJourney:'سفر من',founder:'بنیان‌گذار',settings:'تنظیمات',join:'ورود به جامعه',live:'LIVE'},
    en:{brand:'Trader Journeys',tagline:'From failure to progress · From receiving to giving back',explore:'Explore journeys',community:'Community',trust:'Trust',myJourney:'My journey',founder:'Founder',settings:'Settings',join:'Join the community',live:'LIVE'}
  };
  const langKey=localStorage.getItem('tj-lang')||localStorage.getItem('site-language')||'fa';
  const navLinks=()=>document.querySelectorAll('.trader-main-nav a,.mobile-trader-menu a');
  function setActive(key){
    navLinks().forEach(a=>{
      const isActive=(a.dataset.nav===key);
      a.classList.toggle('active',isActive);
      if(isActive) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
  }
  function activePage(){
    const path=location.pathname.split('/').pop()||'index.html';
    if(path==='explore.html'){setActive('explore');return;}
    if(path==='founder.html'){setActive('founder');return;}
    if(path==='settings.html'){setActive('settings');return;}
    if(path==='signup.html'){setActive('join');return;}
    if(path==='index.html'||path===''){
      // On the homepage, only one nav item is active at a time.
      setActive('explore');
      const sections=[
        {id:'community',key:'community'},
        {id:'trust',key:'trust'}
      ];
      const nodes=sections.map(s=>({ ...s, el:document.getElementById(s.id) })).filter(s=>s.el);
      if(!nodes.length) return;
      if('IntersectionObserver' in window){
        let current='explore';
        const obs=new IntersectionObserver(entries=>{
          const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
          if(visible[0]){
            const hit=nodes.find(n=>n.el===visible[0].target);
            if(hit && hit.key!==current){current=hit.key;setActive(current);}
          }
        },{rootMargin:'-22% 0px -58% 0px',threshold:[0,.15,.35,.6]});
        nodes.forEach(n=>obs.observe(n.el));
      }
    }
  }
  function render(l){
    const d=c[l]||c.fa;
    document.querySelectorAll('[data-nav]').forEach(el=>{const key=el.dataset.nav;if(d[key])el.textContent=d[key]});
    document.documentElement.lang=l; document.documentElement.dir=l==='fa'?'rtl':'ltr'; document.body.dir=document.documentElement.dir;
    document.querySelectorAll('.header-language').forEach(s=>s.value=l);
    activePage();
  }
  const onLang=e=>{const l=e.target.value;localStorage.setItem('tj-lang',l);localStorage.setItem('site-language',l);render(l);window.dispatchEvent(new Event('languagechange'))};
  document.querySelectorAll('.header-language').forEach(s=>s.addEventListener('change',onLang));
  const toggle=document.getElementById('navToggle'), menu=document.getElementById('mobileTraderMenu');
  if(toggle&&menu){
    toggle.addEventListener('click',()=>{
      const open=document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded','false');
    }));
  }
  render(langKey);
})();
