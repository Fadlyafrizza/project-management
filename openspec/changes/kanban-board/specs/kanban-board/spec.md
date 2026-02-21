## ADDED Requirements

### Requirement: Board layout dengan 4 kolom status

Sistem HARUS menampilkan Kanban board dengan 4 kolom yang tersusun horizontal: **Backlog**, **Todo**, **In Progress**, dan **Done**. Setiap kolom HARUS menampilkan nama status dan jumlah task di dalamnya.

#### Scenario: Board ditampilkan dengan semua kolom

- **WHEN** pengguna membuka halaman utama
- **THEN** sistem menampilkan 4 kolom Kanban secara horizontal dengan label: Backlog, Todo, In Progress, Done

#### Scenario: Setiap kolom menampilkan jumlah task

- **WHEN** kolom berisi task
- **THEN** header kolom HARUS menampilkan nama kolom dan jumlah task (contoh: "In Progress (3)")

### Requirement: Task cards ditampilkan di kolom yang sesuai

Sistem HARUS menampilkan setiap task sebagai card di dalam kolom yang sesuai dengan status task tersebut. Card HARUS menampilkan judul task dan indikator prioritas.

#### Scenario: Task card muncul di kolom yang benar

- **WHEN** sebuah task memiliki status "In Progress"
- **THEN** task card tersebut HARUS muncul di kolom In Progress

#### Scenario: Task card menampilkan informasi dasar

- **WHEN** task card ditampilkan
- **THEN** card HARUS menampilkan minimal judul task dan badge prioritas (Low, Medium, High)

### Requirement: Board responsive layout

Sistem HARUS menampilkan board yang responsif. Pada layar lebar, kolom ditampilkan horizontal. Pada layar kecil, kolom HARUS tetap dapat diakses dengan horizontal scroll.

#### Scenario: Layout desktop

- **WHEN** lebar layar >= 768px
- **THEN** keempat kolom ditampilkan secara horizontal dengan lebar yang seimbang

#### Scenario: Layout mobile

- **WHEN** lebar layar < 768px
- **THEN** kolom-kolom dapat di-scroll secara horizontal
