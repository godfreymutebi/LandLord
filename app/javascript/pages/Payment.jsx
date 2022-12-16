import React, { useRef } from 'react';
import { Button, Form, Input, InputNumber, Select, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
    const form = useRef();
    const onFinish = (values) => {
        // values.preventDefault();
        let token = document.querySelector('meta[name="csrf-token"]').content;
        const url = "/api/v1/payments/create";
        fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-Token': token
            },
            body: JSON.stringify(values),
        })
        .then((data) => {
            if (data.ok) {
                return data.json();
            }
            throw new Error("Network error.");
        })
        // Displaying results to console
        .then(data => console.log(data));
        navigate('/')
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <Form ref={form} onFinish={onFinish} layout="vertical" initialValues={{ prefix: '256', }} scrollToFirstError labelCol={{ span: 15 }} wrapperCol={{ span: 24}}>
                <Form.Item
                    name="first_name"
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder='Input Your First Name' />
                </Form.Item>
                <Form.Item
                    name="last_name"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder='Input Your Last Name' />
                </Form.Item>

                <Form.Item
                    name="phone_number"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        style={{
                            width: '100%',
                        }}
                        placeholder='Input Your Phone number'
                    />
                </Form.Item>
                <Form.Item
                    name="nin_number"
                    label="NIN Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your National Identification number!',
                        },
                    ]}
                >
                    <Input
                        placeholder='Input Your National Identification Number'
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="money_paid"
                    label="Money Paid"
                    rules={[
                        {
                            required: true,
                            message: 'Please input amount paid!',
                        },
                    ]}
                >
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                        placeholder='Input Amount Paid'
                    />
                </Form.Item>
                <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select date!', }]}>
                    < DatePicker
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input For place of address',
                        },
                    ]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Make Payment
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Payment;