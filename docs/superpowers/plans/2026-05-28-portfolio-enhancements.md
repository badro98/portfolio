# Portfolio Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement four portfolio enhancements: scroll-triggered card fan gallery on project cards, UX Gap Detection case study (new page + home card), about page background restructure with full career timeline, and stat strip on the home page.

**Architecture:** Pure static HTML/CSS/vanilla JS — no framework, no build system, no package manager. All new CSS goes into the relevant page's inline `<style>` block following existing conventions. The one new file is `projects/ux-gap.html`, modelled after the existing case study pages.

**Tech Stack:** HTML, CSS (custom properties, CSS Grid, CSS transforms, IntersectionObserver), vanilla JS

---

## File Map

| File | Changes |
|---|---|
| `index.html` | Replace `.proj-screenshots` with card fan, add stat strip, add UX Gap Detection card |
| `about.html` | Add skills section, replace `.journey` with career timeline |
| `projects/ux-gap.html` | New file — UX Gap Detection case study |
| `styles.css` | No changes needed |

---

## Task 1: Card Fan — CSS

**Files:**
- Modify: `index.html` inline `<style>` block

Replace the existing `.proj-screenshots` CSS block (lines 95–101) with the card fan styles. Add `@keyframes deckPulse`.

- [ ] **Step 1: Remove old screenshot grid CSS**

In `index.html`, find and delete this block inside the `<style>` tag:
```css
.proj-screenshots {
  padding: 0 28px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.proj-screenshots.single { grid-template-columns: 1fr; }
```

- [ ] **Step 2: Add card fan CSS in its place**

```css
/* ── Card fan deck ── */
.deck-wrap {
  padding: 0 28px 24px;
}
.deck {
  position: relative;
  overflow: visible;
}
.deck-card {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.55s cubic-bezier(0.22,1,0.36,1),
              box-shadow 0.45s ease;
}
.deck-card.dc1 {
  position: relative;
  z-index: 3;
}
.deck-card.dc2 {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 2;
  transform: translateX(10px) translateY(3px) rotate(1.2deg);
}
.deck-card.dc3 {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1;
  transform: translateX(19px) translateY(6px) rotate(2.5deg);
}
.deck.fanned .dc2 {
  transform: translateX(18px) translateY(5px) rotate(2deg);
}
.deck.fanned .dc3 {
  transform: translateX(34px) translateY(10px) rotate(4deg);
}

/* Hint label below deck */
.deck-hint {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.deck-hint-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  animation: deckPulse 2s ease-in-out infinite;
}
@keyframes deckPulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.5); }
}
.deck-hint-label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-3);
}

@media (max-width: 580px) {
  .deck-hint-label { font-size: 10px; }
}
```

- [ ] **Step 3: Open `index.html` in browser, confirm no visual regressions yet** (project cards will still show the old screenshot HTML — that's fine, we haven't changed it yet)

---

## Task 2: Card Fan — HTML and JS

**Files:**
- Modify: `index.html` — project card bodies and `<script>` block

- [ ] **Step 1: Replace pointd screenshots (index.html ~line 192)**

Find:
```html
        <div class="proj-screenshots">
          <div class="browser-frame"><img src="assets/screenshots/pointd-programs.png" alt="pointd program entry" loading="lazy"></div>
          <div class="browser-frame"><img src="assets/screenshots/pointd-explore.png" alt="pointd planner view" loading="lazy"></div>
        </div>
```

Replace with:
```html
        <div class="deck-wrap">
          <div class="deck">
            <div class="deck-card dc2">
              <div class="browser-frame"><img src="assets/screenshots/pointd-explore.png" alt="pointd planner view" loading="lazy"></div>
            </div>
            <div class="deck-card dc1">
              <div class="browser-frame"><img src="assets/screenshots/pointd-programs.png" alt="pointd program entry" loading="lazy"></div>
            </div>
          </div>
          <div class="deck-hint">
            <span class="deck-hint-dot"></span>
            <span class="deck-hint-label">1 more screenshot</span>
          </div>
        </div>
```

- [ ] **Step 2: Replace qa-agent screenshots (index.html ~line 211)**

Find:
```html
        <div class="proj-screenshots">
          <div class="browser-frame"><img src="assets/screenshots/qa-agent-runs.png" alt="qa-agent GitHub Actions runs" loading="lazy"></div>
          <div class="browser-frame"><img src="assets/screenshots/qa-agent-report.png" alt="qa-agent report output" loading="lazy"></div>
        </div>
```

Replace with:
```html
        <div class="deck-wrap">
          <div class="deck">
            <div class="deck-card dc2">
              <div class="browser-frame"><img src="assets/screenshots/qa-agent-report.png" alt="qa-agent report output" loading="lazy"></div>
            </div>
            <div class="deck-card dc1">
              <div class="browser-frame"><img src="assets/screenshots/qa-agent-runs.png" alt="qa-agent GitHub Actions runs" loading="lazy"></div>
            </div>
          </div>
          <div class="deck-hint">
            <span class="deck-hint-dot"></span>
            <span class="deck-hint-label">1 more screenshot</span>
          </div>
        </div>
```

- [ ] **Step 3: Replace BIP screenshots (index.html ~line 229)**

Find:
```html
        <div class="proj-screenshots">
          <div class="browser-frame"><img src="assets/screenshots/bip-buildlog.png" alt="BIP build log" loading="lazy"></div>
          <div class="browser-frame"><img src="assets/screenshots/bip-profile.png" alt="BIP public profile" loading="lazy"></div>
        </div>
```

