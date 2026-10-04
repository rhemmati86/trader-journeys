(function () {
  if (document.querySelector('.platform-support-footer') || /platform-support\.html$/i.test(location.pathname)) return;
  const footer = document.querySelector('footer'); if (!footer) return;
  const lang = localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || document.documentElement.lang || 'fa';
  const isEn = lang === 'en';
  const box = document.createElement('div');
  box.className = 'container platform-support-footer';
  box.innerHTML = `<div><span class="platform-support-kicker">${isEn ? 'KEEP THE JOURNEY MOVING' : 'برای ادامه مسیر'}</span><strong>${isEn ? 'Support the platform' : 'حمایت از خودِ سایت'}</strong><p>${isEn ? 'Help fund future hosting, translations, accessibility and improvements. Separate from helping individual traders.' : 'برای میزبانی، ترجمه، دسترس‌پذیری و ارتقای آینده سایت؛ جدا از کمک مستقیم به تریدرها.'}</p></div><a class="platform-support-link" href="platform-support.html">${isEn ? 'Learn more · Coming soon' : 'بیشتر بدانید · به‌زودی'} <span>↗</span></a>`;
  footer.appendChild(box);
  window.addEventListener('languagechange', () => {
    const en = (localStorage.getItem('tj-lang') || 'fa') === 'en';
    box.querySelector('.platform-support-kicker').textContent = en ? 'KEEP THE JOURNEY MOVING' : 'برای ادامه مسیر';
    box.querySelector('strong').textContent = en ? 'Support the platform' : 'حمایت از خودِ سایت';
    box.querySelector('p').textContent = en ? 'Help fund future hosting, translations, accessibility and improvements. Separate from helping individual traders.' : 'برای میزبانی، ترجمه، دسترس‌پذیری و ارتقای آینده سایت؛ جدا از کمک مستقیم به تریدرها.';
    box.querySelector('a').innerHTML = `${en ? 'Learn more · Coming soon' : 'بیشتر بدانید · به‌زودی'} <span>↗</span>`;
  });
})();
