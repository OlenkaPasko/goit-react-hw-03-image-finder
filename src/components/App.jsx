import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {

  state = {
    textSearch: '',
  };

  onLoadMore = () => {
    //const { page } = this.state;
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  onFormSubmit = value => {
    this.setState({ value });
  };

  render() {
    const { searchText } = this.state;
    const { collection, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />;
        <ImageGallery
          gallery={collection}
          spinner={loading}
          loadPage={this.onLoadMore}
          value={searchText}
        />
      </>
    );
  }
}