Replace with:
```html
        <div class="deck-wrap">
          <div class="deck">
            <div class="deck-card dc2">
              <div class="browser-frame"><img src="assets/screenshots/bip-profile.png" alt="BIP public profile" loading="lazy"></div>
            </div>
            <div class="deck-card dc1">
              <div class="browser-frame"><img src="assets/screenshots/bip-buildlog.png" alt="BIP build log" loading="lazy"></div>
            </div>
          </div>
          <div class="deck-hint">
            <span class="deck-hint-dot"></span>
            <span class="deck-hint-label">1 more screenshot</span>
          </div>
        </div>
```

- [ ] **Step 4: Add card fan JS to the `<script>` block**

Find the existing `<script>` block (just before `</body>`) and add the deck observer after the existing fadeUp observer code:

```javascript
  // Card fan — scroll-triggered
  const decks = [...document.querySelectorAll('.deck')];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    decks.forEach(d => d.classList.add('fanned'));
  } else {
    const deckObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fanned');
          deckObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    decks.forEach(d => deckObserver.observe(d));
  }
```

- [ ] **Step 5: Open `index.html` in browser and verify**
  - Each project card shows one screenshot (the front card) with the back card subtly peeking right
  - Scrolling past a card triggers the fan — back card spreads slightly further right
  - Pulsing orange dot + "1 more screenshot" label visible below each deck
  - No cards clipped unexpectedly (`.proj-card` overflow: hidden should cleanly crop any slight overflow)

- [ ] **Step 6: Commit**
```bash
git add index.html
git commit -m "feat: replace screenshot grid with scroll-triggered card fan on project cards"
```

---

## Task 3: Stat Strip — Home Page

**Files:**
- Modify: `index.html` — inline `<style>` and `#background` section

- [ ] **Step 1: Add stat strip CSS to inline `<style>` block**

Add after the `.background-footer a:hover` rule:

```css
/* ── Stat strip ── */
.stat-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1px;
  background: var(--border-strong);
  border: 1px solid var(--border-strong);
  border-radius: var(--r-lg);
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.stat {
  background: var(--surface);
  padding: 1.25rem 1rem;
  text-align: center;
}
.stat-num {
  font-family: var(--serif);
  font-size: 26px;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 4px;
}
.stat-label {
  font-size: 11px;
  color: var(--ink-3);
  line-height: 1.4;
}
```

- [ ] **Step 2: Add stat strip HTML in the `#background` section**

Find in `index.html` (~line 243):
```html
  <section class="section" id="background">
    <div class="section-label">Where I've operated</div>
    <div class="highlight-grid">
```

Replace with:
```html
  <section class="section" id="background">
    <div class="section-label">Where I've operated</div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-num">5+</div><div class="stat-label">Years at Meta Reality Labs</div></div>
      <div class="stat"><div class="stat-num">2,000+</div><div class="stat-label">Regression bugs verified</div></div>
      <div class="stat"><div class="stat-num">500+</div><div class="stat-label">AI fix workstream bugs</div></div>
      <div class="stat"><div class="stat-num">3,000+</div><div class="stat-label">Test cases managed</div></div>
      <div class="stat"><div class="stat-num">47</div><div class="stat-label">Product areas covered</div></div>
    </div>
    <div class="highlight-grid">
```

- [ ] **Step 3: Open `index.html` in browser and verify**
  - Stat strip appears between the "Where I've operated" label and the 4 highlight blocks
  - 5 cells laid out in a row, collapses gracefully at mobile width

- [ ] **Step 4: Commit**
```bash
git add index.html
git commit -m "feat: add stat strip to professional background section on home page"
```

---

## Task 4: UX Gap Detection — Home Page Card

**Files:**
- Modify: `index.html` — projects grid and inline `<style>`

- [ ] **Step 1: Add cover diagram CSS to inline `<style>` block**

```css
/* ── UX Gap Detection cover diagram ── */
.proj-diagram-cover {
  margin: 0 28px 24px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 20px 16px 16px;
  position: relative;
}
.proj-diagram-cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(28,27,24,0.06) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}
.diag-eyebrow {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}
.diag-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  position: relative;
  z-index: 1;
}
.diag-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  flex: 1;
}
.diag-circle {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(28,27,24,0.06);
}
.diag-circle svg {
  width: 14px; height: 14px;
  stroke: var(--ink-3);
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.diag-circle.accent {
  background: var(--accent-light);
  border-color: var(--accent-border);
}
.diag-circle.accent svg { stroke: var(--accent); }
.diag-label {
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-3);
  text-align: center;
  line-height: 1.4;
}
.diag-label.accent { color: var(--ink-2); }
.diag-arrow {
  flex-shrink: 0;
  width: 24px;
  margin-bottom: 20px;
}
.diag-arrow svg {
  width: 20px; height: 8px;
  stroke: var(--border-strong);
  fill: none;
  stroke-width: 1;
}
.diag-arrow.accent svg { stroke: var(--accent-border); }
.diag-status {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--mono);
  font-size: 9px;
  color: var(--ink-3);
  justify-content: flex-end;
  position: relative;
  z-index: 1;
}
.diag-status::before {
  content: '';
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #4caf50;
  animation: diagPulse 2.5s ease-in-out infinite;
}
@keyframes diagPulse {
  0%, 100% { opacity: 0.4; } 50% { opacity: 1; }
}
```

