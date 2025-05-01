import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayouts/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const [news, setNews] = useState({})
    const data = useLoaderData()
    const { id } = useParams()
    useEffect(() => {
        const findNews = data.find(news => news.id === id)
        setNews(findNews)
    }, [data, id])
    
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='mt-4 w-11/12 mx-auto gap-4 grid grid-cols-12'>
                <section className='col-span-full md:col-span-9'>
                    <h2 className='text-lg font-semibold'>News Details</h2>
                    <NewsDetailsCard news={news}/>
                </section>
                <aside className='col-span-full md:col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;