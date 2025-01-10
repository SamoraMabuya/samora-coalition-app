const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/samora-coalition-app",
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fdslypeqjoksqctzlzzo.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
