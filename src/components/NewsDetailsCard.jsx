import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { image_url, title, details } = news || {}
    const navigate = useNavigate()
    return (
        <div className='mt-4 border p-3 rounded-lg border-gray-300 space-y-4'>
            <img className='w-full md:h-[350px] object-center rounded-lg' src={image_url} alt="" />
            <h2 className="text-lg md:text-xl font-semibold md:font-bold leading-tight">
                {title}
            </h2>
            <p>{details}</p>
            <button onClick={() => navigate(-1)} className='btn btn-secondary w-2/6'><FaArrowLeft />
                All news in this category</button>
        </div>
    );
};

export default NewsDetailsCard;