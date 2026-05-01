import type { AnalyzeInput, AnalyzeOutput } from "@/lib/types/analysis";

const clamp = (value: number): number => Math.max(0, Math.min(100, value));

function simulateIdeaAnalysis(input: AnalyzeInput): AnalyzeOutput {
  const idea = input.idea.trim();
  const words = idea.split(/\s+/).filter(Boolean);
  const hasNumber = /\d/.test(idea);
  const hasCuriosity = /\b(why|how|secret|mistake|truth|best)\b/i.test(idea);

  const score = clamp(
    35 +
      (words.length >= 8 && words.length <= 15 ? 18 : 8) +
      (hasNumber ? 15 : 5) +
      (hasCuriosity ? 20 : 10) +
      (input.format === "short" ? 8 : 12)
  );

  const analysis = [
    `Audience fit: Framed for ${input.audience} with ${input.format}-form storytelling expectations.`,
    `Clarity: ${words.length < 8 ? "Too vague for a strong click impulse." : "Clear enough to communicate the core promise."}`,
    `Curiosity signal: ${hasCuriosity ? "Present" : "Weak"}, which directly impacts open-loop retention.`
  ];

  const improvements = [
    hasNumber ? "Keep the numeric framing in thumbnail/title alignment." : "Add a specific number to strengthen specificity.",
    /\byou|your\b/i.test(idea) ? "Direct address is good—keep viewer-centric language." : "Use 'you/your' language to improve personal relevance.",
    "Create title variants and A/B test before publishing."
  ];

  const hook = `Before you publish this ${input.format}, ${input.audience.toLowerCase()} need this: ${idea.replace(/[?.!]+$/, "")} — here is the sharper angle.`;

  return { score, analysis, improvements, hook };
}

export async function analyzeIdea(input: AnalyzeInput): Promise<AnalyzeOutput> {
  const apiKey = process.env.OPENAI_API_KEY;

  // If no API key exists, always use deterministic simulated analysis.
  if (!apiKey) {
    return simulateIdeaAnalysis(input);
  }

  // Placeholder for real AI integration path; keep output contract identical.
  return simulateIdeaAnalysis(input);
}
