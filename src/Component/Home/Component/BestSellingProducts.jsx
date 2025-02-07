import { Card } from "antd";
import Images from "../../ImageComponent/Images";

const products = [
  { id: 1, name: "Whole Wheat Sandwich Bread", img: Images.ProductThumb1, },
  { id: 2, name: "Whole Grain Oatmeal", img: Images.ProductThumb2 },
  { id: 3, name: "Sharp Cheddar Cheese Block", img: Images.ProductThumb3 },
  { id: 4, name: "Organic Baby Spinach", img: Images.ProductThumb4 },
  { id: 5, name: "Organic Spinach Leaves (Fresh Produce)", img: Images.ProductThumb5 },
  { id: 6, name: "Fresh Salmon", img: Images.ProductThumb6 },
  { id: 7, name: "Imported Italian Spaghetti Pasta", img: Images.ProductThumb7 },
  { id: 8, name: "Granny Smith Apples", img: Images.ProductThumb8 },
  { id: 9, name: "Organic 2% Reduced Fat Milk", img: Images.ProductThumb9 },
  { id: 10, name: "Greek Style Plain Yogurt", img: Images.ProductThumb10 },
];

const BestSellingProducts = () => {
  return (
    <div style={{padding:"20px"}}>
      <h1 >Best Selling Products</h1>
      <div
        style={{
          margin: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products.map((product) => (
          <Card hoverable
            key={product.id}
            style={{
              width: "300px",
              textAlign: "center",
              flexShrink: 0,
              background: "white",
              
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{ width: "250px", height: "250px" }}
            />
            <h3 style={{ fontSize: "20px" }}>{product.name}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
