import React from "react";
import MultiPlayerCard from "./MultiPlayerCard";

class MultiPlayer extends React.Component {
  state = {
    syncPlaying: false,
  }

  setPlaying = () => {
    this.setState({syncPlaying: !this.state.syncPlaying})
  }

  render() {
    // console.log(this.props.playlist)
    return (
      <div >
        <div>
          <button onClick={this.setPlaying}>SyncPlay</button>
          <br /><br /><br />
          <div className="multiPlayerCont" >
          {this.props.playlist.map((video) => { 
            return (
              <div item >
                <MultiPlayerCard video={video} key={video.id} syncPlaying={this.state.syncPlaying} />
              </div>
            )
            })
            }</div>
        </div>
      </div>
      )
    }
}

export default MultiPlayer;
