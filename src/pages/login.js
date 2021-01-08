import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {updateLogin,fetchLogin} from '../redux'
import Loading from '../components/loading'

function Login() {
    const {password,email}=useSelector(state=>state.LoginDetails)
    const data=useSelector(state=>state.Login)
    const dispatch=useDispatch()
    if(data.token){
        return <Redirect to='/'/>
    }else if(data.loading){
        return <Loading/>
    }else{
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{flexBasis:'300px'}}>
                    <div className='titleDiv'>
                        <h1>Login</h1>
                        <div className='line'></div>
                    </div>
                    <p style={{color:'red',textAlign:'center'}}>{data.error?data.error:''}</p>
                    <p style={{color:'red',textAlign:'center'}}>{data.error===undefined?'User does not exist':''}</p>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                            placeholder='e.g ben@example.com'
                            name='email'
                            value={email}
                            onChange={(e)=>{
                                dispatch(updateLogin(e.target.name,e.target.value))
                            }}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type='password'
                            name='password'
                            value={password}
                            onChange={(e)=>{
                                dispatch(updateLogin(e.target.name,e.target.value))
                            }}></Form.Control>
                        </Form.Group>
                    </Form>
                    <Button style={{width:'100%'}}
                    onClick={()=>{
                        dispatch(fetchLogin({
                            email:email,
                            password:password
                        }))
                    }}>Login</Button>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'0.7rem'}}>
                        <p>Don't have an account?<Link to='/signup'><strong>Signup</strong></Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
