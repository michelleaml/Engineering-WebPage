import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    // Agregar la parte de autentiación del usuario aqui, API
  // };

  // const handleLogin = async (event) =>{
  //   event.preventDefault();

  //   try{

  //     const response = await axios.post(
  //       "http://localhost:4001/teams/login",
  //       {
  //         credential_user : email,
  //         credential_psswd : password
  //       }
  //     );
  //      // Handle the response as needed
  //       console.log("Login Succesfull");

  //     } catch (error) {
  //       console.log("Error during login POST request", error);

  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4001/teams/login",
        {
          email,
          password,
        }
      );

      // Check the status code or any other criteria based on your API response
      if (response.status === 200) {
        // Authentication successful
        console.log("Login Successful");
        // Redirect the user or update the UI accordingly
      } else {
        // Authentication failed
        console.log("Login Failed");
      }
    } catch (error) {
      console.log("Error during login POST request", error);
      // Handle error, display an error message, etc.
    }
  };

  return (
    // <Container className="mt-5">
    <div className="Login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="Login-form">
          <h2>Login</h2>

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

          <Button className="Login-button mt-4 col-4" variant="primary" type="submit">
            LOGIN
          </Button>

        </div>
      </form>
    </div>
    /* </Container> */
  );
};

export default Login;


