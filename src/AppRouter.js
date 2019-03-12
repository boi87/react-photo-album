import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  // componentDidMount;

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => <Home {...props} />} />
          {/* <Route path="/:user" render={props => <Home {...props} />} /> */}
        </div>
      </Router>
    );
  }
}

export default AppRouter;
