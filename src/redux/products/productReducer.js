import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE } from "./productTypes"

const initState={
    loading:true,
    products:[],
    error:''
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
                products:action.payload
            }
        case PRODUCT_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:return state
    } 
}
export default reducer