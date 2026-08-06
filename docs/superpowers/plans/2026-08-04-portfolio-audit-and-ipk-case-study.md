# Portfolio revision plan — audit fixes, metrics refresh, Interview Prep Kit case study

**Date:** 2026-08-04, revised 2026-08-05 after the internal career-portfolio data landed
**Status:** Draft for review. No site content has been changed.
**Inputs:** the portfolio audit, `Portfolio_Site_Copy_Fixes.md`, the internal career portfolio generated 2026-08-05 (4 screenshots), plus verification against the live repo (`Projects/Portfolio` @ `7bcb87e`, clean, in sync with origin), `Cowork Jobs/config/profile.md`, and the `interview-prep-kit` repo.

---

## 0. What changed on 2026-08-05

The internal career portfolio reset the factual basis for most of this plan. Summary of the delta:

| Site says today | Internal data says | Verdict |
|---|---|---|
| 490+ oncall-tagged bugs | **6,056 distinct defects** worked across ~6 years and ~180 releases | Site undercounts by ~12x. Rate limiting on the original query. |
| 2,000+ regression bugs verified | **4,507 triaged / verified / reproduced for other engineers** (74% of the corpus) | Undercount by ~2x |
| 5+ major release signoffs | On-call quality owner across **~180 app releases** | Undercount by ~36x |
| 500+ AI fix workstream bugs | **~40 agent-generated change sets** | **Conflict — see D9. This is the one that needs your answer.** |
| Nothing about owning an automated suite | Owns an agent-driven e2e suite running **~250 test jobs/day**, **85 code changes authored** | Major omission |
| Nothing about test infrastructure | Extended the test-account provisioning service; root-caused a platform-wide auth failure | Major omission |
| Nothing about shipped internal tooling | Reverse task-search agent shipped as a reusable skill in an internal agent-tooling marketplace | Major omission |

**The strategic read:** the site currently describes a QA analyst who manages test cases and coordinates offshore teams. The internal data describes someone who owns test infrastructure, writes Python services, authors code, and ships agent tooling other people use. Those are different candidates, and the second one is considerably more valuable for the roles in your pipeline. This is now the single biggest change in the plan, bigger than the positioning rewrite.

**Also settles D1:** the internal portfolio says "~6 years" and "2020–2026". Use **6 years** everywhere. Decision closed.

---

## 1. What I verified before planning

Three of the original audit's headline items had already moved before today.

| Audit item | Status |
|---|---|
| 1a "47 product areas" in 51 resume scripts | **Already resolved.** 0 matches left in `Cowork Jobs/scripts/`. `profile.md:40` has the dated correction. The portfolio never had the wrong number. |
| 1b F1 0.97–1.0 on the self-healing framework | **Already resolved.** `profile.md:37` says do not cite it. The only remaining grep hit is "Precision and recall (F1) analysis" in a skills list, which is a real skill, not the claim. |
| 1c UX Gap auto-filing conflict | **Confirmed wrong on the site**, in **six** places, not three. The copy-fixes doc missed the homepage diagram node and the status strip. Full list in PR1. |

Two corrections to `Portfolio_Site_Copy_Fixes.md`:
- It says keep "pointd, BIP, and qa-agent" in the hero sub-line. Your BIP replacement instruction supersedes that.
- Auto-filing is in six locations, not three.

---

## 2. Open decisions

D1 through D8 are from the original plan; D1 is now closed. D9 through D12 are new.

