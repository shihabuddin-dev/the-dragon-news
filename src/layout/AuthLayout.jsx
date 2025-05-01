import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='py-4 w-11/12 mx-auto'>
                <Navbar />
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;