import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Cartsum() {
    return (
        <div style={{
            width:'400px',
            display:'flex',
            padding:'1rem',
            justifyContent:'center',
            borderRadius:'1rem',
            flexDirection:'column',
            boxShadow: '0rem 0.3rem 0.9rem rgb(224, 224, 224)'}}>
                <div style={{display:'flex',alignItems:'center',marginBottom:'1.5rem',gap:'1rem'}}>
                    <FaShoppingCart/>
                    <h5>Cart Summary(<Link to='/cart' style={{fontSize:'14px'}}>edit</Link>)</h5>
                    <h6></h6>
                </div>
            <div style={{width:'100%'}}>
                <section>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                        <div style={{width:'200px'}}>
                        <p>2 x Best fish in the river</p>
                        </div>
                        <strong>$56</strong>
                    </div>
                    <hr/>
                </section>
                <section>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                        <div style={{width:'200px'}}>
                        <p>2 x Best fish in the river</p>
                        </div>
                        <strong>$56</strong>
                    </div>
                    <hr/>
                </section>
                <section>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                        <div style={{width:'200px'}}>
                        <p>2 x Best fish in the river</p>
                        </div>
                        <strong>$56</strong>
                    </div>
                    <hr/>
                </section>
            </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <p>Total:</p>
            <strong>$360</strong>
        </div>
        </div>
    )
}

export default Cartsum
