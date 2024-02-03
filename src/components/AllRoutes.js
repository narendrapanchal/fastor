import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Product from '../pages/Product'
import { AuthContextProvider } from '../context/AuthContextProvider'
import Navbar from './Navbar'

function AllRoutes() {
  return (<AuthContextProvider>
        <BrowserRouter>
    <Navbar/>
    <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/product/:id" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  </AuthContextProvider>
  )
}

export default AllRoutes
