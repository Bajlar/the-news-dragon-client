import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar/NavigationBar';

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col md={9}>
            <div className="mt-4">
              <Outlet></Outlet>
            </div>
          </Col>
          <Col md={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;