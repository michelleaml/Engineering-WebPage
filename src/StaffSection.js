import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const StaffSection = () => {
  return (
    <section>
      <hr className="hr hr-blurry" />
      <Container fluid>
        <div id="staff">
          <h1>
            <p className="text-center info-titulo">Staff</p>
          </h1>
        </div>
        <Row justify-content-center>
          <Col lg={2} className="col-md-border">
            <p className="fs-4 titulo-staff">Comite Organizador</p>
            <ul className="columnas-content">
              <li>Dra. Kenia Picos - Organizadora</li>
              <li>Dr. Ulises Orozco - Organizador</li>
            </ul>
          </Col>
          <Col lg={2} className="col-md-border">
            <p className="fs-4 titulo-staff">Jueces Evaluadores</p>
            <ul className="columnas-content">
              <li>Dr. Fermin Alberto Armenta Cano</li>
              <li>Mtro. Jesus Antonio Camacho Gonzalez</li>
              <li>Dra. Marisela Martinez Quiroz</li>
              <li>Dr. Moisés Sánchez-Adame</li>
              <li>Mtro. Benjamín Frías Araya</li>
              <li>Mtro. Marlon Cesar Gonzalez Joaquin</li>
              <li>Mtro. Arturo Javier Escoto Mendez</li>
              <li>Mtra. Gaby Guzmán Olguín</li>
              <li>Dr. Adán Hirales Carbajal</li>
              <li>Dra. Vanessa Miranda</li>
              <li>Dr. Mauricio Odreman</li>
              <li>Mtra. Nataly Medina</li>
            </ul>
          </Col>
          <Col lg={2}>
            <p className="fs-4 titulo-staff">Alumnos de Staff</p>
            <ul className="columnas-content">
              <li>Leobardo Argüelles</li>
              <li>Kevin Rodríguez</li>
              <li>Carlos Zamora</li>
              <li>Elian Cruz</li>
              <li>Ricardo Nieblas</li>
              <li>Julián Ocampo Rodríguez</li>
              <li>Jorge Cerda Navarro</li>
              <li>Zaid Moroyoqui</li>
              <li>Brandon Martínez</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StaffSection;
