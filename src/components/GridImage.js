import React, { Component } from "react";
import Modal from "react-modal";
import "./GridImage.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    height: "80%",
    maxWidth: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

Modal.setAppElement(document.getElementById("root"));

export default class GridImage extends Component {
  state = {
    modalIsOpen: false,
    imageInfo: {
      title: "",
      description: "",
      tags: []
    }
  };

  openModal = () => {
    if (!this.state.title) {
      this.getImageInfo();
    }

    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  getImageInfo = () => {
    fetch(this.props.imageInfo)
      .then(res => res.json())
      .then(json => {
        const imageInfo = {
          title: json.photo.title._content,
          description: json.photo.description._content,
          tags: json.photo.tags.tag.map(tag => tag._content)
        };

        this.setState({ imageInfo });
      });
  };

  createOnTagClick = tagName => () => {
    this.props.handleTagClick(tagName);
    this.closeModal();
  };

  render() {
    return (
      <div>
        <div>
          <img
            className="grid-image"
            onClick={this.openModal}
            src={this.props.imageUrl}
            alt=""
          />
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <img className="modal-image" src={this.props.largeImage} alt="" />

             {(this.state.imageInfo.title)
              ? <span className="modal-title">
                {this.state.imageInfo.title}
                </span>
              : null
             }
             {(this.state.imageInfo.description)
              ? <span className="modal-desc">
                {this.state.imageInfo.description}
                </span>
              : null
             }
            
            <div className="modal-tags">
              {this.state.imageInfo.tags.map(tag => (
                <span
                  onClick={this.createOnTagClick(tag)}
                  className="modal-tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
