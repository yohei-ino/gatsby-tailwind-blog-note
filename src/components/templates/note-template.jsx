import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from '../layout'
export default function pageTemplate({ data: { mdx } }) {

  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <p>{mdx.frontmatter.author}</p>
    </Layout>
  )
}

export const pageQuery = graphql`
    query NotePostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                author
                date
            }
        }
    }
`
