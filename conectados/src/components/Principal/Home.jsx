import { Container,Row,Col } from 'react-bootstrap';
import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <Container fluid className='p-0 mt-5'>
      <Row >
          <section className=" section1 d-flex justify-content-center align-items-center mb-2 mt-5">
            <Col lg={6}>
            <div className=" text-white">
              <h1 className="display-3 font-weight-bold"><b>Contratalo</b></h1>
              <p className="fs-4 ">Una empresa orientada a los resultados y dedicada a ayudar <br /> a los clientes a alcanzar sus objetivos</p>
              <button className="btn btn-outline-light btn-lg">EXPLORAR SERVICIOS</button>
            </div>
            </Col>
          </section>
        </Row>
        <Row className="section2 mt-5 py-5 justify-content-center align-items-start">
        <Col lg={4} className="d-flex flex-column p-5">
          <h6 className="">CONECTAR A LOS USUARIOS CON TRABAJADORES LOCALES CALIFICADOS</h6>
          <h2 className="font-weight-bold">Contrate personal altamente calificado en diversos sectores profesionales.</h2>
          <p>Contratalo es una plataforma diseñada para conectar a usuarios con profesionales locales calificados en diversos campos. Permite contratar a expertos basándose en valoraciones y reseñas de trabajos previos.</p>
          <a href="#buscar-servicio" className="">Buscar servicio</a>
        </Col>
        <Col lg={4} className="p-0  d-flex justify-content-center">
          <img src="/Assets/work2.png" alt="Work" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
