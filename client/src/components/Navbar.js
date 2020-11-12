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
} from 'react-bootstrap';
const NavbarMain = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <Fragment>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>EasyShop</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='#features'>
            <i className='fas fa-shopping-cart'>
              {cart.length > 0 && (
                <Badge variant='primary'>
                  {cart.length}
                </Badge>
              )}
            </i>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
          />
          <Button variant='outline-info'>Search</Button>
        </Form>
      </Navbar>
      <br />
    </Fragment>
  );
};

export default NavbarMain;
