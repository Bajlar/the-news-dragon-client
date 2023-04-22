import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../shared/LeftNav/LeftNav';
import RightNav from '../shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar/NavigationBar';

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col md={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col md={6}>
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

export default MainLayout;