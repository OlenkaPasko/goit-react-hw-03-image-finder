import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader'
//import { Button } from './Button.styled';
//import { getImages } from 'services/getImages';
import PropTypes from 'prop-types';

import { Ul } from './ImageGallery.styled';

export const ImageGallery = ({ images, spinner, loadPage, openModal }) => {
  return (
    <>
      {spinner && <Loader />}
      <>
        <Ul>
          {images.map(image => {
            const { id, webformatURL, largeImageURL } = image;
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                smallImg={webformatURL}
                largeImg={largeImageURL}
                openModal={openModal}
              />
            );
          })}
        </Ul>
        <Button OnLoadMore={loadPage}/>
      </>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  loadPage: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
