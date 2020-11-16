import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import {Link } from 'gatsby';

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
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

`;

const GalleryPage = ({data}) => {
    console.log(data)
return (
    <GalleryWrapper>
    {data.datoCmsPicture.gallery.map(photo => (
         <PreviewWrapper key={photo.originalId} to={photo.originalId}>
    <StyledImage fluid={photo.fluid} />
        </PreviewWrapper>
   ) )}
      </GalleryWrapper> 
)
}


export const query = graphql`
{
 
    datoCmsPicture {
      title
      gallery {
        fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
          path
          originalId
      }
    }
  }
  
`

export default GalleryPage;