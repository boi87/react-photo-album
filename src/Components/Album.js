import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Album extends Component {
  state = {
    albums: [],
    active: null
  };

  componentDidMount() {
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
    const albumData = this.state.albums;
    return (
      <div className="album_container">
        <select className="dropdown">
          {console.log(albumData)}
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
      //   <div className="user_container">
      //     <h1>Users</h1>

      //     {!albumData ? (
      //       <p>...Loading</p>
      //     ) : (
      //       <ul>
      //         {albumData.map(d => {
      //           return (
      //             <div
      //               key={d.id}
      //               className="user_box"
      //               onclick={this.handleChange}
      //             >
      //               {d.title}
      //             </div>
      //           );
      //         })}
      //       </ul>
      //     )}
      //   </div>
    );
  }
}

export default Album;
