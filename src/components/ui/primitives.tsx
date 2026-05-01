import type { TextareaHTMLAttributes, SelectHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur-xl ${className}`} {...props} />;
}

export function Label({ className = "", ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`text-xs font-medium uppercase tracking-[0.14em] text-slate-400 ${className}`} {...props} />;
}

export function InputArea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`w-full rounded-2xl border border-white/15 bg-slate-950/70 p-4 text-sm text-slate-100 outline-none transition focus:border-indigo-300/70 focus:ring-2 focus:ring-indigo-400/30 ${className}`} {...props} />;
}

export function SelectField({ className = "", ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={`w-full rounded-xl border border-white/15 bg-slate-950/70 p-3 text-sm outline-none transition focus:border-indigo-300/70 focus:ring-2 focus:ring-indigo-400/30 ${className}`} {...props} />;
}

export function PrimaryButton({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.01] hover:bg-indigo-400 disabled:opacity-60 ${className}`} {...props} />;
}
