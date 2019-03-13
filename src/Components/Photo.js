import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Photo extends Component {
  state = {
    photos: []
  };

  componentWillReceiveProps(nextProps) {
    axios
      .get(
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
    const photoData = this.state.photos;

    return (
      <div>
        {!photoData ? (
          <p>...Loading</p>
        ) : (
          <div className="photobox_container">
            {photoData.map(photoItem => {
              // if (parseInt(this.state.selectedAlbumId) === parseInt(u.albumId))
              return <img src={photoItem.thumbnailUrl} className="photo_box" />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Photo;
