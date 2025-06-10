# GANNET - Tech Product Website

A modern, responsive website for showcasing the GANNET tech product. Built with Next.js 15 and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with animations using Framer Motion
- Accessible components with proper semantic HTML
- Fast loading times with optimized images
- SEO-friendly structure
- Google Analytics integration for tracking
- Deployed on Cloudflare Pages
- Support for multiple specialized product pages (Virtual Assistant, SituationHub)

## Sections

- Hero section with call-to-action buttons
- Solutions showcase
- Resources library
- Pricing plans
- Support information
- Privacy policy and Terms pages
- Specialized product pages:
  - Virtual Assistant
  - SituationHub
- Call-to-action section

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework (v15.2.4)
- [React](https://react.dev/) - UI library (v19.0.0)
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework (v3.4.1)
- [Framer Motion](https://www.framer.com/motion/) - Animation library (v12.6.0)
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library (v5.5.0)
- [Headless UI](https://headlessui.dev/) - Unstyled, accessible UI components (v2.2.0)
- [Cloudflare Pages](https://pages.cloudflare.com/) - Deployment platform
- [Cloudflare Next-on-Pages](https://github.com/cloudflare/next-on-pages) - Next.js adapter for Cloudflare Pages
- Google Analytics - Website analytics and tracking

## Getting Started

### Prerequisites

- Node.js 23.1.0 (see `.nvmrc` file)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gannet-website.git
```

2. Navigate to the project directory:
```bash
cd gannet-website
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. (Optional) Set up Google Analytics:
   - Set the `NEXT_PUBLIC_GA_ID` environment variable with your Google Analytics ID
   - If not set, it will use the default ID configured in the project

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Build for Cloudflare Pages
npm run pages:build

# Test Cloudflare Pages deployment locally
npm run pages:dev

# Start production server
npm run start

# Run linter
npm run lint
```

### Deployment

The website is configured to deploy on Cloudflare Pages using the `@cloudflare/next-on-pages` adapter:

```bash
# Build for production
npm run build

# Build for Cloudflare Pages
npm run pages:build

# Test Cloudflare Pages deployment locally
npm run pages:dev
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and routes
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global CSS styles
│   ├── pricing/           # Pricing page
│   ├── privacy/           # Privacy policy page
│   ├── resources/         # Resources page
│   ├── solutions/         # Solutions page
│   ├── support/           # Support page
│   ├── terms/             # Terms of service page
│   ├── virtual-assistant/ # Virtual Assistant product page
│   └── situationhub/      # SituationHub product page
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── sections/          # Page sections (Hero, Solutions, etc.)
│   ├── ui/                # Reusable UI components
│   └── GoogleAnalytics.tsx # Google Analytics integration
├── lib/                   # Utility functions and configurations
│   └── gtag.ts           # Google Analytics utilities
└── types/                 # TypeScript type definitions
```

## Configuration Files

- `wrangler.toml` - Cloudflare Pages configuration
- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.nvmrc` - Node.js version specification
- `tsconfig.json` - TypeScript configuration

## Environment Variables

- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID (optional, has fallback)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Unsplash](https://unsplash.com/) for stock images
- [Tailwind CSS](https://tailwindcss.com/) for design utilities
- [Cloudflare](https://www.cloudflare.com/) for hosting and deployment
