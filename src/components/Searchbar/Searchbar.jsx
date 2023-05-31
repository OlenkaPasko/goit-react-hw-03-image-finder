import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Header } from './Searchbar.styled'

export class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      this.clearForm();
      return;
    }
    this.props.onSubmit(this.state.value);
  };
  clearForm = () => {
    this.setState({ value: '' });
  };
  render() {
    const { value } = this.state;
    console.log(value);
    return (
      <Header>
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </form>
      </Header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
