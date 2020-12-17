import {combineReducers} from 'redux'
import productReducer from './products/productReducer'
import singleProduct from './products/oneProductReducer'
import cartReducer from './cart/cartReducer'

const rootReducer=combineReducers({
    product:productReducer,
    singleProduct:singleProduct,
    cart:cartReducer
})

export default rootReducer