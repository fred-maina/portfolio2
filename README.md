# Fred Maina — portfolio

An editorial portfolio with project case studies and embedded Google Calendar
scheduling, built with React, TypeScript, and Vite.

## Updating portfolio content

Edit [`src/data.ts`](src/data.ts) when your job, biography, projects, links,
contact details, CV, or coffee-chat settings change. `src/App.tsx` is the page
layout and should not need routine content edits.

The editable sections are:

- `profile`: name, headline, introduction, current role, and portrait
- `links`: CV, email, LinkedIn, and GitHub
- `projects`: project descriptions, evidence, images, links, and stacks
- `experience`: employers, roles, dates, summaries, and highlights
- `about`: biography, tools, education, and certification
- `coffee`: booking description, details, and Google Calendar URL

## Images

Live assets in `public`:

- `favicon-48.png`
- `apple-touch-icon.png`
- `fred-maina-transparent-clean.webp`
- `multitouch-storefront.webp`
- `multitouch-product.webp`
- `multitouch-admin.webp`
- `anonmsg-conversation.webp`
- `og-image.jpg`

The site also includes a custom `public/404.html`, Vercel permanent redirects
in `vercel.json`, locally hosted fonts, and responsive `-720.webp` image
variants for smaller screens.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm audit
```

## Google Analytics 4

The production stream is configured with Measurement ID `G-0KEFVWQ33N`.
`VITE_GA_MEASUREMENT_ID` can optionally override it for another environment.
Rebuild and redeploy the website after analytics code changes.

The site records these custom events:

- `view_cv`
- `book_coffee`
- `open_booking_page` for the mobile Google Calendar handoff
- `view_available_times`
- `view_project` with a `project` parameter
- `contact_email`
- `linkedin_click` with a `placement` parameter
- `open_social_profile` with a `network` parameter

Events appear in GA4 under **Reports → Engagement → Events**. Traffic sources
appear under **Reports → Acquisition → Traffic acquisition**.
