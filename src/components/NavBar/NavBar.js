import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <section>
      <NavLink className='navbar-element' to='/' exact>Home</NavLink>
      <NavLink className='navbar-element' to='/about' exact>About</NavLink>
      <NavLink className='navbar-element' to='/services' exact>Services</NavLink>
      <NavLink className='navbar-element' to='/contact-us' exact>Contact</NavLink>
    </section>
  )
};