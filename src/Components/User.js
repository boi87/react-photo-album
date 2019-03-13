import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class User extends Component {
  state = {
    users: []
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

  handleClick = userId => {
    this.props.onUserSelected(userId);
  };

  render() {
    const userData = this.state.users;
    return (
      <div className="main_container">
        <div className="user_container">
          <h1 className="title">Users</h1>
          {!userData ? (
            <p>...Loading</p>
          ) : (
            <ul>
              {userData.map(userItem => {
                return (
                  <div
                    key={userItem.id}
                    className="user_box"
                    onClick={() => this.handleClick(userItem.id)} // call handleClick func with the id as parameter
                    style={{
                      backgroundColor:
                        this.props.selectedUserId === userItem.id
                          ? "lightgreen"
                          : "white"
                    }}
                  >
                    {userItem.name}
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
