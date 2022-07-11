import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }) {
const token = localStorage.getItem('token');
const location = useLocation();



if (!token) {
    return <Navigate to='/' state={{ from: location }} replace />;
}

return children;
}


export default RequireAuth;
