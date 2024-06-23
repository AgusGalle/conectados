import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const AdminPage = () => {
  return (
    <Container className="mt-5">
      <h1>Administración</h1>
      <Link to="/admin/create">
        <Button variant="primary" className="mt-3">Agregar Servicio</Button>
      </Link>
    </Container>
  );
};

export default AdminPage;
