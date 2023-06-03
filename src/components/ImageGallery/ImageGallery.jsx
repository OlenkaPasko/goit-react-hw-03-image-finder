import React, { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Loader } from '../Loader/Loader';
import api from 'services/services';
//import ImageError from 'components/ImageError/ImageError';

import PropTypes from 'prop-types';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    value: '',
    images: [],
    error: null,

    status: Status.IDLE,

    page: 1,
    totalPages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevValue = prevProps.value;
    const nextValue = this.props.value;

    if (prevValue !== nextValue || prevState.page !== page) {
      this.setState({ status: Status.PENDING });
    }

    if (this.state.error) {
      this.setState({ error: null });
    }
    api
      .fetchAPI(nextValue, page)
      .then(images => {
        this.setState(prevState => ({
          images:
            page === 1 ? images.hits : [...prevState.images, ...images.hits],
          status: Status.RESOLVED,
          totalPages: Math.floor(images.totalHits / 12),
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }
  //btn
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status, error, page, totalPages } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }
   //ejected') {
   //ror message={error.message} />;
   //
   // === 0) {
   //
   //essage={`There are no images matching your search`} />
   //
   //
    return (
      <>
        <ul className="gallery">
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              item={image}
              onImageClick={this.setModalData}
            />
          ))}
        </ul>
        {images.length > 0 && status !== 'pending' && page <= totalPages && (
          <Button onClick={this.handleLoadMore}>Load More</Button>
        )}
      </>
    );
  }
}
ImageGallery.propTypes = {
  value: PropTypes.string,
};
