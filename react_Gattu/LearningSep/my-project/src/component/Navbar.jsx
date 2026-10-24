import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill } from "react-icons/bs";
 import { FaUser } from "react-icons/fa";


const Navbar = () => {
  return (
    <div >
      <nav className='bg-black px-6 py-4 flex item-cenetr justify-between '>
        <div className=' text-orange-400 flex flex-col'><h1 className='text-2xl font-bold'>HomeNest</h1>
          <p className='text-sm'>Better Home.Happier you.</p>
          </div>
            <div className='flex items-centergap-6'>
          <div className='flex gap-6 mr-72'>
            <Link to="/catalogue" className='text-orange-400 font-bold hover:text-orange-700'>
              Catalogue
            </Link>
            <Link to="/service" className='text-orange-400 font-bold hover:text-orange-700'>
              Services
            </Link>
            <Link to="/about" className='text-orange-400 font-bold hover:text-orange-700'>
              About
            </Link>

</div>
 <div className='flex gap-6 mr-5'>
            <Link to="/cart">
              <BsCartFill className="text-orange-400 font-bold hover:text-orange-700" size={22} />
             
            </Link>

            <Link to="/profile">
              <FaUser className="text-orange-400 font-bold hover:text-orange-700" size={22} />
            </Link>
          </div>

          </div>
      </nav>
    </div>
  )
}

export default Navbar
