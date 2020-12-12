import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'


function Admin() {
    const [files,setFiles]=useState(null)
    const change=(e)=>{
        setFiles(e.target.files[0])
    }
    // const sub=()=>{
    //     console.log(files)
    // }
    console.log(files)
    return (
        <div className='adminDiv'>
            <div className='procontentDiv'>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type='text' placeholder='Title goes here'/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={6} cols={6} />
                    </Form.Group>
                </Form>
            </div>
            <div className='prodetDiv'>
                <Button>Publish</Button>
                    <Form.Group>
                        <Form.File onChange={change} label="Upload Product image" />
                        <Button >Submit</Button>
                    </Form.Group>
            </div>
        </div>
    )
}

export default Admin
