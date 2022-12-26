import React from "react";
import { HomeFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Menu, Button, message } from "antd";
import axios from "axios";
import setAxiosHeaders from "./reusables/AxiosHeaders";

const AppHeader = () => {
    const navigate = useNavigate()

    const handleLogout = (e) => {
        setAxiosHeaders
        let path = "/users/sign_out";
        axios.get(path)
            .then(() => {
                navigate("/users/sign_in");
                message.destroy("Successfully Logged out")
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: 50
    }}
        className="header">

        <Menu onClick={({ key }) => {
            if (key === "LogOut") {
                // handleLogout;
            } else {
                navigate(key);
            }
        }} mode="horizontal">
            <Menu.Item key=""> <HomeFilled style={{ fontSize: '30px', }} /></Menu.Item>
            <Menu.Item key="/pages/Rentals">Rentals</Menu.Item>
            <Menu.Item key="/pages/Booking">Coatages</Menu.Item>
            <Menu.Item key="/pages/Apartments">Apartments</Menu.Item>
            <Menu.Item key="LogOut" style={{ marginLeft: 'auto' }}>
                <Button onClick={handleLogout} type='primary'>
                    LogOut
                </Button>
            </Menu.Item>
        </Menu>
    </div>
}
export default AppHeader;