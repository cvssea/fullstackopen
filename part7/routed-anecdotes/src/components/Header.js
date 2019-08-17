import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-secondary">
      <Link to="/" className="navbar-brand">
        Software Anecdotes
      </Link>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Anecdotes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" className="nav-link">
            Create new
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
