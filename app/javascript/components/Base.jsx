import React from 'react';
import {Layout} from 'antd';
const { Content, Footer} = Layout;
import { Route, Routes } from "react-router-dom";
import Apartments from '../pages/Apartments';
import Rentals from '../pages/Rentals';
import Home from '../pages/Home';
import Booking from '../pages/Booking'
import Payment from '../pages/Payment';
import AppHeader from './AppHeader';


const Base = () => {
    return (
        <Layout>
            <AppHeader />
            <Content>

                <Layout
                    className="site-layout-background"
                    style={{
                        padding: '10px 0',
                    }}
                >
                    <Content className="site-layout-background"
                        style={{
                            padding: '0 10px',
                            minHeight: 280,
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Home />}>Home</Route>
                            <Route path="/pages/Booking" element={<Booking />}>Booking</Route>
                            <Route path="/pages/Apartments" element={<Apartments />}>Apartments</Route>
                            <Route path="/pages/Rentals" element={<Rentals />}>Rentals</Route>
                            <Route path="/pages/Payment" element={<Payment />}>Payment</Route>
                        </Routes>
                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );

}

export default Base;




