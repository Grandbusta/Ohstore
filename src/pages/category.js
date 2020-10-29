import React from 'react'
import Shop from '../pages/shop'
import {useParams} from 'react-router-dom'

function Category() {
    const {category}=useParams()
    console.log(category)
    return (
        <div>
            <Shop title={category}/>
        </div>
    )
}

export default Category
