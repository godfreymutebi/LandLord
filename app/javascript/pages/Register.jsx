import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useState, useRef } from 'react';

export default function Register() {
  const form = useRef();
  const [Visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const url = "/signup";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
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
  };
  return (
    <>
      <Modal title="Sign_up to continue" visible={Visible} onCancel={handleCancel} footer={null} >
        <Form ref={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" label="E-mail"
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
          <Form.Item name="password" label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="confirm" label="Confirm Password" dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}