const ONE_PRODUCT_REQUEST='ONE_PRODUCT_REQUEST'
const ONE_PRODUCT_SUCCESS='ONE_PRODUCT_SUCCESS'
const ONE_PRODUCT_FAILURE='ONE_PRODUCT_FAILURE'

const initState={
    loading:true,
    oneproduct:{},
    error:''
}

const onereducer=(state=initState,action)=>{
    switch(action.type){
        case ONE_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case ONE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
                oneproduct:action.payload
            }
        case ONE_PRODUCT_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:return state
    } 
}
export default onereducer