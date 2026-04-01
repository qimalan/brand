/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/brand",
  assetPrefix: "/brand/",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    path: "/brand/",
  },
  trailingSlash: true,
}

export default nextConfig
