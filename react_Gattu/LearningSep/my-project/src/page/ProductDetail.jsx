import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
  const location = useLocation();
  const name = location.state?.name;
  return (
    <div>
      <h1>this is ProductDetail</h1>
      <label > custmer name is </label>
      <li><ol>{name}</ol></li>
    </div>
  )
}

export default ProductDetail
