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
        .then(data=>{this.props.handleNewPlaylist(data)})
    }

    render() {
        console.log(this.state.name)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Playlist: <input name="newPlaylist" 
                    onChange={this.handleChange} 
                    value={this.state.name}/></label>
                
                <button type="submit">Create Playlist</button>
            </form>
            );
        }
    }

export default PlaylistForm;
