import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from 'react-dom';
import '../css/styles.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [teams, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


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
        if(username === "kenia.picos@cetys.mx"){
          navigate('/eventos/expo-ingenierias/votacion/votacion-kn');
        }else{
          navigate('/eventos/expo-ingenierias/layout');
        }
          
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