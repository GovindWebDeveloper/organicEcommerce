import { Layout } from "antd";
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

const FooterComponent = () => {
  return (
    <Footer
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "start",
        backgroundColor: "#f2c3d4",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "60px" }}>
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
              <a href="/">About Us</a>
            </li>
            <li style={listStyle}>
              <a href="/">Conditions</a>
            </li>
            <li style={listStyle}>
              <a href="/">Our Journals</a>
            </li>
            <li style={listStyle}>
              <a href="/">Career</a>
            </li>
            <li style={listStyle}>
              <a href="/">Affiliate Programme</a>
            </li>
            <li style={listStyle}>
              <a href="/">Ultras Press</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li style={listStyle}>
              <a href="/">Offers</a>
            </li>
            <li style={listStyle}>
              <a href="/">Discount Coupons</a>
            </li>
            <li style={listStyle}>
              <a href="/">Stores</a>
            </li>
            <li style={listStyle}>
              <a href="/">Track Order</a>
            </li>
            <li style={listStyle}>
              <a href="/">Shop</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Customer Service</h2>
          <ul>
            <li style={listStyle}>
              <a href="/">FAQ</a>
            </li>
            <li style={listStyle}>
              <a href="/">Contact</a>
            </li>
            <li style={listStyle}>
              <a href="/">Privacy Policy</a>
            </li>
            <li style={listStyle}>
              <a href="/">Return & Refund</a>
            </li>
            <li style={listStyle}>
              <a href="/">Cookie Guidelines</a>
            </li>
            <li style={listStyle}>
              <a href="/">Delivery Information</a>
            </li>
          </ul>
        </div>
        <div>
        <h2>Subscribe Us</h2>
        <p>
          Subscribe to our newsletter to get <br /> updates about our grand
          offers.
        </p>
      </div>
      </div>
      
    </Footer>
  );
};

export default FooterComponent;
