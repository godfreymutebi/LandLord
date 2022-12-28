import { Form, Button, Input, message, Typography, Divider } from "antd";
import React, { useState, useRef } from "react";
import { MailOutlined } from '@ant-design/icons';
import setAxiosHeaders from "../components/reusables/AxiosHeaders";
import axios from "axios";

const Password = () => {
    const form = useRef();
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    //checking user
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
        let path = " /users/password";
        setAxiosHeaders();
        axios.post(path, session)
            .then(async () => {
                await check_user();
                setLoading(false);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                message.success("Reset password instructions sent ")
            })
            .catch((error) => {
                console.log(error);
                message.error("Email entered does not exit")
                setLoading(false);

            })
    }
    return <div className="appBg">
        <Form className='loginForm' ref={form} onFinish={onFinish} onSubmit={(e) => e.preventDefault()}>
            <Typography.Title>Forgot your password?</Typography.Title>
            <Form.Item
                name="email" label="E-mail"
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
            <Form.Item>
                <Button
                    loading={loading}
                    type='primary'
                    htmlType='submit'
                    block
                >
                    Send Rest Password instructions
                </Button>
            </Form.Item>
            <Divider style={{ borderColor: "black" }}>Have an account?</Divider>
            <div className='sign_up'>
                <a href="/users/sign_in">Login</a>
            </div>
        </Form>
    </div>
}
export default Password;