import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL }) => (
    <Item
      key={webformatURL}
      id={id}
      onClick={(e) => onClick(e.currentTarget.id)}
    >
      <Image src={webformatURL} alt="" />
    </Item>
  ));
};

export default ImageGalleryItem;
