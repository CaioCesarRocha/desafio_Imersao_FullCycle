import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowPosts from '../pages/showPosts'
import ShowSelectedPost from '../pages/showSelectedPost';

//import { RequireAuth } from './RequireAuth'; //EXEMPLO DE COMO CRIAR UMA ROTA PRIVADA


const AppRoutes = () => {
    return(
        <BrowserRouter basename='/%60'>
            <Routes>
                <Route element={<ShowPosts/>} path="/" /> 
                <Route element={<ShowSelectedPost/> } path="showSelectedPost/:id"/>             
            </Routes>         
        </BrowserRouter>
    )
}

export default AppRoutes;