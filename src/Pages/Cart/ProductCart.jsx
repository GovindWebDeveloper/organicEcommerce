import { useState } from "react";
import { Button, Divider, List, Typography } from "antd";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

const ProductCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://via.placeholder.com/60",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image: "https://via.placeholder.com/60",
      quantity: 1,
    },
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "2em" }}>
      <Typography.Title level={2}>Shopping Cart</Typography.Title>
      <Divider />

      {cartItems.length === 0 ? (
        <Typography.Text>No items in the cart</Typography.Text>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  key={item.id}
                  icon={<MinusOutlined />}
                  onClick={() => decreaseQuantity(item.id)}
                  disabled={item.quantity === 1}
                />,
                <Typography.Text>{item.quantity}</Typography.Text>,
                <Button
                  key={item.id}
                  icon={<PlusOutlined />}
                  onClick={() => increaseQuantity(item.id)}
                />,
                <Button
                  key={item.id}
                  type="text"
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() => removeItem(item.id)}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<img src={item.image} alt={item.name} width={60} />}
                title={item.name}
                description={`$${item.price.toFixed(2)}`}
              />
            </List.Item>
          )}
        />
      )}

      {cartItems.length > 0 && (
        <>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.2em",
              fontWeight: "bold",
            }}
          >
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <Button
            type="primary"
            block
            style={{ marginTop: "1em" }}
            onClick={() => alert("Proceeding to Checkout")}
          >
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default ProductCart;
