import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class User extends Component {
  state = {
    users: null,
    albums: [],
    active: null
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
  }

  render() {
    const userData = this.state.users;
    const albumData = this.state.albums;
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
                    onclick={this.handleChange}
                  >
                    {d.name}
                  </div>
                );
              })}
            </ul>
          )}
        </div>
        <div className="album_container">
          <select className="dropdown">
            <option selected disabled>
              Albums
            </option>
            {!albumData} ? <p>...Loading</p> :
            {albumData.map(e => {
              return (
                <option key={e.id} className="album_box">
                  {e.title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default User;
