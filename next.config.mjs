const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY
    ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
    : "samora-coalition-app";

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./image-loader.ts",
    // This will make all image paths relative to basePath automatically
    path: `${basePath}`,
  },
  // Modify webpack config to handle SVGs globally
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false, // Disable SVGO optimization
            svgoConfig: {
              plugins: [{ removeViewBox: false }], // Preserve viewBox
            },
          },
        },
      ],
    });

    // Add public path to assets
    config.output.publicPath = isGithubActions ? `${assetPrefix}` : "/";

    return config;
  },
};

export default nextConfig;
