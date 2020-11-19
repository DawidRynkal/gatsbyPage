import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image'
import {Link } from 'gatsby';

const PreviewWrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

  h1,
  p {
     font-size:0.9rem;
    margin: 5px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover {
  opacity:0.8;
}
`;


const Preview = ({title, excerpt, image, slug}) => (
<PreviewWrapper to={slug} >
    <StyledImage fluid={image} />
    <PreviewInfoLabel>
<h1>{title}</h1>
<p>{excerpt}</p>
</PreviewInfoLabel>
</PreviewWrapper>
)
export default Preview;