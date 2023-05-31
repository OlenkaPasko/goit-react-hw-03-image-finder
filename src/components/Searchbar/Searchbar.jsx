import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    value: '',
  };
  //контрольований інпут(подія на інпут)
  hendlChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  //так як це форма
  hendlSudmit = e => {
    e.preventDefault();
      console.log(this.state);
      this.props.hendlSearch(this.state.value)
  };

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.hendlSudmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              onChange={this.hendlChange}
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}
