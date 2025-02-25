/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ar"], // Supported languages
    defaultLocale: "en", // Default language
    localeDetection: false, // Disable automatic locale detection
  },
};

module.exports = nextConfig;
