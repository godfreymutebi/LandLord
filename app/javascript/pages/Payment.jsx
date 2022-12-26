import React, { useRef, useState } from 'react';
import { Button, Form, Input, InputNumber, Select, DatePicker, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import setAxiosHeaders from '../components/reusables/AxiosHeaders'
import axios from 'axios';
const Payment = () => {
    const [IsLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const form = useRef();

    // axios posting
    const onFinish = (values) => {
        setIsLoading(true);
        setAxiosHeaders();
        let path = '/api/v1/payments/create'
        axios.post(path, values)
            .then((response) => {
                console.log(response.data);
                setIsLoading(false);
                setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                }, 2000);
                message.success('Your Payment is submitted pending approval')
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response)
                setIsLoading(false);
                message.err(err.response.data.error.message)
            })
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <Form ref={form} onFinish={onFinish} onSubmit={(e) => e.preventDefault()} layout="vertical" initialValues={{ prefix: '256', }} scrollToFirstError labelCol={{ span: 15 }} wrapperCol={{ span: 24 }}>
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
                <Form.Item shouldUpdate >
                    {() =>(
                    <Button IsLoading={IsLoading} type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Make Payment
                    </Button>
                   )}
                </Form.Item>
            </Form>
        </div>
    );
};
export default Payment;
