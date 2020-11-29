/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap'
// import { FaShoppingCart } from 'react-icons/fa'
// import { FiSearch } from 'react-icons/fi'
// import Avi from '../assets/avi.png'

function Navs({ auth }) {
  return (
    <div className="container bg-light shadow">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // padding: '1rem 2rem'
        }}
        className="p-2"
      >
        <div style={{
          display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <h5><Link to="/">Micheal Store</Link></h5>
        </div>
        <div>

          <ul style={{
            textDecoration: 'none', listStyle: 'none', display: 'flex', gap: '2rem',
          }}
          >
            <li className="mr-2"><Link to="/">Home</Link></li>
            <li className="mr-2">{ auth ? <Link to="/dashboard">Dashboard</Link> : <Link to="/register">Sign Up</Link>}</li>
            <li>
              { auth ? (
                <a
                  href="/"
                  onClick={() => {
                    // eslint-disable-next-line no-undef
                    window.localStorage.removeItem('token');
                  }}
                >
                  Log Out
                </a>
              ) : <Link to="/login">Login</Link>}
            </li>
            {/* <li><Link to="/register">Register</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navs;
