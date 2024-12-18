"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MoodLog } from "@/utils/schema";
import { useState } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!mood) {
      setMessage("Please select a mood before submitting.");
      return;
    }

    try {
      // Replace "defaultUser" with your logged-in user or actual data
      const user = "defaultUser";

      // Insert into the database
      await db.insert(MoodLog).values({
        user: user,
        userMood: mood,
      });

      setMessage("Mood logged successfully!");
    } catch (error) {
      console.error("Error logging mood:", error);
      setMessage("Failed to log mood.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Mood Tracking</h2>
        <p className="text-muted-foreground">
          Track your mood over time to identify patterns and trends.
        </p>
      </div>

      <Card className="p-6">
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                How are you feeling today?
              </label>
              <Select onValueChange={(value) => setMood(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="happy">😊 Happy</SelectItem>
                  <SelectItem value="calm">😌 Calm</SelectItem>
                  <SelectItem value="sad">😢 Sad</SelectItem>
                  <SelectItem value="anxious">😰 Anxious</SelectItem>
                  <SelectItem value="angry">😠 Angry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" type="submit">
              Log Mood
            </Button>
            {message && <p className="text-sm text-center mt-2">{message}</p>}
          </div>
        </form>
      </Card>

      <Card className="p-6">
        <div className="text-center text-muted-foreground">
          Mood tracking visualization will be displayed here
          {/* Integration with Chart.js or D3.js would go here */}
        </div>
      </Card>
    </div>
  );
}
