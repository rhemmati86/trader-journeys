/* Local prototype renderer for a member's public profile.
   Production profile records will come from the database/API instead of localStorage. */
(function () {
  'use strict';
  const params = new URLSearchParams(location.search);
  const requestedId = params.get('id');
  if (!requestedId) return;
  let remoteData = null;
  let remoteFollowed = null; // Keep the founder's editorial profile for the plain URL.

  const lang = () => localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || document.documentElement.lang || 'fa';
  const isFa = () => lang() === 'fa';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const guess = text => /[\u0600-\u06FF]/.test(String(text || '')) ? 'fa' : 'en';
  const languageNames = {fa:'فارسی',en:'English',es:'Español',fr:'Français',de:'Deutsch',tr:'Türkçe',ar:'العربية',pt:'Português',it:'Italiano',ru:'Русский'};
  const ui = {
    fa: {
      community:'عضو جامعه', founderTag:'سفر عضو جامعه', years:'سال سابقه', verified:'◌ پروفایل نمونه محلی · هویت تأیید نشده',
      markets:'بازارهای تجربه‌شده', stage:'مرحله فعلی', role:'نقش فعلی', updated:'به‌روزرسانی', supporter:'حامی', recipient:'فرصت دوباره', member:'عضو جامعه',
      introFallback:'این عضو هنوز معرفی کوتاهی اضافه نکرده است.', storyLead:'فصل‌های عمومی این سفر. متن اصلی حفظ می‌شود و در صورت فعال بودن سرویس ترجمه، می‌توان آن را به زبان انتخابی خواند.',
      noChapters:'هنوز فصل عمومی منتشر نشده است.', chapter:'فصل', chapterFallback:'فصل سفر', chartTitle:'مسیر سفر این تریدر', chartNote:'روایت مسیر · نه پیش‌بینی بازار', start:'شروع', failure:'شکست', recovery:'فرصت دوباره', goal:'هدف: پیروزی',
      storyEyebrow:'داستان این سفر', storyTitle:'داستان، فصل به فصل', latest:'آخرین فصل‌های سفر', statusTitle:'وضعیت سفر', today:'امروز کجای سفر است؟', stageName:'مرحله', profileName:'پروفایل', publicChapters:'فصل‌های عمومی',
      full:'دیدن فصل‌های سفر', follow:'دنبال کردن سفر', following:'در حال دنبال‌کردن ✓', unfollow:'لغو دنبال‌کردن', ctaTitle:'این سفر هنوز ادامه دارد', cta:'هر فصل تازه، بخش دیگری از مسیر این انسان را ثبت می‌کند.', ctaNote:'با دنبال‌کردن سفر می‌توانی به‌روزرسانی‌های عمومی آن را بعداً ببینی.'
    },
    en: {
      community:'Community member', founderTag:'Community journey', years:'years of experience', verified:'◌ Local prototype profile · identity not verified',
      markets:'Markets experienced', stage:'Current stage', role:'Current role', updated:'Updated', supporter:'Supporter', recipient:'Second Chance', member:'Community member',
      introFallback:'This member has not added a short introduction yet.', storyLead:'Public chapters in this journey. Original text is preserved and can be read in your selected language when translation is enabled.',
      noChapters:'No public chapters have been published yet.', chapter:'Chapter', chapterFallback:'Journey chapter', chartTitle:'This trader’s journey', chartNote:'Journey narrative · not a market forecast', start:'Start', failure:'Failure', recovery:'Second chance', goal:'Goal: progress',
      storyEyebrow:'THIS JOURNEY', storyTitle:'The story, chapter by chapter', latest:'Latest journey chapters', statusTitle:'JOURNEY STATUS', today:'Where is the journey today?', stageName:'Stage', profileName:'Profile', publicChapters:'Public chapters',
      full:'View journey chapters', follow:'Follow journey', following:'Following ✓', unfollow:'Unfollow', ctaTitle:'This journey is still unfolding', cta:'Each new chapter records another part of this person’s path.', ctaNote:'Follow this journey to revisit public updates as the story evolves.'
    }
  };
  const L = () => ui[isFa() ? 'fa' : 'en'];
  const localizeCountry = value => {
    const aliases = {
      'هلند':'Netherlands','Netherlands':'هلند','ایران':'Iran','Iran':'ایران','ترکیه':'Turkey','Turkey':'ترکیه',
      'آلمان':'Germany','Germany':'آلمان','فرانسه':'France','France':'فرانسه','اسپانیا':'Spain','Spain':'اسپانیا',
      'کانادا':'Canada','Canada':'کانادا','آمریکا':'United States','United States':'آمریکا','بریتانیا':'United Kingdom','United Kingdom':'بریتانیا'
    };
    const text = String(value || '').trim();
    if (!text) return '';
    const counterpart = aliases[text];
    if (!counterpart) return text;
    return isFa() ? (/^[\u0600-\u06FF\s]+$/.test(text) ? text : counterpart) : (/^[\u0600-\u06FF\s]+$/.test(text) ? counterpart : text);
  };
  const formatDate = value => {
    if (typeof value === 'number' || (typeof value === 'string' && /^\d{13}$/.test(value))) {
      const d = new Date(Number(value));
      return Number.isNaN(d.getTime()) ? '' : d.toISOString().slice(0,10);
    }
    return String(value || '').slice(0,10);
  };

  function render() {
    let profile, chapters;
    try {
      if (remoteData) { profile = remoteData.profile; chapters = remoteData.chapters || []; }
      else { profile = JSON.parse(localStorage.getItem('tj-profile') || 'null'); chapters = JSON.parse(localStorage.getItem('tj-chapters') || '[]'); }
    } catch (_) { return; }
    if (!profile || ![String(profile.id), String(profile.publicId || ''), String(profile.username || '')].includes(requestedId)) return;

    const copy = L();
    const prettyMarkets = (profile.markets || []).map(x => String(x).toUpperCase()).join(' · ') || 'FOREX · CRYPTO';
    const publicChapters = chapters.filter(ch => ch.public !== false).sort((a,b) => String(a.date||'').localeCompare(String(b.date||'')));
    const currentChapter = publicChapters[publicChapters.length - 1];
    const story = String(profile.story || profile.donorStory || profile.bio || '').trim();
    const sourceLang = profile.story ? (profile.storyLang || guess(story)) : (profile.donorStory ? (profile.donorStoryLang || guess(story)) : (profile.bioLang || guess(story)));
    const stageLabels = {
      fa:{start:'شروع',experience:'تجربه',success:'موفقیت',failure:'شکست',drawdown:'شکست',recovery:'فرصت دوباره',rebuild:'بازسازی',rebuilding:'بازسازی',victory:'پیروزی',giving:'کمک به دیگران'},
      en:{start:'Start',experience:'Experience',success:'Success',failure:'Failure',drawdown:'Drawdown',recovery:'Second chance',rebuild:'Rebuilding',rebuilding:'Rebuilding',victory:'Progress',giving:'Giving back'}
    };
    const stage = stageLabels[isFa()?'fa':'en'][currentChapter?.stage] || stageLabels[isFa()?'fa':'en'][profile.role === 'donor' ? 'giving' : 'recovery'] || '—';
    const profileName = profile.name || profile.username || copy.community;
    const fullDate = formatDate(currentChapter?.date || profile.updatedAt || profile.createdAt);

    const nameEl = document.querySelector('.identity-head h1');
    const avatarEl = document.querySelector('.public-avatar');
    const metaLine = document.querySelector('.identity-head p');
    if (nameEl) nameEl.textContent = profileName;
    if (avatarEl) avatarEl.textContent = profileName.trim().charAt(0) || '?';
    if (metaLine) metaLine.textContent = [localizeCountry(profile.country), prettyMarkets, profile.years ? `${profile.years} ${copy.years}` : ''].filter(Boolean).join(' · ');

    const verified = document.querySelector('.verified');
    if (verified) verified.textContent = copy.verified;

    const meta = document.querySelectorAll('.profile-meta-grid .meta-box strong');
    if (meta[0]) meta[0].textContent = prettyMarkets;
    if (meta[1]) meta[1].textContent = stage;
    if (meta[2]) meta[2].textContent = profile.role === 'donor' ? copy.supporter : profile.role === 'recipient' ? copy.recipient : copy.member;
    if (meta[3]) meta[3].textContent = fullDate || '—';
    const metaLabels = document.querySelectorAll('.profile-meta-grid .meta-box span');
    [copy.markets, copy.stage, copy.role, copy.updated].forEach((text, i) => { if (metaLabels[i]) metaLabels[i].textContent = text; });

    const summary = document.querySelector('.public-summary');
    if (summary) {
      summary.className = 'public-summary story-translation-block';
      summary.dataset.storyTranslation = '';
      summary.dataset.sourceLang = profile.bio ? (profile.bioLang || guess(profile.bio)) : sourceLang;
      summary.dataset.autoTranslate = 'true';
      summary.innerHTML = `<span data-story-text>${esc(profile.bio || profile.story || profile.donorStory || copy.introFallback)}</span>`;
    }

    const tags = document.querySelector('.tag-row');
    if (tags) {
      const tagStage = stageLabels[isFa()?'fa':'en'][currentChapter?.stage] || (isFa() ? 'در حال ادامه سفر' : 'Journey in progress');
      tags.innerHTML = `${(profile.markets||[]).map(m=>`<span class="tag">${esc(String(m).toUpperCase())}</span>`).join('')}<span class="tag">${esc(tagStage)}</span><span class="tag">${esc(languageNames[sourceLang] || sourceLang)}</span>`;
    }

    const chartTitle = document.querySelector('.chart-top strong'); if (chartTitle) chartTitle.textContent = copy.chartTitle;
    const chartNote = document.querySelector('.chart-top small'); if (chartNote) chartNote.textContent = copy.chartNote;
    document.querySelectorAll('.chart-caption span').forEach((el, i) => { el.textContent = [copy.start, copy.failure, copy.recovery, copy.goal][i] || el.textContent; });
    const storyKicker = document.querySelector('.public-story > .section-kicker'); if (storyKicker) storyKicker.textContent = copy.storyEyebrow;
    const storyHeading = document.querySelector('.public-story > h2'); if (storyHeading) storyHeading.textContent = copy.storyTitle;
    const lead = document.querySelector('.public-story .story-lead'); if (lead) lead.textContent = copy.storyLead;

    const chapterWrap = document.querySelector('.public-story');
    if (chapterWrap) {
      chapterWrap.id = 'chapters';
      chapterWrap.querySelectorAll('.chapter-mini').forEach(el => el.remove());
      const rows = publicChapters.length ? publicChapters : (story ? [{id:'story-main',date:formatDate(profile.createdAt),stage:profile.role==='donor'?'giving':'start',title:isFa()?'داستان اصلی سفر':'Core journey story',body:story,sourceLang,public:true}] : []);
      if (!rows.length) {
        const empty = document.createElement('div'); empty.className='chapter-mini';
        empty.innerHTML = `<p>${copy.noChapters}</p>`;
        chapterWrap.appendChild(empty);
      } else {
        rows.forEach((chapter, index) => {
          const src = chapter.sourceLang || sourceLang || guess(`${chapter.title||''} ${chapter.body||''}`);
          const row = document.createElement('div'); row.className='chapter-mini';
          row.innerHTML = `<div class="chapter-mini-head"><small>${copy.chapter} ${index+1}${chapter.date ? ` · ${esc(formatDate(chapter.date))}` : ''}</small></div><div class="story-translation-block" data-story-translation data-source-lang="${esc(src)}" data-auto-translate="true"><h3 data-story-text>${esc(chapter.title || copy.chapterFallback)}</h3><p data-story-text>${esc(chapter.body || '')}</p></div>`;
          chapterWrap.appendChild(row);
        });
      }
    }

    const updates = document.querySelector('.public-update');
    if (updates) {
      const sectionLabel = updates.querySelector(':scope > .section-kicker');
      const sectionHeading = updates.querySelector(':scope > h2');
      if (sectionLabel) sectionLabel.textContent = copy.latest;
      if (sectionHeading) sectionHeading.textContent = copy.latest;
      updates.querySelectorAll('.update-item').forEach(el => el.remove());
      publicChapters.slice(-3).reverse().forEach(chapter => {
        const src = chapter.sourceLang || sourceLang;
        const item = document.createElement('div'); item.className = 'update-item';
        item.innerHTML = `<span>${esc(formatDate(chapter.date))}</span><div class="story-translation-block" data-story-translation data-source-lang="${esc(src)}" data-auto-translate="true"><h3 data-story-text>${esc(chapter.title || '')}</h3><p data-story-text>${esc(chapter.body || '')}</p></div>`;
        updates.appendChild(item);
      });
    }

    const sidebarKicker = document.querySelector('.public-sidebar-card > .section-kicker'); if (sidebarKicker) sidebarKicker.textContent = copy.statusTitle;
    const sidebarHeading = document.querySelector('.public-sidebar-card h2'); if (sidebarHeading) sidebarHeading.textContent = copy.today;
    document.querySelectorAll('.journey-stat span').forEach((el, i) => { el.textContent = [copy.stageName, copy.markets, copy.profileName, copy.publicChapters][i] || el.textContent; });
    document.querySelectorAll('.journey-stat b').forEach((el, i) => { el.textContent = [stage, prettyMarkets, isFa() ? 'یکتا' : 'Unique', String(publicChapters.length)][i] || el.textContent; });

    const fullLink = document.querySelector('.public-actions .btn-outline');
    if (fullLink) { fullLink.href = '#chapters'; fullLink.textContent = copy.full; }
    const followKey = `tj-follow-${requestedId}`;
    const followed = remoteData ? Boolean(remoteFollowed) : localStorage.getItem(followKey) === '1';
    ['#followBtn', '#followBottom'].forEach(selector => {
      const btn = document.querySelector(selector);
      if (!btn) return;
      btn.textContent = followed ? copy.following : copy.follow;
      btn.classList.toggle('follow-active', followed);
      btn.onclick = async () => {
        if (window.TJBackend?.isConfigured() && remoteData) {
          try { remoteFollowed = await window.TJBackend.toggleFollow(remoteData.profile.id); render(); }
          catch (error) {
            const message = String(error?.message || '');
            if (/sign in/i.test(message)) location.href = `login.html?next=${encodeURIComponent(`public-profile.html?id=${requestedId}`)}`;
            else alert(isFa() ? 'امکان دنبال‌کردن وجود ندارد: ' + message : 'Could not follow this journey: ' + message);
          }
          return;
        }
        const next = localStorage.getItem(followKey) !== '1';
        localStorage.setItem(followKey, next ? '1' : '0');
        render();
      };
    });

    const footerKick = document.querySelector('.public-footer-cta .section-kicker'); if (footerKick) footerKick.textContent = copy.ctaTitle;
    const footerHeading = document.querySelector('.public-footer-cta h2'); if (footerHeading) footerHeading.textContent = copy.cta;
    const footerText = document.querySelector('.public-footer-cta p'); if (footerText) footerText.textContent = copy.ctaNote;
    document.title = `${profileName} | ${isFa() ? 'سفرهای یک تریدر' : 'Trader Journeys'}`;
    if (window.TJStoryTranslation) window.TJStoryTranslation.enhance(document);
  }

  async function initializePublicProfile() {
    if (window.TJBackend?.isConfigured()) {
      try {
        remoteData = await window.TJBackend.getPublicProfile(requestedId);
        if (!remoteData) {
          const heading = document.querySelector('.identity-head h1');
          const summary = document.querySelector('.public-summary');
          if (heading) heading.textContent = isFa() ? 'این پروفایل در دسترس نیست' : 'This profile is not available';
          if (summary) summary.textContent = isFa() ? 'این سفر منتشر نشده یا دیگر عمومی نیست.' : 'This journey is unpublished or no longer public.';
          document.title = isFa() ? 'پروفایل در دسترس نیست | سفرهای یک تریدر' : 'Profile unavailable | Trader Journeys';
          return;
        }
        remoteFollowed = await window.TJBackend.isFollowing(remoteData.profile.id);
      } catch (error) {
        const summary = document.querySelector('.public-summary');
        if (summary) summary.textContent = (isFa() ? 'بارگذاری پروفایل انجام نشد: ' : 'Could not load this profile: ') + String(error?.message || '');
        return;
      }
    }
    render();
  }
  initializePublicProfile();
  window.addEventListener('tj-member-profile-refresh', render);
  window.addEventListener('languagechange', render);
  window.addEventListener('storage', event => {
    if (['tj-profile', 'tj-chapters', 'tj-lang', 'site-language'].includes(event.key)) render();
  });
})();
