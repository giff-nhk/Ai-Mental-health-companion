import { HUGGING_FACE_API } from "./constants";
import type { AnalysisResponse } from "./types";

export async function analyzeEmotion(text: string): Promise<AnalysisResponse> {
  const response = await fetch(HUGGING_FACE_API.MODEL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HUGGING_FACE_API.TOKEN}`,
    },
    body: JSON.stringify({ inputs: text }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze text");
  }

  const data = await response.json();
  return data[0];
}
