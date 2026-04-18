/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.mzstatic.com" },
    ],
  },
};

export default nextConfig;
