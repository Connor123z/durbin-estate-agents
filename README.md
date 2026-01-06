# Durbin Estate Agents (Clean, Working Vercel Deploy)

This is a clean Next.js 14 App Router site (JavaScript only — no TypeScript) to avoid build/typecheck issues.

## Local run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Environment variables (Vercel)
Email (forms):
- RESEND_API_KEY
- LEADS_TO_EMAIL = sales@durbinestateagents.co.uk
- LEADS_FROM_EMAIL = leads@durbinestateagents.co.uk

Google Reviews:
- GOOGLE_PLACES_API_KEY

Optional:
- GA4_MEASUREMENT_ID
- APEX27_FEED_URL
