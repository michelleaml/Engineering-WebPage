import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';

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
      ).then(res =>{
        if(res.data.validation){
          alert("Your password is correct, thank you for your service")
        }
        else{
          alert("Your password or your email is not correct, please try again")
        }
      })
    
      // Check the status code or any other criteria based on your API response
      if (response.status === 200) {
        
        // Redirect the user or update the UI accordingly
      } else {
        console.log("Login Failed - Status Code: ", response.status);
      }
    } catch (error) {
      console.error("Error during login POST request", error);
    
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
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


