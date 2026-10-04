(function () {
  const STORAGE_KEY = 'tj-theme-settings';
  const defaults = { mode: 'dark', color: 'emerald', customColor: null };

  function read() {
    try {
      return { ...defaults, ...(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')) };
    } catch (_) {
      return { ...defaults };
    }
  }

  function hexToHsl(hex) {
    let h = hex.replace('#','').trim();
    if(h.length === 3) h = h.split('').map(x=>x+x).join('');
    const r=parseInt(h.slice(0,2),16)/255, g=parseInt(h.slice(2,4),16)/255, b=parseInt(h.slice(4,6),16)/255;
    const max=Math.max(r,g,b), min=Math.min(r,g,b); let hue=0, sat=0; const l=(max+min)/2;
    if(max!==min){
      const d=max-min; sat=l>0.5?d/(2-max-min):d/(max+min);
      switch(max){case r:hue=(g-b)/d+(g<b?6:0);break;case g:hue=(b-r)/d+2;break;default:hue=(r-g)/d+4;}
      hue/=6;
    }
    return [hue*360,sat*100,l*100];
  }

  function applyCustomVars(root, hex) {
    if(!hex) return;
    const [h,s,l]=hexToHsl(hex);
    root.style.setProperty('--accent', hex);
    root.style.setProperty('--accent2', `hsl(${(h+28)%360} ${Math.min(100,s+5)}% ${Math.min(78,Math.max(52,l+8))}%)`);
    root.style.setProperty('--danger', `hsl(${(h+332)%360} ${Math.min(100,Math.max(55,s))}% ${Math.min(70,Math.max(52,l-4))}%)`);
  }

  function apply(settings) {
    const root = document.documentElement;
    root.dataset.appearance = settings.mode;
    root.dataset.colorTheme = settings.color || 'emerald';
    if(settings.customColor){
      root.dataset.colorTheme = 'custom';
      applyCustomVars(root, settings.customColor);
    } else {
      root.style.removeProperty('--accent');
      root.style.removeProperty('--accent2');
      root.style.removeProperty('--danger');
    }
    root.style.colorScheme = settings.mode === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : settings.mode;
  }

  function save(settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    apply(settings);
    window.dispatchEvent(new CustomEvent('tj-theme-change', { detail: settings }));
  }

  window.TJTheme = { read, apply, save, defaults };
  apply(read());
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const onSystemChange = () => { if (read().mode === 'system') apply(read()); };
  if (media.addEventListener) media.addEventListener('change', onSystemChange); else media.addListener(onSystemChange);
})();
