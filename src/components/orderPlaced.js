import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function OrderPlaced() {
    return (
        <div>
            <div style={{width:'100%',justifyContent:'center',alignItems:'center',color:'blue',height:'100%'}}>
                <h2 style={{textAlign:'center'}}>Order Placed Successfully</h2>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>
            <Link to='/shop'><Button>Continue shopping</Button></Link>
            </div>
        </div>
    )
}

export default OrderPlaced
