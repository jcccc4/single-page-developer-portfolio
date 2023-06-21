/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/single-page-developer-portfolio/' : '',

    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    // experimental: {},
  }
   
  module.exports = nextConfig