import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import PostsItem from './posts-item';
import { getPostImageUri } from '../helpers/getPostImageUri';

const Posts = ({postData}) => {

  // TODO: query should be moved to a page content container
  const imagesData = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 800, quality: 80) {
                src
                originalName
            }
          }
        }
      }
    }
  `)

  return (
    <div className="postsWrapper">
      {postData.map((post) => {
        const postImageUrl = post.image ? getPostImageUri(post.image, imagesData) : null;

        return (
          <PostsItem
            key={post.date}
            post={post}
            imageUri={postImageUrl}
          />
          )
        }
      )}
    </div>
  )
}

export default Posts;
