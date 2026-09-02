# Fredrick Maina — portfolio

A statically generated editorial portfolio. The delivered page contains the
complete HTML, so it works without React and can be read directly with `curl`.

## Updating portfolio content

Edit [`content/portfolio.mjs`](content/portfolio.mjs) when your job, biography,
projects, links, contact details, CV, or coffee-chat settings change. Then run:

```bash
npm run render
```

The generator writes `index.html`. The editable sections are `profile`,
`links`, `projects`, `experience`, `about`, and `coffee`.

## Commands

```bash
npm run dev      # render the HTML and start the local server
npm run render   # regenerate index.html after content edits
npm run build    # render and create the deployable dist directory
npm run preview  # serve the production build
npm run lint
npm audit
```

The `dist` directory can be hosted by any static host. Vercel additionally uses
`vercel.json` for redirects and `public/404.html` for missing pages.

## Structure

- `content/portfolio.mjs`: editable portfolio content
- `scripts/render-site.mjs`: static HTML generator
- `src/index.template.html`: document template and metadata
- `src/site.js`: navigation, reveals, analytics, and calendar enhancement
- `src/index.css` and `src/site.css`: site styling
- `public`: images, fonts, favicon, social image, sitemap, robots, and 404 page

Responsive image variants use `-720.webp` and `-1280.webp` suffixes. The
portrait also has a `-480.webp` variant.

## Google Analytics 4

The production stream uses Measurement ID `G-0KEFVWQ33N`. The Google script is
kept off the critical rendering path and loads on first interaction or after
five seconds. Events are queued before it loads.

Tracked events:

- `view_cv`
- `book_coffee`
- `open_booking_page`
- `view_available_times`
- `view_project` with `project`
- `contact_email`
- `linkedin_click` with `placement`
- `open_social_profile` with `network`
