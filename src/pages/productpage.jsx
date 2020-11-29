/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import Productdetails from '../components/productdetails';
// import {products} from '../assets/data'

function Product({ products }) {
  const { name } = useParams();
  const product = products.filter((pro) => pro.link === name);
  return (
    <div>
      <Productdetails product={product[0]} />
    </div>
  );
}

export default Product;
