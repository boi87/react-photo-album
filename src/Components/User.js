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
      <div className="user_container">
        <h1>Users</h1>
        {!data ? (
          <p>...Loading</p>
        ) : (
          <ul>
            {data.map((d, idx) => {
              return (
                <div key={idx} className="user_box">
                  {d.name}
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default User;
