import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchProduct} from '../redux/products/productAction'
import Loading from '../components/loading'
import Shop from '../components/shop'


function Shoppage() {
    const products=useSelector(state=>state.product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct())
    },[])
    return (
        products.loading?<Loading/>:products.error?<div><h1>error occured</h1></div>:
        <div>
            <Shop title='Shop' products={products.products}/>
        </div>
    )
}

export default Shoppage
