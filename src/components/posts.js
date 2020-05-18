import React, { Component } from 'react'
import PostsItem from './posts-item'

class Posts extends Component {
  postsList(data){
    return data.map((post) => {
      return <PostsItem
        key={post.date}
        post={post} />
    })
  }

  render () {
    return <div className="postsWrapper">
      {this.postsList(this.props.data)}
    </div>
  }
}

export default Posts;
