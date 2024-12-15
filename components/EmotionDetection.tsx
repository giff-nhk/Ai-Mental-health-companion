'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function EmotionDetection() {
  const [text, setText] = useState('');

  // Note: This would connect to your backend NLP service
  const analyzeEmotion = () => {
    console.log('Analyzing emotion:', text);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">How are you feeling?</h2>
        <p className="text-muted-foreground">
          Share your thoughts, and I'll help understand your emotions.
        </p>
      </div>
      
      <Card className="p-6">
        <Textarea
          placeholder="Type your thoughts here..."
          className="min-h-[200px] mb-4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={analyzeEmotion} className="w-full">
          Analyze My Emotions
        </Button>
      </Card>

      <div className="text-sm text-muted-foreground">
        Note: Your privacy is important to us. All data is encrypted and handled securely.
      </div>
    </div>
  );
}