"use client";

import { CircleDashed, Minimize2, Plus } from "lucide-react";
import { Button } from "../ui/button";
import KanbanItem from "./KanbanItem";

import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";

function KanbanColumn({ id, items }: { id: string | number; items: any[] }) {
  const { ref } = useDroppable({
    id,
    type: "column",
    accept: ["item"],
    collisionPriority: CollisionPriority.Low,
  });

  const title = {
    backlog: "Backlog",
    todo: "To Do",
    inProgress: "In Progress",
    done: "Done",
  };

  return (
    <div className="kanban-column w-full px-4" ref={ref}>
      <div className="kanban-column-header flex items-center justify-between">
        <div className="kanban-column-header-left flex items-center gap-2">
          <CircleDashed size={16} />
          <h1 className="text-sm font-semibold">{title.backlog}</h1>
          <span>{items.length}</span>
        </div>
        <div className="kanban-column-header-right flex items-center">
          <Button variant={"ghost"} size={"icon"}>
            <Minimize2 size={16} />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <Plus size={16} />
          </Button>
        </div>
      </div>
      <div className="kanban-column-items mt-2">
        <div className="kanban-column-content flex flex-col gap-3">
          {items.map((item, index) => (
            <KanbanItem
              id={item.id}
              key={item.id}
              column={id}
              title={item.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KanbanColumn;
