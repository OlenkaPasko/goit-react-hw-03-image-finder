import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
//import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    query: '',
    searchText: '',
  };
  hendlSearch = text => {
    this.setState({ searchText: text });
  };
  render() {
    const { searchText } = this.state;
    return (
      <>
        <Searchbar hendlSearch={this.hendlSearch} />;
        <ImageGallery value = {searchText}/>
      </>
    );
  }
}
