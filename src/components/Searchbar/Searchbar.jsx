import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, SearchForm, SearchInput, SearchBtn } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };
  onChangeInput = evt => {
    const value = evt.target.value.toLowerCase();
    this.setState({ value });
  };
  onFormSubmit = evt => {
    const { value } = this.state;
    evt.preventDefault();
    if (!value.trim()) {
      alert('Please, type any words');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchBtn>
            <span className="button-label">Search</span>
          </SearchBtn>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
            value={this.state.value}
          />
        </SearchForm>
      </Header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
