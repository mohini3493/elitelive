# EliteWeb — animated home page

React 18 + Vite + Framer Motion.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
- `src/App.jsx` — page assembly (section order)
- `src/components/` — one file per section (Hero, LogoMarquee, SafeSection, ContextGraph, HowItWorks, Stats, Paths, Benchmark, Comparison, Testimonials, FAQ, FinalCTA, Footer)
- `src/styles.css` — all styles; colors are CSS variables at the top

## Before launch
Client names, prices, stats and testimonials are **placeholders** — replace them with your real ones
(see comments in `LogoMarquee.jsx`, `Stats.jsx`, `Benchmark.jsx`, `Testimonials.jsx`).
