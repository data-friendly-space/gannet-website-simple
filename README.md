# GANNET - Tech Product Website

A modern, responsive website for showcasing the GANNET tech product. Built with Next.js 15 and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with animations using Framer Motion
- Accessible components with proper semantic HTML
- Fast loading times with optimized images
- SEO-friendly structure
- Deployed on Cloudflare Pages

## Sections

- Hero section with call-to-action buttons
- Solutions showcase
- Resources library
- Pricing plans
- Support information
- Privacy policy and Terms pages
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

## Getting Started

### Prerequisites

- Node.js 23.1.0
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

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Deployment

The website is configured to deploy on Cloudflare Pages:

```bash
# Build for production
npm run build

# Build for Cloudflare Pages
npm run pages:build

# Test Cloudflare Pages deployment locally
npm run pages:dev
```

## Project Structure

- `src/app/` - Next.js App Router pages and routes
- `src/components/layout/` - Layout components like Navbar and Footer
- `src/components/sections/` - Page sections (Hero, Solutions, etc.)
- `src/components/ui/` - Reusable UI components

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Unsplash](https://unsplash.com/) for stock images
- [Tailwind CSS](https://tailwindcss.com/) for design utilities
