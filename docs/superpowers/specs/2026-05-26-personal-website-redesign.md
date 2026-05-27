# Personal Website Redesign
**Date:** 2026-05-26
**Status:** Approved, pending implementation

---

## Overview

Redesign osamabadr's portfolio as a personal website. The shift from "portfolio" to "personal website" changes the framing from "hire me" to "here's who I am and what I'm building." Projects become the primary content; professional experience supports rather than leads.

**Positioning throughline:** Systems thinker who makes products work at scale and builds the ones that don't exist yet. This serves both target audiences — QA/Product Ops HMs (see: Meta experience, pipeline thinking) and Product Engineering HMs (see: 3 real shipped products, 0-1 ownership) — without requiring separate positioning for each.

**Primary audience:** QA/Product Ops and Product Engineering hiring managers. Site will be linked on resume and LinkedIn.

---

## Architecture

### Current
```
index.html        (Work + Projects tabs on one page)
about.html
osama_portfolio.html  (legacy, unused)
```

### New
```
index.html              Hub: hero + project cards + professional section + footer
about.html              Stays mostly as-is, minor copy tightening
projects/
  pointd.html           pointd case study
  bip.html              BIP case study
  qa-agent.html         qa-agent case study
```

No framework change. Static HTML/CSS/vanilla JS throughout. Existing color system, typography, and animation patterns carry over.

---

## Home Page (`index.html`)

### Hero
Replaces the current tabbed structure. No tabs on the home page.

- Name: small, secondary — not the dominant element
- Primary headline: captures the throughline across QA/ops and building. Working copy: *"I've spent 6 years making sure products work at scale. Now I'm building the ones that don't exist yet."* Final copy to be finalized during implementation.
- Sub-line: role descriptor — Senior QA / Product Ops at Meta · Builder
- Two CTAs:
  - "What I'm building" → smooth scrolls to projects section
  - "My background" → smooth scrolls to professional section
- Remove: stats strip from hero position. Stats absorbed into the professional section where they carry more context.

### What I'm Building (Projects Section)
Replaces the current Projects tab. Three project cards in this order:

**Order rationale:** pointd (most polished, strongest product story) → qa-agent (most technical, bridges professional and personal) → BIP (vision-stage, honest about it)

Each card contains:
- Project name + logo/favicon
- Status badge: Active / Early Access / In Progress
- One-line problem statement (not a feature list or stack)
- 1-2 screenshots inside a browser frame mockup
- "Read the story →" link to dedicated project page

Cards are not expandable in place. They link out. The home page is a hub, not a case study dump.

### Where I've Operated (Professional Section)
Replaces the current Work tab. Not a timeline. Four highlight blocks, each leading with a bolded outcome followed by 1-2 sentences of context.

**Highlight blocks:**

1. **AI-driven bug fix pipeline** — Built and scaled an AI-led workstream that analyzed, triaged, and verified bug fixes across 500+ issues. Designed for repeatability — it eventually ran autonomously across the entire org with no manual coordination.

2. **Golden Path program** — Drove quality signal across VR by designing a user journey program that generated 2,600+ survey responses, giving the org a consistent feedback loop across product areas.

3. **QA coverage systems** — Owned test coverage across 47 product areas and 3,000+ test cases, including cross-platform and release readiness for VR/MR hardware launches.

4. **VR release readiness** — Managed oncall operations and release gate decisions for VR Engagement, including 490+ oncall-tagged bugs and cross-platform integration testing across hardware generations.

Followed by a single attribution line: "5+ years at Meta Reality Labs · Senior PQA" with link to LinkedIn or resume download.

### Footer
Email · LinkedIn · GitHub. No clutter.

---

## Project Pages

Shared structure across all three pages. Same nav as home page. Same color system and typography.

### Section structure (each page)
1. **Hook** — What it is and what problem it solves. 2 sentences max. Leads with impact or insight, not features.
2. **The problem** — First-person account of why this exists. The gap in the market or the personal pain point.
3. **Key decisions** — 2-3 specific choices made during building, with reasoning. Not a feature list.
4. **Screenshots** — Annotated, spread through the page. Browser frame mockups where applicable.
5. **Where it stands** — Honest current state + what's next. In-progress is fine.
6. **Meta connection** (where relevant) — How professional experience shaped how it was built.

---

### pointd (`projects/pointd.html`)

**Hook:** A travel rewards optimizer that shows you where your points can take you — across all your programs, in one place.

**The problem:** The existing tools treat points like a booking problem. They list rates and programs and leave the math to you. The actual problem is that people sit on points for years — they know they're valuable, but the complexity of redemption sends them straight back to cash. User interviews surfaced a consistent pattern: curiosity → complexity → abandonment → cash fallback. pointd is built around the discovery question: "where can I go with what I have?" Not "how do I book."

