type Locale = 'hu' | 'en';

/**
 * Organization  Shema - Used across all pages
 */

export const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Elementworks',
    'url': 'https://elementworksv3.vercel.app/hu',
    'logo': 'https://elementworksv3.vercel.app/new2.png',
    'description': 'Professional web development services including custom website development, e-commerce solutions, and SaaS applications.',
    'sameAs': [
        'https://www.instagram.com/elementworksgroup/',
        'https://github.com/szatmarimihaly'
    ],
    'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer service',
        'availableLanguage': ['Hungarian', 'English'],
    },
    'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Őzike út 28A',
        'addressLocality': 'Budapest',
        'addressRegion': 'Budapest',
        'postalCode': '1121',
        'addressCountry': 'HU',
    }
})

export const getWebsiteSchema = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Elementworks',
  'url': 'https://elementworksv3.vercel.app/',
  'description': locale === 'hu' 
    ? 'Céges weboldal fejlesztés, webshop készítés és egyedi webalkalmazások fejlesztése'
    : 'Business website development, e-commerce solutions, and custom web applications',
  'inLanguage': locale,
  'potentialAction': {
    '@type': 'SearchAction',
    'target': `https://elementworksv3.vercel.app/${locale}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const getServiceSchema = (locale: Locale) => {
  const services = locale === 'hu' ? [
    {
      name: 'SPA Weboldal',
      description: 'Bemutatkozó one-page weboldal készítés egyéni vállalkozóknak és cégeknek',
    },
    {
      name: 'Céges Weboldalak',
      description: 'Nagyobb céges weboldalak aloldalakkal, több tartalommal, teljes körű megoldásként',
    },
    {
      name: 'Webshop Fejlesztés',
      description: 'Modern e-kereskedelmi platformok fejlesztése (Supabase, Stripe integrációval)',
    },
    {
      name: 'SaaS Projekt Fejlesztés',
      description: 'Egyedi startupok és cégek számára készítünk webes megoldásokat, AI-integrációval',
    },
    {
      name: 'Egyéb Egyedi Webalkalmazások',
      description: 'Speciális igényekhez igazított webalkalmazások startupoknak',
    },
    {
      name: 'Logó és Arculattervezés',
      description: 'Vizuális identitás készítése logóval, színekkel, stílussal vállalkozásoknak',
    },
    {
      name: 'Oktatás',
      description: 'Webfejlesztés oktatás Next.js és React alapú keretrendszer',
    },
    {
      name: 'Tárhely és Domain Felállítás',
      description: 'Teljes körű hosting szolgáltatás és domain beállítás',
    },
    {
      name: 'Konzultáció',
      description: 'Webfejlesztési konzultáció, óradíjas tanácsadás',
    },
  ] : [
    {
      name: 'SPA Website',
      description: 'One-page website development for freelancers and companies',
    },
    {
      name: 'Corporate Website Development',
      description: 'Full corporate websites with subpages and rich content',
    },
    {
      name: 'Online Store Development',
      description: 'Modern e-commerce platforms with Supabase and Stripe integration',
    },
    {
      name: 'SaaS Project Development',
      description: 'Web solutions for startups and enterprises with AI integration',
    },
    {
      name: 'Custom Web Application Development',
      description: 'Tailor-made web apps for startups with bespoke features',
    },
    {
      name: 'Logo & Brand Identity Design',
      description: 'Visual identity creation with logo, colors and style',
    },
    {
      name: 'Web Development Training',
      description: 'Training based on Next.js and React frameworks',
    },
    {
      name: 'Hosting & Domain Setup',
      description: 'Full service for hosting and domain setup',
    },
    {
      name: 'Web Development Consultation',
      description: 'Hourly-based consulting for web-related questions',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': locale === 'hu' ? 'Weboldal fejlesztés' : 'Website Development',
    'provider': {
      '@type': 'Organization',
      'name': 'Elementworks',
      'url': 'https://elementworksv3.vercel.app//hu',
    },
    'areaServed': {
      '@type': 'Country',
      'name': locale === 'hu' ? 'Magyarország' : 'Hungary',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': locale === 'hu' 
        ? 'Webfejlesztési szolgáltatások' 
        : 'Web Development Services',
      'itemListElement': services.map((service, index) => ({
        '@type': 'Offer',
        'position': index + 1,
        'itemOffered': {
          '@type': 'Service',
          'name': service.name,
          'description': service.description,
        },
      })),
    },
  };
};

export const getBreadcrumbSchema = (locale: Locale, items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url,
  })),
});

export const getFAQSchema = (locale: Locale, faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map((faq) => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer,
    },
  })),
});

export const getLocalBusinessSchema = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Elementworks',
  'image': 'https://elementworksv3.vercel.app/new2.png',
  'url': 'https://elementworksv3.vercel.app/hu',
  'telephone': '+36-30-577-1066', 
  'priceRange': '$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Őzike út 28A',
    'addressLocality': 'Budapest',
    'addressRegion': 'Budapest',
    'postalCode': '1121',
    'addressCountry': 'HU',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 47.50071334838867, // Budapest coordinates - update with yours
    'longitude': 18.974445343017578,
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '08:00',
      'closes': '17:00',
    },
  ],
});

