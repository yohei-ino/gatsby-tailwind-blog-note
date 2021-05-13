const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    // Extend another node. The new node field is placed under the 'fields' key on the extended node object.
    createNodeField({
      // Name of the field adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath.
      value: `/note${value}`,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
    // Handling Errors.
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Create pages.
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/templates/note-template.jsx`),
        context: {
          // We can use the values in this context in our page layout component.
          id: node.id
        },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
        type Mdx implements Node {
            frontmatter: MdxFrontmatter
        }
        type MdxFrontmatter {
            author: String!
            date: Date
            tags: [String!]!
        }
    `
  createTypes(typeDefs);
}
