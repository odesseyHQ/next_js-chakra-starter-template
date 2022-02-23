/** @type {import('next').NextConfig} */
module.exports = {
  distDir: '.next-build',
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
