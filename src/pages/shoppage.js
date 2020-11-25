import React from 'react'
import Shop from '../components/shop'
import {products} from '../assets/data'


function Shoppage() {
    return (
        <div>
            <Shop title='Products' products={products}/>
        </div>
    )
}

export default Shoppage
