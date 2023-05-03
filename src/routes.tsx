import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/dashboard';


const Router: React.FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Dashboard/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes>
        </BrowserRouter>
    );
    }

export default Router;