const T = {
  fa: {
    roleRecipient: 'فرصت دوباره', roleDonor: 'خیر', roleCommunity: 'عضو جامعه',
    stageLabel: { start: 'شروع', experience: 'تجربه', success: 'موفقیت', failure: 'شکست', recovery: 'فرصت دوباره', rebuild: 'بازسازی', rebuilding: 'بازسازی', victory: 'پیروزی', giving: 'کمک به دیگران', drawdown: 'افت شدید' },
    hero: { eyebrow: 'داشبورد سفر', greeting: 'سفر تو هنوز ادامه دارد.', lead: 'اینجا جایی است که داستانت را ادامه می‌دهی؛ فصل‌های جدید می‌سازی، تجربه‌ها را ثبت می‌کنی و مسیرت را با یک پروفایل واحد جلو می‌بری.', add: '+ فصل جدید', view: 'مشاهده سفر عمومی' },
    chart: { title: 'نقشه مسیر من', chapters: 'فصل ثبت‌شده', updates: 'به‌روزرسانی', complete: 'تکمیل پروفایل', role: 'نقش فعلی' },
    profile: { kicker: 'پروفایل یکتا', verify: 'هویت در انتظار بررسی', verifyText: 'احراز هویت در مرحله بعد تکمیل می‌شود.', country: 'کشور', markets: 'بازارها', years: 'سابقه', username: 'نام کاربری', settings: 'تنظیمات ←', edit: 'ویرایش پروفایل ←', publish: 'انتشار پروفایل', unpublish: 'خصوصی‌کردن پروفایل', publicNote: 'پروفایل تو عمومی است؛ فقط فصل‌هایی که عمومی کرده‌ای نمایش داده می‌شوند.', privateNote: 'پروفایل به‌صورت پیش‌فرض خصوصی است؛ برای نمایش عمومی باید خودت آن را منتشر کنی.', signOut: 'خروج از حساب', signInRequired: 'برای ادامه، وارد حسابت شو.' },
    timeline: { eyebrow: 'سفر من', title: 'فصل‌های سفر من', lead: 'هر چیزی که در مسیر تجربه می‌کنی می‌تواند به یک فصل تبدیل شود.' },
    new: { kicker: 'به‌روزرسانی سفر', title: 'یک فصل تازه اضافه کن.', text: 'لازم نیست داستانت را کامل کنی. فقط بگو امروز کجای سفر ایستاده‌ای.', titleLabel: 'عنوان فصل', titlePlaceholder: 'مثلاً اولین قدم برای بازسازی', stageLabel: 'مرحله سفر', dateLabel: 'تاریخ', bodyLabel: 'داستان این فصل', bodyPlaceholder: 'این مرحله از سفرت را با زبان خودت بنویس...', languageLabel: 'زبان اصلی این داستان', public: 'این فصل را در پروفایل عمومی من نمایش بده.', save: 'ثبت فصل' },
    modal: { editTitle: 'ویرایش فصل', titleLabel: 'عنوان فصل', stageLabel: 'مرحله سفر', dateLabel: 'تاریخ', bodyLabel: 'داستان این فصل', languageLabel: 'زبان اصلی این داستان', public: 'این فصل را در پروفایل عمومی نمایش بده.', cancel: 'انصراف', save: 'ذخیره فصل' },
    role: { eyebrow: 'نقش تو ثابت نیست', title: 'امروز کمک می‌گیرم؛ فردا می‌توانم کمک کنم.', text: 'نقش تو با یک برچسب دائمی تعریف نمی‌شود. همین پروفایل می‌تواند روزی از «فرصت دوباره» به «حامی دیگران» تبدیل شود.' },
    flow: { recipient: 'فرصت دوباره', rebuild: 'بازسازی', progress: 'پیشرفت', donor: 'حامی' },
    private: { titleKicker: 'اطلاعات خصوصی', title: 'اطلاعات خصوصی درخواست حمایت', lead: 'این اطلاعات عمومی نیست و فقط برای خودت نگهداری می‌شود. در این نسخه، سایت پرداختی انجام نمی‌دهد.', living: 'کمک معیشتی', housing: 'مسکن / اجاره', debt: 'هزینه ضروری / بدهی', work: 'کار و مهارت', other: 'نیاز دیگر', detail: 'توضیح خصوصی وضعیت یا هدف کمک', detailPh: 'این متن عمومی نمی‌شود...', recipientWallet: 'آدرس کیف پول دریافت کمک (اختیاری)', donorWallet: 'روش یا کیف پول کمک (اختیاری)', save: 'ذخیره اطلاعات خصوصی', saved: 'اطلاعات خصوصی ذخیره شد.', failed: 'ذخیره اطلاعات خصوصی انجام نشد: ' },
    footer: { name: 'سفرهای یک تریدر', tagline: 'از شکست تا پیروزی · از کمک گرفتن تا کمک کردن', note: 'داشبورد سفر من' },
    chapter: 'فصل', delete: 'حذف', edit: 'ویرایش', saved: 'فصل جدید به سفر تو اضافه شد.', edited: 'فصل با موفقیت ویرایش شد.', deleted: 'فصل حذف شد.', defaultName: 'کاربر جدید', noChapters: 'هنوز فصلی ثبت نکرده‌ای.', noChaptersSub: 'از همین‌جا اولین نقطه از سفر خودت را ثبت کن.', public: 'عمومی', privateLabel: 'خصوصی', profileMissing: 'هنوز پروفایلی ساخته نشده است؛ ابتدا ثبت‌نام کن.', failed: 'انجام عملیات ممکن نشد: ', saving: 'در حال ذخیره…', signingOut: 'در حال خروج…'
  },
  en: {
    roleRecipient: 'Second Chance', roleDonor: 'Donor', roleCommunity: 'Community member',
    stageLabel: { start: 'Start', experience: 'Experience', success: 'Success', failure: 'Failure', recovery: 'Second chance', rebuild: 'Rebuilding', rebuilding: 'Rebuilding', victory: 'Progress', giving: 'Giving back', drawdown: 'Drawdown' },
    hero: { eyebrow: 'Journey dashboard', greeting: 'Your journey is still unfolding.', lead: 'Continue your story here: add chapters, record what you learn, and move forward with one enduring profile.', add: '+ Add a chapter', view: 'View public journey' },
    chart: { title: 'My journey map', chapters: 'Chapters', updates: 'Updates', complete: 'Profile complete', role: 'Current role' },
    profile: { kicker: 'Unique profile', verify: 'Identity pending review', verifyText: 'Identity verification will be completed in a later phase.', country: 'Country', markets: 'Markets', years: 'Experience', username: 'Username', settings: 'Settings →', edit: 'Edit profile →', publish: 'Publish profile', unpublish: 'Make profile private', publicNote: 'Your profile is public; only chapters you marked public will be shown.', privateNote: 'Your profile is private by default. Publish it when you are ready.', signOut: 'Sign out', signInRequired: 'Sign in to continue.' },
    timeline: { eyebrow: 'MY JOURNEY', title: 'My journey chapters', lead: 'Anything you experience along the way can become a chapter.' },
    new: { kicker: 'UPDATE JOURNEY', title: 'Add a new chapter.', text: 'Your story does not have to be complete. Just record where you are today.', titleLabel: 'Chapter title', titlePlaceholder: 'e.g. My first step toward rebuilding', stageLabel: 'Journey stage', dateLabel: 'Date', bodyLabel: 'This chapter’s story', bodyPlaceholder: 'Describe this stage of your journey in your own words…', languageLabel: 'Original language of this story', public: 'Show this chapter on my public profile.', save: 'Add chapter' },
    modal: { editTitle: 'Edit chapter', titleLabel: 'Chapter title', stageLabel: 'Journey stage', dateLabel: 'Date', bodyLabel: 'This chapter’s story', languageLabel: 'Original language of this story', public: 'Show this chapter on my public profile.', cancel: 'Cancel', save: 'Save chapter' },
    role: { eyebrow: 'YOUR ROLE CAN CHANGE', title: 'I can receive help today and help someone else tomorrow.', text: 'Your role is not a permanent label. This same profile can one day move from “Second Chance” to supporting others.' },
    flow: { recipient: 'Second Chance', rebuild: 'Rebuilding', progress: 'Progress', donor: 'Supporter' },
    private: { titleKicker: 'PRIVATE DETAILS', title: 'Private support details', lead: 'These details are not public and are stored for your account only. This version does not process payments.', living: 'Living support', housing: 'Housing / rent', debt: 'Essential costs / debt', work: 'Work & skills', other: 'Other need', detail: 'Private note about your situation or support goal', detailPh: 'This text will not be public…', recipientWallet: 'Receiving wallet address (optional)', donorWallet: 'Giving method or wallet (optional)', save: 'Save private details', saved: 'Private details saved.', failed: 'Could not save private details: ' },
    footer: { name: 'Trader Journeys', tagline: 'From failure to progress · From receiving help to giving back', note: 'My Journey dashboard' },
    chapter: 'Chapter', delete: 'Delete', edit: 'Edit', saved: 'A new chapter was added to your journey.', edited: 'Chapter updated successfully.', deleted: 'Chapter deleted.', defaultName: 'New user', noChapters: 'No chapters yet.', noChaptersSub: 'Start by recording the next point in your journey.', public: 'Public', privateLabel: 'Private', profileMissing: 'No profile exists yet. Start by creating one.', failed: 'The action could not be completed: ', saving: 'Saving…', signingOut: 'Signing out…'
  }
};

