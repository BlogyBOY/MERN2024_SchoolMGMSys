import React, { useState } from 'react';

export default function AppointmentBooker_0() {
    // State to hold the list of booked appointments
    const [appointments, setAppointments] = useState([]);
    const _appointmentDate = '24-10-2026';
    const _appointmentTime = '02:26 PM';
    // State to hold the current form inputs
    const [formData, setFormData] = useState({
        patientName: '',
        mobileNumber: '',
        doctorName: '', // Default selection
        appointmentDate: _appointmentDate,
        appointmentTime: _appointmentTime
    });




    // Handle changes in input fields
    const handleChange = (e) => {


        // nagendra v1
        const { name, value } = e.target;
        //   setFormData((prevData) => ({
        //       ...prevData,
        //       [name]: value
        //     }));

        // nagendra v2
        // We manually copy every single field and update the one that changed
        setFormData({
            patientName: name === 'patientName' ? value : formData.patientName,
            mobileNumber: name === 'mobileNumber' ? value : formData.mobileNumber,
            doctorName: name === 'doctorName' ? value : formData.doctorName,
            appointmentDate: name === 'appointmentDate' ? value : formData.appointmentDate,
            appointmentTime: name === 'appointmentTime' ? value : formData.appointmentTime
        });




    };





    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // nagendra v1
        // Add the new appointment to the list
        // setAppointments((prevAppointments) => [...prevAppointments, formData]);

        // nagendra v2
        // .concat() takes the existing list and merges the new appointment into a new list
        const updatedList = appointments.concat(formData);
        setAppointments(updatedList);



        // Reset the form inputs (keeping the default doctor)
        setFormData({
            patientName: '',
            mobileNumber: '',
            doctorName: '',

            appointmentDate: _appointmentDate,
            appointmentTime: _appointmentTime
        });
    };

    return (
        <div>
            <h1 className='text-4xl bold text-red-700'>Book an Appointment-v0</h1>
            <div className=''>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Patient Name: </label>
                        <input
                            type="text" className='bg-teal-300' placeholder='Patient Name'
                            name="patientName"
                            value={formData.patientName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />

                    <div>
                        <label>Mobile Number: </label>
                        <input
                            type="text" className='bg-teal-300' placeholder='Mobile Number'
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />

                    <div>
                        <label>Select Doctor: </label>
                        <select
                            name="doctorName" className='bg-teal-300'
                            value={formData.doctorName}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>--Select--</option>
                            <option value="Jaya">Jaya</option>
                            <option value="Shushma">Shushma</option>
                            <option value="Shila">Shila</option>
                            <option value="Hema">Hema</option>
                        </select>
                    </div>
                    <br />

                    <div>
                        <label>Appointment Date: </label>
                        <input
                            type="text" className='bg-teal-300' placeholder='Appointment Date'
                            name="appointmentDate"
                            value={formData.appointmentDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />

                    <div>
                        <label>Appointment Time: </label>
                        <input
                            type="text" className='bg-teal-300' placeholder='Appointment Time'
                            value={formData.appointmentTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />

                    <button type="submit" className='bg-stone-300'>Book Appointment</button>
                </form>
            </div>
            <hr />

            <h2 className='text-2xl bold text-red-700'>Saved Appointments</h2>
            <div className='bg-violet-500'>

                {appointments.length === 0 ? (
                    <p>No appointments booked yet.</p>
                ) : (
                    <table border="1 text">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Mobile Number</th>
                                <th>Doctor Name</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((app, index) => (
                                <tr key={index}>
                                    <td>{app.patientName}</td>
                                    <td>{app.mobileNumber}</td>
                                    <td>{app.doctorName}</td>
                                    <td>{app.appointmentDate}</td>
                                    <td>{app.appointmentTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                
            )}
            </div>
        </div>
    );
}
