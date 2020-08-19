import React from "react";
import Playlist from "./Playlist";
import Video from "./Video"
import Comments from "./Comments"

class PlaylistPlayer extends React.Component {
  state = {
    songIndex: 0,
    url: ""
  }

  handleChange = (e, video) => {
    if (e.target.name === "prevVid") {
      if (this.state.songIndex < 1) {
        this.setState({ songIndex: this.props.playlist.length - 1 })
      }
      else {
        this.setState({ songIndex: this.state.songIndex - 1 })
      }
    }
    else if (e.target.name === "nextVid") {
      if (this.state.songIndex === this.props.playlist.length - 1) {
        this.setState({ songIndex: 0 })
      }
      else {
        this.setState({ songIndex: this.state.songIndex + 1 })
      }
    }
    else if (e.target.name === "setSongIndex"){
      this.setState({ songIndex: this.props.playlist.indexOf(video)}) 
      // console.log(this.props.playlist.indexOf(video))
    }
  }

  sendVidCode = () => {
    if (this.props.playlist[this.state.songIndex]) {
      return this.props.playlist[this.state.songIndex].url
    }
  }

  nextVidOnEnd = ()=> {
    if (this.state.songIndex === this.props.playlist.length - 1) {
      this.setState({ songIndex: 0 })
    }
    else {
      this.setState({ songIndex: this.state.songIndex + 1 })
    }
  }

  render() {
    const { currentUser, id, playlist, comments, handleUpdate} = this.props
    // console.log("playlist", this.props.playlist)
    // console.log(this.props.id, this.props.name, this.props.playlist, this.props.comments)
    return (
      <div>
        <div className="playlistPlayerCont">
          <div className="playlist">
            <Playlist 
              currentVidCode={this.sendVidCode()}
              currentUser={currentUser}
              playlist={playlist} 
              setSongIndex={this.handleChange} 
              handleUpdate={handleUpdate}/>
          </div>
          <div className='playlistVid'>
            <Video 
              video={this.sendVidCode()} 
              handleChange={this.handleChange} 
              nextVidOnEnd={this.nextVidOnEnd}/>

            <Comments 
              currentUser={currentUser}
              playlistID={id}
              comments={comments}
              handleUpdate={handleUpdate}/>
            </div>
        </div>
        <button className="playlistDeleteButton" 
        onClick={this.props.handleDeletePlaylist}
        >Delete {this.props.currentPlaylistName} Playlist</button>
      </div>
      
    );
  }
}

export default PlaylistPlayer;
