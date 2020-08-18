import React from "react";
import ReactPlayer from 'react-player'
// import Button from '@material-ui/core/Button'

class Video extends React.Component {
    state={
        playing: true
    }

    togglePlay = () => {
        this.setState({ playing: !this.state.playing })
    }

    render() {
        // console.log(`https://www.youtube.com/embed/${this.props.video}`)
        return (
            <div>
                {/* <iframe
                frameBorder="0"
                height="400"
                width="700"
                title="Video Player"
                src={`https://www.youtube.com/embed/${this.props.video}`}/> */}

                <ReactPlayer 
                url={`https://www.youtube.com/embed/${this.props.video}`}
                height={400}
                width={700}
                playing = {this.state.playing}
                onEnded = {this.props.nextVidOnEnd}
                controls = {true}/>

                <div>
                    <button name="prevVid" onClick={this.props.handleChange}>Prev</button>
                    <button name="playPause" onClick={this.togglePlay}>{this.state.playing ? "Pause" : "Play"}</button>
                    <button name="nextVid" onClick={this.props.handleChange}>Next</button>
                </div>
            </div>
            )
        }
    }

export default Video;
