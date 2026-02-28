import Image from "next/image";
import MainSidebar from "@/components/MainSidebar";
import MainContent from "@/components/MainContent";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen bg-mist-100 py-4 pr-4">
      <MainSidebar />
      <MainContent />
    </div>
  );
}
