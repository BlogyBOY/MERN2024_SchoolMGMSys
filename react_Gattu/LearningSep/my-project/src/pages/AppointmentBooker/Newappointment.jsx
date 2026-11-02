import React, { useState } from 'react'

const Newappointment = () => {
    const [appointment, setAppointment] = useState([]);

    const appointmentDate = "24/10/26";
    const appointmentTime = "10:00"
    const [formInput, setFormInput] = useState({
        patientName: "",
        mobileNumber: "",
        doctorName: "",
        tappointmentDate: appointmentDate,
        tappointmentTime: appointmentTime

    });

    const handalchange = (e) => {


        const{name,value} = e.target;

        
        console.log("I am alive");
        console.log("name:" + name);
        
        // if (e == undefined ||
        //     e.target == undefined
        //     ||
        //     e.target.value == undefined )

        if(value == undefined)
         {
            console.log("value not available");
        }
        else {
            setFormInput(e.target.value);
            console.log("value:" + e.target.value);

        }



    }

    const handalSubmit = (e) => {
        e.preventDefault();
        const updatedList = appointment.concat(formInput);
        setAppointment(updatedList);


        setFormInput({
            patientName: "",
            mobileNumber: "",
            doctorName: "",
            tappointmentDate: "appointmentDate",
            tappointmentTime: "appointmentTime"
        })
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
                        name="name"
                        value={formInput.patientName}
                        onChange={handalchange}
                        className='h-8 w-96 border border-gray-600'


                    />

                    <br /><br />
                    <input type="number"
                        placeholder='mobile no.'
                        name="mobileNumber"
                        value={formInput.mobileNumber}
                        onChange={handalchange}
                        className='h-8 w-96 border border-gray-600'
                    />
                    <br></br><br />
                    <label className='text-xl bold'>Doctor info</label> <br />
                    <select className='h-8 w-96'
                        name="doctorName"
                        value={formInput.doctorName}
                        onChange={handalchange}>
                        <option value=''>
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
                    <input type="text" placeholder='date ' name="tappointmentDate" value={formInput.tappointmentDate}
                        onChange={handalchange} className='h-8 w-72 border border-gray-600' />
                    <br></br><br />
                    <label className='text-xl bold'>Time </label> <br /><br />
                    <input type="text" placeholder='time' name='tappointmentTime' value={formInput.tappointmentTime}
                        onChange={handalchange} className='h-8 w-72 border border-gray-600' />
                    <br></br><br />

                    <button type='submit' className='h-16 w-60 bg-blue-600 text-white'>Book Appointment</button>


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
                    <tbody>
                        {
                            appointment.map((item, index) =>
                            (
                                <tr key={index}>
                                    <td>{item.patientName}</td>
                                    <td>{item.mobileNumber}</td>
                                    <td>{item.doctorName}</td>
                                    <td>{item.tappointmentDate}</td>
                                    <td>{item.tappointmentTime}</td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Newappointment



// ---------------------
