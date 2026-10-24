import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>

      we want to call the NavBar here
      <BrowserRouter><Navbar/></BrowserRouter>

    </div>
  )
}

export default App
