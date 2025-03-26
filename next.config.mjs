/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
  // Add output config for Cloudflare Pages
  output: 'export',
};

export default nextConfig; 