import React from 'react';
import { ProductWrapper, ProductTitle, ProductPrice } from './styles';
import { ProductProps } from './types';

const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <ProductWrapper>
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>Price: ${price}</ProductPrice>
    </ProductWrapper>
  );
};

export default Product;
