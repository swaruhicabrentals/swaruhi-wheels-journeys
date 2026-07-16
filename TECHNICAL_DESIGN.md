# Swaruhi Travels Website Technical Design

## 1. Purpose

This website is the public marketing and lead generation site for Swaruhi Travels. It presents Cab rentals, Tempo Traveller rentals, Vehicle Category details, office pages for Mumbai and Ahmedabad, curated Tour Packages, FAQs, reviews, contact information, and WhatsApp based inquiry flow.

The primary business goal is to convert visitors into calls, WhatsApp inquiries, and quote requests.

## 2. Technology Stack

- Framework: Next.js App Router
- Language: TypeScript
- UI: React components with Tailwind CSS utility classes
- Icons: Lucide React
- Forms: Client side React form with Zod validation
- SEO: Next metadata API, sitemap route, robots.txt, JSON LD structured data
- Deployment target: Vercel

Build command:

```bash
npm run build
```

Vercel output directory should be left blank because Vercel handles `.next` automatically for Next.js.

## 3. High Level Architecture

```text
app/
  layout.tsx                 Global layout, metadata, JSON LD, header/footer/CTAs
  page.tsx                   Home page
  services/                  Core service pages
  mumbai-cab-rentals/        Mumbai office landing page
  ahmedabad-cab-rentals/     Ahmedabad office landing page
  fleet/                     Vehicle Category page
  about/                     Brand story page
  faq/                       FAQ page
  contact/                   Contact and inquiry page
  sitemap.xml/route.ts       Dynamic XML sitemap

src/
  components/                Reusable UI and business components
  lib/                       Site config, content, SEO helpers, metadata helpers

public/
  assets/                    Optimized images, logo, favicon
  robots.txt                 Crawl rules and sitemap URL
```

The app is mostly static and content driven. Business configuration lives in `src/lib/site.ts`, while repeated content such as FAQs, reviews, fleet items, and tour packages lives in `src/lib/content.ts`.

## 4. Global Layout Flow

`app/layout.tsx` wraps every page with:

1. `Header`
2. Page content via `<main>`
3. `Footer`
4. `StickyCTAs`
5. Local business JSON LD

The global metadata uses `SITE.url`, `SITE.name`, and `SITE.description`. Favicons and Apple icons are loaded from `public/assets`.

## 5. Routing Structure

### Primary Pages

| URL | File | Purpose |
| --- | --- | --- |
| `/` | `app/page.tsx` | Homepage and main conversion page |
| `/services` | `app/services/page.tsx` | Overview of service categories |
| `/services/cab-rentals` | `app/services/cab-rentals/page.tsx` | Cab rental service page |
| `/services/tempo-traveller-rentals` | `app/services/tempo-traveller-rentals/page.tsx` | Tempo Traveller page |
| `/services/tour-packages` | `app/services/tour-packages/page.tsx` | Tour packages listing |
| `/fleet` | `app/fleet/page.tsx` | Vehicle Category page |
| `/mumbai-cab-rentals` | `app/mumbai-cab-rentals/page.tsx` | Mumbai office page |
| `/ahmedabad-cab-rentals` | `app/ahmedabad-cab-rentals/page.tsx` | Ahmedabad office page |
| `/about` | `app/about/page.tsx` | Brand story |
| `/why-choose-us` | `app/why-choose-us/page.tsx` | Trust and benefits |
| `/faq` | `app/faq/page.tsx` | Frequently asked questions |
| `/contact` | `app/contact/page.tsx` | Contact details and inquiry form |

### Legacy Redirect Routes

These routes preserve old URL access and redirect to the current URL strategy:

| Old URL | Redirect target |
| --- | --- |
| `/car-rentals` | `/services/cab-rentals` |
| `/cab-rentals` | `/services/cab-rentals` |
| `/tempo-traveller-rentals` | `/services/tempo-traveller-rentals` |
| `/tour-packages` | `/services/tour-packages` |
| `/mumbai-travel-services` | `/mumbai-cab-rentals` |
| `/ahmedabad-travel-services` | `/ahmedabad-cab-rentals` |

## 6. Main User Flows

### Homepage Flow

1. Hero introduces Cab Rentals, Tempo Travellers, and Tour Packages.
2. Quick CTAs route visitors to call or WhatsApp.
3. Inquiry form captures lead details and opens WhatsApp with a structured message.
4. Service cards move users to focused service pages.
5. Vehicle Category cards present vehicle capacity options.
6. Popular Tour Packages highlight common trips.
7. Mumbai and Ahmedabad office cards establish local presence.
8. Reviews, gallery, FAQ, and contact blocks build trust.

