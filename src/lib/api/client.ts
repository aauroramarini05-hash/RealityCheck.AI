import type { AnalyzeInput, AnalyzeOutput } from "@/lib/types/analysis";

export async function requestIdeaAnalysis(payload: AnalyzeInput): Promise<AnalyzeOutput> {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to analyze idea.");
  }

  return (await response.json()) as AnalyzeOutput;
}
