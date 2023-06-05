import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    const { textSearch } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery value={textSearch} />
      </>
    );
  }
}
