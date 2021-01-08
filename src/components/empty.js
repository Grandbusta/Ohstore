import React from 'react'
import {Link} from 'react-router-dom'
import emptyImg from '../assets/empty.png'
import {Button} from 'react-bootstrap'


function Empty() {
    return (
        <div style={{width:'100%',display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center',color:'blue',height:'100%'}}>
            <img src={emptyImg} alt="" className="empty"/>
            <h2 style={{textAlign:'center'}}>No product Added to cart</h2>
            <div style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>
            <Link to='/shop'><Button>Continue shopping</Button></Link>
            </div>
        </div>
    )
}

export default Empty
