/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["i.pinimg.com", "iaaevegulcqgfozmjzru.supabase.co"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "iaaevegulcqgfozmjzru.supabase.co",
        pathname: "**"
      },
    ],
  },
};

export default nextConfig;
