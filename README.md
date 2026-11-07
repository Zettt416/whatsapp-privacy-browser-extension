# WhatsApp Web Privacy Shield 🛡️

Ekstensi browser lokal yang ringan, cepat, dan elegan untuk menjaga privasi layar WhatsApp Web Anda dari intipan orang di sekitar (*shoulder-surfing*).

Dibuat dari awal (*from scratch*) dengan arsitektur **Manifest V3** murni tanpa dependensi eksternal, tanpa bundler rumit, dan 100% berjalan lokal di browser Anda.

---

## ✨ Fitur Utama

- 🔍 **Efek Blur Cerdas & Ringan:**
  - **Isi Pesan Chat:** Obscure bubble obrolan aktif.
  - **Preview Pesan:** Blur cuplikan pesan terakhir pada daftar chat di panel kiri.
  - **Media & Gambar:** Blur foto, thumbnail video, stiker, dan audio player.
  - **Nama Kontak & Grup:** Sembunyikan identitas pengirim atau grup.
  - **Foto Profil:** Blur avatar di sidebar dan header.
  - **Kotak Ketik:** Blur teks saat Anda sedang mengetik pesan baru.
- 👁️ **Hover to Reveal:** Cukup arahkan kursor mouse ke elemen yang ingin dilihat, blur akan langsung terbuka dengan transisi mulus (*smooth transition*).
- 🔓 **Buka Chat = Buka Blur (Opsi Otomatis):** Opsi agar saat Anda membuka percakapan, isi chat langsung terbuka jelas tanpa perlu repot hover satu-satu, sementara daftar chat di kiri tetap aman ter-blur.
- ⚡ **Shortcut Cepat `Alt + X`:** Nyalakan atau matikan mode privasi seketika dengan keyboard saat ada rekan kerja atau orang lain mendekat.
- 🎛️ **Kontrol Lengkap (Popup):**
  - Master Switch ON/OFF.
  - Toggle terpisah untuk setiap kategori (Pesan, Media, Nama, Foto, Input).
  - Preset Cepat: **Standar**, **Maksimal**, dan **Minimal**.
  - Slider intensitas blur (3px - 18px).
- 🔒 **100% Aman & Privat:** Tidak mengumpulkan, menyimpan, atau mengirim data chat ke server manapun.

---

## 🚀 Cara Pasang di Browser (Chrome, Edge, Brave, Opera)

1. Buka browser Chromium favorit Anda (Google Chrome, Microsoft Edge, Brave, dll).
2. Masuk ke halaman ekstensi:
   - **Chrome:** ketik `chrome://extensions` di address bar
   - **Edge:** ketik `edge://extensions`
   - **Brave:** ketik `brave://extensions`
3. Aktifkan **Developer Mode** (Mode Pengembang) di pojok kanan atas.
4. Klik tombol **Load unpacked** (Muat yang belum dibongkar).
5. Pilih folder repositori ini:
   ```
   whatsapp-privacy-browser-extension
   ```
6. Buka [web.whatsapp.com](https://web.whatsapp.com/) — Ekstensi langsung aktif dan melindungi layar Anda!

---

## ⌨️ Penggunaan & Shortcut

- **Toggle Mode Privasi:** Tekan `Alt + X` di keyboard kapan saja saat berada di WhatsApp Web.
- **Pengaturan:** Klik ikon tameng hijau di toolbar browser untuk membuka menu konfigurasi.
- **Indikator Layar:** Tersedia pill kecil di pojok kanan bawah WhatsApp Web bertuliskan *Privacy Active* yang bisa diklik langsung untuk toggle on/off.

---

## 📁 Struktur Berkas

```
whatsapp-privacy-browser-extension/
├── manifest.json          # Konfigurasi Manifest V3
├── content/
│   ├── content.css        # Aturan CSS blur & hover reveal 60 FPS
│   └── content.js         # Content script pengatur class & shortcut
├── popup/
│   ├── popup.html         # Tampilan popup pengaturan
│   ├── popup.css          # Tema modern WhatsApp Dark UI
│   └── popup.js           # Logika penyimpanan & preset (chrome.storage)
├── background/
│   └── background.js      # Service worker untuk keyboard shortcuts
├── icons/                 # Ikon ekstensi (16px, 48px, 128px)
├── .gitignore
└── README.md
```

