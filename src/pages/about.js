import React from 'react';
import Image  from 'gatsby-image';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';


const ImageWrapper = styled(Image)`
position:absolute !important;
top: 0;
right: 0;
height: 100vh;
width: 40%;
object-fit: cover;
`;

const DescribeWrapper = styled.div`
width: 60%;
text-align: right;
display: flex;
flex-direction: column;
align-items: flex-end ;
justify-content: center ;
border-top: 2px solid black;
border-bottom: 2px solid black;
padding: 20px 0 20px 0;

h1 {
   margin: 0;
   font-size: 40px;
   line-height: 1;
}

p {
   margin: 20px 0 40px;
   width: 80%;
}
`;

const pageData = { 
    title: 'about',
    description: 'learn more about the author by reading the note below'
}

const AboutPage = ({data}) => {
return (
    <>
    <PageInfo title={pageData.title} description={pageData.description} />
    
    {data.allDatoCmsAbout.nodes.map(photo => (
        <>
        <DescribeWrapper>
            <p>{photo.describe}</p>
            <h1>{photo.author}</h1>
        </DescribeWrapper>
    <ImageWrapper fixed={photo.authorPhoto.fixed} />
    {console.log(photo)}
    </>
    ) )}
    
    
    </>
)}

export const query = graphql`
  {
    allDatoCmsAbout {
      nodes {
        describe
        author
        authorPhoto {
          fixed(width: 500) {
            ...GatsbyDatoCmsFixed_tracedSVG
          }
        }
      }
    }
  }
`

export default AboutPage;