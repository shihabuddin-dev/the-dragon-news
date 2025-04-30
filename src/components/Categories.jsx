import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-semibold'> All Categories {categories.length}</h2>
            <div className='grid gap-2 mt-4 '>
                {
                    categories.map(category =>
                        <NavLink
                            to={`/category/${category.id}`}
                            key={category.id}
                            className='btn border-none text-accent bg-white hover:bg-base-200 shadow-none'
                        >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;