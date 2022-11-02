
import {HomeOutlined,QuestionCircleOutlined, UploadOutlined, VideoCameraOutlined, UnorderedListOutlined, UserOutlined, LaptopOutlined, DashboardOutlined, NotificationOutlined, PoweroffOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
import LogIn from './Login';
const { Header, Content, Footer, Sider } = Layout;

const items2 = [
  {
    key: '/Home',
    icon: <QuestionCircleOutlined />,
    label: 'Help',
  },
  {
    key: '/login',
    icon: <UserOutlined />,
    label: 'LogIn/Register',
  }
]

const items1 = [ 
  {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '/Dasboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
 {
    key: '/UserList',
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
    children:[
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
    children:[
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

export default function App(){
  const navigate = useNavigate();
  return(
    <Layout>
      <Header style={{ backgroundColor:"lightskyblue", display:"flex" }}>
        <div className="logo" />
        <Menu 
        style={{ marginLeft:"auto", width: "250px", backgroundColor:"lightskyblue", alignItems:"left", justifyContent:"left", display:"flex"}} 
        mode="horizontal"

        defaultSelectedKeys={[window.location.pathname]}
        items={items2} 
      />
      </Header>
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
         <Breadcrumb.Item>List</Breadcrumb.Item>
         <Breadcrumb.Item>App</Breadcrumb.Item>
       </Breadcrumb>
       <Layout
         className="site-layout-background"
         style={{
           padding: '24px 0',
         }}
       >
         <Sider className="site-layout-background" width={200}>
           <Menu
             mode="inline"
             style={{
               height: '100%',
             }}
             onClick={({key})=>{
              if(key === "SignOut"){
                //TODO, SIGNOUT
              }else{
                navigate(key);
              }
            }}
            defaultselectedkeys={[window.location.pathname]}
            items={items1}
           />
         </Sider>
         <Content
           style={{
             padding: '0 24px',
             minHeight: 280,
           }}
         >
           Content
         </Content>
       </Layout>
     </Content>
     <Footer
       style={{
         textAlign: 'center',
         backgroundColor: 'grey',
 
       }}
     >
       Ant Design ©2018 Created by Ant UED
     </Footer>
   </Layout>
  )
};
  
 
