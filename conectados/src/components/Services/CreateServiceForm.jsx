import React from 'react';
import { useForm } from 'react-hook-form';
import { useServices } from '../../context/ServiceContext';
import { Form, Button, Container, Table, Alert, Row, Col } from 'react-bootstrap';

const CreateServiceForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { services, createService, loading, error } = useServices();

    const onSubmit = async (data) => {
        await createService(data);
    };

    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Row className="w-100">
                <Col xs={12} md={8} lg={6} className="mx-auto">
                    <h3 className="text-center mt-4">Crear Servicio</h3>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el nombre del servicio"
                                {...register('nombre', { required: 'El nombre es requerido' })}
                            />
                            {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
                        </Form.Group>

                        <Form.Group controlId="imagenUrl">
                            <Form.Label>Imagen URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la URL de la imagen"
                                {...register('imagenUrl', { required: 'La URL de la imagen es requerida' })}
                            />
                            {errors.imagenUrl && <p className="text-danger">{errors.imagenUrl.message}</p>}
                        </Form.Group>

                        <Form.Group controlId="descripcion">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la descripción del servicio"
                                {...register('descripcion', { required: 'La descripción es requerida' })}
                            />
                            {errors.descripcion && <p className="text-danger">{errors.descripcion.message}</p>}
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3 w-100">
                            Crear Servicio
                        </Button>
                    </Form>

                    <h3 className="text-center mt-5">Lista de Servicios</h3>
                    {loading && <p>Cargando servicios...</p>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    {!loading && !error && (
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Imagen</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map(service => (
                                    <tr key={service._id}>
                                        <td>{service.nombre}</td>
                                        <td>
                                            <img src={service.imagenUrl} alt={service.nombre} width="50" />
                                        </td>
                                        <td>{service.descripcion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default CreateServiceForm;

