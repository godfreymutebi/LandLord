import { Button, Checkbox, Divider, Form, Input, Typography, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import setAxiosHeaders from '../components/reusables/AxiosHeaders';

export default function Register() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');

     // Handling the email change
     const handleEmail = (e) => {
        setEmail(e.target.value);
    };

     // Handling the password change
     const handlePassword = (e) => {
        setPassword(e.target.value);
    };

     // Handling the password change
     const handlePassword_confirmation = (e) => {
        setPassword_confirmation(e.target.value);
    };

    //checking email
    const Check_email = () => {
        let path = "/api/v1/users/check_user";
        return new Promise((resolve, reject) => {
            axios(path)
                .then((response) => {
                    if (response.data.email) {
                       resolve()
                    } else {
                        reject(new Error("Email alreaddy exists"))
                    }
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        });
    }

    const onFinish = (values) => {
        setLoading(true);
        setAxiosHeaders();
        const session = { "user": values }
        let path = "/users";
        axios.post(path, session)
            .then(async() => {
                await Check_email();
                setLoading(false);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                message.success('Succesfully Registered')
            })
            .catch((error) => {
                console.log(error);
                message.error("Email already exists");
                setLoading(false);

            })
    }

    return (
        <div className='appBg'>
            <Form
                ref={form} onFinish={onFinish}
                className='loginForm'
                onSubmit={(e) => e.preventDefault()}
            >
                <Typography.Title style={{ textAlign: 'center' }} >Register Here</Typography.Title>
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
                    <Input
                     placeholder="Enter your email"
                     prefix={<MailOutlined className="site-form-item-icon" />}
                     onChange={handleEmail}
                     />
                </Form.Item>
                <Form.Item name="password" label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password 
                     placeholder="Enter your password"
                     prefix={<LockOutlined className="site-form-item-icon" />}
                     onChange={handlePassword}
                     />
                </Form.Item>
                <Form.Item
                    name="password_confirmation"
                    label="Confirm Password"
                    dependencies={['password']}
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
                    <Input.Password 
                    placeholder="Confirm your password" 
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    onChange={handlePassword_confirmation}
                    />
                </Form.Item>
                <Form.Item >
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        block
                    >
                        Register
                    </Button>
                </Form.Item>
                <Divider style={{ borderColor: "black" }}>Have an account?</Divider>
                <div className='sign_up'>
                    <a href="/users/sign_in">Login</a>
                </div>
            </Form>
        </div>
    )
}
