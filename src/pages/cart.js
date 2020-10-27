import React from 'react'
import {Link} from 'react-router-dom'
import Cartlist from '../components/cartlist'
import Carttotal from '../components/carttotal'
import {Button} from 'react-bootstrap'

function Cart() {
    return (
        <div>
            <Cartlist/>
            <Carttotal/>
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
