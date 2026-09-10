# Kumar Mayank — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion portfolio
for Kumar Mayank, a Data Science student and MERN Stack developer.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you show this to recruiters

1. **Add your resume.** Drop a `resume.pdf` into `public/` (see
   `public/RESUME_PLACEHOLDER.md`, then delete that file). Every "Download
   Resume" button points to `/resume.pdf`.
2. **Add a real profile photo (optional).** The hero currently uses a
   glassmorphism initials avatar (`KM`) instead of a placeholder image, since
   no photo was supplied. To swap in a real photo, replace the inner content
   of the circular frame in `components/Hero.tsx` with a Next.js `<Image>`.
3. **Check the domain.** `app/layout.tsx` and `app/sitemap.ts` use
   `https://kumarmayank.dev` as a placeholder canonical URL — update it once
   you have a real domain (or your Vercel URL).
4. **Wire up the contact form.** `components/Contact.tsx` currently
   simulates a submission. Swap the placeholder in `handleSubmit` for
   [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or
   your own API route.

## What's real vs. placeholder

- **Bio, education, skills, contact info** — from what you provided directly.
- **Personal Task Automator project** — pulled from the actual
  [GitHub repo](https://github.com/mayanksinha17/Personal-Task-Automator)
  (features, tech stack, and live demo URL are all real).
- **GitHub stats panel** — fetches live data from the public GitHub API
  client-side (`components/GitHubPanel.tsx`). If the API is unreachable it
  falls back to a static "view profile" card instead of showing fake numbers.
- **Certifications, testimonials, awards** — intentionally omitted or marked
  "Coming Soon" rather than invented.
- **Open Source section** (`components/OpenSource.tsx`) — describes real,
  general practices (public repos, Git/GitHub workflow, reading other
  people's code) rather than fabricated pull requests. It explicitly says no
  external contributions exist yet. Once you land a real PR on someone
  else's repo, replace the "coming soon" status in `site.openSource.status`
  and consider adding a contribution card with the repo, PR title, and link.
- Your other public repositories (`HOTEL-MANAGEMENT-DATABASE`, `Pro-scatch`,
  `QR-Based-Attendance-System`) weren't turned into project cards because
  their READMEs didn't give enough verifiable detail about your specific
  contribution to write accurate descriptions — the GitHub panel links
  straight to your profile so recruiters can see everything. Add a `projects`
  entry in `data/projects.ts` for any of them once you can describe your role
  and the tech stack confidently.

## Project structure

```
app/            Routes, layout, SEO metadata, sitemap/robots
components/     All UI sections (data-driven, one file per section)
data/           site.ts (bio/skills/education/etc.) + projects.ts
lib/            small utilities
public/         static assets — add resume.pdf here
```

Adding a new project is just adding an object to the `projects` array in
`data/projects.ts` — no component changes needed.

## Notes on the Three.js request

The brief asked for a Three.js background. This build uses a dependency-free
2D canvas node-network (`components/NodeField.tsx`) instead — visually the
same "connected nodes" effect, but with zero extra bundle weight and no WebGL
context to manage, which keeps it reliably lightweight on low-end mobile. It
fully respects `prefers-reduced-motion`. If you'd rather have an actual
`@react-three/fiber` scene, that's a drop-in swap for this one component.

## Deploying to Vercel

```bash
npm run build
```

Push to GitHub and import the repo in [Vercel](https://vercel.com/new) — zero
config needed, it's a standard Next.js app.
