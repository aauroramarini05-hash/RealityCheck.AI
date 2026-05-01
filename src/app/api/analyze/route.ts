import { NextResponse } from "next/server";
import { analyzeIdea } from "@/lib/analysis/analyzer";
import { analyzeInputSchema, analyzeOutputSchema } from "@/lib/types/analysis";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = analyzeInputSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid request payload.",
          details: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const result = await analyzeIdea(parsed.data);
    const output = analyzeOutputSchema.parse(result);

    return NextResponse.json(output, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to process analysis request.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
