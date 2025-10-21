# Copilot Instructions for Franco Lorenzo's Personal Website

## Project Overview
This is Franco Lorenzo's personal website built with **Astro 3.3** in hybrid mode, deployed on **Vercel** with Tailwind CSS for styling. It's a minimal, performance-focused portfolio site showcasing a clean design with dark mode support.

## Architecture & Key Patterns

### Component Structure
- **Layout.astro**: Main layout with Outfit Variable font, dotted background pattern, and responsive container (`max-w-4xl`)
- **BaseHead.astro**: Comprehensive meta tags, Open Graph, Twitter cards, and Vercel Speed Insights integration
- **Header.astro**: Fixed header with email CTA and social links (GitHub/LinkedIn), uses responsive visibility patterns
- **HeroSection.astro**: Main landing content with optimized WebP image, gradient text effects, and CTA to GitHub projects

### Styling Conventions
- **Tailwind**: Custom config extends with `Outfit Variable` font family and `tailwindcss-dotted-background` plugin
- **Dark mode**: Uses `dark:` variants throughout, with gray-100/gray-900 base colors
- **Responsive**: Mobile-first approach with `sm:` breakpoints, hidden/visible text patterns
- **Layout**: Consistent `container mx-auto max-w-4xl px-4` pattern for content width

### Asset Management  
- **Images**: Use `astro:assets` Image component with WebP format, explicit dimensions, and `loading="eager"` for hero images
- **Fonts**: Self-hosted via `@fontsource-variable/outfit` for performance
- **Icons**: Inline SVG icons with accessibility attributes (`aria-hidden`, `sr-only` spans)

## Development Workflows

### Commands (uses pnpm)
- `pnpm dev` - Local development server
- `pnpm build` - Production build 
- `pnpm preview` - Preview production build locally

### Code Style
- **Prettier**: Tabs, single quotes, no semicolons, 100 char width
- **Plugins**: `prettier-plugin-astro` and `prettier-plugin-tailwindcss` for consistent formatting
- **TypeScript**: Strict mode via `astro/tsconfigs/strict`

## Deployment & Performance
- **Vercel**: Hybrid rendering with serverless adapter, Web Analytics and Speed Insights enabled
- **SEO**: Complete meta tag setup in BaseHead.astro with dynamic props
- **Performance**: Optimized images, minimal dependencies, dotted background as CSS pattern

## File Conventions
- Components use PascalCase (e.g., `HeroSection.astro`)
- Props interface defined at component top when needed
- Astro component script sections contain TypeScript
- Consistent import ordering: external deps, then local components

## Key Integration Points
- **Vercel**: Speed Insights component in BaseHead.astro
- **Social**: Direct links to GitHub (`franco14lorenzo`) and LinkedIn profiles
- **Contact**: Email CTA (`contacto@francolorenzo.dev`) in header
- **External**: Projects link to GitHub repositories tab