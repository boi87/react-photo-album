import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";

class AppRouter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // componentDidMount;

  render() {
    return (
      <Router>
        <Route exact path="/" render={props => <Home {...props} />} />
      </Router>
    );
  }
}

export default AppRouter;
