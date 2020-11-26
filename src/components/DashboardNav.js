import React from 'react';
import {Link} from 'react-router-dom'
function DNav(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="jumbotron jumbotron-fluid text-monospace text-capitalize text-center text-sm-center text-md-center text-lg-center text-xl-center text-info">
                    <h1>Welcome {props.details.firstName}</h1>
                    <p></p>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">Products</h1>
                            <button className="btn btn-primary btn-center text-center text-white">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card bg-white border-success"><img className="card-img-top w-100 d-block" alt="img" />
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button" style={{paddingRight: 0}}>VIEW</button>
                                    <button
                                        className="btn btn-warning" type="button" style={{padding: 6 + "px"}}>UPDATE</button><button className="btn btn-danger" type="button">DELETE</button></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-white border-success"><img className="card-img-top w-100 d-block"  alt="img"/>
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">VIEW</button>
                                    <button
                                        className="btn btn-warning" type="button">UPDATE</button><button className="btn btn-danger" type="button">DELETE</button></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-white border-success"><img className="card-img-top w-100 d-block" alt="alt" />
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">VIEW</button>
                                    <button
                                        className="btn btn-warning" type="button">UPDATE</button><button className="btn btn-danger" type="button">DELETE</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DNav;