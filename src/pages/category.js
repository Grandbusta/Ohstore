import React from 'react';
import { useParams } from 'react-router-dom';
import Shop from '../components/shop';
import { products } from '../assets/data';

function Category() {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <Shop title={category} products={products} />
    </div>
  );
}

export default Category;
