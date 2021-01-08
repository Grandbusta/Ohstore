import axios from 'axios'
const ONE_PRODUCT_REQUEST='ONE_PRODUCT_REQUEST'
const ONE_PRODUCT_SUCCESS='ONE_PRODUCT_SUCCESS'
const ONE_PRODUCT_FAILURE='ONE_PRODUCT_FAILURE'

export const oneProductRequest=()=>{
    return{
        type:ONE_PRODUCT_REQUEST
    }
}
export const oneProductSucess=(product)=>{
    return{
        type:ONE_PRODUCT_SUCCESS,
        payload:product
    }
}
export const oneProductFailure=(error)=>{
    return{
        type:ONE_PRODUCT_FAILURE,
        payload:error
    }
}


export const fetchOneProduct=(slug)=>{
    return (dispatch)=>{
        dispatch(oneProductRequest())
        axios.get(`https://ohstore.herokuapp.com/products/${slug}`).then((res)=>{
            const oneProduct=res.data.data
            dispatch(oneProductSucess(oneProduct))
        }).catch((err)=>{
            dispatch(oneProductFailure(err.message))
        })
    }
}