import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class User extends Component {
  state = {
    users: null,
    albums: [],
    photos: [],
    bgColor: "white",
    selectedUserId: "",
    selectedAlbumId: "Albums"
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(res => {
        this.setState({
          albums: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleClick = a => {
    // if (a.id === id)
    this.setState({
      selectedUserId: a
      // bgColor: "lightgreen"
    });
  };

  change = event => {
    this.setState({
      selectedAlbumId: event.target.value
    });
  };

  render() {
    const userData = this.state.users;
    const albumData = this.state.albums;
    const photoData = this.state.photos;
    return (
      <div className="main_container">
        <div className="user_container">
          <h1>Users</h1>
          {!userData ? (
            <p>...Loading</p>
          ) : (
            <ul>
              {userData.map(d => {
                return (
                  <div
                    key={d.id}
                    className="user_box"
                    // value
                    onClick={() => this.handleClick(d.id)}
                    // onChange={this.handleClick}
                    style={{ backgroundColor: this.state.bgColor }}
                  >
                    {d.name}
                  </div>
                );
              })}
            </ul>
          )}
        </div>
        <div className="album_container">
          <select
            className="dropdown"
            onChange={this.change}
            value={this.state.value}
          >
            <option selected disabled>
              Albums
            </option>
            {!albumData} ? <p>...Loading</p> :
            {albumData.map(e => {
              // {
              //   userData.id = 1;
              // }
              if (e.userId === this.state.selectedUserId)
                return (
                  <option
                    // key={e.id}
                    value={e.id}
                    // onChange={key => this.change(key)}
                    className="album_box"
                  >
                    {e.title}
                  </option>
                );
            })}
          </select>
        </div>
        <div className="photo_container">
          {!photoData ? (
            <p>...Loading</p>
          ) : (
            <div>
              {photoData.map(u => {
                // const photoDataId = 1;
                // const photoDataAlbumId = 1;
                // const imgs = [];
                // console.log(this.state.selectedAlbumId === u.albumId);
                if (
                  parseInt(this.state.selectedAlbumId) === parseInt(u.albumId)
                )
                  // imgs.push(u.url);
                  // if (photoDataId === u.id && photoDataAlbumId === u.albumId)
                  // if (u.albumId === this.state.selectedAlbumId)
                  return <img src={u.thumbnailUrl} className="photo_box" />;
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default User;
