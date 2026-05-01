"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/ui/shell";
import { Card, InputArea, PrimaryButton, SelectField } from "@/components/ui/primitives";
import { requestIdeaAnalysis } from "@/lib/api/client";
import { ANALYSIS_RESULT_KEY } from "@/lib/state/result-store";

const audiences = ["General", "Beginners", "Intermediate Creators", "Experts", "Business Audience"];

export default function DashboardPage() {
  const [idea, setIdea] = useState("");
  const [audience, setAudience] = useState(audiences[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleAnalyze = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await requestIdeaAnalysis({ idea, audience, format: "long" });
      sessionStorage.setItem(ANALYSIS_RESULT_KEY, JSON.stringify({ result, idea, audience }));
      router.push("/results");
    } catch {
      setError("Unable to analyze right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppShell>
      <Card className="mx-auto w-full max-w-3xl p-5 sm:p-7">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Idea Dashboard</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">Paste your concept, choose audience, then run analysis.</p>

        <form onSubmit={handleAnalyze} className="mt-6 space-y-4">
          <InputArea placeholder="Paste your YouTube idea..." value={idea} onChange={(e) => setIdea(e.target.value)} minLength={10} required className="sm:min-h-40" />
          <SelectField value={audience} onChange={(e) => setAudience(e.target.value)}>{audiences.map((item) => <option key={item}>{item}</option>)}</SelectField>
          <PrimaryButton disabled={loading} className="w-full">{loading ? "Analyzing..." : "Analyze"}</PrimaryButton>
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
        </form>
      </Card>
    </AppShell>
  );
}
