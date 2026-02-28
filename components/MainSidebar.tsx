import { SquareKanban, SquareStop, Settings } from "lucide-react";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function MenuItem({ icon, label, active }: MenuItemProps) {
  const activeClass = active ? "bg-white text-black" : "";

  return (
    <div className="flex flex-col items-center justify-center w-10 h-10 text-center text-sm mb-2">
      <div
        className={`mb-1 p-2 h-8 w-8 ${activeClass} rounded flex items-center justify-center`}
      >
        {icon}
      </div>
      <span className="text-xs">{label}</span>
    </div>
  );
}

function MainSidebar() {
  return (
    <aside className="w-16 flex flex-col items-center py-4 justify-between">
      <div>
        <div className="brand w-10 h-10 bg-zinc-800 rounded-lg mb-8"></div>

        <nav className="flex flex-col items-center justify-center gap-4">
          <MenuItem
            icon={<SquareKanban className="" />}
            label="Projects"
            active
          />
          <MenuItem icon={<SquareKanban className="" />} label="Wiki" />
          <MenuItem icon={<SquareStop className="" />} label="Pi" />
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center gap-0">
        <MenuItem icon={<Settings className="" />} label="" />
        <div className="user w-8 h-8 bg-zinc-800 rounded-full"></div>
      </div>
    </aside>
  );
}

export default MainSidebar;

// gunakan default karena function ini hanya ada satu di file ini
