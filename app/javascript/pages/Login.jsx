import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Checkbox, Typography, Divider } from 'antd';
import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import setAxiosHeaders from '../components/reusables/AxiosHeaders'

export default function LogIn() {
    const navigate = useNavigate();
    const form = useRef();
    const [loading, setLoading] = useState(false);
    //states for login/registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const check_user = () => {
        let path = "/api/v1/users/check_user";
        return new Promise((resolve, reject) => {
            axios(path)
                .then((response) => {
                    if (response.data.email) {
                        resolve(response.data.email);
                    } else {
                        reject(new Error("Failed"));
                    }
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        });
    };
    const onFinish = (values) => {
        setLoading(true);
        const session = { "user": values }
        let path = " /users/sign_in";
        setAxiosHeaders();
        axios.post(path, session)
            .then(async () => {
                await check_user();
                setLoading(false);
                setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                }, 2000);
                message.success('Succesfully Logged in')
            })
            .catch((error) => {
                console.log(error);
                message.error("Invalid Email or Password Combination")
                setLoading(false);

            })
    }
    return (
        <div className='appBg'>
            <Form className='loginForm' ref={form} layout="horizontal" onFinish={onFinish} name="normal_login" initialValues={{ remember: true, }}  onSubmit={(e) => e.preventDefault()}>
                <Typography.Title>Account Login</Typography.Title>
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
                    <Input onChange={handleEmail}

                        placeholder="Enter Your Email"
                        value={email}
                        prefix={<MailOutlined className="site-form-item-icon" />}
                    />
                </Form.Item>

                <Form.Item name="password" label="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password onChange={handlePassword}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        value={password}
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember_me" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() =>(
                    <Button 
                        loading={loading} 
                        type='primary'
                        htmlType='submit'
                        block
                    >
                        Login
                    </Button>
                )}
                </Form.Item>
                <Divider style={{borderColor:"black"}}>Dont have an account</Divider>
                <div className='sign_up'>
                    <a href="">register now!</a>
                </div>
            </Form>
        </div>
    )
};

