import ProjectSidebar from "./ProjectSidebar";
import KanbanBoard from "./kanban/KanbanBoard";

import {
  ChevronRight,
  ChevronDown,
  Layers,
  TableOfContents,
  Kanban,
  Calendar,
  Sheet,
  ChartNoAxesGantt,
} from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

function ViewButton({
  icon,
  active,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  const activeClass = active ? "bg-white rounded-xs shadow" : "";

  return (
    <div className={`${activeClass}`}>
      <div className="flex items-center space-x-2 p-1">{icon}</div>
    </div>
  );
}

function DropDownNavbar({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="rounded-sm text-sm font-semibold"
            size={"sm"}
          >
            {label} {icon}
          </Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}

function MainContent() {
  return (
    <main className="flex overflow-auto rounded-xl shadow">
      <ProjectSidebar />
      <div className="flex flex-col w-screen">
        <div className="flex items-center justify-between overflow-auto shadow bg-white h-16">
          <div className="flex items-center px-6 space-x-3">
            <div className="pr-3 text-sm font-semibold">
              <h1>🚀 Auto-campaigns launch</h1>
            </div>
            <div className="pt-px">
              <ChevronRight size={16} />
            </div>
            <div className={`flex text-sm gap-2 items-center font-semibold`}>
              <Layers size={14} />
              Work Items
            </div>
          </div>
          <div className="flex items-center px-6 space-x-3">
            <div className="p-1 bg-mist-100 flex items-center rounded-xs justify-between space-x-2">
              <ViewButton
                icon={<TableOfContents size={14} className="rotate-180" />}
              />
              <ViewButton icon={<Kanban size={14} />} active />
              <ViewButton icon={<Calendar size={14} />} />
              <ViewButton icon={<Sheet size={14} />} />
              <ViewButton icon={<ChartNoAxesGantt size={14} />} />
            </div>
            <div>
              <DropDownNavbar
                label="Filters"
                icon={<ChevronDown size={12} className="pt-px" />}
              />
            </div>
            <div>
              <DropDownNavbar
                label="Display"
                icon={<ChevronDown size={12} className="pt-px" />}
              />
            </div>
            <div>
              <Button
                variant={"outline"}
                className="rounded-sm text-sm font-semibold"
                size={"sm"}
              >
                Analytics
              </Button>
            </div>
            <div>
              <Button
                variant={"outline"}
                className="rounded-sm text-sm bg-sky-800 text-white font-semibold"
                size={"sm"}
              >
                Add work items
              </Button>
            </div>
          </div>
        </div>
        <KanbanBoard />
      </div>
    </main>
  );
}

export default MainContent;
