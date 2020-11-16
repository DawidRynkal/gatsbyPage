import React from 'react';
import { graphql } from 'gatsby' 
import styled from 'styled-components';
import slugify from 'slugify';
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
return (
    <>
    <PageInfo title={pageData.title} description={pageData.description} />
   
    <ArticlesWrapper>
    {data.allDatoCmsArticle.nodes.map(article =>(
   <ArticlePreview key={article.title} title={article.title} image={article.featuredimage.fluid} slug={slugify(article.title, {lower: true})} />
    ))}
    </ArticlesWrapper>
</>
)
}
export const query = graphql`
{
  allDatoCmsArticle {
    nodes {
      title
      featuredimage {
        fluid(maxWidth: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
}
`

export default ArticlesPage;

