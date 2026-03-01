# Inkpath

**Print your path to productivity. No screens needed.**

A web app that generates beautiful, printable planner templates designed to help you organize every area of your life — on paper. With 24 templates across 10 categories, PDF & Word export, and support for A4/A5 paper sizes, Inkpath is built for people who want to reduce screen time and take control of their productivity using pen and paper.

---

## v2.0.0 — What's New

- **24 templates** (expanded from 11) across 10 categories
- **PDF export** — High-quality single-page PDF via browser or Electron
- **Word export** — `.doc` download with correct A4/A5 page dimensions and preserved table layouts
- **New categories** — Yearly Planning, Finance, Health & Fitness, Productivity, and Personal Growth
- **A5 optimizations** — Responsive layouts that adapt gracefully to smaller paper

---

## Features

### 24 Printable Templates

| # | Category | Template | Description |
| --- | -------- | -------- | ----------- |
| 1 | **Daily** | Daily Planner | Priorities, time blocks, tasks, procrastination guard, energy tracker, screen-free goals, end-of-day review |
| 2 | | Daily Time Blocker | Morning / afternoon / evening time-blocking with time waster tracker |
| 3 | | Deep Focus Day | Pomodoro-style deep work sessions with distraction log and focus scoring |
| 4 | **Weekly** | Weekly Planner | Day-by-day task grid with screen-free commitments and meal planning |
| 5 | | Weekly Habit Tracker | 12-habit grid with scoring, streaks, and time waster analysis |
| 6 | | Weekly Review | Wins, challenges, procrastination audit, and time audit |
| 7 | **Monthly** | Monthly Planner | Full calendar grid with key dates and focus areas |
| 8 | | Monthly Goal Setter | Big 3 goals with action steps, anti-procrastination plan, reward system |
| 9 | | Monthly Habit Grid | 30/31-day habit tracking grid with monthly summary |
| 10 | **Anti-Procrastination** | Procrastination Buster | Eisenhower matrix, task breakdown into tiny steps, time trap tracker |
| 11 | | Accountability Sheet | Morning commitments, hourly accountability log, honesty check, day scoring |
| 12 | **Yearly** | Yearly Vision Board | Year-at-a-glance goals, quarterly milestones, vision & theme |
| 13 | | Quarterly Planner | 3-month breakdown with monthly targets, key dates, review |
| 14 | **Finance** | Monthly Budget | Income vs. expenses, category breakdown, savings target |
| 15 | | Expense Log | Daily expense tracking with category, amount, notes |
| 16 | | Savings Goals | Multiple savings goals with progress bars and milestones |
| 17 | **Health & Fitness** | Workout Log | Exercise tracking with sets, reps, duration, notes |
| 18 | | Meal Planner | Weekly meal grid (breakfast, lunch, dinner, snacks) with grocery list |
| 19 | | Sleep Tracker | Nightly sleep log with quality rating, bedtime/wake patterns |
| 20 | **Productivity** | Brain Dump | Free-form capture space, then sort into action/delegate/delete |
| 21 | | Project Planner | Project breakdown with tasks, deadlines, milestones, status |
| 22 | | Routines Builder | Morning and evening routine designer with time estimates |
| 23 | **Personal** | Journal | Guided daily journal with gratitude, highlights, reflection |
| 24 | | Reading Log | Track books with ratings, key takeaways, quotes |
| 25 | | Relationships | Contact tracker with birthdays, last contacted, notes |
| 26 | | Decision Maker | Pros/cons matrix with weighted scoring |
| 27 | | Emergency Reference | Important contacts, medical info, accounts — one-page reference |

### Key Features

- **A4 & A5 paper sizes** — Switch between sizes instantly; layouts adapt to fit
- **PDF export** — One-click high-fidelity PDF download (browser via html2pdf.js, Electron via native `printToPDF`)
- **Word export** — `.doc` file with correct page dimensions (A4 / A5), preserved table rows, and MS Office–compatible formatting
- **Print-optimized** — Clean, ink-friendly designs that look great on paper
- **3 visual styles** — Minimal, Lined, or Dot Grid backgrounds
- **Anti-procrastination focus** — Templates include elements to combat time wasting
- **Screen-free awareness** — Built-in screen time tracking and digital detox sections
- **Electron desktop app** — Package as a native app for Windows, macOS, or Linux
- **Auto-versioning** — Version is synced from `package.json` to the UI automatically

---

## Quick Start

### Web (no install)

```text
Open index.html in any modern browser. That's it.
```

### Desktop App (Electron)

```bash
# Install dependencies
npm install

# Run the app
npm start

# Build distributable
npm run build:win    # Windows (.exe)
npm run build:mac    # macOS (.dmg)
npm run build:linux  # Linux (.AppImage)
```

---

## Usage

1. **Select a template** from the dropdown (24 options across 10 categories)
2. **Choose your paper size** — A4 or A5
3. **Set the start date** (templates auto-fill dates)
4. **Pick a visual style** — Minimal, Lined, or Dot Grid
5. Click **Generate**
6. **Export** your template:
   - **Print** — `Ctrl+P` / browser print dialog
   - **Export PDF** — Click the PDF button for a high-quality download
   - **Export Word** — Click the Word button for a `.doc` file
7. Write on paper. Win at life.

### Keyboard Shortcuts (Electron)

| Shortcut         | Action     |
| ---------------- | ---------- |
| `Ctrl+P`         | Print      |
| `Ctrl+Shift+S`   | Export PDF |

---

## Project Structure

```text
Inkpath/
├── index.html              # Main HTML entry point
├── main.js                 # Electron main process
├── preload.js              # Electron preload (IPC bridge)
├── package.json            # Node/Electron config & build settings
├── scripts/
│   └── sync-version.js     # Auto-syncs version from package.json → version.js
├── css/
│   ├── styles.css          # App UI styles
│   ├── print.css           # Print & paper-size styles
│   └── templates.css       # Template component styles
├── js/
│   ├── app.js              # Main app controller (generate, print, PDF, Word)
│   ├── version.js          # Auto-generated version config
│   ├── lib/
│   │   └── html2pdf.bundle.min.js  # html2pdf.js v0.10.2 (local bundle)
│   └── templates/
│       ├── daily.js                # Daily Planner, Time Blocker, Deep Focus
│       ├── weekly.js               # Weekly Planner, Habits, Review
│       ├── monthly.js              # Monthly Planner, Goals, Habit Grid
│       ├── anti-procrastination.js # Procrastination Buster, Accountability
│       ├── yearly.js               # Yearly Vision, Quarterly Planner
│       ├── finance.js              # Budget, Expense Log, Savings Goals
│       ├── health.js               # Workout Log, Meal Planner, Sleep Tracker
│       ├── productivity.js         # Brain Dump, Project Planner, Routines
│       └── personal.js            # Journal, Reading, Relationships, Decisions, Emergency
└── assets/                 # Icons and images
```

---

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| UI | Vanilla HTML / CSS / JavaScript (no framework) |
| PDF Export | [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) v0.10.2 (html2canvas + jsPDF) |
| Word Export | HTML blob with MS Office XML namespaces (`w:sectPr`, `w:pgSz`) |
| Desktop | Electron 28 with contextBridge IPC |
| Packaging | electron-builder (NSIS / DMG / AppImage) |
| Versioning | Auto-sync script (`package.json` → `version.js`) |

---

## License

MIT
