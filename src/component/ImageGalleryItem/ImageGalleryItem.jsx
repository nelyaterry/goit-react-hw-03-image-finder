import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ images, onClick }) => {
  // const imadeUrl = (e) => {
  //     const findedUrl = e.currentTarget.firstChild.src;
  //     const urlIm = images.find((image) => image.webformatURL === findedUrl);
  //     return urlIm.largeImageURL;
  //   };

  return images.map(({ id, largeImageURL }) => (
    <Item key={id} onClick={(e) => onClick(e.currentTarget.firstChild.src)}>
      <Image src={largeImageURL} alt="" />
    </Item>
  ));
};

export default ImageGalleryItem;
