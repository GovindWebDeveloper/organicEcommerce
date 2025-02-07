import Images from "../../ImageComponent/Images";
import { Form, Input, Button } from "antd";
const DiscountForm = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Images.BgDiscountForm})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "95%",
        height: "400px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "50px",
          gap: "20px",
        }}
      >
        <div>
          <h1 style={{ textAlign: "left", color: "white", fontSize: "4em" }}>
            Get 25% Discount <br />
            on your first <br />
            purchase
          </h1>
          <h2 style={{ color: "white",marginTop:"1em" }}>
            Just Sign Up & Register it now to become member
          </h2>
        </div>
        <div>
          <Form style={{ width: "400px" }}>
            <Form.Item>
              <Input
                placeholder="Name"
                style={{ border: 0, borderRadius: 0, height: "40px" }}
              />
            </Form.Item>

            <Form.Item>
              <Input
                placeholder="Email Address"
                style={{ border: 0, borderRadius: 0, height: "40px" }}
              />
            </Form.Item>
            <Button
              hoverable
              style={{
                width: "400px",
                border: 0,
                borderRadius: 0,
                background: "black",
                color: "white",
                height: "40px",
                fontSize: "1.5em",
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
