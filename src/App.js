import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
// import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import PlaylistForm from "./Components/PlaylistForm";
import VideoForm from "./Components/VideoForm";
import DashBoard from "./Components/DashBoard/DashBoard";
import PlaylistPlayer from "./Components/PlaylistPlayer/PlaylistPlayer";
import MultiPlayer from "./Components/MultiPlayer/MultiPlayer";
import YoutubeSearch from "./Components/YoutubeSearch/YoutubeSearch"
import "./App.css";

class App extends React.Component {
  state = {
    currentUser: 1,
    playlists: [],
    currentPlaylist: [],
    currentPlaylistName: "Piano Covers",
    currentPlaylistID: null,
    currentPlaylistComments: [],
    selectOption: []
  }

  componentDidMount(){
    this.fetchPlaylist()
  }

  fetchPlaylist = () =>{
    fetch("http://localhost:3000/api/v1/playlists")
      .then(resp => resp.json())
      .then(data => this.setState({ playlists: data }))
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.playlists !== this.state.playlists || prevState.currentPlaylistName !== this.state.currentPlaylistName) {
      let newSelectedPlaylist= this.state.playlists.find(playlist => playlist.name === this.state.currentPlaylistName)
      this.setState({ 
        currentPlaylist: newSelectedPlaylist.videos, 
        currentPlaylistName: newSelectedPlaylist.name,
        currentPlaylistID: newSelectedPlaylist.id,
        currentPlaylistComments: newSelectedPlaylist.comments})
      }
        // this.state.playlists.find[this.state.playlistIndex].videos.map(vid => { return vid.url })})}
  }

  handleChange = (e) => {
    this.setState({ 
      currentPlaylistName: e.target.options[e.target.selectedIndex].innerText, 
      currentPlaylistID: e.target.value })
  }

  playlistSelect = () => {
    let selectPlaylists = this.state.playlists.filter(playlist => {
      if (playlist.user.id !== this.state.currentUser) {
      return false}
    return true})
    console.log(selectPlaylists)

    return (
      <select onChange={this.handleChange} name="playlistSelect">
        {selectPlaylists.map(playlist => {if (playlist)
          {return <option value={playlist.id} >{playlist.name}</option>}
        }
        )}
      </select>
    )
  }

  handleNewPlaylist = (newPlaylist) => {
    this.setState({
      playlists: [...this.state.playlists, newPlaylist]
    })
  }

  handleDeletePlaylist = () => {
    fetch(`http://localhost:3000/api/v1/playlists/${this.state.currentPlaylistID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
      .then(res => res.json())
      .then(() => {
        let newPlaylists = this.state.playlists.filter((playlist) => {
          if (playlist.id === this.state.currentPlaylistID){
            return false
          } 
          return true
        })
        let lastPlaylist = this.state.playlists[0]
        this.setState({
          currentPlaylist: newPlaylists,
          playlists: newPlaylists, 
          currentPlaylistName: lastPlaylist.name,
          currentPlaylistID: lastPlaylist.id})
      })
    }

    handleNewVideo = (newVideo) => {
      this.setState({currentPlaylist: [...this.state.currentPlaylist, newVideo]})
    }

    handleUpdate = () =>{
      this.fetchPlaylist()
      // let newComment = this.state.currentPlaylistComments.map(comment => comment.filter(
      //   comment => {if (video.id === videoID) {return false} return true}))
      //   this.setState({currentPlaylistComments: newComment})
    }

  render() {
    // console.log("currentPlaylist", this.state.currentPlaylist)
    // console.log("playlists", this.state.playlists[this.state.playlists.length-1])
    const { currentUser, currentPlaylist, currentPlaylistID, currentPlaylistComments, } = this.state
    return (
      <Router>
        <div>
            <NavBar />
            <div className="formsBar">
              <PlaylistForm 
                currentUser={currentUser} 
                handleNewPlaylist={this.handleNewPlaylist} />

              {this.playlistSelect()}

              <VideoForm 
                currentUser={currentUser} 
                currentPlaylistID={this.state.currentPlaylistID} 
                handleNewVideo={this.handleNewVideo}/>
            </div>
            <br/>

          <Switch>
            {/* <Route exact path="/signup" ><SignUp/> </Route> */}
            <Route exact path="/" ><Login/> </Route>
            <Route exact path="/dashboard" ><DashBoard 
              currentUser={currentUser} 
              playlists={this.state.playlists} /> </Route>
            <Route exact path="/youtubesearch" ><YoutubeSearch 
              currentUser={currentUser}
              currentPlaylistID={currentPlaylistID}
              handleNewVideo={this.handleNewVideo} /> </Route>
            <Route exact path="/multiplayer" ><MultiPlayer 
              currentUser={currentUser} 
              playlist={currentPlaylist}/> </Route>
            <Route exact path="/playlistplayer"> <PlaylistPlayer 
              currentUser={currentUser} 
              playlist={currentPlaylist}
              currentPlaylistName={this.state.currentPlaylistName}
              id={currentPlaylistID}
              comments={currentPlaylistComments.reverse()} 
              handleDeletePlaylist={this.handleDeletePlaylist}
              handleUpdate={this.handleUpdate}/></Route>
          </Switch>

          <br/>
        </div>
        
      </Router>
    );
  }
}
export default App;
