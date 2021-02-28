/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Title`,
    author: `Him`,
  },
  plugins: [
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts/`,
      }
    },
    `gatsby-transformer-remark`
  ],
}
