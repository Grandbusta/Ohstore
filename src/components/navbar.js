import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import Avi from '../assets/avi.png'
import Ico from '../assets/icon.png'

function Navs() {
    const {totalQty}=useSelector(state=>state.cart)
    return (
        <div >
            <div className='navDiv'>
                <div className='navAlign'><h5><img src={Ico} alt="" style={{width:"30px",height:"30px"}}/>OhStore</h5></div>
                    <ul className='navLink' style={{alignSelf:'center'}}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
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
    <strong style={{marginLeft:'1rem'}}>{totalQty}</strong>
                    </Button>
                    </Link>
                    <img src={Avi} alt="new" className='Avi'></img>
                </div>
            </div>
        </div>
    )
}

export default Navs
