import React from 'react'
import { useState } from 'react'

const Hairbelt = () => {
 const [newList, setNewList] = useState([])
    const [name, setName] = useState("");
     const [number, setNumber] = useState("");
      const [email, setEmail] = useState("");


      const handalchangeName =(e) =>{
        setName (e.target.value)
      }

      
      const handalchangeNumber =(e) =>{
        setNumber (e.target.value)
      }

      
      const handalchangeEmail =(e) =>{
        setEmail (e.target.value)
      }

      const handalsubmit =(e)=> {
        e.preventDefault();

        const list ={
            name :name,
            number: number,
            email: email
        }
setNewList ([...newList, list])
        setName("");
        setNumber("");
        setEmail("");

      }
  return (
    <div>
        <div>
      <form onSubmit={handalsubmit}>
<input type="text" placeholder='Enter your name' value={name} onChange={handalchangeName}  className='h-8 w-96 border border-gray-600'/>
<input type="number" placeholder='Enter your number' value={number} onChange={handalchangeNumber}  className='h-8 w-96 border border-gray-600'/>
<input type="email" placeholder='Enter your email' value={email} onChange={handalchangeEmail} className='h-8 w-96 border border-gray-600'/>
<button className='h-16 w-60 bg-blue-600 text-white'>Submit</button>

      </form>

</div>

<div>
    <table>
        <thead>
<tr className='flex justify-between gap-56'>
    <th> Name</th>
    <th>Number</th>
    <th>Email</th>
</tr>

        </thead>
        <tbody>
            {newList.map((item,index)=>(

<tr  key={index} className='flex justify-between gap-56' >
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
            </tr>
            ))}
            
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Hairbelt
