import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex flex-col gap-2 md:gap-12 md:flex-row justify-around items-center'>
            <div></div>
            <div className='space-x-4 text-accent font-semibold '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <img src={user} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;