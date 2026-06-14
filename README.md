# Human Strategy Lab

Premium consulting website for Igor Smirnov, built with Next.js 15, React, TypeScript, Tailwind CSS and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

The project is ready for Vercel deployment and the custom domain `igorsmirnovconsulting.com`.

## Launch checklist

- Replace policy placeholder wording after legal review.
- Add real certificates or document links under `public/documents` if needed.
- Add approved client testimonials only with consent.
- Replace or add additional founder photos in `public/images`.
- Connect domain DNS in Vercel.
- Review the professionally adapted RU / BE / PL / EN copy before launch.
- Connect Calendly to Google Calendar for live availability and reserved slots.
- Public upload controls are intentionally not included; diplomas, certificates, photos, and reviews should be added privately through the codebase, CMS, or storage integration.

## Stripe verification support

The site includes visible business description, contact details, prices, Stripe payment links, refund policy placeholder, cancellation policy placeholder, Privacy Policy and Terms & Conditions pages.

## Current structure

- About
- Services
- Couples Therapy
- Wellbeing at Work
- Trainers
- Training Topics
- Group Work benefits
- Cinematic Reflection Club
- Events and announcements
- Business group landing page
- Godna Wrocław office address and link
- PsyConnect co-founder link
- Booking
- Contact

## SEO pages

- `/individual-consultation`
- `/couples-therapy`
- `/group-therapy`
- `/wellbeing-at-work`
- `/film-club`
- `/events`
- `/business-group`
- `/ne-vyvozhu`

## Events and announcements

The simple private publishing flow is file-based:

1. Open `content/events.ts`.
2. Copy an existing event object.
3. Change `id`, `date`, `location`, `title`, `description`, `details`, `tags`.
4. Paste a Google Form link into `registrationUrl`.
5. If you want an announcement image, add it to `public/images/events` and set the event `image` path.

This keeps public upload buttons off the website. For a true visual admin panel later, the clean options are Sanity, Decap CMS, or Supabase with protected login.

## Business group landing

The page `/business-group` is a standalone landing page for a therapy-informed group for entrepreneurs and leaders. Replace the placeholder Google Form URL in `components/BusinessGroupLanding.tsx` with your real application form before publishing.

The page `/ne-vyvozhu` is the current detailed landing page for the Wrocław therapy group “Не вывожу.” with start date, format, facilitators, price, topics and Telegram registration links.

## Google Calendar

Calendly is the recommended booking layer. Connect the Calendly account to Google Calendar to automatically check availability, reserve slots, and send confirmations. A fully custom Google Calendar booking flow is possible, but it requires Google OAuth, API routes, token storage, and extra privacy/security review.
# human-strategy-lab
# human-strategy-lab
