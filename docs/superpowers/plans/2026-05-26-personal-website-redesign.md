# Personal Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio from a resume-style tabbed page into a personal website with a narrative hub page and three dedicated project case study pages.

**Architecture:** Shared styles extracted to `styles.css`, referenced by all pages. Home page (`index.html`) is a hub — hero, project cards, professional highlights — with no tabs. Each project gets its own HTML page with a full case study. Existing color system, typography, and animation patterns carry over unchanged.

**Tech Stack:** Static HTML5, CSS3, vanilla JavaScript, Google Fonts (DM Serif Display, DM Sans, DM Mono), Cloudflare Pages

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `assets/screenshots/` | All screenshot images |
| Create | `styles.css` | Shared variables, reset, nav, footer, browser-frame, status-badge, buttons, animations |
| Rewrite | `index.html` | Hub: hero, project cards, professional highlights, footer |
| Create | `projects/pointd.html` | pointd case study |
| Create | `projects/qa-agent.html` | qa-agent case study |
| Create | `projects/bip.html` | BIP case study |
| Edit | `about.html` | Hero copy update only |

---

## Task 1: Save screenshot assets

**Files:**
- Create: `assets/screenshots/` directory

- [ ] **Step 1: Create the screenshots directory**

```bash
mkdir -p /Users/osamabadr/Desktop/Portfolio/assets/screenshots
```

- [ ] **Step 2: Save each screenshot to the correct filename**

Save the following images from the conversation into `assets/screenshots/`:

| Filename | What it shows |
|----------|---------------|
| `pointd-gate.png` | pointd gate page — "Your points are worth more than you think" |
| `pointd-explore.png` | pointd explore grid — destination cards (Taipei, Cairo, Prague) |
| `pointd-detail.png` | pointd hotel detail — Taipei list + map with price bubbles |
| `qa-agent-sidebar.png` | GitHub Actions sidebar — 3 QA Agent workflows |
| `qa-agent-runs.png` | GitHub Actions run history — 158 runs list |
| `qa-agent-report.png` | QA Agent Report — WARN state with test results, coverage gaps, proposed tests |
| `bip-buildlog.png` | BIP Build Log page — daily activity, summarized badge, Publish CTA |
| `bip-settings.png` | BIP Settings page — 3-step setup, "What BIP can see" section |
| `bip-profile.png` | BIP Profile/Activity — @badro feed with week-grouped build logs |

- [ ] **Step 3: Verify all files exist**

```bash
ls /Users/osamabadr/Desktop/Portfolio/assets/screenshots/
```

Expected output: 9 files matching the names above.

- [ ] **Step 4: Commit**

```bash
cd /Users/osamabadr/Desktop/Portfolio
git add assets/screenshots/
git commit -m "feat: add project screenshot assets"
```

---

## Task 2: Create shared styles.css

**Files:**
- Create: `styles.css`
- Modify: `index.html` — replace inline shared styles with `<link rel="stylesheet" href="styles.css">`
- Modify: `about.html` — add `<link rel="stylesheet" href="styles.css">`

- [ ] **Step 1: Create `styles.css` with shared styles**

Create `/Users/osamabadr/Desktop/Portfolio/styles.css` with the following content:

```css
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── Variables ── */
:root {
  --bg: #f4f2ed;
  --surface: #fdfcfa;
  --surface-2: #eceae4;
  --ink: #1c1b18;
  --ink-2: #5a5850;
  --ink-3: #9a9890;
  --border: rgba(28,27,24,0.1);
  --border-strong: rgba(28,27,24,0.2);
  --accent: #c95f2a;
  --accent-light: #fdf0e8;
  --accent-border: rgba(201,95,42,0.22);
  --serif: 'DM Serif Display', Georgia, serif;
  --sans: 'DM Sans', system-ui, sans-serif;
  --mono: 'DM Mono', monospace;
  --r: 10px;
  --r-lg: 16px;
}

/* ── Base ── */
html { scroll-behavior: smooth; }
body {
  font-family: var(--sans);
  background: var(--bg);
  color: var(--ink);
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.page { max-width: 860px; margin: 0 auto; padding: 0 2rem 6rem; }

/* ── Nav ── */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  margin-bottom: 4rem;
  border-bottom: 0.5px solid var(--border-strong);
  position: sticky;
  top: 0;
  background: var(--bg);
  z-index: 10;
}
.nav-name { font-family: var(--serif); font-size: 18px; text-decoration: none; color: var(--ink); }
.nav-links { display: flex; gap: 1.75rem; }
.nav-links a { font-size: 13px; color: var(--ink-2); text-decoration: none; }
.nav-links a:hover, .nav-links a.active { color: var(--accent); }

/* ── Footer ── */
footer {
  margin-top: 6rem;
  padding-top: 2rem;
  border-top: 0.5px solid var(--border-strong);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-name { font-family: var(--serif); font-size: 15px; color: var(--ink-2); }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a {
  font-size: 13px;
  font-family: var(--mono);
  color: var(--ink-3);
  text-decoration: none;
  border-bottom: 0.5px solid var(--border-strong);
  padding-bottom: 1px;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.footer-links a:hover { color: var(--accent); border-color: var(--accent-border); }

/* ── Section label ── */
.section-label {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  margin-bottom: 2rem;
}

/* ── Buttons ── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--ink);
  color: var(--bg);
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
}
.btn-primary:hover { background: var(--accent); transform: translateY(-1px); }

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  color: var(--ink-2);
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 6px;
  border: 1px solid var(--border-strong);
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
}
.btn-secondary:hover { color: var(--ink); border-color: var(--ink); transform: translateY(-1px); }

/* ── Browser frame mockup ── */
.browser-frame {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(28,27,24,0.1);
  border: 1px solid var(--border);
  background: #fff;
}
.browser-frame::before {
  content: '';
  display: block;
  height: 32px;
  background: #e8e6e1;
  background-image:
    radial-gradient(circle at 12px 16px, #fc5f57 4px, transparent 4px),
    radial-gradient(circle at 26px 16px, #fdbc2c 4px, transparent 4px),
    radial-gradient(circle at 40px 16px, #29c940 4px, transparent 4px);
}
.browser-frame img {
  display: block;
  width: 100%;
  height: auto;
}

/* ── Status badge ── */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-family: var(--mono);
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.02em;
}
.status-badge::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}
.status-badge.active { background: #e8f5e9; color: #2e7d32; }
.status-badge.early-access { background: var(--accent-light); color: var(--accent); }
.status-badge.in-progress { background: #f3f0ff; color: #5b21b6; }

/* ── Fade-up animation ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up { opacity: 0; }
.fade-up.in-view { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both; }

/* ── Hero dot (pulsing indicator) ── */
.hero-dot {
  width: 13px; height: 13px;
  border-radius: 50%;
  background: var(--accent);
  margin-bottom: 1.5rem;
  position: relative;
}
.hero-dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.4;
  animation: dot-pulse 2.6s ease-out infinite;
}
@keyframes dot-pulse {
  0%   { transform: scale(1);   opacity: 0.5; }
  100% { transform: scale(3.4); opacity: 0; }
}

/* ── Back link (project pages) ── */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-family: var(--mono);
  color: var(--ink-3);
  text-decoration: none;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;
}
.back-link:hover { color: var(--accent); }
.back-link::before { content: '←'; }

/* ── Responsive ── */
@media (max-width: 580px) {
  .page { padding: 0 1rem 4rem; }
  nav { margin-bottom: 2.5rem; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Add `styles.css` link to `index.html`**

In `index.html`, replace the opening of the `<style>` block. Find:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
<style>
```

