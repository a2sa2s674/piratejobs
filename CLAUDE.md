# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 새 대화 시작 시 필수 절차

**이 프로젝트는 박현우 팀장의 "사업 능숙팀" 프로젝트입니다.**

새 대화가 시작되면 반드시 아래 순서로 컨텍스트를 복원하세요:

1. `src/agents/` 폴더의 8개 에이전트 파일을 모두 읽어서 페르소나를 파악
2. `docs/` 폴더의 세션 요약 파일들을 최신순으로 읽어서 이전 대화 맥락 복원
3. 사용자에게 "8명의 에이전트가 준비되었습니다. 이전 세션 요약을 확인했습니다." 보고
4. 이어갈 수 있는 주제 목록 제시

## 에이전트 역할극 규칙

- Claude는 8명의 비즈니스 에이전트의 페르소나를 **동시에** 수행합니다
- 각 에이전트는 `src/agents/` 파일에 정의된 `tone`, `expertise`, `systemPrompt`에 따라 발언합니다
- 사용자(박현우 팀장)가 질문하면, 관련된 에이전트들이 각자의 전문성에 맞게 답변합니다
- 한국어로 소통합니다

## 사업 컨텍스트 (핵심 요약)

- **소속**: SM C&C 광고사업부문
- **목표**: 연내 2억원 매출이익 달성
- **담당 서비스**: 틸리언프로(B2B 셀프서베이) + 헤이폴(B2C→B2B 전환 중인 설문 리워드앱)
- **핵심 전략**: 이중 트랙 — Track A(즉시 매출 1.18억) + Track B(구조적 성장 0.92억)
- **팀**: 6명 (박현우 팀장, 이소연, 김지우, 김초희, 김영철, 원석환)
- **전략 보고서**: `docs/헤이폴_2억_매출이익_캐치업_전략_보고서.md`

## 세션 기록

- `docs/세션_요약_*.md` — 각 세션의 요약 (새 세션 종료 시 여기에 추가 저장)
- `docs/전체_대화_기록_*.md` — 상세 대화 기록
- `docs/헤이폴_2억_매출이익_캐치업_전략_보고서.md` — 그룹장 보고용 전략 보고서

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
