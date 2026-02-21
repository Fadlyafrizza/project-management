## 1. Project Setup & Dependencies

- [ ] 1.1 [FE] Install `@dnd-kit/core` dan `@dnd-kit/utilities` sebagai dependencies
- [ ] 1.2 [FE] Setup shadcn/ui: jalankan `npx shadcn@latest init` dan install komponen yang dibutuhkan (Card, Button, Dialog, Input, Label, Select, Badge)
- [ ] 1.3 [FE] Update `app/globals.css` dengan shadcn/ui theme variables dan design tokens

## 2. Data Model & State Management

- [ ] 2.1 [FE] Buat `types/task.ts` — definisi interface `Task`, type `TaskStatus`, type `TaskPriority`, dan kolom-kolom board `BOARD_COLUMNS`
- [ ] 2.2 [FE] Buat `lib/task-context.tsx` — React Context + useReducer untuk state management task (actions: ADD_TASK, UPDATE_TASK, DELETE_TASK, MOVE_TASK)
- [ ] 2.3 [FE] Buat `lib/seed-data.ts` — sample tasks sebagai initial state agar board tidak kosong

## 3. Kanban Board Components

- [ ] 3.1 [FE] Buat `components/kanban/kanban-board.tsx` — komponen utama board dengan DndContext, layout 4 kolom horizontal, responsive
- [ ] 3.2 [FE] Buat `components/kanban/kanban-column.tsx` — komponen kolom individual dengan droppable area, header (nama + jumlah task), dan list task cards
- [ ] 3.3 [FE] Buat `components/kanban/task-card.tsx` — komponen card draggable yang menampilkan title, priority badge, dan tombol aksi (edit/delete)

## 4. Task CRUD Components

- [ ] 4.1 [FE] Buat `components/task/task-dialog.tsx` — Dialog form untuk create dan edit task (title, description, priority)
- [ ] 4.2 [FE] Buat `components/task/task-delete-dialog.tsx` — Dialog konfirmasi penghapusan task
- [ ] 4.3 [FE] Tambahkan tombol "Add Task" di board atau header untuk membuka dialog create

## 5. Drag and Drop Integration

- [ ] 5.1 [FE] Setup DndContext di `kanban-board.tsx` dengan sensors (pointer + keyboard) dan collision detection
- [ ] 5.2 [FE] Implementasi `useDraggable` di `task-card.tsx` untuk membuat card draggable
- [ ] 5.3 [FE] Implementasi `useDroppable` di `kanban-column.tsx` untuk membuat kolom sebagai drop target
- [ ] 5.4 [FE] Handle `onDragEnd` event: dispatch MOVE_TASK action ketika task di-drop ke kolom baru
- [ ] 5.5 [FE] Tambahkan DragOverlay untuk visual feedback saat dragging (opacity, shadow)

## 6. Page Integration & Polish

- [ ] 6.1 [FE] Update `app/page.tsx` — import KanbanBoard, wrap dengan TaskProvider context
- [ ] 6.2 [FE] Update metadata di `app/layout.tsx` (title, description) untuk project management tool
- [ ] 6.3 [FE] Pastikan responsive layout: horizontal scroll pada mobile, kolom seimbang pada desktop
- [ ] 6.4 [FE] Verifikasi semua fungsionalitas: CRUD task, drag-and-drop antar kolom, visual feedback
