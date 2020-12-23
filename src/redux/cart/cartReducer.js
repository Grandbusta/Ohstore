import {ADD_TO_CART,REMOVE_FROM_CART,INCREASE_CART_ITEM,DECREASE_CART_ITEM} from './cartTypes'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return {
        cart:[],
        totalQty:0,
        totalAmount:(0).toFixed(2)
    }
  }
}

const initState=getLocalStorage()


const reducer=(state=initState,action)=>{
    if(action.type===ADD_TO_CART){
      const {id,title,slug,featured_imgurl,bonus_price}= action.payload
      const exist=state.cart.find((item)=>{return item.id===id})
      if(exist){
          const tempCart=state.cart.map((item)=>{
              if(item.id===id){
                  let newQty=item.quantity+1
                return {...item,quantity:newQty}
              }else{
                return item
            }
          })
          let totalAmount=0
          let totalQty=0
          tempCart.forEach((cartItem)=>{
            const eachTotal=cartItem.price*cartItem.quantity
            totalAmount+=eachTotal
            totalQty+=cartItem.quantity

          })
          return {...state,cart:tempCart,totalAmount:totalAmount.toFixed(2),totalQty}
      }else{
          const newCart=[...state.cart,{id,title,slug,featured_imgurl,price:bonus_price,quantity:1}]
            let totalAmount=0
            let totalQty=0
            newCart.forEach((cartItem)=>{
                const eachTotal=cartItem.price*cartItem.quantity
                totalAmount+=eachTotal
                totalQty+=cartItem.quantity
            })
          return {
              ...state,
              cart:newCart,
              totalQty,
              totalAmount:totalAmount.toFixed(2)
            }
      }
    }
    if(action.type===REMOVE_FROM_CART){
        const tempCart=state.cart.filter((item)=>{
            return item.id !==action.payload
        })
          let totalAmount=0
          let totalQty=0
          tempCart.forEach((cartItem)=>{
            const eachTotal=cartItem.price*cartItem.quantity
            totalAmount+=eachTotal
            totalQty+=cartItem.quantity

          })
        return {cart:tempCart,totalAmount:totalAmount.toFixed(2),totalQty}
    }
    if(action.type===INCREASE_CART_ITEM){
      const exist=state.cart.find((item)=>{return item.id===action.payload})
      if(exist){
          const tempCart=state.cart.map((item)=>{
              if(item.id===action.payload){
                  let newQty=item.quantity+1
                return {...item,quantity:newQty}
              }else{
                return item
            }
          })
          let totalAmount=0
          let totalQty=0
          tempCart.forEach((cartItem)=>{
            const eachTotal=cartItem.price*cartItem.quantity
            totalAmount+=eachTotal
            totalQty+=cartItem.quantity

          })
          return {...state,cart:tempCart,totalAmount:totalAmount.toFixed(2),totalQty}
      }
    }
    if(action.type===DECREASE_CART_ITEM){
      const exist=state.cart.find((item)=>{return item.id===action.payload})
      if(exist.quantity>1){
        if(exist){
            const tempCart=state.cart.map((item)=>{
                if(item.id===action.payload){
                    let newQty=item.quantity-1
                  return {...item,quantity:newQty}
                }else{
                  return item
              }
            })
            let totalAmount=0
            let totalQty=0
            tempCart.forEach((cartItem)=>{
              const eachTotal=cartItem.price*cartItem.quantity
              totalAmount+=eachTotal
              totalQty+=cartItem.quantity
  
            })
            return {...state,cart:tempCart,totalAmount:totalAmount.toFixed(2),totalQty}
        }
      }
    }
    return state
}
export default reducer