- [ ] **Step 2: Add the UX Gap Detection card HTML after the BIP card**

Find the closing `</div>` of the BIP card and the closing `</div>` of `.projects-grid`, then insert the new card between them:

```html
      <!-- UX Gap Detection -->
      <div class="proj-card fade-up">
        <div class="proj-card-body">
          <div class="proj-card-top">
            <span class="proj-name">UX Gap Detection</span>
            <span class="status-badge active">Active</span>
          </div>
          <p class="proj-problem">Automated testing catches regressions. It doesn't catch the UX issues users actually notice. A multi-bot pipeline runs on every automated pass, deduplicates against open bugs, and files verified issues automatically.</p>
        </div>
        <div class="proj-diagram-cover">
          <div class="diag-eyebrow">Meta · AI Tooling · Pipeline</div>
          <div class="diag-flow">
            <div class="diag-node">
              <div class="diag-circle">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <span class="diag-label">Auto<br>runs</span>
            </div>
            <div class="diag-arrow">
              <svg viewBox="0 0 20 8"><line x1="0" y1="4" x2="15" y2="4"/><polyline points="11,1 16,4 11,7"/></svg>
            </div>
            <div class="diag-node">
              <div class="diag-circle accent">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v3l2 2"/></svg>
              </div>
              <span class="diag-label accent">AI<br>analysis</span>
            </div>
            <div class="diag-arrow accent">
              <svg viewBox="0 0 20 8"><line x1="0" y1="4" x2="15" y2="4"/><polyline points="11,1 16,4 11,7"/></svg>
            </div>
            <div class="diag-node">
              <div class="diag-circle">
                <svg viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/></svg>
              </div>
              <span class="diag-label">Dedup<br>filter</span>
            </div>
            <div class="diag-arrow accent">
              <svg viewBox="0 0 20 8"><line x1="0" y1="4" x2="15" y2="4"/><polyline points="11,1 16,4 11,7"/></svg>
            </div>
            <div class="diag-node">
              <div class="diag-circle">
                <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
              </div>
              <span class="diag-label">Simulator<br>verify</span>
            </div>
            <div class="diag-arrow accent">
              <svg viewBox="0 0 20 8"><line x1="0" y1="4" x2="15" y2="4"/><polyline points="11,1 16,4 11,7"/></svg>
            </div>
            <div class="diag-node">
              <div class="diag-circle accent">
                <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <span class="diag-label accent">Auto<br>filed</span>
            </div>
          </div>
          <div class="diag-status">Active · 2 apps</div>
        </div>
        <div class="proj-card-footer">
          <a href="projects/ux-gap.html">Read the story →</a>
        </div>
      </div>
```

- [ ] **Step 3: Open `index.html` in browser and verify**
  - 4th project card appears after BIP
  - Pipeline diagram renders correctly inside the card
  - Orange accent on AI analysis and auto-filed nodes
  - Status dot pulses
  - "Read the story →" footer link present

- [ ] **Step 4: Commit**
```bash
git add index.html
git commit -m "feat: add UX Gap Detection project card to home page"
```

---

## Task 5: About Page — Skills Section

**Files:**
- Modify: `about.html` — inline `<style>` and page body

- [ ] **Step 1: Add skills CSS to `about.html` inline `<style>` block**

Add before the closing `</style>` tag in `about.html`:

```css
/* ── Skills ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}
.skill-card {
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: var(--r-lg);
  padding: 1rem 1.25rem;
}
.skill-card-title {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 0.75rem;
}
.pills { display: flex; flex-wrap: wrap; gap: 5px; }
.pill {
  font-size: 12px;
  padding: 3px 9px;
  border-radius: 20px;
  background: var(--surface-2);
  color: var(--ink-2);
  border: 0.5px solid var(--border);
}
.pill.hi {
  background: var(--accent-light);
  color: var(--accent);
  border-color: var(--accent-border);
}
```

- [ ] **Step 2: Add skills section HTML before the hobbies content block**

In `about.html`, find the comment `<!-- Outside work — hobbies up top -->` and insert the skills block before it:

```html
<!-- Skills -->
<div class="content">
  <div class="about-block">
    <div class="about-block-label">Skills</div>
    <div class="skills-grid">
      <div class="skill-card">
        <div class="skill-card-title">AI + Automation</div>
        <div class="pills">
          <span class="pill hi">AI agent development</span>
          <span class="pill hi">Agentic workflow design</span>
          <span class="pill">Prompt engineering</span>
          <span class="pill">Self-healing test suites</span>
          <span class="pill">LLM-assisted bug fixing</span>
        </div>
      </div>
      <div class="skill-card">
        <div class="skill-card-title">Quality + Testing</div>
        <div class="pills">
          <span class="pill">Release readiness</span>
          <span class="pill">VR/MR QA</span>
          <span class="pill">Cross-platform mobile</span>
          <span class="pill">Exploratory testing</span>
          <span class="pill">Regression QA</span>
        </div>
      </div>
      <div class="skill-card">
        <div class="skill-card-title">Engineering</div>
        <div class="pills">
          <span class="pill">Python</span>
          <span class="pill">JavaScript</span>
          <span class="pill">SQL</span>
          <span class="pill">GitHub Actions</span>
          <span class="pill">CI/CD</span>
        </div>
      </div>
      <div class="skill-card">
        <div class="skill-card-title">Product + Ops</div>
        <div class="pills">
          <span class="pill">Cross-functional leadership</span>
          <span class="pill">Release reporting</span>
          <span class="pill">Stakeholder alignment</span>
          <span class="pill">Dogfooding programs</span>
        </div>
      </div>
    </div>
  </div>
</div>

```

