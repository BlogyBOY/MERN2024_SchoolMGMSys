import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";


const Nav = () => {
    return (
        <div>
            <nav className='bg-white px-6 py-4 flex item-cenetr justify-between '>
                <div className=' text-black flex flex-col'><h1 className='text-2xl font-bold'>LifeCareHospital</h1>
                    <p className='text-sm'>Multi-specialist Hospital</p>
                </div>
                <div className='flex items-centergap-6'>
                    <div className='flex gap-6 mr-72'>
                        <Link to="/" className='text-black font-bold hover:text-blue-500'>
                            Home
                        </Link>
                        <Link to="/doctor" className='text-black font-bold hover:text-blue-500'>
                            Doctors
                        </Link>
                        <Link to="/speciality" className='text-black font-bold hover:text-blue-500'>
                            Specialites
                        </Link>
                        <Link to="/aboutus" className='text-black font-bold hover:text-blue-500'>
                            About Us
                        </Link>
                          <Link to="/bookappointment" className='text-black font-bold hover:text-blue-500'>
                            Book Appointment
                        </Link> 

                         <Link to="/newappointment" className='text-black font-bold hover:text-blue-500'>
                            New Appointment
                        </Link>


                        <Link to="/appointmentbooker_0" className='text-black font-bold hover:text-blue-500'>
                            Appointment Booker
                        </Link>
                        

                    </div>
                    <div className='flex gap-6 mr-5'>
                        <span className='text-black hover:text-bold hover:text-bold'><CiSearch /></span>

                        <button className=''></button>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Nav
