import React from 'react';
import Image from 'gatsby-image';
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
query querySunglePost($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        author
        slug
        title
        featuredImage {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`

const PostPage = ({ data }) => (
    <>
    {console.log(data)}
    <h1>{data.mdx.frontmatter.title}</h1>
    <p>{data.mdx.frontmatter.author}</p>
    <Image fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed} />
<MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
)

export default PostPage;