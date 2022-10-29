import { Breadcrumb, Layout, Menu } from 'antd';
import Header from "./Header";
import React from 'react';
const { Content, Footer } = Layout;
const App = () => (
  <Layout>
   <Header />
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        Content
      </div>
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
export default App;