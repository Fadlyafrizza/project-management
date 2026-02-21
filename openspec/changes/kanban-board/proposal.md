## Why

Tim membutuhkan alat visual untuk mengelola task secara efektif menggunakan metodologi Kanban. Saat ini belum ada fitur manajemen task di aplikasi ini — project masih berupa scaffold Next.js kosong. Kanban board akan membantu tim melihat status pekerjaan secara real-time, memindahkan task antar tahapan dengan drag & drop, dan menjaga alur kerja tetap terorganisir.

## What Changes

- Membuat **Kanban board** sebagai halaman utama aplikasi dengan 4 kolom status: **Backlog**, **Todo**, **In Progress**, **Done**
- Menampilkan **task cards** di setiap kolom dengan informasi task (judul, deskripsi, prioritas)
- Implementasi **drag and drop** untuk memindahkan task antar kolom (update status)
- Fitur **CRUD task**: membuat, melihat detail, mengedit, dan menghapus task
- **Data persistence** menggunakan local state (client-side) sebagai langkah awal — tanpa database untuk menjaga kesederhanaan

## Capabilities

### New Capabilities

- `kanban-board`: Komponen board utama yang menampilkan 4 kolom status dan mengatur layout Kanban secara keseluruhan
- `task-management`: CRUD operations untuk task (create, read, update, delete) termasuk model data Task
- `drag-and-drop`: Interaksi drag and drop untuk memindahkan task antar kolom dan mengupdate status secara otomatis

### Modified Capabilities

_Tidak ada — ini adalah project baru tanpa capabilities yang sudah ada._

## Impact

- **Code**: Membuat komponen baru (KanbanBoard, TaskColumn, TaskCard, TaskForm/Dialog) dan types/interfaces untuk data model
- **Dependencies**: Perlu menambahkan library drag-and-drop (misalnya `@dnd-kit`) dan komponen shadcn/ui (Card, Button, Dialog, Input, dll.)
- **Routing**: Halaman utama (`app/page.tsx`) akan di-replace dengan Kanban board
- **State Management**: Menggunakan React state (useState/useReducer) untuk manajemen data task di client-side
