import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleFormRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, photo, email, password);
  }

  return (
    <Container className='w-25 mx-auto mt-4'>
      <h2>Register your account</h2>
      <Form onSubmit={handleFormRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and Conditions" />
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have an Account? <Link to='/login'>Login</Link>
        </Form.Text>
        <Form.Text className="text-success">
            
        </Form.Text>
        <Form.Text className="text-danger">
            
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;