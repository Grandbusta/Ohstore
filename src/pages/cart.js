import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {increaseCartItem,decreaseCartItem,removeFromCart} from '../redux'
import EmptyDiv from '../components/empty'

function Cart() {
    const {cart,totalAmount}=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    return (
        !cart.length?
        <EmptyDiv/>:
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
                    {
                        cart.map((item)=>{
                            return (
                                <tr key={item.id}>
                                    <td><img src={item.featured_imgurl} alt="" className='cartImg'/></td>
                                    <td style={{width:'300px'}}>
                                        <h6>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>{`$${(item.price).toFixed(2)}`}</td>
                                    <td style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <div style={{display:'flex',marginTop:'1.9rem'}}>
                                        <Button variant='outline-secondary' onClick={()=>{dispatch(decreaseCartItem(item.id))}}>-</Button>
                                        <span style={{padding:'0rem 1rem'}}>{item.quantity}</span>
                                        <Button variant='outline-secondary' onClick={()=>{dispatch(increaseCartItem(item.id))}}>+</Button>
                                        </div>
                                    </td>
                                    <td>{`$${(item.quantity*item.price).toFixed(2)}`}</td>
                                    <td><Button variant='danger' size='sm' onClick={()=>{dispatch(removeFromCart(item.id))}}>Remove</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
        <div style={{width:'90%',margin:'auto'}}>
            <hr/>
            <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between',margin:'2rem 0rem'}}>
                <h5>Total: </h5>
                <h4>{`$${totalAmount}`}</h4>
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
