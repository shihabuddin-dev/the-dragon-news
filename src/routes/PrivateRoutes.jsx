import React, { use } from 'react';
import { FirebaseAuthContext } from '../context/FirebaseAuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(FirebaseAuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    // if user don't found login so sent to login pages to login 
    if (!user) {
        return <Navigate state={location?.pathname} to='/signin' />
    }

    return children
};

export default PrivateRoutes;