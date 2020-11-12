import React, { Fragment } from 'react';
import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
} from 'react-bootstrap';
const NavbarMain = () => {
  return (
    <Fragment>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>EasyShop</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>
            <i className='fas fa-shopping-cart'></i>
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
