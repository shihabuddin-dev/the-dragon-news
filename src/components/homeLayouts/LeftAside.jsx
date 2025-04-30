import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className="w-10 h-10 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-secondary"></div>}>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;