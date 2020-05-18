import React, { Component } from 'react'

class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style : {
        opacity: 0
      }
    }
  }

  componentDidMount() {
    const style = {animation: 'fullFadeIn 0.5s'}
    this.setState({ style })
  }

  // componentWillUnmount() {
  //   const style = {animation: 'fullFadeOut 0.5s'}
  //   this.setState({ style })
  //   // delay required on parent component instead
  // }

  render () {
    return <div className="overlay" style={this.state.style} onClick={this.props.videoPlayerCloseHandler}>
      <button className="closeOverlay" > x </button>
      <iframe src={'https://www.youtube.com/embed/' + this.props.video + '/?autoplay=1'} title="Video player" frameBorder="0" allowFullScreen></iframe>
    </div>
  }
}

export default VideoPlayer;
