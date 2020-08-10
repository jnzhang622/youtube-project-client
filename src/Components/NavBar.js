import React from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) => {

    return(
        <div>
        <h1>U-toob Player</h1>
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
              {/* <Link className="Link" to="/">
                Sign Up
            </Link> */}
          </div>
        </div>

    )
  }

export default NavBar;
