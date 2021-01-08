import axios from 'axios'
import {
    UPDATE_DETAILS,
    ORDER_PLACING,
    ORDER_SUCCESS,
    ORDER_FAILURE
} from './checkoutTypes'

export const updateDetails=(name,value)=>{
    return{
        type:UPDATE_DETAILS,
        payload:{name,value}
    }
}
export const orderPlace=()=>{
    return{
        type:ORDER_PLACING
    }
}
export const orderSuccess=()=>{
    return{
        type:ORDER_SUCCESS,
    }
}
export const orderFailure=(error)=>{
    return{
        type:ORDER_FAILURE,
        payload:error
    }
}

export const placeOrder=(products,details,token)=>{
    return(dispatch)=>{
        dispatch(orderPlace())
        const {email,firstname,lastname,phone1,address1,city,state}=details
        axios.post('https://ohstore.herokuapp.com/orders',{
            products:products,
            email:email,
            firstname:firstname,
            lastname:lastname,
            phone1:phone1,
            address1:address1,
            city:city,
            state:state,
        },{
            headers:{
                authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            localStorage.removeItem('cart')
            dispatch(orderSuccess())
            window.location.reload()
        }).catch((err)=>{
            dispatch(orderFailure(err.response.data.message))
        })
    }
}