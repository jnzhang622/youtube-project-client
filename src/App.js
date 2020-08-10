import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import DashBoard from "./Components/DashBoard/DashBoard";
import PlaylistPlayer from "./Components/PlaylistPlayer/PlaylistPlayer";
import MultiPlayer from "./Components/MultiPlayer/MultiPlayer";
import YoutubeSearch from "./Components/YoutubeSearch/YoutubeSearch"

class App extends React.Component {
  state = {
    playlists: [],
    currentPlaylist: [],
    playlistIndex: 0
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/playlists")
    .then(resp => resp.json())
    .then(data => this.setState({playlists: data}))
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.playlists !== this.state.playlists) {
      let selectedPlaylist = this.state.playlists[this.state.playlistIndex].videos.map(vid => {return vid.url})
      // console.log(test)
      // let selectedPlaylist = this.state.playlists.find(p => p.name === this.playlistSelect.value).videos.map(vid => { return vid.url })
      this.setState({ currentPlaylist: selectedPlaylist})}
  }

  // handleChange = (e) => {
  //   this.setState({currentPlaylist: this.playlists.findBy(name === e.target.name)})
  // }

  playlistSelect = () => {
    return (
      <select onChange={this.handleChange} name="playlistSelect">
        {this.state.playlists.map(playlist => 
          {return <option onChange={this.handleChange} value={playlist.name} >{playlist.name} </option>})}
      </select>
    )
  }
  testingtest =() => {
    this.setState({ playlistIndex: this.state.playlistIndex + 1 })
    console.log(this.state.playlistIndex)
  }



  render() {
    console.log(this.state.playlists.find(p => p.name === this.playlistSelect))
    return (
      <Router>
        <div>
          <div><button onClick={this.testingtest}>testing</button></div >
          <NavBar/>
          {this.playlistSelect()}
          <Switch>
            <Route exact path="/dashboard" ><DashBoard playlists={this.state.playlists} /> </Route>
            <Route exact path="/youtubesearcher" ><YoutubeSearch /> </Route>
            <Route exact path="/multiplayer" ><MultiPlayer playlist={this.state.currentPlaylist}/> </Route>
            <Route exact path="/playlistplayer"> <PlaylistPlayer playlist={this.state.currentPlaylist}/> </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
