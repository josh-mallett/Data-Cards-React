import React, { Component } from 'react';
import NavBar from './Navigation/navBar';
import DataCards from './DataCards/dataCards';
import { search } from '../api/searchApi';

export default class Main extends Component {
  constructor () {
    super();
    
    this.searchURL = 'data/getdata.php?search=';
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      searchTerm: '',
      searchResults: {
        people: []
      }
    }
  }

  componentWillMount() {
    this.doSearch('');
  }

  handleSearch (e) {
    if (e.key == 'Enter' && e.target.value != this.state.searchTerm) {
      this.doSearch(e.target.value);
    }
  }

  doSearch (searchTerm) {
    let self = this;
    this.setState({ searchTerm: searchTerm });

    search(this.searchURL, searchTerm)
    .then((results) => {
      self.setState({
        searchResults: {
          people: results.data
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <NavBar handleSearch={ this.handleSearch } />
        <DataCards people={ this.state.searchResults.people } />
      </div>
    );
  }
}
