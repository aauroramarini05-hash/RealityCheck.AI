"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/ui/shell";
import { Card, Label, PrimaryButton } from "@/components/ui/primitives";
import type { AnalyzeOutput } from "@/lib/types/analysis";
import { ANALYSIS_RESULT_KEY } from "@/lib/state/result-store";
import { CircularScore } from "@/components/circular-score";

export default function ResultsPage() {
  const [payload, setPayload] = useState<{ result: AnalyzeOutput; idea: string; audience: string } | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem(ANALYSIS_RESULT_KEY);
    if (raw) setPayload(JSON.parse(raw));
  }, []);

  if (!payload) {
    return (
      <AppShell>
        <Card className="p-6">
          <p className="text-slate-200">No analysis found. Start from dashboard.</p>
          <Link href="/dashboard"><PrimaryButton className="mt-4">Go to Dashboard</PrimaryButton></Link>
        </Card>
      </AppShell>
    );
  }

  const { result, idea, audience } = payload;

  return (
    <AppShell>
      <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
        <Card className="p-6">
          <Label>Virality Score</Label>
          <div className="mt-3 flex justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 p-4"><CircularScore score={result.score} /></div>
          <p className="mt-5 text-sm text-slate-300">Audience: {audience}</p>
          <Label className="mt-3">Original Idea</Label>
          <p className="mt-2 text-sm leading-relaxed text-slate-200">{idea}</p>
        </Card>

        <section className="space-y-4">
          <Card className="p-6"><h2 className="text-lg font-semibold">Critical Feedback</h2><p className="mt-2 text-sm leading-relaxed text-slate-300">{result.analysis.join(" ")}</p></Card>
          <Card className="p-6"><h2 className="text-lg font-semibold">Improvements</h2><ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300">{result.improvements.map((item) => <li key={item}>{item}</li>)}</ul></Card>
          <Card className="border-indigo-300/30 bg-indigo-500/10 p-6"><h2 className="text-lg font-semibold text-indigo-100">Hook Generator</h2><p className="mt-2 text-sm leading-relaxed text-indigo-100">{result.hook}</p></Card>
        </section>
      </div>
    </AppShell>
  );
}
