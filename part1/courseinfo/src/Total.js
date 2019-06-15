import React from 'react';

const Total = ({ parts }) => {
  const total = parts.reduce((total, next) => total + next.exercises, 0);

  return <p>{total}</p>;
};

export default Total;
