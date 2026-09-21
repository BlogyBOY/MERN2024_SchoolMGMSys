import React from 'react'
import Navbar from '../components/navbar'


const productName = "iujnuihnuyhuhu"

const product = {
    "name": "gunjan",
    "email": "gunjan@mail.com",
    "age": 37,
    "contact": "9999999999"
}


//phase 1

//===================
const Fan = {
    "name": "gunjan",
    "email": "gunjan@mail.com",
    "age": 37,
    "contact": "9999999999"
}

const FMobile = {
    "name": "gunjan",
    "email": "gunjan@mail.com",
    "age": 37,
    "contact": "9999999999"
}

// tv
//headphone


/*
//===================
//run and validate
//phase 2

const Prod_data = {
    Fan: FMobile,
    TV: Fan,
    TV: TV,
    HeadPhone: HeadPhone
}

//Prod_data.Fan.email
//===================



//run and validate
//phase 3



const Prod_data = {
    Fan: {
        "name": "gunjan",
        "email": "gunjan@mail.com",
        "age": 37,
        "contact": "9999999999"
    },
    TV: {
        "name": "gunjan",
        "email": "gunjan@mail.com",
        "age": 37,
        "contact": "9999999999"
    },
    TV: {
        "name": "gunjan",
        "email": "gunjan@mail.com",
        "age": 37,
        "contact": "9999999999"
    },
    HeadPhone: {
        "name": "gunjan",
        "email": "gunjan@mail.com",
        "age": 37,
        "contact": "9999999999"
    }
}


//===================
*/

const electronicProduct_old = {
    "fan": {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafiUs2KK5zAaV1e0k7ejqrz6ZzenaXQxaj0OQWfvARQ&s=10",
        "company Name": "Bajaj",
        "price": "2000"
    },
    "head phone": {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCt0QXScDtHvqPkezVqFfcx4QSogjwQj3rDVU7rOFJZA&s=10",
        "company Name": "boat",
        "price": "10000"

    },
    "Laptop": {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRX4P5ykLNYSaM2Hmn2sno_f3jEUzEZq5LAbvMXR1kQ&s=10",
        "company Name": "samsuang",
        "price": "100000"

    },
    "TV": {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoqUXAolCHUELo278itm9BQ69XjXpsVfDEzvWCXST_Q&s=10",
        "company Name": "sony",
        "price": "50000"
    }
}


const electronicProduct = {
    "fan_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafiUs2KK5zAaV1e0k7ejqrz6ZzenaXQxaj0OQWfvARQ&s=10",
    "fan_company_Name": "Bajaj",
    "fan_price": "2000",
    "hp_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCt0QXScDtHvqPkezVqFfcx4QSogjwQj3rDVU7rOFJZA&s=10",
    "hp_company_Name": "boat",
    "hp_price": "10000",

    "Laptop_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRX4P5ykLNYSaM2Hmn2sno_f3jEUzEZq5LAbvMXR1kQ&s=10",
    "Laptop_company_Name": "samsuang",
    "Laptop_price": "100000",
    "TV_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoqUXAolCHUELo278itm9BQ69XjXpsVfDEzvWCXST_Q&s=10",
    "TV_company_Name": "sony",
    "TV_price": "50000"
}


const UserDashboard = () => {
    return (
        <div>

            <Navbar />
            this is dash

            <h3>h3: {product.name}</h3>

            <h5>h5: {productName}</h5>
            {console.log('jjjjjjj')}
            {console.log(electronicProduct.Laptop_image)}

            <img src={electronicProduct.Laptop_image} alt="" />

            <h1> {electronicProduct.Laptop_company_Name}</h1>
            <h2>
                {electronicProduct.Laptop_price}
            </h2>


            <img src={electronicProduct.TV_image} alt="" />
            <h1>{electronicProduct.TV_company_Name}</h1>
            <h2>{electronicProduct.TV_price}</h2>



        </div>
    )
}

export default UserDashboard
