import React from 'react'
import Img from '../assets/smallchops.jpg'
import {Button,Form} from 'react-bootstrap'

function Cartitem() {
    return (
            <tr>
                <td><img src={Img} alt="" style={{width:'100px',height:'100px',borderRadius:'1rem'}}/></td>
                <td>
                    <h6>
                        Swiss Made Vegetable Cutting Knife
                    </h6>
                </td>
                <td>$50</td>
                <td style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{display:'flex',marginTop:'1.9rem'}}>
                    <Button variant='outline-secondary'>-</Button>
                    <Form.Control value='1' style={{width:'2rem'}}></Form.Control>
                    <Button variant='outline-secondary'>+</Button>
                    </div>
                </td>
                <td>$250</td>
                <td><Button variant='danger'>Remove</Button></td>
            </tr>
    )
}

export default Cartitem
