import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import ImageBox from "../components/ImageBox";

const apiURL =
  "https://www.flickr.com/services/rest/?api_key=4b23ff6de8623a81e2c7c2fa196d5d8a&format=json&nojsoncallback=true&method=";

class Home extends Component {
  state = {
    images: [],
    searchWord: ""
  };

  handleUserInput = e => {
    const searchWord = e.target.value;
    this.setState({ searchWord });
  };

  handleTagClick = tagName => {
    const searchWord = tagName;
    this.setState({ searchWord });
    this.getImages().then(this.setImages);
  };

  updateImages = pageNumber => {
    this.getImages(pageNumber).then(images => {
      images = [...this.state.images, ...images];
      this.setImages(images);
    });
  };

  getImages = (pageNumber = 0) => {
    const tags = this.state.searchWord || "cats";
    const url = `${apiURL}flickr.photos.search&tags=${tags}&per_page=10&page=${pageNumber}`;

    return fetch(url)
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
              largeUrl: `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_b.jpg`,
              info: `${apiURL}flickr.photos.getInfo&secret=${secret}&photo_id=${id}`
            };
          });

        return Promise.resolve(images);
      });
  };

  setImages = images => {
    this.setState({ images });
  };

  render() {
    return (
      <div>
        <header>
          <SearchBar
            handleUserInput={this.handleUserInput}
            handleSearchClick={this.handleSearch}
            searchWord={this.state.searchWord}
          />
        </header>
        <ImageBox
          images={this.state.images}
          handleScroll={this.updateImages}
          handleTagClick={this.handleTagClick}
        />
      </div>
    );
  }

  componentDidMount() {
    this.updateImages();
  }
}

export default Home;
