import React from 'react';

const Career = () => {
    return (
        <div className="p-4 space-y-2 dark:bg-gray-100 dark:text-gray-800">
            <h3 className="text-base font-semibold text-center">Steps of Career</h3>
            <div className="flex justify-center mt-4 flex-wrap gap-4 space-x-3">
                <span className="w-12 h-2 rounded-sm dark:bg-violet-600"></span>
                <span className="w-12 h-2 rounded-sm dark:bg-violet-600"></span>
                <span className="w-12 h-2 rounded-sm dark:bg-gray-800"></span>
                <span className="w-12 h-2 rounded-sm dark:bg-gray-800"></span>
                <span className="w-12 h-2 rounded-sm dark:bg-gray-400"></span>
                <span className="w-12 h-2 rounded-sm dark:bg-gray-400"></span>
            </div>
        </div>
    );
};

export default Career;