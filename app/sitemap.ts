import type { MetadataRoute } from "next";

/**
 * Complete sitemap configuration for multilingual Next.js 15 app
 * Place this file in: app/sitemap.ts
 * 
 * Default locale: Hungarian (hu)
 * Available locales: hu, en
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const baseUrl = 'https://elementworks.eu';

  return [
    // ========================================
    // HOME PAGE
    // ========================================
    {
      url: `${baseUrl}/hu`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu`,
          hu: `${baseUrl}/hu`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu`,
          hu: `${baseUrl}/hu`,
          en: `${baseUrl}/en`,
        },
      },
    },

    // ========================================
    // SZOLGALTATASOK / SERVICES
    // ========================================
    {
      url: `${baseUrl}/hu/szolgaltatasok`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/szolgaltatasok`,
          hu: `${baseUrl}/hu/szolgaltatasok`,
          en: `${baseUrl}/en/szolgaltatasok`,
        },
      },
    },
    {
      url: `${baseUrl}/en/szolgaltatasok`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/szolgaltatasok`,
          hu: `${baseUrl}/hu/szolgaltatasok`,
          en: `${baseUrl}/en/szolgaltatasok`,
        },
      },
    },

    // ========================================
    // SZOLGALTATASOK / SERVICES
    // ========================================
    {
      url: `${baseUrl}/hu/rendszerek`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/rendszerek`,
          hu: `${baseUrl}/hu/rendszerek`,
          en: `${baseUrl}/en/rendszerek`,
        },
      },
    },
    {
      url: `${baseUrl}/en/rendszerek`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/rendszerek`,
          hu: `${baseUrl}/hu/rendszerek`,
          en: `${baseUrl}/en/rendszerek`,
        },
      },
    },

    // ========================================
    // KAPCSOLAT / CONTACT
    // ========================================
    {
      url: `${baseUrl}/hu/kapcsolat`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/kapcsolat`,
          hu: `${baseUrl}/hu/kapcsolat`,
          en: `${baseUrl}/en/kapcsolat`,
        },
      },
    },
    {
      url: `${baseUrl}/en/kapcsolat`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/kapcsolat`,
          hu: `${baseUrl}/hu/kapcsolat`,
          en: `${baseUrl}/en/kapcsolat`,
        },
      },
    },

    // ========================================
    // BLOG
    // ========================================
    {
      url: `${baseUrl}/hu/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/blog`,
          hu: `${baseUrl}/hu/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/blog`,
          hu: `${baseUrl}/hu/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },

    // ========================================
    // ADATVEDELEM / PRIVACY POLICY
    // ========================================
    {
      url: `${baseUrl}/hu/adatvedelem`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/adatvedelem`,
          hu: `${baseUrl}/hu/adatvedelem`,
          en: `${baseUrl}/en/adatvedelem`,
        },
      },
    },
    {
      url: `${baseUrl}/en/adatvedelem`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/adatvedelem`,
          hu: `${baseUrl}/hu/adatvedelem`,
          en: `${baseUrl}/en/adatvedelem`,
        },
      },
    },

    // ========================================
    // ADD DYNAMIC BLOG POSTS HERE
    // ========================================
    // When you have blog posts, uncomment and modify:
    /*
    // Example blog post
    {
      url: `${baseUrl}/hu/blog/example-post`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/blog/example-post`,
          hu: `${baseUrl}/hu/blog/example-post`,
          en: `${baseUrl}/en/blog/example-post`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog/example-post`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/hu/blog/example-post`,
          hu: `${baseUrl}/hu/blog/example-post`,
          en: `${baseUrl}/en/blog/example-post`,
        },
      },
    },
    */
  ];
}