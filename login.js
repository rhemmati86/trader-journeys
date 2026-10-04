(function () {
  'use strict';
  const words = {
    fa: {brand:'سفرهای یک تریدر',tagline:'از شکست تا پیروزی · از کمک گرفتن تا کمک کردن',create:'ساخت پروفایل',eyebrow:'حساب کاربری',title:'به سفر خودت برگرد.',lead:'وارد شو و از همان‌جایی که داستانت را رها کردی ادامه بده.',kicker:'ورود امن',formTitle:'ورود به حساب',email:'ایمیل',password:'رمز عبور',submit:'ورود',noAccount:'حساب نداری؟',createLink:'ساخت پروفایل',footnote:'حساب خودت را امن نگه دار و رمز عبورت را با کسی به اشتراک نگذار.',demo:'حالت نمایشی فعال است. ورود بین دستگاه‌ها و ذخیره مشترک تا زمان اتصال بک‌اند فعال نمی‌شود.',configured:'اتصال حساب جهانی آماده است.',needConfig:'پیش از ورود واقعی، باید پروژه Supabase را در supabase-config.js تنظیم کنی.',signing:'در حال ورود…',success:'ورود موفق بود.',emailConfirm:'ایمیل تأیید نشده است؛ صندوق ایمیلت را بررسی کن.',error:'ورود انجام نشد: '},
    en: {brand:'Trader Journeys',tagline:'From failure to progress · From receiving help to giving back',create:'Create profile',eyebrow:'ACCOUNT',title:'Return to your journey.',lead:'Sign in and continue from where you last left your story.',kicker:'SECURE SIGN-IN',formTitle:'Sign in to your account',email:'Email',password:'Password',submit:'Sign in',noAccount:'New here?',createLink:'Create a profile',footnote:'Keep your account secure and never share your password.',demo:'Demo mode is active. Cross-device sign-in and shared storage are unavailable until the backend is connected.',configured:'Shared account system is connected.',needConfig:'Before real sign-in, configure your Supabase project in supabase-config.js.',signing:'Signing in…',success:'Signed in successfully.',emailConfirm:'Your email is not confirmed yet. Check your inbox.',error:'Sign-in failed: '}
  };
  const langEl = document.getElementById('lang');
  const form = document.getElementById('loginForm');
  const message = document.getElementById('loginMessage');
  const modeNote = document.getElementById('loginModeNote');
  let lang = localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || 'fa';
  function t() { return words[lang] || words.fa; }
  function setLanguage(value) {
    lang = value === 'en' ? 'en' : 'fa';
    localStorage.setItem('tj-lang', lang); localStorage.setItem('site-language', lang);
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'; document.body.dir = document.documentElement.dir;
    document.querySelectorAll('[data-login]').forEach(el => { const v = t()[el.dataset.login]; if (v) el.textContent = v; });
    langEl.value = lang; document.title = lang === 'en' ? 'Sign in | Trader Journeys' : 'ورود | سفرهای یک تریدر';
    modeNote.textContent = window.TJBackend?.isConfigured() ? t().configured : t().demo;
  }
  langEl.addEventListener('change', () => setLanguage(langEl.value));
  window.addEventListener('languagechange', () => setLanguage(localStorage.getItem('tj-lang') || 'fa'));
  form.addEventListener('submit', async event => {
    event.preventDefault(); message.textContent = '';
    if (!window.TJBackend?.isConfigured()) { message.textContent = t().needConfig; return; }
    const button = form.querySelector('[type="submit"]'); button.disabled = true; button.textContent = t().signing;
    try {
      const fd = new FormData(form);
      await window.TJBackend.signIn(fd.get('email'), fd.get('password'));
      const workspace = await window.TJBackend.loadWorkspace();
      if (!workspace.user) throw new Error('No authenticated session returned.');
      localStorage.setItem('tj-profile', JSON.stringify(workspace.profile));
      localStorage.setItem('tj-chapters', JSON.stringify(workspace.chapters));
      localStorage.setItem('tj-profile-private', JSON.stringify({ ...(workspace.privateProfile || {}), email: workspace.user?.email || '' }));
      message.textContent = t().success;
      const next = new URLSearchParams(location.search).get('next');
      location.href = next && /^[a-z0-9-]+\.html$/i.test(next) ? next : 'dashboard.html';
    } catch (error) {
      const raw = String(error?.message || '');
      message.textContent = (raw.toLowerCase().includes('email not confirmed') ? t().emailConfirm : t().error + raw);
    } finally { button.disabled = false; button.textContent = t().submit; }
  });
  setLanguage(lang);
  if(new URLSearchParams(location.search).get('checkEmail')==='1') message.textContent=lang==='en'?'Please confirm your email, then sign in.':'ایمیلت را تأیید کن و سپس وارد حساب شو.';
})();
