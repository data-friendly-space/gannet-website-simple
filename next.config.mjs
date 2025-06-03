/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
    unoptimized: true,
  },
  // Configure for Cloudflare Pages deployment
  output: 'export',
  distDir: 'out'
};

export default nextConfig; 