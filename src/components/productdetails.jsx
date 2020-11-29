/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Pic from '../assets/dessert.jpg';
import smc2 from '../assets/smallchops1.jpg';
import Notfound from './404';
import Reviews from './reviews';

function Productdetails({ product }) {
  if (!product) {
    return <Notfound />;
  }
  return (
    <>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem 0rem',
      }}
      >
        <div style={{
          width: '80%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '3rem',
        }}
        >
          <div style={{
            flexBasis: '40%', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          }}
          >
            <div style={{
              width: '100%', height: '400px', backgroundImage: `url(${product.imageUrl})`, backgroundSize: 'cover', borderRadius: '3rem',
            }}
            />
            <div style={{
              width: '100%', display: 'flex', height: '130px', gap: '1rem', justifyContent: 'space-between',
            }}
            >
              <div style={{
                backgroundImage: `url(${product.imageUrl})`, borderRadius: '2rem', width: '30%', height: '100%', backgroundSize: 'cover',
              }}
              />
              <div style={{
                backgroundImage: `url(${smc2})`, borderRadius: '2rem', width: '30%', height: '100%', backgroundSize: 'cover',
              }}
              />
              <div style={{
                backgroundImage: `url(${Pic})`, borderRadius: '2rem', width: '30%', height: '100%', backgroundSize: 'cover',
              }}
              />
            </div>
          </div>
          <div style={{ flexBasis: '60%' }}>
            <h1>{product.name}</h1>
            <p>
              BY
              <strong>{product.user || 'KC Company'}</strong>
            </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="outline-primary" size="lg" disabled>
                $
                {product.discountPrice}
              </Button>
              <div style={{ marginLeft: '1rem' }}>
                <strong style={{ color: 'green' }}>
                  Save $
                  { Number(product.originalPrice) - Number(product.discountPrice)}
                </strong>
                <p>Inclusive of all taxes</p>
              </div>
            </div>
            <p>
              {product.content}
            </p>
            <div>
              {/* <span>QTY: </span><Button variant='outline-secondary'> 23</Button> */}
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </>

  );
}

export default Productdetails;
