module.exports = {
  siteMetadata: {
    title: `gatsby-tailwind-blog-note`,
    description: ``,
    author: `@yohei-ino`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
