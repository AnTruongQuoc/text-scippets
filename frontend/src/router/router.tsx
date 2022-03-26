import React from 'react';
import {Routes, Route } from 'react-router-dom';

//Import pages
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';

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
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default MainRouter;