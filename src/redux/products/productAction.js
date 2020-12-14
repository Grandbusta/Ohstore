import axios from 'axios'
import {PRODUCT_FAILURE,PRODUCT_SUCCESS,PRODUCT_REQUEST} from './productTypes'

export const productRequest=()=>{
    return{
        type:PRODUCT_REQUEST
    }
}
export const productSucess=(products)=>{
    return{
        type:PRODUCT_SUCCESS,
        payload:products
    }
}
export const productFailure=(error)=>{
    return{
        type:PRODUCT_FAILURE,
        payload:error
    }
}

export const fetchProduct=()=>{
    return (dispatch)=>{
        dispatch(productRequest())
        axios.get('http://localhost:9000/products').then((res=>{
            const products=res.data.data
            dispatch(productSucess(products))
        })).catch((err)=>{
            dispatch(productFailure(err.message))
        })
    }
}

export const fetchOneProduct=(slug)=>{
    return (dispatch)=>{
        dispatch(productRequest())
        axios.get(`http://localhost:9000/products/${slug}`).then((res)=>{
            const oneProduct=res.data.data
            console.log('prowe',oneProduct)
            dispatch(productSucess(oneProduct))
        }).catch((err)=>{
            console.log(err.message)
            dispatch(productFailure(err.message))
        })
    }
}