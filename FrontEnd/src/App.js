import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar.js';
import NavBarDropdown from './NavBarDropdown.js'

// import Button from 'react-bootstrap/Button' //importa el boton con ese cc
import {Button, Alert, Breadcrumb} from 'react-bootstrap' // importa toda la libreria

function App() {
  return (
    <div className="App">
    <NavBarDropdown/>
      <header className="App-header">
        {/* <Breadcrumb>
          <Breadcrumb.Item> Test</Breadcrumb.Item>
          <Breadcrumb.Item> Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active> Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success"> This is a button</Alert>
        <Button> Test Button</Button> */}

      </header>
    </div>
  );
}

export default App;
