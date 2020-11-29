/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', width: '350px', boxShadow: '0rem 0.1rem 0.9rem rgb(224, 224, 224)', borderRadius: '2rem', padding: '0.5rem 0.5rem 1rem 0.5rem',
    }}
    >
      <div>
        <div style={{
          backgroundImage: `url(${product.imageUrl})`, backgroundSize: 'cover', width: '100%', height: '250px', borderRadius: '2rem', backgroundRepeat: 'no-repeat',
        }}
        >
          {/* <Button variant='warning' style={{
          borderRadius:'2rem 0rem 0rem 0rem',color:'white',opacity:'1'}} disabled>
                        {product.tag}
                    </Button> */}
        </div>
        <h5 style={{ marginTop: '1rem' }}>
          {' '}
          <Link to={`/p/${product.link}`}>{product.name}</Link>
        </h5>
        {/* <p>{product.category}</p> */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
            <h4>{product.discountPrice}</h4>
            <strike>{product.originalPrice}</strike>
          </div>
          <Link to={`/p/${product.link}`} variant="primary" size="sm" style={{ borderRadius: '1rem' }}>View</Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
