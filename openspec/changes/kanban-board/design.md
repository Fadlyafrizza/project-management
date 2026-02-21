## Context

Project ini adalah scaffold Next.js 16 kosong yang akan dibangun menjadi Project Management Tool sederhana dengan fitur Kanban board. Belum ada komponen, data model, atau state management yang ada. Ini adalah implementasi greenfield.

**Tech stack**: Next.js 16 (App Router), TypeScript 5, React 19, Tailwind CSS v4, shadcn/ui.

**Kebutuhan utama**: Kanban board dengan 4 kolom (Backlog, Todo, In Progress, Done), CRUD task, dan drag-and-drop antar kolom.

## Goals / Non-Goals

**Goals:**

- Membangun Kanban board yang fungsional dengan drag-and-drop
- Arsitektur komponen yang bersih dan reusable
- UI yang baik menggunakan shadcn/ui components
- Client-side state management yang sederhana

**Non-Goals:**

- Backend/database persistence (data di client-side saja)
- Authentication/authorization
- Real-time collaboration (multiplayer)
- Reporting/analytics
- Drag-and-drop reorder dalam kolom yang sama (hanya antar kolom)

## Decisions

### 1. Library Drag-and-Drop: `@dnd-kit`

**Keputusan**: Menggunakan `@dnd-kit/core` dan `@dnd-kit/sortable` untuk implementasi drag-and-drop.

**Alasan**:

- Library modern, ringan, dan well-maintained
- Built-in accessibility support (keyboard navigation)
- Hooks-based API yang cocok dengan React 19
- Mendukung touch devices
- Performa baik dengan banyak item

**Alternatif dipertimbangkan**:

- `react-beautiful-dnd` — deprecated, tidak di-maintain lagi
- `react-dnd` — lebih kompleks, overhead lebih besar
- Native HTML5 Drag API — kurang support di mobile, UX kurang halus

### 2. State Management: `useReducer` + Context

**Keputusan**: Menggunakan `useReducer` dengan React Context untuk state management.

**Alasan**:

- Cukup untuk skala aplikasi ini (single board, client-side only)
- Tidak perlu external library tambahan
- Reducer pattern cocok untuk task CRUD + status updates
- Mudah di-test dan di-debug

**Alternatif dipertimbangkan**:

- `useState` saja — kurang terstruktur untuk multiple actions (create, update, delete, move)
- Zustand/Jotai — overkill untuk tahap ini, bisa ditambahkan nanti

### 3. Struktur Komponen

**Keputusan**: Komponen diorganisir sebagai berikut:

```
components/
├── kanban/
│   ├── kanban-board.tsx      # Board utama dengan DndContext
│   ├── kanban-column.tsx     # Kolom individual (droppable area)
│   └── task-card.tsx         # Card task (draggable item)
├── task/
│   ├── task-dialog.tsx       # Dialog create/edit task
│   └── task-delete-dialog.tsx # Dialog konfirmasi hapus
└── ui/                       # shadcn/ui components
```

**Alasan**: Mengikuti konvensi project (colocate by feature), memisahkan concern Kanban (layout + DnD) dari Task (CRUD operations).

### 4. Data Model

**Keputusan**: Interface TypeScript sederhana:

```typescript
type TaskStatus = "backlog" | "todo" | "in-progress" | "done";
type TaskPriority = "low" | "medium" | "high";

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string; // ISO 8601
}
```

**Alasan**:

- String literals untuk status dan priority (type-safe, mudah di-extend)
- `id` menggunakan string (UUID via `crypto.randomUUID()`)
- `createdAt` sebagai ISO string agar mudah di-serialize

### 5. Halaman Utama sebagai Client Component

**Keputusan**: `app/page.tsx` akan menjadi thin wrapper yang import `KanbanBoard` sebagai client component.

**Alasan**: Drag-and-drop dan state management memerlukan client-side interactivity. Layout dan metadata tetap server-side.

### 6. Seed Data

**Keputusan**: Menyediakan sample tasks sebagai initial state agar board tidak kosong saat pertama kali dibuka.

**Alasan**: Memberikan pengalaman langsung tanpa harus membuat task dulu. User bisa melihat dan mencoba drag-and-drop seketika.

## Risks / Trade-offs

| Risk                                          | Mitigation                                                                                                                                                 |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data hilang saat refresh (no persistence)     | Ini disengaja untuk tahap awal. Seed data memastikan board tidak pernah benar-benar kosong. Persistence bisa ditambahkan kemudian (localStorage/database). |
| Performa dengan banyak task                   | Untuk MVP sederhana ini tidak jadi masalah. Jika nanti perlu, bisa ditambahkan virtualization.                                                             |
| `@dnd-kit` belum tentu support Next.js 16 SSR | Komponen drag-and-drop akan di-render client-side only (`"use client"`) untuk menghindari SSR issues.                                                      |
| Accessibility pada drag-and-drop              | `@dnd-kit` memiliki built-in keyboard support. Perlu dites manual.                                                                                         |
