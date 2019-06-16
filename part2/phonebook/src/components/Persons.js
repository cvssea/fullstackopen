import React from 'react';
import Person from './Person';

const Persons = ({ persons }) => {
  const numbers = persons.map((p) => (
    <Person key={p.name} name={p.name} number={p.number} />
  ));

  return <div>{numbers}</div>;
};

export default Persons;
