const translations = {
  fa: {
    brand: 'سفرهای یک تریدر', tagline: 'از شکست تا پیروزی · از کمک گرفتن تا کمک کردن', back: '← بازگشت به خانه',
    eyebrow: 'ورود به جامعه', title: 'سفر خودت را شروع کن.', lead: 'یک حساب، یک هویت، یک سفر. نقش امروزت می‌تواند در آینده تغییر کند؛ پروفایلت همراه تو می‌ماند.',
    recipient: { title:'فرصت دوباره', sub:'من به حمایت نیاز دارم' }, donor:{ title:'خیرین', sub:'من می‌خواهم کمک کنم' },
    form:{ kicker:'مرحله ۱ از ۳', titleRecipient:'ساخت پروفایل فرصت دوباره', titleDonor:'ساخت پروفایل خیر' },
    identity:{heading:'معرفی من'}, market:{heading:'سفر من در بازار',forex:'تجربه در بازار فارکس',crypto:'تجربه در بازار کریپتو',other:'بازارهای مالی دیگر'}, story:{heading:'داستان من'},
    fields:{name:'نام یا نام مستعار',namePh:'مثلاً علی',country:'کشور محل زندگی',countryPh:'مثلاً هلند',email:'ایمیل',emailPh:'name@example.com',username:'نام کاربری',usernamePh:'مثلاً trader_ali',password:'رمز عبور',passwordPh:'حداقل ۸ کاراکتر',birth:'سال تولد',birthPh:'مثلاً 1990',years:'چند سال در بازار فعالیت داشته‌ای؟',bio:'یک معرفی کوتاه',bioPh:'در چند جمله خودت را معرفی کن...',bioLang:'زبان اصلی معرفی کوتاه',story:'داستان سفر تو',storyPh:'از شروع مسیر، تجربه‌ها، شکست‌ها، فرصت‌ها و امروزت بنویس...',storyLang:'زبان اصلی داستان',donorStoryLang:'زبان اصلی داستان خیر',needDetail:'توضیح وضعیت فعلی',needDetailPh:'بدون درج اطلاعات خیلی حساس، توضیح بده الان در چه شرایطی هستی و چه حمایتی نیاز داری...',donorStory:'چرا می‌خواهی کمک کنی؟',donorStoryPh:'داستان یا انگیزه خودت را با جامعه به اشتراک بگذار...'},
    need:{heading:'الان چه چیزی نیاز داری؟'}, needs:{living:'کمک معیشتی',housing:'مسکن / اجاره',debt:'هزینه ضروری / بدهی',work:'کار و مهارت',other:'نیاز دیگر'},
    wallet:{title:'کیف پول دریافت کمک',text:'در نسخه نهایی، یک آدرس کیف پول تأییدشده به همین پروفایل متصل می‌شود. کلید خصوصی هرگز از شما درخواست نمی‌شود.',placeholder:'0x... یا آدرس شبکه موردنظر'},
    donorStory:{heading:'داستان من به‌عنوان خیر'}, donorWallet:{title:'کیف پول کمک',text:'می‌توانی در آینده کیف پول یا روش کمک موردنظرت را به پروفایلت اضافه کنی. نگهداری کلید خصوصی توسط سایت انجام نمی‌شود.',placeholder:'آدرس کیف پول (اختیاری)'},
    consent:'می‌پذیرم که اطلاعات عمومی پروفایلم را خودم انتخاب کنم و اطلاعات هویتی موردنیاز برای احراز، عمومی نخواهد شد.', publishConsent:'می‌خواهم پروفایل و داستانم برای همه قابل مشاهده باشد. (اختیاری)', existingAccount:'قبلاً حساب ساخته‌ای؟', signInLink:'وارد شو', submit:'ساخت پروفایل و ادامه', footnote:'این نسخه نمایشی است؛ برای حساب جهانی باید بک‌اند تنظیم شود.', demoStatus:'حالت نمایشی: اطلاعات فقط در همین مرورگر ذخیره می‌شوند. برای حساب واقعی و دسترسی جهانی، اتصال بک‌اند لازم است.', liveStatus:'حساب امن و ذخیره‌سازی مشترک فعال است.', pendingStatus:'حساب اولیه ساخته شد. ایمیلت را برای تأیید بررسی کن؛ بعد از ورود می‌توانی جزئیات خصوصی حمایت را تکمیل کنی.', liveError:'ساخت حساب انجام نشد: ',
    preview:{label:'پیش‌نمایش سفر',title:'یک پروفایل، برای تمام مسیر',text:'امروز می‌توانی درخواست حمایت داشته باشی؛ فردا تجربه‌ات را ثبت کنی و روزی خودت به یک حامی تبدیل شوی.'},
    journey:{start:'شروع',draw:'شکست',rec:'فرصت دوباره',win:'پیروزی'}, verification:{title:'هویت یکتا',text:'هر فرد فقط یک پروفایل اصلی خواهد داشت؛ داستانش می‌تواند بارها به‌روزرسانی شود.'},
    footer:{name:'سفرهای یک تریدر',text:'از شکست تا پیروزی · از کمک گرفتن تا کمک کردن',note:'نسخه ثبت‌نام اولیه'}
  },
  en: {
    brand:'Trader Journeys', tagline:'From failure to victory · From receiving help to giving back', back:'← Back home', eyebrow:'Join the community', title:'Start your journey.', lead:'One account, one identity, one journey. Your role can change over time; your profile stays with you.',
    recipient:{title:'Second Chance',sub:'I need support'}, donor:{title:'Donors',sub:'I want to help'}, form:{kicker:'Step 1 of 3',titleRecipient:'Create a Second Chance profile',titleDonor:'Create a donor profile'},
    identity:{heading:'About me'}, market:{heading:'My market journey',forex:'Forex experience',crypto:'Crypto experience',other:'Other financial markets'}, story:{heading:'My story'},
    fields:{name:'Name or nickname',namePh:'e.g. Alex',country:'Country of residence',countryPh:'e.g. Netherlands',email:'Email',emailPh:'name@example.com',username:'Username',usernamePh:'e.g. trader_alex',password:'Password',passwordPh:'At least 8 characters',birth:'Birth year',birthPh:'e.g. 1990',years:'How long have you been active in markets?',bio:'Short introduction',bioPh:'Introduce yourself in a few sentences…',bioLang:'Original language of short introduction',story:'Your journey story',storyPh:'Describe how it began, what you experienced, setbacks, opportunities, and where you are today…',storyLang:'Original story language',donorStoryLang:'Donor story language',needDetail:'Current situation',needDetailPh:'Without sharing highly sensitive details, explain your current situation and the support you need…',donorStory:'Why do you want to help?',donorStoryPh:'Share your story or motivation with the community…'},
    need:{heading:'What do you need right now?'}, needs:{living:'Living support',housing:'Housing / rent',debt:'Essential costs / debt',work:'Work & skills',other:'Other need'},
    wallet:{title:'Support wallet',text:'In the final version, a verified wallet address can be linked to this profile. Your private key will never be requested.',placeholder:'0x… or your preferred network address'},
    donorStory:{heading:'My story as a donor'}, donorWallet:{title:'Giving wallet',text:'You can later add a wallet or preferred giving method to your profile. The site will not custody private keys.',placeholder:'Wallet address (optional)'},
    consent:'I understand that I choose which profile information becomes public, and identity-verification data will not be public.', publishConsent:'I want my profile and story to be visible to everyone. (Optional)', existingAccount:'Already have an account?', signInLink:'Sign in', submit:'Create profile & continue', footnote:'This is a demo; configure the backend to enable global accounts.', demoStatus:'Demo mode: information is saved only in this browser. Connect a backend for real accounts and global access.', liveStatus:'Secure accounts and shared storage are enabled.', pendingStatus:'Your account has been created. Check your email to confirm it; after signing in, you can complete private support details.', liveError:'Account creation failed: ',
    preview:{label:'Journey preview',title:'One profile, for the whole journey',text:'You may need support today, document progress tomorrow, and one day become a supporter yourself.'},
    journey:{start:'Start',draw:'Failure',rec:'Second chance',win:'Victory'}, verification:{title:'Unique identity',text:'Each person has one primary profile; their story can be updated many times.'}, footer:{name:'Trader Journeys',text:'From failure to victory · From receiving help to giving back',note:'Initial signup prototype'}
  }
};

