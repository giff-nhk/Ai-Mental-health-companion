'use client';

import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';
import { useToast } from "@/components/ui/use-toast";

export default function DashboardHeader() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    router.push('/');
  };

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">MindfulAI</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}