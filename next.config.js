/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // This will help with React context issues
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig
