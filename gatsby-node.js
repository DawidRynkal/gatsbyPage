const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate =  path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
  query queryArticles {
    allMdx {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `);


    // Create blog post pages.
    result.data.allMdx.nodes.forEach(post => {
      createPage({
        // Path for this page — required
        path: `articles/${post.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.frontmatter.slug,
        },
      })
    })
  }
