import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    value: '',
    collection: null,
    loading: false,
    perPage: '12',
    alt: null,
  };
  fetchAPI = (value, perPage) => {
    //const API_KEY = '35113425-894140f70267936d7d418e310';
    //const BASE_URL = 'https://pixabay.com/api/';
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?key=35113425-894140f70267936d7d418e310&q='${value}'&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}`
      )
        .then(res => res.json())
        .then(data => {
          const collection = data.hits;
          this.setState({ collection });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 500);
  };
  componentDidUpdate(_, prevState) {
    const { perPage, value } = this.state;
    if (prevState.perPage !== perPage) {
      this.setState({ loading: true });
      this.fetchAPI();
      return;
    }

    if (prevState.value !== value) {
      this.setState({ loading: true });
      this.fetchAPI();
      return;
    }
  }
  onLoadMore = () => {
    const { perPage } = this.state;
    this.setState({ perPage: perPage + 12 });
  };
  onFormSubmit = value => {
    this.setState({ value, perPage: 12, collection: null });
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
