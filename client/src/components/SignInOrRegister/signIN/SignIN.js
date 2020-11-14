import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './SignIN.scss';
import {
  Form,
  Col,
  Row,
  Button,
  Card,
  Alert,
} from 'react-bootstrap';

import { signIN } from '../../../redux/actions/UserActions';

const SignIN = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signIN(formData));
  };

  const dispatch = useDispatch();
  const { userAuthenticated } = useSelector(
    (state) => state.currentUser
  );

  const { email, password } = formData;

  useEffect(() => {
    if (userAuthenticated) {
      history.push('/');
    }
    return () => {};
  }, [history, userAuthenticated]);

  return (
    <Row className='d-flex justify-content-md-center align-items-center'>
      <Col md={4}>
        <Card className='p-4'>
          <Form onSubmit={onSubmit}>
            <h5 className='text-center'>
              Already have an account? Sign In
            </h5>
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
              <Button
                type='submit'
                variant='secondary'
                className='mt-3 btn btn-block'
              >
                Submit
              </Button>
              <Alert
                variant='info'
                className='text-center mt-3'
              >
                Dont have an account yet?{' '}
                <LinkContainer to='/register'>
                  <Alert.Link>Register</Alert.Link>
                </LinkContainer>
              </Alert>
            </Form.Group>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default SignIN;
