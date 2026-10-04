const T = {
  fa: {
    hero: { eyebrow: 'مدیریت پروفایل', title: 'پروفایلت را با خودت جلو ببر.', lead: 'اطلاعات هویتی و داستان اصلی را هر زمان که خواستی به‌روزرسانی کن. سفر تو یک بار ساخته می‌شود، اما می‌تواند سال‌ها ادامه پیدا کند.' },
    identity: { title: 'پروفایل اصلی' },
    fields: { bioLang: 'زبان اصلی معرفی کوتاه', name: 'نام یا نام مستعار', username: 'نام کاربری', country: 'کشور', birth: 'سال تولد', years: 'سابقه فعالیت در بازار', email: 'ایمیل', bio: 'معرفی کوتاه' },
    markets: { title: 'بازارهای تجربه‌شده', other: 'سایر بازارها' },
    role: { title: 'نقش فعلی من', recipient: 'فرصت دوباره', community: 'عضو جامعه', donor: 'خیر' },
    story: { label: 'داستان اصلی سفر', language: 'زبان اصلی داستان' },
    privacy: { title: 'اطلاعات خصوصی جدا می‌ماند.', text: 'ایمیل و اطلاعات خصوصی برای نمایش عمومی طراحی نشده‌اند. سال تولد و جزئیات حمایت در بخش خصوصی حساب ذخیره می‌شوند.' },
    actions: { cancel: 'انصراف', save: 'ذخیره تغییرات' }, saved: 'پروفایل با موفقیت به‌روزرسانی شد.', missing: 'ابتدا یک پروفایل بساز.', failed: 'ذخیره پروفایل انجام نشد: ', saving: 'در حال ذخیره…', emailReadOnly: 'برای تغییر ایمیل، باید از فرآیند امن تغییر ایمیل استفاده شود.'
  },
  en: {
    hero: { eyebrow: 'PROFILE CONTROL', title: 'Carry your profile forward.', lead: 'Update your identity and core story whenever you need. Your journey is created once, but it can continue for years.' },
    identity: { title: 'Primary profile' },
    fields: { bioLang: 'Original language of short introduction', name: 'Name or nickname', username: 'Username', country: 'Country', birth: 'Birth year', years: 'Years active in markets', email: 'Email', bio: 'Short introduction' },
    markets: { title: 'Markets experienced', other: 'Other markets' },
    role: { title: 'My current role', recipient: 'Second Chance', community: 'Community member', donor: 'Donor' },
    story: { label: 'Core journey story', language: 'Original story language' },
    privacy: { title: 'Private information stays separate.', text: 'Email and private details are not intended for public display. Birth year and support details are stored in the private account area.' },
    actions: { cancel: 'Cancel', save: 'Save changes' }, saved: 'Your profile was updated.', missing: 'Create a profile first.', failed: 'Could not save profile: ', saving: 'Saving…', emailReadOnly: 'Email changes require the secure email-change flow.'
  }
};
const form = document.getElementById('profileForm');
const langEl = document.getElementById('lang');
const message = document.getElementById('profileMessage');
const remote = () => Boolean(window.TJBackend?.isConfigured());
const parseProfile = () => { try { return JSON.parse(localStorage.getItem('tj-profile') || 'null'); } catch (_) { return null; } };
const parsePrivate = () => { try { return JSON.parse(localStorage.getItem('tj-profile-private') || '{}'); } catch (_) { return {}; } };
function t() { return T[localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || 'fa'] || T.fa; }
function pathGet(obj, path) { return path.split('.').reduce((a, k) => a?.[k], obj); }
function applyLang(code) {
  const words = T[code] || T.fa;
  document.documentElement.lang = code; document.documentElement.dir = code === 'fa' ? 'rtl' : 'ltr'; document.body.dir = document.documentElement.dir;
  document.querySelectorAll('[data-t]').forEach(el => { const v = pathGet(words, el.dataset.t); if (typeof v === 'string') el.textContent = v; });
  langEl.value = code; localStorage.setItem('tj-lang', code); localStorage.setItem('site-language', code);
  document.title = code === 'en' ? 'Edit Profile | Trader Journeys' : 'ویرایش پروفایل | سفرهای یک تریدر';
}
function populate(profile) {
  if (!profile) {
    message.textContent = t().missing;
    form.querySelectorAll('input,textarea,select,button').forEach(el => { el.disabled = true; });
    return;
  }
  document.getElementById('profileId').textContent = profile.publicId || profile.id || 'TJ-JOURNEY';
  const privateProfile = parsePrivate();
  const values = { ...profile, birthYear: profile.birthYear || privateProfile.birth_year || privateProfile.birthYear || '', email: profile.email || privateProfile.email || '' };
  for (const key of ['name', 'username', 'country', 'birthYear', 'years', 'email', 'bio', 'bioLang', 'story', 'storyLang']) {
    const el = form.elements[key];
    if (!el) continue;
    el.value = values[key] || (key === 'storyLang' ? (profile.storyLang || localStorage.getItem('tj-lang') || 'fa') : key === 'bioLang' ? (profile.bioLang || localStorage.getItem('tj-lang') || 'fa') : '');
  }
  if (form.elements.email) form.elements.email.readOnly = true;
  form.querySelectorAll('input[name="market"]').forEach(el => { el.checked = (profile.markets || []).includes(el.value); });
  const role = profile.role || 'recipient';
  const roleEl = form.querySelector(`input[name="role"][value="${CSS.escape(role)}"]`);
  if (roleEl) roleEl.checked = true;
}
form.addEventListener('submit', async event => {
  event.preventDefault();
  const profile = parseProfile();
  if (!profile) { message.textContent = t().missing; return; }
  const data = new FormData(form);
  profile.name = String(data.get('name') || '').trim();
  profile.username = String(data.get('username') || '').trim().toLowerCase();
  profile.country = String(data.get('country') || '').trim();
  profile.birthYear = String(data.get('birthYear') || parsePrivate().birth_year || parsePrivate().birthYear || '').trim();
  profile.email = String(data.get('email') || profile.email || parsePrivate().email || '').trim();
  profile.years = String(data.get('years') || '').trim();
  profile.bio = String(data.get('bio') || '').trim();
  profile.bioLang = String(data.get('bioLang') || localStorage.getItem('tj-lang') || 'fa');
  profile.story = String(data.get('story') || '').trim();
  profile.storyLang = String(data.get('storyLang') || localStorage.getItem('tj-lang') || 'fa');
  profile.markets = data.getAll('market');
  profile.role = String(data.get('role') || 'community');
  if (profile.role === 'donor') { profile.donorStory = profile.story; profile.donorStoryLang = profile.storyLang; }
  profile.updatedAt = new Date().toISOString();
  const button = form.querySelector('[type="submit"]'); const original = button.textContent;
  button.disabled = true; button.textContent = t().saving; message.textContent = '';
  try {
    if (window.TJBackend?.hasConfig() && !remote()) throw new Error(window.TJBackend.statusMessage(localStorage.getItem('tj-lang') || 'fa'));
    const privateExisting = parsePrivate();
    if (remote()) {
      await window.TJBackend.saveProfile(profile);
      await window.TJBackend.savePrivate({
        birthYear: profile.birthYear,
        needs: profile.needs || privateExisting.needs || [],
        needDetail: profile.needDetail || privateExisting.need_detail || privateExisting.needDetail || '',
        wallet: profile.wallet || privateExisting.recipient_wallet_address || privateExisting.wallet || '',
        donorWallet: profile.donorWallet || privateExisting.donor_wallet_address || privateExisting.donorWallet || ''
      });
      const workspace = await window.TJBackend.loadWorkspace();
      localStorage.setItem('tj-profile', JSON.stringify({ ...workspace.profile, isPublic: profile.isPublic }));
      localStorage.setItem('tj-profile-private', JSON.stringify({ ...(workspace.privateProfile || {}), email: workspace.user?.email || profile.email || '' }));
      localStorage.setItem('tj-chapters', JSON.stringify(workspace.chapters || []));
    } else {
      const publicProfile = { ...profile };
      ['birthYear', 'email', 'needs', 'needDetail', 'wallet', 'donorWallet'].forEach(key => delete publicProfile[key]);
      localStorage.setItem('tj-profile', JSON.stringify(publicProfile));
      localStorage.setItem('tj-profile-private', JSON.stringify({ ...privateExisting, birthYear: profile.birthYear, email: profile.email, needs: profile.needs || privateExisting.needs || [], needDetail: profile.needDetail || privateExisting.needDetail || '', wallet: profile.wallet || privateExisting.wallet || '', donorWallet: profile.donorWallet || privateExisting.donorWallet || '' }));
    }
    message.textContent = t().saved;
    window.dispatchEvent(new Event('tj-profile-refresh'));
  } catch (error) {
    message.textContent = t().failed + String(error?.message || error);
  } finally { button.disabled = false; button.textContent = t().actions.save || original; }
});
langEl.addEventListener('change', event => { applyLang(event.target.value); window.dispatchEvent(new Event('languagechange')); });
applyLang(localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || 'fa');
populate(parseProfile());
