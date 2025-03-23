/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wewantwaste.co.uk'],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;