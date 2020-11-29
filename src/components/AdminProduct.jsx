/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { afetch } from './shared';

function AdminPro({ title, products, admin }) {
  return (
    <div style={{
      width: '100%', margin: 'auto', marginTop: '2rem', marginBottom: '6rem',
    }}
    >
      <div style={{
        marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        <h1 style={{ fontWeight: 'bold' }}>{title}</h1>
        <div style={{
          backgroundColor: '#49a6e9', width: '6rem', height: '0.25rem', margin: 'auto',
        }}
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', width: '100%',
      }}
      >
        {
      products.map((product) => <Pro admin={admin} product={product} key={product.id} />)
                }
      </div>
    </div>
  );
}

function Pro({ product, admin }) {
  // console.log(product)
  const { link } = product;
  const handleDelete = async () => {
    // eslint-disable-next-line no-undef
    if (window.confirm('Do you really want to delete this product? Press Ok to proceed')) {
      const del = await afetch.delete(`products/delete/${link}`);
      if (del.success) {
        // eslint-disable-next-line no-undef
        alert(del.data.message);
        // eslint-disable-next-line no-undef
        return window.location.reload();
      }
      // eslint-disable-next-line no-undef
      return alert('Error Occured While Deleting!');
    }
    return null;
  };
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
          {/* <Button variant='warning'
          style={{borderRadius:'2rem 0rem 0rem 0rem',color:'white',opacity:'1'}} disabled>
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
        <Link
          to={`/dashboard/edit/${product.link}`}
          className="btn btn-warning"
          type="button"
          style={{ padding: `${6}px`, display: admin ? '' : 'none' }}
        >
          UPDATE
        </Link>
        <button style={{ display: admin ? '' : 'none' }} onClick={handleDelete} className="btn btn-danger" type="button">DELETE</button>
      </div>
    </div>
  );
}

export default AdminPro;
