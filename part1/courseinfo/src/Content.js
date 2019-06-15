import React from 'react';
import Part from './Part';

const Content = ({ parts }) => (
  <div>
    <Part {...parts[0]} />
    <Part {...parts[1]} />
    <Part {...parts[2]} />
  </div>
);

export default Content;
