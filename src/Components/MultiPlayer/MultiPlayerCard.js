import React from "react";
import ReactPlayer from 'react-player'

class MultiPlayerCard extends React.Component {
    state={
        playing: false,
        syncPlaying: false
    }

    handleSyncButton = () => {this.setState({syncPlaying: !this.state.syncPlaying})}

    // handlePlaying = () => {this.state.syncPlaying ? this.props.syncPlaying : this.state.playing}

    render(){
      return(
          <div className="multiPlayerCard">
              {/* <iframe
              key={index} 
              frameBorder="0"
                height="300"
                width="450"
                title="Video Player"
                src={`https://www.youtube.com/embed/${video.url}`}
              ></iframe> */}
              <ReactPlayer
                url={`https://www.youtube.com/embed/${this.props.video.url}`}
                height={300}
                width={450}
                  playing={this.state.syncPlaying ? this.props.syncPlaying : this.state.playing}
                controls={true} />
          <button className="defaultButton" variant="outlined" size="small"
              onClick={this.handleSyncButton}>Sync: {this.state.syncPlaying ? "True" : "False"}</button>
          </div>

      )
    }
}

export default MultiPlayerCard;
