import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Loader } from '../Loader/Loader';

import PropTypes from 'prop-types';

const ImageGallery = ({ gallery, spinner, loadPage }) => {
  return (
    <>
      {spinner && <Loader />}
      {gallery && (
        <>
          <ul className="gallery">
            {gallery.map(item => {
              const { id, webformatURL, largeImageURL } = item;
              return (
                <ImageGalleryItem
                  key={id}
                  id={id}
                  smallImg={webformatURL}
                  largeImg={largeImageURL}
                />
              );
            })}
          </ul>
          <Button OnLoadMore={loadPage} />
        </>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  spinner: PropTypes.bool.isRequired,
  loadPage: PropTypes.func.isRequired,
};

export default ImageGallery;
