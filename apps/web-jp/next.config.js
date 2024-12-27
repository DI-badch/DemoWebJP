// next.config.cjs

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  transpilePackages: ["@di/components-ui"],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
