const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const isProd = process.env.NODE_ENV === 'production'
const basePath = '/ai-test'

module.exports = withNextra({
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? basePath : '',
  assetPrefix: isProd ? basePath + '/' : '',
})
