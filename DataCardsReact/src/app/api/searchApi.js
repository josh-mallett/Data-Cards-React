import axios from 'axios';

export let search = (searchURL, searchTerm) => {
  searchURL = searchURL + searchTerm;
  return axios.get(searchURL);
}