import React from 'react';
import {Routes, Route } from 'react-router-dom';

//Import pages
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';
import RequireAuth from './RequireAuth';

/*
    react-router-dom v6
    docs: https://reactrouter.com/docs/en/v6/upgrading/v5
*/

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            {/*Authenticated routes*/}
            <Route element={<RequireAuth />}> 
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default MainRouter;