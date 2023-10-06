"use client";
import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
import { USER_ROLE } from "@/constants/role";
import Header from "./Header";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = USER_ROLE.ADMIN;
  return (
    <Content style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ padding: "10px" }}>
        <UMBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "student",
              link: `/${base}/student`,
            },
          ]}
        />

        {children}
      </main>
    </Content>
  );
};

export default Contents;
