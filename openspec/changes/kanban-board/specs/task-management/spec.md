## ADDED Requirements

### Requirement: Model data Task

Sistem HARUS mendefinisikan model data Task dengan field berikut: `id` (unique identifier), `title` (string, wajib), `description` (string, opsional), `status` (enum: Backlog | Todo | InProgress | Done), `priority` (enum: Low | Medium | High), dan `createdAt` (timestamp).

#### Scenario: Task memiliki semua field yang diperlukan

- **WHEN** sebuah task dibuat
- **THEN** task HARUS memiliki id unik, title, status default "Backlog", priority default "Medium", dan createdAt otomatis

### Requirement: Membuat task baru

Sistem HARUS menyediakan dialog/form untuk membuat task baru dengan input: title (wajib), description (opsional), dan priority (pilihan).

#### Scenario: Berhasil membuat task

- **WHEN** pengguna mengisi title dan menekan tombol "Create"
- **THEN** task baru ditambahkan ke kolom Backlog dengan data yang diisi

#### Scenario: Validasi title wajib

- **WHEN** pengguna mencoba membuat task tanpa mengisi title
- **THEN** sistem menampilkan pesan error bahwa title wajib diisi dan task TIDAK dibuat

### Requirement: Mengedit task

Sistem HARUS menyediakan kemampuan untuk mengedit informasi task yang sudah ada (title, description, priority).

#### Scenario: Berhasil mengedit task

- **WHEN** pengguna membuka task, mengubah title, dan menyimpan
- **THEN** task diperbarui dengan informasi baru dan tetap di kolom yang sama

### Requirement: Menghapus task

Sistem HARUS menyediakan kemampuan untuk menghapus task dengan konfirmasi.

#### Scenario: Berhasil menghapus task

- **WHEN** pengguna menekan tombol hapus dan mengkonfirmasi penghapusan
- **THEN** task dihapus dari board dan tidak lagi ditampilkan

#### Scenario: Membatalkan penghapusan

- **WHEN** pengguna menekan tombol hapus tetapi membatalkan konfirmasi
- **THEN** task TIDAK dihapus dan tetap ditampilkan

### Requirement: Data persistence menggunakan client-side state

Sistem HARUS menyimpan data task di client-side state (React state). Data TIDAK perlu persist setelah refresh halaman pada tahap ini.

#### Scenario: Task tersimpan selama sesi

- **WHEN** pengguna membuat, mengedit, atau menghapus task
- **THEN** perubahan langsung terlihat di board tanpa perlu refresh

#### Scenario: Data reset setelah refresh

- **WHEN** pengguna me-refresh halaman
- **THEN** board kembali ke state awal (data dummy/seed atau kosong)
