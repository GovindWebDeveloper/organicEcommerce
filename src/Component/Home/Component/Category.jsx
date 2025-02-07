import { useState } from "react";
import { Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Images from "../../ImageComponent/Images";

const categories = [
  { id: 1, name: "Fruits & Veges", img: Images.CategoryImage1 },
  { id: 2, name: "Dairy Products", img: Images.CategoryImage2 },
  { id: 3, name: "Bakery Items", img: Images.CategoryImage3 },
  { id: 4, name: "Beverages", img: Images.CategoryImage4 },
  { id: 5, name: "Snacks", img: Images.CategoryImage5 },
  { id: 6, name: "Organic Spices", img: Images.CategoryImage6 },
  { id: 7, name: "Frozen Food", img: Images.CategoryImage7 },
  { id: 8, name: "Grains & Cereals", img: Images.CategoryImage8 },
];

const Category = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 6;

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
        <h1>Category</h1>

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
          width: "90%",
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
                width: "195px",
                textAlign: "center",
                flexShrink: 0,
                background: "none",
              }}
            >
              <img
                src={category.img}
                alt={category.name}
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
              <h3 style={{ fontSize: "20px" }}>{category.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
