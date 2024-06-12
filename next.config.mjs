/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000", // specify the port your images are served from
        pathname: "/static/**", // adjust the path if needed
      },
    ],
  },
};

export default nextConfig;
