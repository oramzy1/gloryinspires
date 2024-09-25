import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contactform from './pages/Contactform'
import Blog from './pages/Blog'
import Development from './pages/Development'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes> 
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contactform' element={<Contactform />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/development' element={<Development/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App