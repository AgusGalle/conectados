import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useServices } from '../../context/ServiceContext';

const CardV1 = () => {
    const { services } = useServices();
    const favoriteServices = services.filter(service => service.isFavorite);

    return (
        <Container>
            <Row className="justify-content-start mt-5">
                {favoriteServices.map(service => (
                    <Col xs={12} md={6} lg={4} key={service._id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={service.imagenUrl} />
                            <Card.Body>
                                <Card.Title>{service.nombre}</Card.Title>
                                <Card.Text>{service.descripcion}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CardV1;
