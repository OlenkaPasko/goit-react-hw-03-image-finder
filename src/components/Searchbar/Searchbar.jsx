import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: '',
  };
  onSubmitForm = evt => {
    const { value } = this.state;
    evt.preventDefault();
    if (value.trim() === '') {
      alert('Please, type any words');
      return;
    }
    this.setState({ value: '' });
    evt.target.elements.searchInput.blur();
  };
  onChangeInput = evt => {
    const value = evt.target.value.toLowerCase();
    this.setState({ value });
  };
  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.onSubmitForm}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              onChange={this.onChangeInput}
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
