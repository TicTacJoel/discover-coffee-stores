/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.unsplash.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
