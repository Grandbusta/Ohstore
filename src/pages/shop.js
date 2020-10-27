import React from 'react'
import Product from '../components/product'


function Shop() {
    return (
        <div style={{width:'100%',margin:'auto',marginTop:'2rem',marginBottom:'6rem'}}>
            <div style={{marginBottom:'4rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h1 style={{fontWeight:'bold',}}>Shop</h1>
                <div style={{backgroundColor:'#49a6e9',width:'6rem',height:'0.25rem',margin:'auto'}}></div>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'3rem',flexWrap:'wrap',width:'100%'}}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default Shop
