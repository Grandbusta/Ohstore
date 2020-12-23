import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Form,Col, Button} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Checkout() {
    const {cart,totalAmount}=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    return (
        <div className='checkout'>
            <div className='formDiv'>
            <h5>Billing details</h5>
            <div className='formArea'>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control placeholder='e.g Ben'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control placeholder='e.g Bruce'></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId='fromGridEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder='yourname@example.com'></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder='102,arogundade street'></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder='e.g Ibadan'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control placeholder='e.g Oyo'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group id='formGridCheckbox'>
                    <Form.Check type='checkbox' label='Save billing details'/>
                </Form.Group>
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
                            <section>
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
            <p>Total:</p>
            <strong>{`$${totalAmount}`}</strong>
        </div>
            <Button type='submit' style={{width:'100%'}}>Place Order</Button>
        </div>
        </div>
    )
}

export default Checkout
