import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Doctor from './pages/Doctor'
import Home from './pages/Home'
import Speciality from './pages/Speciality'
import AboutUs from './pages/AboutUs'
import BookAppointment from './pages/BookAppointment'
// import Dashboard from './page/Dashboard'
// import { Route, Routes } from 'react-router-dom'
// import ProductDetail from './page/ProductDetail'
// import Navbar from './components/Nav'
import Nav from './components/Nav'
const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/doctor' element={<Doctor />} />
        <Route path='/speciality' element={<Speciality />} />
        <Route path='/aboutus' element={<AboutUs />} />
         <Route path='/bookappointment' element={<BookAppointment />} />
      </Routes>
      {/* <BrowserRouter>
      </BrowserRouter> */}











      {/* this is app jsx
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/productDetail' element={<ProductDetail />} />

      </Routes>

      <ProductDetail/> */}
    </div>
  )
}

export default App

