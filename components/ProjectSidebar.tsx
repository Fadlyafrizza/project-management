import { Button } from "./ui/button";

import menus from "@/data/menus.json";

import {
  Search,
  SquarePen,
  Home,
  Inbox,
  Briefcase,
  Users,
  Lightbulb,
  LayoutDashboard,
  Ellipsis,
  Layers,
  Circle,
} from "lucide-react";

const iconMap = {
  Home,
  Inbox,
  Briefcase,
  Users,
  Lightbulb,
  LayoutDashboard,
  Ellipsis,
};

interface NavIconProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
  className?: string;
}

function NavIcon({
  icon,
  label,
  active,
  href = "#",
  className = "",
}: NavIconProps) {
  const activeClass = active ? "bg-mist-100 text-black" : "";

  return (
    <div
      className={`${activeClass} p-2 hover:bg-mist-100 transition-all duration-200`}
    >
      <a href={href} className={`flex text-sm gap-2 items-center ${className}`}>
        {icon}
        {label}
      </a>
    </div>
  );
}

function ProjectSidebar() {
  const { menu } = menus;

  return (
    <aside className="w-80 bg-white h-full border-r border-gray-200">
      <div className="p-4 flex flex-col">
        <div className="space-y-2">
          <h2 className="font-medium px-2 text-gray-700 tracking-wide">
            Projects
          </h2>
          <div id="input-search" className="flex space-x-2">
            <div className="relative w-full">
              <div className="text-zinc-800 absolute left-2 top-1/2 -translate-y-1/2">
                <SquarePen size={18} />
              </div>
              <Button
                className="justify-start pl-8 w-full font-normal text-sm"
                variant={"outline"}
              >
                New work item
              </Button>
            </div>
            <div>
              <Button className="w-9" aria-label="Submit" variant="outline">
                <Search />
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-8">
          <nav className="flex flex-col space-y-2">
            {menu.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <NavIcon
                  key={item.label}
                  icon={<Icon size={18} />}
                  label={item.label}
                />
              );
            })}
          </nav>
        </div>
        <div className="px-2 space-y-4">
          <h1 className="font-semibold text-gray-400">Teamspaces</h1>
          <div>
            <span className="text-sm">🔍 Marketing</span>
          </div>
        </div>
        <div className="px-2 pt-6 space-y-4">
          <h1 className="font-semibold text-gray-400">Projects</h1>
          <div className="flex flex-col space-y-4">
            <h1 className="text-sm">🚀 Auto-campaigns launch</h1>
            <div className="flex flex-col space-y-1 text-xs">
              <NavIcon
                icon={<Layers size={18} />}
                label="Work Items"
                active={true}
                className="pl-4"
              />
              <NavIcon
                icon={<Circle size={18} />}
                label="Cycles"
                className="pl-4"
              />
            </div>
            <h1 className="text-sm">⏰ Post-launch nurture</h1>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ProjectSidebar;
