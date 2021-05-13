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
        preset: `false`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `note`,
        path: `${__dirname}/content/notes/`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
