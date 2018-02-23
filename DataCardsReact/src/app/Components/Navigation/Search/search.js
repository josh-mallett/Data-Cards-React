import React, { Component } from 'react';

export default class Search extends Component {
  constructor (props) {
    super (props);
  }

  render() {
    return(
      <div className="search">
        <div className="search-icon"></div>
        <input id="search" name="search" onKeyPress={ this.props.handleSearch } placeholder="Search" />
      </div>
    );
  }
}