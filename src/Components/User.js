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
    const data = this.state.users;
    return (
      <div className="main_container">
        <div className="user_container">
          <h1>Users</h1>
          {!data ? (
            <p>...Loading</p>
          ) : (
            <ul>
              {data.map((d, idx) => {
                return (
                  <div
                    key={idx}
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
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
          </select>
        </div>
      </div>
    );
  }
}

export default User;
