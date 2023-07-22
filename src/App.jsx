import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './components/Menu'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          {/* path: ruta del recurso, element= component que se desea cargar al acceder al path */}
          {/* 
          <Route path="/users/:id/edit" element={<FormUserEdit />} />
          <Route path="/users" element={<ListUsers />} />
          */}
          <Route path="/services/:service_id/:service_name" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App