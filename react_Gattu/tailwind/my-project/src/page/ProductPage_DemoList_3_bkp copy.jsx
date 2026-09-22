import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import { useEffect } from 'react'


const eProduct = {
  "category": "speaker",
  "item_name": "JBLA",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLJeWGC9JFrqbn4N43yEk1Zpeu117k1jIJUmf_l4JK7S0CsJLN4L_N3WS&s=10",
  "pice_rang": "30000-40000"
}
const nProduct = {
  "category": "Computer",
  "item_name": "LenovoB",
  "image": "https://png.pngtree.com/png-clipart/20250515/original/pngtree-modern-desktop-computer-png-image_20978094.png",
  "pice_rang": "60000-70000"

}

const gProduct = {

  "category": "Television",
  "item_name": "sonyC",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlSNfSz7GZwbbbpBUTDlClE4V2YpejgaE9DeosVXAm-f0uz2V0p0UQA3c&s=10",
  "pice_rang": "60000-70000"
}



//  DataList = {
//   eProduct: eProduct, 
//   gProduct: gProduct,
//   nProduct: nProduct
// }
const ProductPage_DemoList3BKP = () => {
<h1>ProductPage_Demo List -3 BKP</h1>


const [DataList, setDataList] = useState([]);



function abd(ddd) {


  setDataList(eProduct);
  setDataList(eProduct);
  setDataList(eProduct);
  setDataList(eProduct);
  setDataList(eProduct);
  // DataList[0]= eProduct;
  // DataList[1]= gProduct;
  // DataList[2]= mProduct;



  // setDataList(ddd);
}

useEffect(() => {
  abd();
}, []);

// #####################################
/*
usestae() prodlist, setprodlist ={
<ProductCard category={setprodlist.category} item_name={ProdList.eProduct.item_name} image={ProdList.eProduct.image} pice_rang={ProdList.eProduct.pice_rang}/>
}



// #####################################

*/




  return (
    <div className='flex flex-row'>

      {/* <h1 className='text-4xl font-bold'>Product Demo List</h1>
<ProductCard category={ProdList.eProduct.category} item_name={ProdList.eProduct.item_name} image={ProdList.eProduct.image} pice_rang={ProdList.eProduct.pice_rang}/> */}
      {/* <ProductCard category={ProdList.nProduct.category} item_name={ProdList.nProduct.item_name} image={ProdList.nProduct.image} pice_rang={ProdList.nProduct.pice_rang}/>
<ProductCard category={ProdList.gProduct.category} item_name={ProdList.gProduct.item_name} image={ProdList.gProduct.image} pice_rang={ProdList.gProduct.pice_rang}/> */}

      {DataList.map ((item, index) => (
        <div key={index}>
          <div>
            <ProductCard category={setDataList.item.category} item_name={setDataList.item.item_name} image={setDataList.item.image} pice_rang={setDataList.item.pice_rang} />
          </div>
        </div>
      ))}





    </div>
  )
}

export default ProductPage_DemoList3BKP
