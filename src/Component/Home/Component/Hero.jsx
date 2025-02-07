import { useState } from "react";
import { Layout, Button, Card } from "antd";
import Images from "../../ImageComponent/Images";

const { Content } = Layout;


const Hero = () => {
  const [isHoverd, setIsHovered] = useState(false);
  return (
    <Content
      style={{
        backgroundImage: `url(${Images.Banner})`,
        backgroundSize: "cover",
        width: "100%",
        minHeight: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <h2 style={{ fontSize: "6vw", color: "black", lineHeight: "1", textAlign: "left"}}>
          <span
            style={{
              fontSize: "6vw",
              fontFamily: "sans-serif",
              color: "#1efa26",
            }}
          >
            Organic
          </span>{" "}
          Foods <br />
          <span style={{ fontSize: "5vw", color: "black" }}>at Your</span>{" "}
          <br />
          <span style={{ fontSize: "6vw", color: "black" }}>Doorsteps</span>
        </h2>
        <p
          style={{
            marginTop: "20px",
            fontSize: "2vw",
            fontFamily: "sans-serif",
            color: "gray",
            textAlign: "left",
          }}
        >
          Dignissim massa diam elementum.
        </p>
        <div
          style={{
            margin: "40px auto",
            marginLeft: "0",
            maxWidth: "500px",
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "flex-start",
          }}
        >
          <Button
            style={{
              padding: "20px 25px",
              fontSize: "1.5vw",
              borderRadius: "10px",
              backgroundColor: isHoverd ? "blue" : "#1efa26",
              color: "white",
              border:"none",
              cursor:"pointer",
              hover: {
                backgroundColor: "blue",
              }
            }}

          >
            START SHOPPING
          </Button>
          <Button
            style={{
              padding: "20px 25px",
              fontSize: "1.5vw",
              borderRadius: "10px",
              backgroundColor: isHoverd ? "blue" : "#1efa26",
              color: "white",
              border:"none",
              cursor:"pointer",
              hover: {
                backgroundColor: "blue",
              }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            
          >
            JOIN NOW
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[
            { label: "PRODUCTS VARIETY", value: "14k+" },
            { label: "HAPPY CUSTOMERS", value: "50k+" },
            { label: "STORE LOCATIONS", value: "10k+" },
          ].map((item, index) => (
            <Card
              key={index}
              style={{
                background: "none",
                textAlign: "center",
                border: 0,
                width: "150px",
              }}
            >
              <h1 style={{ fontSize: "2vw" }}>{item.value}</h1>
              <p style={{ fontSize: "1vw" }}>{item.label}</p>
            </Card>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[
            { title: "Fresh from farm", color: "#1efa26" },
            { title: "100% Organic", color: "#8a867f" },
            { title: "Free Delivery", color: "#d18b11" },
          ].map((card, in
const Advertise = () => {
  return (
    <div>
      Advertisement
    </div>
  )
}

export default Advertise
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    