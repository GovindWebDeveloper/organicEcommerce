import Images from "../../../assets/Images/ImageComponent/Images";
import { Button, Card } from "antd";
import { GiRecycle, FaLeaf, GrDeliver } from "../../../assets/Icon/Icon";
import "../../../Component/Responsive/ResponsiveHero/Hero.css";

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${Images.Banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        marginTop: "0",
      }}
    >
      <div
        className="hero-content"
        style={{
          margin: "auto",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <h3
          className="hero-heading"
          style={{ fontSize: "6em", fontFamily: "sans-serif" }}
        >
          <span style={{ color: "green" }}>Organic</span> Foods <br /> at your{" "}
          <br />
          <span style={{ color: "black" }}>Doorsteps</span>
        </h3>
        <p
          className="hero-subtext"
          style={{ fontSize: "1.5em", color: "grey", fontFamily: "sans-serif" }}
        >
          Dignissim massa diam elementum.
        </p>
        <div className="hero-buttons">
          <Button
            className="hero-button"
            style={{
              fontSize: "1.5em",
              padding: "1.5em",
              border: "none",
              borderRadius: "2em",
              color: "white",
              backgroundColor: "green",
            }}
          >
            START SHOPPING
          </Button>
          <Button
            className="hero-button"
            style={{
              fontSize: "1.5em",
              padding: "1.5em",
              border: "none",
              borderRadius: "2em",
              color: "white",
              backgroundColor: "black",
              marginLeft: "1.5em",
            }}
          >
            JOIN NOW
          </Button>
        </div>
        <div
          className="hero-stats"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "2em",
            marginTop: "1.5em",
          }}
        >
          <div>
            <h2 style={{ fontSize: "3em", textAlign: "left" }}>14k+</h2>
            <p style={{ fontSize: "1.5em" }}>PRODUCT VARIETIES</p>
          </div>
          <div>
            <h2 style={{ fontSize: "3em", textAlign: "left" }}>50k+</h2>
            <p style={{ fontSize: "1.5em" }}>HAPPY CUSTOMERS</p>
          </div>
          <div>
            <h2 style={{ fontSize: "3em", textAlign: "left" }}>10+</h2>
            <p style={{ fontSize: "1.5em" }}>STORE LOCATIONS</p>
          </div>
        </div>
        <div
          className="hero-cards"
          style={{
            marginTop: "1.4em",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Card
            className="hero-card"
            style={{
              backgroundColor: "green",
              border: 0,
              borderRadius: 0,
              color: "white",
            }}
          >
            <div
              className="hero-card-content"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5em",
              }}
            >
              <div>
                <GiRecycle style={{ fontSize: "3em" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.5em" }}>Fresh from farm</h3>
                <p style={{ fontSize: "1.2em" }}>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipi elit.
                </p>
              </div>
            </div>
          </Card>
          <Card
            className="hero-card"
            style={{
              backgroundColor: "Gray",
              border: 0,
              borderRadius: 0,
              color: "white",
            }}
          >
            <div
              className="hero-card-content"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5em",
              }}
            >
              <div>
                <FaLeaf style={{ fontSize: "3em" }} />
              </div>

              <div>
                <h3 style={{ fontSize: "1.5em" }}>100% Organic</h3>
                <p style={{ fontSize: "1.2em" }}>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipi elit.
                </p>
              </div>
            </div>
          </Card>
          <Card
            className="hero-card"
            style={{
              backgroundColor: "Orange",
              border: 0,
              borderRadius: 0,
              color: "white",
            }}
          >
            <div
              className="hero-card-content"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5em",
              }}
            >
              <div>
                <GrDeliver style={{ fontSize: "3em" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.5em" }}>Free delivery</h3>
                <p style={{ fontSize: "1.2em" }}>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipi elit.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
