/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
    ],
  },
  experimental: {
    fallbackNodePolyfills: false,
  },
};

export default nextConfig;
