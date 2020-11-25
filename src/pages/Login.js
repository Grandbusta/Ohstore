import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import {baseLink, afetch} from '../components/shared';


function Login() {
    const [err, setErr] = useState(null);
    const handleSubmit = (e) => {
        setErr(null);
        e.preventDefault();
        const body = {
            email: e.target.elements["email"].value,
            password: e.target.elements["password"].value,
        };
        console.log(body);
        afetch.post('users/login', body)
        .then((resp) => {
            if (!resp.success) {
                return setErr(resp.message)
            }
            console.log(resp)
            window.localStorage.setItem("token", resp.data.token);

            fetch(baseLink + 'users/auth', {
                headers: {
                    "Authorization":"Bearer "  + window.localStorage.getItem("token")
                }
            })
            .then((resp) => {
                console.log(resp)
                return resp.json()
            })
            .then((resp) => {
                console.log(resp)
                if (!resp.success) {
                    return setErr(resp.message)
                }
                window.location.reload();
                
            })
        })
    }
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-flex">
                                <div className="flex-grow-1 bg-login-image" style={{backgroundImage: "url(../dessert4.jpg)"}}></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                                        <div className="text-danger">{err}</div>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit}>
                                        <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" /></div>
                                        <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
                                        <div className="form-group">
                                            {/* <div className="custom-control custom-checkbox small">
                                                <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label className="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                            </div> */}
                                        </div><button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
                                        <hr />
                                        {/* <a className="btn btn-primary btn-block text-white btn-google btn-user" role="button"><i className="fab fa-google"></i>  Login with Google</a><a className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i className="fab fa-facebook-f"></i>  Login with Facebook</a> */}
                                        {/* <hr
                                        /> */}
                                    </form>
                                    {/* <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div> */}
                                    <div className="text-center"><Link className="small" to="/register">Create an Account!</Link></div>
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

export default Login