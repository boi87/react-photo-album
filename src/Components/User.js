import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class User extends Component {
  state = {
    users: null
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

  render() {
    return (
      <div className="user_container">
        <h1>Users</h1>
        {!this.state.users ? (
          <p>...Loading</p>
        ) : (
          <ul>
            {this.state.users[0].map((a, key) => {
              <li id={key}>{a.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default User;
