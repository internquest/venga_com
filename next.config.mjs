/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['venga.com', 'api.producthunt.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'venga.com',
                pathname: '/_next/static/media/**',
            },
        ],
    }
};

export default nextConfig;
