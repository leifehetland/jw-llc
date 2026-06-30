/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats; the optimizer picks the smallest the browser supports.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
