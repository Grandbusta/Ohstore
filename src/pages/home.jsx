import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Shop from '../components/shop';
import Pic from '../assets/dessert4.jpg';
import Im from '../assets/cocktails.jpg';
// import {products} from '../assets/data'

// eslint-disable-next-line react/prop-types
function Home({ products }) {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ height: '500px' }}>
          <img src={Pic} alt="" style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
          <Carousel.Caption>
            <h2>Micheal Store - An ecommerce website</h2>
            <p>A one stop store</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '500px' }}>
          <img src={Im} alt="" style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
          <Carousel.Caption>
            <h2>Pushing you to the top through products available</h2>
            <p>Browse Through All Products</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Shop title="Latest Products" products={products} />
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem',
      }}
      >
        <Link to="/shop">
          <Button variant="primary">
            View all Products
            <FiArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
