import Images from "../../ImageComponent/Images";
import { Button, Card } from "antd";
import { GiRecycle, FaLeaf, GrDeliver } from "../../Icon/Icon";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Images.Banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        marginTop:"0"
      }}
    >
      <div
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
        <h3 style={{ fontSize: "6em", fontFamily: "sans-serif" }}>
          <span style={{ color: "green" }}>Organic</span> Foods <br /> at your{" "}
          <br />
          <span style={{ color: "black" }}>Doorsteps</span>
        </h3>
        <p
          style={{ fontSize: "1.5em", color: "grey", fontFamily: "sans-serif" }}
        >
          Dignissim massa diam elementum.
        </p>
        <div>
          <Button
            style={{
              fontSize: "1.5em",
              padding: "1.5em",
              border: "none",
              borderRadius: "2em",
              color: "white",
              backgroundColor: "green",
            }}
          >
            START SHOPING
          </Button>
          <Button
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
            <p style={{ fontSize: "1.5em" }}>STORE LOCATIONS </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "1.4em",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Card
            style={{
              backgroundColor: "green",
              border: 0,
              borderRadius: 0,
              color: "white",
            }}
          >
            <div
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
            style={{
              backgroundColor: "Gray",
              border: 0,
              borderRadius: 0,
              color: "white",
            }}
          >
            <div
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
            style={{
              backgroundColor: "Orange",
              border: 0,
              borderRadius: 0,
              color: "white",
            }}
          >
            <div
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
