/**
 * Cloudflare Pages configuration
 * @type {import('@cloudflare/pages').PagesConfig}
 */
export default {
  routes: [
    {
      pattern: '/:path*',
      script: 'default', // Use the default edge worker
    }
  ],
  buildConfig: {
    minify: true,
    env: {
      NODE_ENV: 'production',
      NEXT_RUNTIME: 'edge',
    }
  }
} 