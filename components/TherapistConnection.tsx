'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TherapistConnection() {
  const therapists = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Anxiety & Depression",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Stress Management",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Dr. Emily Williams",
      specialty: "Trauma & PTSD",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Connect with Therapists</h2>
        <p className="text-muted-foreground">
          Find and connect with licensed therapists who can provide professional support.
        </p>
      </div>

      <div className="grid gap-6">
        {therapists.map((therapist, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center space-x-6">
              <Avatar className="h-16 w-16">
                <AvatarImage src={therapist.image} alt={therapist.name} />
                <AvatarFallback>{therapist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{therapist.name}</h3>
                <p className="text-muted-foreground">{therapist.specialty}</p>
                <p className="text-sm text-muted-foreground">{therapist.experience} experience</p>
              </div>
              <Button>Book Session</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}