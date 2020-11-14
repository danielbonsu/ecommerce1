import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  Badge,
  Image,
  ListGroup,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { cartTotals } from '../utils/CartItemsTotals';
import { filterProducts } from '../redux/actions/ProductsAction';
import { signOUT } from '../redux/actions/UserActions';

const NavbarMain = () => {
  const { cart } = useSelector((state) => state.cart);
  const { userAuthenticated, userInfo } = useSelector(
    (state) => state.currentUser
  );
  const dispatch = useDispatch();

  const [
    cartPreviewVisible,
    setCartPreviewVisible,
  ] = useState(false);

  return (
    <Fragment>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/' className='mr-auto'>
          EasyShop
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type='text'
            placeholder='search Products'
            className='mr-sm-2'
            style={{ width: '1120px' }}
            onChange={(e) =>
              dispatch(filterProducts(e.target.value))
            }
          />
        </Form>
        <Nav className='mr-auto'>
          <Nav.Link href='#!'>
            <i
              className='fas fa-shopping-cart'
              style={{ position: 'relative' }}
              onClick={() =>
                setCartPreviewVisible(!cartPreviewVisible)
              }
            >
              {cart && cart.length > 0 && (
                <Badge
                  variant='primary'
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: 15,
                  }}
                >
                  {cart && cart.length}
                </Badge>
              )}
            </i>
          </Nav.Link>
          <Nav.Link>
            <i className='fas fa-user mr-1'></i>

            {userAuthenticated ? (
              <span>
                Welcome
                {userInfo && (
                  <span className='ml-2'>
                    {userInfo.firstName}!
                  </span>
                )}
              </span>
            ) : (
              <LinkContainer to='/signIN'>
                <span>SIGN IN</span>
              </LinkContainer>
            )}
          </Nav.Link>

          {userAuthenticated && (
            <Nav.Link href='/' className='d-flex'>
              <i className='fas fa-sign-out-alt'></i>
              <span
                className='ml-2'
                onClick={() => dispatch(signOUT())}
              >
                SIGN OUT
              </span>
            </Nav.Link>
          )}
        </Nav>
        {cartPreviewVisible && (
          <div className='cardItemsPreview'>
            <div className='cardItemsPreviewHeader d-flex justify-content-between px-2'>
              <h6>subtotal-{cartTotals(cart).qtyTotals}</h6>
              <span>
                ${cartTotals(cart).totalPrice.toFixed(2)}
              </span>
            </div>

            {cartPreviewVisible && (
              <ListGroup flush>
                {cart.length > 0 &&
                  cart.map((item) => (
                    <ListGroup.Item
                      key={item._id}
                      className='mb-2 d-flex justify-content-between'
                    >
                      <span>
                        <Image
                          src={item.image}
                          fluid
                          className='cartImg'
                        />
                      </span>
                      <span>X {item.qty}</span>

                      <span>
                        ={' '}
                        {(item.qty * item.price).toFixed(2)}
                      </span>
                    </ListGroup.Item>
                  ))}
                <LinkContainer to='/cart'>
                  <Button
                    variant='dark'
                    className='mt-3'
                    onClick={() => setCartPreviewVisible()}
                  >
                    Go To Cart
                  </Button>
                </LinkContainer>
              </ListGroup>
            )}
          </div>
        )}
      </Navbar>
      <br />
    </Fragment>
  );
};

export default NavbarMain;
