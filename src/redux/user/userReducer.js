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

const LoginDetailState={
    email:'',
    password:''
}


const getLocalStorage = () => {
  let token = localStorage.getItem('token')
  if (token) {
    return JSON.parse(localStorage.getItem('token'))
  } else {
    return ''
  }
}

const LoginInitstate={
    loading:false,
    error:'',
    token:getLocalStorage()
}

const SignupDetailsState={
    firstname:'',
    lastname:'',
    email:'',
    password:''
}

const SignupInitState={
    loading:false,
    error:'',
    success:false,
}


export const LoginDetailsReducer=(state=LoginDetailState,action)=>{
    if(action.type===UPDATE_LOGIN_DETAILS){
        const {name,value}=action.payload
        return{
            ...state,
            [name]:value
        }
    }
    return state
}

export const LoginReducer=(state=LoginInitstate,action)=>{
    if(action.type===LOGIN_REQUEST){
        return {
            ...state,
            loading:true,
            error:'',
            token:''
        }
    }
    if(action.type===LOGIN_SUCCESS){
        return{
            ...state,
            loading:false,
            token:action.payload,
            error:''
        }
    }
    if(action.type===LOGIN_FAILURE){
        return{
            ...state,
            loading:false,
            token:'',
            error:action.payload
        }
    }
    return state
}

export const SignupDetailsReducer=(state=SignupDetailsState,action)=>{
    if(action.type===UPDATE_SIGNUP_DETAILS){
        const {name,value}=action.payload
        return{
            ...state,
            [name]:value
        }
    }
    return state
}

export const SignupReducer=(state=SignupInitState,action)=>{
    if(action.type===SIGNUP_REQUEST){
        return{
            ...state,
            success:false,
            loading:true,
            error:''
        }
    }
    if(action.type===SIGNUP_SUCCESS){
        return{
            ...state,
            error:'',
            loading:false,
            success:true
        }
    }
    if(action.type===SIGNUP_FAILURE){
        return{
            ...state,
            loading:false,
            success:false,
            error:action.payload
        }
    }
    return state
}