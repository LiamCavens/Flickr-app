import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import Image from './SingleImage';
import './ImageBox.css';

export default class ImageBox extends Component {
    state = {
        images: []
    }

    fetchMoreImages = () => {
        const self = this;

        // let url = #;
        
    }
  render() {
    return (
        <div className='infinite-scroll-container'>
            <InfiniteScroll
                pageStart={0}
                loadMore={this.fetchMoreImages}
                hasMore={true}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
            >
                 {this.state.images.map((image, index) => (
                     <div key={index} className='image-container'>
                        {image[index]}
                     </div>
                 ))}
            </InfiniteScroll>
        </div>
    );
  }
}
