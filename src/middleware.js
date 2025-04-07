import { NextResponse } from 'next/server';
import { generateNonce, createCSP, securityHeaders } from './utils/security';

export function middleware(request) {
  // Generate CSP nonce for each request
  const nonce = generateNonce();
  
  // Get the response
  const response = NextResponse.next();
  
  // Apply all security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Apply Content-Security-Policy with nonce
  response.headers.set('Content-Security-Policy', createCSP(nonce));
  
  // Store nonce in request headers so it can be accessed in pages
  response.headers.set('x-nonce', nonce);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next (Next.js internals)
     * - /_next/static (static files)
     * - /_next/image (image optimization)
     * - /favicon.ico, /robots.txt (static files)
     * - /images (static assets)
     */
    {
      source: '/((?!_next/static|_next/image|favicon.ico|robots.txt|images).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}; 