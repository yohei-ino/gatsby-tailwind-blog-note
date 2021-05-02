module.exports = {
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
