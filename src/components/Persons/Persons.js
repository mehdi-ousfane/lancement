import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  //static getDerivedStateFromProps(props,state){
  //  return state;
  //}
  shouldComponentUpdate(nextProps,nextState) {
    if (nextProps.persons !== this.props.persons) {
      return true; }
      else {return false;}
  }

  getSnapshotBeforeUpdate(prevProps,prevState) {return null}
  componentDidUpdate() {}

  render() {
  console.log('[Persons.js] rendering...');
  return this.props.persons.map((person, index) => {
    return (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    );
  });
  }
};

export default Persons;
