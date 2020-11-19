import React from 'react';
import Image from 'gatsby-image';


export const query = graphql`
query MyQuery($originalId: String!) {
    datoCmsPicture(
      gallery:
      {elemMatch: 
        {originalId: {eq: $originalId}}}) {
      gallery{
        originalId
       fixed(width:500) {
        ...GatsbyDatoCmsFixed_tracedSVG
      }
      }
    }
  }  
` 

const PicturePage = ({data}) => (
    <>
    {data.datoCmsPicture.gallery.map(picture => (
       
        <Image key={picture.originalId} fixed={picture.fixed} />
    )
    )}
    </>
)

export default PicturePage;