import React from 'react';
import Person from './Person';

const Persons = ({ people, handleDelete }) => {
  const numbers = people.map(p => (
    <Person
      key={p.id}
      name={p.name}
      number={p.number}
      onClick={() => handleDelete(p.id)}
    />
  ));

  return (
    <div>
      <h3>Numbers</h3>
      {numbers}
    </div>
  );
};

export default Persons;
