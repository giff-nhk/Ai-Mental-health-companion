'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Heart, LineChart, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Your AI Mental Health Companion
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience personalized emotional support powered by AI. Track your mood, discover relaxation techniques, and connect with professional therapists.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/login">
              <Button size="lg" variant="default">
                Get Started
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Create Account
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Brain className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Emotion Detection</h3>
            <p className="text-muted-foreground">
              Advanced AI analysis to understand your emotional state
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <LineChart className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Mood Tracking</h3>
            <p className="text-muted-foreground">
              Visualize and understand your emotional patterns
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Heart className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Relaxation Techniques</h3>
            <p className="text-muted-foreground">
              Personalized techniques for emotional well-being
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
            <p className="text-muted-foreground">
              Connect with licensed therapists when needed
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}