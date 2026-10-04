(function(){
  const modeButtons = document.querySelectorAll('[data-setting-mode]');
  const colorButtons = document.querySelectorAll('[data-setting-color]');
  const customColor = document.getElementById('customColor');
  const customColorValue = document.getElementById('customColorValue');
  const resetColor = document.getElementById('resetColor');
  const status = document.getElementById('settingsStatus');

  function updateActive(){
    const s = TJTheme.read();
    modeButtons.forEach(b=>b.classList.toggle('active', b.dataset.settingMode===s.mode));
    colorButtons.forEach(b=>b.classList.toggle('active', !s.customColor && b.dataset.settingColor===s.color));
    if(customColor){
      customColor.value = s.customColor || TJTheme.defaults.customColor;
      customColorValue.textContent = customColor.value.toUpperCase();
    }
  }

  function notify(text){
    if(status){
      status.textContent=text;
      clearTimeout(window.__tjStatusTimer);
      window.__tjStatusTimer=setTimeout(()=>status.textContent='',2200);
    }
  }

  modeButtons.forEach(btn=>btn.addEventListener('click',()=>{
    const next={...TJTheme.read(), mode:btn.dataset.settingMode};
    TJTheme.save(next); updateActive();
    notify(document.documentElement.lang==='en'?'Theme updated.':'ظاهر سایت به‌روزرسانی شد.');
  }));

  colorButtons.forEach(btn=>btn.addEventListener('click',()=>{
    TJTheme.save({...TJTheme.read(), color:btn.dataset.settingColor, customColor:null});
    updateActive();
    notify(document.documentElement.lang==='en'?'Color updated.':'رنگ‌بندی سایت به‌روزرسانی شد.');
  }));

  if(customColor){
    customColor.addEventListener('input',()=>{
      const value=customColor.value;
      TJTheme.save({...TJTheme.read(), color:'custom', customColor:value});
      customColorValue.textContent=value.toUpperCase();
      updateActive();
      notify(document.documentElement.lang==='en'?'Custom color applied.':'رنگ دلخواه اعمال شد.');
    });
  }

  if(resetColor){
    resetColor.addEventListener('click',()=>{
      TJTheme.save({...TJTheme.read(), color:TJTheme.defaults.color, customColor:null});
      updateActive();
      notify(document.documentElement.lang==='en'?'Color reset.':'رنگ به حالت پیش‌فرض برگشت.');
    });
  }

  updateActive();
  window.addEventListener('tj-theme-change',updateActive);
  window.addEventListener('storage',e=>{
    if(e.key==='tj-theme-settings'){
      window.TJTheme.apply(window.TJTheme.read());
      updateActive();
    }
  });
})();
