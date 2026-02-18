# Will Downey - Mobile Developer Portfolio

Personal website and blog for Will Downey, an iOS Engineer at Capital One. Built with [Astro](https://astro.build), featuring blog posts, talks, and portfolio information focused on mobile development.

## Features

- **Homepage** - Hero section with tech stack, latest blog posts, and talks
- **About** - Professional experience, skills, and education
- **Blog** - Technical articles on iOS development, SwiftUI, and mobile engineering
- **Talks** - Speaking engagements and presentations
- **RSS Feed** - Subscribe to blog updates at `/rss.xml`
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Optimized for all devices
- **Static Generation** - Fast, SEO-friendly static site

## Technology Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- Markdown/MDX - Content authoring

## Development

### Prerequisites

- Node.js 18+ 
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

### Blog Posts

Create a new markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description of the post"
pubDate: 2024-01-15
tags: ["SwiftUI", "iOS", "Architecture"]
featured: true
---

Your content here...
```

### Talks

Create a new markdown file in `src/content/talks/`:

```markdown
---
title: "Talk Title"
description: "Talk abstract"
date: 2024-03-15
venue: "Conference Name"
location: "City, State"
slides: "https://example.com/slides"  # optional
video: "https://example.com/video"    # optional
upcoming: false
tags: ["SwiftUI", "iOS"]
---

Additional content about the talk...
```

## Site Structure

```
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ThemeToggle.astro
│   ├── content/          # Markdown content
│   │   ├── blog/        # Blog posts
│   │   └── talks/       # Talk entries
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Site pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   └── talks/
│   ├── content.config.ts # Content collections schema
│   └── styles/          # Global styles
│       └── global.css
├── public/              # Static assets
├── astro.config.mjs     # Astro configuration
└── package.json
```

## Deployment

This site is automatically deployed to GitHub Pages when you push to the main branch.

### Manual Deployment

The site can also be deployed manually:

```bash
npm run build
# Upload contents of `dist/` to your hosting provider
```

## Customization

### Colors

Edit CSS custom properties in `src/styles/global.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* ... other colors ... */
}
```

### Navigation

Update navigation links in `src/components/Header.astro`:

```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // ... add more links
];
```

### Social Links

Update social links in `src/components/Footer.astro`:

```typescript
const socialLinks = [
  { href: 'https://github.com/wrdowney', label: 'GitHub' },
  // ... add more social links
];
```

## RSS Feed

The RSS feed is automatically generated at `/rss.xml` and includes all blog posts.

## License

MIT License - feel free to use this template for your own site!

## Contact

- GitHub: [@wrdowney](https://github.com/wrdowney)
- LinkedIn: [Will Downey](https://www.linkedin.com/in/widowney/)
- Medium: [@wdowney20](https://medium.com/@wdowney20)
