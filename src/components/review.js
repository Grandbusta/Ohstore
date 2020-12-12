import React from 'react'
import {Button,Image} from 'react-bootstrap'
import Avi from '../assets/avi.png'

function Review() {
    return (
        <div className='reviewDiv'>
            <div className='revContDiv'>
                <section className='revDrop'>
                    <div>
                        <Image src={Avi} className='revImg'></Image>
                        <strong className='revName'>Alex Parkinson</strong>
                    </div>
                    <div>
                        <Button variant='warning'>4/5</Button>
                    </div>
                </section>
                <section className='revCont'>
                    <h6>Good blade for precise cutting</h6>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus maxime sequi labore laudantium numquam.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Review
