/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
    unoptimized: true,
  },
  // Configure for Cloudflare Pages deployment
  output: 'export',
  distDir: 'out',
  
  // Enable security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ],
  
  // Enable build caching
  experimental: {
    turboDev: true,
    turbo: {
      rules: {
        // Configure rules for caching
      },
    },
    optimizePackageImports: [
      'react-icons',
      'framer-motion',
      '@headlessui/react',
    ],
  },
  
  // Minify output
  swcMinify: true,
  
  // Increase compiler memory limit
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig; 