import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React from 'react';
import { useState, useRef } from 'react';

export default function LogIn () {
//formRef = React.createRef();
const form = useRef();
const [Visible, setVisible] = useState(false);

const showModal = () => {
  setVisible(true);
};

const handleCancel = () => {
    setVisible(false);
  };

const onFinish = (values) => {
    const url = "http://localhost:3000/login";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then((data) => {
      if (data.ok) {
        handleCancel();
        return data.json();
      }
      throw new Error("Network error.");
    })
      //.catch((err) => console.error("Error: " + err));
  };

return(
   <>
    <Button type="primary" onClick={showModal}>
      LogIn
    </Button>
    <Modal title="Please login to continue" visible={Visible} onCancel={handleCancel} footer={null}>
    <Form ref={form} layout="vertical" onFinish={onFinish}
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}  
        >
        <Form.Item
            name="email"
            label="E-mail"
            rules={[
                {
                type: 'email',
                message: 'The input is not valid E-mail!',
                },
                {
                required: true,
                message: 'Please input your E-mail!',
                },
            ]}
            >
            <Input />
            </Form.Item>
    
        <Form.Item
            name="password"
            label="password"
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
            Log In
            </Button>
            Or <a href="">register now!</a>
        </Form.Item>
        </Form>
    </Modal>
   </>
)
};