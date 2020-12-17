import {ADD_TO_CART,REMOVE_FROM_CART,DECREASE_CART_ITEM,INCREASE_CART_ITEM,EMPTY_CART} from './cartTypes'

export const addToCart=(product)=>{
    return{
        type:ADD_TO_CART,
        payload:product
    }
}

export const removeFromCart=()=>{
    return{
        type:REMOVE_FROM_CART
    }
}

export const increaseCartItem=()=>{
    return{
        type:INCREASE_CART_ITEM
    }
}

export const decreaseCartItem=()=>{
    return{
        type:DECREASE_CART_ITEM
    }
}

export const emptyCart=()=>{
    return{
        type:EMPTY_CART
    }
}