import React from "react";

class YoutubeCard extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                url: this.props.ytVid.id.videoId,
                title: this.props.ytVid.snippet.title,
                playlist_id: this.props.currentPlaylistID,
            })
        })
            .then(resp => resp.json())
            .then(data => { this.props.handleNewVideo(data) }
            )
    }

    render() {
        const {title, description} = this.props.ytVid.snippet
        console.log(this.props.ytVid.id)
        return(
            <div>
                {this.props.ytVid.id.kind !== "youtube#video"
                ? null 
                : <div className="ytCard">
                    <div className="ytCardVid">
                        <iframe
                            height= "250px"
                            width= "350px"
                            title="Video Player"
                            src={`https://www.youtube.com/embed/${this.props.ytVid.id.videoId}`}/>
                    </div>
                    <div className="ytCardText">
                        <h3>{title}</h3>
                        <p>{description}</p>
                            <div><button className="defaultButton" onClick={this.handleSubmit}>Add to Playlist</button></div>
                    </div>
                </div>
        }
        </div>
        )
    }
}

export default YoutubeCard;
