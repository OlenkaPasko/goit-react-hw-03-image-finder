import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImg, largeImg, alt, id }) => {
  return (
    <>
      <li className="item" id={id}>
        <img
          className="itemImage"
          src={smallImg}
          alt={alt}
          data-large={largeImg}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
