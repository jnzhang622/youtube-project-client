import React from "react";
import ReactPlayer from "react-player"

class DashBoard extends React.Component {
  state = {
    playingUrlCode: "",
  }

  setUrlCode = (e) => {
    this.setState({playingUrlCode: e.target.value})

  }

  render() {
    return (
      <div>
        <div className="dashboardPlayer">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${this.state.playingUrlCode}`}
            height={200}
            width={350}
            playing={true}
            controls={true} />
        </div>
        <div className="dashboardCont">
        {this.props.playlists.map(playlist => {
          return (
            <div className= "dashboardItems">
              <h3>{playlist.name}</h3>
              <p>Owner: {playlist.user.username}</p>
              {playlist.videos.map(video => {
                return (<div style={{ padding: '5px' }} >
                  {video.title} 
                  <button value={video.url} onClick={this.setUrlCode}>Play</button>
                  </div>
                 
                 ) })}<br />
            </div>
          )
        })}</div>
      </div>
    );
  }
}

export default DashBoard;
