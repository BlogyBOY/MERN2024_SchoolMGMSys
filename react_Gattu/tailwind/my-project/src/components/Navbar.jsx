import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <nav className='bg-red-300 px-6 py-4 flex item-cenetr justify-between'>
    <div className='text-2xl font-bold text-red-800'>Electronic shop</div>
    <div className='flex items-centergap-6'>
      <div className='flex gap-6 mr-72'>
        <Link to = "/" className='text-red-800 font-bold hover:text-purple-500'>  
        Catalogue
        </Link>
        <Link to = "/info" className='text-red-800 font-bold hover:text-purple-500'>
        info
        </Link>
         <Link to = "/about-us" className='text-red-800 font-bold hover:text-purple-500'>
        About-us
        </Link>


      </div>

      <div className='flex gap-6 mr-5'>
        <Link to = "/Cart">
        
        </Link>
      </div>

    </div>
   </nav>
   </>


  )
}

export default Navbar
