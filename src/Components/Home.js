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

  // gets the userId from the component User, to which it's passed as props
  onUserSelected = userId => {
    if (userId != this.state.selectedUserId) {
      this.setState({ selectedUserId: userId });
    } else {
      this.setState({ selectedUserId: false });
    }
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
            // Pass the func onUserSelected to User Component, this will update the state of selectedUserId here in Home.js
            onUserSelected={this.onUserSelected}
            // Pass the selectedUserId state as props to the User Component to be able to change the colour of the active user on click
            selectedUserId={this.state.selectedUserId}
          />
          <div className="album_photo_container">
            <Album
              // Pass the selectedUserId state as props to Album Component, this will update Axios's url request for album
              selectedUserId={this.state.selectedUserId}
              // Pass the func onAlbumSelected to Album Component, this will update the state of selectedAlbumId here in Home.js
              onAlbumSelected={this.onAlbumSelected}
            />
            <Photo
              // Pass the selectedAlbumId state as props to Album Component, this will update Axios's url request for th selected album's id photos
              selectedAlbumId={this.state.selectedAlbumId}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
