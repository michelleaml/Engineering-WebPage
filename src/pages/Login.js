import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar la parte de autentiación del usuario aqui, API
  };

  return (
    // <Container className="mt-5">
    <div className="Login-form-container">
    <div className="Login-form ">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="Login-form-content" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="Login-form-content" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="Login-button" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </div>
      </div>
    /* </Container> */
  );
}

export default Login;


