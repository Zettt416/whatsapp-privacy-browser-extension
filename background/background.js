/**
 * WhatsApp Web Privacy Shield - Background Service Worker
 * Handles extension installation and keyboard shortcut commands.
 */

const DEFAULT_SETTINGS = {
  enabled: true,
  blurMessages: true,
  unblurActiveChat: false,
  blurSidebar: true,
  blurMedia: true,
  blurNames: false,
  blurPhotos: false,
  blurInput: false,
  blurIntensity: 8,
  showPill: true
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(null, (existing) => {
    const toSet = {};
    for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
      if (existing[key] === undefined) {
        toSet[key] = value;
      }
    }
    if (Object.keys(toSet).length > 0) {
      chrome.storage.local.set(toSet);
    }
  });
});

// Shortcut command listener (Alt+X)
chrome.commands.onCommand.addListener((command) => {
  if (command === 'toggle-privacy') {
    chrome.storage.local.get(['enabled'], (result) => {
      const newState = !result.enabled;
      chrome.storage.local.set({ enabled: newState });
    });
  }
});