const langEl = document.getElementById('lang');
let lang = localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || 'fa';
const remote = () => Boolean(window.TJBackend?.isConfigured());
const parse = (key, fallback) => { try { const v = JSON.parse(localStorage.getItem(key) || 'null'); return v == null ? fallback : v; } catch (_) { return fallback; } };
function tr() { return T[lang] || T.fa; }
function escapeHtml(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function profileData() { return parse('tj-profile', null); }
function chapterData() { return parse('tj-chapters', []); }
function privateData() { return parse('tj-profile-private', {}); }
function saveChapters(chapters) { localStorage.setItem('tj-chapters', JSON.stringify(chapters)); }
function saveProfileCache(profile) { localStorage.setItem('tj-profile', JSON.stringify(profile)); }
function stageKey(stage) { return tr().stageLabel[stage] ? stage : 'experience'; }
function applyLang() {
  lang = localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || lang;
  document.documentElement.lang = lang; document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'; document.body.dir = document.documentElement.dir;
  langEl.value = lang; localStorage.setItem('tj-lang', lang); localStorage.setItem('site-language', lang);
  const get = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
  document.querySelectorAll('[data-t]').forEach(el => { const v = get(tr(), el.dataset.t); if (typeof v === 'string') el.textContent = v; });
  document.querySelectorAll('[data-ph]').forEach(el => { const v = get(tr(), el.dataset.ph); if (typeof v === 'string') el.placeholder = v; });
  document.querySelectorAll('option[data-stage-key]').forEach(el => { const v = tr().stageLabel[el.dataset.stageKey]; if (v) el.textContent = v; });
  document.title = lang === 'en' ? 'My Journey | Trader Journeys' : 'سفر من | سفرهای یک تریدر';
  updateVisibilityControl();
}
function seedChapters() {
  const p = profileData();
  if (!p || remote()) return;
  let chapters = parse('tj-chapters', null);
  if (chapters) return;
  const now = new Date().toISOString().slice(0, 10);
  chapters = [{ id: 'ch-' + Date.now(), date: p.createdAt ? String(p.createdAt).slice(0, 10) : now, stage: 'start', title: lang === 'fa' ? 'شروع سفر' : 'Starting the journey', body: p.bio || p.story || p.donorStory || (lang === 'fa' ? 'این اولین نقطه ثبت‌شده از سفر من است.' : 'This is the first recorded point of my journey.'), sourceLang: p.storyLang || p.bioLang || lang, public: true, createdAt: Date.now() }];
  const profileStory = p.story || p.donorStory || '';
  if (profileStory && profileStory.length > 80) chapters.push({ id: 'ch-' + (Date.now() + 1), date: now, stage: p.role === 'donor' ? 'giving' : 'recovery', title: lang === 'fa' ? 'داستانی که می‌خواهم ادامه بدهم' : 'A story I want to continue', body: profileStory, sourceLang: p.storyLang || p.donorStoryLang || lang, public: true, createdAt: Date.now() + 1 });
  saveChapters(chapters);
}
function calcCompleteness(p) {
  if (!p) return 0;
  const fields = ['name', 'country', 'username', 'bio', 'story', 'markets', 'years'];
  return Math.round(fields.filter(k => { const v = p[k]; return Array.isArray(v) ? v.length > 0 : typeof v === 'string' ? v.trim().length > 0 : Boolean(v); }).length / fields.length * 100);
}
function renderProfile() {
  const p = profileData();
  if (!p) {
    document.getElementById('profileName').textContent = tr().defaultName; document.getElementById('profileAvatar').textContent = '?'; document.getElementById('profileMeta').textContent = 'TJ-JOURNEY'; document.getElementById('chapterCount').textContent = '0'; document.getElementById('updateCount').textContent = '0'; document.getElementById('profileCompleteness').textContent = '0%'; document.getElementById('roleValue').textContent = '—'; return false;
  }
  document.getElementById('profileName').textContent = p.name || tr().defaultName; document.getElementById('profileAvatar').textContent = (p.name || '?').trim().charAt(0) || '?'; document.getElementById('profileMeta').textContent = p.publicId || p.id || 'TJ-JOURNEY';
  document.getElementById('profileCountry').textContent = p.country || '—'; document.getElementById('profileMarkets').textContent = (p.markets || []).join(' · ').toUpperCase() || '—'; document.getElementById('profileYears').textContent = p.years || '—'; document.getElementById('profileUsername').textContent = p.username ? '@' + p.username : '—';
  document.getElementById('roleValue').textContent = p.role === 'donor' ? tr().roleDonor : p.role === 'community' ? tr().roleCommunity : tr().roleRecipient; document.getElementById('profileCompleteness').textContent = calcCompleteness(p) + '%';
  const publicLink = document.getElementById('publicJourneyLink'); if (publicLink) publicLink.href = 'public-profile.html?id=' + encodeURIComponent(p.publicId || p.id || '');
  updateVisibilityControl(); return true;
}
function updateVisibilityControl() {
  const p = profileData(); const button = document.getElementById('publishProfileToggle'); const note = document.getElementById('publicationNote'); if (!button || !note) return;
  button.textContent = p?.isPublic ? tr().profile.unpublish : tr().profile.publish;
  note.textContent = p?.isPublic ? tr().profile.publicNote : tr().profile.privateNote;
  button.disabled = !p;
}
function renderRoleFlow() { const t = tr(); document.querySelectorAll('.role-flow span').forEach((n, i) => { const keys = ['recipient', 'rebuild', 'progress', 'donor']; if (keys[i]) n.textContent = t.flow[keys[i]]; }); }
function renderTimeline() {
  const list = document.getElementById('timelineList'); const chapters = chapterData();
  document.getElementById('chapterCount').textContent = chapters.length; document.getElementById('updateCount').textContent = Math.max(0, chapters.length - 1);
  if (!chapters.length) { list.innerHTML = `<div class="empty-state"><strong>${tr().noChapters}</strong><span>${tr().noChaptersSub}</span></div>`; return; }
  list.innerHTML = chapters.slice().sort((a, b) => (a.date || '').localeCompare(b.date || '') || Number(a.createdAt || 0) - Number(b.createdAt || 0)).map(c => {
    const sourceLang = c.sourceLang || (/[\u0600-\u06FF]/.test((c.title || '') + ' ' + (c.body || '')) ? 'fa' : 'en');
    return `<article class="timeline-row ${escapeHtml(c.stage)}"><div class="time-col"><span class="time-badge">${escapeHtml(c.date || '—')}</span><div class="time-dot"></div></div><div class="chapter-content"><div class="chapter-actions"><span>${tr().chapter} · ${tr().stageLabel[stageKey(c.stage)] || escapeHtml(c.stage)} · ${c.public ? tr().public : tr().privateLabel}</span><span><button type="button" data-edit="${escapeHtml(c.id)}">${tr().edit}</button> · <button type="button" data-delete="${escapeHtml(c.id)}" aria-label="${tr().delete}">${tr().delete}</button></span></div><div class="story-translation-block" data-story-translation data-source-lang="${escapeHtml(sourceLang)}" data-auto-translate="false"><h3 class="chapter-translation-title" data-story-text>${escapeHtml(c.title)}</h3><p class="chapter-body tj-translation-text" data-story-text>${escapeHtml(c.body)}</p></div></div></article>`;
  }).join('');
  list.querySelectorAll('[data-delete]').forEach(btn => btn.addEventListener('click', async () => {
    const id = btn.dataset.delete; if (!confirm(lang === 'en' ? 'Delete this chapter?' : 'این فصل حذف شود؟')) return;
    const button = btn; button.disabled = true;
    try {
      if (remote()) await window.TJBackend.deleteChapter(id);
      saveChapters(chapterData().filter(c => c.id !== id)); renderTimeline(); renderStage();
    } catch (error) { button.disabled = false; alert(tr().failed + String(error?.message || error)); }
  }));
  if (window.TJStoryTranslation) window.TJStoryTranslation.enhance(list);
}
function renderStage() {
  const chapters = chapterData().slice().sort((a, b) => (a.date || '').localeCompare(b.date || '') || Number(a.createdAt || 0) - Number(b.createdAt || 0));
  const stage = chapters.at(-1)?.stage || 'recovery'; document.getElementById('userStage').textContent = tr().stageLabel[stageKey(stage)] || tr().stageLabel.recovery; document.getElementById('currentStageBadge').textContent = (tr().stageLabel[stageKey(stage)] || 'RECOVERY').toUpperCase();
}
const chapterModal = document.getElementById('chapterModal'); const editChapterForm = document.getElementById('editChapterForm');
function closeChapterModal() { chapterModal.hidden = true; document.body.classList.remove('modal-open'); }
function openChapterModal(id) {
  const c = chapterData().find(x => String(x.id) === String(id)); if (!c) return;
  for (const k of ['id', 'title', 'stage', 'date', 'body', 'sourceLang']) if (editChapterForm.elements[k]) editChapterForm.elements[k].value = c[k] || (k === 'sourceLang' ? (lang || 'fa') : '');
  editChapterForm.elements.public.checked = !!c.public; document.getElementById('editChapterMessage').textContent = ''; chapterModal.hidden = false; document.body.classList.add('modal-open'); editChapterForm.elements.title.focus();
}
document.addEventListener('click', e => { const edit = e.target.closest('[data-edit]'); if (edit) openChapterModal(edit.dataset.edit); if (e.target.closest('[data-close-modal]')) closeChapterModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !chapterModal.hidden) closeChapterModal(); });
editChapterForm.addEventListener('submit', async e => {
  e.preventDefault(); const fd = new FormData(editChapterForm); const chapters = chapterData(); const index = chapters.findIndex(x => String(x.id) === String(fd.get('id'))); if (index < 0) return;
  const button = editChapterForm.querySelector('[type="submit"]'); button.disabled = true; button.textContent = tr().saving;
  const changed = { ...chapters[index], title: String(fd.get('title') || '').trim(), stage: String(fd.get('stage') || 'experience'), date: fd.get('date') || new Date().toISOString().slice(0, 10), body: String(fd.get('body') || '').trim(), sourceLang: String(fd.get('sourceLang') || lang || 'fa'), public: fd.get('public') === 'on', updatedAt: Date.now() };
  try {
    if (remote()) { const saved = await window.TJBackend.upsertChapter(changed); chapters[index] = saved; } else chapters[index] = changed;
    saveChapters(chapters); document.getElementById('editChapterMessage').textContent = tr().edited; renderTimeline(); renderStage(); setTimeout(closeChapterModal, 450);
  } catch (error) { document.getElementById('editChapterMessage').textContent = tr().failed + String(error?.message || error); }
  finally { button.disabled = false; button.textContent = tr().modal.save; }
});

