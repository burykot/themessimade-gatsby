import React, { Component } from 'react'

class VideosItem extends Component {
  render () {
    return <div className="video" id={this.props.video.id} onClick={this.props.videoIdHandler}>
      <img src={'https://img.youtube.com/vi/' + this.props.video.id + '/hqdefault.jpg'} alt={'Video: ' + this.props.video.title} />
      <span className="play">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" ><path d="M24 4C12.95 4 4 12.96 4 24s8.95 21 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l11 9-12 9z"/></svg>
      </span>
      <h2 className="video-title">{this.props.video.title}</h2>
      <span className="video-description">{this.props.video.date}</span>
    </div>
  }
}

export default VideosItem;
