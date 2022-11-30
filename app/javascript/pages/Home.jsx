import { Space, List, Button } from 'antd';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [homes, setHomes] = useState([])
  useEffect(() => {
    axios.get('/api/v1/homes/index')
      .then(res => {
        console.log(res)
        setHomes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
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
      dataSource={homes}

      renderItem={(item) => (
        <List.Item key={item.id}
          actions={[
            <>
              <Space>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }).format(item.price)}
                <>
                <Button type="primary" shape="round" size='small'>
                  <Link to="./pages/Payment">Make Payment</Link>
                </Button>
                </>
              </Space>
            </>
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src={`./images/${item.image_url}`}
            />
          }
        >
          <List.Item.Meta
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}

export default Home;
