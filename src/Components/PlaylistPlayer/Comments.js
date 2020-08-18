import React from "react";

class Comments extends React.Component{
    state={
        text: "",
        user: null,
        newComments: []
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                playlist_id: this.props.playlistID,
                user_id: this.props.currentUser,
                text: this.state.text,
            })
        })
            .then(resp => resp.json())
            .then(data => this.setState({newComments: [...this.state.newComments, data]}),
            this.setState({text: ""}))
    }

    render(){
        // console.log("playlistID", this.props.playlistID)
        // console.log("userID", this.props.currentUser)
        // console.log("text", this.state.text)
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <textarea className="chatForm" name="newPlaylist"
                        onChange={this.handleChange}
                        value={this.state.text} />
                    <button type="submit">Post</button>
                </form>
                <div className="chatBox">
                    {this.state.newComments.reverse().map(comment => {
                        return (
                            <div>
                                <label className="comment_user_name">{comment.user.username} </label>
                                <label className="comment_text">{comment.text}</label>
                            </div>)
                    })}
                    {this.props.comments.reverse().map(comment => {
                        return (
                            <div>
                                <label className="comment_user_name">{comment.user.username} </label>
                                <label className="comment_text">{comment.text}</label>
                            </div>)
                    })}
                    
                </div>
            </div>
        )
    }

}

export default Comments