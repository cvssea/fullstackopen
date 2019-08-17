/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <a href="#">Anecdotes</a>
        </li>
        <li>
          <a href="#">Create new</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
