# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

piratejobs — part of the agent-dream-team (사업 능숙팀). A Next.js application with TypeScript and Tailwind CSS.

## Commands

- `pnpm dev` — Start dev server (Turbopack, http://localhost:3000)
- `pnpm build` — Production build
- `pnpm start` — Serve production build
- `pnpm lint` — Run ESLint (flat config with core-web-vitals + typescript rules)

## Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`
- **Package manager:** pnpm
- **Linting:** ESLint 9 flat config (`eslint.config.mjs`)

## Architecture

- `app/` — Next.js App Router. `layout.tsx` is the root layout, `page.tsx` is the home route.
- `src/agents/` — 8-agent business team system (see below)
- `public/` — Static assets served at `/`
- Path alias `@/*` maps to the project root (configured in `tsconfig.json`)

## Agent System (사업 능숙팀)

The core of the project is an 8-agent team in `src/agents/`. Each agent has a Korean persona (`nameKo`, `descriptionKo`, `tone`) and a `systemPrompt` in Korean. All agents implement the `AgentConfig` interface from `types.ts`.

| ID | 한글 이름 | Role |
|---|---|---|
| `strategy` | 전략 총괄 | Business strategy & cross-functional coordination |
| `market-analysis` | 시장 분석가 | Market research, trends & competitive intelligence |
| `finance` | 재무 관리자 | Financial planning, budgeting & risk |
| `operations` | 운영 관리자 | Process optimization & resource allocation |
| `marketing` | 마케팅 책임자 | Brand, digital marketing & customer acquisition |
| `sales` | 영업 책임자 | Revenue, client relationships & business development |
| `hr` | 인사 책임자 | Talent, culture & organizational development |
| `tech` | 기술 책임자 | Tech strategy, architecture & product development |

`src/agents/index.ts` exports all agents individually and as `allAgents` array.
