import React from "react";
import PlaylistItem from "./PlaylistItem"

    // ${process.env.REACT_APP_API_KEY}

class Playlist extends React.Component {
    
    render() {
        // console.log("adfh", this.props.playlist)
        return (
            <div>
                {this.props.playlist.map((vid, index) => { 
                    return (
                        <div>
                    <PlaylistItem 
                        currentVidCode={this.props.currentVidCode}
                        currentUser={this.props.currentUser}
                        video={vid} 
                        key={index} 
                        setSongIndex={this.props.setSongIndex} 
                        handleUpdate={this.props.handleUpdate}/>
                        </div>)})}
            </div>

    );

    }

}

export default Playlist;