| # | Decision | Recommendation |
|---|---|---|
| ~~D1~~ | ~~Tenure~~ | **Closed.** 6 years, per the internal portfolio. |
| **D2** | **UX Gap current numbers.** The page is a March snapshot: "~2mo in production," "Active · 2 apps." It is month five. | The internal trajectory entry calls it a "scheduled UX-review triage pipeline" you still own in 2026, so it is alive. Confirm the app count, change "~2mo" to "5mo" or drop it for a detection metric. |
| **D3** | **Publishing internal metrics.** | See D11, which supersedes this. |
| **D4** | **Self-healing test framework.** Currently only a skill pill. | The internal data does not mention it by that name, but "test drift" triage and the e2e suite cover the same ground. **Recommend dropping the term** and describing the suite instead. That is better evidenced and removes the last trace of the unverified F1 claim. |
| **D5** | **Resume PDF.** All 24 PDFs in `Cowork Jobs/` are job-tailored. Closest to neutral: `reference/resume_quality_systems.pdf` and `reference/resume_ai_ops.pdf`. | Generate one neutral base PDF **after** the metrics refresh, since the resume should carry the corrected numbers too. Host at `/assets/Osama_Badr_Resume.pdf`. Blocks PR3. |
| **D6** | **BIP page: delete or unlist?** | **Delete** the page, its 3 screenshots, and all 4 cross-links. A dead link reads worse than an absence. BIP surviving as a product is unaffected. Separately: your global `CLAUDE.md` still lists BIP as active and auto-calls `bip_log_activity`. Out of scope, but worth a look. |
| **D7** | **Card order.** BIP sits 4th today. | Interview Prep Kit goes **2nd**, after pointd. Only project with public code, a license, a demo video, and tests. |
| **D8** | **Screenshots.** No IPK images exist in `Portfolio/assets/`. | Capture 3 stills per §5.6. Blocks PR2. |
| **D9** | **"500+ AI fix workstream bugs" vs "~40 agent-generated change sets."** The site claims a 500+ scale AI bug-fix workstream. The internal record says the pilot produced ~40 agent-generated change sets across sharing, media gallery, chat, in-app overlay, and search. These cannot both describe the same thing. | Most likely the 500+ counted defects *reviewed or routed through* the workstream while ~40 were the fixes agents actually produced. If so, say both and label them: "~40 agent-generated change sets" is the harder, more impressive number because it is specific. **If you cannot substantiate 500+, cut it.** It is currently a homepage stat and a highlight block, which makes it the most exposed unverified claim on the site now that auto-filing is being fixed. |
| **D10** | **How far to lean into the engineering profile.** The new data supports a test-infrastructure engineer framing: Python service work, 85 code changes, async GraphQL client, agent shipped to an internal marketplace. Your applications skew support ops and user ops. | **Lean in, without repositioning.** Keep the support/ops "What I'm looking for" copy from PR5, but let the Background section carry the technical depth. A support-ops hiring manager reading that you root-caused a token-scoping bug across a provisioning service does not think "wrong candidate," they think "this one can actually debug." It only becomes a mismatch if the hero starts saying "engineer." |
| **D11** | **Confidentiality boundary.** This came from an internal tool. The internal portfolio itself never names the product, calling it "a consumer mobile companion app for a large-scale VR/social platform." | Mirror that discretion with a simple rule: **publish numbers that describe your output, generalize numbers that describe Meta's product or process health.** So 6,000+ defects worked, 4,507 triaged, 85 code changes, ~250 jobs/day are all yours to publish. "~180 releases" and "15–20% of a daily suite" describe internal cadence and infrastructure, so soften to "across roughly 180 releases" (already vague) and "a block cluster affecting a significant share of the daily iOS suite." Your call, but I would not publish anything that reads as internal telemetry. |
| **D12** | **`profile.md:31` says "NOT: professional SWE experience."** With 85 authored code changes, Python service work on the provisioning service, and an async GraphQL client replacing a subprocess approach, that disclaimer now undersells you. | Change it to something like "not a product SWE by title; substantial production Python in test infrastructure and tooling." Affects the resume pipeline more than the site, so it is a follow-up, not part of these PRs. Flagging because it is currently steering every generated resume. |

---

## 3. PR plan

Six branches, each independently shippable, none over 20 files.

