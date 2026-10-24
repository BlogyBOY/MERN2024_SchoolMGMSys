import React from 'react'
import Navbar from '../component/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const CALL_Navigate = useNavigate();
  const [name, setName] = useState ("")
  const handalChange =(e)=>{
    setName (e.target.value)
  }
  function handalSubmit(e) {
    e.preventDefault();
    CALL_Navigate("/ProductDetail",
      {
        state:{
          name:name
        }
      }
    )
  }

  return (
    <div>
      <h1>this is Dashbord</h1>
      {/* <Navbar />
  <div>
    https://www.google.com/imgres?q=background%20image%20for%20web%20page%20home%20appliance%20orange%20&imgurl=https%3A%2F%2Fimage.slidesdocs.com%2Fresponsive-images%2Fbackground%2Fyellow-backdrop-enhances-the-3d-rendered-home-appliances-powerpoint-background_2b544dfd06__960_540.jpg&imgrefurl=https%3A%2F%2Fslidesdocs.com%2Fbackground%2Fyellow-backdrop-enhances-the-3d-rendered-home-appliances-powerpoint-background_2b544dfd06&docid=eNVFH7OmVlfZOM&tbnid=g1bMaBTlgm7YtM&vet=12ahUKEwiEpsbj4YuXAxW5WXADHTWsODkQnPAOegQIThAA..i&w=960&h=540&hcb=2&itg=1&ved=2ahUKEwiEpsbj4YuXAxW5WXADHTWsODkQnPAOegQIThAA
  </div> */}
      <form onSubmit={handalSubmit}>
        <label>
          nter user name</label>
        <input type="text"
          placeholder='enetr your name'
          className='h-6 w-44 bg-green-600 border border-2 '
           onChange={handalChange}
           />
        <button className='h-7 w-24 bg-blue-500 text-white'
        >submit</button>
      </form>


    </div>
  )
}

export default Dashboard
