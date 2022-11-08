
import { HomeOutlined, QuestionCircleOutlined, UploadOutlined, VideoCameraOutlined, UnorderedListOutlined, UserOutlined, LaptopOutlined, DashboardOutlined, NotificationOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate, BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LogOut from '../components/LogOut';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import UserList from '../components/UserList';
import Dashboard from '../components/Dashboard';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

const items1 = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '../components/Dasboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '../components/UserList',
    icon: <UnorderedListOutlined />,
    label: 'UserList',
  },
  {
    key: '/SignOut',
    icon: <PoweroffOutlined />,
    label: 'SignOut',
  },
  {
    key: '5',
    icon: <VideoCameraOutlined />,
    label: 'nav 5',
    children: [
      {
        key: '10',
        icon: <UploadOutlined />,
        label: 'nav 10',
      },
      {
        key: '11',
        icon: <UserOutlined />,
        label: 'nav 11',
      },
    ]
  },
  {
    key: '6',
    icon: <UploadOutlined />,
    label: 'nav 6',
    children: [
      {
        key: '20',
        icon: <UploadOutlined />,
        label: 'nav 20',
      },
      {
        key: '22',
        icon: <UserOutlined />,
        label: 'nav 22',
      },
    ]
  },
]

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: "lightskyblue", display: "flex" }}>
        <div className="logo" />
        <Menu mode="horizontal" style={{ marginLeft: "auto", width: "200px", backgroundColor: "lightskyblue", alignItems: "left", justifyContent: "left", display: "flex" }}>
          <Menu.Item
            key="3">
            <LogIn />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu mode="inline" style={{ height: '100%' }}
              onClick={({ key }) => {
                if (key === "SignOut") {
                  //TODO, SIGNOUT
                } else {
                  navigate(key);
                }
              }}
              defaultselectedkeys={[window.location.pathname]}
              items={items1}
            />
          </Sider>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 500 }}>
            Content
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: 'grey' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>

  )
};


