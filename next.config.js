/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // La home sirve el mismo HTML que está publicado en crgestoria.netlify.app
  async rewrites() {
    return {
      beforeFiles: [{ source: '/', destination: '/index.html' }],
    };
  },
};

module.exports = nextConfig;