document.getElementById('chapterForm').addEventListener('submit', async e => {
  e.preventDefault();
  if (!profileData()) { alert(tr().profileMissing); location.href = 'signup.html'; return; }
  const form = e.currentTarget; const fd = new FormData(form); const button = form.querySelector('[type="submit"]'); button.disabled = true; const oldText = button.textContent; button.textContent = tr().saving;
  const chapter = { id: remote() && crypto.randomUUID ? crypto.randomUUID() : 'ch-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7), date: fd.get('date') || new Date().toISOString().slice(0, 10), stage: String(fd.get('stage') || 'experience'), title: String(fd.get('title') || '').trim(), body: String(fd.get('body') || '').trim(), sourceLang: String(fd.get('sourceLang') || lang || 'fa'), public: fd.get('public') === 'on', createdAt: Date.now() };
  try {
    const saved = remote() ? await window.TJBackend.upsertChapter(chapter) : chapter;
    saveChapters([...chapterData(), saved]); form.reset(); form.querySelector('[name="public"]').checked = true; if (form.elements.sourceLang) form.elements.sourceLang.value = lang;
    document.getElementById('chapterMessage').textContent = tr().saved; renderTimeline(); renderStage(); setTimeout(() => document.getElementById('chapterMessage').textContent = '', 3000);
    window.scrollTo({ top: document.getElementById('timelineList').getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  } catch (error) { document.getElementById('chapterMessage').textContent = tr().failed + String(error?.message || error); }
  finally { button.disabled = false; button.textContent = tr().new.save || oldText; }
});

const privateForm = document.getElementById('privateSupportForm');
function loadPrivateForm() {
  const p = profileData() || {}; const saved = privateData(); const data = { needs: p.needs || saved.needs || [], needDetail: p.needDetail || saved.need_detail || saved.needDetail || '', wallet: p.wallet || saved.recipient_wallet_address || saved.wallet || '', donorWallet: p.donorWallet || saved.donor_wallet_address || saved.donorWallet || '' };
  privateForm.querySelectorAll('input[name="need"]').forEach(el => { el.checked = data.needs.includes(el.value); });
  privateForm.elements.needDetail.value = data.needDetail; privateForm.elements.wallet.value = data.wallet; privateForm.elements.donorWallet.value = data.donorWallet;
}
privateForm.addEventListener('submit', async e => {
  e.preventDefault(); const fd = new FormData(privateForm); const p = profileData() || {}; const existingPrivate = privateData(); const payload = { needs: fd.getAll('need'), needDetail: String(fd.get('needDetail') || '').trim(), wallet: String(fd.get('wallet') || '').trim(), donorWallet: String(fd.get('donorWallet') || '').trim(), birthYear: p.birthYear || existingPrivate.birth_year || existingPrivate.birthYear || '' };
  const button = privateForm.querySelector('[type="submit"]'); button.disabled = true; button.textContent = tr().saving;
  try {
    if (remote()) {
      const saved = await window.TJBackend.savePrivate(payload); localStorage.setItem('tj-profile-private', JSON.stringify({ ...saved, email: existingPrivate.email || p.email || '' }));
    } else {
      localStorage.setItem('tj-profile-private', JSON.stringify({ ...existingPrivate, ...payload }));
    }
    document.getElementById('privateSupportMessage').textContent = tr().private.saved;
  } catch (error) { document.getElementById('privateSupportMessage').textContent = tr().private.failed + String(error?.message || error); }
  finally { button.disabled = false; button.textContent = tr().private.save; }
});

document.getElementById('publishProfileToggle').addEventListener('click', async () => {
  const p = profileData(); if (!p) return; const next = !p.isPublic; const btn = document.getElementById('publishProfileToggle'); btn.disabled = true;
  try {
    if (remote()) {
      const updated = await window.TJBackend.setProfilePublic(next);
      saveProfileCache({ ...p, ...updated, isPublic: next });
    } else { p.isPublic = next; saveProfileCache(p); }
    renderProfile();
  } catch (error) { alert(tr().failed + String(error?.message || error)); }
  finally { btn.disabled = false; }
});
document.getElementById('signOutBtn').addEventListener('click', async () => {
  const btn = document.getElementById('signOutBtn'); btn.disabled = true; btn.textContent = tr().signingOut;
  try { if (remote()) await window.TJBackend.signOut(); else ['tj-profile', 'tj-chapters', 'tj-profile-private'].forEach(key => localStorage.removeItem(key)); location.href = 'index.html'; }
  catch (error) { alert(tr().failed + String(error?.message || error)); btn.disabled = false; btn.textContent = tr().profile.signOut; }
});

langEl.addEventListener('change', () => { lang = langEl.value; localStorage.setItem('tj-lang', lang); localStorage.setItem('site-language', lang); applyLang(); renderProfile(); renderTimeline(); renderStage(); renderRoleFlow(); window.dispatchEvent(new Event('languagechange')); });
window.addEventListener('languagechange', () => { lang = localStorage.getItem('tj-lang') || lang; applyLang(); renderProfile(); renderTimeline(); renderStage(); renderRoleFlow(); });
applyLang(); seedChapters(); if (document.querySelector('#chapterForm [name=sourceLang]')) document.querySelector('#chapterForm [name=sourceLang]').value = lang; renderProfile(); renderTimeline(); renderStage(); renderRoleFlow(); loadPrivateForm();
