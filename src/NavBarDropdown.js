import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';

import EXPOIng from './pages/EXPO-Ingenieria';
import Laboratorio from './pages/Laboratorio';
import Conocenos from './pages/Conocenos';
import PDFViewer from './pages/PDF';

function PrincipalNavBarDropdown() {
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand href="/">
            <img className="d-inline-block align-top"
              src = "./assets/images/cetys-logo2.png"
              width="30" height="30"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/conocenos"}>CONÓCENOS</Nav.Link>
            <NavDropdown title="EVENTOS" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias"}>EXPO Ingenierías</NavDropdown.Item>
              <NavDropdown.Item href="#eventos/3.2"> Evento 2</NavDropdown.Item>
              <NavDropdown.Item href="#eventos/3.3"> Evento 3</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link as={Link} to={"/laboratorio"}>LABORATORIO</Nav.Link>
            <Nav.Link as={Link} to={"/PDF"}>PDF</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {/* <Switch> */}
      <Routes>
        <Route path="/conocenos" element={<Conocenos />}/>
        <Route path="/eventos/expo-ingenierias" element={<EXPOIng />}/>
        <Route path="/laboratorio" element={<Laboratorio />}/>
        <Route path="/PDF" element={<PDFViewer />}/>
      </Routes>
      {/* </Switch> */}
    </div>
    </Router>    
  );
}

export default PrincipalNavBarDropdown;