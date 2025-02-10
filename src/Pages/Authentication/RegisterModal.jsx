import { useState } from "react";
import { Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Register from "./Register";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false)
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
        <Register/>
      </Modal>
    </>
  );
};
export default App;