Replace with:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<style>
```

- [ ] **Step 3: Add `styles.css` link to `about.html`**

In `about.html`, find the same Google Fonts `<link>` tag and add the `styles.css` link after it:
```html
<link rel="stylesheet" href="styles.css">
```

- [ ] **Step 4: Open both pages in a browser and verify they still look correct**

Open `index.html` and `about.html` in a browser (double-click or `open index.html`). Both should render identically to before — no visual regression. The `styles.css` additions don't change anything yet; they only add new classes.

- [ ] **Step 5: Commit**

```bash
cd /Users/osamabadr/Desktop/Portfolio
git add styles.css index.html about.html
git commit -m "feat: add shared styles.css, link from index and about"
```

---

## Task 3: Rewrite `index.html`

**Files:**
- Rewrite: `index.html`

This task replaces the entire body content of `index.html`. The `<head>` (including the `<style>` block) stays — only the `<body>` content changes. The existing inline CSS in the `<style>` block will be trimmed down to only page-specific styles.

- [ ] **Step 1: Replace the inline `<style>` block in `index.html`**

Remove all CSS between `<style>` and `</style>` in the existing `<head>`. Replace with only the page-specific styles needed for this page:

```html
<style>
/* ── Hero ── */
.hero { margin-bottom: 5rem; animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
.hero-name {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 1.5rem;
}
.hero h1 {
  font-family: var(--serif);
  font-size: clamp(36px, 6vw, 64px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin-bottom: 1.5rem;
  font-weight: 400;
  max-width: 16ch;
}
.hero-sub {
  font-size: 15px;
  line-height: 1.7;
  color: var(--ink-2);
  max-width: 520px;
  margin-bottom: 2rem;
}
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* ── Projects section ── */
.section { margin-bottom: 5rem; }
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.proj-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.proj-card:hover {
  border-color: var(--accent-border);
  box-shadow: 0 8px 32px rgba(28,27,24,0.07);
}
.proj-card-body { padding: 28px 28px 20px; }
.proj-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.proj-name {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 400;
  color: var(--ink);
}
.proj-problem {
  font-size: 14px;
  line-height: 1.65;
  color: var(--ink-2);
  max-width: 600px;
  margin-bottom: 20px;
}
.proj-card-footer {
  padding: 16px 28px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
}
.proj-card-footer a {
  font-size: 13px;
  font-family: var(--mono);
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: letter-spacing 0.2s ease;
}
.proj-card-footer a:hover { letter-spacing: 0.02em; }
.proj-screenshots {
  padding: 0 28px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.proj-screenshots.single { grid-template-columns: 1fr; }

/* ── Professional section ── */
.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
}
.highlight-block {
  background: var(--surface);
  padding: 28px;
}
.highlight-block strong {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
  line-height: 1.4;
}
.highlight-block p {
  font-size: 13px;
  color: var(--ink-2);
  line-height: 1.65;
  margin: 0;
}
.background-footer {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 13px;
  color: var(--ink-3);
}
.background-footer a {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  text-decoration: none;
  border-bottom: 0.5px solid var(--accent-border);
  padding-bottom: 1px;
}
.background-footer a:hover { border-color: var(--accent); }

@media (max-width: 580px) {
  .proj-screenshots { grid-template-columns: 1fr; }
  .highlight-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; }
}
</style>
```

- [ ] **Step 2: Replace the entire `<body>` content**

Replace everything between `<body>` and `</body>` with:

```html
<body>
<div class="page">

  <nav>
    <a href="index.html" class="nav-name">Osama Badr</a>
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="mailto:osabadr@gmail.com">Contact</a>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-dot" aria-hidden="true"></div>
    <span class="hero-name">Osama Badr</span>
    <h1>I've spent 6 years making sure products work at scale. Now I'm building the ones that don't exist yet.</h1>
    <p class="hero-sub">Senior QA &amp; Product Ops at Meta Reality Labs. Currently building <a href="projects/pointd.html" style="color:var(--accent);text-decoration:none;border-bottom:0.5px solid var(--accent-border)">pointd</a>, <a href="projects/bip.html" style="color:var(--accent);text-decoration:none;border-bottom:0.5px solid var(--accent-border)">BIP</a>, and <a href="projects/qa-agent.html" style="color:var(--accent);text-decoration:none;border-bottom:0.5px solid var(--accent-border)">qa-agent</a>.</p>
    <div class="hero-actions">
      <a href="#building" class="btn-primary">What I'm building</a>
      <a href="#background" class="btn-secondary">My background</a>
    </div>
  </section>

  <!-- Projects -->
  <section class="section" id="building">
    <div class="section-label">What I'm building</div>
    <div class="projects-grid">

      <!-- pointd -->
      <div class="proj-card fade-up">
        <div class="proj-card-body">
          <div class="proj-card-top">
            <span class="proj-name">pointd</span>
            <span class="status-badge early-access">Early Access</span>
          </div>
          <p class="proj-problem">Points redemption is too complex. Most people sit on points for years — they know they're valuable, but the math and research push them back to cash. pointd skips the complexity and shows you where your points can take you, across every program you have.</p>
        </div>
        <div class="proj-screenshots">
          <div class="browser-frame"><img src="assets/screenshots/pointd-gate.png" alt="pointd gate page" loading="lazy"></div>
          <div class="browser-frame"><img src="assets/screenshots/pointd-explore.png" alt="pointd explore view" loading="lazy"></div>
        </div>
        <div class="proj-card-footer">
          <a href="projects/pointd.html">Read the story →</a>
        </div>
      </div>

      <!-- qa-agent -->
      <div class="proj-card fade-up">
        <div class="proj-card-body">
          <div class="proj-card-top">
            <span class="proj-name">qa-agent</span>
            <span class="status-badge active">Active</span>
          </div>
          <p class="proj-problem">Building fast with AI creates coverage blind spots — tests pass but the right things aren't being tested. qa-agent runs on every PR and flags gaps before they merge, so nothing slips through.</p>
        </div>
        <div class="proj-screenshots">
          <div class="browser-frame"><img src="assets/screenshots/qa-agent-runs.png" alt="qa-agent GitHub Actions runs" loading="lazy"></div>
          <div class="browser-frame"><img src="assets/screenshots/qa-agent-report.png" alt="qa-agent report output" loading="lazy"></div>
        </div>
        <div class="proj-card-footer">
          <a href="projects/qa-agent.html">Read the story →</a>
        </div>
      </div>

      <!-- BIP -->
      <div class="proj-card fade-up">
        <div class="proj-card-body">
          <div class="proj-card-top">
            <span class="proj-name">BIP</span>
            <span class="status-badge in-progress">In Progress</span>
          </div>
          <p class="proj-problem">Building in public is consistently good advice but manually painful. BIP connects to your GitHub and Claude Code sessions and writes the post for you — what you shipped, summarized, ready to publish.</p>
        </div>
        <div class="proj-screenshots">
          <div class="browser-frame"><img src="assets/screenshots/bip-buildlog.png" alt="BIP build log" loading="lazy"></div>
          <div class="browser-frame"><img src="assets/screenshots/bip-profile.png" alt="BIP public profile" loading="lazy"></div>
        </div>
        <div class="proj-card-footer">
          <a href="projects/bip.html">Read the story →</a>
        </div>
      </div>

    </div>
  </section>

  <!-- Professional background -->
  <section class="section" id="background">
    <div class="section-label">Where I've operated</div>
    <div class="highlight-grid">
      <div class="highlight-block fade-up">
        <strong>AI-driven bug fix pipeline</strong>
        <p>Built and scaled an AI-led workstream that analyzed, triaged, and verified bug fixes across 500+ issues. Designed for repeatability — it eventually ran autonomously across the entire org with no manual coordination.</p>
      </div>
      <div class="highlight-block fade-up">
        <strong>Golden Path program</strong>
        <p>Drove quality signal across VR by designing a user journey program that generated 2,600+ survey responses, giving the org a consistent feedback loop across product areas.</p>
      </div>
      <div class="highlight-block fade-up">
        <strong>QA coverage systems</strong>
        <p>Owned test coverage across 47 product areas and 3,000+ test cases, including cross-platform and release readiness for VR/MR hardware launches.</p>
      </div>
      <div class="highlight-block fade-up">
        <strong>VR release readiness</strong>
        <p>Managed oncall operations and release gate decisions for VR Engagement, including 490+ oncall-tagged bugs and cross-platform integration testing across hardware generations.</p>
      </div>
    </div>
    <div class="background-footer">
      <span>6 years · Meta Reality Labs · Senior PQA</span>
      <a href="https://linkedin.com/in/obadr" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
    </div>
  </section>

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
  // Fade-up on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.08}s`;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '-4% 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
</script>
</body>
```

- [ ] **Step 3: Update the page `<title>`**

Find:
```html
<title>Osama Badr — Portfolio</title>
```
Replace with:
```html
<title>Osama Badr</title>
```

- [ ] **Step 4: Open `index.html` in a browser and verify**

Check:
- Hero renders with dot, headline, sub-line, two CTAs
- "What I'm building" scrolls to the projects section
- "My background" scrolls to the professional section
- All three project cards are visible with placeholder image boxes (screenshots may not render yet if not saved — that's fine)
- Four highlight blocks in the professional section
- Footer renders at the bottom
- No old tab buttons or timeline visible anywhere

- [ ] **Step 5: Commit**

```bash
cd /Users/osamabadr/Desktop/Portfolio
git add index.html
git commit -m "feat: rewrite home page — hero, project cards, professional section"
```

---

## Task 4: Create `projects/pointd.html`

**Files:**
- Create: `projects/pointd.html`

- [ ] **Step 1: Create the `projects/` directory**

```bash
mkdir -p /Users/osamabadr/Desktop/Portfolio/projects
```

- [ ] **Step 2: Create `projects/pointd.html`**

Create the file with this content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>pointd — Osama Badr</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<style>
/* ── Case study layout ── */
.case-hero { margin-bottom: 3.5rem; animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
.case-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  margin-bottom: 1rem;
}
.case-hero h1 {
  font-family: var(--serif);
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: 400;
  color: var(--ink);
  margin-bottom: 1rem;
  max-width: 18ch;
}
.case-hero p {
  font-size: 16px;
  line-height: 1.75;
  color: var(--ink-2);
  max-width: 560px;
}
.case-meta {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1.5rem 0;
  border-top: 0.5px solid var(--border-strong);
  border-bottom: 0.5px solid var(--border-strong);
  margin: 2rem 0 3.5rem;
}
.meta-item { display: flex; flex-direction: column; gap: 3px; }
.meta-label { font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-3); }
.meta-value { font-size: 13px; color: var(--ink); font-weight: 500; }

.case-section { margin-bottom: 3.5rem; }
.case-section h2 {
  font-family: var(--serif);
  font-size: 26px;
  font-weight: 400;
  color: var(--ink);
  margin-bottom: 1rem;
}
.case-section p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--ink-2);
  margin-bottom: 1rem;
  max-width: 640px;
}
.case-section p:last-child { margin-bottom: 0; }

/* Pull quote */
.pull-quote {
  border-left: 3px solid var(--accent);
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  background: var(--accent-light);
  border-radius: 0 var(--r) var(--r) 0;
}
.pull-quote p {
  font-family: var(--serif);
  font-size: 18px;
  font-style: italic;
  color: var(--ink);
  line-height: 1.5;
  margin: 0;
}
.pull-quote cite {
  display: block;
  margin-top: 0.5rem;
  font-size: 12px;
  font-family: var(--mono);
  color: var(--ink-3);
  font-style: normal;
}

/* Decision blocks */
.decisions { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem; }
.decision {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 24px;
}
.decision-num {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}
.decision strong {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
}
.decision p {
  font-size: 13px;
  color: var(--ink-2);
  line-height: 1.65;
  margin: 0;
  max-width: 100%;
}

/* Screenshot */
.screenshot-wrap { margin: 2.5rem 0; }
.screenshot-caption {
  margin-top: 10px;
  font-size: 12px;
  font-family: var(--mono);
  color: var(--ink-3);
}

/* Stack tags */
.stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1rem; }
.stack-tag {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-2);
  background: var(--surface-2);
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid var(--border);
}

@media (max-width: 580px) {
  .case-meta { gap: 1.25rem; }
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

  <div class="case-hero">
    <p class="case-eyebrow">Project · Travel Rewards</p>
    <h1>pointd</h1>
    <p>A travel rewards optimizer that shows you where your points can take you — across all your programs, in one place. No math, no research, no account needed.</p>
    <div style="margin-top:1.25rem;display:flex;align-items:center;gap:12px;">
      <span class="status-badge early-access">Early Access</span>
      <a href="https://pointd.fyi" target="_blank" rel="noopener noreferrer" style="font-family:var(--mono);font-size:12px;color:var(--ink-3);text-decoration:none;border-bottom:0.5px solid var(--border-strong);padding-bottom:1px;">pointd.fyi ↗</a>
    </div>
  </div>

  <div class="case-meta">
    <div class="meta-item"><span class="meta-label">Role</span><span class="meta-value">Solo builder</span></div>
    <div class="meta-item"><span class="meta-label">Started</span><span class="meta-value">Late 2024</span></div>
    <div class="meta-item"><span class="meta-label">Status</span><span class="meta-value">MVP in progress</span></div>
    <div class="meta-item"><span class="meta-label">Stack</span><span class="meta-value">React, Vite, Supabase, Seats.aero</span></div>
  </div>

  <!-- Problem -->
  <div class="case-section fade-up">
    <h2>The problem</h2>
    <p>I kept getting burned on points redemptions. Not because I wasn't trying — I was researching, comparing programs, reading transfer partner guides. The problem was that none of the existing tools were built for discovery. They were built for booking. They assumed you already knew where you wanted to go and how many points it would cost. They put all the complexity of airline and hotel loyalty programs on the user and called it a feature.</p>
    <p>After talking to other points holders, I found the same pattern every time:</p>
    <div class="pull-quote">
      <p>curiosity → complexity → abandonment → cash fallback</p>
      <cite>— Pattern from user interviews</cite>
    </div>
    <p>People sit on points for years. They know they're valuable. They just never use them because the first time they try to figure out redemption, the system overwhelms them and they give up. pointd is built around a different question: not "how do I book with points?" but "where can I actually go with what I have?"</p>
  </div>

  <!-- Screenshot: gate page -->
  <div class="screenshot-wrap fade-up">
    <div class="browser-frame">
      <img src="../assets/screenshots/pointd-gate.png" alt="pointd gate page — Your points are worth more than you think" loading="lazy">
    </div>
    <p class="screenshot-caption">Gate page — positioning the discovery approach before users even sign up</p>
  </div>

  <!-- Key decisions -->
  <div class="case-section fade-up">
    <h2>Key decisions</h2>
    <div class="decisions">
      <div class="decision">
        <p class="decision-num">Decision 01</p>
        <strong>Discovery-first, not booking-first</strong>
        <p>Every competitor starts with "where do you want to go?" pointd starts with "what do you have?" Enter your program balances, see destinations you can actually reach. The mental model shift — from searching to discovering — is the core product bet.</p>
      </div>
      <div class="decision">
        <p class="decision-num">Decision 02</p>
        <strong>Cross-program balance aggregation</strong>
        <p>Most tools are siloed to one loyalty program. Users with points spread across Chase UR, Amex MR, and Marriott Bonvoy have to check each separately. pointd aggregates everything so the view reflects your real total purchasing power, not just one account.</p>
      </div>
      <div class="decision">
        <p class="decision-num">Decision 03</p>
        <strong>Surface transfer partner paths</strong>
        <p>Transfer partners are where the best redemption value lives — and where 90% of users don't know to look. pointd explicitly shows "via transfer" options with the full transfer chain (e.g., Amex MR → Marriott Bonvoy) so users discover value they didn't know they had.</p>
      </div>
    </div>
  </div>

  <!-- Screenshot: explore + detail -->
  <div class="screenshot-wrap fade-up">
    <div class="browser-frame">
      <img src="../assets/screenshots/pointd-explore.png" alt="pointd explore grid — destinations with points per night" loading="lazy">
    </div>
    <p class="screenshot-caption">Explore view — destinations ranked by your real balance, not generic award charts</p>
  </div>

  <div class="screenshot-wrap fade-up">
    <div class="browser-frame">
      <img src="../assets/screenshots/pointd-detail.png" alt="pointd hotel detail — Taipei list with map" loading="lazy">
    </div>
    <p class="screenshot-caption">Hotel detail — map view with per-night pricing in points across properties</p>
  </div>

  <!-- Where it stands -->
  <div class="case-section fade-up">
    <h2>Where it stands</h2>
    <p>Currently in early access while the MVP is being finalized. The core explore flow works — add your programs, see where you can go, drill into hotel options with real award availability via Seats.aero. Booking integration is next.</p>
    <p>500+ tests, 13 loyalty programs supported, deployed on Cloudflare Pages with GitHub Actions CI.</p>
    <div class="stack">
      <span class="stack-tag">React + Vite</span>
      <span class="stack-tag">Zustand</span>
      <span class="stack-tag">Supabase</span>
      <span class="stack-tag">Seats.aero API</span>
      <span class="stack-tag">Cloudflare Pages</span>
      <span class="stack-tag">GitHub Actions</span>
      <span class="stack-tag">Playwright</span>
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '-4% 0px' });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
</script>
</body>
</html>
```

- [ ] **Step 3: Open `projects/pointd.html` in a browser and verify**

Check:
- Back link at top routes to `../index.html`
- Nav logo routes to `../index.html`
- Hero shows "pointd", eyebrow, description, status badge, and pointd.fyi link
- Meta row renders (Role, Started, Status, Stack)
- Problem section has the pull quote in orange
- Three decision blocks render
- Screenshots display (if assets saved)
- Stack tags and footer render
- Fade-up animations trigger on scroll

- [ ] **Step 4: Commit**

```bash
cd /Users/osamabadr/Desktop/Portfolio
git add projects/pointd.html
git commit -m "feat: add pointd case study page"
```

---

## Task 5: Create `projects/qa-agent.html`

**Files:**
- Create: `projects/qa-agent.html`

- [ ] **Step 1: Create `projects/qa-agent.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>qa-agent — Osama Badr</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<style>
.case-hero { margin-bottom: 3.5rem; animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
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
.decisions { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem; }
.decision { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 24px; }
.decision-num { font-family: var(--mono); font-size: 10px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
.decision strong { display: block; font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 8px; }
.decision p { font-size: 13px; color: var(--ink-2); line-height: 1.65; margin: 0; max-width: 100%; }
.screenshot-wrap { margin: 2.5rem 0; }
.screenshot-caption { margin-top: 10px; font-size: 12px; font-family: var(--mono); color: var(--ink-3); }
.pipeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 1.5rem 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
}
.pipeline-step {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}
.pipeline-step:last-child { border-bottom: none; }
.pipeline-num {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 500;
  color: var(--accent);
  min-width: 20px;
  padding-top: 2px;
}
.pipeline-step strong { font-size: 13px; font-weight: 600; color: var(--ink); display: block; margin-bottom: 2px; }
.pipeline-step span { font-size: 12px; color: var(--ink-3); line-height: 1.5; }
.stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1rem; }
.stack-tag { font-family: var(--mono); font-size: 11px; color: var(--ink-2); background: var(--surface-2); padding: 4px 10px; border-radius: 4px; border: 1px solid var(--border); }
.meta-callout {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 20px 24px;
  margin: 1.5rem 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.meta-callout-item { display: flex; flex-direction: column; gap: 4px; }
.meta-callout-num { font-family: var(--serif); font-size: 28px; color: var(--ink); }
.meta-callout-label { font-size: 12px; color: var(--ink-3); font-family: var(--mono); }
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

  <div class="case-hero">
    <p class="case-eyebrow">Project · QA Tooling</p>
    <h1>qa-agent</h1>
    <p>A QA agent that runs on every PR and flags coverage gaps before they merge. Built so nothing slips through when you're shipping fast with AI.</p>
    <div style="margin-top:1.25rem;">
      <span class="status-badge active">Active — deployed in pointd &amp; BIP</span>
    </div>
  </div>

  <div class="case-meta">
    <div class="meta-item"><span class="meta-label">Role</span><span class="meta-value">Solo builder</span></div>
    <div class="meta-item"><span class="meta-label">Started</span><span class="meta-value">Early 2025</span></div>
    <div class="meta-item"><span class="meta-label">Runs</span><span class="meta-value">158+ workflow runs</span></div>
    <div class="meta-item"><span class="meta-label">Stack</span><span class="meta-value">Node.js, Anthropic API, GitHub Actions</span></div>
  </div>

  <!-- Problem -->
  <div class="case-section fade-up">
    <h2>The problem</h2>
    <p>When you're building quickly with AI, you ship a lot of code fast. Tests pass — but that doesn't mean the right things are being tested. Coverage logic doesn't keep up with what actually changed. The gap isn't obvious until something breaks in production.</p>
    <p>I built qa-agent out of necessity while working on pointd and BIP. I needed a second set of eyes on every PR — something that could look at what changed, check what was being tested, and flag the gaps before I merged. Not a linter, not a static analyzer — something that actually reads the diff and reasons about coverage.</p>
  </div>

  <!-- Screenshot: sidebar -->
  <div class="screenshot-wrap fade-up">
    <div class="browser-frame">
      <img src="../assets/screenshots/qa-agent-sidebar.png" alt="GitHub Actions sidebar showing three QA Agent workflows" loading="lazy">
    </div>
    <p class="screenshot-caption">Three workflows — PR analysis, failed test re-runs, and full regression — all running in GitHub Actions</p>
  </div>

  <!-- Pipeline -->
  <div class="case-section fade-up">
    <h2>How it works</h2>
    <p>qa-agent runs as a GitHub Actions workflow, triggered automatically on every PR. It runs a 6-step pipeline:</p>
    <div class="pipeline">
      <div class="pipeline-step">
        <span class="pipeline-num">01</span>
        <div><strong>Diff analysis</strong><span>Reads the PR diff and identifies what changed — new functions, modified logic, deleted paths</span></div>
      </div>
      <div class="pipeline-step">
        <span class="pipeline-num">02</span>
        <div><strong>Risk scoring</strong><span>Classifies the change by risk level — UI-only, business logic, auth, data layer, etc.</span></div>
      </div>
      <div class="pipeline-step">
        <span class="pipeline-num">03</span>
        <div><strong>Coverage gap detection</strong><span>Compares what changed against existing tests to identify what isn't covered</span></div>
      </div>
      <div class="pipeline-step">
        <span class="pipeline-num">04</span>
        <div><strong>Test proposals</strong><span>Generates specific missing test cases — unit, e2e, or smoke — with descriptions</span></div>
      </div>
      <div class="pipeline-step">
        <span class="pipeline-num">05</span>
        <div><strong>Execution</strong><span>Runs the existing test suite (Vitest + Playwright) and captures results</span></div>
      </div>
      <div class="pipeline-step">
        <span class="pipeline-num">06</span>
        <div><strong>Synthesis</strong><span>Produces a PASS/WARN report with test results, gap list, and proposed tests filed as GitHub issues</span></div>
      </div>
    </div>
  </div>

  <!-- Screenshot: runs -->
  <div class="screenshot-wrap fade-up">
    <div class="browser-frame">
      <img src="../assets/screenshots/qa-agent-runs.png" alt="158 workflow runs in GitHub Actions" loading="lazy">
    </div>
    <p class="screenshot-caption">158 runs across pointd PRs — every merge is checked before it lands</p>
  </div>

  <!-- Screenshot: report -->
  <div class="screenshot-wrap fade-up">
    <div class="browser-frame">
      <img src="../assets/screenshots/qa-agent-report.png" alt="QA Agent Report showing WARN status, test results, coverage gaps, and proposed tests" loading="lazy">
    </div>
    <p class="screenshot-caption">A WARN report — 1,012 tests passed, but a new scroll utility has no coverage. Gaps listed, tests proposed, issue filed.</p>
  </div>

  <!-- Key decisions -->
  <div class="case-section fade-up">
    <h2>Key decisions</h2>
    <div class="decisions">
      <div class="decision">
        <p class="decision-num">Decision 01</p>
        <strong>GitHub Actions, not a separate service</strong>
        <p>Keeping it in GitHub Actions means zero additional infrastructure, zero additional cost, and it runs where the PRs already live. The config lives in the repo. Adding it to a new project is a single workflow file.</p>
      </div>
      <div class="decision">
        <p class="decision-num">Decision 02</p>
        <strong>WARN, not BLOCK</strong>
        <p>The agent flags gaps and proposes tests — it doesn't block merges. This keeps the feedback loop fast and treats the agent as a QA collaborator, not a gatekeeper. The developer decides what's worth addressing before merging.</p>
      </div>
      <div class="decision">
        <p class="decision-num">Decision 03</p>
        <strong>File issues, don't just comment</strong>
        <p>Proposed tests are filed as GitHub issues, not just posted as PR comments. Comments get buried. Issues create accountability and make it easy to prioritize coverage work separately from shipping.</p>
      </div>
    </div>
  </div>

  <!-- Meta connection -->
  <div class="case-section fade-up">
    <h2>The Meta connection</h2>
    <p>The next planned enhancement is simulator-based manual testing — running automated flows against a device emulator the same way VR/MR hardware QA was done at Meta Reality Labs. The agent already handles static analysis and test execution. Connecting it to a simulator closes the loop on full end-to-end coverage, not just unit and e2e.</p>
    <p>That experience — building repeatable, scalable QA systems for hardware that can't be continuously deployed — is what qa-agent is growing toward for web products.</p>
  </div>

  <div class="case-section fade-up">
    <h2>Where it stands</h2>
    <div class="meta-callout">
      <div class="meta-callout-item"><span class="meta-callout-num">158+</span><span class="meta-callout-label">Workflow runs</span></div>
      <div class="meta-callout-item"><span class="meta-callout-num">3</span><span class="meta-callout-label">Workflows (PR, regression, re-run)</span></div>
      <div class="meta-callout-item"><span class="meta-callout-num">2</span><span class="meta-callout-label">Active repos (pointd, BIP)</span></div>
    </div>
    <div class="stack">
      <span class="stack-tag">Node.js (ESM)</span>
      <span class="stack-tag">Anthropic API</span>
      <span class="stack-tag">GitHub Actions</span>
      <span class="stack-tag">GitHub API</span>
      <span class="stack-tag">Vitest</span>
      <span class="stack-tag">Playwright</span>
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '-4% 0px' });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
</script>
</body>
</html>
```

- [ ] **Step 2: Open `projects/qa-agent.html` in a browser and verify**

Check:
- Back link routes to `../index.html`
- Hero renders with title, description, status badge
- Meta row renders
- Pipeline section shows all 6 steps
- Three decision blocks render
- Screenshots load (if assets saved)
- Meta callout (158+ runs, 3 workflows, 2 repos) renders
- Stack tags and footer render

- [ ] **Step 3: Commit**

```bash
cd /Users/osamabadr/Desktop/Portfolio
git add projects/qa-agent.html
git commit -m "feat: add qa-agent case study page"
```

---

## Task 6: Create `projects/bip.html`

**Files:**
- Create: `projects/bip.html`

- [ ] **Step 1: Create `projects/bip.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BIP — Osama Badr</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<style>
.case-hero { margin-bottom: 3.5rem; animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
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
.decisions { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem; }
.decision { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 24px; }
.decision-num { font-family: var(--mono); font-size: 10px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
.decision strong { display: block; font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 8px; }
.decision p { font-size: 13px; color: var(--ink-2); line-height: 1.65; margin: 0; max-width: 100%; }
.screenshot-wrap { margin: 2.5rem 0; }
.screenshot-caption { margin-top: 10px; font-size: 12px; font-family: var(--mono); color: var(--ink-3); }
.screenshot-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 2.5rem 0; }
.stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1rem; }
.stack-tag { font-family: var(--mono); font-size: 11px; color: var(--ink-2); background: var(--surface-2); padding: 4px 10px; border-radius: 4px; border: 1px solid var(--border); }
.vision-block {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 28px;
  margin-top: 1.5rem;
}
.vision-block h3 {
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 400;
  color: var(--ink);
  margin-bottom: 0.75rem;
}
.vision-block p { font-size: 13px; color: var(--ink-2); line-height: 1.7; margin: 0; max-width: 100%; }
@media (max-width: 580px) { .screenshot-grid { grid-template-columns: 1fr; } }
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

  <div class="case-hero">
    <p class="case-eyebrow">Project · Developer Tools</p>
    <h1>BIP — Build in Public</h1>
    <p>A platform that connects to your GitHub and Claude Code sessions, reads what you built that day, and writes the post for you. Building in public shouldn't require a separate writing session after a long build day.</p>
    <div style="margin-top:1.25rem;display:flex;align-items:center;gap:12px;">
      <span class="status-badge in-progress">In Progress</span>
      <a href="https://bip.so" target="_blank" rel="noopener noreferrer" style="font-family:var(--mono);font-size:12px;color:var(--ink-3);text-decoration:none;border-bottom:0.5px solid var(--border-strong);padding-bottom:1px;">bip.so ↗</a>
    </div>
  </div>

  <div class="case-meta">
    <div class="meta-item"><span class="meta-label">Role</span><span class="meta-value">Solo builder</span></div>
    <div class="meta-item"><span class="meta-label">Started</span><span class="meta-value">Mar 2026</span></div>
    <div class="meta-item"><span class="meta-label">Status</span><span class="meta-value">Live, unannounced</span></div>
    <div class="meta-item"><span class="meta-label">Stack</span><span class="meta-value">Next.js, Supabase, Anthropic SDK</span></div>
  </div>

  <!-- Problem -->
  <div class="case-section fade-up">
    <h2>The problem</h2>
    <p>When I started building, the consistent advice was to build in public — tweet what you shipped, share your progress, document the journey. Good advice. But after a six-hour build session, writing a coherent post about what you just did is the last thing you want to do. The friction kills it.</p>
    <p>I was focused on shipping code. So I thought: why not build the tool that does the writing for me? Connect it to what I actually built that day, let it summarize, and give me something I can publish with minimal editing.</p>
  </div>

  <!-- Screenshots: build log + settings -->
  <div class="screenshot-grid fade-up">
    <div>
      <div class="browser-frame">
        <img src="../assets/screenshots/bip-buildlog.png" alt="BIP Build Log — daily activity automatically captured" loading="lazy">
      </div>
      <p class="screenshot-caption" style="margin-top:8px">Build log — commits pulled automatically, AI summary generated on demand</p>
    </div>
    <div>
      <div class="browser-frame">
        <img src="../assets/screenshots/bip-settings.png" alt="BIP Settings — GitHub and Claude Code MCP integrations" loading="lazy">
      </div>
      <p class="screenshot-caption" style="margin-top:8px">Settings — GitHub webhook + BIP MCP for Claude Code, both active</p>
    </div>
  </div>

  <!-- How it works -->
  <div class="case-section fade-up">
    <h2>How it works</h2>
    <p>Connect GitHub and BIP installs a webhook on the repos you choose. Every push automatically adds to your build log — no manual steps. Connect the BIP MCP to Claude Code and it silently logs task summaries after each session, even on days with no commits.</p>
    <p>From the dashboard, hit "Generate summary" and BIP produces an AI-written entry from your day's commits and Claude Code activity. Review it, edit if needed, and publish to your public profile.</p>
    <p>Critically, BIP only sees commit messages, file names, branch names, and Claude Code task summaries. It never reads your code or conversation history.</p>
  </div>

  <!-- Screenshot: profile -->
  <div class="screenshot-wrap fade-up">
    <div class="browser-frame">
      <img src="../assets/screenshots/bip-profile.png" alt="BIP public profile — @badro activity feed" loading="lazy">
    </div>
    <p class="screenshot-caption">Public profile — build logs grouped by week, tagged by project</p>
  </div>

  <!-- Key decisions -->
  <div class="case-section fade-up">
    <h2>Key decisions</h2>
    <div class="decisions">
      <div class="decision">
        <p class="decision-num">Decision 01</p>
        <strong>Summarization layer first, distribution later</strong>
        <p>The temptation was to build the social publishing integration immediately — connect to Twitter, LinkedIn, post directly. Instead, the core loop (capture → summarize → publish to profile) was validated first. Distribution is only worth building once the underlying content is good.</p>
      </div>
      <div class="decision">
        <p class="decision-num">Decision 02</p>
        <strong>MCP over manual input</strong>
        <p>Rather than asking users to log what they worked on, BIP connects to Claude Code sessions via an MCP server. The agent silently records task summaries after each session. On days with no commits, the MCP fills the gap. The user never has to remember to log anything.</p>
      </div>
      <div class="decision">
        <p class="decision-num">Decision 03</p>
        <strong>Live but unannounced</strong>
        <p>BIP is publicly accessible but hasn't been posted about anywhere. The core loop works and is being used daily to generate logs for BIP and pointd development. It'll be announced once the experience is solid enough to explain itself without context.</p>
      </div>
    </div>
  </div>

  <!-- Vision -->
  <div class="case-section fade-up">
    <h2>Where it's going</h2>
    <p>The current version handles the capture and summarization layer. What's next:</p>
    <div class="vision-block">
      <h3>Social publishing</h3>
      <p>Connect the generated summaries directly to Twitter, LinkedIn, and long-form write-up formats. One click from the build log to published post — or daily/weekly/monthly digest formats for different cadences.</p>
    </div>
    <div class="vision-block" style="margin-top:1rem;">
      <h3>Interactive build feed</h3>
      <p>The longer-arc vision: a public feed where builders share not just text logs but fragments of what they built — interactive prototypes, UI components, features — that other people can try directly in the feed. A place where building in public means more than tweeting.</p>
    </div>
    <div class="stack" style="margin-top:2rem;">
      <span class="stack-tag">Next.js</span>
      <span class="stack-tag">React 19</span>
      <span class="stack-tag">TypeScript</span>
      <span class="stack-tag">Tailwind CSS 4</span>
      <span class="stack-tag">Supabase</span>
      <span class="stack-tag">Anthropic SDK</span>
      <span class="stack-tag">Cloudflare Workers</span>
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '-4% 0px' });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
</script>
</body>
</html>
```

- [ ] **Step 2: Open `projects/bip.html` in a browser and verify**

Check:
- Back link routes to `../index.html`
- Hero renders with title, description, status badge, bip.so link
- Meta row renders (Started: Mar 2026, Status: Live unannounced)
- Side-by-side screenshot grid renders (build log + settings)
- Three decision blocks render
- Two vision blocks render
- Stack tags and footer render

- [ ] **Step 3: Commit**

```bash
cd /Users/osamabadr/Desktop/Portfolio
git add projects/bip.html
git commit -m "feat: add BIP case study page"
```

---

## Task 7: Update `about.html` hero copy

**Files:**
- Modify: `about.html`

- [ ] **Step 1: Find the hero section in `about.html`**

Open `about.html` and locate the hero section. It currently has:
```
Senior Product Quality Analyst · AI Product Builder
```
as a title/sub-title.

- [ ] **Step 2: Update the eyebrow and title copy**

Find the hero eyebrow (the small descriptor line above the name). It currently reads something like:
```
Quality Operations · AI · Product · San Jose, CA
```
Replace with:
```
QA &amp; Product Ops · Builder · San Jose, CA
```

Find the role/title line below the name. It currently reads:
```
Senior Product Quality Analyst · AI Product Builder
```
Replace with:
```
Senior QA &amp; Product Ops · Meta Reality Labs · Building pointd, BIP &amp; qa-agent
```

- [ ] **Step 3: Update the `about.html` nav logo link**

Find the nav in `about.html`. The `.nav-name` element should link to `index.html`. If it's currently a `<span>`, replace with an `<a>`:

Find:
```html
<span class="nav-name">Osama Badr</span>
```
Replace with:
```html
<a href="index.html" class="nav-name">Osama Badr</a>
```

- [ ] **Step 4: Open `about.html` in a browser and verify**

Check that the hero section shows the updated copy. Everything else on the about page should look identical to before.

- [ ] **Step 5: Commit**

```bash
cd /Users/osamabadr/Desktop/Portfolio
git add about.html
git commit -m "feat: update about page hero copy and nav link"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Task |
|---|---|
| Hero — new positioning copy | Task 3 |
| No tabs on home page | Task 3 |
| Projects section with cards + screenshots | Task 3 |
| Project card: status badge, problem statement, screenshots, link | Task 3 |
| Order: pointd → qa-agent → BIP | Task 3 |
| Professional section: 4 highlight blocks | Task 3 |
| AI fix workstream — autonomous org-wide pipeline | Task 3 |
| Footer: email, LinkedIn, GitHub | Task 3 |
| Shared styles.css | Task 2 |
| pointd case study — problem, pull quote, 3 decisions, screenshots | Task 4 |
| qa-agent case study — problem, 6-step pipeline, 3 decisions, Meta connection | Task 5 |
| BIP case study — problem, how it works, 3 decisions, vision | Task 6 |
| About page hero copy update | Task 7 |
| Screenshot assets | Task 1 |
| No "coming soon" labels anywhere | All project pages use honest status badges |
| Browser frame mockups on screenshots | Tasks 3, 4, 5, 6 (via `.browser-frame`) |

**Placeholder scan:** No TBDs, TODOs, or incomplete sections found. BIP URL set to `bip.so` — confirm correct domain with user before deploying.

**Type consistency:** `.browser-frame`, `.status-badge`, `.fade-up`, `.back-link` used consistently across all pages via `styles.css`. Case study styles (`.case-hero`, `.case-section`, `.decision`, `.screenshot-wrap`, `.stack-tag`) are duplicated per project page intentionally — each page is self-contained.

**One item to confirm before deploying:** BIP's live URL — used `bip.so` in the case study. Verify this is correct or update to the actual URL.
