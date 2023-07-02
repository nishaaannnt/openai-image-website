import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Navbar } from './components'
import {Home, CreatePost} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Home/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App