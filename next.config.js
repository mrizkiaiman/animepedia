/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.myanimelist.net'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
