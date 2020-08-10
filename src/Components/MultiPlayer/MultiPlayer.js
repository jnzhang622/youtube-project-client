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
          {this.props.playlist.map(vidCode => { return(
            <iframe width="700" height="400"
              src={`https://www.youtube.com/embed/${vidCode}`}

              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>)})}
          
        </div>
      </div>
      )
    }
}

export default MultiPlayer;
