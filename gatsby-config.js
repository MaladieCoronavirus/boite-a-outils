const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.outilscoronavirus.fr/`,
    title: `OutilsCoronavirus.fr`,
    description: `This is the meta description for the site`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          'Components': path.resolve(__dirname, 'src/components'),
          'Style': path.resolve(__dirname, 'src/style')
        },
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/Layout') },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 50000
      }
    },
    `gatsby-plugin-emotion`
  ],
}
