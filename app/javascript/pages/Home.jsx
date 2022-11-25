import React from "react";
import { Space, List, Button } from 'antd';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
  }
  //data fetching 
  componentDidMount() {
    const url = "/api/v1/homes/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ homes: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { homes } = this.state;

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
                  <Button shape="round" href="">Default Button</Button>
                </Space>
              </>
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
          </List.Item>
        )}
      />
    );
  }
}
export default Home;
