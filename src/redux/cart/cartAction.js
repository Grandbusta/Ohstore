import {ADD_TO_CART,REMOVE_FROM_CART,DECREASE_CART_ITEM,INCREASE_CART_ITEM} from './cartTypes'

export const addToCart=(product)=>{
    return{
        type:ADD_TO_CART,
        payload:product
    }
}

export const removeFromCart=(id)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:id
    }
}

export const increaseCartItem=(id)=>{
    return{
        type:INCREASE_CART_ITEM,
        payload:id
    }
}

export const decreaseCartItem=(id)=>{
    return{
        type:DECREASE_CART_ITEM,
        payload:id
    }
}
