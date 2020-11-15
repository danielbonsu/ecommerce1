import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotals } from '../../utils/CartItemsTotals';
import {
  Alert,
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Container,
  Button,
  Form,
} from 'react-bootstrap';

import {
  increaseCartQTY,
  decreaseCartQTY,
  removeCartItem,
} from '../../redux/actions/CartActions';

import './CartScreen.scss';

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Card className='p-4'>
            <ListGroup>
              <h2>SHOPPING CART</h2>
              {cart.length > 0 ? (
                cart.map((cartItem) => (
                  <ListGroup.Item
                    key={cartItem._id}
                    className='mb-2 d-flex justify-content-between align-items-center'
                  >
                    <Image
                      src={cartItem.image}
                      fluid
                      style={{ width: '200px' }}
                    />
                    <ListGroup
                      style={{ minWidth: '400px' }}
                    >
                      <ListGroup.Item className='text-center'>
                        <span>{cartItem.name}</span>
                      </ListGroup.Item>
                      <ListGroup.Item className='d-flex justify-content-between'>
                        <span>Price</span>
                        <span>{cartItem.price}</span>
                      </ListGroup.Item>
                      <ListGroup.Item className='d-flex justify-content-between'>
                        <span>QTY</span>

                        <div className='qtyManipulator d-flex justify-content-between'>
                          <i
                            className='fas fa-minus-circle qtyBTN'
                            onClick={() =>
                              dispatch(
                                decreaseCartQTY(cartItem)
                              )
                            }
                          ></i>
                          <div className='qtyContainer'>
                            {cart && cartItem.qty}
                          </div>
                          <i
                            className='fas fa-plus-circle qtyBTN'
                            onClick={() =>
                              dispatch(
                                increaseCartQTY(cartItem)
                              )
                            }
                          ></i>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button variant='link'>
                          save for later
                        </Button>
                        <Button
                          variant='link'
                          onClick={() =>
                            dispatch(
                              removeCartItem(cartItem)
                            )
                          }
                        >
                          remove item
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                ))
              ) : (
                <Alert variant='info'>
                  Your shopping cart is empty{' '}
                  <Alert.Link href='/'>Go BACK</Alert.Link>
                </Alert>
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header className='bg-light'>
              Order Summary
            </Card.Header>
            <Card.Body>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span>Subtotal:</span>
                <span>{cartTotals(cart).totalPrice}</span>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span>ESTIMATED SHIPPING:</span>
                <span>$0.0</span>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span>DISCOUNTS:</span>
                <span>$0.0</span>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span>ESTIMATED TOTAL:</span>
                <span>$0.0</span>
              </ListGroup.Item>
            </Card.Body>
          </Card>
          <Card>
            <Form>
              <Form.Control
                type='text'
                placeholder='enter promotion code to apply'
                name='coupon'
                className='m-2'
                style={{ width: '95%' }}
              ></Form.Control>
            </Form>
            <Card.Body>
              <Button
                variant='danger'
                className='btn btn-block'
              >
                Guest CheckOut
              </Button>
              <Card.Text className='text-center m-2'>
                OR
              </Card.Text>
              <Button
                variant='outline-dark'
                className='btn btn-block'
              >
                SIGN IN
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
