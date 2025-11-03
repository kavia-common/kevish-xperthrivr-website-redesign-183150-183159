# XperThrivr Frontend • Ocean Professional

This repository contains the redesigned XperThrivr website built with Next.js App Router and a custom “Ocean Professional” theme. The app emphasizes modern UI, performance, accessibility, and static export for easy hosting.

## Overview

- Framework: Next.js 15 (App Router)
- Language: TypeScript + React 19
- Styling: Tailwind CSS v4 with custom CSS tokens and utilities in `globals.css`
- Output: Static export (Next.js `output: "export"`)
- Theme: Ocean Professional (Blue & amber accents)
- Focus: Accessibility, SEO, performance, and maintainability

## Project Structure

The app uses the App Router (`src/app`) with grouped routes, shared UI components, and small libs for routes and SEO metadata.

```
kevish_xperthrivr_frontend/
├─ next.config.ts                 # Next.js config (static export enabled)
├─ package.json                   # Scripts and dependencies
├─ postcss.config.mjs             # Tailwind CSS plugin config
├─ tsconfig.json                  # TS + path aliases
├─ eslint.config.mjs              # ESLint config
└─ src/
   ├─ app/
   │  ├─ globals.css              # Tailwind + Theme tokens + utilities
   │  ├─ layout.tsx               # Root layout: fonts, header, footer, SEO defaults
   │  ├─ page.tsx                 # Minimal message; real home in (routes)/page.tsx
   │  ├─ not-found.tsx            # 404 page
   │  ├─ sitemap.ts               # Static sitemap from declared routes
   │  ├─ robots.txt.ts            # Robots config
   │  ├─ opengraph-image.tsx      # Dynamic OG image (png)
   │  ├─ twitter-image.tsx        # Dynamic Twitter image (png)
   │  ├─ manifest.webmanifest     # PWA manifest with icons/theme color
   │  └─ (routes)/                # Grouped public routes
   │     ├─ page.tsx              # Home
   │     ├─ about/page.tsx
   │     ├─ services/page.tsx
   │     ├─ case-studies/page.tsx
   │     ├─ blog/page.tsx
   │     ├─ blog/[slug]/page.tsx  # Static params example
   │     ├─ contact/page.tsx
   │     ├─ privacy/page.tsx
   │     └─ terms/page.tsx
   ├─ components/
   │  ├─ accessibility/SkipToContent.tsx
   │  ├─ layout/
   │  │  ├─ Container.tsx
   │  │  ├─ Header.tsx
   │  │  └─ Footer.tsx
   │  ├─ navigation/MainNav.tsx
   │  ├─ hero/Hero.tsx
   │  ├─ feature/
   │  │  ├─ FeatureGrid.tsx
   │  │  └─ FeatureIcon.tsx
   │  ├─ forms/ContactForm.tsx
   │  └─ ui/
   │     ├─ Alert.tsx
   │     ├─ Badge.tsx
   │     ├─ Button.tsx
   │     ├─ Card.tsx
   │     ├─ Input.tsx
   │     ├─ Section.tsx
   │     ├─ Select.tsx
   │     └─ Textarea.tsx
   └─ lib/
      ├─ routes.ts                # Route declarations and helpers
      └─ seo.ts                   # Site metadata builder
```

### Path Aliases

- Import with `@/` from `src` root (configured in `tsconfig.json`):
  - Example: `import Section from "@/components/ui/Section";`

## Theming Tokens: Ocean Professional

The Ocean Professional theme defines site-wide color tokens, radius, gradient, and utility classes in `src/app/globals.css`. These tokens are used by UI components and layout across the app.

Key tokens (defined within the `@theme` block):

- Colors:
  - --color-primary: #2563EB (Blue 600)
  - --color-secondary: #F59E0B (Amber 500)
  - --color-success: #F59E0B (Secondary reused for success accent)
  - --color-error: #EF4444 (Red 500)
  - --color-background: #f9fafb (Slate-50)
  - --color-surface: #ffffff (White)
  - --color-text: #111827 (Gray-900)
  - --color-border: #e5e7eb (Gray-200)
  - --color-muted: #6b7280 (Gray-500)
  - --color-ring: var(--color-primary)
  - --color-card: var(--color-surface)
- Radii:
  - --radius-sm, --radius-md, --radius-lg
- Gradient:
  - --gradient-ocean: linear-gradient(180deg, rgba(59,130,246,0.10), rgba(249,250,251,1))

Utilities and base classes:

- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, sizes `.btn-sm`, `.btn-lg`
- Inputs: `.input`, `.textarea`, `.select`, plus `.label`, `.help-text`, `.error-text`
- Cards: `.card`
- Sections: `.section`, `.section-lg`, `.section-gradient`
- Typography helpers: `.h1`, `.h2`, `.h3`, `.text-muted`
- Layout: `.container-px`, `.app-main`, `.header-sticky`
- Links: `.link` with underline offsets and hover styles
- Focus styles: `:focus-visible` uses color ring from theme
- Reduced motion: honors `prefers-reduced-motion`

Fonts are applied via `next/font` (`Inter`) in `src/app/layout.tsx` with `display: "swap"` and a CSS variable.

## Pages and Routes

Routes are organized using a group `(routes)` for clarity and to keep the root clean.

- “Home” at `(routes)/page.tsx`
- About: `/about`
- Services: `/services`
- Case Studies: `/case-studies`
- Blog: `/blog`
  - Example post: `/blog/welcome-to-xperthrivr` (generated via `generateStaticParams` to ensure static export)
- Contact: `/contact`
- Privacy: `/privacy`
- Terms: `/terms`
- 404: `not-found.tsx` handles unknown routes

