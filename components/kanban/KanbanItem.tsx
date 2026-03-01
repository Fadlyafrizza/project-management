import { useSortable } from "@dnd-kit/react/sortable";

function KanbanItem({
  title,
  index,
  id,
  column,
}: {
  title: string;
  index: number;
  column: number | string;
  id: number | string;
}) {
  const { ref } = useSortable({
    id,
    index,
    type: "item",
    group: column,
    accept: ["item"],
  });

  return (
    <div ref={ref} className="kanban-item bg-white shadow rounded-md py-2 px-4">
      {title}
    </div>
  );
}

export default KanbanItem;
