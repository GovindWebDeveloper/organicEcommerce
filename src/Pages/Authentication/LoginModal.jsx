import { useState } from "react";
import { Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Login from "./Login";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>
        <UserOutlined />
      </Button>
      <Modal
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Login />
        <div>
          Do not have account? <a href="/">Create Account</a>
        </div>
      </Modal>
    </>
  );
};
export default App;
