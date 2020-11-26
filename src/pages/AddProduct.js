import React, { useRef, useState } from 'react';
import {afetch} from '../components/shared';

function AddProduct() {
    const [error, serror] = useState(null);
    const [success, sSuccess] = useState(null);
    const fref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.files, fref.current.files);
        const body = {
            title: e.target.elements["title"].value,
            content: e.target.elements["content"].value,
            featured_imgurl: e.target.elements["featured_imgurl"].value,
            selling_price: e.target.elements["selling_price"].value,
            bonus_price: e.target.elements["bonus_price"].value
        }
        console.log(body);
        afetch.postf('products/add', new FormData(fref.current))
        .then((res) => {
            // console.log(res);
            if (!res.success) {
                // console.log(fref.current.elements[0])
                sSuccess(null);
               return serror(res.message);
            }
            serror(null);
            let theref = fref.current.elements
            // Array(fref.current.elements).map(e => 
            //     e.value = "")
            for (let i = 0; i < theref.length; i++ ) {
                // console.log(theref[i].value)
                theref[i].value = ""
            }
           return sSuccess(res.data.message);
        });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-12 col-xl-10">
                    <div className="card shadow-lg o-hidden border-0 my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-flex">
                                    <div className="flex-grow-1 bg-login-image" style={{ backgroundImage: "url(../dessert4.jpg)" }}></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h4 className="text-dark mb-4">Add Product</h4>
                                            <div className="text-danger">{error}</div>
                                    <div className="text-success mb-3">{success}</div>
                                        </div>
                                        <form className="user" ref={fref} onSubmit={handleSubmit} encType="multipart/form-data">
                                            <div className="form-group"><input className="form-control form-control-user" type="text" placeholder="Product Name" name="title" /></div>

                                            <div className="form-group"><input className="form-control form-control-user" type="text" placeholder="Product Description" name="content" /></div>
                                            <div className="form-group"><input className="form-control form-control-user" type="number" placeholder="Selling Price" name="selling_price" /></div>
                                            <div className="form-group"><input className="form-control form-control-user" type="number" placeholder="Bonus Price" name="bonus_price" /></div>
                                            <div className="text">Select Image</div>
                                            <div className="form-group"><input className="form-control form-control-user" type="file" placeholder="Product Description" name="featured_imgurl" /></div>


                                            <div className="form-group">
                                                {/* <div className="custom-control custom-checkbox small">
                                                <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label className="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                            </div> */}
                                            </div><button className="btn btn-primary btn-block text-white btn-user" type="submit">Add</button>
                                            <hr />
                                            {/* <a className="btn btn-primary btn-block text-white btn-google btn-user" role="button"><i className="fab fa-google"></i>  Login with Google</a><a className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i className="fab fa-facebook-f"></i>  Login with Facebook</a> */}
                                            {/* <hr
                                        /> */}
                                        </form>
                                        {/* <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;