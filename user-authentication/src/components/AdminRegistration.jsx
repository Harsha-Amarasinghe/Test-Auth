import React, { useState } from "react";
import { Form, Input, Select, Row, Col, Checkbox, Button, Card } from "antd";
import Axios from 'axios';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 16, offset: 8 },
    },
  };

const AdminRegistration = () => {

  const[usernameReg, setUsernameReg]=useState('');
  const[passwordReg, setPasswordReg]=useState('');
  const[User_IDReg,setUser_IDReg]=useState('');

  const register=()=>{
    Axios.post('http://localhost:4000/register', {
      User_ID: User_IDReg,  
    username: usernameReg,
      password: passwordReg
    }).then((response)=>{
      console.log(response);
    });
  };

    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };


    return (
      <div>
        <Row style={{ padding: "2% 0" }}>
          <Col span={8}></Col>
  
          <Col span={8}>
            <Card title="Register New Admin" alignment="center">
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  residence: ["number", "street", "town"],
                  prefix: "94",
                }}
                scrollToFirstError
              >
  
                <b>Enter Details</b>

                <Form.Item
                  name="User_ID"
                  label="User_ID"
                  tooltip="This is used in Logging to the Application."
                  rules={[
                    {
                      required: true,
                      message: "Please input the User_ID!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input 
                    type='text'
                    placeholder="User_ID"
                    onChange={(e)=>{
                      setUser_IDReg(e.target.value);
                    }}
                  />
                </Form.Item>
  
                <Form.Item
                  name="username"
                  label="Username"
                  tooltip="This is used in Logging to the Application."
                  rules={[
                    {
                      required: true,
                      message: "Please input the username!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input 
                    type='text'
                    placeholder="username"
                    onChange={(e)=>{
                      setUsernameReg(e.target.value);
                    }}
                  />
                </Form.Item>
  
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password 
                    type='password'
                    onChange={(e)=>{
                      setPasswordReg(e.target.value);
                    }}
                  />
                </Form.Item>
  
                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
  
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
  
  
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(new Error("Should accept agreement")),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox>User Details are correct and up to date.</Checkbox>
                </Form.Item>
  
                <Row>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="default" htmlType="submit">
                      Cancel
                    </Button>
                  </Form.Item>
  
                  <Form.Item {...tailFormItemLayout}>
                    <Button onClick={register} type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Row>
                
              </Form>
            </Card>
          </Col>
          <Col span={8}></Col>
        </Row>
      </div>
    );
}

export default AdminRegistration;

