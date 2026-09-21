import React from 'react'

const ProductCard = (props) => {
  return (
    <>
    
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>{props.category}</h1>
      

      <img src={props.image} className='h-30 w-40' alt="" />
      <h2 className='text-red-800 font-semibold text-2xl'>{props.item_name} </h2>

      <p>{props.pice_rang}</p>
    </div>
    </>
  )
}

export default ProductCard
