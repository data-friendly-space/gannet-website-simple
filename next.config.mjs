/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
    unoptimized: true,
  },
  // Configure for Cloudflare Pages deployment
  output: 'export',
  distDir: 'out',
  // Use proper caching configuration for Next.js 15.2.4
  experimental: {
    // Enable compilation cache
    optimizeCss: true,
    // Enable memory cache
    memoryBasedWorkersCount: true
  }
};

export default nextConfig; 