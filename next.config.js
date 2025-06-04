/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  assetPrefix: '/',
  images: { unoptimized: true },
  trailingSlash: true,
  output: 'export'
};

module.exports = nextConfig;
