// next.config.cjs

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
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

module.exports = nextConfig;
