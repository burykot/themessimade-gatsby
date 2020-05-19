import React from 'react'

const PostsItem = ({post, imageUri}) => {

  const postImageStyle = imageUri ? {'backgroundImage': 'url(' + imageUri + ')'} : {'backgroundColor': '#666'}
  
  return (
    <div className="post">
      <a href={post.url}>
        <div className="post-image" style={postImageStyle}>
        </div>
        <div className="postDescriptionWrapper">
          <h2>{post.title}</h2>
          <p className="post-description">{post.shortdesc}</p>
        </div>
      </a>
    </div>
  )
}

export default PostsItem;
