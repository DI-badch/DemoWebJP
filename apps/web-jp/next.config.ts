const nextConfig = {
  reactStrictMode: true,
  output: "export",
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
