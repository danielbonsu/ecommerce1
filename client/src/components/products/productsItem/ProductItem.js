import React from 'react';
import { Link } from 'react-router-dom';

import './ProductItem.scss';
import { Col, Card } from 'react-bootstrap';
import Rating from '../../rating/Rating';

const ProductItem = ({ product }) => {
  console.log(product.id);
  return (
    <Col md={3}>
      <Card
        className='p-2 mb-3 productCard'
        style={{ width: '280px' }}
      >
        <Link to={`/products/${product._id}`}>
          <Card.Img variant='top' src={product.image} />
        </Link>

        <Card.Text style={{ fontSize: '14px' }}>
          {product.name}
        </Card.Text>
        <Rating rating={product.rating} />
        {`${product.rating} reviews`}
        <div className='footer'>
          <span>Price</span>
          <span>${product.price}</span>
        </div>

        <div className='addtocart'>
          <i class='fas fa-cart-plus'></i>
        </div>
      </Card>
    </Col>
  );
};

export default ProductItem;
