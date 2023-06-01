import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchAPI from 'services/services';

  const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  };
export class App extends Component {
  state = {
    value: '',
    collection: null,
    loading: false,
    page: 1,
    alt: null,
  };

  //componentDidUpdate(_, prevState) {
  //const { page, value } = this.state;
  //if (prevState.page !== page) {
  //  this.setState({ loading: true });
  //  this.api(value, page);
  //  return;
  //}

  //if (prevState.value !== value) {
  //  this.setState({ loading: true });
  //  this.api(value, page);
  //  return;
  //}
  //}//

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevValue = prevProps.value;
    const nextValue = this.props.value;
    
    //страхуємо від повторного запиту
    if (prevValue !== nextValue || prevState.page !== page) {
      this.setState({ status: Status.PENDING });

      //перевіряємо чи є помилка
      if (this.state.error) {
        this.setState({ error: null });
      }
      fetchAPI
        .api(nextValue, page)
        .then(images => {
          this.setState(prevState => ({
            images:
              page === 1 ? images.hits : [...prevState.images, ...images.hits],
            status: Status.RESOLVED,
            totalPages: Math.floor(images.totalHits / 12),
          }));
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  onLoadMore = () => {
    const { perPage } = this.state;
    this.setState({ perPage: perPage + 12 });
  };
  onFormSubmit = value => {
    this.setState({ value, collection: null });
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
