import React, { useState } from 'react';

// JSON list representing the available doctors
const DOCTORS_LIST = [
    { id: 1, name: 'Jaya' },
    { id: 2, name: 'Shushma' },
    { id: 3, name: 'Shila' },
    { id: 4, name: 'Hema' }
];

export default function AppointmentBooker_3() {
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

    // State to hold message text and its display type ('success', 'error', or 'info')
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    // Helper function to auto-clear messages after 4 seconds
    const triggerTimedMessage = (text, type) => {
        setMessage(text);
        setMessageType(type);

        // Clear the message after 4000 milliseconds (4 seconds)
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 4000);
    };

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        // nagendra v1 (Advanced spread operator syntax commented out for reference)
        //   setFormData((prevData) => ({
        //       ...prevData,
        //       [name]: value
        //     }));

        // nagendra v2 (Simple manual mapping approach for student clarity)
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

        // Error Validation Check: Look for empty fields
        if (
            formData.patientName.trim() === '' ||
            formData.mobileNumber.trim() === '' ||
            formData.doctorName === '' ||
            formData.appointmentDate.trim() === '' ||
            formData.appointmentTime.trim() === ''
        ) {
            triggerTimedMessage('Error: Please fill out all required fields before booking.', 'error');
            return; // Terminate submission early
        }

        // nagendra v1 (Advanced spread operator syntax commented out for reference)
        // setAppointments((prevAppointments) => [...prevAppointments, formData]);

        // nagendra v2 (Simple array concatenation method)
        const updatedList = appointments.concat(formData);
        setAppointments(updatedList);

        // Show timed success alert message
        triggerTimedMessage('Success! Your appointment has been booked.', 'success');

        // Reset the form inputs (keeping the default doctor)
        setFormData({
            patientName: '',
            mobileNumber: '',
            doctorName: '',
            appointmentDate: _appointmentDate,
            appointmentTime: _appointmentTime
        });
    };

    // Handle clearing the form back to normal
    const handleClear = (e) => {
        e.preventDefault(); 
        
        // Show a timed information message confirming form clear action
        triggerTimedMessage('Form fields have been successfully reset.', 'info');

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
            <h1>Book an Appointment-v3</h1>

            {/* Notification Banner Layer container */}
            <div style={styles.bannerWrapper}>
                {message && (
                    <div 
                        style={{ 
                            ...styles.banner,
                            backgroundColor: messageType === 'success' ? '#d4edda' : messageType === 'error' ? '#f8d7da' : '#e2e3e5', 
                            color: messageType === 'success' ? '#155724' : messageType === 'error' ? '#721c24' : '#383d41', 
                            borderColor: messageType === 'success' ? '#c3e6cb' : messageType === 'error' ? '#f5c6cb' : '#d6d8db',
                        }}
                    >
                        <span>{message}</span>
                        <button 
                            type="button" 
                            onClick={() => { setMessage(''); setMessageType(''); }}
                            style={styles.closeBtn}
                        >
                            ✕
                        </button>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Patient Name: </label>
                    <input
                        type="text"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <div>
                    <label>Mobile Number: </label>
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <div>
                    <label>Select Doctor: </label>
                    <select
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleChange}
                    >
                        <option value="" disabled>--Select--</option>
                        {/* Rendering drop-down options dynamically using the .map() loop */}
                        {DOCTORS_LIST.map((doc) => (
                            <option key={doc.id} value={doc.name}>
                                {doc.name}
                            </option>
                        ))}
                    </select>
                </div>
                <br />

                <div>
                    <label>Appointment Date: </label>
                    <input
                        type="text"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <div>
                    <label>Appointment Time: </label>
                    <input
                        type="text"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <button type="submit" style={styles.submitBtn}>
                    Book Appointment
                </button>

                <button type="button" onClick={handleClear} style={styles.clearBtn}>
                    Clear Form
                </button>
            </form>

            <hr />

            <h2>Saved Appointments</h2>

            {appointments.length === 0 ? (
                <p>No appointments booked yet.</p>
            ) : (
                <table border="1 text">
                    <thead>
                        <tr>
                            <th width="160">Patient Name</th>
                            <th width="140">Mobile Number</th>
                            <th width="130">Doctor Name</th>
                            <th width="120">Date</th>
                            <th width="100">Time</th>
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
    );
}

// Separate Stylesheet Object at the bottom of the page
const styles = {
    bannerWrapper: {
        position: 'relative', 
        height: '40px', 
        marginBottom: '10px'
    },
    banner: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        border: '1px solid',
        padding: '8px', 
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10
    },
    closeBtn: {
        background: 'none', 
        border: 'none', 
        cursor: 'pointer', 
        fontWeight: 'bold', 
        color: 'inherit'
    },
    submitBtn: {
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '8px 16px', 
        fontWeight: 'bold',
        cursor: 'pointer',
        marginRight: '10px'
    },
    clearBtn: {
        padding: '8px 16px',
        cursor: 'pointer' 
    }
};