**Key decisions:**
- Discovery-first, not booking-first — show destinations before rates, reduce the cognitive load of the first interaction
- Cross-program balance aggregation — user adds their programs once, everything is calculated from their actual balances
- Transfer partner logic — surfaces "via transfer" options that most users don't know exist, which is where the real value is

**Screenshots to use:**
- Gate page (early access, "Your points are worth more than you think")
- Explore grid (destination cards with points/night + via transfer badges)
- Taipei detail view (hotel list + map with price bubbles)

**Pull quote:** *"curiosity → complexity → abandonment → cash fallback"* — from user interviews, displayed as a standalone quote in the problem section.

**Where it stands:** Early access, MVP in active development. Supports 13 programs. Booking integration coming.

---

### qa-agent (`projects/qa-agent.html`)

**Hook:** A QA agent that runs on every PR and flags coverage gaps before they merge — so nothing slips through when you're building fast.

**The problem:** Building quickly with AI assistance creates a specific blind spot — you ship a lot of code, tests pass, but coverage logic hasn't kept up with what actually changed. qa-agent was built out of necessity while building pointd and BIP: a second set of eyes on every PR that checks not just whether tests pass, but whether the right things are being tested.

**Key decisions:**
- GitHub Actions hook — runs automatically on every PR, no manual trigger needed
- 6-step pipeline: diff analysis → risk scoring → coverage gap detection → test proposals → execution → synthesis
- Report format that flags WARN vs. PASS, proposes specific missing tests, and files them as GitHub issues for review
- Built to eventually support simulator-based manual testing flows — the same methodology used at Meta Reality Labs for VR/MR hardware testing

**Screenshots to use:**
- GitHub Actions sidebar (3 workflows: PR, Re-run Failed Tests, Regression)
- Workflow run history (158 runs, each tied to a PR)
- QA Agent Report — WARN state showing test results table, coverage gaps list, and proposed tests

**Meta connection:** The simulator-based manual testing expansion is a direct carry from Meta — the same approach used for VR/MR hardware QA, now being adapted for web products.

**Where it stands:** Active, deployed in both pointd and BIP repos. 158+ runs. Regression and re-run workflows also live.

---

### BIP (`projects/bip.html`)

**Hook:** A platform for builders to share what they shipped — connected to your GitHub and Claude Code sessions so you don't have to write it yourself.

**The problem:** Building in public is consistently good advice but manually painful. Writing a tweet about what you shipped after a long build session is the last thing you want to do. BIP started as a tool to solve that personally — connect to what you built that day, generate the post.

**Key decisions:**
- MCP server + Claude skill integration — connects directly to GitHub and Claude Code sessions so the agent can see what was actually worked on, not just what you remember
- Summarization layer first — generate the note before worrying about distribution; validate the core loop before adding social connections
- Open but unannounced — live and accessible, not being promoted until the core experience is solid

**Vision:** The longer arc is a feed where builders share fragments of what they've built — not just text posts, but interactive prototypes and features that other people can try directly in the feed. That's the eventual product. Current state is the summarization and generation layer.

**Screenshots to use:**
- Build Log page — daily activity captured automatically, "summarized" badge, project tags (BIP/qa-agent/pointd.fyi), AI-written note, "Publish to profile" CTA
- Settings page — 3-step setup flow (Connect GitHub → Connect BIP MCP → Generate + publish), "What BIP can see" transparency section, active integrations (GitHub + BIP MCP)
- Profile/Activity page — public profile (@badro), activity feed grouped by week, project-tagged build log entries

**Where it stands:** Live but in active development. Summarization and post generation working. Social publishing and the feed are next.

---

## About Page

Minor updates only:
- Tighten hero copy to align with the new positioning (systems thinker + builder)
- No structural changes to hobbies section or journey timeline — those are working

---

## What Is Not Changing

- Color system (warm beige + orange accent)
- Typography (DM Serif Display + DM Sans + DM Mono)
- Animation patterns (IntersectionObserver fade-in, micro-interactions)
- About page structure
- Cloudflare Pages deployment

---

## Content Still Needed

- BIP screenshots (provided — build log, settings, activity feed)
- Final hero headline copy (to be written during implementation)
- Resume PDF link or decision on linking to LinkedIn instead

---

## Success Criteria

- Home page communicates positioning in under 5 seconds
- Each project tells a problem → decision → outcome story with visuals
- Professional section establishes credibility without reading like a resume
- Site works as a leave-behind on a resume and a LinkedIn link
- No "coming soon" labels anywhere — in-progress projects are framed as active work, not placeholders
