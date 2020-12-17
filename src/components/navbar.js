import React from 'react'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {FaShoppingCart,FaBars} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import Avi from '../assets/avi.png'

function Navs() {
    return (
        <div>
            <div className='navDiv'>
                <div className='navAlign'><h5>OhStore</h5></div>
                    <ul className='navLink'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                    <FaBars className='menuBar'/>
                <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
                    <div className='search'>
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
                    <img src={Avi} alt="new" className='Avi'></img>
                </div>
            </div>
        </div>
    )
}

export default Navs
