/** @type {import('next').NextConfig} */
const nextOnPages = require('@cloudflare/next-on-pages');

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
};

module.exports = nextOnPages(nextConfig); 