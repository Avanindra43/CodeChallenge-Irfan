/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: `https`,
        hostname: `randomuser.me`,
      },
      {
        protocol: `https`,
        hostname: `xsgames.co`,
      },
      {
        protocol: `https`,
        hostname: `images.unsplash.com`,
      },
    ],
  },
};

module.exports = nextConfig;
