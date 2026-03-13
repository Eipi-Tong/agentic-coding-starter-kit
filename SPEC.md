# Project Spec: Self Portfolio

_Last updated: 2026-03-12_

## Overview

A single-page application self portfolio, including contact information, education, work experience, projects, and skills. All content is driven by JSON files in `src/data/` — no code changes needed to update personal information.

## Tech Stack

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Data:** JSON files in `src/data/`
- **Infra:** Docker + docker-compose, standalone Next.js output
- **Tooling:** Yarn, ESLint

## Features

- [x] Project scaffold (Next.js + TypeScript + Tailwind)
- [x] Contact section (name, title, summary, links)
- [x] Experience section (role, company, dates, bullet points)
- [x] Projects section (name, description, tech stack, links)
- [x] Education section (institution, degree, dates, highlights)
- [x] Skills section (categorized skill tags)
- [x] JSON-driven content (all data in `src/data/*.json`)
- [x] Docker containerization
- [ ] Dark mode support
- [ ] Print / PDF export
- [ ] Accessibility audit

## Changelog

| Date | Commit | Change |
|------|--------|--------|
| 2026-03-12 | — | Initial scaffold |
