import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';

function DesCarousel() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <hr className="hr hr-blurry" />
        <Col className="column-info">
          <div className="info-principal">
            <p>
              
              Hora de inicio: 2:00 pm
            </p>
            <p>
              Hora de finalización: 6:00 pm
            </p>
            <p>              </p>
            <p>          </p>
            <p className="mt-4">
              El evento está dirigido a estudiantes, profesores y público general.
            </p>
            <p></p>
            <p></p>
          </div>
        </Col>
        <Col>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {require=('../img1.JPEG')}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>Presentación de proyectos</h3>
          {/* <p>Descripción del primer slide.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {require=('../img2.JPEG')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Panel de egresados</h3>
          {/* <p>Descripción del segundo slide.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {require=('../img3.JPEG')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Evaluación de jurado</h3>
          {/* <p>Descripción del tercer slide.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          {/* <Carousel id="carouselExample">
            <Carousel.Item>
              <img src="img/img-8.JPG" className="d-block w-100" alt="Picture number 8" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="img/img-7.JPG" className="d-block w-100" alt="Picture number 7" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="img/img-3.JPG" className="d-block w-100" alt="Picture number 3" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="img/img-1.JPG" className="d-block w-100" alt="Picture number 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="img/img-JPG.jpg" className="d-block w-100" alt="Picture number 1" />
            </Carousel.Item>
          </Carousel> */}
          {/* <Button className="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </Button>
          <Button className="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
}

export default DesCarousel;
