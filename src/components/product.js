import React from 'react'
import Pro from '../assets/dessert.jpg'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Product() {
    return (
        <div style={{display:"flex",alignItems:'center',justifyContent:'center',width:'350px',boxShadow: '0rem 0.1rem 0.9rem rgb(224, 224, 224)',borderRadius:'2rem',padding:'0.5rem 0.5rem 1rem 0.5rem'}}>
            <div>
                <div style={{backgroundImage:`url(${Pro})`,width:'100%',height:'250px',borderRadius:'2rem'}}>
                    <Button variant='warning' style={{borderRadius:'2rem 0rem 0rem 0rem',color:'white',opacity:'1'}} disabled>Best Seller</Button>
                </div>
                <h5 style={{marginTop:'1rem'}}> <Link to='/p/busta'>Swiss Made Vegetable Cutting Knife</Link></h5>
                <p>by Kceeman</p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',gap:'0.5rem',alignItems:'flex-start'}}>
                        <h4>$50.00</h4><strike>$56.56</strike>
                    </div>
                    <Button variant='primary' size='sm' style={{borderRadius:'1rem'}}>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}

export default Product
