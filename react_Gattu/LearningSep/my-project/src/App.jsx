import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Doctor from './pages/Doctor'
import Home from './pages/Home'
import Speciality from './pages/Speciality'
import AboutUs from './pages/AboutUs'
import BookAppointment from './pages/BookAppointment'

import AppointmentBooker_0 from './pages/AppointmentBooker/AppointmentBooker_0'
import AppointmentBooker_1 from './pages/AppointmentBooker/AppointmentBooker_1'

import AppointmentBooker_2 from './pages/AppointmentBooker/AppointmentBooker_2'
import AppointmentBooker_3 from './pages/AppointmentBooker/AppointmentBooker_3'


// import Dashboard from './page/Dashboard'
// import { Route, Routes } from 'react-router-dom'
// import ProductDetail from './page/ProductDetail'
// import Navbar from './components/Nav'
import Nav from './components/Nav'
import Newappointment from './pages/AppointmentBooker/Newappointment'
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
         <Route path='/newappointment' element={<Newappointment />} />
         <Route path='/appointmentbooker_0' element={<AppointmentBooker_0 />} />
         <Route path='/appointmentbooker_1' element={<AppointmentBooker_1 />} />
         <Route path='/appointmentbooker_2' element={<AppointmentBooker_2 />} /> 
         <Route path='/appointmentbooker_3' element={<AppointmentBooker_3 />} />

         
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