- [ ] **Step 3: Open `about.html` in browser and verify**
  - Skills section appears between the hero and the hobbies section
  - 4 skill cards in a grid, label column on the left per `.about-block` layout
  - AI agent development and Agentic workflow design pills are orange-accented

- [ ] **Step 4: Commit**
```bash
git add about.html
git commit -m "feat: add skills section to top of about page"
```

---

## Task 6: About Page — Background Section Restructure

**Files:**
- Modify: `about.html` — inline `<style>`, background HTML block, and `<script>` block

This is the largest task. It removes the animated journey and replaces it with the full career timeline.

- [ ] **Step 1: Remove journey CSS from `about.html` inline `<style>` block**

Delete the entire block from `/* ── Journey infographic ── */` through the closing `}` of `@keyframes orbit { to { transform: rotate(360deg); } }` (approximately lines 186–266 of the inline style). This covers `.journey`, `.journey-phase`, `.journey-num`, `.journey-period`, `.journey-title`, `.journey-desc`, `.journey-chips`, `.journey-chip`, and `@keyframes orbit`.

- [ ] **Step 2: Add career timeline CSS in its place**

```css
/* ── Career timeline ── */
.timeline { position: relative; padding-left: 1.5rem; }
.timeline::before {
  content: '';
  position: absolute;
  left: 0; top: 8px; bottom: 0;
  width: 1px;
  background: var(--border-strong);
}
.tl-block { position: relative; margin-bottom: 2.5rem; }
.tl-dot {
  position: absolute;
  left: -1.5rem; top: 8px;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--accent);
  transform: translateX(-3px);
  box-shadow: 0 0 0 3px var(--bg);
}
.tl-period {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.07em;
  color: var(--accent);
  margin-bottom: 2px;
}
.tl-role { font-size: 15px; font-weight: 500; color: var(--ink); margin-bottom: 1px; }
.tl-company { font-size: 12px; color: var(--ink-3); margin-bottom: 1rem; }

.tl-card {
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
}
.card-sublabel {
  padding: 0.5rem 1.25rem;
  border-bottom: 0.5px solid var(--border);
  font-size: 11px;
  font-family: var(--mono);
  letter-spacing: 0.07em;
  color: var(--ink-3);
  background: var(--surface-2);
}
.card-sublabel.ai {
  background: var(--accent-light);
  color: var(--accent);
}
.ach-block {
  padding: 0.9rem 1.25rem;
  border-bottom: 0.5px solid var(--border);
}
.ach-block:last-of-type { border-bottom: none; }
.ach-title { font-size: 13px; font-weight: 500; color: var(--ink); margin-bottom: 0.5rem; }
.wshr {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 2px 8px;
  font-size: 12px;
  line-height: 1.65;
}
.wl {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  color: var(--ink-3);
  padding-top: 2px;
}
.wv { color: var(--ink-2); }
.wv strong { color: var(--ink); font-weight: 500; }

/* AI phases sub-table */
.ai-phases {
  margin-top: 10px;
  border: 0.5px solid var(--accent-border);
  border-radius: var(--r);
  overflow: hidden;
}
.ai-phase-row {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 0 10px;
  padding: 9px 12px;
  border-bottom: 0.5px solid var(--accent-border);
  align-items: flex-start;
}
.ai-phase-row:last-child { border-bottom: none; }
.ai-n {
  font-family: var(--mono);
  font-size: 9px;
  color: var(--accent);
  padding-top: 3px;
  text-align: right;
}
.ai-phase-row strong {
  display: block;
  font-size: 12px;
  color: var(--ink);
  font-weight: 600;
  margin-bottom: 2px;
}
.ai-phase-row span { font-size: 11px; color: var(--ink-2); line-height: 1.55; }

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0.65rem 1.25rem;
  border-top: 0.5px solid var(--border);
}
.tag {
  font-size: 11px;
  font-family: var(--mono);
  padding: 2px 8px;
  border-radius: 20px;
  background: var(--surface-2);
  color: var(--ink-3);
  border: 0.5px solid var(--border);
}
.tag.hi {
  background: var(--accent-light);
  color: var(--accent);
  border-color: var(--accent-border);
}

@media (max-width: 580px) {
  .wshr { grid-template-columns: 40px 1fr; }
}
```

- [ ] **Step 3: Replace the journey HTML block**

Find in `about.html`:
```html
  <div class="about-block">
    <div class="about-block-label">Background</div>
    <div class="journey">
      ... (entire journey div contents) ...
    </div>
  </div>
```

