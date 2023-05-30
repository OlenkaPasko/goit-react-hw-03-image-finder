import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
  };
  handleSubmit = searchValue => {
    this.setState({ searchValue });
  };
  render() {
    const { searchValue } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery value={searchValue} />
      </>
    );
  }
};
