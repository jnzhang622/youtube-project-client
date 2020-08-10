import React from "react";
import ReactPlayer from 'react-player/youtube'

class MultiPlayer extends React.Component {
  state = {
    
  }

  render() {
    // console.log(this.props.)
    return (
      <div>
        <h1>MultiPlayer Component</h1>
        <div>
          {this.props.playlist.map(vid => { return(
            <ReactPlayer url={vid}
              playing={false}
              // onEnd={null}
              controls={true}
            />)})}
          
        </div>
      </div>
      )
    }
}

export default MultiPlayer;
