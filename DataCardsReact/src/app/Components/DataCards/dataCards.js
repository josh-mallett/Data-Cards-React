import React, { Component } from 'react';
import DataCard from './DataCard/dataCard';

export default class DataCards extends Component {
  constructor (props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      people: nextProps.people
    });
  }

  render() {
    let people = this.state.people;
    console.log(people);
    let peopleCards = people.map((person, i) => {
      return <DataCard person={person} key={i} />
    });
    return(
      <div className="data-cards-container">
        {peopleCards}
      </div>
    );
  }
}
