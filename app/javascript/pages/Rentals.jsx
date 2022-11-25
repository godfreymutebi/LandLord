import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  title: `ant design part ${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const App = () => (
  <List
    bordered
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    //more work
    dataSource={data}
    footer={
      <div>
        <b>ant design</b>
      </div>
    }
    renderItem={(item) => (
      <List.Item
        actions={[
          <IconText text="156" icon={StarOutlined} key="list-vertical-star-o" />,
          <IconText text="156" icon={LikeOutlined} key="list-vertical-like-o" />,
          <IconText text="2" icon={MessageOutlined} key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          title={item.title}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default App;