/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: '/',
      },
      {
        source: '/developers/logs',
        destination: '/developer-logs',
      },
      {
        source: '/developers/webhooks',
        destination: '/webhooks',
      },
      {
        source: '/developers/api-keys',
        destination: '/api-keys',
      },
      {
        source: '/payments/:paymentId',
        destination: '/payment-detail',
      },
    ];
  },
};

export default nextConfig;
