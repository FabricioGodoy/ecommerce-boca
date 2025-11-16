import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    STORE_NAME: process.env.STORE_NAME,
  },
};

export default nextConfig;
