import React from 'react'
import {Link} from 'react-router-dom'
import CartItem from '../components/cartitem'
import {Button} from 'react-bootstrap'

function Cart() {
    return (
        <div>
            <div className='tableDiv'>
            <div className='titleDiv'>
                <h1>Cart</h1>
                <div className='line'></div>
            </div>
            <div className='tableSect'>
            <table >
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem/>
                    <CartItem/>
                </tbody>
            </table>
            </div>
        </div>
        <div style={{width:'90%',margin:'auto'}}>
            <hr/>
            <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between',margin:'2rem 0rem'}}>
                <h5>Total: </h5>
                <h4>$500</h4>
            </div>
        </div>
            <div style={{width:'100%',marginBottom:'4rem'}}>
                <div style={{width:'95%', display:'flex', justifyContent:'flex-end'}}>
                    <Link to='/checkout'>
                        <Button variant='primary'>Proceed to Checkout</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
