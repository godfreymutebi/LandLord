import React, { Fragment } from 'react'
import { HomeOutlined, UploadOutlined, VideoCameraOutlined, UnorderedListOutlined, UserOutlined, DashboardOutlined, PoweroffOutlined } from '@ant-design/icons';
import { useNavigate, Route, Routes } from "react-router-dom";
import { Button, Dropdown, Layout, Menu, Space } from 'antd';
import Dashboard from './Dashboard';
import Apartments from '../pages/Apartments';
import Rentals from '../pages/Rentals';
import Home from '../pages/Home';
import Booking from '../pages/Booking'
import ButtonGroup from 'antd/lib/button/button-group';
const { Header, Content, Footer, Sider } = Layout;

//MenuItems for Top Nav Bar
const menu = (
  <Menu>
    <Menu.Item>Login</Menu.Item>
    <Menu.Item>LogOut</Menu.Item>
    <Menu.Item>Register</Menu.Item>
    <Menu.Item>FoggotPassword</Menu.Item>
  </Menu>
);

//SideNav
const items1 = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '/Dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },

  {
    key: '/pages/Rentals',
    icon: <UnorderedListOutlined />,
    label: 'Rentals',
  },
  {
    key: '/pages/Apartments',
    icon: <PoweroffOutlined />,
    label: 'Apartments',
  },
  {
    key: '/pages/Booking',
    icon: <PoweroffOutlined />,
    label: 'Booking',
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


const App = () => {
  return (
    <Layout style={{ display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh" }}>
      <Header1 />
      <Layout style={{ marginTop: 35 }}>
        <SideMenu1 />
        <Layout style={{ width: "auto", marginTop: 10 }}>
          <Content1 />
          <Footer1 />
        </Layout>
      </Layout>
    </Layout>
  )
};

export default App;

//Header
const Header1 = () => {
  return (
    <Header style={{ backgroundColor: "lightSkyBlue", zIndex: 1, display: "flex", flexDirection: "column", top: 0, left: 0, position: "fixed", width: "inherit" }}>
      <div className="logo" />
      <div style={{ backgroundColor: "lightSkyBlue", display: "flex", right: 20, padding: 10, position: "inherit", float: "right", width: 300 }}>
        <Fragment>
          <ButtonGroup>
              <Button type='primary'>Help</Button>
              <Button type='primary'>Contact Us</Button>
              <Dropdown overlay={menu} placement="bottomRight">
                <Button type='primary'>
                  Account
                </Button>
              </Dropdown>
          </ButtonGroup>
        </Fragment>
      </div>
    </Header>
  )
}

//Content 
const Content1 = () => {
  return (
    <Content style={{ minHeight: '100vh', margin: '24px 16px 0', overflow: 'initial', background: '#fff', display: "flex", flexDirection: "column", width: "inherit" }}>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          textAlign: 'center',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/Dashboard" element={<Dashboard />}>Dasboard</Route>
          <Route path="/pages/Booking" element={<Booking />}>Booking</Route>
          <Route path="/pages/Apartments" element={<Apartments />}>Apartments</Route>
          <Route path="/pages/Rentals" element={<Rentals />}>Rentals</Route>
        </Routes>
      </div>
    </Content>
  )
}

//SideMenu
const SideMenu1 = () => {
  const navigate = useNavigate();
  return (
    <Sider style={{ overflow: 'auto', minHeight: '100vh', position: 'fixed', background: '#fff', left: 0 }}>
      <Menu
        items={items1}
        onClick={({ key }) => {
          if (key === "LogOut") {
            //TODO, LogOUT
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        theme="light"
        mode="inline"
      />
    </Sider>
  )
}
//Footer
const Footer1 = () => {
  return (
    <Footer style={{ bottom: 0, textAlign: 'center', width: "inherit" }}> Ant Design ©2018 Created by Ant UED</Footer>
  )
}

