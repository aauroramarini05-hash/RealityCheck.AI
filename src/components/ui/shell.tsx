import Link from "next/link";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_0%,_rgba(99,102,241,0.2),_transparent_38%),radial-gradient(circle_at_85%_10%,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_50%_100%,_rgba(16,185,129,0.08),_transparent_30%)]" />
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-base font-semibold tracking-tight transition hover:text-indigo-200 sm:text-lg">RealityCheck AI</Link>
          <Link href="/dashboard" className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium transition hover:scale-[1.02] hover:bg-white/[0.08]">Dashboard</Link>
        </nav>
      </header>
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">{children}</main>
    </div>
  );
}
