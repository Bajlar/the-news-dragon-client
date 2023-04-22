import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavigationBar = () => {
  const {user} = useContext(AuthContext);
  
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-3'>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-4">
              <Link className='text-decoration-none fw-semibold' to='/'>Home</Link>
              <Link className='text-decoration-none fw-semibold' to='/about'>About</Link>
              <Link className='text-decoration-none fw-semibold' to='/career'>Career</Link>
            </Nav>
            <Nav className='d-flex align-items-center'>
              { user && 
                <FaUser style={{fontSize: '2rem'}}></FaUser>
              }
              { user ? <Button variant="secondary">Logout</Button> :
                <Link to='/login'>
                  <Button variant="secondary">Login</Button>
                </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;