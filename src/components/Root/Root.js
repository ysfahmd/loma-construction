import React from 'react';
import './Root.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className='app-container'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};