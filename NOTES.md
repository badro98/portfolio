# Portfolio — Project Notes

## Current Status

Five stacked branches from the 2026-08 audit are committed locally and NOT yet pushed or merged: `fix/accuracy-corrections` → `feat/metrics-and-achievements-refresh` → `feat/positioning-rewrite` → `feat/github-link` → `feat/interview-prep-kit-case-study`. Together they correct the UX Gap auto-filing claims, replace the rate-limited Meta defect metrics with the real ones, reposition the hero and "what I'm looking for" around ops roles, re-add the GitHub link, and swap BIP for the Interview Prep Kit case study. Card order is now pointd → Interview Prep Kit → qa-agent → UX Gap. Plan doc: `docs/superpowers/plans/2026-08-04-portfolio-audit-and-ipk-case-study.md`.

---

## Known Bugs

_(none currently tracked)_

---

## In Progress

_(nothing — pick from Up Next)_

---

## Up Next

- [ ] Push and merge the five stacked branches in order (merge WITHOUT `--delete-branch`, retarget the next PR to main, then delete)
- [ ] Add a resume PDF download — needs a neutral base resume; every PDF in `Cowork Jobs/` is job-tailored (plan decision D5)
- [ ] Confirm current UX Gap app count; "2 apps" is still the March 2026 snapshot (plan decision D2)
- [ ] **Recount qa-agent workflow runs and restore the stat.** The "260+ workflow runs" meta item, the "260+" callout number, and the "263 runs" screenshot caption were all removed on 2026-08-05: that total accumulated across pointd + BIP, and the page now says pointd + Interview Prep Kit, so the number no longer matches the repos named next to it. Get a current count across the repos qa-agent actually runs on now, then put the stat back. The `qa-agent-runs.png` screenshot still visibly shows the old run list and should be recaptured at the same time.
- [ ] Delete stale remote branches `origin/polish-about-and-animations` and `origin/statement-hero`
- [ ] Writing section — hold until at least two posts are drafted (plan PR6)
- [ ] Clean up qa-agent GitHub page (README, usage instructions, make usable by others)

---

## GitHub Issues

_(none open)_

---

## Session Log

- 2026-05-28 — Resolved 5 open audit items (phone removal, GitHub link removal, pointd status sync, card fan fix, card clickability). Reordered project cards, rewrote pointd case study, and overhauled hero headline with Meta-framing copy.
- 2026-08-05 — Acted on the portfolio audit + the corrected internal Meta metrics. Five branches committed locally (see Current Status). Removed BIP from the site entirely (page, 3 screenshots, all cross-links) and added the Interview Prep Kit case study with screenshots captured from a redacted copy of the live checkout. Recoverable: `git checkout <sha> -- projects/bip.html assets/screenshots/bip-*.png`.
- 2026-05-29 — Rebuilt hero with Meta Horizon avatar (circular crop, green dot, white ring outline), favicon, "Hi, I'm Osama" intro label. Dropped DM Mono font site-wide (remapped to DM Sans). Removed email from all footers. Refined hero headline to "I've spent 6 years at Meta making sure things didn't break at scale. That taught me to see systems, not symptoms. Now I'm building products with that same lens." All changes pushed to main.
