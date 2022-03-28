import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useAppSelector } from 'redux/hook';
import { selectUserIsLoggedIn } from 'redux/selectors';

const RequireAuth: React.FC = () => {

    const isLogin = useAppSelector(selectUserIsLoggedIn);

    if (!isLogin) {
        return <Navigate to={'/login'} />;
    }

    return <Outlet />;
};

export default RequireAuth;