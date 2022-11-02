// // import React from "react";
// // import { Layout, Menu } from "antd";

// // const { Header } = Layout;
// // import LogIn from "./Login";
// // import Register from "./Signup";
// // export default () => (
// //   <Header>
// //     <div className="logo" />
// //    <div className="loga">
// //    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
// //       <Menu.Item key="1">Home</Menu.Item>
// //       <Menu.Item key="2">
// //         <Register />
// //       </Menu.Item>
// //       <Menu.Item key="3">
// //         <LogIn />
// //       </Menu.Item>
// //     </Menu>
// //    </div>
// //   </Header>


// import React from "react"
// import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import { Menu } from 'antd';
// import { Route, Routes, useNavigate } from "react-router-dom";
// import { 
//   DashboardOutlined,
//   HomeOutlined,
//   PoweroffOutlined,
//   UnorderedListOutlined,
//   UserOutlined
// } from "@ant-design/icons/lib/icons";
// import { func } from "prop-types";

// export default function App() {
//   return(
  
//    <div style={{display: "flex", flexDirection: "column", flex: 1, height:"100vh"}}>
//       <Header />
//       <div style={{display: "flex", flexDirection: "row", flex: 1}}>
//         <SideMenu />
//         <Content />
//       </div>
//      <Footer />
//    </div>
//   )
// }

// function Header() {
//   return <div style={{height:60, backgroundColor:"lightskyblue", color:"white", display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"bold",}}>Header</div>
// }

// function Footer() {
//   return <div style={{height:60, backgroundColor:"lightgray", color:"black", display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"bold",}}>Footer</div>
// }

// function SideMenu() {
//   const navigate = useNavigate();
//   return(
//     <div>
//       <menu
//         onClick={({key})=>{
//           if(key === "SignOut"){
//             //TODO, SIGNOUT
//           }else{
//             navigate(key);
//           }
//         }}
//         defaultselectedkeys={[window.location.pathname]}
//         items={[
//           {label: "Home", key:"/", icon: <HomeOutlined />},
//           {label: "Dashboard", key:"/Dasboard",  icon: <DashboardOutlined />},
//           {label: "UserList", key:"/UserList",  icon: <UnorderedListOutlined />},
//           {label: "signOut", key:"/SignOut", icon: <PoweroffOutlined />, danger:true},
//         ]} 
//         >
//       </menu>
//     </div>
//   )
// }

// function Content() {
//   return(
//     <div>
//       <Routes>
//         <Route path="/" element={<div>Home</div>}></Route>
//         <Route path="/Dashboard" element={<div>Dashboard</div>}></Route>
//         <Route path="/UserList" element={<div>UserList</div>}></Route>
//         <Route path="/SignOut" element={<div>SignOut</div>}></Route>
//       </Routes>
//     </div>
//   )
// }
// // );

