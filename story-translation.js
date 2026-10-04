/* Cross-language story display for Trader Journeys.
   User-authored content keeps its original language and is translated via a same-origin API only.
   Private drafts require an explicit button click; public journeys may opt into auto-translation. */
(function () {
  'use strict';
  const LANGS = {
    fa: 'فارسی', en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch',
    tr: 'Türkçe', ar: 'العربية', pt: 'Português', it: 'Italiano', ru: 'Русский'
  };
  const COPY = {
    fa: {
      source: 'زبان اصلی', translate: 'ترجمه به {lang}', original: 'نمایش متن اصلی',
      translating: 'در حال ترجمه…', machine: 'ترجمه ماشینی', ready: 'ترجمه آماده شد',
      same: 'این داستان به زبان انتخابی نوشته شده است.',
      unavailable: 'سرویس ترجمه هنوز به این نسخه وصل نشده؛ متن اصلی نمایش داده می‌شود.',
      failed: 'ترجمه در دسترس نیست؛ دوباره تلاش کن.',
      note: 'ترجمه ماشینی ممکن است دقیق نباشد. متن اصلی را هم می‌توانی ببینی.'
    },
    en: {
      source: 'Original language', translate: 'Translate to {lang}', original: 'Show original',
      translating: 'Translating…', machine: 'Machine translated', ready: 'Translation ready',
      same: 'This story is already written in your selected language.',
      unavailable: 'Translation is not connected in this preview; the original text is shown.',
      failed: 'Translation is unavailable. Please try again.',
      note: 'Machine translation may be imperfect. You can always view the original.'
    }
  };
  const preferred = () => localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || document.documentElement.lang || 'fa';
  const strings = () => COPY[preferred() === 'fa' ? 'fa' : 'en'];
  const langName = code => LANGS[code] || String(code || '').toUpperCase();
  const cacheKey = (text, source, target) => 'tj-story-translation-v1:' + hash(`${source}\u0000${target}\u0000${text}`);
  function hash(input) {
    let h = 2166136261;
    for (let i = 0; i < input.length; i++) { h ^= input.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(36);
  }
  function readCache(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
  function writeCache(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* cache is optional */ } }

  async function translateText(text, source, target) {
    text = String(text || '').trim();
    if (!text) return '';
    if (source === target) return text;
    if (text.length > 5000) throw new Error('text_too_long');
    if (location.protocol === 'file:') { const err = new Error('translation_unconfigured'); err.status = 503; throw err; }
    const key = cacheKey(text, source, target);
    const cached = readCache(key);
    if (cached) return cached;
    const response = await fetch('/api/translate', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ text, source, target })
    });
    if (!response.ok) {
      const err = new Error(response.status === 503 ? 'translation_unconfigured' : `translation_http_${response.status}`);
      err.status = response.status; throw err;
    }
    const data = await response.json();
    const translated = String(data.translatedText || data.translation || '').trim();
    if (!translated) throw new Error('empty_translation');
    writeCache(key, translated);
    return translated;
  }

  function detectLanguage(text) { return /[\u0600-\u06FF]/.test(String(text || '')) ? 'fa' : 'en'; }

  // Keep longer stories translatable without exceeding the provider's per-request text limit.
  // Split at paragraph/word boundaries and preserve the separators when reassembling the translation.
  function splitLongText(text, limit = 4500) {
    const chunks = [], separators = [];
    let rest = String(text || '');
    while (rest.length > limit) {
      let cut = rest.lastIndexOf('\n', limit);
      if (cut < Math.floor(limit * 0.55)) cut = rest.lastIndexOf(' ', limit);
      if (cut < Math.floor(limit * 0.55)) cut = limit;
      chunks.push(rest.slice(0, cut));
      const tail = rest.slice(cut);
      const whitespace = tail.match(/^\s+/);
      const separator = whitespace ? whitespace[0] : '';
      separators.push(separator);
      rest = rest.slice(cut + separator.length);
      if (!separator && cut === 0) break;
    }
    chunks.push(rest);
    return { chunks, separators };
  }
  async function translateLongText(text, source, target) {
    text = String(text || '');
    if (text.length <= 4500) return translateText(text, source, target);
    const { chunks, separators } = splitLongText(text);
    const translated = await Promise.all(chunks.map(chunk => translateText(chunk, source, target)));
    return translated.reduce((result, piece, index) => result + (index ? (separators[index - 1] || ' ') : '') + piece, '');
  }

  function attach(node) {
    if (node.dataset.tjTranslationMounted === '1') return;
    const bodies = Array.from(node.querySelectorAll('[data-story-text], .tj-translation-text'));
    if (!bodies.length) return;
    node.dataset.tjTranslationMounted = '1';
    const originals = bodies.map(el => el.textContent.trim());
    const source = node.dataset.sourceLang || detectLanguage(originals.join(' '));
    node.dataset.sourceLang = source;
    let translated = [];
    let translatedFor = '';
    let showingTranslation = false;

    const toolbar = document.createElement('div'); toolbar.className = 'tj-translation-toolbar';
    const sourceLabel = document.createElement('span'); sourceLabel.className = 'tj-translation-source';
    const actions = document.createElement('div'); actions.className = 'tj-translation-actions';
    const button = document.createElement('button'); button.type = 'button'; button.className = 'tj-translation-button';
    const status = document.createElement('span'); status.className = 'tj-translation-status'; status.setAttribute('role', 'status');
    actions.append(button, status); toolbar.append(sourceLabel, actions);
    node.insertBefore(toolbar, bodies[0]);

    const targetLang = () => preferred();
    function paintTexts(values, lang) {
      bodies.forEach((el, i) => {
        el.textContent = values[i] ?? originals[i];
        el.lang = lang;
        el.dir = (lang === 'fa' || lang === 'ar') ? 'rtl' : 'ltr';
      });
    }
    function setStatus(message, kind) { status.textContent = message || ''; status.dataset.state = kind || ''; }
    function updateLabels() {
      const c = strings();
      sourceLabel.textContent = `${c.source}: ${langName(source)}`;
      button.textContent = showingTranslation ? c.original : c.translate.replace('{lang}', langName(targetLang()));
      button.hidden = source === targetLang();
      node.classList.toggle('is-translated', showingTranslation);
      if (source === targetLang()) setStatus('', '');
    }
    async function runTranslation() {
      const target = targetLang(); const c = strings();
      if (target === source) { paintTexts(originals, source); showingTranslation = false; setStatus(c.same, 'info'); updateLabels(); return; }
      if (showingTranslation && translatedFor === target) { paintTexts(originals, source); showingTranslation = false; setStatus('', ''); updateLabels(); return; }
      button.disabled = true; setStatus(c.translating, 'busy');
      try {
        translated = await Promise.all(originals.map(text => translateLongText(text, source, target)));
        translatedFor = target; showingTranslation = true; paintTexts(translated, target);
        setStatus(`${c.machine} · ${c.note}`, 'success');
      } catch (error) {
        paintTexts(originals, source); showingTranslation = false;
        setStatus(error.message === 'translation_unconfigured' || error.status === 503 || error.status === 404 || error instanceof TypeError ? c.unavailable : c.failed, 'error');
      } finally { button.disabled = false; updateLabels(); }
    }
    button.addEventListener('click', runTranslation);
    node._tjTranslation = {
      applyLanguage() {
        const target = targetLang();
        if (target === source) { paintTexts(originals, source); showingTranslation = false; translatedFor = ''; setStatus('', ''); updateLabels(); return; }
        if (showingTranslation) { showingTranslation = false; paintTexts(originals, source); setStatus('', ''); }
        updateLabels();
        if (node.dataset.autoTranslate === 'true') runTranslation();
      }
    };
    updateLabels();
    if (node.dataset.autoTranslate === 'true' && source !== targetLang() && location.protocol !== 'file:') runTranslation();
  }

  function enhance(root) {
    const scope = root || document;
    if (scope.matches && scope.matches('[data-story-translation]')) attach(scope);
    scope.querySelectorAll?.('[data-story-translation]').forEach(attach);
  }
  window.TJStoryTranslation = { translateText, enhance, detectLanguage, languages: LANGS };
  document.addEventListener('DOMContentLoaded', () => enhance(document));
  const observer = new MutationObserver(mutations => mutations.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) enhance(n); })));
  observer.observe(document.documentElement, { childList: true, subtree: true });
  const refreshTranslations = () => document.querySelectorAll('[data-story-translation]').forEach(node => node._tjTranslation?.applyLanguage());
  window.addEventListener('languagechange', refreshTranslations);
  const dynamicMemberProfile = location.pathname.toLowerCase().endsWith('/public-profile.html') && new URLSearchParams(location.search).has('id');
  window.addEventListener('tj-language-change', () => { if (!dynamicMemberProfile) refreshTranslations(); });
  window.addEventListener('tj-member-profile-refresh', refreshTranslations);
  window.addEventListener('storage', e => { if (e.key === 'tj-lang' || e.key === 'site-language') document.querySelectorAll('[data-story-translation]').forEach(node => node._tjTranslation?.applyLanguage()); });
})();
