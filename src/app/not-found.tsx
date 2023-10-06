"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button, Result } from "antd";

const NotFoundPage: React.FC = () => {
  const router = useRouter();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      style={{height:"100vh"}}
      extra={
        <Button
          type="primary"
          onClick={() => {
            router.push("/");
          }}
        >
          Back Home
        </Button>
      }
    />
  );
};

export default NotFoundPage;
