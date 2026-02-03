import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "jupiterplumbing.com" },
      { protocol: "https", hostname: "jp.novitasocial.com" },
      { protocol: "https", hostname: "media-public.canva.com" },
      { protocol: "https", hostname: "media.canva.com" },
      { protocol: "https", hostname: "static.canva.com" },
    ],
  },
};

export default nextConfig;
