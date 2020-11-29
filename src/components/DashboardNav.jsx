/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import AdminPro from './AdminProduct';

function DNav({ details, products }) {
  if (!details.admin) {
    // eslint-disable-next-line no-param-reassign
    products = products.filter((p) => `${details.firstName} ${details.lastName}` === p.user);
  }
  return (
    <>
      <div className="container">
        <div className="jumbotron jumbotron-fluid text-monospace text-capitalize text-center text-sm-center text-md-center text-lg-center text-xl-center text-info">
          <h1>
            Welcome
            {`${details.firstName} ${details.lastName}`}
          </h1>
          <p />
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-success">Dashboard</h1>
              <Link to="/dashboard/add" className="btn btn-primary btn-center text-center text-white">Add Product</Link>
            </div>
          </div>
        </div>
      </div>
      <AdminPro title={details.admin ? 'All Products' : 'My Added Products'} admin={details.admin} products={products} />
    </>
  );
}

export default DNav;
