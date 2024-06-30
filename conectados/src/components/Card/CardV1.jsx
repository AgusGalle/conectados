import React, { useRef } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useServices } from '../../context/ServiceContext';
import './CardV1.css';

const CardV1 = ({ showFavorites = false }) => {
  const { services } = useServices();
  const displayedServices = showFavorites ? services.filter(service => service.isFavorite) : services;

  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;  // Ajusta estos valores para hacer la rotación más pronunciada
    const y = (e.clientY - top - height / 2) / 10;  // Ajusta estos valores para hacer la rotación más pronunciada
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (cardRef) => {
    const card = cardRef.current;
    const image = card.querySelector('.card-img-top');
    image.style.transform = 'translateZ(50px)';  // Ajusta este valor para elevar la imagen
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    const image = card.querySelector('.card-img-top');
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    image.style.transform = 'translateZ(0)';
  };

  return (
    <Container>
      <Col lg={12}>
        <p className='mb-3'><b>ENCONTRAR AL PROFESIONAL ADECUADO</b></p>
        <h2>Contrate trabajadores cualificados para sus necesidades.</h2>
        <p>Encuentre y contrate fácilmente profesionales altamente cualificados para sus proyectos de construcción con Contratalo.</p>
      </Col>
      <Row className="justify-content-start mt-5">
        {displayedServices.map(service => {
          const cardRef = useRef(null);
          return (
            <Col xs={12} md={6} lg={4} key={service._id} className="mb-4">
              <div 
                className="card-container" 
                ref={cardRef}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseEnter={() => handleMouseEnter(cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
              >
                <Card className="card-content">
                  <Card.Img variant="top" src={service.imagenUrl} className="card-img-top" />
                  <Card.Body>
                    <Card.Title>{service.nombre}</Card.Title>
                    <Card.Text>{service.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardV1;
