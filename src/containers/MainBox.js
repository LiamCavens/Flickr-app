import React, { Component } from "react";
import SearchBar from '../components/SearchBar';
import ImageBox from '../components/ImageBox';

class MainBox extends Component {
  render() {
    return (
      <div>
        <header>
            <SearchBar />
            <ImageBox />
        </header>
      </div>
    );
  }
}

export default MainBox;
