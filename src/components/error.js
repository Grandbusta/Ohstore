import React from 'react'
import errImg from '../assets/error.png'


function Error() {
    return (
        <div style={{width:'100%',display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center',color:'blue',height:'100%'}}>
            <img src={errImg} alt="" className="empty"/>
            <h2 style={{textAlign:'center'}}>An error occured</h2>
            <h4 style={{textAlign:'center'}}>Check your internet connection and refresh this page</h4>
        </div>
    )
}

export default Error