import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styledHome.css'
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <Container fluid>
        <Header />
      <Row className='row' >
        <Col  className='col-1'>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  )
}
export default Home
