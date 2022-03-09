/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
  reactStrictMode: true,
  env: {
    Theme: process.env.Theme,
  },
  ...nextTranslate(),
};

module.exports = nextConfig;
