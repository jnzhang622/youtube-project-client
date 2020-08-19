import React from "react";

class PlaylistForm extends React.Component {
    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/playlists`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                user_id: this.props.currentUser,
            })
        })
        .then(resp => resp.json())
        .then(data=>{this.props.handleNewPlaylist(data)}, this.setState({name: ""}))
    }

    render() {
        // console.log(this.state.name)
        return (
            <form className="playlistForm" onSubmit={this.handleSubmit}>
                <label>New Playlist <input className="inputFields" name="newPlaylist" 
                    onChange={this.handleChange} 
                    value={this.state.name}/></label>
                {
                    (this.state.name=="") ? null: <button type="submit">Create Playlist</button>
                }
            </form>
            );
        }
    }

export default PlaylistForm;
