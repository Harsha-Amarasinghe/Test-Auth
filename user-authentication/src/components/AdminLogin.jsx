import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Card } from "antd";
import Axios from 'axios';

const AdminLogin = () => {

  //const[usernameReg, setUsernameReg]=useState('');
  const[password, setPassword]=useState('');
  const[User_ID,setUser_ID]=useState('');

  const[loginStatus, setLoginSatus]=useState("");

  const login=()=>{
    Axios.post('http://localhost:4000/login', {
      User_ID: User_ID,  
    //username: usernameReg,
      password: password
    }).then((response)=>{
      if(response.data.message)
        setLoginSatus(response.data.message);
      else
        setLoginSatus(response.data[0].username);
    });
  };

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };
  
      return (
        <div>
          <Row style={{ padding: "10% 0" }}>
            <Col span={8}></Col>
            <Col span={8}>
              <Card title="Admin Login" alignment="center">
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="User_ID"
                    /*rules={[
                      {
                        required: true,
                        message: "Please input User ID!",
                      },
                    ]}*/
                  >
                    User ID
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="User ID"
                      onChange={(e)=>{
                        setUser_ID(e.target.value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    /*rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                    */
                  >
                    Password
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      onChange={(e)=>{
                        setPassword(e.target.value);
                      }}
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
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={login}
                    >
                      Log in
                    </Button>
                  
                  </Form.Item>
                </Form>
              </Card>
              <h1>{loginStatus}</h1>
            </Col>
            <Col span={8}></Col>
          </Row>
        </div>
      );
}

export default AdminLogin
