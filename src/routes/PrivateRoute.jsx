import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextElements';
import BigSpinner from '../components/BigSpinner';

const PrivateRoute = ({children}) => {


    const currentLocation = useLocation()

    const {user, loading}= useContext(AuthContext)

    if(loading){
        return <BigSpinner></BigSpinner>
    }
    if(!user && !loading){
        return  <Navigate to="/signIn" state={{ from: currentLocation }} replace></Navigate>
    }

    if(user?.email){
        return children;
    }
    
};

export default PrivateRoute;