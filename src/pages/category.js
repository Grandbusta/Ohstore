import React from 'react'
import Shop from '../components/shop'
import {useParams} from 'react-router-dom'
import {products} from '../assets/data'

function Category() {
    const {category}=useParams()
    return (
        <div>
            <Shop title={category} products={products}/>
        </div>
    )
}

export default Category
