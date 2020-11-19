const path = require(`path`);
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate =  path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
  query queryCms {
    allDatoCmsArticle {
      nodes {
        id
        title
    }
  }
}
  `);

 

    // Create blog post pages.
    result.data.allDatoCmsArticle.nodes.forEach(post => {
const slugifyTitle = slugify(post.title, {lower: true});

      createPage({
        // Path for this page — required
        path: `articles/${slugifyTitle}`,
        component: blogPostTemplate,
        context: {
          id: post.id,
        },
      })
    });

    const blogGalleryTemplate =  path.resolve(`src/layouts/picture.js`);
    const resultGallery = await graphql(`
    query queryCmsGallery {
      allDatoCmsPicture {
        nodes {
          gallery {
            originalId
          }
        }
      }
    }
    `);

    resultGallery.data.allDatoCmsPicture.nodes.forEach(arrGallery => {
      arrGallery.gallery.forEach(picture => {
        const slugifyTitleGallery = slugify(picture.originalId, {lower: true});
        
              createPage({
                // Path for this page — required
                path: `gallery/${slugifyTitleGallery}`,
                component: blogGalleryTemplate,
                context: {
                  originalId: picture.originalId,
                },
              })
            })
      })
  }
