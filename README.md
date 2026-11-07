# WhatsApp Web Privacy Shield 🛡️

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-00a884.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform: Chrome | Edge | Brave | Opera](https://img.shields.io/badge/Platform-Chromium-blue.svg)](https://www.google.com/chrome/)

Ekstensi browser lokal yang ringan, cepat, dan elegan untuk melindungi privasi layar WhatsApp Web Anda dari intipan orang sekitar (*shoulder-surfing*).

Dibuat dari awal (*from scratch*) dengan arsitektur **Manifest V3** murni tanpa dependensi eksternal, tanpa bundler rumit, dan **100% berjalan lokal di browser**.

---

## ✨ Fitur Utama

- 🔍 **Efek Blur Selektif & Cerdas:**
  - **Isi Pesan Chat:** Obscure bubble obrolan aktif.
  - **Buka Chat = Buka Blur:** Opsi pintar agar saat percakapan dibuka, isi chat langsung terlihat jelas tanpa perlu repot hover satu-satu, sementara daftar chat di sidebar kiri tetap terlindungi.
  - **Preview Pesan:** Blur cuplikan pesan terakhir pada daftar chat di panel kiri.
  - **Media & Gambar:** Blur foto, thumbnail video, stiker, audio player, dan media caption.
  - **Nama Kontak & Grup:** Sembunyikan identitas nama pengirim, judul grup di daftar chat maupun header.
  - **Foto Profil:** Blur avatar di daftar chat dan header percakapan.
  - **Kotak Ketik:** Blur teks saat Anda sedang mengetik pesan baru.
- 👁️ **Hover to Reveal Tanpa Jeda (*Zero Lag*):** Cukup arahkan kursor mouse ke pesan, media, atau nama yang ingin dilihat, blur akan langsung terbuka seketika dan kembali ter-blur begitu kursor menjauh.
- ⚡ **Shortcut Instan `Alt + X`:** Nyalakan atau matikan mode proteksi seketika menggunakan keyboard saat ada rekan kerja atau orang lain mendekati layar Anda.
- 🎛️ **Menu Pengaturan Lengkap (Popup):**
  - Master Switch ON/OFF.
  - Toggle mandiri untuk setiap kategori (Pesan, Media, Nama, Foto, Input).
  - Preset Cepat: **Standar** (Rekomendasi), **Maksimal** (Proteksi Total), dan **Minimal**.
  - Slider intensitas blur dinamis (3px – 18px).
- 🔒 **100% Aman & Terjaga:** Tidak ada analitik, tidak ada pelacak, tidak ada data chat yang dibaca, disimpan, ataupun dikirim ke server manapun.

---

## 🚀 Cara Pasang di Browser

Ekstensi ini kompatibel dengan semua browser berbasis Chromium (Google Chrome, Microsoft Edge, Brave, Opera, Vivaldi, dll).

1. Clone repositori ini atau unduh dalam format ZIP dan ekstrak:
   ```bash
   git clone https://github.com/Zettt416/whatsapp-privacy-browser-extension.git
   ```
2. Buka halaman ekstensi browser Anda:
   - **Google Chrome:** `chrome://extensions`
   - **Microsoft Edge:** `edge://extensions`
   - **Brave Browser:** `brave://extensions`
3. Aktifkan sakelar **Developer mode** (Mode Pengembang) di pojok kanan atas.
4. Klik tombol **Load unpacked** (Muat yang belum dibongkar).
5. Pilih folder repositori `whatsapp-privacy-browser-extension`.
6. Buka atau muat ulang [web.whatsapp.com](https://web.whatsapp.com/). Ekstensi langsung aktif melindungi percakapan Anda!

---

## ⌨️ Pintasan Keyboard & Kontrol

| Perintah | Fungsi |
| :--- | :--- |
| <kbd>Alt</kbd> + <kbd>X</kbd> | Toggle cepat proteksi ON / OFF |
| **Hover Mouse** | Membuka blur pada pesan, media, atau nama sementara |
| **Klik Badge "Privacy Active"** | Toggle proteksi langsung dari pojok kanan bawah WhatsApp Web |
| **Klik Ikon Ekstensi** | Membuka menu konfigurasi, preset, dan intensitas blur |

---

## 📁 Struktur Berkas

```
whatsapp-privacy-browser-extension/
├── manifest.json          # Konfigurasi Manifest V3
├── content/
│   ├── content.css        # Aturan CSS blur & hover reveal :not(:hover) (60 FPS)
│   └── content.js         # Content script pengatur kelas dinamis & shortcut
├── popup/
│   ├── popup.html         # Tampilan popup pengaturan WhatsApp Dark UI
│   ├── popup.css          # Styling komponen popup & switch
│   └── popup.js           # Pengelolaan preferensi via chrome.storage.local
├── background/
│   └── background.js      # Service worker untuk keyboard shortcuts
├── icons/                 # Ikon ekstensi resolusi 16px, 48px, dan 128px
├── .gitignore
├── LICENSE                # Lisensi MIT
└── README.md
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi [MIT](LICENSE). Silakan gunakan, pelajari, dan kembangkan secara bebas.
