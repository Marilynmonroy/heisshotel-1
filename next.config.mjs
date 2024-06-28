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
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN:
      process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,

    ENTRY_ID_HOME_HABITACIONES: process.env.ENTRY_ID_HOME_HABITACIONES,
    ENTRY_ID_HOME_ESPACIOS: process.env.ENTRY_ID_HOME_ESPACIOS,
    ENTRY_ID_HOME_EXPERIENCIAS: process.env.ENTRY_ID_HOME_EXPERIENCIAS,
    ENTRY_ID_HOME: process.env.ENTRY_ID_HOME,
  },
};

export default nextConfig;
