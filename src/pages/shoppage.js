import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchProduct} from '../redux/products/productAction'
import Loading from '../components/loading'
import Shop from '../components/shop'
import Err from '../components/error'


function Shoppage() {
    const products=useSelector(state=>state.product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct())
    },[])
    return (
        products.loading?<Loading/>:products.error?<Err/>:
        <div>
            <Shop title='Shop' products={products.products}/>
        </div>
    )
}

export default Shoppage
