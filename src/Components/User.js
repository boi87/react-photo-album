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
    // checks if user is active already, sets the state to false in home and consequently the button becomes white again
    if (userId === this.props.selectedUserId) {
      this.props.onUserSelected(false);
    } else {
      this.props.onUserSelected(userId);
    } // 2) handleClick() passes the userId to onUserSelected, which has been created in Home and will uopdate the state
  };

  render() {
    const userData = this.state.users; // makes it easier to access the state
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
                    key={userItem.id} // you can't render two things with the same id. either pass a key to map or do like this
                    className="user_box"
                    // 1) call handleClick func with the user id as parameter
                    onClick={() => this.handleClick(userItem.id)}
                    // check if the selectedUserId I passed from Home as props is the same as the userId and changes its colour
                    style={{
                      backgroundColor:
                        this.props.selectedUserId === userItem.id // check if the selectedUserId is the same and the one we are looping in
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
