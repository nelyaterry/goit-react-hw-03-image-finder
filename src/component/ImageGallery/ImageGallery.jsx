import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchImagine from "../../servises/api-service";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Download from "../Loader/Loader";
import { Gallery, Content } from "./ImageGallery.styled";

class ImageGallery extends Component {
  state = {
    images: [],
    status: "idle",
    page: 1,
    imageUrl: "",

    showModal: false,
  };
  // idle, pending, resolved, regected

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { request } = this.props;

    if (prevProps.request !== request) {
      this.setState({
        status: "pending",
        images: [],
        page: 1,
      });

      const { data } = await fetchImagine(request, page);

      if (data.hits.length === 0) {
        this.setState({
          status: "regected",
        });
      } else {
        this.setState({ images: data.hits, status: "resolved" });
      }
    }

    if (prevProps.request === request && prevState.page !== page) {
      const { data } = await fetchImagine(request, page);
      this.setState({
        images: [...prevState.images, ...data.hits],
        status: "resolved",
      });
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  onLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  onTogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenModal = (urlImg) => {
    console.log("tyt", urlImg);

    // console.log(
    //   this.state.images.find((image) => image.webformatURL === imhUrl)
    //     .largeImageURL
    // );

    this.setState({
      imageUrl: urlImg,
    });

    this.onTogleModal();
  };

  render() {
    const { images, showModal, imageUrl, status } = this.state;

    if (status === "idle") {
      return (
        <Content>
          <h1>Введите запрос</h1>
        </Content>
      );
    }

    if (status === "pending") {
      return <Download />;
    }

    if (status === "resolved") {
      return (
        <Content>
          <Gallery>
            <ImageGalleryItem images={images} onClick={this.onOpenModal} />
          </Gallery>
          <Button onClick={this.onLoadMore}>Load more</Button>
          {showModal && (
            <Modal onClick={this.onTogleModal}>
              <img src={imageUrl} alt="" />
            </Modal>
          )}
        </Content>
      );
    }

    if (status === "regected") {
      return (
        <Content>
          <h1>По вашему запросу нет данных</h1>
        </Content>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  request: PropTypes.string,
};
