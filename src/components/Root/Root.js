import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className='app-container'>
      <NavBar />
      <main id='app-content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};