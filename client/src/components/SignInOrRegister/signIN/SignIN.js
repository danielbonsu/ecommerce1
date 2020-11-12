import React, { useState } from 'react';
import './SignIN.scss';
import {
  Form,
  Col,
  Row,
  Button,
  Card,
} from 'react-bootstrap';
const SignIN = () => {
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
    console.log(formData);
  };

  const { email, password } = formData;
  return (
    <Row>
      <Col>
        <Card className='p-4'>
          <Form onSubmit={onSubmit}>
            <h1>Already have an account? Sign In</h1>
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
                name='email'
                value={password}
                onChange={onChange}
                placeholder='password'
                required
              ></Form.Control>
              <Button type='submit' variant='secondary'>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default SignIN;
