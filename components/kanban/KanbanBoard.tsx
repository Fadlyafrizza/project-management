"use client";

import { useState } from "react";
import KanbanColumn from "./KanbanColumn";

import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";

export interface KanbanColumnsProps {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
    content: string;
  }[];
}
function KanbanBoard() {
  const [items, setItem] = useState({
    backlog: [
      {
        id: "task-1",
        title: "Task 1",
        content: "Content 1",
      },
    ],
    todo: [],
    inProgress: [],
    done: [],
  });

  const column = Object.entries(items);

  return (
    <DragDropProvider
      onDragOver={(event) => setItem((items) => move(items, event))}
    >
      <div className="flex h-full gap-4 py-4 overflow-auto justify-center">
        {column.map(([column, items]) => (
          <KanbanColumn id={column} key={column} items={items} />
        ))}
      </div>
    </DragDropProvider>
  );
}

export default KanbanBoard;
