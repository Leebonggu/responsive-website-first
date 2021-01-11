import React from 'react';
import {
  ProductsContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from './ProductsElement';

function Products({ heading, data }) {
  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {data.map((product, i) => (
          <ProductCard key={i}>
            <ProductImg src={product.img} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
