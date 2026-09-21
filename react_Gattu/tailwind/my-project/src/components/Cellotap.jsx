import React from 'react'

const DgfG = (props) => {
  return (
    <div>
        <input type={props.number}
        placeholder={props.placeholder}
        name={props.contact}
        value={props.value}
         className='w-full border text-red-700  border-gray-300 rounded-lg px-4 py-3
            focus:ring-blue-500'
        onChange={props.onChange} />
      
    </div>
  )
}

const CellotapG = (props) => {
  return (
    <div>
        <input type={props.email}
        placeholder={props.placeholder}
        name={props.email}
        value={props.value}
         className='w-full border text-green-700  border-gray-300 rounded-lg px-4 py-3
            focus:ring-blue-500'
        onChange={props.onChange} />
      
    </div>
  )
};





export default ( DgfG,CellotapG)
