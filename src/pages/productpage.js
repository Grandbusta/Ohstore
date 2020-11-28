import React from 'react';
import { useParams } from 'react-router-dom';
import Productdetails from '../components/productdetails';
import Reviews from '../components/reviews';
// import {products} from '../assets/data'

function Product({ products }) {
  const { name } = useParams();
  const product = products.filter((product) => product.link === name);
  console.log(product[0]);
  return (
    <div>
      <Productdetails product={product[0]} />
    </div>
  );
}

export default Product;
