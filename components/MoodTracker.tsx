'use client';

import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function MoodTracker() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Mood Tracking</h2>
        <p className="text-muted-foreground">
          Track your mood over time to identify patterns and trends.
        </p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">How are you feeling today?</label>
            <Select>
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
          <Button className="w-full">Log Mood</Button>
        </div>
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