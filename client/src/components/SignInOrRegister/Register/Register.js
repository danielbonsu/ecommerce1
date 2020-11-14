import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Register.scss';
import Message from '../../../Alerts/Message';
import {
  Form,
  Col,
  Row,
  Button,
  Card,
} from 'react-bootstrap';

import { registerUser } from '../../../redux/actions/UserActions';

const Register = ({ history }) => {
  const { userAuthenticated } = useSelector(
    (state) => state.currentUser
  );
  const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (state) => state.currentUser
  );

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      <Message variant='danger'>
        passwords do not match
      </Message>;
    } else {
      dispatch(
        registerUser({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        })
      );
    }
  };

  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  } = formData;

  useEffect(() => {
    if (userAuthenticated) {
      history.push('/');
    }
  }, [history, userAuthenticated]);
  return (
    <Row className='justify-content-md-center mt-5'>
      <Col md={4}>
        <Card>
          <Card.Header>Register with US!</Card.Header>
          <Form onSubmit={onSubmit} className='m-4'>
            <Form.Group controlId='firstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                value={firstName}
                onChange={onChange}
                placeholder='First Name'
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='lastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                name='lastName'
                value={lastName}
                onChange={onChange}
                placeholder='Last Name'
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='email'
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder='password'
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Comfirm Password</Form.Label>
              <Form.Control
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={onChange}
                placeholder='confirm Password'
                required
              ></Form.Control>
              <Button
                type='submit'
                variant='secondary'
                className='btn-block mt-3'
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