Sitemap and robots are generated via:

- `src/app/sitemap.ts` uses `allStaticRoutes` from `src/lib/routes.ts` plus blog extras
- `src/app/robots.txt.ts` defines crawl rules and sitemap link

Open Graph & Twitter images:

- `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx` render dynamic images for rich sharing previews.

## Components

Reusable components follow small, focused responsibilities and read from the theme tokens via utility classes and CSS variables.

- Accessibility
  - `SkipToContent.tsx`: skip link to main content `#main-content`
- Layout
  - `Header.tsx`: sticky header with mobile menu state, includes `MainNav`
  - `Footer.tsx`: quick links, newsletter placeholder, legal links
  - `Container.tsx`: width constraint + responsive padding via `.container-px`
- Navigation
  - `MainNav.tsx`: highlights active links via `isActivePath` helper
- Hero
  - `Hero.tsx`: prominent landing section, uses badge, buttons, and hero image
- Features
  - `FeatureGrid.tsx` + `FeatureIcon.tsx`: icon cards for three core features
- Forms
  - `ContactForm.tsx`: client-side validation; no backend submission by design
- UI
  - `Alert`, `Badge`, `Button`, `Card`, `Input`, `Select`, `Textarea`, `Section`

Public interface notes
- Many components are marked with `// PUBLIC_INTERFACE` comments and include concise doc comments to clarify their intended usage and API.

## Accessibility Conventions

This app aims for strong baseline accessibility:

- Focus styles: `:focus-visible` ring consistent with theme (`--color-ring`)
- Skip link: visible on focus, goes to `#main-content` in `layout.tsx`
- Button and link semantics respected; `aria-current="page"` on active nav items
- Forms:
  - Labeled inputs with `label` elements and `htmlFor`
  - Error messages set with `role="alert"` and `aria-invalid`
  - `aria-describedby` ties inputs to helper/description text
- Reduced motion: animations/transitions are minimized when `prefers-reduced-motion: reduce`
- Landmark roles:
  - `header` (role="banner"), `footer` (role="contentinfo"), `main` with `id="main-content"`
- Color contrast: primary and text colors chosen for legibility on light backgrounds

## SEO and Metadata

Site-wide metadata managed by `buildSiteMetadata` in `src/lib/seo.ts`, used in `src/app/layout.tsx`:

- Title defaults with template: `%s • XperThrivr`
- Description, applicationName, authors, generator, themeColor
- Icons: `/icon.png`, `/apple-icon.png`
- Open Graph: site name, type, locale, OG image route
- Twitter: `summary_large_image`, handle, and image route
- Alternates: canonical URL

OG and Twitter previews are produced by Next’s `ImageResponse` handlers in `opengraph-image.tsx` and `twitter-image.tsx`.

Sitemap and robots:
- `sitemap.ts` composes static routes from `lib/routes.ts` plus dynamic blog entries
- `robots.txt.ts` declares allow-all and references the sitemap

Note: `metadataBase` and base URL inside sitemap/robots currently use `https://example.com`. Update this to your production domain before deployment.

## Static Export

Static export is enabled via `next.config.ts`:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
};
```

- All routes in this project are designed to be statically exportable.
- The blog dynamic segment `[slug]` uses `generateStaticParams()` to enumerate static paths.

Build and export steps:
1. Install dependencies: `npm install`
2. Build for production: `npm run build`
   - Next.js will produce a static `.next` build
3. To preview statically, you can use a static server or deploy to static hosting. For many hosts, you can directly use the output of `next build` with `output: "export"` to serve static assets.

If your target host requires a plain `out/` directory, consider adding `next export`. In Next 15 with `output: "export"`, `next build` already prepares a static output compatible with a static file host. Consult your hosting provider’s instructions.

## Development Workflow

- Install:
  - `npm install`
- Start dev server:
  - `npm run dev`
  - Visit `http://localhost:3000`
- Lint:
  - `npm run lint`
- Build:
  - `npm run build`
- Start (Node server, not required for static hosting):
  - `npm run start` (when not using pure static hosting)

### Conventions

- Components are small and stateless when possible; client interactivity uses `"use client"` as needed.
- Styling relies on Tailwind utilities and custom CSS variables in `globals.css`.
- Shared layout and structure through `Section`, `Container`, and `Card` ensure consistency.
- Navigation items are defined centrally in `src/lib/routes.ts` to drive header, footer, and sitemap.
- Accessibility is enforced via semantic elements, ARIA attributes, focus-visible rings, and skip links.
- SEO is centralized with `src/lib/seo.ts`, OG/Twitter images, and Next’s metadata support.

## Adding New Pages

1. Create a new folder in `src/app/(routes)/<new-page>/page.tsx`
2. Export `metadata` with `title` and `description`.
3. Add the route to `mainNav` or `footerQuickLinks` in `src/lib/routes.ts` if it should appear in navigation.
4. If the page is dynamic and still needs static export, ensure you provide `generateStaticParams()` and avoid runtime-only features.

## Known Placeholders

- Contact form performs client-side validation only and does not submit to a backend.
- Newsletter form in the footer is a placeholder; it prevents default submission.

## Deployment Notes

- Update base URL (`metadataBase` in `src/lib/seo.ts` and `base` variables in `sitemap.ts` and `robots.txt.ts`) to your production domain.
- Ensure any assets referenced (e.g., `/images/...`) exist at build-time for static export.
- For CDN/static hosting, upload the compiled static output from `next build` with `output: "export"`.

## License

Internal project. If you plan to open-source, add appropriate license terms here.
