# Portfolio Enhancements — Design Spec
**Date:** 2026-05-28  
**Status:** Approved for implementation

---

## Overview

Four distinct changes to the portfolio site (`github.com/badro98/portfolio`). Static HTML/CSS/vanilla JS — no framework, no build system.

---

## 1. Case Study Image Gallery — Card Fan Interaction

### What
Replace the current 2-up screenshot grid on each project card (`index.html`) with a single hero screenshot that reveals additional screenshots via a scroll-triggered card fan animation.

### Behaviour
- **Resting state**: Cards stacked like a deck — front card fully visible, subsequent cards offset to the right with a slight rotation increase per card (approx. 10–12px horizontal offset, 1–1.5° rotation per card). Tight spacing, not fully fanned.
- **Scroll trigger**: When the project card enters the viewport (IntersectionObserver), the deck fans open slightly — cards spread further right, hinting there's more inside.
- **Hint**: A pulsing orange dot (`var(--accent)`) + label ("X more screenshots") sits below the stack.
- **No click/hover required** — the fan is passive, triggered by scroll. It serves as visual invitation, not navigation.

### Scope
Applies to all 3 existing project cards on `index.html`: pointd (2 screenshots), qa-agent (2 screenshots), BIP (2 screenshots).

### Implementation notes
- Each `.proj-card` currently has a `.proj-screenshots` grid — replace with a `.deck-wrap` container holding stacked `.deck-card` elements.
- CSS handles resting stack state. JS IntersectionObserver adds `.fanned` class to trigger the fan animation.
- Respect `prefers-reduced-motion`: skip animation, show cards in resting state with no transition.
- The detailed screenshot browser-frames on individual case study pages (`projects/*.html`) are unchanged.

---

## 2. New Case Study Page — UX Gap Detection

### What
New case study page at `projects/ux-gap.html`. Fourth project card added to `index.html`. Built around the AI-assisted UX gap coverage workflow Osama built at Meta.

### Home page card
- **Name**: UX Gap Detection  
- **Eyebrow label**: `Meta · AI Tooling`  
- **Status badge**: Active  
- **Cover image**: Light version pipeline diagram (warm `#f4f2ed` background, dot grid, 5-node flow — automated runs → AI analysis → dedup filter → simulator verify → auto filed). Rendered as inline SVG/HTML inside a `.browser-frame`, not a raster image.
- **Card problem copy**: "Automated testing catches regressions. It doesn't catch the UX issues users actually notice. UX Gap Detection runs a multi-bot pipeline on every automated pass, deduplicates against open bugs, and files verified issues automatically."

### Case study page structure
Follows same structure as `pointd.html` / `qa-agent.html` / `bip.html`:

1. **Nav + back-link** — standard
2. **Case hero** — eyebrow: `Project · AI Tooling`, h1: `UX Gap Detection`, lede, status badge (Active — Meta Reality Labs)
3. **Meta row** — Role: Solo builder · Started: Mar 2026 · Status: Active · Stack: Python, Anthropic API, GitHub Actions
4. **The problem** — Automated testing replaced manual QA, but a coverage gap remained: UX issues that pass functional tests but would be noticed by real users. No systematic way to catch them without manual review.
5. **How it works** — the detailed 6-step pipeline diagram (full version with step labels, What descriptions, and the dedup branch). Rendered as styled HTML, not an image.
6. **Key decisions** (3 decision blocks):
   - Decision 01: Bot-per-concern, not one monolith — separate bots for ingestion, analysis, dedup, filing. Each can be updated independently.
   - Decision 02: Dedup before testing — checking against existing bugs before running simulator tests avoids wasting compute on known issues.
   - Decision 03: Auto-file with human review gate — issues are filed automatically but Osama reviews before assigning. Working toward removing this gate for high-confidence issues.
7. **Where it stands** — callout stats (2 apps, full feature suite, ~2 months in, working toward autonomous triage). Stack tags.

### Stack tags
Python · Anthropic API · GitHub Actions · iOS Simulator · Android Emulator

---

## 3. About Page — Background Section Restructure

### What
Replace the current 3-phase animated journey section with a full career timeline in What/Scale/Result format, matching the style of `osama_portfolio.html`. Add a skills grid at the top of the page.

### Skills section (new, top of page)
Positioned above the existing "Outside of work" hobbies block. 4-column grid of skill cards:

| Category | Skills |
|---|---|
| AI + Automation | AI agent development · Agentic workflow design · Prompt engineering · Self-healing test suites |
| Quality + Testing | Release readiness · VR/MR QA · Cross-platform mobile · Exploratory testing · Regression QA |
| Engineering | Python · JavaScript · SQL · GitHub Actions · CI/CD |
| Product + Ops | Cross-functional leadership · Release reporting · Stakeholder alignment · Dogfooding programs |

Accent highlight pills on: AI agent development, Agentic workflow design.

### Background section (replaces 3-phase journey)
Section label: "Background"  
Remove: animated `.journey` timeline with JS IntersectionObserver  
Replace with: static timeline using `.timeline` / `.tl-block` / `.tl-card` / `.wshr` pattern

