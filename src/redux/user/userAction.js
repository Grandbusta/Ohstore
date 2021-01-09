import axios from 'axios'
import {
        UPDATE_LOGIN_DETAILS,
        LOGIN_FAILURE,
        LOGIN_REQUEST,
        LOGIN_SUCCESS,
        UPDATE_SIGNUP_DETAILS,
        SIGNUP_REQUEST,
        SIGNUP_SUCCESS,
        SIGNUP_FAILURE
    } from './userTypes'

export const updateLogin=(name,value)=>{
    return{
        type:UPDATE_LOGIN_DETAILS,
        payload:{name,value}
    }
}


export const loginRequest=()=>{
    return{
        type:LOGIN_REQUEST,
    }
}

export const loginSuccess=(data)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:data
    }
}

export const loginFailure=(error)=>{
    return{
        type:LOGIN_FAILURE,
        payload:error
    }
}


export const updateSignup=(name,value)=>{
    return{
        type:UPDATE_SIGNUP_DETAILS,
        payload:{name,value}
    }
}

export const signupRequest=(data)=>{
    return{
        type:SIGNUP_REQUEST,
        payload:data
    }
}

export const signupSuccess=()=>{
    return{
        type:SIGNUP_SUCCESS
    }
}

export const signupFailure=(error)=>{
    return{
        type:SIGNUP_FAILURE,
        payload:error
    }
}

export const fetchSignUp=(data)=>{
    return (dispatch)=>{
        dispatch(signupRequest())
        axios.post('https://ohstore.herokuapp.com/users/signup',{
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            password:data.password
        }).then((res)=>{
            dispatch(signupSuccess())
            window.location.reload()
        }).catch((err)=>{
            dispatch(signupFailure(err.response.data.message))
        })
    }
}

export const fetchLogin=(data)=>{
    return (dispatch)=>{
        dispatch(loginRequest())
        axios.post('https://ohstore.herokuapp.com/users/login',{
            email:data.email,
            password:data.password
        }).then((res)=>{
            dispatch(loginSuccess(res.data.token))
        }).catch((err)=>{
            console.log(err)
            dispatch(loginFailure(err.response.data.message))
        })
    }
}