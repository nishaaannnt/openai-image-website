import React, { useState,useEffect, createContext } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Navbar } from './components'
import {Home, CreatePost, Register, Login} from './pages'

const App = () => {

  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Home/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App