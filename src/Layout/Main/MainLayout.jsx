import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

const { Content } = Layout;

const MainLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <HeaderComponent />
    <Content style={{ overflow: "auto" }}>
      <Outlet /> {/* This will render the current route's component */}
    </Content>
    <FooterComponent />
  </Layout>
);

export default MainLayout;