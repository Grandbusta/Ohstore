import {UPDATE_DETAILS,ORDER_PLACING,ORDER_SUCCESS,ORDER_FAILURE} from './checkoutTypes'

const initstate={
    email:'',
    firstname:'',
    lastname:'',
    phone1:'',
    address1:'',
    city:'',
    state:'',
}

export const checkoutReducer=(state=initstate,action)=>{
    if(action.type===UPDATE_DETAILS){
        const {name,value}=action.payload
        return{
            ...state,
            [name]:value
        }
    }
    return state
}

const orderInitState={
    loading:false,
    success:false,
    error:''
}

export const orderReducer=(state=orderInitState,action)=>{
    if(action.type===ORDER_PLACING){
        return{
            ...state,
            loading:true,
            success:false,
            error:''
        }
    }
    if(action.type===ORDER_SUCCESS){
        return{
            ...state,
            loading:false,
            success:true,
            error:''
        }
    }
    if(action.type===ORDER_FAILURE){
        return{
            ...state,
            loading:false,
            error:action.payload,
            success:false,
        }
    }
    return state
}