## ADDED Requirements

### Requirement: Drag task card antar kolom

Sistem HARUS memungkinkan pengguna untuk men-drag task card dari satu kolom dan drop ke kolom lain untuk mengubah status task.

#### Scenario: Drag task dari Backlog ke Todo

- **WHEN** pengguna men-drag task card dari kolom Backlog dan men-drop di kolom Todo
- **THEN** task berpindah ke kolom Todo dan status task berubah menjadi "Todo"

#### Scenario: Drag task dari In Progress ke Done

- **WHEN** pengguna men-drag task card dari kolom In Progress dan men-drop di kolom Done
- **THEN** task berpindah ke kolom Done dan status task berubah menjadi "Done"

### Requirement: Visual feedback saat dragging

Sistem HARUS memberikan visual feedback yang jelas saat pengguna sedang men-drag task card.

#### Scenario: Task card sedang di-drag

- **WHEN** pengguna mulai men-drag sebuah task card
- **THEN** task card yang sedang di-drag HARUS memiliki visual yang berbeda (opacity berkurang atau elevated shadow)

#### Scenario: Kolom target highlight

- **WHEN** pengguna men-drag task card dan mengarahkan ke kolom lain
- **THEN** kolom target HARUS menampilkan highlight/indicator bahwa task bisa di-drop di sana

### Requirement: Drop task di posisi manapun dalam kolom

Sistem HARUS memungkinkan pengguna men-drop task di posisi manapun dalam kolom tujuan. Task yang di-drop HARUS ditempatkan di posisi terakhir (bawah) kolom.

#### Scenario: Drop task ke kolom

- **WHEN** pengguna men-drop task card ke kolom tujuan
- **THEN** task ditempatkan di posisi paling bawah kolom tersebut

### Requirement: Drag and drop TIDAK mengubah data selain status

Saat task di-drag antar kolom, hanya field `status` yang HARUS berubah. Semua data lain (title, description, priority) HARUS tetap sama.

#### Scenario: Data task tidak berubah setelah drag

- **WHEN** pengguna men-drag task dari kolom Backlog ke kolom In Progress
- **THEN** hanya status task yang berubah ke "InProgress", sedangkan title, description, dan priority tetap sama
