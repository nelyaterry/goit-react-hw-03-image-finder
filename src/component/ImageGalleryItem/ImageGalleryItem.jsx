import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL, largeImageURL }) => (
    <Item key={webformatURL} id={id} onClick={() => onClick(largeImageURL)}>
      <Image src={webformatURL} alt="" />
    </Item>
  ));
};

export default ImageGalleryItem;
