// proxy.ts from Next.js 16
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(en|hu)/:path*',
    '/((?!studio|api|_next|_vercel|.*\\..*).*)'  // Exclude /studio and other system routes
  ]
};
