import React from "react";

class VideoForm extends React.Component {
    state = {
        video: "",
        ytCode: "",
        title: null,
        form: true
    }
    // Array.isArray(data.items) ? data.items[0].snippet.title : null
    // https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.state.ytCode}&key=${process.env.REACT_APP_API_KEY}
    // https://www.googleapis.com/youtube/v3/videos?id=${this.state.ytCode}&key=${process.env.REACT_APP_API_KEY}&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics

    runApiFetch = (e) => {
        e.preventDefault()
        if (this.state.ytCode.length !== 11) { this.setState({ title: "ERROR: INVALID YOUTUBE CODE" })}
        else
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.state.ytCode}&key=${process.env.REACT_APP_API_KEY}`)
            .then(resp => resp.json())
            .then(data => this.setState({video: data, title: data.items[0].snippet.title, form: false}))
            // .then(data => this.setState({ video: data }), this.setTitleState())

            // .then(data => Array.isArray(data.items) && data.items[0].snippet
            //     ? this.setState({ title: data.items[0].snippet.title }) 
            //     : this.setState({ title: "ERROR: INVALID YOUTUBE CODE" }))

            // .then(data => this.setState({video: data}), 
            //     (Array.isArray(data.items) ? this.setState({title: data.items[0].snippet.title}): null ))
    }

    setTitleState = () =>{
        // console.log("setTitleState")
        Array.isArray(this.state.video.items) 
        ? this.setState({title : this.state.video.items[0].snippet.title}) 
        : this.setState({title: "ERROR: INVALID YOUTUBE CODE"})
    }

    handleChange = (e) => {
        this.setState({ ytCode: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                url: this.state.ytCode,
                title: this.state.title,
                playlist_id: this.props.currentPlaylistID,
            })
        })
            .then(resp => resp.json())
            .then(data => {this.props.handleNewVideo(data)},this.clearForm())
    }
    

    clearForm = () =>{
        this.setState({
            video: "", ytCode: "", title: null, form: true})
    }
    
    render() {
        // console.log("VIDEO", this.state.video)
        // console.log("TITLE", this.state.title)
        // console.log(Array.isArray(this.state.video.items) ? this.state.video.items[0].snippet : null)
        return (
            <div>
                <div>{this.state.title}</div>
                {this.state.form 
                ? <form onSubmit={this.runApiFetch}>
                    <label>New Video: 
                        <input className="inputFields" name="newVideo" onChange={this.handleChange} value={this.state.ytCode} />
                    </label>
                    {(this.state.ytCode === "") ? null : <button type="submit">Search</button>}
                    
                </form>
                : 
                <div className="videoForm">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                        {this.state.title && this.state.title !== "ERROR: INVALID YOUTUBE CODE"
                        ? <button>Add Video to Playlist</button> : null}</div>
                    </form>
                    <button onClick={this.clearForm}>Cancel</button>
                </div>}
            </div>
        );
    }
}

export default VideoForm;
