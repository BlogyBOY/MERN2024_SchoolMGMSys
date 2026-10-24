import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const [token, setToken]= useState("");

    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    };

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        //if input is blank
        if (email===""||password==="")
        {
            return alert("please enter email and password")
        }
        //fetch
        fetch("",{
             method:"post",
  headers:{"Content-Type": "application/json"},
  body: JSON.stringify({
    email:email,
    password:password,
  }),
})
.then((response)=>response.json())
.then((data)=>setToken(data.token))
.catch((error)=>console.log(error));
       
//navigate

if (!token)
    {
    navigate("/login");
}
else
    {
        navigate("/UserDashboard")
    }
}
  return (
    <div className='h-screen bg-gray-100 flex items-center justify-center px-7'>
        <div className='border border-black px-40 py-60'>
            <h1 className='text-3xl font-bold underline text-center text-gray-800 mb-2'>
                Login Account
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-5 w-full'>
                        <input type="email"
                        placeholder='enter your email'
                        className='w-full border border-gray-300 rounded-lg px-6 py-3 outline-none focus:ring-blue-500'
                        onChange={handleChangeEmail} />
                        

                       
                        <input type="password"
                        placeholder='enter your password'
                        className='w-full border border-gray-300 rounded-lg px-6 py-3 outline-none focus:ring-blue-500'
                        onChange={handleChangePassword} />

                        <button type='submit' className='w-full bg-blue-600 text-2xl text-white py-3 rounded-lg font-semibold'>Login

                        </button>
                        
                        </div>
                        </form>
                        </div>
                        </div>
  )
}

export default Login