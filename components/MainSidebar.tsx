import { SquareKanban, SquareStop, Settings } from "lucide-react";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function MenuItem({ icon, label, active }: MenuItemProps) {
  const activeClass = active ? "bg-white text-black" : "";

  return (
    <div className="group flex flex-col items-center justify-center w-10 h-10 text-center text-sm mb-2">
      <div
        className={`mb-1 p-2 h-8 w-8 ${activeClass} rounded flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300`}
      >
        {icon}
      </div>
      <span className="text-xs group-hover:text-black">{label}</span>
    </div>
  );
}

function MainSidebar() {
  return (
    <aside className="w-16 flex flex-col items-center py-4 justify-between">
      {/* Main Menu */}
      <div id="MainMenu">
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

      {/* End Main Menu */}

      <div
        id="user-menu"
        className="flex flex-col justify-center items-center space-y-4"
      >
        <div id="settings">
          {/* <MenuItem icon={<Settings className="" />} label="" /> */}
          <Settings />
        </div>
        <div id="avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
        </div>
      </div>
    </aside>
  );
}

export default MainSidebar;

// gunakan default karena function ini hanya ada satu di file ini
