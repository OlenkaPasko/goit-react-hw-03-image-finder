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
  fetchAPI = (text, page) => {
    const API_KEY = '35113425-894140f70267936d7d418e310';
    const BASE_URL = 'https://pixabay.com/api/';
    setTimeout(() => {
      fetch(
        `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${text}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          const collection = data.hits;
          this.setState({ collection });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 300);
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
