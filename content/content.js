(() => {
  const DEFAULT_SETTINGS = {
    enabled: true,
    blurMessages: true,
    unblurActiveChat: false,
    blurSidebar: true,
    blurMedia: true,
    blurNames: true,
    blurPhotos: false,
    blurInput: false,
    blurIntensity: 8,
    showPill: true
  };

  let currentSettings = { ...DEFAULT_SETTINGS };

  function applyPrivacyClasses(settings) {
    const root = document.body || document.documentElement;
    if (!root) return;

    const intensity = Math.min(Math.max(settings.blurIntensity || 8, 2), 24);
    document.documentElement.style.setProperty('--wa-blur-intensity', `${intensity}px`);

    root.classList.toggle('wa-privacy-on', !!settings.enabled);
    root.classList.toggle('wa-blur-messages', !!settings.blurMessages);
    root.classList.toggle('wa-unblur-active', !!settings.unblurActiveChat);
    root.classList.toggle('wa-blur-sidebar', !!settings.blurSidebar);
    root.classList.toggle('wa-blur-media', !!settings.blurMedia);
    root.classList.toggle('wa-blur-names', !!settings.blurNames);
    root.classList.toggle('wa-blur-photos', !!settings.blurPhotos);
    root.classList.toggle('wa-blur-input', !!settings.blurInput);

    updateStatusPill(settings);
  }

  function updateStatusPill(settings) {
    let pill = document.getElementById('wa-privacy-pill');

    if (!settings.enabled || !settings.showPill) {
      if (pill) pill.remove();
      return;
    }

    if (!pill) {
      pill = document.createElement('div');
      pill.id = 'wa-privacy-pill';
      pill.title = 'WhatsApp Privacy Shield Aktif (Alt+X untuk toggle)';
      pill.innerHTML = '<span class="wa-dot"></span><span>Privacy Active</span>';
      
      pill.addEventListener('click', () => {
        const newState = !currentSettings.enabled;
        chrome.storage.local.set({ enabled: newState });
      });

      (document.body || document.documentElement).appendChild(pill);
    }
  }

  function init() {
    chrome.storage.local.get(DEFAULT_SETTINGS, (stored) => {
      currentSettings = { ...DEFAULT_SETTINGS, ...stored };
      applyPrivacyClasses(currentSettings);
    });
  }

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== 'local') return;

    for (const [key, change] of Object.entries(changes)) {
      currentSettings[key] = change.newValue;
    }
    applyPrivacyClasses(currentSettings);
  });

  window.addEventListener('keydown', (e) => {
    if (e.altKey && (e.key === 'x' || e.key === 'X' || e.code === 'KeyX')) {
      e.preventDefault();
      const newState = !currentSettings.enabled;
      chrome.storage.local.set({ enabled: newState });
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
