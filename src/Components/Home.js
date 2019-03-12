import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./User";

const Home = () => {
  return (
    <div className="container">
      <h1>Photo Album!!!</h1>
      <User />
    </div>
  );
};

export default Home;
