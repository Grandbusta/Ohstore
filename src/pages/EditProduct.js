import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { afetch } from '../components/shared';
import Notfound from '../components/404';

function EditProduct({ products }) {
  const [error, serror] = useState(null);
  const [success, sSuccess] = useState(null);
  const fref = useRef();

  const { prolink } = useParams();
  // console.log(prolink)
  let product = products.filter((product) => product.link === prolink);
  product = product[0];
  if (!product) {
    return <Notfound />;
  }
  // console.log(product)
  const handleSubmit = (e) => {
    serror(null);
    sSuccess(null);
    e.preventDefault();
    const body = {
      title: e.target.elements.title.value,
      content: e.target.elements.content.value,
      selling_price: e.target.elements.selling_price.value,
      bonus_price: e.target.elements.bonus_price.value,
    };
    console.log(body);
    afetch.put(`products/edit/${prolink}`, body)
      .then((res) => {
        // console.log(res);
        if (!res.success) {
          // console.log(fref.current.elements[0])
          sSuccess(null);
          return serror(res.message);
        }
        serror(null);
        const theref = fref.current.elements;
        // Array(fref.current.elements).map(e =>
        //     e.value = "")
        for (let i = 0; i < theref.length; i++) {
          // console.log(theref[i].value)
          theref[i].value = '';
        }
        sSuccess(`${res.data.message} Refreshing...`);
        return window.location.reload();
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-flex">
                  <div className="flex-grow-1 bg-login-image" style={{ backgroundImage: `url(${product.imageUrl})`, backgroundRepeat: 'cover' }} />
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h4 className="text-dark mb-4">Edit Product</h4>
                      <div className="text-danger">{error}</div>
                      <div className="text-success mb-3">{success}</div>
                    </div>
                    <form
                      className="user"
                      onSubmit={handleSubmit}
                      encType="multipart/form-data"
                      ref={fref}
                    >
                      <div className="form-group">
                        <input
                          className="form-control form-control-user"
                          type="text"
                          placeholder={`Current Product Name: ${product.name}`}
                          name="title"
                          required
                        />
                      </div>

                      <div className="form-group"><input className="form-control form-control-user" type="text" placeholder={`Current Product Description: ${product.content}`} name="content" required /></div>
                      <div className="form-group"><input className="form-control form-control-user" type="number" placeholder={`Current Original Price: ${product.originalPrice}`} name="selling_price" required /></div>
                      <div className="form-group"><input className="form-control form-control-user" type="number" placeholder={`Current Discount Price: ${product.discountPrice}`} name="bonus_price" required /></div>
                      {/* <div className="text">Select Image</div> */}
                      {/* <div className="form-group"><input className="form-control form-control-user" onChange={handleFile}
                                             type="file" placeholder="Product Description" name="featured_imgurl" /></div> */}

                      <div className="form-group">
                        {/* <div className="custom-control custom-checkbox small">
                                                <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label className="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                            </div> */}
                      </div>
                      <button className="btn btn-primary btn-block text-white btn-user" type="submit">Edit</button>
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
  );
}

export default EditProduct;
