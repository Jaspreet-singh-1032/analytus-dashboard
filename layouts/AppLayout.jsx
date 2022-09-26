import { useRouter } from "next/router";
import {
  PieChartOutlined,
  BarChartOutlined,
  FunnelPlotOutlined,
  OrderedListOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Typography } from "antd";
import React, { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("List", "list", <OrderedListOutlined />),
  getItem("Pie", "pie", <PieChartOutlined />),
  getItem("Bar", "bar", <BarChartOutlined />),
  getItem("Funnels", "funnel", <FunnelPlotOutlined />),
];

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onSelect={(e) => router.push(e.key)}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Title
            style={{
              padding: "10px",
            }}
            level={3}
          >
            Dashboard
          </Title>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Analytus Dashboard ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
