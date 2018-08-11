import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  state = {
    userInput: ""
  };

  handleUserInput = e => {
    const userInput = e.target.value;
    this.setState({ userInput });
  };

  render() {
    return (
      <div className="searchbar">
        <p id="app-name-logo">Flickr</p>
        <div className="searchform">
          <input
            id="search"
            type="search"
            name="search"
            onChange={this.handleUserInput}
          />
          <button
            onClick={() => {
              this.props.handleSearchClick(this.state.userInput);
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
