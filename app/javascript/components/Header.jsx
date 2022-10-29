import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;
import LogIn from "./Login";
import Register from "./Signup";
export default () => (
  <Header>
    <div className="logo" />
   <div className="loga">
   <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">
        <Register />
      </Menu.Item>
      <Menu.Item key="3">
        <LogIn />
      </Menu.Item>
    </Menu>
   </div>
  </Header>
);
