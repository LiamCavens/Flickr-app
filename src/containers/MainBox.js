import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import ImageBox from "../components/ImageBox";

const apiURL =
  "https://www.flickr.com/services/rest/?api_key=4b23ff6de8623a81e2c7c2fa196d5d8a&format=json&nojsoncallback=true&method=";

class MainBox extends Component {
  state = {
    images: [],
    searchWord: ""
  };

  handleUserInput = e => {
    const searchWord = e.target.value;
    this.setState({ searchWord });
  };

  getImages = pageNumber => {
    const tags = this.state.searchWord || "cats";
    const url = `${apiURL}flickr.photos.search&tags=${tags}&per_page=10&page=${pageNumber}`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        const images = json.photos.photo
          .map(image => ({
            id: image.id,
            secret: image.secret,
            serverId: image.server,
            farmId: image.farm
          }))
          .map(imageProperties => {
            const { farmId, serverId, id, secret } = imageProperties;
            return {
              url: `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_q.jpg`,
              info: `${apiURL}flickr.photos.getInfo&secret=${secret}&photo_id=${id}`
            };
          });

        this.setState({
          images: [...this.state.images, ...images]
        });
      });
  };

  render() {
    return (
      <div>
        <header>
          <SearchBar
            handleUserInput={this.handleUserInput}
            handleSearchClick={this.getImages}
            searchWord={this.state.searchWord}
          />
          <ImageBox images={this.state.images} handleScroll={this.getImages} />
        </header>
      </div>
    );
  }
}

export default MainBox;
