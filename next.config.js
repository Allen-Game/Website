/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  experimental: {
    appDocumentPreloading: true,
  },
  images: {
    domains: ['tr.rbxcdn.com'],
  },
};