### Inquiry Flow

`src/components/InquiryForm.tsx` is a client component.

Form fields:

- Name
- Phone
- Pickup city
- Destination
- Start date
- End date
- Service
- Passengers
- Optional message

Validation is handled using Zod. On successful submit, the form creates a pre-filled WhatsApp URL using `SITE.whatsapp` and opens it in a new tab. No backend storage is currently used.

### Contact Flow

The contact page shows:

- Phone
- WhatsApp
- Email
- Instagram
- Facebook
- Hours
- Mumbai address
- Ahmedabad address
- Inquiry form

## 7. Shared Configuration

### `src/lib/site.ts`

This is the central source for business details:

- Business name
- Domain
- Phone and WhatsApp
- Google Business Profile link
- Instagram and Facebook links
- Email
- Office addresses
- Opening hours
- Main navigation

Any change to NAP, social links, or domain should usually happen here first.

### `src/lib/content.ts`

This stores reusable content:

- Homepage FAQs
- Reviews
- Vehicle categories
- Tour packages

Vehicle categories currently include:

- Dzire
- Ertiga
- Innova Crysta
- Tempo Traveller
- Urbania

Tour packages currently include Mumbai routes and Ahmedabad routes, grouped by `from`.

## 8. SEO and Structured Data

### Metadata

`src/lib/metadata.ts` provides `makeMetadata`, used by individual pages to generate:

- Title
- Description
- Canonical path
- Open Graph metadata
- Twitter card metadata

### Structured Data

`src/lib/seo.ts` provides helpers for:

- LocalBusiness / AutoRental / TravelAgency JSON LD
- Breadcrumb JSON LD
- FAQ JSON LD
- Service JSON LD

Global local business schema is injected in `app/layout.tsx`. Page specific schema is injected through `JsonLd` components.

### Sitemap

`app/sitemap.xml/route.ts` generates an XML sitemap using `SITE.url`.

### Robots

`public/robots.txt` allows crawling and points to:

```text
https://swaruhitravels.com/sitemap.xml
```

## 9. Assets

Images are stored in `public/assets`.

Naming pattern:

```text
swaruhi-travels-[section]-[description].webp
```

Examples:

- `swaruhi-travels-logo-circular.png`
- `swaruhi-travels-mumbai-office-bandra-worli-sea-link.webp`
- `swaruhi-travels-tour-package-goa.webp`
- `swaruhi-travels-vehicle-fleet-dzire.webp`

Images are referenced by static `/assets/...` paths in page files. Tour package image lookup is managed inside `app/services/tour-packages/page.tsx`.

## 10. Components

Important business components:

- `Header`: navigation and logo
- `Footer`: contact details, addresses, social links, sitemap-like link groups
- `StickyCTAs`: persistent call/WhatsApp action buttons
- `InquiryForm`: lead capture and WhatsApp handoff
- `FAQList`: reusable FAQ accordion
- `JsonLd`: structured data script output
- `SectionHeader`, `Breadcrumbs`, `CtaBand`: common layout primitives

UI primitives under `src/components/ui` are reusable low-level components.

## 11. Styling

Global styles are defined in:

- `app/globals.css`
- `src/styles.css`

The visual system uses navy, cream, and gold brand colors, rounded cards, utility classes, and responsive grids. Most page layout is implemented directly with Tailwind utility classes.

## 12. Deployment Design

Recommended Vercel settings:

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | Leave blank |

Production domain:

```text
https://swaruhitravels.com
```

Before deploying, run:

```bash
npm.cmd run build
```

On Windows PowerShell, use `npm.cmd` if `npm` is blocked by execution policy.

## 13. Maintenance Notes

- Update business details in `src/lib/site.ts`.
- Add or edit tour packages in `src/lib/content.ts`.
- Add tour image constants and map keys in `app/services/tour-packages/page.tsx`.
- Add or edit vehicle categories in `src/lib/content.ts`.
- Keep legacy redirect pages unless old URLs are no longer needed.
- After domain changes, update both `SITE.url` and `public/robots.txt`.
- Run TypeScript/build checks before deployment.

## 14. Known Constraints

- Inquiry submissions are not stored in a database.
- WhatsApp is the primary lead handoff mechanism.
- Reviews are static, while Google Business Profile is linked separately.
- Office and service content is manually maintained in page files and shared content files.

