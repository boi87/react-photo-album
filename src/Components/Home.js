import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./User";
import Album from "./Album";
import Photo from "./Photo";

class Home extends Component {
  state = {
    selectedUserId: false,
    selectedAlbumId: false
  };

  onUserSelected = userId => {
    this.setState({ selectedUserId: userId });
  };

  onAlbumSelected = albumId => {
    this.setState({ selectedAlbumId: albumId });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Photo Album</h1>
        <div className="sdn_container">
          <User
            onUserSelected={this.onUserSelected}
            selectedUserId={this.state.selectedUserId}
          />
          <div className="album_photo_container">
            <Album
              selectedUserId={this.state.selectedUserId}
              onAlbumSelected={this.onAlbumSelected}
            />
            <Photo selectedAlbumId={this.state.selectedAlbumId} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
