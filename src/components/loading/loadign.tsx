import { Space, Spin } from "antd";
import React from "react";

const Loadign = () => {
  return (
    <>
        <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
    }}
  >
    <Space direction="vertical"  >
      <Spin  tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  </div>
    </>
  );
};

export default Loadign;
