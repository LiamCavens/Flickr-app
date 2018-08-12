import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Image from "./SingleImage";
import "./ImageBox.css";

export default class ImageBox extends Component {
  render() {
    return (
      <div className="infinite-scroll-container">
        <InfiniteScroll
          pageStart={1}
          loadMore={e => {
            console.log(e);
          }}
          hasMore={true}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {this.props.images.map(image => (
            <img key={image.url} src={image.url} alt="" />
          ))}
        </InfiniteScroll>
      </div>
    );
  }

  //   componentWillReceiveProps(props) {
  //     if (condition) {

  //     }
  //   }
}
