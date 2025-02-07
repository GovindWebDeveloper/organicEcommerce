import Images from "../../ImageComponent/Images";
import {
  MenuOutlined,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  BookOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Space, Select, Input, Dropdown, Layout, Button } from "antd";
import { items, options } from "./Menu";
import { useState } from "react";
import DrawerComponent from "./Drawer";

const { Header } = Layout;

const HeaderComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "0 40px",
        }}
      >
        {/* Left Section - Logo, Menu Button, and Search */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {/* Logo */}
          <div>
            <img
              src={Images.OrganicLogo}
              alt="Logo"
              style={{ width: "150px", marginTop: "15px" }}
            />
          </div>

          {/* Drawer Menu Button */}
          <div>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: "25px" }} />}
              onClick={() => setVisible(true)}
            />
            <DrawerComponent
              visible={visible}
              onClose={() => setVisible(false)}
            />
          </div>

          {/* Search Bar */}
          <div>
            <Space.Compact style={{ height: "50px", padding: "0 10px" }}>
              <Select defaultValue="All Categories" options={options} />
              <Input
                placeholder="Search for more than 20000+ Products"
                addonAfter={<SearchOutlined />}
                style={{
                  width: "350px",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              />
            </Space.Compact>
          </div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "35px",
          }}
        >
          {/* Home Link */}
          <div>
            <li style={{ listStyle: "none" }}>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                HOME
              </a>
            </li>
          </div>

          {/* Pages Dropdown */}
          <div>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a
                onClick={(e) => e.preventDefault()}
                style={{
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                PAGES <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <Button>
            <UserOutlined />
          </Button>
          <Button>
            <BookOutlined />
          </Button>
          <Button>
            <ShoppingCartOutlined />
          </Button>
        </div>
      </Header>
    </>
  );
};

export default HeaderComponent;