| PR | Branch | Scope | Blocked by |
|---|---|---|---|
| **PR1** | `fix/accuracy-corrections` | Auto-filing rewrite (6 spots), "entire org" claim, tenure consistency | Nothing — ready to ship |
| **PR2** | `feat/interview-prep-kit-case-study` | New case study page, BIP removal, homepage card swap, cross-links, meta tags | D6, D7, D8 |
| **PR3** | `feat/metrics-and-achievements-refresh` | Homepage stat strip, all four highlight blocks, About timeline rebuild | D9, D11 |
| **PR4** | `feat/resume-and-github-links` | Resume download, GitHub link | D5 (and PR3, so the resume carries corrected numbers) |
| **PR5** | `feat/positioning-rewrite` | Hero, "What I'm looking for," customer-facing reframing, Figma, In-World Menu, UX Gap refresh | D2, D4 |
| **PR6** | `feat/writing-section` | Writing section + first posts | Deferred, see §7 |

PR1 and PR2 are unaffected by yesterday's data and can go first. PR3 is now the heaviest and highest-value.

---

## 4. PR1 — Accuracy corrections

Ship first, alone. The only PR where the site currently says something an interviewer could catch.

### 4.1 Auto-filing — six locations

**`index.html:462`** (UX Gap card)
> Automated testing catches regressions. It doesn't catch the UX issues users actually notice. A multi-bot pipeline runs on every automated pass, deduplicates candidates against open bugs, and verifies what's left in simulator before it reaches a human.

**`index.html:507`** — diagram node `Auto<br>filed` becomes `Human<br>review`

**`index.html:510`** — `diag-status`, depends on D2

**`projects/ux-gap.html:174`** (hero)
> A multi-bot pipeline that finds the UX issues automated testing misses. It runs on every test pass, deduplicates against known bugs, and verifies what survives in simulator, so reviewers only see net-new issues that have already been reproduced.

**`projects/ux-gap.html:213`** — same node swap

**`projects/ux-gap.html:247-251`** — Decision 03, retitle and rewrite:
> **Decision 03 — Propose, don't auto-act**
>
> The original design filed confirmed issues automatically. Engineering pushed back: a pipeline that writes into their queue without a human in the loop is a trust problem before it's a tooling problem, and they were right. I pulled auto-filing and repositioned the pipeline around what it was actually best at, which was deduplication and simulator verification. It now hands reviewers a short list of net-new issues that have already been reproduced, instead of filing on their behalf. Less autonomous, considerably more used.

**`projects/ux-gap.html:291-299`** — collapse Steps 05 and 06 into one:
> **Step 05 — Package for review**
> Verified issues are packaged with title, reproduction steps, and severity pre-populated, then routed to the right product area for a human to file and assign.

Delete "Working toward full autonomous triage — manual review currently required for edge cases and account-gated flows." The pipeline drops from 6 steps to 5, so `ux-gap.html:310` changes to 5.

### 4.2 "Entire org" claim — `index.html:562`
Superseded by PR3, which rewrites this block entirely. If PR3 slips, ship this interim version:
> Designed for repeatability, so the same review and scoring process could be handed to other teams without me in the loop.

### 4.3 Tenure
`index.html:553` stat "5+" becomes "6". Hero and footer already say 6 years.

---

## 5. PR2 — Interview Prep Kit case study

### 5.1 Why it earns a case study

Everything else on the site is something you built. This is the only one where the *build process* is the evidence: five stacked PRs under 20 files each, 110 tests written into a repo that had zero, your own QA agent run on every PR, and a live-data migration that could not afford to lose anything. For a quality role that process story outperforms the feature list.

Honest constraint: **0 stars, 0 forks.** Nothing in the copy claims adoption or users. It is framed as "open source and usable," not "used by people."

### 5.2 Page metadata

