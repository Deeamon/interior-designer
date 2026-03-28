# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interior Designer — a React 19 + TypeScript + Vite 8 single-page application. Uses `react-router` for routing. Currently in early setup (scaffolded from the Vite React-TS template).

## Commands

- **Dev server:** `npm run dev` (Vite with HMR)
- **Build:** `npm run build` (runs `tsc -b && vite build`, output in `dist/`)
- **Lint:** `npm run lint` (ESLint with TypeScript + React Hooks + React Refresh rules)
- **Preview production build:** `npm run preview`
- **Install deps:** `npm install` (uses package-lock.json; yarn.lock also present)

## Architecture

- **Entry:** `index.html` → `src/main.tsx` → `<App />` (rendered into `#root` with StrictMode)
- **Routing:** `react-router` v7 (not yet wired up — dependency installed but no routes configured)
- **Styling:** Plain CSS (`src/index.css`, `src/App.css`)
- **Static assets:** `public/` for global assets (favicon, icons SVG); `src/assets/` for imported assets

## TypeScript Config

- Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`
- Target ES2023, module ESNext with bundler resolution
- Separate configs: `tsconfig.app.json` (src code) and `tsconfig.node.json` (Vite/build tooling)
