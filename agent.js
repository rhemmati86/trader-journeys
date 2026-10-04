(function(){
  const copy={
    fa:{
      label:'راهنمای هوشمند', sub:'همراه تو در سفرهای یک تریدر', welcome:'سلام! من راهنمای هوشمند «سفرهای یک تریدر» هستم. برای پیدا کردن بخش‌ها، ساخت پروفایل یا فهمیدن مسیر سایت کنارت هستم.',
      chips:['ساخت پروفایل','خیرین کجا هستند؟','فرصت دوباره چیست؟','چطور داستانم را ثبت کنم؟','بنیانگذار کیست؟','اعتماد و احراز هویت'],
      replies:{
        'ساخت پروفایل':'برای ساخت پروفایل از منوی «ورود به جامعه» وارد شو. یک انسان فقط یک پروفایل اصلی دارد و بعداً می‌توانی همان سفر را به‌روزرسانی کنی.',
        'خیرین کجا هستند؟':'در بخش «جامعه»، مسیر «خیرین و حامیان» را می‌بینی. هدف این بخش آشنایی با داستان‌ها و مسیر حمایت است.',
        'فرصت دوباره چیست؟':'«فرصت دوباره» مسیر تریدرهایی است که بعد از شکست مالی می‌خواهند داستان خود را ثبت کنند، حمایت بخواهند و مسیر تازه‌ای بسازند.',
        'چطور داستانم را ثبت کنم؟':'اول یک پروفایل بساز، سپس داستان اصلی‌ات را تعریف کن. در ادامه می‌توانی تجربه‌ها، شکست‌ها، فرصت‌ها و پیروزی‌های جدید را به همان پروفایل اضافه کنی.',
        'بنیانگذار کیست؟':'از منوی «بنیانگذار» می‌توانی داستان شکل‌گیری پروژه و سفر بنیانگذار را ببینی.',
        'اعتماد و احراز هویت':'بخش «اعتماد» توضیح می‌دهد چگونه می‌توان هویت، یکتایی پروفایل‌ها، داستان‌ها و مسیر حمایت را با طراحی شفاف مدیریت کرد.'
      }
    },
    en:{
      label:'Smart Guide', sub:'Your companion on Trader Journeys', welcome:'Hi! I am the Trader Journeys smart guide. I can help you find sections, create a profile, and understand how the community works.',
      chips:['Create a profile','Where are donors?','What is Second Chance?','How do I tell my story?','Who is the founder?','Trust & verification'],
      replies:{
        'Create a profile':'Use “Join the community” in the main navigation. One human has one primary profile, and the same journey can be updated over time.',
        'Where are donors?':'In the Community section, choose “Donors & supporters” to explore stories and the support path.',
        'What is Second Chance?':'Second Chance is the path for traders who experienced financial loss and want to tell their story, seek support, and rebuild.',
        'How do I tell my story?':'Create a profile first, then tell your main story. Later you can add experiences, setbacks, opportunities, and victories to the same profile.',
        'Who is the founder?':'Use the Founder item in the main navigation to read the story behind the project and the founder’s journey.',
        'Trust & verification':'The Trust section explains how identity, one-profile-per-person, stories, and the support path can be managed transparently.'
      }
    }
  };
  function getLang(){return (localStorage.getItem('tj-lang')||localStorage.getItem('site-language')||'fa').startsWith('en')?'en':'fa'}
  function build(){
    if(document.getElementById('tjAgent')) return;
    const root=document.createElement('div');root.id='tjAgent';
    root.innerHTML=`<button class="tj-agent-launcher" id="tjAgentLauncher" aria-label="Smart Guide"><span>✦</span><i class="tj-agent-dot"></i></button>
    <section class="tj-agent-panel" id="tjAgentPanel" aria-label="Smart Guide">
      <div class="tj-agent-header"><div class="tj-agent-brand"><div class="tj-agent-avatar">✦</div><div class="tj-agent-title"><strong id="tjAgentTitle"></strong><small id="tjAgentSub"></small></div></div><button class="tj-agent-close" id="tjAgentClose" aria-label="Close">×</button></div>
      <div class="tj-agent-body" id="tjAgentBody"></div>
      <div class="tj-agent-footer"><form class="tj-agent-form" id="tjAgentForm"><input class="tj-agent-input" id="tjAgentInput" autocomplete="off" /><button class="tj-agent-send" type="submit">↗</button></form><div class="tj-agent-disclaimer" id="tjAgentDisclaimer"></div></div>
    </section>`;
    document.body.appendChild(root);
    root.querySelector('#tjAgentLauncher').addEventListener('click',()=>root.querySelector('#tjAgentPanel').classList.toggle('open'));
    root.querySelector('#tjAgentClose').addEventListener('click',()=>root.querySelector('#tjAgentPanel').classList.remove('open'));
    root.querySelector('#tjAgentForm').addEventListener('submit',e=>{e.preventDefault();send(root,root.querySelector('#tjAgentInput').value.trim())});
    render(root);
    window.addEventListener('storage',e=>{if(e.key==='tj-lang'||e.key==='site-language')render(root)});
    window.addEventListener('languagechange',()=>render(root));
    window.addEventListener('tj-language-change',()=>render(root));
  }
  function render(root){
    const lang=getLang(),c=copy[lang];
    root.querySelector('#tjAgentTitle').textContent=c.label;root.querySelector('#tjAgentSub').textContent=c.sub;
    root.querySelector('#tjAgentDisclaimer').textContent=lang==='fa'?'راهنمای سایت است و جایگزین مشاوره مالی یا حقوقی نیست.':'This guide helps with the site and is not financial or legal advice.';
    const body=root.querySelector('#tjAgentBody');
    const intro=body.querySelector('.tj-msg.bot .tj-bubble');
    if(intro){intro.textContent=c.welcome;}else{addMsg(body,'bot',c.welcome);}
    let chips=body.querySelector('.tj-chip-row');
    if(!chips){chips=document.createElement('div');chips.className='tj-chip-row';body.appendChild(chips);}
    chips.replaceChildren();
    c.chips.forEach(label=>{const b=document.createElement('button');b.className='tj-chip';b.type='button';b.textContent=label;b.addEventListener('click',()=>send(document.getElementById('tjAgent'),label));chips.appendChild(b);});
  }
  function addMsg(body,type,text){const row=document.createElement('div');row.className='tj-msg '+type;const b=document.createElement('div');b.className='tj-bubble';b.textContent=text;row.appendChild(b);body.appendChild(row);body.scrollTop=body.scrollHeight}
  function addChips(body,chips){const row=document.createElement('div');row.className='tj-chip-row';chips.forEach(label=>{const b=document.createElement('button');b.className='tj-chip';b.type='button';b.textContent=label;b.addEventListener('click',()=>send(document.getElementById('tjAgent'),label));row.appendChild(b)});body.appendChild(row)}
  function send(root,text){if(!text)return;const body=root.querySelector('#tjAgentBody');addMsg(body,'user',text);root.querySelector('#tjAgentInput').value='';const lang=getLang(),c=copy[lang];const key=c.chips.find(x=>x===text);let reply=key?c.replies[key]:null;
    if(!reply){
      const lower=text.toLowerCase();
      if(lang==='fa'){
        if(/ثبت|پروفایل|حساب/.test(text)) reply=c.replies['ساخت پروفایل'];
        else if(/خیر|حامی|کمک/.test(text)) reply=c.replies['خیرین کجا هستند؟'];
        else if(/فرصت|شکست/.test(text)) reply=c.replies['فرصت دوباره چیست؟'];
        else if(/داستان/.test(text)) reply=c.replies['چطور داستانم را ثبت کنم؟'];
        else if(/بنیان/.test(text)) reply=c.replies['بنیانگذار کیست؟'];
        else if(/احراز|اعتماد|هویت/.test(text)) reply=c.replies['اعتماد و احراز هویت'];
        else reply='می‌توانم درباره ساخت پروفایل، خیرین، فرصت دوباره، داستان‌ها، بنیانگذار و اعتماد راهنمایی‌ات کنم. از یکی از گزینه‌های بالا شروع کن.';
      }else{
        if(/profile|account|sign/.test(lower)) reply=c.replies['Create a profile'];
        else if(/donor|support|help/.test(lower)) reply=c.replies['Where are donors?'];
        else if(/second|failure|loss/.test(lower)) reply=c.replies['What is Second Chance?'];
        else if(/story/.test(lower)) reply=c.replies['How do I tell my story?'];
        else if(/founder/.test(lower)) reply=c.replies['Who is the founder?'];
        else if(/trust|verify|identity/.test(lower)) reply=c.replies['Trust & verification'];
        else reply='I can guide you through profiles, donors, Second Chance, stories, the founder page, and trust & verification. Try one of the quick options above.';
      }
    }
    setTimeout(()=>addMsg(body,'bot',reply),160);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build); else build();
})();
