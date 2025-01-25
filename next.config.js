/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds:false,
  }
};

module.exports = nextConfig;

const withVideos = require("next-videos");
module.exports = withVideos();
