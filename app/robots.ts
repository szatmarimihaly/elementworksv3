import type { MetadataRoute } from 'next';

/**
 * Robots.ts for ElementWorks V3
 * Location: app/robots.ts
 * 
 * 
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',      // Block API routes
          '/_next/',    // Block Next.js internal files
        ],
      },
    ],
    sitemap: 'https://elementworks.eu/sitemap.xml',
  };
}