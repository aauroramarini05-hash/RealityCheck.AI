import Link from "next/link";
import { AppShell } from "@/components/ui/shell";

export default function LandingPage() {
  return (
    <AppShell>
      <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="animate-in fade-in duration-700">
          <p className="label-muted mb-4 inline-flex rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-indigo-200">Creator Intelligence Platform</p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">Test Your Video Idea Before You Waste Time</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">Get a clear virality signal, direct critique, and a refined hook before you spend hours scripting or editing.</p>
          <Link href="/dashboard" className="mt-8 inline-flex items-center rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-900/40 transition duration-200 hover:scale-[1.02] hover:bg-indigo-400">Analyze Idea</Link>
        </div>

        <div className="surface surface-hover animate-in fade-in slide-in-from-bottom-3 duration-700 p-6 sm:p-7">
          <p className="label-muted">Preview Result</p>
          <p className="mt-3 text-5xl font-bold tracking-tight text-white">84</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">Strong click potential with good specificity. Improve audience language and tension framing to maximize CTR.</p>
          <div className="mt-5 space-y-2 text-sm text-slate-300">
            <p>• Add a direct audience qualifier.</p>
            <p>• Lead with urgency in first five words.</p>
            <p>• Keep promise measurable and concrete.</p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
