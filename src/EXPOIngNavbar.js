import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function EXPOIngNavegationBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#infografía">Infografía</Nav.Link>
            <Nav.Link href="#layout">Layout</Nav.Link>
            <Nav.Link href="#votación">Votación</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default EXPOIngNavegationBar;
