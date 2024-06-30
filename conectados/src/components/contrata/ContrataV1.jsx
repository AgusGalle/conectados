import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardV1 from '../Card/CardV1';

const ContrataV1 = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <h1>Explora todos los servicios</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardV1 showFavorites={false} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContrataV1;
