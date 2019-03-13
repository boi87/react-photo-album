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
  }

  handleClick = a => {
    this.props.onUserSelected(a);
    // if (a.id === id)
    this.setState({
      selectedUserId: a
      // bgColor: "lightgreen"
    });
  };

  // change = event => {
  //   this.setState({
  //     selectedAlbumId: event.target.value
  //   });
  // };

  render() {
    const userData = this.state.users;
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
                    onClick={() => this.handleClick(d.id)}
                    // onChange={this.handleClick}
                    style={{
                      backgroundColor:
                        this.props.selectedUserId === d.id ? "green" : "white"
                    }}
                  >
                    {d.name}
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default User;
