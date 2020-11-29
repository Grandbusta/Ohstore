import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { afetch } from '../components/shared';

function Register() {
  const [error, serror] = useState(null);
  const [load, sload] = useState(false);
  const [success, sSuccess] = useState(null);
  const fref = useRef();
  const handleSubmit = (e) => {
    sload(true);
    e.preventDefault();
    const body = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      phone: e.target.elements.phone.value,
      password: e.target.elements.password.value,
      email: e.target.elements.email.value,
    };
    // console.log(body);
    afetch.post('users/register', body)
      .then((res) => {
        sload(false);
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
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < theref.length; i++) {
          // console.log(theref[i].value)
          theref[i].value = '';
        }
        return sSuccess(res.data.message);
      })
      .catch((err) => {
        serror(err.message);
        sload(false);
      });
  };
  return (
    <div className="container">
      {load ? <afetch.Loader /> : (
        <div className="card shadow-lg o-hidden border-0 my-5">
          <div className="card-body p-0">
            <div className="row">

              <div className="col-lg-5 d-none d-lg-flex">
                <div className="flex-grow-1 bg-register-image" style={{ backgroundImage: 'url(../dessert4.jpg)' }} />
              </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-3">Create an Account!</h4>
                    <div className="text-danger">{error}</div>
                    <div className="text-success mb-3">{success}</div>
                  </div>
                  <form className="user" ref={fref} onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name" name="firstName" required /></div>
                      <div className="col-sm-6"><input className="form-control form-control-user" type="text" id="exampleLastName" placeholder="Last Name" name="lastName" /></div>
                    </div>
                    <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" required /></div>
                    <div className="form-group"><input className="form-control form-control-user" type="number" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="Phone Number" name="phone" required /></div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" required /></div>
                    </div>
                    <button className="btn btn-primary btn-block text-white btn-user" required type="submit">Register Account</button>
                    <hr />
                  </form>
                  <div className="text-center"><Link className="small" to="/login">Already have an account? Login!</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
