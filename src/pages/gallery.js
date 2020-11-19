import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import PageInfo from '../components/PageInfo/PageInfo';
import {Link } from 'gatsby';

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
`;

const PreviewWrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

:hover {
  opacity:0.8;
}
`;

const GalleryPage = ({data}) => {
  const elmentTest = data.allDatoCmsPicture.nodes.map(item => {
    const firstOfArray = item.gallery[0]
    

    return (
      <>
         <PreviewWrapper key={firstOfArray.originalId} to={firstOfArray.originalId}>
         <StyledImage key={firstOfArray.originalId} fluid={firstOfArray.fluid} />
         </PreviewWrapper>
     
      </>
    )
  })

  const pageData = { 
    title: 'gallery',
    description: 'this page show gallery'
}
  
return (
    <>
      <PageInfo title={pageData.title} description={pageData.description} />
    <GalleryWrapper>
    {elmentTest}
    </GalleryWrapper>

   </>
)
}


export const query = graphql`
{
  allDatoCmsPicture {
    nodes {
      gallery {
        originalId
        fluid(maxWidth: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
  }
  
`

export default GalleryPage;


