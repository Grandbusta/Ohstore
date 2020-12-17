import {ADD_TO_CART,REMOVE_FROM_CART,INCREASE_CART_ITEM,DECREASE_CART_ITEM,EMPTY_CART} from './cartTypes'

const initState={
    cart:[],
    total:''
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            console.log(action.payload)
            return{
                ...state,
                cart:[action.payload],
                // total:()=>{
                //     const adds=0
                //     state.cart.map((item)=>{adds+=item.bonus_price})
                //     console.log(adds)
                //     return `${adds}`
                // }
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((item)=>{
                    return action.payload.id !==item.id
                })
            }
        case INCREASE_CART_ITEM:
            return{
                ...state,
            }
        default:return state
    } 
}
export default reducer