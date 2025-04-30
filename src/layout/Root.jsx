import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <section className='nav_left'></section>
        <section className='main'>  <Outlet /></section>
        <section className='nav_right'></section>
      </main>
    </>
  );
};

export default Root;