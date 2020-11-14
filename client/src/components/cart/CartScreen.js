import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Row,
  Col,
  Image,
  ListGroup,
  Container,
} from 'react-bootstrap';

import {
  increaseCartQTY,
  decreaseCartQTY,
} from '../../redux/actions/CartActions';

import './CartScreen.scss';

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <Alert variant='dark' className='text-center'>
              Due to the covid pandemic, shipping may be
              delayed
            </Alert>
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
                    style={{ width: '100px' }}
                  />
                  <span>{cartItem.name}</span>
                  <span>{cartItem.price}</span>

                  <div className='qtyManipulator d-flex justify-content-between'>
                    <i
                      className='fas fa-minus-circle qtyBTN'
                      onClick={() =>
                        dispatch(decreaseCartQTY(cartItem))
                      }
                    ></i>
                    <div className='qtyContainer'>
                      {cart && cartItem.qty}
                    </div>
                    <i
                      className='fas fa-plus-circle qtyBTN'
                      onClick={() =>
                        dispatch(increaseCartQTY(cartItem))
                      }
                    ></i>
                  </div>
                </ListGroup.Item>
              ))
            ) : (
              <Alert variant='info'>
                Your shopping cart is empty{' '}
                <Alert.Link href='/'>Go BACK</Alert.Link>
              </Alert>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
