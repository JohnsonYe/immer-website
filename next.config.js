/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: true,
  reactStrictMode: true,
  // For GitHub Pages deployment with custom domain or username.github.io/repo-name
  // Comment this out if using a custom domain
  basePath: '/immer-website',
  experimental: {
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
  },
}

module.exports = nextConfig
