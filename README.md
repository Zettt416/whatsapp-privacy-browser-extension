# WhatsApp Web Privacy Shield 🛡️

[English](#english) | [Bahasa Indonesia](#bahasa-indonesia)

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-00a884.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform: Chromium](https://img.shields.io/badge/Platform-Chrome%20%7C%20Edge%20%7C%20Brave%20%7C%20Opera-blue.svg)](https://www.google.com/chrome/)
[![Dependencies: Zero](https://img.shields.io/badge/Dependencies-0%20(Pure%20Native)-success.svg)](manifest.json)

---

<a name="english"></a>
## 🇬🇧 English

### Overview
**WhatsApp Web Privacy Shield** is a lightweight, high-performance browser extension designed to protect your WhatsApp Web screen from shoulder-surfing in offices, coffee shops, and public spaces. 

Built from scratch using native **Manifest V3** with **zero external dependencies**, no build steps, and no background bloat. All processing runs 100% locally on your machine.

### ✨ Features
- **Smart Blur Engine:**
  - **Chat Messages:** Blurs chat bubbles in the active conversation.
  - **Unblur Active Chat Option:** Automatically unblurs open conversations while keeping the sidebar conversation list securely blurred.
  - **Last Message Previews:** Blurs conversation snippet previews on the left sidebar.
  - **Media & Gallery:** Obscures images, video thumbnails, stickers, audio players, and captions.
  - **Names & Group Titles:** Blurs contact names, group titles in the sidebar, active headers, and sender labels.
  - **Profile Photos:** Blurs avatars in the chat list and conversation header.
  - **Input Box:** Blurs text inside the compose input while typing.
- **Instant Hover to Reveal (Zero Lag):** Move your cursor over any message, media, or contact name to immediately reveal it with smooth hardware-accelerated transitions. Moving your cursor away instantly restores the blur.
- **Quick Keyboard Shortcut (`Alt + X`):** Instantly toggle privacy shield on/off whenever someone approaches your desk.
- **Modern Popup Control Panel:**
  - Master Switch ON/OFF.
  - Individual feature toggles.
  - 3 Quick Presets: **Balanced** (Default), **Maximum**, and **Minimal**.
  - Dynamic blur intensity slider (3px – 18px).
- **Discreet Floating Indicator:** A subtle, customizable status pill in the bottom corner of WhatsApp Web indicating active protection.
- **100% Private & Secure:** Operates entirely client-side. Does not collect, store, or transmit any messages or telemetry.

### 🛠️ Tech Stack
| Component | Technology | Description |
| :--- | :--- | :--- |
| **Manifest Version** | Manifest V3 | Standard modern Chromium extension architecture |
| **Logic & Scripts** | Pure Vanilla JavaScript (ES6+) | Lightweight, event-driven, zero external libraries |
| **Styling & Effects** | Pure CSS3 (`:not(:hover)` filters) | GPU-accelerated 60 FPS transitions without DOM repaints |
| **User Interface** | Semantic HTML5 + Custom CSS | WhatsApp Dark Mode palette with accessibility attributes |
| **State Persistence** | `chrome.storage.local` | Asynchronous local storage for user preferences |
| **Shortcut Handler** | `chrome.commands` + Content Listeners | Dual-layer instant keyboard shortcut handling (`Alt+X`) |

### 🚀 Installation Guide (Chromium Browsers)
Works on **Google Chrome**, **Microsoft Edge**, **Brave**, **Opera**, **Vivaldi**, and other Chromium-based browsers.

1. Clone or download this repository:
   ```bash
   git clone https://github.com/Zettt416/whatsapp-privacy-browser-extension.git
   ```
2. Open your browser's extension manager:
   - **Chrome:** `chrome://extensions`
   - **Edge:** `edge://extensions`
   - **Brave:** `brave://extensions`
3. Enable **Developer mode** toggle in the top-right corner.
4. Click **Load unpacked** (Muat yang belum dibongkar).
5. Select the project directory (`whatsapp-privacy-browser-extension`).
6. Navigate to or refresh [web.whatsapp.com](https://web.whatsapp.com/) to start using the extension.

### ⌨️ Keyboard Shortcuts & Controls
| Action | Shortcut / Trigger | Description |
| :--- | :--- | :--- |
| **Toggle Protection** | <kbd>Alt</kbd> + <kbd>X</kbd> | Toggle privacy shield ON or OFF instantly |
| **Reveal Content** | Mouse Hover | Temporarily removes blur while mouse is over target |
| **Quick Toggle Pill** | Click bottom-right pill | Toggle privacy mode directly inside WhatsApp Web |
| **Settings Panel** | Click Extension Icon | Access customization, presets, and blur intensity |

---

<a name="bahasa-indonesia"></a>
## 🇮🇩 Bahasa Indonesia

### Ringkasan
**WhatsApp Web Privacy Shield** adalah ekstensi peramban lokal yang ringan, cepat, dan elegan untuk melindungi privasi layar WhatsApp Web Anda dari pandangan orang sekitar (*shoulder-surfing*) di kantor, kafe, maupun ruang publik.

Dibuat dari awal (*from scratch*) dengan arsitektur **Manifest V3** murni tanpa dependensi pihak ketiga, tanpa proses kompilasi/bundler yang rumit, dan **100% berjalan secara lokal di perangkat Anda**.

### ✨ Fitur Utama
- **Efek Blur Cerdas & Terarah:**
  - **Isi Pesan Chat:** Memburamkan bubble percakapan di ruang chat aktif.
  - **Buka Chat = Buka Blur:** Opsi agar saat percakapan dibuka, isi chat langsung terlihat jelas tanpa perlu repot hover satu-satu, sementara daftar chat di sidebar kiri tetap aman terlindungi.
  - **Preview Pesan Sidebar:** Memburamkan cuplikan pesan terakhir pada daftar obrolan di panel kiri.
  - **Media & Gambar:** Memburamkan foto, thumbnail video, stiker, pemutar audio, dan keterangan media.
  - **Nama Kontak & Grup:** Menyembunyikan nama kontak dan judul grup di daftar obrolan maupun header obrolan.
  - **Foto Profil:** Memburamkan avatar foto profil di sidebar dan header.
  - **Kotak Ketik Pesan:** Memburamkan teks yang sedang Anda ketik di kolom input sebelum terkirim.
- **Hover to Reveal Instan (*Zero Lag*):** Cukup arahkan kursor mouse ke pesan, media, atau nama kontak untuk melihatnya seketika. Saat kursor digeser keluar, efek blur akan langsung aktif kembali.
- **Pintasan Cepat Keyboard (`Alt + X`):** Nyalakan atau matikan mode privasi seketika menggunakan kombinasi keyboard saat ada rekan kerja atau orang lain mendekat.
- **Panel Pengaturan Popup Elegan:**
  - Master Switch ON/OFF utama.
  - Sakelar mandiri untuk setiap kategori perlindungan.
  - 3 Preset Cepat: **Standar** (Rekomendasi), **Maksimal**, dan **Minimal**.
  - Pengatur intensitas blur (slider 3px – 18px).
- **Indikator Status Mengambang:** Pill status minimalis di pojok kanan bawah WhatsApp Web yang dapat diklik langsung untuk toggle cepat.
- **100% Aman & Terjaga:** Berjalan sepenuhnya di sisi klien. Tidak ada data pesan atau analitik yang disimpan maupun dikirim ke server luar.

### 🛠️ Stack Teknologi
| Komponen | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Arsitektur Ekstensi** | Manifest V3 | Standar ekstensi browser modern Chromium |
| **Logika & Pemrograman** | Pure Vanilla JavaScript (ES6+) | Ringan, berbasis event natif, tanpa pustaka eksternal |
| **Styling & Efek Blur** | Murni CSS3 (`:not(:hover)`) | Transisi GPU 60 FPS tanpa beban repaint DOM |
| **Antarmuka Pengguna** | Semantic HTML5 + Custom CSS | Tema WhatsApp Dark UI ergonomis dan ramah aksesibilitas |
| **Penyimpanan Preferensi** | `chrome.storage.local` | Penyimpanan lokal asinkron di browser |
| **Pemicu Pintasan** | `chrome.commands` + Event Listener | Listener shortcut keyboard ganda yang responsif (`Alt+X`) |

### 🚀 Panduan Pemasangan
Kompatibel dengan semua browser berbasis Chromium (**Google Chrome**, **Microsoft Edge**, **Brave**, **Opera**, dll).

1. Clone atau unduh repositori ini:
   ```bash
   git clone https://github.com/Zettt416/whatsapp-privacy-browser-extension.git
   ```
2. Buka menu ekstensi browser Anda:
   - **Chrome:** `chrome://extensions`
   - **Edge:** `edge://extensions`
   - **Brave:** `brave://extensions`
3. Aktifkan **Developer mode** (Mode Pengembang) di sudut kanan atas.
4. Klik tombol **Load unpacked** (Muat yang belum dibongkar).
5. Pilih folder repositori `whatsapp-privacy-browser-extension`.
6. Buka atau refresh halaman [web.whatsapp.com](https://web.whatsapp.com/).

### ⌨️ Pintasan Keyboard & Kontrol
| Aksi | Pintasan / Trigger | Deskripsi |
| :--- | :--- | :--- |
| **Toggle Proteksi** | <kbd>Alt</kbd> + <kbd>X</kbd> | Mengaktifkan / menonaktifkan mode privasi seketika |
| **Buka Blur Sementara** | Arahkan Kursor (Hover) | Menghilangkan blur pada elemen yang disorot |
| **Pill Status Cepat** | Klik pill pojok kanan bawah | Mengubah status proteksi langsung dari WhatsApp Web |
| **Buka Menu Konfigurasi** | Klik Ikon Ekstensi | Mengatur kategori blur, preset, dan intensitas |

---

## 📁 Struktur Berkas / File Structure

```
whatsapp-privacy-browser-extension/
├── manifest.json          # Manifest V3 configuration
├── content/
│   ├── content.css        # Zero-lag CSS blur & hover reveal architecture
│   └── content.js         # Content script for classes & shortcut listeners
├── popup/
│   ├── popup.html         # Settings UI popup structure
│   ├── popup.css          # WhatsApp Dark theme styling
│   └── popup.js           # Settings management & chrome.storage handler
├── background/
│   └── background.js      # Service worker for keyboard command triggers
├── icons/                 # Extension icons (16px, 48px, 128px)
├── .gitignore             # Git ignore patterns
├── LICENSE                # MIT License
└── README.md              # Bilingual documentation (EN & ID)
```

---

## 📄 Lisensi / License

Proyek ini dilisensikan di bawah lisensi [MIT](LICENSE). Bebas digunakan, dipelajari, dan dikembangkan kembali.
This project is licensed under the [MIT License](LICENSE).
