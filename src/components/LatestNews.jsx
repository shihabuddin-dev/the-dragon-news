import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3 cursor-pointer'>
            <p className='btn btn-secondary'>Latest</p>
            <Marquee className='space-x-4 font-semibold' pauseOnHover={true} speed={60}>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribuiquid deserunt neque aspernatur fugit obcaecati molestiae nemo.</p>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus tenealiquid deserunt neque aspernatur fugit obcaecati molestiae nemo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloritiae nemo.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;