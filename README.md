# Colin Gorski - Portfolio Website

A modern, simple portfolio website built with Next.js, showcasing my work as a full-stack software engineer. The site features a clean design with smooth animations and is optimized for performance and SEO.

## Live Site

Visit the live site at: [colingorski.com](https://colingorski.com)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages
- **Fonts**: Geist Sans & Geist Mono

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── layout/         # Layout components (navbar, footer)
│   ├── sections/       # Page sections (hero, about, projects, contact)
│   └── ui/            # Reusable UI components
└── public/            # Static assets
```

## Deployment Workflow

This project uses GitHub Actions for automated deployment to Cloudflare Pages:

### Automatic Deployments

- **Pull Requests**: Automatically deploys to a preview environment
- **Main Branch**: Automatically deploys to production

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy:prod` - Deploy to production
- `npm run deploy:preview` - Deploy to preview environment

### Skipping CI

To skip automatic deployment for documentation changes or minor updates, include `[skip ci]` in your commit message:

```bash
git commit -m "Update README [skip ci]"
```

## Content Management

The portfolio content is managed through:

- **Personal Info**: `src/app/layout.tsx` (metadata, structured data)
- **Projects**: `src/components/sections/projects.tsx`
- **About Section**: `src/components/sections/about.tsx`
- **Contact Info**: `src/components/sections/contact.tsx`

## Customization

### Colors & Theme

The site uses CSS custom properties defined in `src/app/globals.css` for consistent theming.

### Components

All components are built with Tailwind CSS and follow a consistent design system using:
- Radix UI primitives
- Custom component variants
- Responsive design patterns

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built by [Colin Gorski](https://colingorski.com)
