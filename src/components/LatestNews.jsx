import React, { use, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
const data = fetch('../news.json').then(res => res.json())

const LatestNews = () => {
    const [breakingNews, setBreakingNews] = useState([])
    const newsData = use(data)
    useEffect(() => {
        const filterBreakingNews = newsData.filter(news => news.category_id == 2)
        setBreakingNews(filterBreakingNews)
        return
    }, [newsData])

    return (
        <div className='flex items-center gap-5 bg-base-200 p-3 cursor-pointer'>
            <p className='btn btn-secondary'>Latest</p>
            <Marquee className='space-x-4 font-semibold' pauseOnHover={true} speed={60}>
                {
                    breakingNews.map(title => <p className='mr-4'>{title.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;