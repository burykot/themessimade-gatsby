import React, { Component } from 'react'
import VideosItem from './videos-item'
import VideoPlayer from './videos-player'


class Videos extends Component {
  constructor(props){
    super(props)
    this.state = {
      video: ''
    }
    this.videoIdHandler = this.videoIdHandler.bind(this)
    this.videoPlayerCloseHandler = this.videoPlayerCloseHandler.bind(this)
  }

  videoIdHandler(e){
    this.setState({
      video: e.currentTarget.id
    })
  }

  videoPlayerCloseHandler(){
    this.setState({video: ''})
  }

  videoList(data){
    return data.map((video) => {
      return <VideosItem
        key={video.id}
        video={video}
        videoIdHandler={this.videoIdHandler}/>
    })
  }

  overlayVideo(a){
    if(a){
      return <VideoPlayer video={this.state.video} videoPlayerCloseHandler={this.videoPlayerCloseHandler} />
    }
  }

  render () {
    return <div>
      <div className="videoWrapper">
        {this.videoList(this.props.data)}
      </div>
      {this.overlayVideo(this.state.video)}
    </div>
  }
}

export default Videos;
