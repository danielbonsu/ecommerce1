import React, {
  Fragment,
  Link,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
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

import CartPreviewCard from '../components/cart/CartPreviewCard';
import ProductItem from './products/productsItem/ProductItem';

const NavbarMain = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart, 'cartyyy');
  const [totals, setTotals] = useState({
    totalQTY: 0,
    totalAmount: 0,
  });

  return (
    <Fragment>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/' className='mr-auto'>
          EasyShop
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
            style={{ width: '1120px' }}
          />
          <Button variant='outline-info'>Search</Button>
        </Form>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='#features'>
            <i
              className='fas fa-shopping-cart'
              style={{ position: 'relative' }}
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
        </Nav>
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
                <ListGroup.Item className='mb-2'>
                  <span>
                    <Image
                      src={item.image}
                      fluid
                      className='cartImg'
                    />
                  </span>
                  <span>{item.qty}</span>
                </ListGroup.Item>
              ))}
            <Button variant='dark' className='mt-3'>
              Go To Checkout
            </Button>
          </ListGroup>
        </div>
      </Navbar>
      <br />
    </Fragment>
  );
};

export default NavbarMain;
