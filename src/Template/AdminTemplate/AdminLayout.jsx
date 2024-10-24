import React, { useState } from "react";
import {
  EditOutlined,
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import AdminHeader from "../../pages/AdminPage/AdminHeader";
import UserTab from "../../pages/AdminPage/UserTab";
import Dashboard from "../../pages/AdminPage/Dashboard";
import MovieTab from "../../pages/AdminPage/MovieTab";
import TheatresTab from "../../pages/AdminPage/TheatresTab";
const { Content, Footer, Sider } = Layout;
const siderStyle = {
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};
const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Users",
  },
  {
    key: "3",
    icon: <VideoCameraOutlined />,
    label: "Movies",
  },
  {
    key: "4",
    icon: <EditOutlined />,
    label: "Theatres",
  },
];

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedTab, setSelectedTab] = useState("1");

  // Nội dung sẽ thay đổi theo tab đã chọn
  const renderContent = () => {
    switch (selectedTab) {
      case "2":
        return <UserTab />;
      case "3":
        return <MovieTab />;
      case "4":
        return <TheatresTab />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="bg-blue-600 text-white py-12 text-center font-bold text-2xl mb-4">
          ADMIN
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={(e) => setSelectedTab(e.key)}
        />
      </Sider>
      <Layout
        style={{
          marginInlineStart: 200,
        }}
      >
        <AdminHeader />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          {renderContent()}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
