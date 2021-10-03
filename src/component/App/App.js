import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    request: "",
  };

  hendelFormSubmit = (request) => {
    this.setState({ request });
  };

  render() {
    console.log(this.state.request);
    return (
      <>
        <Searchbar onSubmit={this.hendelFormSubmit} />
        <ImageGallery request={this.state.request} />
      </>
    );
  }
}
