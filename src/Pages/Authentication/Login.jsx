import Images from "../../assets/Images/ImageComponent/Images";
import { Input, Button, Form } from "antd";
import { FaCircleUser } from "../../assets/Icon/Icon";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleClickDontHaveAccount = () => {
    navigate("/register");
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "90vh",
        backgroundImage: `url(${Images.BgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "700px",
          height: "550px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid grey",
          padding: "2em",
          background: "linear-gradient(#e66465, #9198e5)",
          borderRadius: "10px",
          boxShadow: "1px 1px 10px grey",
          marginLeft: "10em",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3em", marginBottom: "1em" }}>
          User Login Form{" "}
        </h1>
        <FaCircleUser style={{ fontSize: "6em", color: "white" }} />
        <div style={{ width: "80%" }}>
          <Form name="loginForm" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username" },
              ]}
            >
              <Input
                placeholder="Username"
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "1.2em",
                marginTop: "0.5em",
              }}
            >
              <a style={{ color: "blue" }} href="/">
                Forget Password
              </a>
              <a style={{ color: "blue" }} href="/">
                Change Password
              </a>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "2em",
                  marginTop: "1.5em",
                  fontSize: "1.3em",
                  fontFamily: "sans-serif",
                }}
              >
                Login
              </Button>
            </Form.Item>
            <p style={{ fontSize: "1.3em" }}>
              Do not have account? Please{" "}
              <a
                style={{ color: "blue", fontFamily: "sans-serif" }}
                onClick={handleClickDontHaveAccount}
              >
                Register here...
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
