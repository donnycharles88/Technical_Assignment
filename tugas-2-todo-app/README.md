# Tugas 2 — Todo App (React + TypeScript)

Aplikasi web **Todo List** sederhana, modern, dan interaktif yang dibangun menggunakan **React**, **TypeScript**, dan **Vite** untuk memenuhi kriteria Technical Assessment.

---

## 🚀 Fitur Lengkap (CRUD & Fitur Tambahan)

1. **Create (Menambah Tugas)**:
   - Input teks dengan validasi tugas tidak boleh kosong.
   - Bisa menambahkan tugas dengan menekan tombol **Tambah** atau tombol **Enter**.
2. **Read (Melihat & Filter Tugas)**:
   - Daftar tugas ditampilkan dengan rapi.
   - Indikator sisa tugas aktif dan progress bar persentase penyelesaian tugas.
   - Tab filter: **Semua (All)**, **Aktif (Active)**, dan **Selesai (Completed)** lengkap dengan badge jumlah tugas.
3. **Update (Mengedit Tugas)**:
   - Edit tugas secara langsung (*inline edit*) dengan mengklik ikon pensil atau **klik dua kali** (*double-click*) pada teks tugas.
   - Menyimpan editan dengan menekan tombol **Simpan** atau tombol **Enter**.
   - Membatalkan editan dengan menekan tombol **Batal** atau tombol **Escape**.
4. **Toggle Status (Menandai Selesai / Belum)**:
   - Checkbox kustom untuk menandai tugas selesai atau aktif kembali.
   - Tugas selesai otomatis memiliki gaya coret (*strikethrough*) dan warna teks memudar.
5. **Delete (Menghapus Tugas)**:
   - Tombol hapus satuan pada setiap baris tugas.
   - Tombol **Hapus Selesai** (*Clear Completed*) untuk membersihkan semua tugas yang sudah berstatus selesai sekaligus.
6. **Data Persistence (`localStorage`)**:
   - Seluruh data tugas tersimpan secara otomatis di `localStorage` peramban (browser).
   - Data tidak hilang saat halaman di-refresh atau browser ditutup.
7. **Desain Responsif & Modern**:
   - Tampilan bersih, kontras warna yang nyaman, efek transisi halus, dan responsif untuk layar desktop maupun mobile.

---

## 🛠️ Teknologi yang Digunakan

- **React 19**
- **TypeScript**
- **Vite**
- **CSS3** (Custom Properties, Flexbox, Transitions)
- **Browser Web Storage API** (`localStorage`)

---

## 💻 Cara Menjalankan Proyek

Pastikan Anda telah memasang **Node.js** (versi 18 ke atas disarankan).

### 1. Masuk ke direktori aplikasi
```bash
cd "Technical Assessment\tugas-2-todo-app"
```

### 2. Instalasi dependensi (jika belum)
```bash
npm install
```

### 3. Menjalankan server pengembangan (*Development Server*)
```bash
npm run dev
```
Setelah perintah dijalankan, buka tautan lokal yang tampil di terminal (biasanya `http://localhost:5173`) di browser Anda.

### 4. Build untuk produksi
```bash
npm run build
```

Hasil build akan berada di direktori `dist/` dan siap di-deploy ke server hosting mana pun.

---

## 📁 Struktur Direktori

```text
tugas-2-todo-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── TodoFilter.tsx   # Komponen filter bar & counter
│   │   ├── TodoForm.tsx     # Komponen form input tambah tugas
│   │   └── TodoItem.tsx     # Komponen item tugas (edit, toggle, delete)
│   ├── types/
│   │   └── todo.ts          # Definisi interface TypeScript (Todo, FilterType)
│   ├── App.css              # Styling utama aplikasi Todo
│   ├── App.tsx              # Komponen root aplikasi & state management
│   ├── index.css            # Global styling & CSS variables
│   └── main.tsx             # Entry point React
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
