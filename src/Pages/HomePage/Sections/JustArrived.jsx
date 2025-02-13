// import Images from "../../../assets/Images/ImageComponent/Images";
import { useEffect, useState } from "react";
import SliderComponent from "../../../Component/Card/CardComponent"; // Ensure this path is correct
import {getMensWearProducts} from "../../../Services/ProductServices"

// const categories = [
//   { id: 1, name: "Whole Wheat Sandwich Bread", img: Images.ProductThumb11 },
//   { id: 2, name: "Whole Grain Oatmeal", img: Images.ProductThumb12 },
//   { id: 3, name: "Sharp Cheddar Cheese Block", img: Images.ProductThumb13 },
//   { id: 4, name: "Organic Baby Spinach", img: Images.ProductThumb14 },
//   { id: 5, name: "Organic Spinach Leaves (Fresh Produce)", img: Images.ProductThumb15 },
//   { id: 6, name: "Fresh Salmon", img: Images.ProductThumb16 },
//   { id: 7, name: "Imported Italian Spaghetti Pasta", img: Images.ProductThumb17 },
//   { id: 8, name: "Granny Smith Apples", img: Images.ProductThumb18 },
//   { id: 9, name: "Organic 2% Reduced Fat Milk", img: Images.ProductThumb19 },
//   { id: 10, name: "Greek Style Plain Yogurt", img: Images.ProductThumb20 },
// ];

const JustArrived = () => {
  const [product, setProduct] =useState([])
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
          try {
            const data = await getMensWearProducts();
            setProduct(data || []); // Ensure data is always an array
          } catch (error) {
            setError("Failed to load products"); // Store error message
            console.error("Error loading products:", error);
          }
        }
    
        fetchData();
  }, []);

  return (
    <div>
      {/* Show error message if API fails */}
      {error ? <p style={{ color: "red" }}>{error}</p> : null}

      {/* Show the slider only if there are products */}
      {product.length > 0 ? (
        <SliderComponent title="Men's Wear" items={product} imageStyle={{ borderRadius: "0px" }} />
      ) : !error ? (
        <p>Loading products...</p> // Show loading message if API is still fetching
      ) : null}
    </div>
  );
};

export default JustArrived;
