import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    deviceSizes: [360, 390, 640, 768, 1024, 1366, 1440, 1920, 2560, 3840],
  },
};

export default nextConfig;
