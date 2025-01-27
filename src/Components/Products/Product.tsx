import React from 'react';
import { ProductWrapper } from './styles';
import { ProductProps } from './types';

const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <ProductWrapper>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </ProductWrapper>
  );
};

export default Product;
