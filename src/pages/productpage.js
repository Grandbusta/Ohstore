import React from 'react'
import Review from '../components/review'
import {products} from '../assets/data'
import {useParams} from 'react-router-dom'
import Pic from '../assets/dessert.jpg'
import smc2 from '../assets/smallchops1.jpg'
import {Button} from 'react-bootstrap'

function Product() {
    const {name}=useParams()
    let product=products.filter((product)=>{
        return product.link===name
    })
    console.log(product[0])
    return (
        <div>
            <div className='detailsDiv'>
            <div className='prodetDiv'>
                <div className='prodetImgDiv'>
                    <div style={{backgroundImage:`url(${product[0].imageUrl})`}} className='productImg'>
                    </div>
                    <div className='proImgs'>
                        <div style={{backgroundImage:`url(${product[0].imageUrl})`}} className='proImg'></div>
                        <div style={{backgroundImage:`url(${smc2})`}} className='proImg'></div>
                        <div style={{backgroundImage:`url(${Pic})`}} className='proImg'></div>
                    </div>
                </div>
                <div className='proContentDiv'>
                    <h1>{product[0].name}</h1>
                    <p>BY <strong>KC Company</strong></p>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <Button variant='outline-primary' size='lg' disabled>$45</Button>
                        <div style={{marginLeft:'1rem'}}>
                        <strong style={{color:'green'}}>Save 12%</strong>
                        <p>Inclusive of all taxes</p>                         
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio ullam consectetur eaque, modi cum libero deleniti praesentium illum odit et est architecto quibusdam, voluptatem perferendis. Dolores eveniet officia pariatur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio ullam consectetur eaque, modi cum libero deleniti praesentium illum odit et est architecto quibusdam, voluptatem perferendis. Dolores eveniet officia pariatur.
                    </p>
                    <div>
                        <span>QTY: </span><Button variant='outline-secondary'> 23</Button>
                        <Button variant='primary' size='m' style={{marginLeft:'2rem'}}>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>

        {/* Start of review */}
        <div className='revSect'>
            <div className='titleDiv'>
                <h1>Reviews</h1>
                <div className='line'></div>
            </div>
            <div className='allrev'>
            <div className='allrevDiv'>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </div>
            </div>
            <div style={{margin:'auto',marginTop:'3rem'}}>
                <Button variant='primary'> Show More </Button>
            </div>
        </div>
        {/* End of review */}
        </div>
    )
}

export default Product
