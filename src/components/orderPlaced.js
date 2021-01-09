import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import correct from '../assets/correct.png'

function OrderPlaced() {
    return (
        <div style={{width:'100%',display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center',color:'blue',height:'100%'}}>
            <img src={correct} alt="" className="correct"/>
            <h2 style={{textAlign:'center'}}>Order placed successfully</h2>
            <div style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>
            <Link to='/shop'><Button>Continue shopping</Button></Link>
            </div>
        </div>
    )
}

export default OrderPlaced
