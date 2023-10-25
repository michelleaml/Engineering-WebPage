import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import EXPOIng from './pages/EXPO-Ingenieria';
import Laboratorio from './pages/Laboratorio';
import Conocenos from './pages/Conocenos';
import Layout from './pages/Layout.js';
import Register from './pages/Register.js';
import Voting from './pages/Vote.js';
import Login from './pages/Login';

function PrincipalNavBarDropdown() {
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand href="/">
            <img className="d-inline-block align-top"
              src = "./cetys-logo.png" alt = "logo"
              width="70" height="60"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/conocenos"}>CONÓCENOS</Nav.Link>
            <NavDropdown title="EVENTOS" id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias"}>EXPO Ingenierías</NavDropdown.Item> */}
                <NavDropdown title="EXPO Ingenierias "id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias"}>Inicio</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias/layout"}>Layout</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias/registro"}>Registro</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias/votación"}>Votación</NavDropdown.Item>
                </NavDropdown>
              {/* <NavDropdown.Item href="#eventos/3.2"> Evento 2</NavDropdown.Item>
              <NavDropdown.Item href="#eventos/3.3"> Evento 3</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link as={Link} to={"/laboratorio"}>LABORATORIO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={Link} to="/user-login">
            <img className="d-inline-block align-top"
              src="./user-icon2.png"
              alt="User Profile"
              width="55"
              height="55"
            />
          </Nav.Link>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path="/conocenos" element={<Conocenos />}/>
        <Route path="/eventos/expo-ingenierias" element={<EXPOIng />}/>
        <Route path="/laboratorio" element={<Laboratorio />}/>
        <Route path="/eventos/expo-ingenierias/layout" element={<Layout />}/>
        <Route path="/eventos/expo-ingenierias/registro" element={<Register />}/>
        <Route path="/eventos/expo-ingenierias/votación" element={<Voting />}/>
        <Route path="/user-login" element={<Login />} />

      </Routes>
    </div>
    </Router>    
  );
}

export default PrincipalNavBarDropdown;