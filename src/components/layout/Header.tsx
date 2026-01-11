import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="container">
        <h1 className="brand">Inventory Care</h1>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;