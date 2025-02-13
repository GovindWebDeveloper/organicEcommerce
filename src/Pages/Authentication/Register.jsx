import Images from "../../assets/Images/ImageComponent/Images";
import { Input, Button, Form, Radio } from "antd";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const handleClickHaveAccount = () => {
    navigate("/login");
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const options = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "110vh",
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
          width: "800px",
          height: "700px",
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
        <h1 style={{ color: "white", fontSize: "3em" }}>
          User Regitration Form
        </h1>
        <div style={{ width: "80%" }}>
          <Form name="registrationForm" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username" },
              ]}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Input
                  placeholder="First Name"
                  style={{ width: "49%", height: "3em", marginTop: "1em" }}
                />
                <Input
                  placeholder="Last Name"
                  style={{ width: "49%", height: "3em", marginTop: "1em" }}
                />
              </div>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input
                placeholder="Email example@domain.com"
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <Form.Item
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please Select your Gender",
                },
              ]}
            >
              <Radio.Group
                block
                options={options}
                defaultValue=""
                optionType="button"
                buttonStyle="solid"
                style={{
                  width: "100%",
                  height: "3em",
                  marginTop: "1em",
                }}
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input
                placeholder="Username "
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input
                placeholder="Password "
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input
                placeholder="Confirm Password "
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "2em",
                  fontSize: "1.3em",
                  fontFamily: "sans-serif",
                }}
              >
                SignUp
              </Button>
            </Form.Item>
            <p style={{ fontSize: "1.3em" }}>
              Already have account? Please{" "}
              <a style={{ color: "blue" }} onClick={handleClickHaveAccount}>
                Login here...
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
