// next.config.js

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@di/components-ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
