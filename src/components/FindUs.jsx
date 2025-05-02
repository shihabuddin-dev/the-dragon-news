import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-4'>Find us</h2>
            <div className="join join-vertical w-full">
                <a href='https://www.facebook.com/shihabuddinReal' className="btn justify-start bg-base-100 join-item"><FaFacebook /> Facebook</a>
                <a href='https://x.com/shihabuddinreal' className="btn justify-start bg-base-100 join-item"><FaTwitter /> Twitter</a>
                <a href='https://www.instagram.com/shihabuddin.real/' className="btn justify-start bg-base-100 join-item"><FaInstagram /> Instagram</a>
            </div>
        </div>
    );
};

export default FindUs;