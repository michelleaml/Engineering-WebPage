import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PrincipalNavegationBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand href="#home">Cetys logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">CONÓCENOS</Nav.Link>
            <Nav.Link href="#features">EVENTOS</Nav.Link>
            <Nav.Link href="#pricing">LABORATORIO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default PrincipalNavegationBar;
