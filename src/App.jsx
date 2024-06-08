import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Login from './page/login'
import Register from './page/register';
import Loader from './page/loader';
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/loader" element={<Loader />} />
        </Routes>
    );
};

export default App;
