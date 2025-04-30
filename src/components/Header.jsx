import React from 'react';
import logo from '../assets/logo.svg'
import CurrentDate from './CurrentDate';
const Header = () => {
    return (
        <div className='mt-4 flex flex-col justify-center items-center gap-2'>
            <img src={logo} alt="" />
            <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl'><CurrentDate /></p>
        </div>
    );
};

export default Header;