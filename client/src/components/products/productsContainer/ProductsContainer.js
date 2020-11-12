import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';

import ProductItem from '../productsItem/ProductItem';
import { getProducts } from '../../../redux/actions/ProductsAction';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  return (
    <Container>
      <h1>NEWEST PRODUCTS!</h1>
      <Row>
        {products &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
      </Row>
    </Container>
  );
};

export default ProductsContainer;
