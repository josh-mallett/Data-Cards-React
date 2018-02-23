import React, { Component } from 'react';
import { NavBarTitle } from './NavBarTitle/navBarTitle';
import Search from './Search/search';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="navbar">
        <div className="navbar-content">
          <NavBarTitle title="Data Cards (React)" />
          <Search handleSearch= { this.props.handleSearch }/>
        </div>
      </div>
    );
  }
}