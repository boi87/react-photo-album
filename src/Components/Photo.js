import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Photo extends Component {
  state = {
    photos: [] // this is the only thing whose state gets updated in this component
  };

  // photos were not loading up until I used componentWillReceiveProps(nextProps). Src: http://busypeoples.github.io/post/react-component-lifecycle/
  componentWillReceiveProps(nextProps) {
    axios
      .get(
        // using the query in the url it takes less to load up because it doesn't have to load up all the items
        `https://jsonplaceholder.typicode.com/photos?albumId=${
          nextProps.selectedAlbumId
        }`
      )
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const photoData = this.state.photos; // makes it easier to access the state
    return (
      <div>
        {!photoData ? (
          <p>...Loading</p>
        ) : (
          <div className="photobox_container">
            {photoData.map(photoItem => {
              // if (parseInt(this.state.selectedAlbumId) === parseInt(u.albumId)) // this condition is no longer needed because I am updating the axios api url
              return <img src={photoItem.thumbnailUrl} className="photo_box" />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Photo;
