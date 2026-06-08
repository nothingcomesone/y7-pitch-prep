# Y7 Pitch Prep — Static Website

A standalone, no-backend web tool for Year 7 Chinese students preparing for the **Family Pitch** (Task 2, Term 2 2026). Pitch day: **Monday 1 June**.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Landing page with 4 feature cards and 2-lesson plan |
| `pitch-builder.html` | 6-element form with chip-style word banks and live pitch preview |
| `flashcards.html` | Click-to-flip + match game across 5 vocab decks |
| `sentence-builder.html` | Tap pinyin words in correct order (10 sentences with distractors) |
| `reference.html` | Quick reference — 6 elements, golden rules, deadly errors, all word banks |
| `style.css` | Shared styles (navy/red, mobile-first responsive) |
| `app.js` | Shared vocab data, localStorage helpers, header navigation, TTS |

## Differences from the Y8 site

The Y8 Pitch Prep site is the parent template. This Y7 build differs in:

- **6 elements (①–⑥)** instead of 8 steps, to match the Y7 Student Pack exactly.
- **Narrower vocab** — only words taught in Y7 Term 2 Topics 1–5:
  - Appearance: `gāo / ǎi / dà / xiǎo` only (no 漂亮/帅/胖/瘦)
  - Personality: `kuàilè / cōngming / kě'ài / yánlì` only
  - Cities include Lúndūn (London) per the lesson log.
- **2-lesson workflow** instead of 3.
- **~60-second pitch** instead of 60–90s.
- **Navy/red palette** to match Y7 print materials.
- **localStorage key `y7pitchprep.v1`** so it doesn't collide with Y8 on shared browsers.

## How to test locally

Just open `index.html` in any browser. No build step, no server needed.

```bash
cd Y7_PitchPrep_Website
open index.html       # macOS
# or just double-click the file
```

## How to deploy to GitHub Pages (free public URL)

You'll get a URL like `https://YOUR-USERNAME.github.io/y7-pitch-prep/` that works on any device.

### One-time setup (15 min)

1. **Create a GitHub account** at https://github.com if you don't have one. Use your school email.
2. Once logged in, click the **+** icon (top right) → **New repository**.
3. Repository name: `y7-pitch-prep` (lowercase, dashes — this becomes part of the URL).
4. Set it to **Public**. Tick **Add a README file**. Click **Create repository**.

### Upload the site

5. On the repo page, click **Add file** → **Upload files**.
6. Drag the **contents** of this `Y7_PitchPrep_Website` folder into the upload area:
   - `index.html`
   - `pitch-builder.html`
   - `flashcards.html`
   - `sentence-builder.html`
   - `reference.html`
   - `style.css`
   - `app.js`
   - `README.md`
7. Scroll down. Type a commit message like `initial site`. Click **Commit changes**.

### Turn on Pages

8. In your repo, click **Settings** (top tab) → **Pages** (left sidebar).
9. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
10. **Branch**: `main`, folder: `/ (root)`. Click **Save**.
11. Wait ~30 seconds. The page will show: *Your site is live at https://YOUR-USERNAME.github.io/y7-pitch-prep/*
12. Click that URL to test it. Bookmark it. Share with your classes.

### Updating later

To change a file (e.g. add more sentences), edit it locally, then drag the updated file back into the GitHub repo via **Add file** → **Upload files** (it will overwrite). The site auto-rebuilds in ~30 seconds.

## Suggested lesson plan (2 × 55 min)

**Lesson 1 — Lock the draft**
- 10 min Flashcards warm-up (family + appearance)
- 25 min Pitch Builder — lock Elements ①–④ for both family members
- 15 min Sentence Builder — focus on age and nationality patterns
- 5 min exit ticket — read your draft aloud to a partner

**Lesson 2 — Polish + dry-run**
- 5 min Flashcards (personality + cities)
- 20 min Pitch Builder — finish Elements ⑤–⑥, full preview
- 15 min Reference — drill the 5 deadly errors
- 10 min Print Cue Cards (Cmd/Ctrl + P on Pitch Builder), read aloud full pitch to partner
- 5 min closer — Mon 1 June: NO notes in hand, slide is your only prompt

## Features at a glance

- **Pitch Builder** — Tap chips to fill in each element. Live preview rebuilds the full pitch as you go. Word count + spoken-time estimate. Family Member 1 / Family Member 2 toggle. Print Cue Cards button (uses browser print).
- **Flashcards** — 5 decks (family, appearance, personality, nationalities, cities). Flip mode shows English → tap → reveals pinyin + character. Match mode picks random pairs and times the student.
- **Sentence Builder** — 10 target sentences using only Y7 vocab. Pinyin chips shuffled with 1–2 distractors (typically `shì` or the wrong linker). Tap chips into the build zone in correct order. Score tracker.
- **Reference** — One-page cheat sheet of all 6 elements, the 5 deadly errors, full vocab banks, hěn/hé/dànshì grammar deep dive, and marking criteria.
- **Pronunciation (🔊)** — Every chip and sentence has a play button (uses the browser's built-in Chinese voice via Web Speech API).
- **Auto-save** — All progress in Pitch Builder persists in `localStorage` (per-browser, per-device).
- **Print-friendly** — Hit `Cmd/Ctrl + P` on the Pitch Builder page to print just the pitch and elements (the live preview, nav, and buttons are hidden in print).

## Tech notes

- Pure HTML / CSS / vanilla JS. No frameworks, no build step, no backend, no analytics, no cookies.
- localStorage key: `y7pitchprep.v1`
- Tested on Chrome, Safari, Edge (desktop + mobile).
- All assets self-contained — no external CDN dependencies, so it works offline once loaded.

## Customising

- **Add more vocab**: edit the `VOCAB` object at the top of `app.js`.
- **Add more sentences**: edit the `SENTENCES` array in `app.js`.
- **Change colours**: edit the `:root` variables at the top of `style.css`.
- **Change school name / year**: edit the footer text in `index.html`.
