/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    skipWaiting: false,
    runtimeCaching
});

const nextConfig = withPWA({
    distDir: "build",
    reactStrictMode: true,
    swcMinify: true,
    images: { unoptimized: true }
});

module.exports = nextConfig;
