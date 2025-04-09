import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://layeroneconsultants.com",
  },
  images: {
    domains: ['layeroneconsultants.com', 'localhost'],
  },
};

export default nextConfig;
