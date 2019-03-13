import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Album extends Component {
  state = {
    albums: [] // this is the only thing whose state gets updated in this component
  };

  // albums' dropdown were not loading up until I used componentWillReceiveProps(nextProps). Src: http://busypeoples.github.io/post/react-component-lifecycle/
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedUserId)
      // manually force update props
      axios
        .get(
          // using the query in the url it takes less to load up because it doesn't load up all the items
          `https://jsonplaceholder.typicode.com/albums?userId=${
            nextProps.selectedUserId
          }`
        )
        .then(res => {
          this.setState({
            albums: res.data
          });
        })
        .catch(err => console.log(err));
  }

  change = event => {
    // 2) the change() function takes an event (the 'value' option below) and passes is to the func onAlbumSelected which comes from Home
    this.props.onAlbumSelected(event.target.value);
  };

  render() {
    const albumData = this.state.albums; // makes it easier to access the state
    return (
      <div className="album_container">
        <select
          className="dropdown"
          // 1) call change func with the current option (value) as parameter
          onChange={this.change}
          // line 41 is no longer needed, because I guess value is accessed on line 29
          // value={this.state.value}
        >
          <option selected disabled>
            Albums
          </option>
          {!albumData} ? <p>...Loading</p> :
          {albumData.map(albumItem => {
            return (
              <option value={albumItem.id} className="album_box">
                {albumItem.title}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Album;
