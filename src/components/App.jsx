import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
//import { ImageGallery } from './ImageGallery/ImageGallery';
//import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = { query: '' }
  //fetch
  componentDidMount() {
  
  }
  //fetch

  componentDidUpdate(prevProps, prevState) {
    
  }
  render() {
    return (
      <>
        <Searchbar/>;
      </>
    ); 
  }
  
}