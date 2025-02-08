import { Layout, Space, Input, Button } from "antd";
import Images from "../../ImageComponent/Images";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  AmazonOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const listStyle = {
  listStyle: "none",
  padding: "5px",
  color: "black",
  fontSize: "15px",
};

const linkStyle = {
  color: "black",
  fontSize: "1.2em",
};

const FooterComponent = () => {
  return (
    <Footer
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "start",
        margin: "3em auto",
        gap: "60px",
      }}
    >
      <div>
        <img src={Images.OrganicLogo} width="240" height="70" alt="Logo" />
        <div
          style={{
            fontSize: "25px",
            display: "flex",
            gap: "15px",
            marginTop: "10px",
          }}
        >
          <FacebookOutlined />
          <TwitterOutlined />
          <YoutubeOutlined />
          <InstagramOutlined />
          <AmazonOutlined />
        </div>
      </div>
      <div>
        <h2>Organic</h2>
        <ul>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              About Us
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Conditions
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Our Journals
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Career
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Affiliate Programme
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Ultras Press
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Offers
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Discount Coupons
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Stores
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Track Order
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Shop
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Customer Service</h2>
        <ul>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              FAQ
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Contact
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Privacy Policy
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Return & Refund
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Cookie Guidelines
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Delivery Information
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Subscribe Us</h2>
        <p style={linkStyle}>
          Subscribe to our newsletter to get <br /> updates about our grand
          offers.
        </p>
        <Space.Compact
          style={{
            width: "100%",
            margin:"1em auto"
          }}
        >
          <Input/>
          <Button type="primary">Submit</Button>
        </Space.Compact>
      </div>
    </Footer>
  );
};

export default FooterComponent;
