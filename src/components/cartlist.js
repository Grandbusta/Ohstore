import React from 'react'
import CartItem from './cartitem'

function Cartlist() {
    return (
        <div style={{width:'90%',margin:'auto',marginTop:'2rem'}}>
            <div style={{marginBottom:'4rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h1 style={{fontWeight:'bold',}}>Cart</h1>
                <div style={{backgroundColor:'#49a6e9',width:'4rem',height:'0.25rem',margin:'auto'}}></div>
            </div>
            <table style={{width:'100%'}}>
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                <CartItem/>
                <CartItem/>
            </table>
        </div>
    )
}

export default Cartlist
