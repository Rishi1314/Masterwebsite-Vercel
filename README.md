# rishiraj.vercel.app

Personal portfolio of **Rishi Raj Bobbarapalli**, a Product Development Engineer at Software Toolbox (MS CS, UNC Charlotte).

Live site: https://rishiraj.vercel.app

Built with Next.js 15 (App Router), React 19, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Run locally

```bash
npm ci
npm run dev        # http://localhost:3000
```

Before pushing:

```bash
npm run lint
npm run build      # also type-checks
```

## Updating content

All text content lives in **`data/profile.ts`**:

| What | Export |
| --- | --- |
| Name, title, hero subtitle, email, SEO description | `site` |
| GitHub / LinkedIn links | `socials` |
| About paragraph, "building now" card, stack pills | `about` |
| Experience timeline (keep newest first) | `experience` |
| Projects (the first one is featured) | `projects` |
| Tech Stack section | `skillCategories`, `certification` |

Components in `components/` handle layout only. Certificate images live in `public/certificates/`.

## Project layout

```
app/
  layout.tsx            metadata, JSON-LD, analytics, skip link
  page.tsx              section order
  icon.svg              favicon ("RR" monogram)
  opengraph-image.tsx   generated link-preview image
  robots.ts, sitemap.ts
components/             page sections (Hero, Grid, Experience, Projects, Skills, Contact)
components/ui/          reusable visual pieces (timeline, bento grid, navbar, backgrounds)
data/profile.ts         site content
```

## Analytics

Page views use [Vercel Web Analytics](https://vercel.com/docs/analytics). Turn it on under the project's **Analytics** tab in the Vercel dashboard. The script only loads on Vercel deployments.
