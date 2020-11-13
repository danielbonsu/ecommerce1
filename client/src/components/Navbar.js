import React, {
  Fragment,
  useState,
  useEffect,
} from 'react';
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

import { cartTotals } from '../utils/CartItemsTotals';
import { filterProducts } from '../redux/actions/ProductsAction';

const NavbarMain = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [totals, setTotals] = useState({
    totalQTY: 0,
    totalAmount: 0,
  });

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
          <Button variant='outline-info'>Search</Button>
        </Form>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='#features'>
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
            <span>SIGN IN</span>
          </Nav.Link>
        </Nav>
        {cartPreviewVisible && (
          <div className='cardItemsPreview'>
            <div className='cardItemsPreviewHeader d-flex justify-content-between px-2'>
              <h6>subtotal-{cartTotals(cart).qtyTotals}</h6>
              <span>
                ${cartTotals(cart).totalPrice.toFixed(2)}
              </span>
            </div>

            <ListGroup flush>
              {cart.length > 0 &&
                cart.map((item) => (
                  <ListGroup.Item className='mb-2 d-flex justify-content-between'>
                    <span>
                      <Image
                        src={item.image}
                        fluid
                        className='cartImg'
                      />
                    </span>
                    <span>X {item.qty}</span>

                    <span>
                      = {(item.qty * item.price).toFixed(2)}
                    </span>
                  </ListGroup.Item>
                ))}
              <Button variant='dark' className='mt-3'>
                Go To Checkout
              </Button>
            </ListGroup>
          </div>
        )}
      </Navbar>
      <br />
    </Fragment>
  );
};

export default NavbarMain;
