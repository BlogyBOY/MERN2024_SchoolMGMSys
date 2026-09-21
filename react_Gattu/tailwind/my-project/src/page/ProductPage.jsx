import React from 'react'
import ProductCard from '../components/ProductCard'


const eProduct = {
    "category":"speaker",
    "item_name":"JBL",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLJeWGC9JFrqbn4N43yEk1Zpeu117k1jIJUmf_l4JK7S0CsJLN4L_N3WS&s=10",
    "pice_rang":"30000-40000"
}
const nProduct ={
  "category":"Computer",
    "item_name":"Lenovo",
    "image":"https://png.pngtree.com/png-clipart/20250515/original/pngtree-modern-desktop-computer-png-image_20978094.png",
    "pice_rang":"60000-70000"

}

const gProduct ={

  "category":"Television",
    "item_name":"sony",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlSNfSz7GZwbbbpBUTDlClE4V2YpejgaE9DeosVXAm-f0uz2V0p0UQA3c&s=10",
    "pice_rang":"60000-70000"
}

const ProductPage = () => {

  return (
    <div className='flex flex-row'>
{/* 
       < ProductCard category="fan" item_name=" ceiling fan" image="https://m.media-amazon.com/images/I/51vsums4LPL.jpg"  pice_rang="2000-2500" /> <br /><br />

 < ProductCard category="mobile" item_name=" cellphone" image="https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-latest-model-mobile-phone-png-image_15739741.png"  pice_rang="20000-100000" /> <br /><br />
  < ProductCard category="Headphone" item_name=" headset" image="https://png.pngtree.com/png-clipart/20250415/original/pngtree-wireless-headphone-png-image_20721964.png"  pice_rang="5000-6000" /> <br /><br />
   < ProductCard category="laptop" item_name=" Laptop" image="https://png.pngtree.com/png-vector/20250304/ourmid/pngtree-sleek-modern-laptop-with-high-resolution-display-png-image_15711292.png"  pice_rang="82000-97000" /> */}

<ProductCard category={eProduct.category} item_name={eProduct.item_name} image={eProduct.image} pice_rang={eProduct.pice_rang}/>
<ProductCard category={nProduct.category} item_name={nProduct.item_name} image={nProduct.image} pice_rang={nProduct.pice_rang}/>
<ProductCard category={gProduct.category} item_name={gProduct.item_name} image={gProduct.image} pice_rang={gProduct.pice_rang}/>

{/* ================================= */}






{/* 

      {ProductCard.category} <br />
      
      
        {props.item_name} <br />
        {props.image} <br />
        {props.pice_rang} */}
    </div>
  )
}

export default ProductPage
