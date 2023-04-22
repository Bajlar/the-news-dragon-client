import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleFormLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  }

  return (
    <Container className='w-25 mx-auto mt-4'>
      <h2>Please Login</h2>
      <Form onSubmit={handleFormLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account? <Link to='/register'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success">
            
        </Form.Text>
        <Form.Text className="text-danger">
            
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;