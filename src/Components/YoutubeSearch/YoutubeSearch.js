import React from "react";
import YoutubeCard from "./YoutubeCard"

class YoutubeSearcher extends React.Component {
    state = {
        searchTerm: '',
        searchResults: null,
        render10: 0,
    }

    handleSearch = (e) => {
        e.preventDefault()
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({searchResults: data.items}))
    }

    handleChange = (e) => {this.setState({searchTerm: e.target.value})}

    prev10 = () => {this.setState({ render10: this.state.render10 - 10})}

    next10 = () => {this.setState({render10: this.state.render10 + 10})}

    render10 = (arr, render10) => {return arr.slice(render10, render10 + 10)}

    render() {
        console.log(this.state.searchResults)
        return (
            <div >
                <div className="ytSearchBar">
                    <form className="ytSearchBar" onSubmit={this.handleSearch}>
                        <input className="inputFields" placeholder="Search Youtube..." onChange={this.handleChange}/>
                    </form>
                </div>
                <br />
                <br />
                {this.state.render10 > 0  ?
                    <div> < button onClick={this.prev10}>Prev</button>
                        <br /><br /></div>
                    : null
                }
                <div >
                    <div className="ytCardCont">
                    {this.state.searchResults ? 
                        this.render10(this.state.searchResults, this.state.render10).map(ytVid => {
                            return <div >
                            <YoutubeCard 
                            key = {ytVid.id}
                            ytVid = {ytVid}
                            currentPlaylistID={this.props.currentPlaylistID}
                            handleNewVideo={this.props.handleNewVideo}
                            /></div>
                        })
                        : null
                    }</div>
                </div>
                <br/>
                <div >
                    {this.state.searchResults ? 
                        <div>< button onClick={this.next10}>Next</button></div>
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default YoutubeSearcher;
