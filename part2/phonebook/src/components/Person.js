import React from 'react';

const Person = ({ name, number, onClick }) => (
  <p>
    {name} {number} <button onClick={onClick}>delete</button>
  </p>
);

export default Person;
