import React from "react";
import MultiPlayerCard from "./MultiPlayerCard";

class MultiPlayer extends React.Component {
  state = {
    syncPlaying: false,
    played: 0,
  }

  setPlaying = () => {
    this.setState({syncPlaying: !this.state.syncPlaying})
  }

  // handleSeekMouseDown = e => {
  //   this.setState({ seeking: true })
  // }
  // handleSeekChange = e => {
  //   this.setState({ played: parseFloat(e.target.value) })
  // }
  // handleSeekMouseUp = e => {
  //   this.setState({ seeking: false })
  //   this.player.seekTo(parseFloat(e.target.value))
  // }
  // ref = player => {
  //   this.player = player
  // }

  render() {
    // console.log(this.props.playlist)
    return (
      <div >
        <div>
          <button className="syncButton" onClick={this.setPlaying}>SyncPlay</button>
          {/* <input type='range' min={0} max={0.999999} step='any'
            value={this.state.played}
            onMousedown={this.handleSeekMouseDown}
            onChange={this.handleSeekChange}
            onMouseUp={this.handleSeekMouseUp}
          /> */}
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
