import React from 'react';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import ArticlePreview from '../components/ArticlesPreview/ArticlesPreview';

const pageData = { 
    title: 'articles',
    description: 'this page show articles'
}

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

const ArticlesPage = ({data}) => {
const {allMdx: {nodes}} = data;

return (
    <>
    <PageInfo title={pageData.title} description={pageData.description} />
   
    <ArticlesWrapper>
    {nodes.map(article =>(
   <ArticlePreview key={article.frontmatter.slug} title={article.frontmatter.title} excerpt={article.excerpt} image={article.frontmatter.featuredImage.childImageSharp.fluid} slug={article.frontmatter.slug} />
    ))}
    </ArticlesWrapper>
</>
)
}
export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          author
          slug
          featuredImage {
            childImageSharp {
                fluid(maxHeight: 400, maxWidth: 700, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`

export default ArticlesPage;

