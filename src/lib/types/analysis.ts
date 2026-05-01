import { z } from "zod";

export const analyzeInputSchema = z.object({
  idea: z.string().min(10, "Idea must be at least 10 characters.").max(500),
  audience: z.string().min(2, "Audience is required.").max(100),
  format: z.enum(["short", "long"])
});

export const analyzeOutputSchema = z.object({
  score: z.number().min(0).max(100),
  analysis: z.array(z.string()).min(1),
  improvements: z.array(z.string()).min(1),
  hook: z.string().min(5)
});

export type AnalyzeInput = z.infer<typeof analyzeInputSchema>;
export type AnalyzeOutput = z.infer<typeof analyzeOutputSchema>;
