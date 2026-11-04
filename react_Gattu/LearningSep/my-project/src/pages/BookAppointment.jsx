import React, { useState } from 'react'

const BookAppointment = () => {
const [appoint, setAppoint] = useState([]);

  const [patientName, setPatientName] = useState("");
  const [patientNum, setPatientNum] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
 

  const handalChangePatientName = (e) => {
    setPatientName(e.target.value)

// alert("pn:"+ patientName );

  }

  const handalChangePatientNum = (e) => {
    setPatientNum(e.target.value)

  }

  const handalChangeDoctorName = (e) => {
    setDoctorName(e.target.value)

  }

  const handalChangeAppointmentDate =(e) =>{
    setAppointmentDate(e.target.value)
  }
  
  const handalChangeAppointmentTime =(e) =>{
    setAppointmentTime(e.target.value)
  }

  const handalSubmit =(e)=>{
    e.preventDefault()

    const newAppoint = {
      patientName : patientName,
      patientNum : patientNum,
      doctorName :doctorName,
      appointmentDate : appointmentDate,
      appointmentTime :appointmentTime
    }
     
    setAppoint([...appoint, newAppoint]); 
    
    setDoctorName("");
    setPatientName("");
    setPatientNum("");
   setAppointmentDate("");
setAppointmentTime("");

 
  }
  const handleClear =(e)=>{
     setDoctorName("");
    setPatientName("");
    setPatientNum("");
   setAppointmentDate("");
setAppointmentTime("");
  };

  return (
    <div className='text-center'>
      <h1 className='text-4xl bold text-red-700'>This is Book Appointment page</h1>
      <br />
      <div className='bg-teal-300'>
        <form onSubmit={handalSubmit}>


          <label className='text-xl bold'>patient info</label> <br /><br />
          <input type="text"
            placeholder='Patient name'
            value={patientName}
            // onPointerLeave={handalChangePname}
            className='h-8 w-96 border border-gray-600'
            onChange={handalChangePatientName}

          />

          <br /><br />
          <input type="number"
            placeholder='mobile no.'
          value={patientNum}
            className='h-8 w-96 border border-gray-600'
            onChange={handalChangePatientNum} />
          <br></br><br />
          <label className='text-xl bold'>Doctor info</label> <br />
          <select className='h-8 w-96'
          value={doctorName}  onChange={handalChangeDoctorName}>
            <option value=" ">
              -- select --
            </option>

            <option value='hema'>
              hema
            </option>
            <option value='rima'>
              rima
            </option>
            <option value='shila'>
              shila
            </option>
            <option value='jaya'>
              jaya
            </option>

          </select><br /><br />
          <br></br>

          <label className='text-xl bold'>Date </label> <br /><br />
          <input type="date" placeholder='date and time' value={appointmentDate} onChange={handalChangeAppointmentDate} className='h-8 w-72 border border-gray-600' />
          <br></br><br />
          <label className='text-xl bold'>Time </label> <br /><br />
          <input type="time" placeholder='date and time' value={appointmentTime} onChange={handalChangeAppointmentTime} className='h-8 w-72 border border-gray-600' />
          <br></br><br />

          <button className='h-16 w-60 bg-blue-600 text-white'>Book Appointment</button> <br /><br />

<button onClick={handleClear} className='h-16 w-60 bg-blue-600 text-white'>Clear Form</button>

          <br></br>
          <br></br>
        </form>
      </div>
      
      <div >
<table >
  <thead >
    <tr className='flex justify-between gap-56'>
      <th>Patient Name</th>
      <th>Patient num</th>
      <th>Doctor Name</th>
      <th>Appointment Date</th>
      <th>Appointment time</th>
    </tr>
  </thead>
   <tbody>
     {appoint.map((item, index) => (

    
     <tr key={index} className='flex justify-between gap-56'>
      <td>{item.patientName}</td>
      <td>{item.patientNum}</td>
      <td>{item.doctorName}</td>
      <td>{item.appointmentDate}</td>
      <td>{item.appointmentTime}</td>
    </tr>
     ))}
</tbody>

</table>

      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>
  )
}

export default BookAppointment
