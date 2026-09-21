import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        className='w-full border  border-gray-300 rounded-lg px-4 py-3
            focus:ring-blue-500'
        onChange={props.onChange} />
      
    </div>
  )
}

export default Input
