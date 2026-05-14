const withNextIntl = require('next-intl/plugin')('./src/i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any existing config here
}

module.exports = withNextIntl(nextConfig);
