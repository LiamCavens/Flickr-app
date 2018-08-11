import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import ImageBox from "../components/ImageBox";

class MainBox extends Component {
  state = {
    images: []
  };

  handleSearchClick = searchWord => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4b23ff6de8623a81e2c7c2fa196d5d8a&format=json&format=json&nojsoncallback=true&tags=${searchWord}&per_page=20`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        const images = json.photos.photo.map((image, index) => ({
          id: image.id,
          secred: image.secret,
          server: image.server,
          farm: image.farm
        }))
      }
  };

  fetchMoreImages = () => {
    const self = this;

    // let url = #;
  };

  render() {
    return (
      <div>
        <header>
          <SearchBar handleSearchClick={this.handleSearchClick} />
          <ImageBox images={this.state.images} />
        </header>
      </div>
    );
  }
}

export default MainBox;
