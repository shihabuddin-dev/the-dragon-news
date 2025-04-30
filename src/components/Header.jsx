import React from 'react';
import logo from '../assets/logo.svg'
import { format } from "date-fns";
const Header = () => {
    return (
        <div className='mt-4 flex flex-col justify-center items-center gap-1 md:gap-2 px-4'>
            <img src={logo} alt="news logo" />
            <p className='md:text-lg text-accent'>Journalism Without Fear or Favour</p>
            <p className='md:text-xl text-accent font-semibold'>{format(new Date(), 'EEEE , MMMM dd, yyyy')}</p>
        </div>
    );
};

export default Header;