import {combineReducers} from 'redux'
import productReducer from './products/productReducer'
import singleProduct from './products/oneProductReducer'
import cartReducer from './cart/cartReducer'
import {checkoutReducer,orderReducer} from './checkout/checkoutReducer'
import {SignupDetailsReducer,SignupReducer,LoginDetailsReducer,LoginReducer} from './user/userReducer'

const rootReducer=combineReducers({
    product:productReducer,
    singleProduct:singleProduct,
    cart:cartReducer,
    checkout:checkoutReducer,
    order:orderReducer,
    SignupDetails:SignupDetailsReducer,
    Signup:SignupReducer,
    LoginDetails:LoginDetailsReducer,
    Login:LoginReducer
})

export default rootReducer