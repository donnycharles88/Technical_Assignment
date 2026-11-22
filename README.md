# Technical Assessment

Repositori ini berisi **Tugas 1** dan **Tugas 2**.

---

## 📂 Daftar Tugas

### 1. [Tugas 1 — FizzBuzz Project](./tugas-1-fizzbuzz/)
- **Bahasa**: Python 3
- **Fitur**: Mendukung input interaktif batas angka (dengan default 100 jika menekan Enter).
- **Aturan FizzBuzz**:
  - Kelipatan 3 dan 5 -> `"FizzBuzz"`
  - Kelipatan 3 -> `"Fizz"`
  - Kelipatan 5 -> `"Buzz"`
  - Lainnya -> Angka itu sendiri
- **Cara Menjalankan**:
  ```bash
  cd "tugas-1-fizzbuzz"
  python fizzbuzz.py
  ```

---

### 2. [Tugas 2 — Todo App](./tugas-2-todo-app/)
- **Teknologi**: React 19, TypeScript, Vite, CSS3, `localStorage`
- **Fitur CRUD Lengkap**:
  - **Create**: Menambah tugas baru (input + Enter / tombol Tambah)
  - **Read**: Menampilkan daftar tugas dengan tab filter (Semua, Aktif, Selesai) & progress bar
  - **Update**: Edit tugas secara inline (klik ikon edit atau double-click teks)
  - **Toggle**: Checkbox untuk menandai tugas selesai / aktif dengan efek strikethrough
  - **Delete**: Hapus tugas per item & tombol Hapus Semua Tugas Selesai (*Clear Completed*)
  - **Persistensi**: Data otomatis tersimpan di `localStorage` browser
- **Cara Menjalankan**:
  ```bash
  cd "tugas-2-todo-app"
  npm install
  npm run dev
  ```
  Lalu buka tautan `http://localhost:5173` di browser.
