import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import Button from '../components/Button/Button';
import Img from 'gatsby-image';

const WrapperContent = styled.div`
width: 60%;
height: calc(100vh - 80px);
text-align: right;
display: flex;
flex-direction: column;
align-items: flex-end ;
justify-content: center ;

h1 {
   margin: 0;
   font-size: 60px;
   width: 45%;
   line-height: 1;
}

p {
   margin: 20px 0 40px;
   width: 65%;
}
`;



const ImageWrapper = styled(Img)`
position:absolute !important;
top: 0;
right: 0;
height: 100vh;
width: 40%;
object-fit: cover;
`;


const IndexPage = ({data}) => (
<>
 <WrapperContent>
    {console.log(data)}
    <h1>Your new space</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, ad quam architecto quidem ab laborum molestias et autem minima fugiat quos dicta consequatur harum quo eligendi eaque! Nostrum, iste quibusdam!</p>
    <Button>estimate project</Button>
</WrapperContent>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
 </>
)

export const query = graphql`
{
   file(name: {eq: "lamp"}) {
     childImageSharp {
       fluid(maxWidth: 800, maxHeight: 1200,  quality: 100) {
       ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
 }
`

export default IndexPage
