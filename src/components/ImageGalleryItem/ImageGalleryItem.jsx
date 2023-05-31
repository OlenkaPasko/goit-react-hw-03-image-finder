import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  smallImg,
  largeImg,
  id,
  alt,
  openModal,
}) => {
  return (
    <>
      <li id={id}>
        <img
          src={smallImg}
          alt={alt}
          data-large={largeImg}
          onClick={openModal}
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
  openModal: PropTypes.func.isRequired,
};


