import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
//import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';


export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    perPage: '12',
  };

  getGallery = (searchValue, page = 1) => {
    const API_KEY = '35113425-894140f70267936d7d418e310';
    const BASE_URL = 'https://pixabay.com/api/';
    return fetch(
      `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchValue}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(
          `На жаль, немає ${searchValue} зображень, які відповідають вашому запиту`
        )
      );
    });
  };

  handleSubmit = searchValue => {
    this.setState({ searchValue });
  };
  onLoadMore = () => {
    const { perPage } = this.state;
    this.setState({ perPage: perPage + 12 });
  };
  onFormSubmit = value => {
    this.setState({ value, perPage: 12, collection: null });
  };
  render() {


    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery loadPage={this.onLoadMore} />
      </>
    );
  }
}
