/**
 * Utilities for enhancing security across the application
 */

/**
 * Generate a nonce for Content-Security-Policy
 * @returns {string} Cryptographically random nonce
 */
export function generateNonce() {
  return Buffer.from(crypto.randomUUID()).toString('base64');
}

/**
 * Create CSP header with a nonce for script tags
 * @param {string} nonce - The nonce to use
 * @returns {string} CSP header value
 */
export function createCSP(nonce) {
  return `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://*.unsplash.com https://*.randomuser.me;
    font-src 'self' data:;
    connect-src 'self';
    frame-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `.replace(/\s+/g, ' ').trim();
}

/**
 * Security headers to apply to all responses
 * @returns {Object} Map of header name to value
 */
export const securityHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-XSS-Protection': '1; mode=block',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'X-Frame-Options': 'DENY',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - User input to sanitize
 * @returns {string} Sanitized input
 */
export function sanitizeInput(input) {
  if (!input) return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate and sanitize a URL to prevent open redirect vulnerabilities
 * @param {string} url - URL to validate
 * @param {Array} allowedDomains - List of allowed domains
 * @returns {string|null} Sanitized URL or null if invalid
 */
export function validateRedirectUrl(url, allowedDomains = []) {
  try {
    const parsedUrl = new URL(url);
    
    // Check if URL is relative (same-origin)
    if (parsedUrl.origin === 'null') {
      return url;
    }
    
    // Check if domain is in allowed list
    if (allowedDomains.some(domain => parsedUrl.hostname === domain || 
                                      parsedUrl.hostname.endsWith(`.${domain}`))) {
      return url;
    }
    
    // Not allowed
    return null;
  } catch (e) {
    // If URL parsing fails, check if it's a relative path
    if (url.startsWith('/')) {
      return url;
    }
    return null;
  }
}

/**
 * Rate limiting implementation
 * @param {string} key - Identifier (usually IP)
 * @param {number} limit - Max requests in window
 * @param {number} window - Time window in seconds
 * @returns {Object} Rate limit status
 */
export async function checkRateLimit(key, limit = 100, window = 60) {
  // This would typically use Redis or another distributed store
  // For cloudflare, we'd use KV storage as in the worker.js
  
  // Mock implementation
  const now = Date.now();
  const windowMs = window * 1000;
  
  // Would get this from storage
  const rateData = {
    count: 0,
    timestamp: now - 30000, // 30 seconds ago
  };
  
  if (now - rateData.timestamp < windowMs) {
    // Still within window
    rateData.count++;
  } else {
    // New window
    rateData.count = 1;
    rateData.timestamp = now;
  }
  
  // Would save this back to storage
  
  return {
    limit,
    remaining: Math.max(0, limit - rateData.count),
    reset: new Date(rateData.timestamp + windowMs),
    exceeded: rateData.count > limit
  };
} 