Replace the entire block with:
```html
  <div class="about-block" style="align-items:flex-start;">
    <div class="about-block-label">Background</div>
    <div class="timeline">

      <!-- Senior PQA -->
      <div class="tl-block">
        <div class="tl-dot"></div>
        <div class="tl-period">Aug 2024 — Present</div>
        <div class="tl-role">Senior Product Quality Analyst</div>
        <div class="tl-company">Meta · Reality Labs · Burlingame, CA</div>
        <div class="tl-card">

          <div class="card-sublabel ai">AI-Native QA transition</div>
          <div class="ach-block">
            <div class="ach-title">Manual → AI-native testing: full transition</div>
            <div class="wshr">
              <span class="wl">What</span><span class="wv">Drove the org-wide shift from fully manual offshore testing to an AI-native, automated-first QA workflow — piloting early tooling, bridging to automation, and building the UX coverage layer that closed the remaining gaps</span>
              <span class="wl">Scale</span><span class="wv"><strong>6–7 months</strong> pilot to near-full adoption; <strong>2 apps</strong> with full feature suite; daily automated runs replacing weekly manual cycles</span>
              <span class="wl">Result</span><span class="wv">Offshore team replaced by automation; weekly → daily test cadence; VP-level recognition for change-based testing methodology</span>
            </div>
            <div class="ai-phases">
              <div class="ai-phase-row">
                <span class="ai-n">01</span>
                <div><strong>Change-based testing agent</strong><span>Piloted AI agent that extracted recent diffs and surfaced relevant exploratory tests. Onboarded and coached offshore team, owned weekly VP-facing reports. Praised as a step-change for QA.</span></div>
              </div>
              <div class="ai-phase-row">
                <span class="ai-n">02</span>
                <div><strong>Manual → automated bridge</strong><span>Ran parallel manual and automated testing. Identified gaps between outputs, synced weekly with tooling team to inform automation changes. ~1.5 months to convergence.</span></div>
              </div>
              <div class="ai-phase-row">
                <span class="ai-n">03</span>
                <div><strong>Full automation live</strong><span>Automated test passes replaced offshore manual testing entirely. Daily runs replaced weekly cycles.</span></div>
              </div>
              <div class="ai-phase-row">
                <span class="ai-n">04</span>
                <div><strong>UX gap coverage (ongoing)</strong><span>Built multi-bot pipeline: review automated runs → identify UX issues → dedup against existing bugs → simulator-test net-new issues → auto-file. 2 apps, full feature suite.</span></div>
              </div>
            </div>
          </div>

          <div class="card-sublabel">Quality operations</div>
          <div class="ach-block">
            <div class="ach-title">Golden Path user journey program</div>
            <div class="wshr">
              <span class="wl">What</span><span class="wv">Led partnership with internal beta team, UXR, and Product Design to run structured user journey testing across VR features</span>
              <span class="wl">Scale</span><span class="wv"><strong>2,600+ survey responses</strong> and nearly <strong>400 bugs filed</strong> by non-QA testers in a single quarter</span>
              <span class="wl">Result</span><span class="wv">Turned internal users into structured quality signal contributors; scaled feedback beyond the QA team</span>
            </div>
          </div>
          <div class="ach-block">
            <div class="ach-title">VR Engagement oncall and release readiness</div>
            <div class="wshr">
              <span class="wl">What</span><span class="wv">Primary QA oncall and release gatekeeper for the VR companion app on iOS and Android</span>
              <span class="wl">Scale</span><span class="wv"><strong>490+ oncall-tagged bugs</strong> across 47 product areas; 5+ major release signoffs; ~3 years oncall</span>
              <span class="wl">Result</span><span class="wv"><strong>20% reduction</strong> in mis-triaged issues; <strong>40% reduction</strong> in production bugs in Meta Horizon Mobile</span>
            </div>
          </div>

          <div class="tag-row">
            <span class="tag hi">AI agent development</span>
            <span class="tag hi">Agentic workflows</span>
            <span class="tag hi">Test automation</span>
            <span class="tag">Release readiness</span>
            <span class="tag">Cross-platform QA</span>
            <span class="tag">iOS + Android</span>
          </div>
        </div>
      </div>

      <!-- PQA -->
      <div class="tl-block">
        <div class="tl-dot"></div>
        <div class="tl-period">Jul 2021 — Aug 2024</div>
        <div class="tl-role">Product Quality Analyst</div>
        <div class="tl-company">Meta · Reality Labs · Burlingame, CA</div>
        <div class="tl-card">
          <div class="card-sublabel">Coverage and scale</div>
          <div class="ach-block">
            <div class="ach-title">Multi-team QA across Meta Quest and VR companion apps</div>
            <div class="wshr">
              <span class="wl">What</span><span class="wv">Test coverage across VR Engagement, VR Regression, and RayBan Stories QA</span>
              <span class="wl">Scale</span><span class="wv"><strong>2,000+ regression issues</strong> verified; <strong>300+ launch-blocking bugs</strong>; <strong>3,000+ test cases</strong> managed</span>
              <span class="wl">Result</span><span class="wv">Faster bug resolution ahead of key product launches; optimized verification pipelines</span>
            </div>
          </div>
          <div class="ach-block">
            <div class="ach-title">Major feature launch testing</div>
            <div class="wshr">
              <span class="wl">What</span><span class="wv">Led testing for Reels in VR, Home Feed redesign, VR Search refresh</span>
              <span class="wl">How</span><span class="wv">Coordinated onshore and offshore test coverage; improved issue verification pipelines for pre-launch quality gates</span>
              <span class="wl">Result</span><span class="wv">Smooth rollouts with timely issue resolution on all three launches</span>
            </div>
          </div>
          <div class="tag-row">
            <span class="tag">VR/MR testing</span>
            <span class="tag">Regression QA</span>
            <span class="tag">Launch readiness</span>
            <span class="tag">RayBan Stories</span>
            <span class="tag">Offshore coordination</span>
          </div>
        </div>
      </div>

      <!-- Playtester -->
      <div class="tl-block">
        <div class="tl-dot"></div>
        <div class="tl-period">Oct 2020 — Jul 2021</div>
        <div class="tl-role">QA Playtester / Product Specialist</div>
        <div class="tl-company">Meta · Reality Labs · Remote</div>
        <div class="tl-card">
          <div class="card-sublabel">Initiative</div>
          <div class="ach-block">
            <div class="ach-title">Ray-Ban Stories beta and dogfooding program</div>
            <div class="wshr">
              <span class="wl">What</span><span class="wv">Designed and ran internal beta testing and rotational dogfooding program for the Ray-Ban Stories hardware launch</span>
              <span class="wl">Scale</span><span class="wv"><strong>134 users</strong> across 5 weeks; <strong>40+ pre-production devices</strong>; <strong>300+ pre-launch bugs</strong> surfaced</span>
              <span class="wl">Result</span><span class="wv">Improved pre-release stability; structured feedback directly informed pre-launch product improvements</span>
            </div>
          </div>
          <div class="tag-row">
            <span class="tag">Hardware QA</span>
            <span class="tag">Beta program design</span>
            <span class="tag">Dogfooding</span>
            <span class="tag">Device management</span>
          </div>
        </div>
      </div>

    </div>
  </div>
```

