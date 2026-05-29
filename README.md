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
- Review the RU / BE / PL / EN translations before launch.
- Connect Calendly to Google Calendar for live availability and reserved slots.

## Stripe verification support

The site includes visible business description, contact details, prices, Stripe payment links, refund policy placeholder, cancellation policy placeholder, Privacy Policy and Terms & Conditions pages.

## Google Calendar

Calendly is the recommended booking layer. Connect the Calendly account to Google Calendar to automatically check availability, reserve slots, and send confirmations. A fully custom Google Calendar booking flow is possible, but it requires Google OAuth, API routes, token storage, and extra privacy/security review.
# human-strategy-lab
