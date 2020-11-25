import React from 'react'
import { Link } from 'react-router-dom'
// import { Form, Button } from 'react-bootstrap'
// import { FaShoppingCart } from 'react-icons/fa'
// import { FiSearch } from 'react-icons/fi'
// import Avi from '../assets/avi.png'

function Navs(props) {
    console.log(props)
    return (
        <div className="container bg-light shadow">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // padding: '1rem 2rem'
            }} className="p-2">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}><h5><Link to="/">Micheal Store</Link></h5></div>
                <div>
                    <ul style={{ textDecoration: 'none', listStyle: 'none', display: 'flex', gap: '2rem' }}>
        <li className="mr-2">{props.auth ? <Link to='/dashboard'>Dashboard</Link> : <Link to='/'>Home</Link> }</li>
                        <li className="mr-2"><Link to="/shop">Products</Link></li>
                        <li>{props.auth ?<a href="/" onClick={() => {
                            window.localStorage.removeItem('token')
                        }}>Log Out</a> : <Link to="/login">Login</Link>}</li>
                        {/* <li><Link to="/register">Register</Link></li> */}
                    </ul>
                </div>
                {/* <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <Form.Control type='text' placeholder='search...' style={{ borderRadius: '0.5rem 0rem 0rem 0.5rem' }}></Form.Control>
                        <Button variant='primary' style={{ borderRadius: '0rem 0.5rem 0.5rem 0rem' }}>
                            <FiSearch />
                        </Button>
                    </div>
                    <Link to='/cart'>
                        <Button style={{}} variant='outline-primary'>
                            <FaShoppingCart />
                            <strong style={{ marginLeft: '1rem' }}>5</strong>
                        </Button>
                    </Link>
                    <img src={Avi} alt="new" style={{ width: '40px', height: '40px', borderRadius: '0.7rem' }}></img>
                </div> */}
            </div>
        </div>
    )
}

export default Navs
