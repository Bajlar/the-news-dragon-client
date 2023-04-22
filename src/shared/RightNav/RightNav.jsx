import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';

const RightNav = () => {
  return (
    <div>
      <h2 className='mt-4'>Login With</h2>
      <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
      <div className='mt-4'>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div className='mt-4'>
        <QZone></QZone>
      </div>
    </div>
  );
};

export default RightNav;