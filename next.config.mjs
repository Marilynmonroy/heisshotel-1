/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    CONTENTFUL_SPACE_ID: "h7d6zn9m22m3",
    CONTENTFUL_ACCESS_TOKEN: "gTmKyQeinfmz-iWrVAjL-RQ73WflCqOgsTHC76NvkLc",
  },
};

export default nextConfig;
