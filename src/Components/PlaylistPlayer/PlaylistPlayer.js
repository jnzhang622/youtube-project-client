import React from "react";
import ReactPlayer from 'react-player/youtube'

class PlaylistPlayer extends React.Component {
  state = {
    songIndex: 0,
    playing: false,
    currentPlaylist: [],
    url: ""
  }

  handleChange = (e) => {
    if (e.target.name ==="playPause"){
      this.setState({playing: !this.state.playing})
    }
    else if (e.target.name === "prevVid") {
      if (this.state.songIndex < 1) {
        this.setState({ songIndex: this.props.playlist.length })
      }
      else {
        this.setState({ songIndex: this.state.songIndex - 1 })
      }}
    else if (e.target.name === "nextVid") {
      if (this.state.songIndex === this.props.playlist.length - 1){
        this.setState({ songIndex: 0 })
      }
      else{
        this.setState({ songIndex: this.state.songIndex + 1 })
      }
    }
  }

  reactPlayer = () => {
    // let songUrl = this.props.playlist ? this.props.playlist[this.state.songIndex].url : ""
     if (this.props.playlist[this.state.songIndex]){
    return(
      <ReactPlayer url={this.props.playlist[0]}
      playing={this.state.playing}
      onEnd={null}
      controls={true}
        />)}
        
        else
       {return (
         <h2>Loading</h2>)}
    // console.log(this.props.playlist[this.state.songIndex])
  }


  render() {
    console.log(this.props.playlist[this.state.songIndex])
    return (
      <div>
        <h1>PlaylistPlayer Component</h1>
    <div>{this.reactPlayer()}</div>
        <button name="prevVid" onClick={this.handleChange}>Prev</button>
        <button name="playPause" onClick={this.handleChange}>{this.state.playing ? "Pause" : "Play"}</button>
        <button name="nextVid" onClick={this.handleChange}>Next</button>
      </div>
    );
  }
}

export default PlaylistPlayer;
