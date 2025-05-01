import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { FirebaseAuthContext } from '../provider/FirebaseAuthContext';
const Navbar = () => {
    const { user, logOutUser } = use(FirebaseAuthContext)

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                alert('logout success')
            }).catch((error) => {
                console.log(error)
            });

    }
    return (
        <div className='flex flex-col gap-2 md:gap-12 md:flex-row justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='space-x-4 text-accent font-semibold '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <img src={userImg} alt="" />
                {
                    user ?
                        <button onClick={handleLogOut} className='btn btn-secondary px-8'>Log Out</button> :
                        <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;