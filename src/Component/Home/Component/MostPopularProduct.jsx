import Images from "../../ImageComponent/Images";
import { Card, Button } from "antd";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


const categories = [
    { id: 1, name: "Whole Wheat Sandwich Bread", img: Images.ProductThumb11, },
    { id: 2, name: "Whole Grain Oatmeal", img: Images.ProductThumb12 },
    { id: 3, name: "Sharp Cheddar Cheese Block", img: Images.ProductThumb13 },
    { id: 4, name: "Organic Baby Spinach", img: Images.ProductThumb14 },
    { id: 5, name: "Organic Spinach Leaves (Fresh Produce)", img: Images.ProductThumb15 },
    { id: 6, name: "Fresh Salmon", img: Images.ProductThumb16 },
    { id: 7, name: "Imported Italian Spaghetti Pasta", img: Images.ProductThumb17 },
    { id: 8, name: "Granny Smith Apples", img: Images.ProductThumb18 },
    { id: 9, name: "Organic 2% Reduced Fat Milk", img: Images.ProductThumb19 },
    { id: 10, name: "Greek Style Plain Yogurt", img: Images.ProductThumb20 },
];

const MostPopularProduct = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

  const handleNext = () => {
    if (startIndex < categories.length - visibleCards) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <h1>Most Popular Products</h1>

        {/* Navigation Buttons */}
        <div style={{ marginBottom: "10px" }}>
          <Button onClick={handlePrevious} disabled={startIndex === 0}>
            <LeftOutlined />
          </Button>
          <Button
            onClick={handleNext}
            disabled={startIndex >= categories.length - visibleCards}
          >
            <RightOutlined />
          </Button>
        </div>
      </div>

      {/* Card Slider */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          overflow: "hidden",
          width: "100%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            transform: `translateX(-${startIndex * 220}px)`, // Slide effect
            transition: "transform 0.5s ease-in-out", // Smooth transition
          }}
        >
          {categories.map((category) => (
            <Card
              key={category.id}
              style={{
                width: "300px",
                textAlign: "center",
                flexShrink: 0,
                background: "white",
              }}
            >
              <img
                src={category.img}
                alt={category.name}
                style={{ width: "250px", height: "250px" }}
              />
              <h3 style={{ fontSize: "20px" }}>{category.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularProduct;
