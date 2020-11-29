import React from 'react';
import Shop from '../components/shop';
// import {products} from '../assets/data'

// eslint-disable-next-line react/prop-types
function Shoppage({ products }) {
  return (
    <div>
      <Shop title="Products" products={products} />
    </div>
  );
}

export default Shoppage;
