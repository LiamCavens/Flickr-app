import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./ImageBox.css";
import GridImage from "./GridImage";

export default class ImageBox extends Component {
  render() {
    return (
      <div className="infinite-scroll-container">
        <InfiniteScroll
          pageStart={1}
          loadMore={this.props.handleScroll}
          hasMore={true}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {this.props.images.map(image => (
            <GridImage
              imageUrl={image.url}
              largeImage={image.largeUrl}
              imageInfo={image.info}
              handleTagClick={this.props.handleTagClick}
            />
            // <img key={image.url} src={image.url} alt="" />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
