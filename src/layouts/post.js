import React from 'react';
import Image from 'gatsby-image';


export const query = graphql`
query querySinglePost($id: String!) {
    datoCmsArticle(id: {eq: $id}) {
        author
        title
        featuredimage {
            fixed(width: 500) {
                ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
        paragraph {
          ... on DatoCmsHeading {
            id
            headingContent
          }
          ... on DatoCmsParagraph {
            id
            paragraphContent
          }
          ... on DatoCmsImage {
            id
            image {
                fixed(width: 500) {
                    ...GatsbyDatoCmsFixed_tracedSVG 
                }
            }
          }
        }
      }
  }
`

const PostPage = ({ data }) => (
    <>
    {console.log(data)}
    <h1>{data.datoCmsArticle.title}</h1>
<h2>{data.datoCmsArticle.author}</h2>
    <Image fixed={data.datoCmsArticle.featuredimage.fixed} /> 
<div>{data.datoCmsArticle.paragraph.map(item => {
    const paragraphValues = Object.keys(item)[2];

    switch (paragraphValues) {
        case 'headingContent':
            return <p key={item.id}>{item.headingContent}</p> ;
        case 'paragraphContent':
            return <p key={item.id}>{item.paragraphContent}</p>;
        case 'image':
            return <Image key={item.id} fixed={item.image.fixed}/>
    }
    console.log(paragraphValues)
})}</div>
{console.log(data.datoCmsArticle.paragraph)}
    </>
)

export default PostPage;