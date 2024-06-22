import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav id='navbar'>
      <NavLink className='navbar-element' to='/contact-us' exact>Contact</NavLink>
      <NavLink className='navbar-element' to='/services' exact>Services</NavLink>
      <NavLink className='navbar-element' to='/about' exact>About</NavLink>
      <NavLink className='navbar-element' to='/' exact>Home</NavLink>
      <div id='logo'>
        
      </div>
    </nav>
  )
};