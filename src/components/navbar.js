import React from 'react'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'

function Navs() {
    return (
        <div>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                padding:'1rem 2rem'}}>
                <div style={{display:'flex',gap:'1rem',alignItems:'center',justifyContent:'center'}}><h5>OhStore</h5></div>
                <div>
                    <ul style={{textDecoration:'none',listStyle:'none',display:'flex',gap:'2rem'}}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to='/c/electronics'>Electronics</Link></li>
                        <li><Link to='/c/phones'>Phones</Link></li>
                    </ul>
                </div>
                <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
                    <div style={{display:'flex'}}>
                        <Form.Control type='text' placeholder='search...' style={{borderRadius:'0.5rem 0rem 0rem 0.5rem'}}></Form.Control>
                        <Button variant='primary' style={{borderRadius:'0rem 0.5rem 0.5rem 0rem'}}>
                            <FiSearch/>
                        </Button>
                    </div>
                    <Link to='/cart'>
                    <Button style={{}} variant='outline-primary'>
                            <FaShoppingCart/>
                            <strong style={{marginLeft:'1rem'}}>5</strong>
                    </Button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navs
