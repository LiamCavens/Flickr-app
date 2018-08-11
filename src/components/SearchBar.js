import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <p id='app-name-logo'>Flickr</p>
        <form className="searchform" action="" method="post">
          <input id="search" type="search" name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
