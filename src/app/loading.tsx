import { Col, Row, Space, Spin } from "antd";
const Loading = () => {
  return (
    
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
      <Spin  size="large">
        <div className="content" />
      </Spin>
    </Space>
  </div>
    
  );
};

export default Loading;
