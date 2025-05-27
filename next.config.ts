import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azwmnyeeggquorsvgqpq.supabase.co",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
      },
    ],
  },
};

export default nextConfig;
