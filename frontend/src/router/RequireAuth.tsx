import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'redux/hook';
import { selectUserIsLoggedIn } from 'redux/selectors';

const RequireAuth: React.FC = () => {

    //Dispatch
    const userDispatch = useAppDispatch();
    const isLogin = useAppSelector(selectUserIsLoggedIn);

    if (!isLogin) {
        return <Navigate to={'/login'} />;
    }

    return <Outlet />;
};

export default RequireAuth;