| Field | Value |
|---|---|
| Path | `projects/interview-prep-kit.html` |
| Eyebrow | `Project · Open Source` |
| Title | Interview Prep Kit |
| Hero badge | `github.com/badro98/interview-prep-kit ↗` (same treatment as BIP's `usebip.dev` badge at `bip.html:95`) |
| Pills | Open Source · AI · Developer Tools |
| Role | Solo — design, build, QA |
| Started | Jun 2026 |
| Status | Open source · MIT |
| Stack | React, Vite, Express, Gemini API |
| TOC | Problem → First version → What broke → Decisions → How it works → Where it stands |

### 5.3 Draft copy

**Hero summary**
> A local-first app for prepping across multiple interviews at once. It reads your resume and each job description, then generates stage-by-stage prep docs, a behavioral flashcard deck, and an audio coach that scores how you actually answer out loud. You bring your own API key, and nothing leaves your machine.

**The problem**
> I was interviewing for several roles at once and my prep was scattered across four places: notes in Google Docs, practice questions in a Claude thread, job descriptions in tabs, and stories I kept rewriting from scratch. Every session started the same way, re-explaining which company I was interviewing with and hoping I was in the right project.
>
> The actual problem wasn't note-taking. It was grounding. Good prep depends on the model knowing your real experience and the real job posting at the same time, and I was rebuilding that context by hand every single time.

**The first version**
> I built the first version in under 24 hours in Cursor, the night before an interview. One job, hardcoded into a config file. Context files on disk. Prep docs generated by pasting a prompt into an AI IDE and committing the output.
>
> It worked. I used it for that interview and it was better than what I had been doing. But it was a tool with exactly one user and exactly one job in it.

**What broke**
> Two things broke at the same time.
>
> First, I had three live interviews running in parallel and the app could only hold one. Everything lived in flat browser keys with no namespace, so a second job would have overwritten the first: one flashcard deck, one set of prep docs, one advisor history. Prep for Company A and prep for Company B were the same storage.
>
> Second, when I went to open-source it, the setup instructions were "clone the repo, edit a config file, then run a prompt inside Cursor or Claude Code to generate your docs." That's a fine workflow if you already live in an AI IDE. It excludes everyone else, and it meant the first five minutes of using the app were spent editing JavaScript instead of prepping.
>
> So the real question was: how do you turn a personal tool into something a stranger can use in five minutes, without adding a backend, without asking for an account, and without anyone's resume leaving their own machine?

**Key decisions**

> **Decision 01 — Browser storage, not a server**
> A server-backed version would have been easier to build and would have killed the main promise. The whole pitch is that your resume and interview notes stay on your machine, and the moment there's a database there's a thing to trust. IndexedDB and localStorage behave identically on localhost and on a static host, so the app stays deployable without ever gaining a backend. Everything goes through one storage adapter module, so if cross-device sync is ever worth it, it slots in behind that interface instead of touching every feature.

> **Decision 02 — Migration before features**
> The first PR shipped no visible features. It moved every flat storage key into a job namespace and wrote a versioned migration for it. I was running my own live prep data in this app while rebuilding it, so a migration bug meant losing real work the week of real interviews. The migration is idempotent, non-destructive, and keeps the old keys until the new write is confirmed. Boring, and the reason nothing was lost.

> **Decision 03 — One profile, attached by reference**
> Your resume and stories don't change per job, but the tailoring does. So the profile lives once and each job attaches the entries it needs by reference, meaning an edit to your resume propagates everywhere automatically. When a job needs a tailored version, "detach and edit" copies the content into that job and breaks the link. Same pattern as an override on a base config, applied to prep material.

> **Decision 04 — Generation in the app, not in an AI IDE**
> The original flow required an AI coding assistant to write your prep docs. I moved generation into an onboarding wizard: name, profile, job, stages, attach context, generate. For anyone without an API key, paste mode copies the assembled prompt to your clipboard and takes the reply back, so the app still works with nothing but a browser and a chat window. The old prompt-driven path stayed in the README as a power-user route rather than the default.

> **Decision 05 — Five small PRs, QA'd like production**
> The rebuild touched storage, routing, onboarding, settings, and docs. I split it into five stacked PRs, each under 20 files, and ran my own qa-agent against every one before merging. The repo had zero tests when this started and 110 by the end, covering the storage adapter, the migration, profile attach/detach, and context assembly. That's the part I'd point at in an interview: not that the app works, but that I treated a side project like something that could break someone's week.

**What went wrong** (short callout in the same voice)
> Worth recording: merging the stack itself broke. Running `gh pr merge --delete-branch` on a base branch made GitHub **close** the child PR instead of retargeting it, because the branch it was based on no longer existed. Recovery meant recreating the deleted branch at its old head, reopening the PR, retargeting it to main, then deleting the branch again. The fix for the rest of the stack was to merge without deleting, retarget the next PR explicitly, then clean up. A pipeline problem, not a code problem, which is usually where these live.

**How it works** (six `.pd-row` entries)

| Surface | What it does |
|---|---|
| Prep Docs | One doc per interview stage, editable and regeneratable on demand |
| Flashcards | Behavioral deck with AI coaching on the answer you actually gave |
| Audio | Record an answer, transcribe it, score structure and delivery |
| Advisor | Multi-turn chat that proposes new flashcards and context updates |
| Context | Paste, upload markdown or PDF, or pull a job description from a URL |
| Jobs | Switch between jobs; each keeps its own docs, deck, history, and recordings |

**Where it stands**
> Public, MIT licensed, and runnable in about two minutes with a free Gemini key. Twelve merged PRs, 110 tests, and a sample setup with demo data so you can see the whole flow before entering anything real.
>
> Deliberately unfinished: server-side transcription still falls back to the config's default job rather than the active one, there's no component-level test coverage, and I haven't put a hosted version up. All three are known and written down rather than discovered later.

**Stat callout** (`.meta-callout`): 12 Merged PRs · 110 Tests · MIT Open source

### 5.4 BIP removal — exact touch points

| File | Change |
|---|---|
| `index.html:7,12,20` | Meta/OG/Twitter descriptions: "pointd, BIP, and QA-Agent" becomes "pointd, QA-Agent, and Interview Prep Kit" |
| `index.html:384` | Hero sub-line: swap BIP link for Interview Prep Kit |
| `index.html:517-544` | Delete BIP card, insert IPK card at position 2 per D7 |
| `about.html:506` | "Building pointd, BIP & qa-agent" becomes "Building pointd, qa-agent & Interview Prep Kit" |
| `projects/bip.html` | Delete per D6 |
| `pointd.html`, `qa-agent.html`, `ux-gap.html` | Replace BIP in each "More projects" grid with IPK |
| `assets/screenshots/bip-*.png` | Delete 3 files |
| `NOTES.md` | Update the page inventory (currently lists 5 pages including bip.html) |

### 5.5 Homepage card copy
> Prepping for several interviews at once means rebuilding the same context in a new chat every time. Interview Prep Kit keeps your resume, each job description, and your stories in one place, then generates the prep docs, flashcards, and audio coaching from them. Local-first, open source, bring your own key.

### 5.6 Screenshot shot list (blocks this PR)

1. **Onboarding wizard, stage-picker step** — proves setup happens in-app, not in a config file, which is the whole point of the rebuild
2. **Prep Docs tab with the job switcher open** — shows multi-job, the core feature
3. **Audio tab mid-scoring** — the most distinctive surface, and nothing else on the site resembles it

Use the demo persona (the *Office* sample data), not real company names from your live pipeline. Optional: reuse `demo/demo-walkthrough.mp4` the way `pointd.html` embeds its demo video.

---

## 6. PR3 — Metrics and achievements refresh

The heaviest PR and the one with the most upside. Three surfaces.

### 6.1 Homepage stat strip — `index.html:552-558`

Current strip is five volume stats, two of which are wrong by an order of magnitude and one of which (500+) may not be substantiable. Proposed replacement:

| Current | Proposed | Why |
|---|---|---|
| 5+ Years at Meta Reality Labs | **6** Years at Meta Reality Labs | Per closed D1 |
| 2,000+ Regression bugs verified | **6,000+** Defects worked | The real corpus figure. Replaces two undercounted stats with one accurate one. |
| 500+ AI fix workstream bugs | **~250** Automated test jobs / day | Pending D9. This swap removes the shakiest claim and replaces it with the strongest unrepresented fact: you own a running system. |
| 3,000+ Test cases managed | **40%** Reduction in production bugs | The audit's outcome-stat point, and the strip badly needs one non-volume number. |
| 10+ Product areas covered | **85** Code changes authored | Directly answers "can he actually build?" for AI-tooling roles. |

That is five stats with one outcome metric, one ownership metric, one engineering metric, and no undercounts. If you want to keep 10+ product areas, drop "40%" here since it also appears in the About timeline.

### 6.2 Homepage highlight blocks — `index.html:559-576`

All four need rewriting. Current set is AI bug fix pipeline / Golden Path / QA coverage systems / VR release readiness. Proposed:

> **Owns an AI-agent-driven end-to-end test suite**
> Designed and consolidated the automated regression suite for a consumer mobile app on Android and iOS, executed by AI test agents across real devices, emulators, and simulators. Roughly 250 test jobs a day, with every result triaged into product bug, test drift, or infrastructure block.

> **Root-caused a platform-wide test authentication failure**
> Traced a long-standing "access denied" error that was silently blocking a large share of the iOS automated suite, through the account-provisioning service and identifier mapping down to a single incorrect constant. Restored the blocked coverage, and the same analysis disproved a reported quality regression as sampling variance rather than a real product change.

> **Built the test-account provisioning infrastructure**
> Extended the provisioning service to support feature-flag enrollment by default, minor and youth account pairs, and propagation-aware waits. Unblocked whole categories that had never been testable: age-restricted flows, parental controls, and onboarding paths.

> **Release quality and on-call ownership**
> On-call quality owner across roughly 180 releases: triaging incoming defects, verifying launch-blocking fixes, rerouting mistriaged reports, and signing off releases. 6,000+ distinct defects worked, 4,500+ of them triaged or fix-verified for other engineers.

Notes on what this changes:
- The **"entire org" problem disappears** because the block that contained it is gone. PR1's interim fix becomes unnecessary if PR3 ships close behind.
- **Golden Path drops off the homepage** and stays on About. It is a good program but it is your fourth-best story now, and the auth-failure root cause is a better use of the slot. Flagging because it is a deliberate demotion, not an oversight.
- The auth-failure block is, in my read, the strongest single paragraph that would exist anywhere on your site. It is a debugging story with a concrete root cause and a second-order result. Support-ops and TSE interviewers ask for exactly this.

### 6.3 About page — Background timeline rebuild

The internal career trajectory is a cleaner arc than the current three role blocks, which are organized by job title. Proposed structure, keeping the existing `.tl-block` component:

| Period | Title | Content source |
|---|---|---|
| 2020–2022 | Quality engineer, VR/AR consumer products | Existing Playtester + PQA blocks, plus Ray-Ban Stories (keep, with the customer-facing reframe from PR5) |
| 2023–2024 | On-call owner and release signoff | New. The ~180 releases, mistriage routing, weekly written handoffs, expansion into design-system compliance, navigation redesigns, localization, cross-app sharing. Carries the 20% mis-triage and 40% production-bug reductions. |
| 2025 | AI-assisted quality pilot | Replaces the current "AI-driven bug fix pipeline" block. Pending D9 on the number. Includes authoring the scaling strategy and the recurring update series for the wider quality org. |
| 2026 | Test automation and infrastructure owner | New and entirely missing today. The e2e suite, provisioning infrastructure, auth-scoping work, CI orchestration, the reverse task-search agent shipped to an internal agent-tooling marketplace, and the UX-review triage pipeline. |

The 2026 block is the most important addition on the whole site. Right now a reader finishes your About page believing your most recent work is coordinating offshore testers. It is not.

Also add, per the internal skills inventory:
- **Engineering skill card**: add GraphQL, Bash. Python and SQL are already there.
- **New skill card, "Test infrastructure"**: CI/batch orchestration, feature-flag systems, service identity and token auth, mobile device farms, Android emulators / iOS simulators, artifact build-and-pin pipelines.
- **AI + Automation card**: add agent tooling and skill packaging, vision-based UI verification, automated video and screenshot analysis. Drop "Self-healing test suites" per D4.
- **Quality + Testing card**: add design-system compliance, accessibility and localization.
- **Product + Ops card**: add Figma per the original audit.

That takes Skills from four cards to five. Worth checking the grid still balances at `about.html:517`.

---

## 7. PR4, PR5, PR6

### PR4 — Resume download and GitHub link

| Change | Locations |
|---|---|
| `Resume ↓` | Nav on all 5 pages next to Contact; About hero next to LinkedIn |
| GitHub link | Footer on all 5 pages beside LinkedIn; About hero |

`NOTES.md` records the GitHub link was removed pending a qa-agent README cleanup. The Interview Prep Kit repo now carries the profile on its own, so this reverses cleanly. Still worth a look at the qa-agent README before shipping, since the profile link exposes it.

Sequencing: run this after PR3 so the resume PDF you generate carries the corrected numbers rather than the undercounts.

### PR5 — Positioning and remaining additions

**Hero** — `index.html:383`
> I've spent 6 years at Meta Reality Labs owning what happens between a user hitting a problem and an engineer fixing it. I build the tools for it too.

Still the highest-leverage single sentence change. The current line reads as a pivot away from employment to a hiring manager who just received your application.

**What I'm looking for** — `about.html:853`
> I'm looking for support operations, product operations, or product quality work at a company where quality is a first-class concern rather than a cleanup task. The shape I'm best at: owning the path from a user's report through triage, routing, and root cause to a shipped fix, and building the systems and automation that make that path repeatable. I like being close to users and to the engineers who fix things, and I'm equally comfortable in a support queue, a stakeholder review, and a terminal.
>
> The bar at this point: somewhere that treats AI as infrastructure, not a pilot program.

Per D10, this stays ops-flavored even though the Background section is getting more technical. The technical depth is evidence; the positioning stays where your applications are.

**Ray-Ban Stories customer-facing reframe** — add to the What field
> Direct point of contact for all 134 participants, reproducing what they reported and translating it for hardware and software engineering.

**Golden Path** — reframe around turning non-QA people into contributors rather than the process mechanics.

**0 to 1 In-World Menu** — add to the launch list alongside Reels in VR, Home Feed redesign, VR Search refresh.

**UX Gap refresh** — per D2. Replace the aging "~2mo" stat with detection metrics: 66 candidates surfaced in a month, 10 confirmed, 0 duplicates. Update the app count and Started/Status meta.

**pointd test count** — `projects/pointd.html`, surface 500+ Playwright tests.

### PR6 — Writing section (recommend deferring)

The audit ranks this lowest urgency, highest ceiling, and I agree with both halves. The sequencing problem: an empty or single-post writing section signals abandonment more than no section does, and it is the only item here that needs writing time rather than editing time.

Hold until at least two posts are drafted, then ship the section and the posts together. The proposed three are right, and the new data adds a fourth that is arguably the best of them:

1. "I built a bot that filed bugs automatically. Engineering told me to turn it off." (same story as the rewritten Decision 03)
2. "Replacing an offshore manual QA team with automation, and what broke."
3. "20% fewer mis-triaged tickets in three weeks: it was an ownership problem, not a tooling problem."
4. **"A single wrong constant was silently killing 15% of our iOS test suite."** The auth-failure root cause. Best technical story you have, and nothing about it is company-specific once the product name is generalized.

---

## 8. Explicitly not doing

- **Touching the resume pipeline in these PRs.** Sections 1a and 1b are already fixed in `profile.md`. D9 and D12 both need to flow back into `profile.md` afterward, but that is a separate task in a separate repo.
- **Redesigning anything.** Every change reuses existing components and CSS classes. The only new markup is a case-study page copied from the existing structure.
- **Killing BIP the product.** Only removing it from the portfolio.
- **Publishing anything that reads as internal Meta telemetry.** Per D11.

---

## 9. What I need from you to start

**Blocking:**
1. **D9** — the 500+ versus ~40 conflict. This blocks PR3, which now blocks PR4.
2. **D11** — confirm the confidentiality rule, or give me a stricter one.
3. **D2** — current UX Gap app count and whether it is still running.
4. **D6, D7** — delete BIP page, and IPK at card position 2.
5. Three IPK screenshots per §5.6.
6. One neutral resume PDF per D5, generated after PR3.

**Non-blocking but worth a decision:** D4, D10, D12.

PR1 can ship right now with zero blockers. PR2 needs only the screenshots and your yes on D6 and D7.