const lang = document.getElementById('lang');
const form = document.getElementById('signupForm');
const recipientFields = document.getElementById('recipientFields');
const donorFields = document.getElementById('donorFields');
const formTitle = document.getElementById('formTitle');
let currentRole = localStorage.getItem('signup-role') || 'recipient';

function get(obj, path){ return path.split('.').reduce((a,k)=>a?.[k], obj); }
function applyLanguage(code){
  const t = translations[code] || translations.fa;
  document.documentElement.lang = code;
  document.documentElement.dir = code === 'fa' ? 'rtl' : 'ltr';
  document.title = code === 'fa' ? 'ساخت پروفایل | سفرهای یک تریدر' : 'Create Profile | Trader Journeys';
  document.querySelectorAll('[data-t]').forEach(el=>{ const v=get(t,el.dataset.t); if(typeof v==='string') el.textContent=v; });
  document.querySelectorAll('[data-ph]').forEach(el=>{ const v=get(t,el.dataset.ph); if(typeof v==='string') el.placeholder=v; });
  formTitle.textContent = currentRole === 'recipient' ? t.form.titleRecipient : t.form.titleDonor;
  lang.value=code;
  localStorage.setItem('tj-lang',code);localStorage.setItem('site-language',code);
  const status=document.getElementById('signupBackendNote'); if(status) status.textContent=window.TJBackend?.isConfigured()?t.liveStatus:(window.TJBackend?.hasConfig()?t.liveError+window.TJBackend.statusMessage(code):t.demoStatus);
  const foot=document.querySelector('.form-footnote[data-t=footnote]'); if(foot) foot.textContent=t.footnote;
}
function setRole(role){
  currentRole = role;
  localStorage.setItem('signup-role',role);
  document.querySelectorAll('.role-tab').forEach(btn=>{ const active=btn.dataset.role===role; btn.classList.toggle('active',active); btn.setAttribute('aria-selected',String(active)); });
  recipientFields.hidden = role !== 'recipient';
  donorFields.hidden = role !== 'donor';
  const t=translations[lang.value] || translations.fa;
  formTitle.textContent = role==='recipient' ? t.form.titleRecipient : t.form.titleDonor;
}
document.querySelectorAll('.role-tab').forEach(btn=>btn.addEventListener('click',()=>setRole(btn.dataset.role)));
lang.addEventListener('change',()=>applyLanguage(lang.value));
form.addEventListener('submit', async e=>{
  e.preventDefault();
  const fd=new FormData(form);
  const submitButton=form.querySelector('[type="submit"]');
  const originalButton=submitButton.innerHTML;
  const prior=JSON.parse(localStorage.getItem('tj-profile')||'null');
  const publicProfile=fd.get('publishProfile')==='on';
  const profile={
    id:prior?.id || ('TJ-' + String(Math.floor(Math.random()*900000)+100000)),
    role:currentRole,
    name:String(fd.get('name')||'').trim(),
    country:String(fd.get('country')||'').trim(),
    email:String(fd.get('email')||'').trim(),
    username:String(fd.get('username')||'').trim(),
    birthYear:fd.get('birthYear')||'', years:fd.get('years')||'', markets:fd.getAll('market'),
    bio:String(fd.get('bio')||''), bioLang:fd.get('bioLang')||localStorage.getItem('tj-lang')||'fa',
    story:currentRole==='donor'?(fd.get('donorStory')||''):(fd.get('story')||''),
    storyLang:currentRole==='donor'?(fd.get('donorStoryLang')||localStorage.getItem('tj-lang')||'fa'):(fd.get('storyLang')||localStorage.getItem('tj-lang')||'fa'),
    donorStory:String(fd.get('donorStory')||''), donorStoryLang:fd.get('donorStoryLang')||localStorage.getItem('tj-lang')||'fa',
    needs:fd.getAll('need'), needDetail:String(fd.get('needDetail')||''), wallet:String(fd.get('wallet')||''), donorWallet:String(fd.get('donorWallet')||''),
    isPublic:publicProfile, seekingSupport:currentRole==='recipient', createdAt:prior?.createdAt||new Date().toISOString()
  };
  submitButton.disabled=true;
  try {
    if(window.TJBackend?.hasConfig() && !window.TJBackend.isConfigured()) throw new Error(window.TJBackend.statusMessage(lang.value));
    if(window.TJBackend?.isConfigured()){
      const result=await window.TJBackend.signUp(profile,{needs:profile.needs,needDetail:profile.needDetail,wallet:profile.wallet,donorWallet:profile.donorWallet},String(fd.get('password')||''));
      ['tj-profile','tj-chapters','tj-profile-private'].forEach(key=>localStorage.removeItem(key));
      if(result.session){
        const workspace=await window.TJBackend.loadWorkspace();
        localStorage.setItem('tj-profile',JSON.stringify(workspace.profile));
        localStorage.setItem('tj-chapters',JSON.stringify(workspace.chapters||[]));
        localStorage.setItem('tj-profile-private',JSON.stringify({...(workspace.privateProfile||{}),email:workspace.user?.email||profile.email}));
        location.href='dashboard.html';
      } else {
        const note=document.getElementById('signupBackendNote');
        if(note) note.textContent=(translations[lang.value]||translations.fa).pendingStatus;
        localStorage.setItem('tj-pending-email',profile.email);
        submitButton.disabled=false;submitButton.innerHTML=originalButton;
      }
      return;
    }
    // Explicit local-only demo mode. Password is never stored. Keep private fields separate from the public profile cache.
    const publicProfile={...profile}; ['birthYear','needs','needDetail','wallet','donorWallet'].forEach(key=>delete publicProfile[key]);
    localStorage.setItem('tj-profile',JSON.stringify(publicProfile));
    localStorage.removeItem('tj-chapters');
    localStorage.setItem('tj-profile-private',JSON.stringify({birthYear:profile.birthYear,needs:profile.needs,needDetail:profile.needDetail,wallet:profile.wallet,donorWallet:profile.donorWallet,email:profile.email}));
    window.location.href='dashboard.html';
  } catch(error) {
    const note=document.getElementById('signupBackendNote');
    if(note) note.textContent=(translations[lang.value]||translations.fa).liveError+String(error?.message||'Unknown error');
    submitButton.disabled=false;submitButton.innerHTML=originalButton;
  }
});
setRole(currentRole);
applyLanguage(localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || 'fa');
if (form.elements.bioLang) form.elements.bioLang.value = localStorage.getItem('tj-lang') || 'fa';
if (form.elements.storyLang) form.elements.storyLang.value = localStorage.getItem('tj-lang') || 'fa';
if (form.elements.donorStoryLang) form.elements.donorStoryLang.value = localStorage.getItem('tj-lang') || 'fa';
