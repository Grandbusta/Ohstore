import React from 'react'
import {Carousel,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'
import Shop from '../components/shop'
import Pic from '../assets/dessert4.jpg'
import Im from '../assets/cocktails.jpg'
import {products} from '../assets/data'

function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item style={{height:'500px'}}>
                    <img src={Pic} alt="" style={{width:'100%',objectFit:'cover',height:'100%'}}/>
                    <Carousel.Caption>
                        <h2>Order for your products without stress</h2>
                        <p>The best Ecommerce website</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height:'500px'}}>
                    <img src={Im} alt="" style={{width:'100%',objectFit:'cover',height:'100%'}}/>
                    <Carousel.Caption>
                        <h2>Pushing you to the top through foods</h2>
                        <p>Order now and get it in 30 minutes</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Shop title='Latest Products' products={products}/>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center', marginBottom:'3rem'}}>
                <Link to='/shop'>
            <Button variant='primary'>
                View all Products
                <FiArrowRight/>
            </Button>
                </Link>
            </div>
        </div>
    )
}

export default Home
