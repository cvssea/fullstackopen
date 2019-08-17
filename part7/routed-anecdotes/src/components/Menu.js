/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <Link to="/">Anecdotes</Link>
        </li>
        <li>
          <Link to="/create">Create new</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