- [ ] **Step 4: Remove journey JavaScript**

Find and delete the entire `<script>` block at the bottom of `about.html`:
```javascript
<script>
(function () {
  const phases = document.querySelectorAll('.journey-phase');
  ...
})();
</script>
```

- [ ] **Step 5: Open `about.html` in browser and verify**
  - Skills section at top (from Task 5)
  - Background section shows the full 3-entry career timeline
  - Senior PQA card has accent-colored "AI-Native QA transition" sublabel with 4 AI phases sub-table
  - What / Scale / Result rows render correctly
  - Tag rows appear at the bottom of each card
  - No remaining journey animation CSS or JS errors in console

- [ ] **Step 6: Commit**
```bash
git add about.html
git commit -m "feat: replace journey section with full career timeline on about page"
```

---

## Task 7: UX Gap Detection — Case Study Page

**Files:**
- Create: `projects/ux-gap.html`

- [ ] **Step 1: Create the file**

```bash
touch /Users/osamabadr/Desktop/Portfolio/projects/ux-gap.html
```

- [ ] **Step 2: Write the full case study page**

Write the following to `projects/ux-gap.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UX Gap Detection — Osama Badr</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<style>
/* ── Case study layout ── */
.case-hero { margin-bottom: 3.5rem; }
.case-eyebrow { font-family: var(--mono); font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-3); margin-bottom: 1rem; }
.case-hero h1 { font-family: var(--serif); font-size: clamp(32px, 5vw, 52px); line-height: 1.1; letter-spacing: -0.02em; font-weight: 400; color: var(--ink); margin-bottom: 1rem; max-width: 18ch; }
.case-hero p { font-size: 16px; line-height: 1.75; color: var(--ink-2); max-width: 560px; }
.case-meta { display: flex; gap: 2rem; flex-wrap: wrap; padding: 1.5rem 0; border-top: 0.5px solid var(--border-strong); border-bottom: 0.5px solid var(--border-strong); margin: 2rem 0 3.5rem; }
.meta-item { display: flex; flex-direction: column; gap: 3px; }
.meta-label { font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-3); }
.meta-value { font-size: 13px; color: var(--ink); font-weight: 500; }
.case-section { margin-bottom: 3.5rem; }
.case-section h2 { font-family: var(--serif); font-size: 26px; font-weight: 400; color: var(--ink); margin-bottom: 1rem; }
.case-section p { font-size: 15px; line-height: 1.8; color: var(--ink-2); margin-bottom: 1rem; max-width: 640px; }
.case-section p:last-child { margin-bottom: 0; }

/* Decision blocks */
.decisions { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem; }
.decision { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 24px; }
.decision-num { font-family: var(--mono); font-size: 10px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
.decision strong { display: block; font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 8px; }
.decision p { font-size: 13px; color: var(--ink-2); line-height: 1.65; margin: 0; max-width: 100%; }

/* Stack tags */
.stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1rem; }
.stack-tag { font-family: var(--mono); font-size: 11px; color: var(--ink-2); background: var(--surface-2); padding: 4px 10px; border-radius: 4px; border: 1px solid var(--border); }

/* Stats callout */
.meta-callout { background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--r); padding: 20px 24px; margin: 1.5rem 0; display: flex; gap: 2rem; flex-wrap: wrap; }
.meta-callout-item { display: flex; flex-direction: column; gap: 4px; }
.meta-callout-num { font-family: var(--serif); font-size: 28px; color: var(--ink); }
.meta-callout-label { font-size: 12px; color: var(--ink-3); font-family: var(--mono); }

/* ── Pipeline diagram ── */
.pipeline-diagram {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 28px;
  margin: 2.5rem 0;
  position: relative;
}
.pipeline-diagram::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--r-lg);
  background-image: radial-gradient(circle, rgba(28,27,24,0.04) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}
.pd-title { font-family: var(--serif); font-size: 18px; color: var(--ink); margin-bottom: 24px; position: relative; z-index: 1; }
.pd-flow { display: flex; flex-direction: column; gap: 0; position: relative; z-index: 1; }
.pd-row { display: flex; align-items: flex-start; gap: 14px; position: relative; }
.pd-row:not(:last-child) { padding-bottom: 16px; }
.pd-row:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 17px; top: 36px;
  bottom: 0;
  width: 1px;
  background: var(--border-strong);
}
.pd-icon-wrap { flex-shrink: 0; }
.pd-icon {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  display: flex; align-items: center; justify-content: center;
  position: relative; z-index: 1;
}
.pd-icon svg { width: 14px; height: 14px; stroke: var(--ink-3); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.pd-icon.accent { background: var(--accent-light); border-color: var(--accent-border); }
.pd-icon.accent svg { stroke: var(--accent); }
.pd-body { flex: 1; padding-top: 2px; }
.pd-num { font-family: var(--mono); font-size: 9px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px; }
.pd-name { font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 3px; }
.pd-desc { font-size: 12.5px; color: var(--ink-2); line-height: 1.6; }

/* Branch decision */
.pd-branch {
  margin: 0 0 16px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.pd-branch-node { background: var(--surface-2); border: 1px solid var(--border); border-radius: 8px; padding: 10px 12px; }
.pd-branch-node.accent { background: var(--accent-light); border-color: var(--accent-border); }
.pd-branch-label { font-family: var(--mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-3); margin-bottom: 3px; }
.pd-branch-label.yes { color: #2e7d32; }
.pd-branch-label.no { color: var(--accent); }
.pd-branch-text { font-size: 11.5px; color: var(--ink-2); line-height: 1.5; }

@media (max-width: 580px) {
  .case-meta { gap: 1.25rem; }
  .meta-callout { gap: 1.25rem; }
  .pd-branch { grid-template-columns: 1fr; }
}
</style>
</head>
<body>
<div class="page">

  <nav>
    <a href="../index.html" class="nav-name">Osama Badr</a>
    <div class="nav-links">
      <a href="../about.html">About</a>
      <a href="mailto:osabadr@gmail.com">Contact</a>
    </div>
  </nav>

  <a href="../index.html" class="back-link">All projects</a>

  <div class="case-hero fade-up">
    <p class="case-eyebrow">Project · AI Tooling</p>
    <h1>UX Gap Detection</h1>
    <p>A multi-bot pipeline that finds the UX issues automated testing misses — running continuously on every test pass, deduplicating against known bugs, and filing verified issues automatically.</p>
    <div style="margin-top:1.25rem;">
      <span class="status-badge active">Active — Meta Reality Labs</span>
    </div>
  </div>

  <div class="case-meta">
    <div class="meta-item"><span class="meta-label">Role</span><span class="meta-value">Solo builder</span></div>
    <div class="meta-item"><span class="meta-label">Started</span><span class="meta-value">Mar 2026</span></div>
    <div class="meta-item"><span class="meta-label">Status</span><span class="meta-value">Active · 2 apps</span></div>
    <div class="meta-item"><span class="meta-label">Stack</span><span class="meta-value">Python, Anthropic API, GitHub Actions</span></div>
  </div>

  <!-- Problem -->
  <div class="case-section fade-up">
    <h2>The problem</h2>
    <p>When the offshore manual testing team was replaced by automated test passes, the coverage gap wasn't obvious at first. Automated tests are written to verify behavior — they pass as long as the app does what it's programmed to do. They don't notice when something looks off: a misaligned UI element, a flow that's technically correct but confusing, a rendering issue that only appears in certain states.</p>
    <p>Real users notice these things. There was no systematic way to catch them without reintroducing manual review, which was exactly what automation was supposed to eliminate. The question became: how do you get the coverage of a manual tester without the manual tester?</p>
  </div>

  <!-- Pipeline diagram -->
  <div class="pipeline-diagram fade-up">
    <div class="pd-title">How it works</div>
    <div class="pd-flow">

      <div class="pd-row">
        <div class="pd-icon-wrap"><div class="pd-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div></div>
        <div class="pd-body"><div class="pd-num">Step 01</div><div class="pd-name">Ingest automated runs</div><div class="pd-desc">Bots pull the latest automated test results — job outputs and post-run reports across both apps</div></div>
      </div>

      <div class="pd-row">
        <div class="pd-icon-wrap"><div class="pd-icon accent"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v3l2 2"/></svg></div></div>
        <div class="pd-body"><div class="pd-num">Step 02</div><div class="pd-name">Identify UX gaps</div><div class="pd-desc">AI reviews run output and flags potential UX issues — rendering problems, broken flows, functional anomalies that automation passes but users would notice</div></div>
      </div>

      <div class="pd-row">
        <div class="pd-icon-wrap"><div class="pd-icon"><svg viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/></svg></div></div>
        <div class="pd-body"><div class="pd-num">Step 03</div><div class="pd-name">Dedup against existing bugs</div><div class="pd-desc">Candidate issues are checked against the open bug database. Already-known issues are filtered out — only net-new gaps proceed</div></div>
      </div>

      <div class="pd-branch">
        <div class="pd-branch-node">
          <div class="pd-branch-label yes">Known issue</div>
          <div class="pd-branch-text">Already filed — skipped. No duplicate noise.</div>
        </div>
        <div class="pd-branch-node accent">
          <div class="pd-branch-label no">Net new</div>
          <div class="pd-branch-text">Proceeds to simulator testing</div>
        </div>
      </div>

      <div class="pd-row">
        <div class="pd-icon-wrap"><div class="pd-icon"><svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg></div></div>
        <div class="pd-body"><div class="pd-num">Step 04</div><div class="pd-name">Simulator testing</div><div class="pd-desc">Net-new issues are reproduced in device simulators and emulators. Manual verification for flows with account limitations or hardware dependencies</div></div>
      </div>

      <div class="pd-row">
        <div class="pd-icon-wrap"><div class="pd-icon accent"><svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div></div>
        <div class="pd-body"><div class="pd-num">Step 05</div><div class="pd-name">Auto-file &amp; triage</div><div class="pd-desc">Confirmed issues are filed automatically — title, reproduction steps, and severity pre-populated. Filed to the correct product area on my behalf</div></div>
      </div>

      <div class="pd-row">
        <div class="pd-icon-wrap"><div class="pd-icon"><svg viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg></div></div>
        <div class="pd-body"><div class="pd-num">Step 06</div><div class="pd-name">Review &amp; assign</div><div class="pd-desc">Filed issues are reviewed and assigned for prioritisation. Working toward full autonomous triage — manual review currently required for edge cases and account-gated flows</div></div>
      </div>

    </div>
  </div>

  <!-- Key decisions -->
  <div class="case-section fade-up">
    <h2>Key decisions</h2>
    <div class="decisions">
      <div class="decision">
        <p class="decision-num">Decision 01</p>
        <strong>Bot-per-concern, not one monolith</strong>
        <p>Each stage of the pipeline runs as a separate bot — ingestion, analysis, dedup, filing. This means any stage can be updated, retrained, or replaced independently without rebuilding the whole pipeline. When the analysis bot needed refinement, the filing and dedup logic stayed untouched.</p>
      </div>
      <div class="decision">
        <p class="decision-num">Decision 02</p>
        <strong>Dedup before testing, not after</strong>
        <p>The dedup check runs before simulator testing, not after. Running a simulator test only to find out the issue is already filed wastes compute and time. Checking the bug database first means only net-new issues ever reach the testing stage.</p>
      </div>
      <div class="decision">
        <p class="decision-num">Decision 03</p>
        <strong>Auto-file with a human review gate</strong>
        <p>Issues are filed automatically but reviewed before being assigned. This keeps the output trustworthy — a fully autonomous pipeline that silently files noise is worse than no pipeline. The review gate stays until confidence is high enough to remove it for specific issue types.</p>
      </div>
    </div>
  </div>

  <!-- Where it stands -->
  <div class="case-section fade-up">
    <h2>Where it stands</h2>
    <p>Started with one app and a few features. Now covers two apps with a full feature suite. The pipeline has been running for around two months — long enough to validate the approach and start tuning accuracy.</p>
    <div class="meta-callout">
      <div class="meta-callout-item"><span class="meta-callout-num">2</span><span class="meta-callout-label">Apps covered</span></div>
      <div class="meta-callout-item"><span class="meta-callout-num">6</span><span class="meta-callout-label">Pipeline steps</span></div>
      <div class="meta-callout-item"><span class="meta-callout-num">~2mo</span><span class="meta-callout-label">In production</span></div>
    </div>
    <div class="stack">
      <span class="stack-tag">Python</span>
      <span class="stack-tag">Anthropic API</span>
      <span class="stack-tag">GitHub Actions</span>
      <span class="stack-tag">iOS Simulator</span>
      <span class="stack-tag">Android Emulator</span>
    </div>
  </div>

  <footer>
    <span class="footer-name">Osama Badr</span>
    <div class="footer-links">
      <a href="mailto:osabadr@gmail.com">osabadr@gmail.com</a>
      <a href="https://linkedin.com/in/obadr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/badro98" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>

</div>
<script>
  const fadeUps = [...document.querySelectorAll('.fade-up')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = fadeUps.indexOf(entry.target);
        entry.target.style.animationDelay = `${idx * 0.08}s`;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '-4% 0px' });
  fadeUps.forEach(el => observer.observe(el));
</script>
</body>
</html>
```

