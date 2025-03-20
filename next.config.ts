import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'res.cloudinary.com',
      }
    ]
    // domains: ['res.cloudinary.com'], // Tambahkan hostname di sini
  },
};

export default nextConfig;