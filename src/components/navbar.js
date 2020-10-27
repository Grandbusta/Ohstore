import React from 'react'
import {Link} from 'react-router-dom'
import {Image,Form,Button} from 'react-bootstrap'
import Avi from '../assets/avi.jpg'
import {FaShoppingCart} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'

function Navs() {
    return (
        <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem'}}>
                <div style={{display:'flex',gap:'1rem',alignItems:'center',justifyContent:'center'}}><h5>OhStore</h5></div>
                <div>
                    <ul style={{textDecoration:'none',listStyle:'none',display:'flex',gap:'2rem'}}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/products">Electronics</Link></li>
                        <li><Link to='/'>Bags</Link></li>
                        <li><Link to=''>Shoes</Link></li>
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
                    <Image src={Avi} style={{width:'40px',height:'40px',borderRadius:'0.7rem'}}></Image>
                </div>
            </div>
        </div>
    )
}

export default Navs
