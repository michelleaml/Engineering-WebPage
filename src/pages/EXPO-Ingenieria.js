import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
// import EXPOIngNavegationBar from "../EXPOIngNavbar";
import CenteredImage from './EXPOImage.js';
import DesCarousel from "./DesCarousel.js";
import GMapSection from '../pages/MapSection.js'
import StaffSection from "../StaffSection.js";

class EXPOIng extends Component {
  render() {
    return (
      <div>
        <CenteredImage />
        <Container fluid>
          <Row className="align-items-center" style={{ height: '20vh' }}>
            <Col className="col-info-presentacion">
              <div className="info-presentacion text-center">
                <p>
                  Acompáñanos a ver la demostración de proyectos de alumnos de
                  Ingeniería en áreas relacionadas a
                </p>
                <p>
                  computación, electrónica, mecatrónica, mecánica, energías
                  renovables, diseño gráfico digital,
                </p>
                <p>e ingeniería industrial.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <DesCarousel />
        <GMapSection />
      </div>
    );
  }
}

export default EXPOIng;

