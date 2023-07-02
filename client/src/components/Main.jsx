import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Resorts from './Resorts.jsx'
import ResortsDetail from './ResortsDetail.jsx'
import MyFavorites from './MyFavorites.jsx'

const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/resorts' element={<Resorts />} />
                <Route path='/resorts/:id' element={<ResortsDetail />} />
                <Route path='/myfavorites' element={<MyFavorites />} />
            </Routes>
        </div>
    )
}

export default Main