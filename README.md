# Johnson Law Center

Premium personal injury law firm website for Johnson Law Center, Gloucester, VA.

## Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4
- React 19

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Content editing

All content lives in typed data files. Edit these to update the site without
touching components:

- `data/site.ts` for firm name, address, phone numbers, navigation, and footer credit
- `data/practiceAreas.ts` for practice area pages and copy
- `data/reviews.ts` for review excerpts shown across the site
- `data/serviceAreas.ts` for service area entries
- `data/faqs.ts` for per practice area FAQ content

## Forms

The consultation form posts to `app/api/consultation/route.ts`. This handler
validates input and returns a success response. Connect to an email provider
(Resend, SMTP, Formspree, or similar) by replacing the success path with the
provider call.

## Reviews

Reviews on the site use approved excerpts from `data/reviews.ts`. The Reviews
page also exposes a link to the Google Business Profile that should be
replaced with the live URL before launch.

## Deploy

The project builds cleanly with `next build` and deploys to Vercel with no
additional configuration.

## Credit

Website built by RSS World Network · info@rssworldnet.work
