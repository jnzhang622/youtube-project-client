import React from "react";

class Playlist extends React.Component {
    state = {
        video: ''
    }

    handleDelete = () => {
        fetch(`http://localhost:3000/api/v1/videos/${this.props.video.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(() => this.props.handleUpdate())
        // console.log(this.props.video.id)
    }


    render() {
        // console.log(this.props.currentUser)
        // console.log(this.props.video.url)
        // console.log(this.props.currentVidCode)
        // console.log("Items",this.state.song.items)
        // console.log(this.props.video)
        return (
            <div className={this.props.video.url === this.props.currentVidCode ? "selectedItem" : "playlistItem"} 
                style={{padding: '25px'}} 
                // classname={this.props.video.url === this.props.currentVidCode ? "playlistitem" : null}
                // background-color={this.props.video.url === this.props.currentVidCode ? {root:classes.root} : null}
                >
                {/* {Array.isArray(this.state.song.items) ? this.state.song.items[0].snippet.title : null} */}
                <div className="playlistItemTitle">
                    <a >{this.props.video.title}</a>
                </div>
                <div className="playlistItemButtonCont">
                    <button className="playlistButtons"
                        name="setSongIndex" 
                        value={this.props.video} 
                        onClick={(e) => this.props.setSongIndex(e, this.props.video)}
                        variant="outlined"
                        size="small"
                        >Play
                    </button>
                    <button className="playlistButtons"
                        onClick={this.handleDelete}
                        >Remove
                    </button>
                </div>
            </div>
    );
    }
}

export default Playlist;
