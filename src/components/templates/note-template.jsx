import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import CodeBlock from '../CodeBlock'
import Layout from '../layout'

const components = {
  pre: CodeBlock,
}

const PageTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <article className="prose prose-sm lg:prose-lg dark:prose-dark max-w-none">
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
      <p>{mdx.frontmatter.author}</p>
    </Layout>
  )
}

export default PageTemplate

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
