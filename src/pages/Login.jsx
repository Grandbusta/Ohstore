import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseLink, afetch } from '../components/shared';

function Login() {
  const [err, setErr] = useState(null);
  const [load, sload] = useState(false);
  const [success, sSuccess] = useState(null);
  const handleSubmit = (e) => {
    sload(true);
    setErr(null);
    e.preventDefault();
    const body = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    // console.log(body);
    afetch.post('users/login', body)
      .then((resp1) => {
        sload(false);
        if (!resp1.success) {
          setErr(resp1.message);
          return;
        }
        //  //console.log(resp)
        // eslint-disable-next-line no-undef
        localStorage.setItem('token', resp1.data.token);

        // eslint-disable-next-line no-undef
        fetch(`${baseLink}users/auth`, {
          headers: {
            // eslint-disable-next-line no-undef
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => {
            // console.log(resp);
            if (!resp.success) {
              return setErr(resp.message);
            }
            // eslint-disable-next-line no-undef
            window.location.reload();
            return sSuccess(resp1.data.message);
          })
          .catch((errs) => {
            setErr(errs.message);
            sload(false);
          });
      })
      .catch((errs) => {
        setErr(errs.message);
        sload(false);
      });
  };
  return (
    <div className="container">
      {load ? <afetch.Loader /> : (
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
                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                        <div className="text-danger">{err}</div>
                        <div className="text-success mb-3">{success}</div>

                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" /></div>
                        <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
                        <button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
                        <hr />
                      </form>
                      <div className="text-center"><Link className="small" to="/register">Create an Account!</Link></div>
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

export default Login;
