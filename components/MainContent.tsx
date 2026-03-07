import ProjectSidebar from "./ProjectSidebar";
import KanbanBoard from "./kanban/KanbanBoard";

import MainNavbar from "./MainNavbar";

function MainContent() {
  return (
    <main className="flex overflow-auto rounded-xl shadow">
      <ProjectSidebar />
      <div className="flex flex-col w-screen">
        <MainNavbar />
        <KanbanBoard />
      </div>
    </main>
  );
}

export default MainContent;

