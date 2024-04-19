/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://${process.env.BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
