import React, { Component } from 'react';
import { DataCardTitle } from './DataCardTitle/dataCardTitle';
import { DataCardContent } from './DataCardContent/dataCardContent';

export default class DataCard extends Component {
  constructor (props) {
    super(props);
    
    this.state = { }
  }

  render() {
    return(
      <div className="data-card">
        <DataCardTitle 
          name={this.props.person.name} 
          age={this.props.person.age} 
          picture={this.props.person.picture}
        />
        <DataCardContent 
          name={this.props.person.name} 
          company={this.props.person.company}
          city={this.props.person.city}
          state={this.props.person.state}
        />
      </div>
    );
  }
}
