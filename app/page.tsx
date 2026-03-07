'use client'

import MainSidebar from "@/components/MainSidebar";
import MainContent from "@/components/MainContent";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
    }
  }, [])


  return (
    <div className="flex h-screen bg-mist-100 py-4 pr-4">
      <MainSidebar />
      <MainContent />
    </div>
  );
}
