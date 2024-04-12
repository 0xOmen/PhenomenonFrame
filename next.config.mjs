/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/Phenomenon",
        destination: "https://phenomenon.vercel.app/",
        permanent: false,
      },
      {
        source: "/Github",
        destination: "https://github.com/0xomen",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
