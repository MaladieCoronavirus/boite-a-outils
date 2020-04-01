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
          'Style': path.resolve(__dirname, 'src/style'),
          'Images': path.resolve(__dirname, 'src/images')
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
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/src/resources`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 50000
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatting: {
          format: 'DD/MM/YYYY'
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OutilsCoronavirus.fr`,
        short_name: `OutilsCoronavirus.fr`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0069CC`,
        icon: `src/images/favicon.svg`,
      },
    },
  ],
}
