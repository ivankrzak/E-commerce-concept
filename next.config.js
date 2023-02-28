/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/naming-convention
const moduleExports = {
  reactStrictMode: true,
  webpack: (config) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config
  },
  images: {
    domains: ['e-commerce-pull-zone.b-cdn.net'],
  },
  i18n: {
    locales: ['en', 'sk', 'de'],
    defaultLocale: 'en',
  },
}

module.exports = moduleExports
