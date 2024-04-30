/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "github.com",
    ],
  },
};

export default nextConfig;
