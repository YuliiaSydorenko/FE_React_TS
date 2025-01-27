import React from 'react';
import './styles.css';
import { ProductProps } from './types';

const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
