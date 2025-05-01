import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const convertId = parseInt(id)
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])

    // filtered news data by categories button 
    useEffect(() => {
        if (convertId === 0) {
            setCategoryNews(data)
            return
        }
        else if (convertId === 1) {
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
            return
        }
        const filteredNews = data.filter(news => news.category_id === convertId)
        setCategoryNews(filteredNews)
        return
    }, [data, convertId])

    return (
        <div>
            <h2 className='text-center font-semibold mb-2'>Total <span className='text-secondary'>{categoryNews.length}</span> News Here</h2>
            <div className='grid gap-4'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;