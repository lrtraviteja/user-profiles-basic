import { useState } from "react";
import UserList from "./components/UserList/UserList";
import { UserProvider, useUsers } from "./context/UserContext";
import "./App.css";
import "spinkit/spinkit.min.css";
import { Modal, Form, Input, Button } from "antd";

function AppContent() {
  const { users, setUsers, loading } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  const showEditModal = (user) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    form.resetFields();
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedUsers = users.map((user) =>
          user.id === editingUser.id ? { ...user, ...values } : user
        );
        setUsers(updatedUsers);
        handleCancel();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <div className="app-container" style={{ backgroundColor: "#00000" }}>
      <h1>User Profiles</h1>
      {loading ? (
        <div
          style={{ border: "none", display: "flex", alignItems: "center", height: "50vh" }}
        >
          <div className="sk-plane"></div>
        </div>
      ) : (
        <UserList onEdit={showEditModal} />
      )}
      <Modal
        title="Edit User"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" name="edit_user_form">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input the name!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please input the email!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true, message: "Please input the phone!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['address', 'street']} label="Street" rules={[{ required: true, message: "Please input the street!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['address', 'suite']} label="Suite" rules={[{ required: true, message: "Please input the suite!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['address', 'city']} label="City" rules={[{ required: true, message: "Please input the city!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['address', 'zipcode']} label="Zipcode" rules={[{ required: true, message: "Please input the zipcode!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="website" label="Website" rules={[{ required: true, message: "Please input the website!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['company', 'name']} label="Company" rules={[{ required: true, message: "Please input the company name!" }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

const App = () => (
  <UserProvider>
    <AppContent />
  </UserProvider>
);

export default App;
