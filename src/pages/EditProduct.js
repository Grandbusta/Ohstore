import React, {useState} from 'react';

function EditProduct() {
    const [error, serror] = useState(null);
    const [success, sSuccess] = useState(null);

    const handleSubmit = (e) => {
        serror(null);
        sSuccess(null);
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
                                            <h4 className="text-dark mb-4">Edit Product</h4>
                                            <div className="text-danger">{error}</div>
                                    <div className="text-success mb-3">{success}</div>
                                        </div>
                                        <form className="user"  
                                        onSubmit={handleSubmit}
                                         encType="multipart/form-data" 
                                         >
                                            <div className="form-group"><input className="form-control form-control-user" type="text" placeholder="Product Name" name="title" /></div>

                                            <div className="form-group"><input className="form-control form-control-user" type="text" placeholder="Product Description" name="content" /></div>
                                            <div className="form-group"><input className="form-control form-control-user" type="number" placeholder="Selling Price" name="selling_price" /></div>
                                            <div className="form-group"><input className="form-control form-control-user" type="number" placeholder="Bonus Price" name="bonus_price" /></div>
                                            {/* <div className="text">Select Image</div> */}
                                            {/* <div className="form-group"><input className="form-control form-control-user" onChange={handleFile}
                                             type="file" placeholder="Product Description" name="featured_imgurl" /></div> */}


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

export default EditProduct;