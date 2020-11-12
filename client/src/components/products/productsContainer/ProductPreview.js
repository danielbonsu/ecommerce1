import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../redux/actions/ProductsAction';
import { addCartItem } from '../../../redux/actions/CartActions';
import {
  Image,
  Row,
  Col,
  ListGroup,
  Container,
  Card,
  Jumbotron,
  Alert,
  Button,
} from 'react-bootstrap';

import Ratings from '../../rating/Rating';

const ProductPreview = ({ match }) => {
  const dispatch = useDispatch();
  const { product } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, getProductDetails]);

  const [qty, setQty] = useState(1);

  const onChange = (e) => {
    setQty(e.target.value);
  };

  const addToCart = () => {
    dispatch(addCartItem(match.params.id, qty));
  };

  return (
    <>
      <Container>
        <Row>
          <Alert variant='info'>
            Due to Covid, Shipping of all products may be
            affected. EasyShop is working diligently to
            deliver all products as fast as we can. Thank
            you for your cooperation
          </Alert>

          <Col md={6}>
            <Card className='shadow p-4'>
              <Image src={product.image} />
            </Card>
          </Col>

          <Col md={3}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <ListGroup flush>
              <ListGroup.Item>
                <span>brand:</span>
                <span> {product.brand}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Category: {product.category}
              </ListGroup.Item>

              <ListGroup.Item>
                Rating: <Ratings />
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card className='p-2'>
              <ListGroup variant='flush'>
                <ListGroup.Item className='d-flex justify-content-between'>
                  <span>Availablity:</span>
                  <span>
                    {product.countInStock > 0
                      ? 'In Stock'
                      : 'Out of Stock'}
                  </span>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item className='d-flex justify-content-between'>
                    <span>QTY</span>

                    <span>
                      {product.countInStock > 0 && (
                        <select onChange={onChange}>
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
                      )}
                    </span>
                  </ListGroup.Item>
                )}

                <ListGroup.Item className='d-flex justify-content-between'>
                  <span>Price:</span>
                  <span> ${product.price}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant='dark'
                    className='btn btn-block'
                    onClick={addToCart}
                  >
                    ADD TO CART
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPreview;
