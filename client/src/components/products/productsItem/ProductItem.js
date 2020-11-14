import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../../redux/actions/CartActions';

import './ProductItem.scss';
import {
  Col,
  Card,
  Row,
  Image,
  ListGroup,
  Button,
} from 'react-bootstrap';
import Rating from '../../rating/Rating';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const onChange = (e) => {
    setQty(e.target.value);
  };
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
          <div className='productPreviewOnHover shadow'>
            <Row>
              <Col>
                <Image
                  src={product.image}
                  fluid
                  className='mb-3'
                />
                <ListGroup flush>
                  <ListGroup.Item>
                    {product.description}
                  </ListGroup.Item>
                  {!product.countInStock > 0 ? (
                    <ListGroup.Item>
                      Out of stock
                    </ListGroup.Item>
                  ) : (
                    <ListGroup.Item className='d-flex justify-content-between w-100'>
                      <span>Qty</span>
                      <span>
                        <select
                          name='qty'
                          onChange={onChange}
                        >
                          {[
                            ...Array(
                              product.countInStock
                            ).keys(),
                          ].map((num) => (
                            <option value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>
                      </span>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    {product.countInStock < 1 ? (
                      <Button
                        variant='dark'
                        className='btn btn-block'
                        onClick={() =>
                          dispatch(
                            addCartItem(product._id, qty)
                          )
                        }
                        disabled
                      >
                        ADD TO CART
                      </Button>
                    ) : (
                      <Button
                        variant='dark'
                        className='btn btn-block'
                        onClick={() =>
                          dispatch(
                            addCartItem(product._id, qty)
                          )
                        }
                      >
                        ADD TO CART
                      </Button>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProductItem;
