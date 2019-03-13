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

  // gets the userId
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
            onUserSelected={this.onUserSelected} // this props will update the state of selectedUserId in Home.js
            selectedUserId={this.state.selectedUserId} // I need this as props to be able to change the colour of the active user
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
