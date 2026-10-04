/* Loads private-page scripts only after a configured backend has restored the signed-in user's workspace. */
(function () {
  const tag = document.currentScript;
  const entry = tag?.dataset.entry || '';
  const requireAuth = tag?.dataset.auth === 'required';
  const page = tag?.dataset.page || 'dashboard';
  function showMessage(fa, en) {
    const box = document.createElement('div'); box.className = 'backend-boot-error'; box.setAttribute('role','alert');
    box.textContent = document.documentElement.lang === 'en' ? en : fa; document.body.prepend(box);
  }
  function cacheWorkspace(workspace) {
    localStorage.setItem('tj-profile', JSON.stringify(workspace.profile));
    localStorage.setItem('tj-chapters', JSON.stringify(workspace.chapters || []));
    localStorage.setItem('tj-profile-private', JSON.stringify({ ...(workspace.privateProfile || {}), email: workspace.user?.email || '' }));
  }
  async function start() {
    if (window.TJBackend?.hasConfig() && !window.TJBackend.isConfigured()) {
      showMessage('اتصال پایگاه داده تنظیم شده اما راه‌اندازی نشد. آدرس و کلید عمومی Supabase و بارگذاری کتابخانه را بررسی کن.', 'Backend configuration is present but initialization failed. Check the Supabase URL, public key and CDN availability.');
      return;
    }
    if (requireAuth && window.TJBackend?.isConfigured()) {
      try {
        const workspace = await window.TJBackend.loadWorkspace();
        if (!workspace.user) { location.href = `login.html?next=${encodeURIComponent(`${page}.html`)}`; return; }
        cacheWorkspace(workspace);
      } catch (error) {
        showMessage('اطلاعات سفر بارگذاری نشد. اتصال شبکه و تنظیمات پایگاه داده را بررسی کن.', `Could not load your journey: ${String(error?.message || 'unknown error')}`);
        return;
      }
    }
    if (!entry) return;
    const script = document.createElement('script'); script.src = entry; script.async = false;
    script.onerror = () => showMessage('فایل بخش موردنظر بارگذاری نشد.', `Could not load ${entry}.`);
    document.body.appendChild(script);
  }
  start();
})();
