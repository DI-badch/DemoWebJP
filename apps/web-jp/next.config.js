// next.config.cjs

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
  distDir: "out/apps/web-jp/.next",
};

module.exports = nextConfig;
