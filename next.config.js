// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    esmExternals: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.mux.com',
      },
    ],
  },
}

module.exports = nextConfig