**Three timeline entries:**

#### Senior Product Quality Analyst · Aug 2024–Present · Meta Reality Labs
Card has two sublabel sections:

*Sublabel: "AI-Native QA transition" (accent-colored)*
- Achievement: "Manual → AI-native testing: full transition"
  - What: Drove the org-wide shift from fully manual offshore testing to AI-native, automated-first QA workflow
  - Scale: 6–7 months pilot to near-full adoption; 2 apps with full feature suite; daily automated runs replacing weekly manual cycles
  - Result: Offshore team replaced by automation; weekly → daily test cadence; VP-level recognition
  - **AI phases sub-table** (4 rows, accent-bordered):
    - 01 · Change-based testing agent — Piloted AI agent extracting recent diffs and surfacing exploratory tests. Onboarded/coached offshore team, owned weekly VP-facing reports.
    - 02 · Manual → automated bridge — Parallel manual + automated testing. Gap analysis, synced with tooling team. ~1.5 months to convergence.
    - 03 · Full automation live — Automated passes replaced offshore manual testing. Daily runs replaced weekly cycles.
    - 04 · UX gap coverage (ongoing) — Multi-bot pipeline: review runs → identify UX issues → dedup → simulator test → auto-file. 2 apps, full feature suite.

*Sublabel: "Quality operations"*
- Achievement: Golden Path user journey program
  - What: Led partnership with internal beta team, UXR, Product Design for structured user journey testing
  - Scale: 2,600+ survey responses; ~400 bugs filed by non-QA testers in a single quarter
  - Result: Turned internal users into structured quality signal contributors
- Achievement: VR Engagement oncall and release readiness
  - What: Primary QA oncall and release gatekeeper for VR companion app on iOS and Android
  - Scale: 490+ oncall-tagged bugs across 47 product areas; 5+ major release signoffs; ~3 years oncall
  - Result: 20% reduction in mis-triaged issues; 40% reduction in production bugs in Meta Horizon Mobile

Tags (accent): AI agent development · Agentic workflows · Test automation  
Tags (standard): Release readiness · Cross-platform QA · iOS + Android

#### Product Quality Analyst · Jul 2021–Aug 2024 · Meta Reality Labs
*Sublabel: "Coverage and scale"*
- Achievement: Multi-team QA across Meta Quest and VR companion apps
  - What: Test coverage across VR Engagement, VR Regression, RayBan Stories QA
  - Scale: 2,000+ regression issues verified; 300+ launch-blocking bugs; 3,000+ test cases managed
  - Result: Faster bug resolution ahead of key launches; optimized verification pipelines
- Achievement: Major feature launch testing
  - What: Led testing for Reels in VR, Home Feed redesign, VR Search refresh
  - How: Coordinated onshore/offshore coverage; improved pre-launch verification pipelines
  - Result: Smooth rollouts with timely issue resolution on all three launches

Tags: VR/MR testing · Regression QA · Launch readiness · RayBan Stories · Offshore coordination

#### QA Playtester / Product Specialist · Oct 2020–Jul 2021 · Meta Reality Labs (Remote)
*Sublabel: "Initiative"*
- Achievement: Ray-Ban Stories beta and dogfooding program
  - What: Designed and ran internal beta testing + dogfooding program for Ray-Ban Stories hardware launch
  - Scale: 134 users over 5 weeks; 40+ pre-production devices; 300+ pre-launch bugs surfaced
  - Result: Improved pre-release stability; structured feedback directly informed pre-launch improvements

Tags: Hardware QA · Beta program design · Dogfooding · Device management

### What stays
- Hero section (eyebrow, name, title, contact links)
- "Outside of work" hobbies block
- "What I'm looking for" section
- Footer

### Page section order (after changes)
1. Hero (eyebrow, name, title, contact links)
2. Skills grid (new)
3. Outside of work (hobbies — unchanged)
4. Background (new timeline, replaces journey)
5. What I'm looking for (unchanged)
6. Footer

### What's removed
- 3-phase `.journey` animated timeline and its JS

---

## 4. Home Page — Stat Strip

### What
Add a stat strip between the "Where I've operated" section label and the existing `.highlight-grid`.

### Stats (5 cells)
| Number | Label |
|---|---|
| 5+ | Years at Meta Reality Labs |
| 2,000+ | Regression bugs verified |
| 500+ | AI fix workstream bugs |
| 3,000+ | Test cases managed |
| 47 | Product areas covered |

### Implementation notes
- Use same `.stat-strip` / `.stat` / `.stat-num` / `.stat-label` pattern from `osama_portfolio.html`.
- Sits inside the existing `#background` section, between `.section-label` and `.highlight-grid`.
- Responsive: `grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))` — collapses gracefully on mobile.

---

## Out of scope (separate tasks)
- Portfolio review fixes (resume link, phone number visibility, "no account needed" copy on pointd, status inconsistency on pointd meta row)
- `osama_portfolio.html` legacy file deletion
- Shared case study CSS deduplication
- BIP inline style overrides
