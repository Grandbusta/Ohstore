import React from 'react'
import Product from '../components/product'


function Shop({title,products}) {
    return (
        <div className='shopDiv'>
            <div className='titleDiv'>
            <h1>{title}</h1>
                <div className='line'></div>
            </div>
            <div className='productList'>
                {
                    products.map((product)=>{
                       return <Product product={product} key={product.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Shop
