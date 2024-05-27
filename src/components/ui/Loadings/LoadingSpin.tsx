import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { ConfigProvider, Spin } from 'antd';

const LoadingSpin: React.FC = () => (
    <ConfigProvider
  theme={{
    token: {
        colorPrimary:'black'
    },
  }}
>
<Spin
    indicator={
      <LoadingOutlined className="text-black" style={{ fontSize: 80 }} spin />
    }
  />
</ConfigProvider>

);

export default LoadingSpin;
