import React from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {updateDetails,placeOrder} from '../redux'
import {Form,Col, Button} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Loading from '../components/loading'
import EmptyDiv from '../components/empty'

function Checkout() {
    const {cart,totalAmount}=useSelector(state=>state.cart)
    const {firstname,lastname,email,phone1,address1,city,state}=useSelector(state=>state.checkout)
    const checkout=useSelector(state=>state.checkout)
    const {token}=useSelector(state=>state.Login)
    const order=useSelector(state=>state.order)
    const dispatch=useDispatch()
    if(order.loading){
        return <Loading/>
    }else if(order.success){
        return <Redirect to='/success'/>
    }else if(!cart.length){
        return(
            <EmptyDiv/>
        )
    }else{
        if(order.error){
            localStorage.removeItem('token')
        }
        return (
            <div className='checkout'>
                <div className='formDiv'>
                <h5>Billing details</h5>
                <div className='formArea'>
                <p style={{color:'red',textAlign:'center'}}>{order.error?order.error:''}</p>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control
                                name='firstname'
                                placeholder='e.g Ben'
                                value={firstname} onChange={(e)=>{
                                    dispatch(updateDetails(e.target.name,e.target.value))
                                }}>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control
                                placeholder='e.g Bruce'
                                name='lastname'
                                value={lastname}
                                onChange={(e)=>{
                                    dispatch(updateDetails(e.target.name,e.target.value))
                                }}></Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId='fromGridEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                placeholder='yourname@example.com'
                                name='email'
                                value={email}
                                onChange={(e)=>{
                                    dispatch(updateDetails(e.target.name,e.target.value))
                                }}></Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                placeholder='102,arogundade street'
                                name='address1'
                                value={address1}
                                onChange={(e)=>{
                                    dispatch(updateDetails(e.target.name,e.target.value))
                                }}></Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                placeholder='e.g Ibadan'
                                name='city'
                                value={city}
                                onChange={(e)=>{
                                    dispatch(updateDetails(e.target.name,e.target.value))
                                }}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                placeholder='e.g Oyo'
                                name='state'
                                value={state}
                                onChange={(e)=>{
                                    dispatch(updateDetails(e.target.name,e.target.value))
                                }}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Phone No.</Form.Label>
                                <Form.Control
                                placeholder='e.g 08145657890'
                                name='phone1'
                                value={phone1}
                                onChange={(e)=>{
                                    dispatch(updateDetails(e.target.name,e.target.value))
                                }}></Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Form>
                </div>
            </div>
                <div className='cartSum'>
                    <div style={{display:'flex',alignItems:'center',marginBottom:'1.5rem',gap:'1rem'}}>
                        <FaShoppingCart/>
                        <h5>Cart Summary(<Link to='/cart' style={{fontSize:'14px'}}>edit</Link>)</h5>
                    </div>
                <div style={{width:'100%'}}>
                    {
                        cart.map((item)=>{
                            return(
                                <section key={item.id}>
                                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                                        <div style={{width:'200px'}}>
                                            <p>{`${item.quantity} x ${(item.title.slice(0,20))}...`}</p>
                                        </div>
                                        <strong>{`$${(item.price*item.quantity).toFixed(2)}`}</strong>
                                    </div>
                                    <hr/>
                                </section>
                            )
                        })
                    }
                </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Payment method:</p>
                <strong>Pay on delivery</strong>
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Total:</p>
                <strong>{`$${totalAmount}`}</strong>
            </div>
            {
                token?
                <Button
                type='submit'
                style={{width:'100%'}}
                onClick={()=>{
                    if(firstname&&lastname&&phone1&&address1&&city&&state&&email&&cart.length){
                        const prods=[]
                        cart.forEach(item=>{
                            prods.push({id:item.id,qty:item.quantity})
                        })
                        dispatch(placeOrder(prods,checkout,token))
                    }
                }}>
                    Place Order
                </Button>:
                <Link to='/login'>
                    <Button
                    style={{width:'100%'}}>
                        Login
                    </Button>
                </Link>
            }
            </div>
            </div>
        )
    }
}

export default Checkout
