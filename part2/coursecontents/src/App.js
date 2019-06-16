import React from 'react';
import Course from './Course';
import { courses } from './courses';

const App = () => (
  <div>
    {courses.map((c) => (
      <Course key={c.id} course={c} />
    ))}
  </div>
);

export default App;
