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

    ENTRY_ID_HOME_HABITACIONES: "5UTaxxYz6ietNRev9Wabrm",
    ENTRY_ID_HOME_ESPACIOS: "2l69nK6Z81ZIFK6klcNXl2",
    ENTRY_ID_HOME_EXPERIENCIAS: "3Y2p8CIbJcXIYpFRGhCKK5",
    ENTRY_ID_HOME: "7gX1IYINCMrSD6cSWtZPBX",
  },
};

export default nextConfig;
