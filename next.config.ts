// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'cdn.sanity.io',
                pathname : '/**'
            }
        ]
    }
};

export default withNextIntl(nextConfig);
