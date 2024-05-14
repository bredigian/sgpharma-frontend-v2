/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'sgpharma-bucket.sfo3.digitaloceanspaces.com',
      },
    ],
  },
};

export default nextConfig;
