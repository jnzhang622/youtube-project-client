import React from 'react';
import logo from './utoob_logo.png';
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return(
        <div>
          {/* <h1>uToob Player</h1> */}
        {/* <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
              <Button variant="contained" color="white" href="/dashboard">
                Dashboard
              </Button>
            </ListItemText>

            <ListItemText inset>
              <Button variant="contained" color="white" href="/playlistplayer">
                My Playlist
              </Button>
            </ListItemText>

            <ListItemText inset>
              <Button variant="contained" color="white" href="/multiplayer">
                Multiplayer
              </Button>
            </ListItemText>

            <ListItemText inset>
            <Button variant="contained" color="white" href="youtubesearch">
                Youtube Search
              </Button>
            </ListItemText>

          </ListItem >
        </List> */}
        <div className="titleImg">
          <img src={logo} alt="Logo" />
        </div>
          <div className="navbar">
            <Link className="Link" to="/dashboard">
              DashBoard
            </Link>
            <Link className="Link" to="/playlistplayer">
              My Playlist
            </Link>
            <Link className="Link" to="/multiplayer">
              MultiPlayer
            </Link>
            <Link className="Link" to="/youtubesearch">
              Youtube Search
            </Link>
          </div>
        </div>

    )
  }

export default NavBar;
