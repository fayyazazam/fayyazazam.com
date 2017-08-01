import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <p id="heading">Fayyaz Azam</p>
      <NavLink exact to="/" activeClassName="active" className="breadcrumb">Work</NavLink>
      <NavLink to="/skills" activeClassName="active" className="breadcrumb">Skills</NavLink>
    </div>
  );
};

export default Header;
