import React from 'react';
import Part from './Part';

const Content = ({ parts }) => (
  <div>
    {parts.map((p) => (
      <Part key={p.id} {...p} />
    ))}
  </div>
);

export default Content;
