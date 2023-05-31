import { Component } from 'react';
import { getImages } from '../services/services';
//import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
//import { Button } from '../Button/Button';
//import { Loader } from '../Loader/Loader'
//import { Button } from './Button.styled';
//import { getImages } from 'services/getImages';
//import PropTypes from 'prop-types';

//import { Ul } from './ImageGallery.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component {
  state = { value: '', images: [], error: null, status: Status.IDLE };

    componentDidUpdate(_, prevState) {
        const { page } = this.state;
    const { value, perPage } = this.state;
    if (prevState.perPage !== perPage) {
      this.setState({ loading: true });
      this.getImages();
      return;
    }
    if (prevState.value !== value) {
      this.setState({ loading: true });
      this.getImages();
      return;
    }
  }
  render() {
    return (
      <>
        <ul className="gallery"></ul>
      </>
    );
  }
}