# Abhishek Kumar Verma — Portfolio

A React + Vite portfolio site, styled in a navy / ivory / gold "dossier" theme with
full light & dark mode support.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

Each section of the site is an independent component with its own CSS file,
under `src/components/<SectionName>/`. Shared design tokens (colors, fonts,
spacing, light/dark theme variables) live in `src/index.css`.

## Where to edit content

Every section's text lives in a small data object or array at the top of its
`.jsx` file — you generally don't need to touch the markup, just the data:

| Section | File |
|---|---|
| Name, role, intro | `src/components/Hero/Hero.jsx` |
| Summary, objective, focus | `src/components/About/About.jsx` |
| Skill categories | `src/components/Skills/Skills.jsx` |
| Degrees | `src/components/Education/Education.jsx` |
| Jobs | `src/components/Experience/Experience.jsx` |
| Projects | `src/components/Projects/Projects.jsx` |
| Certifications | `src/components/Certifications/Certifications.jsx` |
| Email / phone / location | `src/components/Contact/Contact.jsx` |

## Things to finish before you publish

- **GitHub & LinkedIn URLs** — currently placeholder `#` links in `Hero.jsx`
  and `Contact.jsx`. Search for `TODO` comments to find them.
- **Certifications** — the resume didn't list any, so the section currently
  shows an empty state. Add entries to the `CERTIFICATIONS` array once you
  have some.
- **Project links & screenshots** — `Projects.jsx` uses a stylized
  initial-letter placeholder instead of real screenshots, and `githubUrl` /
  `liveUrl` are placeholders. Swap in real repo links, live URLs, and (optionally)
  real screenshots in `src/assets/images/`.
- **Contact form** — `Contact.jsx`'s form is front-end only; it shows a
  confirmation message but doesn't actually send anything. Wire it up to a
  service like Formspree, EmailJS, or your own backend API to receive
  messages for real.
- **Resume file** — your resume PDF is already in `public/resume/`, used for
  both the live preview (an `<iframe>`) and the download buttons. Replace
  that file whenever you update your resume — no code changes needed.

## Theme toggle

Implemented in `App.jsx` with a `theme` state stored in `localStorage`
(`portfolio-theme`) and applied via a `data-theme` attribute on the root
`<html>` element. It defaults to the visitor's OS-level light/dark preference
the first time they visit, then remembers their explicit choice after that.