- [ ] **Step 3: Open `projects/ux-gap.html` in browser and verify**
  - Nav links work (Osama Badr → index.html, About → ../about.html, Contact → mailto)
  - Back link reads "All projects" and goes to ../index.html
  - Case hero, meta row, all sections render correctly
  - Pipeline diagram renders with correct accent colors on steps 02 and 05
  - Branch nodes (Known issue / Net new) visible between steps 03 and 04
  - Fade-up animations fire on scroll
  - Footer links present

- [ ] **Step 4: Verify home page card link works**
  - Open `index.html`, click "Read the story →" on the UX Gap Detection card
  - Should navigate to `projects/ux-gap.html`

- [ ] **Step 5: Commit**
```bash
git add projects/ux-gap.html
git commit -m "feat: add UX Gap Detection case study page"
```

---

## Final Verification

- [ ] Open `index.html` — scroll through all 4 project cards, verify card fans trigger on scroll, stat strip visible, UX Gap Detection card with pipeline diagram present
- [ ] Open `about.html` — skills grid at top, career timeline with tl-cards renders, AI phases sub-table accent-colored, no console errors
- [ ] Open `projects/pointd.html`, `projects/qa-agent.html`, `projects/bip.html` — unchanged, back links work
- [ ] Open `projects/ux-gap.html` — full pipeline diagram, all sections present, nav/back links work
- [ ] Test mobile at 390px width — nav, cards, stat strip, timeline all respond correctly
- [ ] Check DevTools console on all pages — no JS errors

- [ ] **Final commit**
```bash
git add -A
git status  # confirm only expected files changed
git push origin main
```
