import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Spinner = () => {
  return (
    <>
    <div
      style={{
        margin: "20px 0px",
        marginBottom: 20,
        padding: "30px 50px",
        textAlign: "center",
        borderRadius: "4px",
      }}
    >
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
        size="large"
      />
    </div>
  </>
  );
};

export default Spinner;