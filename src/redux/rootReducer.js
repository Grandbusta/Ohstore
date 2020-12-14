import {combineReducers} from 'redux'
import productReducer from './products/productReducer'

const rootReducer=combineReducers({
    product:productReducer
})

export default rootReducer