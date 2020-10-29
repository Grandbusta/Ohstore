import React from 'react'
import Productdetails from '../components/productdetails'
import Reviews from '../components/reviews'
import {products} from '../assets/data'
import {useParams} from 'react-router-dom'

function Product() {
    const {name}=useParams()
    let product=products.filter((product)=>{
        return product.link===name
    })
    console.log(product)
    return (
        <div>
            <Productdetails/>
            <Reviews/>
        </div>
    )
}

export default Product
