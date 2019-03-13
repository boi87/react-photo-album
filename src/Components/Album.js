import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Album extends Component {
  state = {
    albums: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedUserId)
      // manually force update props
      axios
        .get(
          `https://jsonplaceholder.typicode.com/albums?userId=${
            nextProps.selectedUserId
          }` // filtering happens here
        )
        .then(res => {
          this.setState({
            albums: res.data
          });
        })
        .catch(err => console.log(err));
  }

  change = event => {
    this.props.onAlbumSelected(event.target.value);
  };

  render() {
    const albumData = this.state.albums;

    return (
      <div className="album_container">
        <select
          className="dropdown"
          onChange={this.change}
          value={this.state.value}
        >
          <option selected disabled>
            Albums
          </option>
          {!albumData} ? <p>...Loading</p> :
          {albumData.map(e => {
            return (
              <option
                // key={e.id}
                value={e.id}
                // onChange={key => this.change(key)}
                className="album_box"
              >
                {e.title}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Album;
