import { Breadcrumb, Layout, Menu, Button, Dropdown, Space } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import React from 'react'
import { HomeOutlined, UploadOutlined, VideoCameraOutlined, UnorderedListOutlined, UserOutlined, DashboardOutlined, PoweroffOutlined } from '@ant-design/icons';
import { useNavigate, Route, Routes } from "react-router-dom";
// import Login from '../pages/Login';
import Apartments from '../pages/Apartments';
import Rentals from '../pages/Rentals';
import Home from '../pages/Home';
import Booking from '../pages/Booking'
import Payment from '../pages/Payment';

//MenuItems for Top Nav Bar
const menu = (
  <Menu>
    <Menu.Item >Login</Menu.Item>
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


const Base = () => {
  return (
    <Layout>
      <Header1 />
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dasboard</Breadcrumb.Item>
          <Breadcrumb.Item>Rentals</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{
            padding: '24px 0',
          }}
        >
          <SideMenu1 />
          <Content className="site-layout-background"
            style={{
              padding: '0 24px',
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


//Header
const Header1 = () => {
  return (
    <Header className='header' theme="light" style={{ backgroundColor: "lightskyblue" }} >
      <div className="logo" />
      <div style={{ float: "right", width: 300 }}>
        <Space>
          <Button >Help</Button>
          <Button >Contact Us</Button>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>
              Account
            </Button>
          </Dropdown>
        </Space>
      </div>
    </Header>
  )
}

//SideMenu
const SideMenu1 = () => {
  const navigate = useNavigate();
  return (
    <Sider className="site-layout-background" width={200}>
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
        style={{ height: '100%' }}
      />
    </Sider>
  )
}
