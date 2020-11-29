import React, { useRef, useState } from 'react';
import { afetch } from '../components/shared';

function AddProduct() {
  const [error, serror] = useState(null);
  const [success, sSuccess] = useState(null);
  const [load, sload] = useState(false);
  const fref = useRef();
  const [file, sfile] = useState({});
  const handleFile = (event) => {
    sfile(event.target.files[0]);
  };
  const handleSubmit = (e) => {
    sload(true);
    e.preventDefault();
    serror(null);
    sSuccess(null);
    // console.log(e.target.files, fref.current.files);
    const body = {
      title: e.target.elements.title.value,
      content: e.target.elements.content.value,
      featured_imgurl: file,
      selling_price: e.target.elements.selling_price.value,
      bonus_price: e.target.elements.bonus_price.value,
    };
    // eslint-disable-next-line no-undef
    const data = new FormData();
    data.append('propertyImages', file);
    data.append('title', body.title);
    data.append('content', body.content);
    data.append('selling_price', body.selling_price);
    data.append('bonus_price', body.bonus_price);
    afetch.postf('products/add', data)
      .then((res) => {
        sload(false);
        if (!res.success) {
          // console.log(fref.current.elements[0])
          if (typeof res.message === 'object') {
            return serror('Error In Connection');
          }
          return serror(res.message.toString());
        }
        const theref = fref.current.elements;
        // Array(fref.current.elements).map(e =>
        //     e.value = "")
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < theref.length; i++) {
          // console.log(theref[i].value)
          theref[i].value = '';
        }

        // eslint-disable-next-line no-undef
        window.location.reload();
        return sSuccess(res.data.message.toString());
      });
  };

  return (
    <div className="container">
      { load ? <afetch.Loader /> : (
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div className="flex-grow-1 bg-login-image" style={{ backgroundImage: 'url(../dessert4.jpg)' }} />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Add Product</h4>
                        <div className="text-danger">{error}</div>
                        <div className="text-success mb-3">{success}</div>
                      </div>
                      <form
                        className="user"
                        ref={fref}
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                      >
                        <div className="form-group"><input className="form-control form-control-user" type="text" placeholder="Product Name" name="title" required /></div>

                        <div className="form-group"><input className="form-control form-control-user" type="text" placeholder="Product Description" name="content" required /></div>
                        <div className="form-group"><input className="form-control form-control-user" type="number" placeholder="Selling Price" name="selling_price" required /></div>
                        <div className="form-group"><input className="form-control form-control-user" type="number" placeholder="Bonus Price" name="bonus_price" required /></div>
                        <div className="text">Select Image</div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            onChange={handleFile}
                            type="file"
                            placeholder="Product Description"
                            name="featured_imgurl"
                            required
                          />
                        </div>
                        <button className="btn btn-primary btn-block text-white btn-user" type="submit">Add</button>
                        <hr />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
