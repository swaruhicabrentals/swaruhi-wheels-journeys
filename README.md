# Swaruhi Travels

Premium travel website for Swaruhi Travels, built with Next.js App Router, TypeScript, Tailwind CSS, TanStack Query, and Radix UI components.

The site promotes chauffeur-driven car rentals, Tempo Traveller rentals, fleet options, city travel services, and tour packages for Mumbai and Ahmedabad.

## Features

- Next.js App Router with file-based routes under `app/`
- TypeScript throughout the app
- Tailwind CSS 4 styling with the existing navy and gold design system
- Radix UI component library in `src/components/ui`
- TanStack Query provider for client-side data workflows
- Responsive header, footer, sticky call and WhatsApp CTAs
- Inquiry form with Zod validation and WhatsApp handoff
- SEO metadata for each page using the Next.js metadata API
- Local business JSON-LD and sitemap route
- Optimized page imagery through `next/image`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI
- TanStack Query
- Lucide React icons
- React Hook Form / Zod utilities
- ESLint and Prettier

## Requirements

Use Node.js `20.9.0` or newer. Next.js 16 will not build on older Node versions.

Check your version:

```bash
node --version
```

On Windows PowerShell, if `npm install` is blocked by execution policy, use:

```powershell
npm.cmd install
npm.cmd run build
```

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

Run the production server after building:

```bash
npm run start
```

## Scripts

```bash
npm run dev      # Start Next.js dev server
npm run build    # Build production app
npm run start    # Serve production build
npm run lint     # Run ESLint
npm run format   # Format files with Prettier
```

## Project Structure

```text
app/
  layout.tsx                      # Root layout, fonts, metadata, providers
  providers.tsx                   # TanStack Query provider
  globals.css                     # Tailwind CSS and design system
  page.tsx                        # Home page
  error.tsx                       # App error boundary
  not-found.tsx                   # 404 page
  sitemap.xml/route.ts            # Sitemap XML route
  about/page.tsx
  services/page.tsx
  car-rentals/page.tsx
  tempo-traveller-rentals/page.tsx
  tour-packages/page.tsx
  fleet/page.tsx
  faq/page.tsx
  contact/page.tsx
  mumbai-travel-services/page.tsx
  ahmedabad-travel-services/page.tsx
  why-choose-us/page.tsx

public/
  assets/                         # Static site images
  favicon.ico
  robots.txt

src/
  components/                     # Shared app components
  components/ui/                  # Radix UI primitives
  hooks/                          # Shared React hooks
  lib/                            # Site data, SEO helpers, utilities
```

## Important Files

- `src/lib/site.ts` controls business details, navigation labels, phone, WhatsApp, email, addresses, and hours.
- `src/lib/content.ts` contains reusable content such as FAQs, reviews, fleet data, and page content.
- `src/lib/metadata.ts` converts page SEO data into Next.js metadata.
- `app/layout.tsx` defines global metadata, fonts, layout shell, JSON-LD, and shared providers.
- `app/sitemap.xml/route.ts` generates the XML sitemap.
- `app/globals.css` contains Tailwind imports, theme tokens, and shared utilities.

## Updating Business Details

Before launch, update placeholder contact details in:

```text
src/lib/site.ts
```

Common fields to update:

- `phone`
- `phoneHref`
- `whatsapp`
- `whatsappHref`
- `email`
- `emailHref`
- `addressMumbai`
- `addressAhmedabad`
- `hours`

## SEO Notes

Each route exports a `metadata` object using `makeMetadata`. Update page titles and descriptions directly in the related `app/**/page.tsx` file.

Global metadata and local business schema are defined in:

```text
app/layout.tsx
```

The sitemap is available at:

```text
/sitemap.xml
```

If the site has a production domain, set the base URL in `app/sitemap.xml/route.ts`.

## Deployment

This is a standard Next.js app and can be deployed to platforms that support Next.js, such as Vercel, Netlify, or a Node server.

Recommended deployment checks:

```bash
npm install
npm run lint
npm run build
```

## Lovable Note

This project is connected to Lovable. Avoid rewriting published git history on the connected branch, including force pushes, rebases, amends, or squashed pushed commits.
