"use client";

import { useState } from "react";
import { Brain } from "lucide-react";
import { analyzeEmotion } from "@/lib/api";
import type { EmotionResult } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmotionDetection from "@/components/EmotionDetection";
import MoodTracker from "@/components/MoodTracker";
import RelaxationTechniques from "@/components/RelaxationTechniques";
import TherapistConnection from "@/components/TherapistConnection";
import DashboardHeader from "@/components/DashboardHeader";
import { useRequireAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<EmotionResult[]>([]);
  const [error, setError] = useState("");

  const isAuthenticated = useRequireAuth();

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-4 space-y-6">
        <Card className="p-6">
          <Tabs defaultValue="emotion" className="space-y-4">
            <TabsList className="grid grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="emotion">Sentiment Detection</TabsTrigger>
              <TabsTrigger value="mood">Mood Tracking</TabsTrigger>
              <TabsTrigger value="relax">Relaxation</TabsTrigger>
              <TabsTrigger value="therapist">Therapists</TabsTrigger>
            </TabsList>
            <TabsContent value="emotion">
              <EmotionDetection />
            </TabsContent>
            <TabsContent value="mood">
              <MoodTracker />
            </TabsContent>
            <TabsContent value="relax">
              <RelaxationTechniques />
            </TabsContent>
            <TabsContent value="therapist">
              <TherapistConnection />
            </TabsContent>
          </Tabs>
        </Card>
      </main>
    </div>
  );
}
