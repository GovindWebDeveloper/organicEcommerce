import { Layout } from "antd";

import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import Home from "../../Home/Home";

const MainLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <HeaderComponent />
    <Home />
    <FooterComponent />
  </Layout>
);
export default MainLayout;
