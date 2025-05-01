import React from 'react';
import swimmingImage from '../../assets/swimming.png'
import playImage from '../../assets/playground.png'
import classImage from '../../assets/class.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3 rounded-md'>
            <h2 className='font-semibold mb-4'>QZone</h2>
            <div className='space-y-2 '>
                <img className='mx-auto' src={swimmingImage} alt="swim image" />
                <img className='mx-auto' src={classImage} alt="class image" />
                <img className='mx-auto' src={playImage} alt="play image" />
            </div>
        </div>
    );
};

export default QZone;