import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table, Alert, Row, Col } from 'react-bootstrap';
import { useServices } from '../../context/ServiceContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CreateServiceForm = () => {
    const { services, createService, deleteService, editService, toggleFavorite, getAllServices, loading, error } = useServices();
    const [formData, setFormData] = useState({
        nombre: '',
        imagenUrl: '',
        descripcion: ''
    });
    const [editIndex, setEditIndex] = useState(null);
    const [submitButtonText, setSubmitButtonText] = useState('Agregar Servicio');

    useEffect(() => {
        getAllServices();
    }, []);

    useEffect(() => {
        if (editIndex !== null) {
            const serviceEditado = services[editIndex];
            setFormData({
                nombre: serviceEditado.nombre,
                imagenUrl: serviceEditado.imagenUrl,
                descripcion: serviceEditado.descripcion
            });
            setSubmitButtonText('Editar Servicio');
        } else {
            setFormData({
                nombre: '',
                imagenUrl: '',
                descripcion: ''
            });
            setSubmitButtonText('Agregar Servicio');
        }
    }, [editIndex, services]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            await editService(services[editIndex]._id, formData);
        } else {
            await createService(formData);
        }
        setEditIndex(null);
        setFormData({
            nombre: '',
            imagenUrl: '',
            descripcion: ''
        });
        setSubmitButtonText('Agregar Servicio');
    };

    const handleDelete = async (id) => {
        await deleteService(id);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setSubmitButtonText('Editar Servicio');
    };

    const handleToggleFavorite = async (id, isFavorite) => {
        await toggleFavorite(id, !isFavorite);
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setFormData({
            nombre: '',
            imagenUrl: '',
            descripcion: ''
        });
        setSubmitButtonText('Agregar Servicio');
    };

    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Row className="w-100">
                <Col xs={12} md={8} lg={6} className="mx-auto">
                    <h3 className='text-center'>{editIndex !== null ? 'Editar Servicio' : 'Agregar Servicio'}</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupNombre">
                            <Form.Control type="text" name="nombre" placeholder="Ingresar Nombre del Servicio" value={formData.nombre} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formImageUrl" className="mb-3">
                            <Form.Control type="text" name="imagenUrl" placeholder="Ingrese la URL de la imagen" value={formData.imagenUrl} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formDescripcion" className="mb-3">
                            <Form.Control type='text' name="descripcion" placeholder="Descripción del Servicio" value={formData.descripcion} onChange={handleChange} />
                        </Form.Group>
                        <Button type="submit" variant="primary" className='my-3 w-100'>{submitButtonText}</Button>
                        {editIndex !== null && (
                            <Button variant="secondary" onClick={handleCancelEdit} className='my-3 ms-2 w-100'>Cancelar</Button>
                        )}
                    </Form>
                </Col>
            </Row>
            <Row className="w-100 mt-5">
                <Col xs={12} md={8} lg={10} className="mx-auto">
                    <h3 className="text-center">Lista de Servicios</h3>
                    {loading && <p>Cargando servicios...</p>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    {!loading && !error && (
                        <Table striped bordered hover className='mt-3'>
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th>Nombre</th>
                                    <th>Imagen</th>
                                    <th>Descripción</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: 'center' }}>
                                {services.map((service, index) => (
                                    <tr key={service._id}>
                                        <td>{service.nombre}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <img src={service.imagenUrl} alt={service.nombre} style={{ width: '80px', height: '60px' }} />
                                        </td>
                                        <td>{service.descripcion}</td>
                                        <td>
                                            <Button variant="danger" className='mx-1' onClick={() => handleDelete(service._id)}>Eliminar</Button>
                                            <Button variant="warning" className='mx-1' onClick={() => handleEdit(index)}>Editar</Button>
                                            <Button variant="info" className='mx-1 py-2' onClick={() => handleToggleFavorite(service._id, service.isFavorite)}>
                                                {service.isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
                                            </Button>
                                        </td>
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
