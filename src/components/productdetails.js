import React from 'react'
import Pic from '../assets/dessert.jpg'
import smc2 from '../assets/smallchops1.jpg'
import {Button} from 'react-bootstrap'

function Productdetails({product}) {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'2rem 0rem'}}>
            <div style={{width:'80%',display:'flex',justifyContent:'space-between',flexDirection:'row',gap:'3rem'}}>
                <div style={{flexBasis:'40%',display:'flex',flexDirection:'column',gap:'1.5rem'}}>
                    <div style={{width:'100%',height:'400px',backgroundImage:`url(${product.imageUrl})`,backgroundSize:'cover',borderRadius:'3rem'}}>
                    </div>
                    <div style={{width:'100%',display:'flex',height:'130px',gap:'1rem',justifyContent:'space-between'}}>
                        <div style={{backgroundImage:`url(${product.imageUrl})`,borderRadius:'2rem',width:'30%',height:'100%',backgroundSize:'cover'}}></div>
                        <div style={{backgroundImage:`url(${smc2})`,borderRadius:'2rem',width:'30%',height:'100%',backgroundSize:'cover'}}></div>
                        <div style={{backgroundImage:`url(${Pic})`,borderRadius:'2rem',width:'30%',height:'100%',backgroundSize:'cover'}}></div>
                    </div>
                </div>
                <div style={{flexBasis:'60%'}}>
                    <h1>{product.name}</h1>
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
    )
}

export default Productdetails;
