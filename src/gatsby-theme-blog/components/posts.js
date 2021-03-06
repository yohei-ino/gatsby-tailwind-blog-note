import * as React from "react"
import Layout from "./layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Footer from "./home-footer"
import PostList from "gatsby-theme-blog/src/components/post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
