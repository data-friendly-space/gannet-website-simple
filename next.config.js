/** @type {import('next').NextConfig} */
const { withOnPagesInit } = require('@cloudflare/next-on-pages/init');

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
};

module.exports = withOnPagesInit(nextConfig); 