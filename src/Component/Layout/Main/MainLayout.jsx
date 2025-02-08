import { Layout } from "antd";

import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import Home from "../../Home/Home";

const { Content } = Layout;

const MainLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <HeaderComponent />
    <Content style={{overflow:"auto"}}>
      <Home />
    </Content>
    <FooterComponent />
  </Layout>
);
export default MainLayout;
