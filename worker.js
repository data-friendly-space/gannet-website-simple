// Enhanced worker script with security features
export default {
  async fetch(request, env, ctx) {
    // Extract URL information
    const url = new URL(request.url);
    const { pathname } = url;
    
    // Basic rate limiting (per IP)
    const clientIP = request.headers.get('CF-Connecting-IP');
    const cacheKey = `ratelimit:${clientIP}`;
    
    // Apply rate limiting if KV is available
    if (env.RATE_LIMITS) {
      try {
        const rateLimitData = await env.RATE_LIMITS.get(cacheKey, { type: 'json' });
        const now = Date.now();
        
        if (rateLimitData) {
          // If more than 100 requests in a minute, rate limit
          if (rateLimitData.count > 100 && now - rateLimitData.timestamp < 60000) {
            return new Response('Rate limit exceeded', { 
              status: 429,
              headers: {
                'Retry-After': '60',
                'Content-Type': 'text/plain'
              }
            });
          }
          
          // Update counter
          await env.RATE_LIMITS.put(cacheKey, JSON.stringify({ 
            count: rateLimitData.count + 1,
            timestamp: rateLimitData.timestamp
          }), { expirationTtl: 60 });
        } else {
          // Initialize counter
          await env.RATE_LIMITS.put(cacheKey, JSON.stringify({ 
            count: 1,
            timestamp: now
          }), { expirationTtl: 60 });
        }
      } catch (error) {
        // If KV isn't set up, continue without rate limiting
        console.error('Rate limiting error:', error);
      }
    }
    
    // Pass the request to the static assets handler
    try {
      // Attempt to serve a static file
      const response = await fetch(request);
      
      // Clone the response so we can modify headers
      const newResponse = new Response(response.body, response);
      
      // Add security headers
      newResponse.headers.set('X-Content-Type-Options', 'nosniff');
      newResponse.headers.set('X-Frame-Options', 'DENY');
      newResponse.headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
      newResponse.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      newResponse.headers.set('X-XSS-Protection', '1; mode=block');
      
      // Add CSP header if not present
      if (!newResponse.headers.has('Content-Security-Policy')) {
        newResponse.headers.set('Content-Security-Policy', 
          "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self';"
        );
      }
      
      return newResponse;
    } catch (e) {
      // If no static file is found, serve the index with security headers
      const response = Response.redirect(`${url.origin}/index.html`, 302);
      
      // Add security headers
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
      response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      
      return response;
    }
  }
}; 