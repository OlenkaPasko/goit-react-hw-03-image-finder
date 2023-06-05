import React, { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Loader } from '../Loader/Loader';
import api from 'services/services';

import { Ul } from './ImageGallery.styled';
//import ImageError from 'components/ImageError/ImageError';

import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  state = {
    value: '',
    images: [],
    error: null,
    isLoading: false,

    page: 1,
    totalPages: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return { page: 1, value: nextProps.value };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchText } = this.state;
    const prevValue = prevProps.value;
    const nextValue = this.props.value;

    //  повторний запит, якщо вже таке слово було введене

    if (prevValue !== nextValue || prevState.page !== page) {
      this.setState({ isLoading: true });

      // чи є помилка, якщо є - записуємо null

      if (this.state.error) {
        this.setState({ error: null });
      }
      api
        .fetchAPI(searchText, page)
        .then(images => {
          this.setState(prevState => ({
            images:
              page === 1 ? images.hits : [...prevState.images, ...images.hits],
            isLoading: true,
            totalPages: Math.floor(images.totalHits / 12),
          }));
        })
        .catch(error => this.setState({ error }));
    }
  }

 
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images,spinner, error} = this.state;

    return (
      <>
        {spinner && <Loader />} 
        {error && (
          <div className="alert" role="alert">
            {error}
          </div>
        )}
        {images.length > 0 && (
          <Ul>
            {images.map(image => (
              <ImageGalleryItem key={image.id} item={image} />
            ))}
          </Ul>
        )}
        <Button onClick={this.handleLoadMore}>Load More</Button>
      </>
    );
  }
}
