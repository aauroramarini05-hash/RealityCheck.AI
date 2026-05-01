"use client";

export function CircularScore({ score }: { score: number }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <svg className="h-40 w-40 -rotate-90" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={radius} stroke="currentColor" strokeWidth="10" className="text-white/10" fill="none" />
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className="text-indigo-400 transition-all duration-700"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-5xl font-bold tracking-tight text-white">{score}</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">Virality</p>
      </div>
    </div>
  );
}
