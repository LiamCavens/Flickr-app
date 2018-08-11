import React, { Component } from "react";
import SearchBar from '../components/SearchBar';

class MainBox extends Component {
  constructor(props) {}
  render() {
    return (
      <div>
        <header>
            <SearchBar />
        </header>
      </div>
    );
  }
}

export default MainBox;
