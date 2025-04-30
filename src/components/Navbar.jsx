import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-around items-center'>
            <div ></div>
            <div className='space-x-4 text-accent font-semibold '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <img src={user} alt="" />
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;