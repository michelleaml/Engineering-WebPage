// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import { Navigate } from 'react-router-dom';

// import axios from "axios";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  


//   const loginUser = async () => {
//     const response = await fetch('http://localhost:4001/teams/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({email,password}),
//     });
  
//     if (response.ok) {
//       const data = await response.json();
//       console.log("Welcome!!!")
//       console.log(data);

//     } else {
//       console.error('Login failed');
//     }
//   };
  
  

//   return (
//     // <Container className="mt-5">
//     <div className="Login-form-container">
//       <form onSubmit={loginUser}>
//         <div className="Login-form">
//           <h2>Login</h2>

//           <Form.Group className="Login-form-content" controlId="email">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="Login-form-content" controlId="password">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//             type="Password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           {/* <Button className="Login-button mt-4 col-4" variant="primary" type="submit"> */}
//           <Button variant="outline-secondary" type="submit" className="Login-button mt-4 col-4">
//             LOGIN
//           </Button>

//         </div>
//       </form>
//     </div>
//     /* </Container> */
//   );
// };

// export default Login;


// import React, { useState } from 'react';

// function Login() {
//   const [surname, setSurname] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:4001/teams/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ surname, password }),
//   });

//   const responseBody = await response.text();
//   console.log('Response Body:', responseBody);

//   if (response.ok) {
//     const data = await response.json();
//     console.log('Login successful:', data);
//   } else {
//     console.error('Login failed:', responseBody);
//   }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={surname}
//         onChange={(e) => setSurname(e.target.value)}
//         placeholder="Surname"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;


import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from 'react-dom';
import '../css/styles.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";

const Login = () => {
  const [teams, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKeys();
  }, []);

  const fetchKeys = async () => {
    axios
      .get("http://localhost:4001/teams/all-keys")
      .then((response) => {
        setKeys(response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the team list: ${error}`)
      );
  };

  const onFinish = values => {
    const {username, password} = values
    axios.post("http://localhost:4001/teams/validatePassword",{ username, password})
    .then(res => {
      if(res.data.validation){
        
        alert('Yor password is correct')

      }else{

        alert('Your password is not correct.Please try again')
      }
      
    })
    fetchKeys();
  };

  return (
    
    <div class="d-flex justify-content-center align-items-center">

      <div class="w-400">
        <h1 class="text-align-cetner mt-3">Login</h1>
      <Form
      name="normal_login"
      className="login-form mt-3"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
      </div>
    </div>
    
  );
};


export default Login;