import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayouts/LeftAside';
import RightAside from '../components/homeLayouts/RightAside';
import Spinner from '../components/Spinner';

const Root = () => {
  const { state } = useNavigation()
  return (
    <>
      <header>
        <Header />
        <section className='w-11/12 mx-auto my-4'>
          <LatestNews />
        </section>
        <nav className='w-11/12 mx-auto my-4'>
          <Navbar />
        </nav>
      </header>
      <main className='w-11/12 mx-auto my-4 grid md:grid-cols-12 gap-3 md:gap-5'>

        {/* just for small display  */}
        {/* <aside className='md:hidden md:col-span-3'>
          <RightAside />
        </aside> */}

        <aside className='md:col-span-3 h-fit md:sticky top-4'>
          <LeftAside />
        </aside>
        <section className='md:col-span-6'>
          {
            state == 'loading' ? <Spinner /> : <Outlet />
          }
        </section>
        <aside className='md:col-span-3 h-fit md:sticky top-4'>
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default Root;