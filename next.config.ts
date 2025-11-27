import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    STORE_NAME: process.env.STORE_NAME,
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/home',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
