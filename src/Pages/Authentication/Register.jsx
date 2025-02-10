import { Button, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Register = () => (
  <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
    <Form.Item
      label="First Name"
      name="firstname"
      rules={[
        {
          required: true,
          message: "Please input your First Name!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Last Name"
      name="lastname"
      rules={[
        {
          required: true,
          message: "Please input your Last Name!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your Email!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Mobile Number"
      name="mobilenumber"
      rules={[
        {
          required: true,
          message: "Please input your Mobile Number!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Create Password"
      name="createpassword"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Confirm Password"
      name="confirmpassword"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Register;
