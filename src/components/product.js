import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Product({product}) {
    return (
        <div className='productDiv'>
            <div>
                <div style={{backgroundImage:`url(${product.imageUrl})`}} className='featuredDiv'>
                    <Button variant='warning' style={{borderRadius:'2rem 0rem 0rem 0rem',color:'white',opacity:'1'}} disabled>
                        {product.tag}
                    </Button>
                </div>
                <h5 style={{marginTop:'1rem'}}> <Link to={`/p/${product.link}`}>{product.name}</Link></h5>
                    <p>{product.category}</p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',gap:'0.5rem',alignItems:'flex-start'}}>
                    <h4>{product.originalPrice}</h4><strike>{product.discountPrice}</strike>
                    </div>
                    <Button variant='primary' size='sm' style={{borderRadius:'1rem'}}>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}

export default Product
