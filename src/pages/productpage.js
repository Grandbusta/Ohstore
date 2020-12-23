import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Review from '../components/review'
import {useParams,Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {fetchOneProduct} from '../redux'
import {addToCart} from '../redux'
import Loading from '../components/loading'

function Product() {
    const {name}=useParams()
    const data=useSelector(state=>state.singleProduct)
    const products=data.oneproduct
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchOneProduct(name))
    },[])
    return (
        data.loading?<Loading/>:data.error?<div><h1>error occured</h1></div>:
        <div>
            <div className='detailsDiv'>
            <div className='prodetDiv'>
                <div className='prodetImgDiv'>
                    <div style={{backgroundImage:`url(${products.featured_imgurl})`}} className='productImg'>
                    </div>
                    <div className='proImgs'>
                        {
                            products.product_images.map((image)=>{
                                return <div style={{backgroundImage:`url(${image.imageurl})`}} className='proImg' key={image.id}></div>
                            })
                        }
                    </div>
                </div>
                <div className='proContentDiv'>
                    <h1>{products.title}</h1>
                    <p>BY <strong>KC Company</strong></p>
                    <div style={{display:'flex',alignItems:'center'}}>
                    <Button variant='outline-primary' size='lg' style={{opacity:'1'}} disabled>{`$${products.bonus_price}`}</Button>
                        <div style={{marginLeft:'1rem'}}>
                        <strong style={{color:'green'}}>Save 12%</strong>
                        <p>Inclusive of all taxes</p>                         
                        </div>
                    </div>
                    <p>
                       {products.content}
                    </p>
                    <div>
                        <Link to='/cart'>
                            <Button 
                            variant='primary' 
                            size='m' 
                            onClick={()=>{dispatch(addToCart(products))}}>
                                Add to Cart
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Start of review */}
        <div className='revSect'>
            <div className='titleDiv'>
                <h1>Reviews</h1>
                <div className='line'></div>
            </div>
            <div className='allrev'>
            <div className='allrevDiv'>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </div>
            </div>
            <div style={{margin:'auto',marginTop:'3rem'}}>
                <Button variant='primary'> Show More </Button>
            </div>
        </div>
        {/* End of review */}
        </div>
    )
}

export default Product
