// Simple worker script to serve static content
export default {
  async fetch(request, env, ctx) {
    // Redirect to the Next.js app
    const url = new URL(request.url);
    const { pathname } = url;
    
    // Pass the request to the static assets handler
    try {
      // Attempt to serve a static file
      const response = await fetch(request);
      return response;
    } catch (e) {
      // If no static file is found, serve the index
      return Response.redirect(`${url.origin}/index.html`, 302);
    }
  }
}; 