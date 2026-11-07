document.addEventListener('DOMContentLoaded', () => {
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

  const toggleMaster = document.getElementById('toggleMaster');
  const statusBadge = document.getElementById('statusBadge');
  const statusText = document.getElementById('statusText');

  const checkboxes = {
    blurMessages: document.getElementById('blurMessages'),
    unblurActiveChat: document.getElementById('unblurActiveChat'),
    blurSidebar: document.getElementById('blurSidebar'),
    blurMedia: document.getElementById('blurMedia'),
    blurNames: document.getElementById('blurNames'),
    blurPhotos: document.getElementById('blurPhotos'),
    blurInput: document.getElementById('blurInput'),
    showPill: document.getElementById('showPill')
  };

  const blurIntensity = document.getElementById('blurIntensity');
  const intensityValue = document.getElementById('intensityValue');
  const presetButtons = document.querySelectorAll('.preset-btn');

  function updateBadge(isEnabled) {
    if (isEnabled) {
      statusBadge.classList.add('active');
      statusText.textContent = 'AKTIF';
    } else {
      statusBadge.classList.remove('active');
      statusText.textContent = 'NONAKTIF';
    }
  }

  chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => {
    toggleMaster.checked = !!settings.enabled;
    updateBadge(settings.enabled);

    for (const [key, element] of Object.entries(checkboxes)) {
      if (element) {
        element.checked = !!settings[key];
      }
    }

    const intensity = settings.blurIntensity || 8;
    blurIntensity.value = intensity;
    intensityValue.textContent = `${intensity}px`;
  });

  toggleMaster.addEventListener('change', () => {
    const isEnabled = toggleMaster.checked;
    updateBadge(isEnabled);
    chrome.storage.local.set({ enabled: isEnabled });
  });

  for (const [key, element] of Object.entries(checkboxes)) {
    if (element) {
      element.addEventListener('change', () => {
        chrome.storage.local.set({ [key]: element.checked });
      });
    }
  }

  blurIntensity.addEventListener('input', () => {
    const val = parseInt(blurIntensity.value, 10);
    intensityValue.textContent = `${val}px`;
    chrome.storage.local.set({ blurIntensity: val });
  });

  const PRESETS = {
    balanced: {
      enabled: true,
      blurMessages: true,
      unblurActiveChat: true,
      blurSidebar: true,
      blurMedia: true,
      blurNames: true,
      blurPhotos: false,
      blurInput: false,
      blurIntensity: 8
    },
    max: {
      enabled: true,
      blurMessages: true,
      unblurActiveChat: false,
      blurSidebar: true,
      blurMedia: true,
      blurNames: true,
      blurPhotos: true,
      blurInput: true,
      blurIntensity: 12
    },
    minimal: {
      enabled: true,
      blurMessages: false,
      unblurActiveChat: true,
      blurSidebar: true,
      blurMedia: false,
      blurNames: false,
      blurPhotos: false,
      blurInput: false,
      blurIntensity: 6
    }
  };

  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const presetKey = btn.dataset.preset;
      const targetPreset = PRESETS[presetKey];
      if (!targetPreset) return;

      toggleMaster.checked = targetPreset.enabled;
      updateBadge(targetPreset.enabled);

      for (const [key, val] of Object.entries(targetPreset)) {
        if (checkboxes[key]) {
          checkboxes[key].checked = val;
        }
      }

      blurIntensity.value = targetPreset.blurIntensity;
      intensityValue.textContent = `${targetPreset.blurIntensity}px`;

      chrome.storage.local.set(targetPreset);
    });
  });

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== 'local') return;

    if (changes.enabled) {
      toggleMaster.checked = changes.enabled.newValue;
      updateBadge(changes.enabled.newValue);
    }
  });
});
