import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


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
                       return (
                        <div className='productDiv' key={product.id}>
                            <div>
                                <div style={{backgroundImage:`url(${product.featured_imgurl})`}} className='featuredDiv'>
                                </div>
                                <h5 style={{marginTop:'1rem'}}> <Link to={`/p/${product.slug}`}>{product.title.slice(0,110)}</Link></h5>
                                    <p>{product.category}</p>
                                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex',gap:'0.5rem',alignItems:'flex-start'}}>
                                    <h4>{`$${product.bonus_price}`}</h4><strike>{`$${product.selling_price}`}</strike>
                                    </div>
                                    <Button variant='primary' size='sm' style={{borderRadius:'1rem'}}>Add to cart</Button>
                                </div>
                            </div>
                        </div>
                       )
                    })
                }
            </div>
        </div>
    )
}

export default Shop
