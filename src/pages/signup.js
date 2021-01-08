import React from 'react'
import {Redirect} from 'react-router-dom'
import {Form,Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {updateSignup,fetchSignUp} from '../redux'
import Loading from '../components/loading'

function Signup() {
    const {firstname,lastname,email,password}=useSelector(state=>state.SignupDetails)
    const data=useSelector(state=>state.Signup)
    const Ldata=useSelector(state=>state.Login)
    const dispatch=useDispatch()
    if(data.success){
        return(
            <Redirect to='/login'/>
        )
    }else if(Ldata.token){
        return <Redirect to='/'/>
    }else if(data.loading){
        return<Loading/>
    }else{
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{flexBasis:'400px'}}>
                    <div className='titleDiv'>
                        <h1>Signup</h1>
                        <div className='line'></div>
                    </div>
                    <p style={{color:'red',textAlign:'center'}}>{data.error?data.error:''}</p>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Firstname:</Form.Label>
                                    <Form.Control
                                    placeholder='e.g ben'
                                    name='firstname'
                                    value={firstname}
                                    onChange={(e)=>{
                                        dispatch(updateSignup(e.target.name,e.target.value))
                                    }}></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control placeholder='e.g joe'
                                    name='lastname'
                                    value={lastname}
                                    onChange={(e)=>{
                                        dispatch(updateSignup(e.target.name,e.target.value))
                                    }}></Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control placeholder='e.g ben@example.com'
                                    name='email'
                                    value={email}
                                    onChange={(e)=>{
                                        dispatch(updateSignup(e.target.name,e.target.value))
                                    }}></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type='password'
                                    name='password'
                                    value={password}
                                    onChange={(e)=>{
                                        dispatch(updateSignup(e.target.name,e.target.value))
                                    }}></Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                    </Form>
                    <Button style={{width:'100%'}} onClick={()=>{
                            dispatch(fetchSignUp({
                                firstname:firstname,
                                lastname:lastname,
                                email:email,
                                password:password
                            }))
                    }}>Signup</Button>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'0.7rem'}}>
                        <p>Already have an account?<Link to='/login'><strong>Login</strong></Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup
