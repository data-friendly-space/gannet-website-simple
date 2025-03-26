/**
 * Configuration for Cloudflare Pages
 */
export default {
  // Ensure your app is built in production mode
  build: {
    env: {
      NODE_ENV: 'production'
    }
  },
  // Configure Cloudflare Pages to use the Next.js output
  output: "export"
} 