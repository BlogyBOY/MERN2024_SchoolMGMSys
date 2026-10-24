import React, { useState } from 'react'

const BookAppointment = () => {
  const [pname, setPname]= useState("");
  const [num, setNum]= useState("");
  const handalChangePname =(e)=>{
    setPname(e.target.value);
  };
const handalChangeNum =(e)=>{
    setNum(e.target.value);
  };
const handalSubmit = (e)=>{
  e.preventDefault();
}
  return (
    <div className='text-center'>
      <h1 className='text-4xl bold text-red-700'>This is Book Appointment page</h1>
      <br />
      <div className='bg-teal-300'>
      <form onSubmit={handalSubmit}>


        <label className='text-xl bold'>patient info</label> <br /><br />
        <input type="text"
         placeholder='Patient name'
        className='h-8 w-96 border border-gray-600'  
        onChange={handalChangePname}/> <br /><br />
        <input type="number" 
        placeholder='mobile no.' 
        className='h-8 w-96 border border-gray-600'
        onChange={handalChangeNum} />
        <br></br><br />
        <label className='text-xl bold'>Doctor info</label> <br />
        <select className='h-8 w-96'>
          <option value='-1'>
            -- select --
          </option>

          <option value='4'>
            hema
          </option>
          <option value='1'>
            rima
          </option>
          <option value='2'>
            shila
          </option>
          <option value='3'>
            jaya
          </option>

        </select><br /><br />
        <br></br>

        <label className='text-xl bold'>Date </label> <br /><br />
        <input type="text" placeholder='date and time' value="10 june 2026" className='h-8 w-72 border border-gray-600' />
        <br></br><br />
         <label className='text-xl bold'>Time </label> <br /><br />
        <input type="text" placeholder='date and time' value="10:00 AM" className='h-8 w-72 border border-gray-600' />
        <br></br><br />

        <button className='h-16 w-60 bg-blue-600 text-white'>Book Appointment</button>


        <br></br>
        <br></br>
         </form>
      </div>
        grid
        <div >
        <table > 
          <thead>
<tr className='flex justify-between gap-20 border border-gray-700 bg-gray-200'>
  <th>ID</th>
  <th>Patient Name</th>
  <th>Doctor</th>
  <th>Date</th>
  <th>Time</th>
  <th>Booking </th>
</tr>
</thead>
          
           </table>
</div>
     
    </div>
  )
}

export default BookAppointment
