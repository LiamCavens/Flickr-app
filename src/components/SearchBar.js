import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <p id="app-name-logo">Flickr</p>
        <div className="searchform">
          <input
            id="search"
            type="search"
            name="search"
            defaultValue={this.props.searchWord}
            onChange={this.props.handleUserInput}
            placeholder="What are you looking for?"
          />
          <button
            onClick={() => {
              this.props.handleSearchClick();
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
