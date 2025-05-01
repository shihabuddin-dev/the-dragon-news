import React from 'react';
import bgImage from '../../assets/bg.png'

const RightBottomImg = () => {
    return (
        <div className='hidden md:grid'>
            <img className='rounded-md' src={bgImage} alt="bg images" />
        </div>
    );
};

export default RightBottomImg;