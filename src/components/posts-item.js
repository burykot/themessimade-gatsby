import React, { Component } from 'react'

class PostsItem extends Component {
  postImageStyle(a) {
    return a.image ? {'backgroundImage': 'url(' + a.image + ')'} : {'backgroundColor': '#666'};
  }
  render () {
    return <div className="post">
      <a href={this.props.post.url}>
        <div className="post-image" style={this.postImageStyle(this.props.post)}>
        </div>
      <div className="postDescriptionWrapper">
        <h2>{this.props.post.title}</h2>
        <p className="post-description">{this.props.post.shortdesc}</p>
        {/* <span className="post-date">{this.props.post.date.slice(0, 10)}</span><a href={this.props.post.url} className="readmore">read more ></a>*/}
      </div>
      </a>
    </div>
  }
}

export default PostsItem;
