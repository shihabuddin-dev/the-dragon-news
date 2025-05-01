import React from "react";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { format } from "date-fns";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        rating,
        total_view,
        image_url,
        details,
        id
    } = news;

    const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

    return (
        <div className="rounded-lg bg-white shadow-md mx-auto">
            {/* Author Info */}
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="text-sm font-semibold">{author.name}</h2>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="text-xl flex gap-1">
                    <CiBookmark />

                    <CiShare2 />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold p-4 pt-2 leading-tight">
                {title}
            </h2>

            {/* Image */}
            <img
                src={image_url}
                alt={title}
                className="w-full h-56 object-cover"
            />

            {/* Description */}
            <div className="px-4 py-3 text-sm text-gray-700">
                {details.slice(0, 200)}...
                <Link to={`/news-details/${id}`} className="text-orange-600 font-medium cursor-pointer ml-1">Read More</Link>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-300">
                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-500">
                    {Array(5).fill(0).map((_, i) => (
                        <FaStar key={i} className={i < rating.number ? "text-orange-500" : "text-gray-300"} />
                    ))}
                    <span className="text-sm font-semibold text-gray-800 ml-2">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
