import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-4'>Find us</h2>
            <div className="join join-vertical w-full">
                <button className="btn justify-start bg-base-100 join-item"><FaFacebook /> Facebook</button>
                <button className="btn justify-start bg-base-100 join-item"><FaTwitter /> Twitter</button>
                <button className="btn justify-start bg-base-100 join-item"><FaInstagram /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;