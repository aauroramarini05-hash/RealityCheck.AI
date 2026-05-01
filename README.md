# RealityCheck AI

A production-grade full-stack application for validating YouTube ideas before production.

## Stack
- Next.js (App Router)
- TypeScript
- TailwindCSS
- Shared API endpoint consumed by Web App + Chrome Extension

## UX Surfaces
1. Landing page (`/`) with premium SaaS hero, CTA, and preview result card.
2. Dashboard (`/dashboard`) for entering idea + audience and triggering analysis.
3. Results (`/results`) with virality score visualization, critical feedback, improvements, and optimized hook.

## Core Architecture
- `src/lib/analysis/analyzer.ts`: single source of analysis logic.
- `src/app/api/analyze/route.ts`: shared backend endpoint.
- `src/lib/types/analysis.ts`: shared schemas and contracts.
- `extension/`: Chrome extension popup that calls the same `/api/analyze` API.

## Run
```bash
npm install
npm run dev
```
