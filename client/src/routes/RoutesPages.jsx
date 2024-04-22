import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import CreateBlog from '../pages/CreateBlog'
import Footer from '../components/Footer'

export default function RoutesPages() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-blog' element={<CreateBlog/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
