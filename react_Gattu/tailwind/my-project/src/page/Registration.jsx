// import { Input } from 'postcss';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import CellotapG from '../components/Cellotap';
import DgfG from '../components/Cellotap';


const Registration = () => {
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[contact,steContact]=useState("");
  const[password, setPassword]=useState("");

// const navigate = useNavigate();


  //function
  const handleChangeName = (e)=>{
    setName(e.target.value)
  };

  const handleChangeEmail = (e)=>{
    setEmail(e.target.value)
  };
  
  const handleChangeContact = (e)=>{
    steContact(e.target.value)
  };

  const handleChangePassword = (e) =>{
    setPassword(e.target.value)
  };

  const handleSubmit =(e ) => {
    e.preventDefault()
//if input is blank
if(name===""||email===""
  ||contact===""||password===""
)
{
  return alert ("input value is blank")
}

if(name.length>=3||
  !email.includes("@")||
  !email.includes(".com")||
  contact.length==10||
  password.length>=8
)
{
  return alert ("input value is wrong");
}
// fetch
//navigate
// navigate("/Login")
  }
  return (
    <div className='h-screen bg-gray-100 flex items-center justify-center px-7'>
      <div className='border border-black px-40 py-60'>
        <h1 className='text-3xl font-bold underline text-center text-gray-800 mb-2'>
          Creat Account
        </h1>
        <p className='text-center text-gray-500 mb-6'> 
          Register to get started
        </p>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4 w-full'>
            <Input type="text"
            value={name}
            placeholder='Enter your name'
            name="name"
            onChange={handleChangeName} />

            <Input type="email"
            value={email}
            placeholder='Enter your email'
           
            name="email"
            onChange={handleChangeEmail} />

            <Input  type="number"
            value={contact}
            placeholder='Enter your contact'
            name="contact"
            onChange={handleChangeContact} />

            <Input type="password"
            value={password}
            placeholder='Enter your password'
            className='w-full border border-gray-300 rounded-lg px-4 py-3
            focus:ring-blue-500'
            onChange={handleChangePassword} />

            <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700'>
              Register
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration