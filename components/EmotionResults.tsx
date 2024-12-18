"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { EmotionResult } from "@/lib/types";
import { db } from "@/utils/db";
import { MoodLog } from "@/utils/schema";

interface ResultsSectionProps {
  results: EmotionResult[];
}

export function ResultsSection({ results }: ResultsSectionProps) {
  if (results.length === 0) return null;

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.label} className="space-y-2">
            <div className="flex justify-between">
              <span className="capitalize">{result.label}</span>
              <span>{Math.round(result.score * 100)}%</span>
            </div>
            <Progress value={result.score * 100} />
          </div>
        ))}
      </div>
    </Card>
  );
}
