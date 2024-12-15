'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Sparkles, Music, Navigation } from "lucide-react";

export default function RelaxationTechniques() {
  const techniques = [
    {
      title: "Deep Breathing",
      description: "Simple breathing exercises to help you relax and reduce stress",
      Icon: Wind,
      duration: "5 mins"
    },
    {
      title: "Guided Meditation",
      description: "Follow along with calming meditation sessions",
      Icon: Sparkles,
      duration: "10 mins"
    },
    {
      title: "Calming Sounds",
      description: "Listen to soothing nature sounds and ambient music",
      Icon: Music,
      duration: "15 mins"
    },
    {
      title: "Mindful Walking",
      description: "Practice mindfulness while taking a peaceful walk",
      Icon: Navigation,
      duration: "20 mins"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Relaxation Techniques</h2>
        <p className="text-muted-foreground">
          Discover techniques to help you relax and find inner peace.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techniques.map((technique, index) => {
          const IconComponent = technique.Icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold">{technique.title}</h3>
                  <p className="text-sm text-muted-foreground">{technique.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{technique.duration}</span>
                    <Button variant="outline" size="sm">Start</Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}